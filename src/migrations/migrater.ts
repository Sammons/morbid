import * as pg from 'pg';
import * as crypto from 'crypto';
import formatter = require('sql-formatter');
import * as path from 'path';
import * as fs from 'fs';
import * as util from 'util';

const exists = util.promisify(fs.exists);

export interface MigrationConfiguration {
  directory: string;
  historyTable?: string; // default to morbid_migrations
  schema?: string; // default to public
}

export class Migrater {
  constructor(private pool: pg.Pool, private configuration: MigrationConfiguration) {
    if (!this.configuration.schema) { this.configuration.schema = 'public'; }
    if (!this.configuration.historyTable) { this.configuration.historyTable = 'morbid_migrations'; }
    this.configuration.directory = path.resolve(this.configuration.directory);

  }
  async detectMigrations() {
    if (await exists(this.configuration.directory)) {
      const files = await fs.promises.readdir(this.configuration.directory);
      const sqlFiles = files.filter(file => file.endsWith('.sql')).sort(); // character sort
      return sqlFiles.map(filename => path.resolve(this.configuration.directory, filename));
    } else {
      throw new Error(`Migration path ${this.configuration.directory} did not exist`);
    }
  }
  getHash(formatted: string) {
    const hasher = crypto.createHash('sha1');
    hasher.write(formatted);
    return hasher.digest().toString('base64');
  }
  async latest() {
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS ${this.configuration.schema}.${this.configuration.historyTable} (
        sequence serial not null primary key,
        name text not null unique,
        hash text not null,
        contents text not null,
        timestamp timestamp not null default now()
      );
    `);
    const transactionConn = await this.pool.connect();
    try {
      // initialize lock & setup transaction
      await transactionConn.query('select pg_advisory_lock(1314101311141415)');
      await transactionConn.query('begin');
      const result: {
        rows: {
          sequence: number;
          name: string;
          hash: string;
          contents: string;
          timestamp: Date
        }[],
      } = await transactionConn.query(
        `select * from ${this.configuration.schema}.${this.configuration.historyTable} order by sequence asc`
      );
      // index existing migrations
      const existing = new Map<string, string>();
      result.rows.forEach(row => {
        existing.set(row.name, row.hash);
      });
      // run migrations
      const paths = await this.detectMigrations();
      for (let migration of paths) {
        const contents = await fs.promises.readFile(migration);
        const formatted = formatter.format(contents.toString());
        const hash = this.getHash(formatted);
        const name = path.parse(migration).base;
        if (existing.has(name)) {
          if (existing.get(name) !== hash) {
            throw new Error(
              `Migration ${name} has already been run and the on-disk changeset has different contents from what was run previously.`
            );
          } else {
            // do nothing, already run
          }
        } else {
          await transactionConn.query(formatted);
          await transactionConn.query(
            `insert into ${this.configuration.schema}.${this.configuration.historyTable} (name, hash, contents)` +
            ' values ($1, $2, $3)', [migration.split(path.sep).pop(), hash, formatted]
          );
        }
      }
      // release lock & commit
      await transactionConn.query('commit');
    } catch (err) {
      await transactionConn.query('abort');
      throw err;
    } finally {
      await transactionConn.query('select pg_advisory_unlock(1314101311141415)');
      transactionConn.release();
    }
  }
}
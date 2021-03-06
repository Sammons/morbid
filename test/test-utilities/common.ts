import * as pg from 'pg';
import * as setup from '../setup/drop-and-setup-schema';
import { config } from '../test-config';
import { Morbid } from '../../src';
import { Def } from '../samples/sample-morbid-test-output-definition';
const poolCache: { [database: string]: pg.Pool } = {};

export const connect = async (database: string = 'test') => {
  if (poolCache[database]) {
    return await poolCache[database];
  }
  try {
    const pool = new pg.Pool({
      ...config,
      database,
    });
    poolCache[database] = pool;
    pool.on('error' as any, (e: any & { code: any }) => {
      if (e['code'] === '57P01') {
        console.log(`Pool connected to ${database} killed.`);
      } else {
        console.log(`disregarded pool ${database} error during test`, e);
      }
    });
    return poolCache[database];
  } catch (e) {
    throw new Error('Failed to connect: ' + e.message);
  }
};

export const resetTestDatabase = async (testDbName: string) => {
  const masterClient = await connect('postgres');
  const res = await masterClient.query('select * from pg_catalog.pg_database where datname=$1', [testDbName]);
  if (res.rowCount < 1) {
    const escape = pg.Client.prototype.escapeIdentifier;
    const name = escape(testDbName);
    await masterClient.query(`drop database if exists ${name};`, []);
    await masterClient.query(`create database ${name};`, []);
    const testClient = await connect(testDbName);
    await testClient.query(setup.initialize());
  }
};

export const cleanup = async () => {
  try {
    if (poolCache['postgres']) {
      // await poolCache['postgres'].query(
      //   // terminates any connections pg still thinks are doing things
      //   // be sure not to terminate our own pool!
      //   'select pg_terminate_backend(pid) from pg_stat_activity where state = \'idle\' and application_name = \'\' '
      // );
    }
  } catch (e) {
    console.log('failed to terminate idle connections', e);
  }
  await Promise.all(Object.keys(poolCache).map(async db => {
    try {
      await poolCache[db].end().catch(e => null /* doesn't matter */);
      delete poolCache[db];
    } catch (e) {
      console.log('failed to end a pool normally', e);
    }
  }));
};

export interface AccountState {
  kind: number;
  email?: string;
}
export const getTestMorbid = async (database: string) => {
  // example override for account.data shape

  type Customization = {
    // globally override a type
    __override__: {
      bytea: Buffer,
      uuid: string;
    },
    // optionally comandeer the type for a specific
    // column, handy for json columns
    tables: {
      account: {
        data: AccountState,
      },
    },
  };
  const pool = await connect('transaction_test');
  return new Morbid<typeof Def, Customization>(Def, pool);
};
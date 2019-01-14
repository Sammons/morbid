import * as pg from 'pg';
import * as setup from './setup/drop-and-setup-schema';
import { config } from './test-config';
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
    return poolCache[database];
  } catch (e) {
    throw new Error('Failed to connect: ' + e.message);
  }
};

export const resetTestDatabase = async (testDbName: string) => {
  const masterClient = await connect('postgres');
  await masterClient.query(`drop database if exists ${testDbName};`);
  await masterClient.query(`create database ${testDbName};`);
  const testClient = await connect(testDbName);
  await testClient.query(setup.initialize());
};

export const cleanup = async () => {
  try {
    await poolCache['postgres'].query(
      // terminates any connections pg still thinks are doing things
      // be sure not to terminate our own pool!
      'select pg_terminate_backend(pid) from pg_stat_activity where state = \'idle\' and application_name = \'\' '
    );
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
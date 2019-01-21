import * as pg from 'pg';

export const config: pg.PoolConfig = {
  application_name: 'morbid_test',
  idleTimeoutMillis: 100,
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5433,
  user: 'postgres',
  // must have at least 2 or else transaction tests will never work
  min: 2,
  max: 2,
};
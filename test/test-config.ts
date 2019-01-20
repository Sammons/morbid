import * as pg from 'pg';

export const config: pg.PoolConfig = {
  application_name: 'morbid_test',
  idleTimeoutMillis: 100,
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5433,
  user: 'postgres',
  min: 1,
  max: 1,
};
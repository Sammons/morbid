import * as pg from 'pg';

export const config: pg.PoolConfig = {
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
  user: 'postgres',
  min: 1,
  max: 1,
};
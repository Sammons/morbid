import { Morbid } from '../../src';
import * as pg from 'pg';

const morbid = new Morbid({
  pool: new pg.Pool({
    application_name: 'sample_morbid',
    database: 'test',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    min: 1,
    max: 10
  })
});

morbid.extractSchema({
  destinationFile: "../morbid-definition.ts"
});

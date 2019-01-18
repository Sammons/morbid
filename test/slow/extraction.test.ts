import * as M from '../../src/index';
import * as path from 'path';
import { config as creds } from '../test-config';
import { resetTestDatabase } from './test-utils';
import * as cp from 'child_process';
import * as pg from 'pg';

describe('morbid', () => {
  const name = 'morbid-test-output-definition';
  const testOutputFile = path.resolve(__dirname, name);
  test('extracting the test database schemas', async () => {
    const dbName = 'test_extract';
    // make sure db exists
    await resetTestDatabase(dbName);
    // generate the outfile
    await M.Generate({
      destination: testOutputFile,
      pg: new pg.Pool({
        ...creds,
        database: dbName,
      }),
      schemas: ['accounting', 'sys', 'tenant', 'media'],
    });
    // confirm that it compiles
    cp.execSync(`tsc ${testOutputFile}.ts`);
  }, 15000);
});
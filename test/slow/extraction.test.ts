import * as M from '../../src/index';
import * as path from 'path';
import { config as creds } from '../test-config';
import { resetTestDatabase, cleanup } from './test-utils';
import * as cp from 'child_process';
import * as pg from 'pg';

describe('morbid', () => {
  beforeAll(async () => {
    await resetTestDatabase('test_extract');
  });
  afterAll(async () => {
    await cleanup();
  });
  const name = 'morbid-test-output-definition';
  const testOutputFile = path.resolve(__dirname, name);
  test('extracting the test database schemas', async () => {
    // generate the outfile
    await M.Generate({
      destination: testOutputFile,
      pg: new pg.Pool({
        ...creds,
        database: 'test_extract',
      }),
      schemas: ['accounting', 'sys', 'tenant', 'media'],
    });
    // confirm that it compiles
    cp.execSync(`tsc ${testOutputFile}.ts`);
  }, 15000);
});
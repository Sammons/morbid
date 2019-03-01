import { resetTestDatabase, cleanup, connect } from './test-utilities/common';
import * as M from '../src/index';
import * as path from 'path';

describe('basic table builder', async () => {
  beforeAll(async () => {
    await resetTestDatabase('migration_test');
  });
  afterAll(async () => {
    const pool = await connect('migration_test');
    await pool.query('select pg_advisory_unlock_all()');
    await cleanup();
  });
  test('basic migration using sample-migration dir', async () => {
    const pool = await connect('migration_test');
    const migrater = new M.Migrater(pool, {
      directory: path.resolve('test/sample-migration'),
      historyTable: 'morbid_test_migration_history',
    });
    const migrations = await migrater.detectMigrations();
    expect(migrations.map(m => path.parse(m).base)).toMatchObject([
      '00_test.sql',
      '01_test.sql',
      '02_test.sql',
    ]);
    await migrater.latest();
  });
});
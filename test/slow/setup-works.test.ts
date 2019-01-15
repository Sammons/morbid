import { connect, resetTestDatabase, cleanup } from './test-utils';
describe('test setup', () => {
  const wipe = async () => {
    const pool = await connect('postgres');
    await Promise.all(['test_reset_db_works', 'test_drop_database_works'].map(db => {
      return pool.query(`drop database if exists ${db};`);
    }));
    await cleanup();
  };
  beforeAll(async () => {
    await wipe();
  });
  afterAll(async () => {
    await wipe();
  });
  test('that we can connect to postgres database', async () => {
    const connection = await connect('postgres');
    const a = await connection.query('select 1 as c');
    expect(a.rowCount).toBe(1);
    expect(a.rows[0]).toEqual({ c: 1 });
  });
  test('that we can drop the database', async () => {
    const connection = await connect('postgres');
    const failures: Error[] = [];
    await connection.query('create database test_drop_database_works').catch(e => failures.push(e));
    await connection.query('drop database if exists test_drop_database_works').catch(e => failures.push(e));
    expect(failures).toEqual([]);
  });
  test('that we can reset an arbitrary entire database', async () => {
    const connection = await connect('postgres');
    await connection.query('create database test_reset_db_works').catch(e => null /* just want to make sure it exists */);
    await resetTestDatabase('test_reset_db_works');
  });
});
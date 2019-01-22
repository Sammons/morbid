import { cleanup, resetTestDatabase, getTestMorbid } from './test-utilities/common';

describe('transactions', () => {
  beforeAll(async () => {
    await resetTestDatabase('transaction_test');
  });
  beforeEach(async () => {
    const morbid = await getTestMorbid('transaction_test');
    await morbid.tables.account.deleteAll().run();
  });
  afterAll(async () => {
    await cleanup();
  });
  test('basic commit', async () => {
    const morbid = await getTestMorbid('transaction_test');
    const trx = await morbid.startTransaction();
    await morbid.tables.account.insert({
      data: { kind: 1 },
      label: 'test',
    }).run(trx);
    const insideTrxRows = await morbid.tables.account.select('id').run(trx);
    expect(insideTrxRows.length).toBe(1);
    const outsideTrxRows = await morbid.tables.account.select('id').run();
    expect(outsideTrxRows.length).toBe(0);
    await trx.commit();
    const afterTrxRows = await morbid.tables.account.select('id').run();
    expect(afterTrxRows.length).toBe(1);
    try {
      // cannot reuse a completed transaction
      await morbid.tables.account.select('id').run(trx);
      throw new Error('should have failed');
    } catch (err) {
      expect(err.message).toMatch(/ID is already completed/);
    }
    // these should have no effect
    await trx.abort();
    await trx.commit();
  });

  test('basic abort', async () => {
    const morbid = await getTestMorbid('transaction_test');
    const trx = await morbid.startTransaction();
    await morbid.tables.account.insert({
      data: { kind: 1 },
      label: 'test',
    }).run(trx);
    const insideTrxRows = await morbid.tables.account.select('id').run(trx);
    expect(insideTrxRows.length).toBe(1);
    expect(await trx.abort()).toBe(true);
    expect(await trx.commit()).toBe(false); // should have no effect, later maybe a diagnostic error
    const afterTrxRows = await morbid.tables.account.select('id').run();
    expect(afterTrxRows.length).toBe(0);
    try {
      // cannot reuse a completed transaction
      await morbid.tables.account.select('id').run(trx);
      throw new Error('should have failed');
    } catch (err) {
      expect(err.message).toMatch(/ID is already completed/);
    }
    // these should have no effect
    await trx.abort();
    await trx.commit();
  });

  test('piping with a transaction', async () => {
    const { tables: db, startTransaction } = await getTestMorbid('transaction_test');
    const trx = await startTransaction();
    await db.account.insert([{
      data: { kind: 1 },
      label: 'something',
    }, {
      data: { kind: 2 },
      label: 'else',
    }]).run(trx);
    const inserted = db.account.select().stream(trx);
    const data = [] as any[];
    inserted.on('data', chunk => {
      data.push(chunk);
    });
    await new Promise((resolve, reject) => {
      inserted.on('close', resolve);
      inserted.on('error', reject);
    });
    expect(await trx.commit()).toBe(true);
    expect(data.length).toBe(2);
  });

  test('failure during piping with a transaction', async () => {
    const { tables: db, startTransaction } = await getTestMorbid('transaction_test');
    const trx = await startTransaction();
    await db.account.insert([{
      data: { kind: 1 },
      label: 'something',
    }, {
      data: { kind: 2 },
      label: 'else',
    }]).run(trx);
    const inserted = db.account.select().where({ id: 'garbage' }).stream(trx);
    const data = [] as any[];
    inserted.on('data', chunk => {
      data.push(chunk);
    });
    await new Promise((resolve, reject) => {
      inserted.on('close', resolve);
      inserted.on('error', resolve);
    });
    expect(await trx.commit()).toBe(false);
    expect(await trx.abort()).toBe(true);
    expect(data.length).toBe(0);
  });
});
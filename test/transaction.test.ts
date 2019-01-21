import { Morbid } from '../src/index';
import { Def } from './samples/sample-morbid-test-output-definition';
import { connect, cleanup, resetTestDatabase } from './slow/test-utils';

// example override for account.data shape
interface AccountState {
  kind: number;
  email?: string;
}

type Customization = {
  // globally override a type
  __override__: {
    bytea: Buffer,
    uuid: string;
  },
  // optionally comandeer the type for a specific
  // column, handy for json columns
  tables: {
    account: {
      data: AccountState,
    },
  },
};

describe.only('transactions', () => {
  beforeAll(async () => {
    await resetTestDatabase('transaction_test');
  });
  beforeEach(async () => {
    const pool = await connect('transaction_test');
    const morbid = new Morbid<typeof Def, Customization>(Def, pool);
    await morbid.tables.account.deleteAll().run();
  });
  afterAll(async () => {
    await cleanup();
  });
  test('basic commit', async () => {
    const pool = await connect('transaction_test');
    const morbid = new Morbid<typeof Def, Customization>(Def, pool);
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
    const pool = await connect('transaction_test');
    const morbid = new Morbid<typeof Def, Customization>(Def, pool);
    const trx = await morbid.startTransaction();
    await morbid.tables.account.insert({
      data: { kind: 1 },
      label: 'test',
    }).run(trx);
    const insideTrxRows = await morbid.tables.account.select('id').run(trx);
    expect(insideTrxRows.length).toBe(1);
    await trx.abort();
    await trx.commit(); // should have no effect, later maybe a diagnostic error
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
});
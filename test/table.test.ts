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

describe('table wrapper', () => {
  beforeAll(async () => {
    await resetTestDatabase('table_test');
  });
  afterAll(async () => {
    await cleanup();
  });
  test('basic table usages', async () => {
    const pool = await connect('table_test');
    const { tables: db } = new Morbid<typeof Def, Customization>(Def, pool);
    const [{ id }] = await db.account.insert({
      data: {
        kind: 1,
      },
      label: 'test',
    }).returning('id').run();
    await db.account.update({
      id: id,
    }).set({
      data: { kind: 1 },
    });
    const rows = await db.account.delete({
      id: id,
    }).returning('id').run();
    expect(rows.length).toBe(1);
    const res = await db.account.deleteAll().returning('id').run();
    expect(res.length).toBe(0);
  });
  test('select with a bad id, has useful stack', async () => {
    const pool = await connect('table_test');
    const { tables: db } = new Morbid<typeof Def, Customization>(Def, pool);
    try {
      const t = () => {
        return db.account.select().where({
          id: '123',
        }).run();
      };
      await t();
    } catch (e) {
      expect(e.message).toBe('invalid input syntax for type uuid: \"123\"');
      const lines = e.stack.split('\n');
      lines.pop();// throw out the .nextTick always at the end
      const shouldBeTFunc = lines.pop(); // the lambda declared in this function
      expect(shouldBeTFunc.trim()).toMatch(/.t\s/);
    }
  });
});
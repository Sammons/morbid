import { Morbid } from '../src/index';
import { Def } from './samples/sample-morbid-test-output-definition';
import { connect, resetTestDatabase, cleanup } from './slow/test-utils';

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

describe.skip('table wrapper', () => {
  beforeAll(async () => {
    await resetTestDatabase('table_test');
  });
  afterAll(async () => {
    await cleanup();
  });
  test('basic select usages', async () => {
    const pool = await connect('table_test');
    const { tables: db } = new Morbid<typeof Def, Customization>(Def, pool);
    await db.account.insert({
      data: {
        kind: 1,
      },
      label: 'test',
    }).run();
    const rows = await db.account.deleteAll().returning('id').run();
    expect(rows.length).toBe(1);
  });
});
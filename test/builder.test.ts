import { Morbid } from '../src/index';
import { Def } from './samples/sample-morbid-test-output-definition';
import { connect, cleanup, resetTestDatabase } from './test-utilities/common';

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

describe.only('table wrapper', () => {
  beforeAll(async () => {
    await resetTestDatabase('table_test');
  });
  afterAll(async () => {
    await cleanup();
  });
  test('basic table usages', async () => {
    const pool = await connect('table_test');
    const { builder: db } = new Morbid<typeof Def, Customization>(Def, pool);
    const a = db
      .from('account_contact')
      .innerJoin('contact', 'c2').on('c2', 'id', '=', 'c2', 'id')
      .innerJoin('account_event').on('account_event', 'id', 'ilike', 'c2', 'id')
      .where({
        account_event: {
          id: ['1', '2'],
        },
        c2: { id: ['2'] },
      });
    console.log(a.compile().text);
  });
});
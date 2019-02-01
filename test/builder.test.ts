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
  test('a select with inner joins and a where clause', async () => {
    const pool = await connect('table_test');
    const { builder: db } = new Morbid<typeof Def, Customization>(Def, pool);
    const a = db
      .from('account_contact')
      .innerJoin('contact', 'c2').on('account_contact', 'id', '=', 'c2', 'id')
      .innerJoin('account_event').on('account_event', 'id', 'ilike', 'c2', 'id')
      .where({
        account_event: {
          id: ['1', '2'],
        },
        c2: {
          id: ['2'],
          email: null as any, // TODO: maybe test with a nullable column somewhere
        },
      });
    const sql = a.compile();
    expect(sql.text).toBe(
      'select * from "accounting"."account_contact" as "account_contact" ' +
      'inner join "accounting"."contact" as "c2" on "account_contact"."id" = "c2"."id" ' +
      'inner join "accounting"."account_event" as "account_event" on "account_event"."id" ilike "c2"."id" ' +
      'where "account_event"."id" in ($1, $2) and ' +
      '"c2"."id" in ($3) and ' +
      '"c2"."email" is null'
    );
    expect(sql.values).toEqual(['1', '2', '2']);
  });
  test('a select with a where clause', async () => {
    const pool = await connect('table_test');
    const { builder: db } = new Morbid<typeof Def, Customization>(Def, pool);
    const a = db.from('invoice').where({
      invoice: {
        id: '1',
        recipient: ['a', 'b'],
        created_by: null as any,
      },
    }).compile();
    expect(a.text).toBe(
      'select * from "accounting"."invoice" as "invoice" ' +
      'where "invoice"."id" = $1 ' +
      'and "invoice"."recipient" in ($2, $3) ' +
      'and "invoice"."created_by" is null'
    );
    expect(a.values).toEqual(['1', 'a', 'b']);
  });
});
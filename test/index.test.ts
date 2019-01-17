import { Morbid } from '../src/index';
import { Def } from './samples/sample-morbid-test-output-definition';
import * as I from '../src/inference/definition-inference';

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

describe.only('basic table builder', async () => {
  test('basic select usages', async () => {
    const { tables: db } = new Morbid<typeof Def, Customization>(Def, {});
    expect(db.account.select().compile().text).toBe('select * from "account";');
    expect(db.account.select('id').compile().text).toBe('select "id" from "account";');
    expect(db.account.select('id', 'data').compile().text).toBe('select "id", "data" from "account";');
    expect(db.account.select('id', 'data').where({
      data: null,
      id: '123',
    }).compile()).toMatchObject({
      values: ['123'],
      text: 'select "id", "data" from "account" where "data" is null and "id" = $1;',
    });
    expect(db.account.select('id', 'data').where({
      data: null,
      id: ['123', '234'],
    }).compile()).toMatchObject({
      values: ['123', '234'],
      text: 'select "id", "data" from "account" where "data" is null and "id" in ($1, $2);',
    });
  });


});
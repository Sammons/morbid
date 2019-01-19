import { Morbid } from '../src/index';
import { Def } from './samples/sample-morbid-test-output-definition';
import * as pg from 'pg';

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

describe('basic table builder', async () => {
  test('basic select usages', async () => {
    const { tables: db } = new Morbid<typeof Def, Customization>(Def, new pg.Pool({}));
    expect(db.account.select().compile().text).toBe('select * from "accounting"."account";');
    expect(db.account.select('id').compile().text).toBe('select "id" from "accounting"."account";');
    expect(db.account.select('id', 'data').compile().text).toBe('select "id", "data" from "accounting"."account";');
    expect(db.account.select('id', 'data').where({
      data: null as any, // TODO: make data actually nullable, or use a table that has a nullable column for this
      id: '123',
    }).compile()).toMatchObject({
      values: ['123'],
      text: 'select "id", "data" from "accounting"."account" where "data" is null and "id" = $1;',
    });
    expect(db.account.select('id', 'data').where({
      data: null as any,
      id: ['123', '234'],
    }).compile()).toMatchObject({
      values: ['123', '234'],
      text: 'select "id", "data" from "accounting"."account" where "data" is null and "id" in ($1, $2);',
    });
  });
  test('basic delete usages', async () => {
    const { tables: db } = new Morbid<typeof Def, Customization>(Def, new pg.Pool({}));
    expect(db.account.deleteAll().compile().text).toBe('delete from "accounting"."account";');
    expect(db.account.delete({
      id: '123',
      label: ['1', '2'],
    }).compile()).toMatchObject({
      text: 'delete from "accounting"."account" where "id" = $1 and "label" in ($2, $3);',
      values: ['123', '1', '2'],
    });
    expect(db.account.delete({
      data: null as any,
      id: '123',
    }).returning('data', 'id').compile()).toMatchObject({
      values: ['123'],
      text: 'delete from "accounting"."account" where "data" is null and "id" = $1 returning "data", "id";',
    });
  });
  test('basic update usages', async () => {
    const { tables: db } = new Morbid<typeof Def, Customization>(Def, new pg.Pool({}));
    expect(db.account
      .update({
        id: '123',
      }).set({
        data: { kind: 1, email: 'test@test.io' },
      }).returning('label', 'id')
      .compile()
    ).toMatchObject({
      values: [{ kind: 1, email: 'test@test.io' }, '123'],
      text: 'update "accounting"."account" set "data" = $1 where "id" = $2 returning "label", "id";',
    });
    expect(db.account
      .updateAll()
      .set({
        data: { kind: 1, email: 'test@test.io' },
      })
      .returning('label', 'id')
      .compile()
    ).toMatchObject({
      values: [{ kind: 1, email: 'test@test.io' }],
      text: 'update "accounting"."account" set "data" = $1 returning "label", "id";',
    });
    expect(db.account
      .updateAll()
      .set({
        data: { kind: 1, email: 'test@test.io' },
      })
      .compile()
    ).toMatchObject({
      values: [{ kind: 1, email: 'test@test.io' }],
      text: 'update "accounting"."account" set "data" = $1;',
    });
    expect(db.account
      .update({
        id: '123',
      })
      .set({
        data: { kind: 1, email: 'test@test.io' },
      })
      .compile()
    ).toMatchObject({
      values: [{ kind: 1, email: 'test@test.io' }, '123'],
      text: 'update "accounting"."account" set "data" = $1 where "id" = $2;',
    });
  });
  test('basic insert usages', async () => {
    const { tables: db } = new Morbid<typeof Def, Customization>(Def, new pg.Pool({}));
    expect(db.account
      .insert({
        id: '123',
        data: { kind: 1 },
        label: '',
      }).returning('label', 'id')
      .compile()
    ).toMatchObject({
      values: ['123', { kind: 1 }, ''],
      text: 'insert into "accounting"."account" ("id", "data", "label") values ($1, $2, $3) returning "label", "id";',
    });
    expect(db.account
      .insert([{} as any, {
        id: '123',
        data: { kind: 1 },
        label: '',
      }]).returning('label', 'id')
      .compile()
    ).toMatchObject({
      values: ['123', { kind: 1 }, ''],
      text: 'insert into "accounting"."account" ("id", "data", "label")' +
        ' values (DEFAULT, DEFAULT, DEFAULT), ($1, $2, $3)' +
        ' returning "label", "id";',
    });
    expect(db.account
      .insert([{} as any, {
        id: '123',
        data: { kind: 1 },
        label: '',
      }])
      .compile()
    ).toMatchObject({
      values: ['123', { kind: 1 }, ''],
      text: 'insert into "accounting"."account" ("id", "data", "label")' +
        ' values (DEFAULT, DEFAULT, DEFAULT), ($1, $2, $3);',
    });
  });

});
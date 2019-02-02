import { cleanup, resetTestDatabase, getTestMorbid } from '../../test-utilities/common';

describe.only('table wrapper', () => {
  // should be unique to this file
  const testDatabase = 'select_builder_test';
  const getMorbid = () => getTestMorbid(testDatabase);
  beforeAll(async () => {
    await resetTestDatabase(testDatabase);
  });
  afterAll(async () => {
    const { builder: db, tables: tb } = await getMorbid();
    await tb.contact.deleteAll().run();
    await cleanup();
  });
  test('select all of a specific column from an aliased table', async () => {
    const { builder: db, tables: tb } = await getMorbid();
    await tb.contact.insert([{
      email: 'test@sammons.io',
      data: {},
    }]).run();
    const result = await db.from('contact', 'c')
      .select({
        c: ['id', 'email'],
      }).run();
    expect(result.length).toBe(1);
    expect(result[0]).toMatchObject({
      c: {
        id: expect.stringMatching(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/),
        email: 'test@sammons.io',
      },
    });
  });
  test('select using an alias', async () => {
    const { builder: db } = await getMorbid();
    const result = db.from('contact', 'c').where({ c: { email: ['1'] } }).compile();
    expect(result.text).toBe('select * from "accounting"."contact" as "c" where "c"."email" in ($1)');
    expect(result.values).toEqual(['1']);
  });
  test('a select with inner joins and a where clause', async () => {
    const { builder: db } = await getMorbid();
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
    const { builder: db } = await getMorbid();
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
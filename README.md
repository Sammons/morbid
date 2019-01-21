![build-status](https://travis-ci.org/Sammons/morbid.svg?branch=master)

![branches](./coverage/badge-branches.svg)
![functions](./coverage/badge-functions.svg)
![lines](./coverage/badge-lines.svg)
![statements](./coverage/badge-statements.svg)

This project is a work in progress. At this point in time it is not a production ready solution. Feel free to pitch in, just open a PR!

Take a look at the tests for examples.

# Morbid

A schema-aware typescript querybuilder for postgres. Other morbid flavors may come to exist, but will be in different repositories.

## Latest Features / Quickstart:

### Extraction

```typescript
import {Generate} from 'morbid'
import {Pool} from 'pg';

await M.Generate({
  // will have .ts added when it is generated.
  destination: 'output-definition',
  pg: new Pool({
    ...creds,
    database: 'test_extract',
  }),
  schemas: ['accounting', 'sys', 'tenant', 'media']
});
```

Then import that extracted definition for the rest of the features.

### Direct table access

If we are accessing the "accounting" table with columns 'id', 'data', 'label', then we do the following:

```typescript
import {Morbid} from 'morbid'
import {Def} from './output-definition.ts'

type Customization = {
  // globally override a type
  __override__: {
    uuid: string;
  },
  // optionally comandeer the type for a specific
  // column, handy for json columns
  tables: {
    account: {
      data: { email: string },
    },
  },
};

const morbid = new Morbid<typeof Def, Customization>(Def, new Pool({
    ...creds,
    database: 'test_extract',
  }));

morbid.tables.accounting.select().run();
morbid.tables.accounting.select().where({ id: 1 }).run();
morbid.tables.accounting.select('id', 'data', 'label').where({ id: 1 }).run();
morbid.tables.accounting.insert(...values...).run();
morbid.tables.accounting.insert(...values...).returning('id', 'data', ... ).run();
morbid.tables.accounting.delete({ id: [1, 2, 3] }).returning('id').run();
morbid.tables.accounting.deleteAll().returning('id').run();
morbid.tables.accounting.update({ id: [1, 2, 3] }).set({ label: 'some label'}).returning('id').run();
morbid.tables.accounting.updateAll().set({ label: 'some label'}).returning('id').run();
```

### Transactions 

The `.run` calls above accept an optional transaction object:

```typescript

const trx = await morbid.startTransaction(); // actually issues the BEGIN statement
const trx2 = await morbid.startTransaction({ isolation: 'serializable' }); // optionally set the isolation level

await morbid.tables.accounting.select().run(trx);

await trx.commit(); // commit, finalize changes. Does nothing if already aborted/committed
await trx.abort(); // cancel, rollback changes. Does nothing if already aborted/committed

morbid.tables.accounting.select().run(trx1); // throws an error now that the transaction is completed
```

Note that this means transactions must be aborted/committed if they did not fail. Later options may be introduced to provide monitoring / auto-aborting after a period of time. A trx.scope(() => {/* when this finishes complete */}) feature may be added later but is not considered the best pattern.

Note also it should be considered safe for a web application to automatically .commit at the end of every request, because calling .commit on an aborted or committed transaction is a no-op.

## What's coming next:

- free form query building
- chainable relationships for direct table access. E.g. 
```typescript
await morbid.tables
  .accounting.join
  .invoices
  .where({
    accounting: { whereclause }
    invoices: { whereclause }
  })
  .run()
```


## Attributions

Knex.js serves as a great example of both success and gaps. It deserves kudos for power, but Morbid strives to be even more intuitive and much more typesafe.

## Questions, Issues

Just open a github issue.

## Authors

- Sammons (creator)

## Why is this morbid?

- All the living names were taken, and database humor *is* morbid.

## Potential Features (Dream big right?)

Things that are large efforts and slated for.... one day. If you want to know how to approach these, please ask.

* Have a way to flag queries that are not cross-database compatible.
* Dynamic column constraint verification / coercion - e.g. provide an option to substring strings that exceed a column width.
* Query profiling? We should be able to output explain metrics and usage reports to a file.
* Query optimization? We should be able to use profiling output to internally optimize queries.
* Dashboard of queries executed, counts, data return sizes, usage location, performance? We should be able to aggregate data and provide a dashboard for developers that helps identify problem queries and in general give insights that are otherwise impossible to get.

## License

MIT - will put the whole license in here sooner or later. Use as you like but the author is not liable.

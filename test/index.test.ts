import { Morbid } from '../src/index';
import { Def } from './samples/sample-morbid-test-output-definition';
import * as I from '../src/inference/definition-inference';

type Customization = {
  // globally override a type
  __override__: {
    bytea: Buffer,
  },
  // optionally comandeer the type for a specific
  // column, handy for json columns
  tables: {
    account: {
      data: {
        a: number,
      },
    },
  },
};

describe('basic table builder', () => {
  const client = new Morbid<typeof Def, Customization>(Def, {});

  const s = client.tables.account.set({
    data: {
      a: 2,
    },
  });

});
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

describe('basic table builder', async () => {
  const { tables: db } = new Morbid<typeof Def, Customization>(Def, {});
  const s = await db.account.set(
    {
      data: {
        kind: 2,
      },
    })
    .returning('data')
    .run();

});
import { Morbid } from '../src/index';
import { Def } from './samples/sample-morbid-test-output-definition';
import * as I from '../src/inference/definition-inference';
describe('basic table builder', () => {
  const client = new Morbid(Def, {});
  const t: I.GetSchemas<typeof Def>;
  const c: I.GetTableOrViewType<
    typeof Def['schemas']['media'],
    'media_participant'
  >;
  const s = client.tables.account.set({

  });

});
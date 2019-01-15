import * as I from '../inference/definition-inference';


export class MorbidTableClient<T = any, TableName = any> {
  constructor(
    private table: I.AnyTableOrView
  ) { }
  // I.GetTableOrViewType<I.InferSchema<T, {}>, TableName>

  set(value: I.GetTableOrViewType<T['schemas'][string], TableName>) { }
}
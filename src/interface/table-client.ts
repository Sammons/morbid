import * as I from '../inference/definition-inference';


export class MorbidTableClient<T, C, TableName extends string = any> {
  constructor(
    private table: I.AnyTableOrView
  ) { }

  set(value: I.SchemalessUpdateLiteral<T, C, TableName>) {
    return this;
  }
  where(value: I.SchemalessWhereLiteral<T, C, TableName>) {
    return this;
  }
}
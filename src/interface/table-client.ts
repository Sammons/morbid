import * as I from '../inference/definition-inference';
import { MorbidTableWriteClient } from './table-write-client';
import { MorbidTableReadClient } from './table-read-client';

export class MorbidTableClient<T, C, TableName extends string = any, Result = void> {
  constructor(private table: I.AnyTableOrView) { }
  set(value: I.SchemalessUpdateLiteral<T, C, TableName>) {
    return this as any as MorbidTableWriteClient<T, C, TableName, Result>;
  }
  select() {
    return this as any as MorbidTableReadClient<T, C, TableName, Result & I.TableReturnShape<T, C, TableName>>;
  }
}
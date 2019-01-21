import * as I from '../inference/definition-inference';
import { MorbidTableUpdateClient } from './table/update';
import { MorbidTableReadClient } from './table/read';
import { MorbidTableDeleteClient } from './table/delete';
import { MorbidTableInsertClient } from './table/insert';
import { MorbidPGClientTracker } from './client-tracker';

export class MorbidTableClientRoot<T, C, TableName extends string = any, Result = void> {
  constructor(
    private clientTracker: MorbidPGClientTracker,
    private table: I.AnyTableOrView & { schema: string }
  ) { }
  update(where: I.SchemalessWhereLiteral<T, C, TableName>) {
    return new MorbidTableUpdateClient(
      this.clientTracker, this.table, where
    ) as any as MorbidTableUpdateClient<
      T,
      C,
      TableName,
      never
    >;
  }
  updateAll() {
    return new MorbidTableUpdateClient(
      this.clientTracker, this.table
    ) as any as MorbidTableUpdateClient<
      T,
      C,
      TableName,
      never
    >;
  }
  insert<V extends I.TableInsertShape<T, C, TableName>>(value: V | V[]) {
    return new MorbidTableInsertClient(
      this.clientTracker, this.table, Array.isArray(value) ? value : [value]
    ) as any as MorbidTableInsertClient<
      T,
      C,
      TableName,
      never
    >;
  }
  delete(where: I.SchemalessWhereLiteral<T, C, TableName>) {
    return new MorbidTableDeleteClient(
      this.clientTracker, this.table, where
    ) as any as MorbidTableDeleteClient<
      T,
      C,
      TableName,
      never
    >;
  }
  deleteAll() {
    return new MorbidTableDeleteClient(
      this.clientTracker, this.table
    ) as any as MorbidTableDeleteClient<
      T,
      C,
      TableName,
      never
    >;
  }
  select<S extends I.InferTableOrViewColumnNamesWithoutSchema<T, TableName>>(...s: S[]) {
    return new MorbidTableReadClient(
      this.clientTracker, this.table, s
    ) as any as MorbidTableReadClient<
      T,
      C,
      TableName,
      Pick<I.TableShape<T, C, TableName>, S>
    >;
  }
}
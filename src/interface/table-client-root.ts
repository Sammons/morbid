import * as I from '../inference/definition-inference';
import { MorbidTableUpdateClient } from './table-update-client';
import { MorbidTableReadClient } from './table-read-client';
import * as pg from 'pg';

export class MorbidTableClientRoot<T, C, TableName extends string = any, Result = void> {
  constructor(private pool: pg.Pool, private table: I.AnyTableOrView) { }
  update(value: I.SchemalessUpdateLiteral<T, C, TableName>) {
    return this as any as MorbidTableUpdateClient<T, C, TableName, Result>;
  }
  insert<V extends I.TableShape<T, C, TableName>>(value: V | V[]) {

  }
  delete(value: I.SchemalessWhereLiteral<T, C, TableName>) {

  }
  select<S extends I.InferTableOrViewColumnNamesWithoutSchema<T, TableName>>(...s: S[]) {
    return new MorbidTableReadClient(this.pool, this.table.name, s) as any as MorbidTableReadClient<
      T,
      C,
      TableName,
      Pick<I.TableShape<T, C, TableName>, S>
    >;
  }
}
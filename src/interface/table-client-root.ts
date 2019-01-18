import * as pg from 'pg';
import * as I from '../inference/definition-inference';
import { MorbidTableUpdateClient } from './table/update';
import { MorbidTableReadClient } from './table/read';
import { MorbidTableDeleteClient } from './table/delete';
import { MorbidTableInsertClient } from './table/insert';

export class MorbidTableClientRoot<T, C, TableName extends string = any, Result = void> {
  constructor(private pool: pg.Pool, private table: I.AnyTableOrView & { schema: string }) { }
  update(where: I.SchemalessWhereLiteral<T, C, TableName>) {
    return new MorbidTableUpdateClient(this.pool, this.table, where) as any as MorbidTableUpdateClient<
      T,
      C,
      TableName,
      never
    >;
  }
  updateAll() {
    return new MorbidTableUpdateClient(this.pool, this.table) as any as MorbidTableUpdateClient<
      T,
      C,
      TableName,
      never
    >;
  }
  insert<V extends I.TableInsertShape<T, C, TableName>>(value: V | V[]) {
    return new MorbidTableInsertClient(this.pool, this.table, Array.isArray(value) ? value : [value]) as any as MorbidTableInsertClient<
      T,
      C,
      TableName,
      never
    >;
  }
  delete(where: I.SchemalessWhereLiteral<T, C, TableName>) {
    return new MorbidTableDeleteClient(this.pool, this.table, where) as any as MorbidTableDeleteClient<
      T,
      C,
      TableName,
      never
    >;
  }
  deleteAll() {
    return new MorbidTableDeleteClient(this.pool, this.table) as any as MorbidTableDeleteClient<
      T,
      C,
      TableName,
      never
    >;
  }
  select<S extends I.InferTableOrViewColumnNamesWithoutSchema<T, TableName>>(...s: S[]) {
    return new MorbidTableReadClient(this.pool, this.table, s) as any as MorbidTableReadClient<
      T,
      C,
      TableName,
      Pick<I.TableShape<T, C, TableName>, S>
    >;
  }
}
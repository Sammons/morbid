import * as pg from 'pg';
import * as I from '../../inference/definition-inference';
import { ConstructDeleteFromTable } from '../../sql-construction/table/delete';
import { Run } from '../run';

export class MorbidTableDeleteClient<T, C, TableName extends string = any, Result = void> {
  constructor(
    private pool: pg.Pool,
    private table: I.AnyTableOrView & { schema: string },
    private where?: {},
    private returningValue?: string[]
  ) { }
  returning<S extends I.InferTableOrViewColumnNamesWithoutSchema<T, TableName>>(...returning: S[]) {
    return new MorbidTableDeleteClient(
      this.pool,
      this.table,
      this.where,
      returning
    ) as any as MorbidTableDeleteClient<
      T,
      C,
      TableName,
      Pick<I.TableShape<T, C, TableName>, S>
    >;
  }
  compile() {
    const construction = ConstructDeleteFromTable({
      returning: this.returningValue,
      table: this.table.name,
      schema: this.table.schema,
      where: this.where,
    });
    return {
      text: construction.text,
      values: construction.bindings,
    };
  }
  run = () => Run<Result>(this.pool, this.compile());
}
import * as pg from 'pg';
import * as I from '../../inference/definition-inference';
import { ConstructInsertIntoTable } from '../../sql-construction/table/insert';

export class MorbidTableInsertClient<T, C, TableName extends string = any, Result = void> {
  constructor(
    private pool: pg.Pool,
    private table: I.AnyTableOrView,
    private value?: {}[],
    private returningValue?: string[]
  ) { }
  returning<S extends I.InferTableOrViewColumnNamesWithoutSchema<T, TableName>>(...returning: S[]) {
    return new MorbidTableInsertClient(
      this.pool,
      this.table,
      this.value,
      returning
    ) as any as MorbidTableInsertClient<
      T,
      C,
      TableName,
      Pick<I.TableShape<T, C, TableName>, S>
    >;
  }
  compile() {
    const construction = ConstructInsertIntoTable({
      returning: this.returningValue,
      table: this.table.name,
      values: this.value,
    });
    return {
      text: construction.text,
      values: construction.bindings,
    };
  }
  async run(): Promise<Result[]> {
    const result = await this.pool.query(this.compile());
    return result.rows;
  }
}
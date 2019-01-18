import * as pg from 'pg';
import * as I from '../../inference/definition-inference';
import { ConstructUpdateTable } from '../../sql-construction/table/update';

export class MorbidTableUpdateClient<T, C, TableName extends string = any, Result = void> {
  constructor(
    private pool: pg.Pool,
    private table: I.AnyTableOrView & { schema: string },
    private where?: { [key: string]: (number | string | null)[] | (number | string | null) },
    private value?: {},
    private returningValue?: string[]
  ) { }
  set(value: I.OneOrMore<I.TableShape<T, C, TableName>>): MorbidTableUpdateClient<T, C, TableName, Result> {
    return new MorbidTableUpdateClient(
      this.pool,
      this.table,
      this.where,
      value,
      this.returningValue
    );
  }
  returning<S extends I.InferTableOrViewColumnNamesWithoutSchema<T, TableName>>(...returning: S[]) {
    return new MorbidTableUpdateClient(
      this.pool,
      this.table,
      this.where,
      this.value,
      returning
    ) as any as MorbidTableUpdateClient<
      T,
      C,
      TableName,
      Pick<I.TableShape<T, C, TableName>, S>
    >;
  }
  compile() {
    const construction = ConstructUpdateTable({
      set: this.value,
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
  async run(): Promise<Result[]> {
    const result = await this.pool.query(this.compile());
    return result.rows;
  }
}
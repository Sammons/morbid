import * as I from '../inference/definition-inference';
import * as pg from 'pg';
import { ConstructSelectFromTable } from '../sql-construction/construct-select-from-table';
export class MorbidTableReadClient<T, C, TableName extends string = any, Result = void> {
  constructor(
    private pool: pg.Pool,
    private table: TableName,
    private selections: string[],
    private whereValue?: { [key: string]: (number | string | null)[] | (number | string | null) }
  ) { }
  where(value: I.SchemalessWhereLiteral<T, C, TableName>) {
    return new MorbidTableReadClient(
      this.pool,
      this.table,
      this.selections,
      value
    );
  }
  compile() {
    const construction = ConstructSelectFromTable({
      selections: this.selections,
      table: this.table,
      where: this.whereValue,
    });
    return {
      text: construction.text,
      values: construction.bindings,
    };
  }
  async run() {
    const result = await this.pool.query(this.compile());
    return result.rows;
  }
}
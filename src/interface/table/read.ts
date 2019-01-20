import * as I from '../../inference/definition-inference';
import * as pg from 'pg';
import { ConstructSelectFromTable } from '../../sql-construction/table/select';
import { Run } from '../run';

export class MorbidTableReadClient<T, C, TableName extends string = any, Result = void> {
  constructor(
    private pool: pg.Pool,
    private table: I.AnyTableOrView & { schema: string },
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
      table: this.table.name,
      schema: this.table.schema,
      where: this.whereValue,
    });
    return {
      text: construction.text,
      values: construction.bindings,
    };
  }
  run = () => Run<Result>(this.pool, this.compile());
}
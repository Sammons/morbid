import * as I from '../../inference/definition-inference';
import { ConstructSelectFromTable } from '../../sql-construction/table/select';
import { Run } from '../run';
import { MorbidPGClientTracker } from '../client-tracker';
import { MorbidTransaction } from '../transaction';

export class MorbidTableReadClient<T, C, TableName extends string = any, Result = void> {
  constructor(
    private clientTracker: MorbidPGClientTracker,
    private table: I.AnyTableOrView & { schema: string },
    private selections: string[],
    private whereValue?: { [key: string]: (number | string | null)[] | (number | string | null) }
  ) { }
  where(value: I.SchemalessWhereLiteral<T, C, TableName>) {
    return new MorbidTableReadClient(
      this.clientTracker,
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
  run = (transaction?: MorbidTransaction) => Run<Result>({
    clientTracker: this.clientTracker,
    query: this.compile(),
    transaction,
  })
}
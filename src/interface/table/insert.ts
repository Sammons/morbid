import * as I from '../../inference/definition-inference';
import { ConstructInsertIntoTable } from '../../sql-construction/table/insert';
import { Run } from '../execution/run';
import { MorbidPGClientTracker } from '../client-tracker';
import { MorbidTransaction } from '../transaction';

export class MorbidTableInsertClient<T, C, TableName extends string = any, Result = void> {
  constructor(
    private clientTracker: MorbidPGClientTracker,
    private table: I.AnyTableOrView & { schema: string },
    private value?: {}[],
    private returningValue?: string[]
  ) { }
  returning<S extends I.InferTableOrViewColumnNamesWithoutSchema<T, TableName>>(...returning: S[]) {
    return new MorbidTableInsertClient(
      this.clientTracker,
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
      schema: this.table.schema,
      values: this.value,
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
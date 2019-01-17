import * as I from '../inference/definition-inference';

export class MorbidTableUpdateClient<T, C, TableName extends string = any, Result = void> {
  where(value: I.SchemalessWhereLiteral<T, C, TableName>) {
    return this as MorbidTableUpdateClient<T, C, TableName, Result>;
  }
  returning<S extends I.InferTableOrViewColumnNamesWithoutSchema<T, TableName>>(...s: S[]) {
    return this as any as MorbidTableUpdateClient<
      T,
      C,
      TableName,
      Pick<I.TableShape<T, C, TableName>, S>
    >;
  }
  run() {
    return Promise.resolve() as any as Promise<Result>;
  }
}
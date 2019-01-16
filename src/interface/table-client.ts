import * as I from '../inference/definition-inference';


export class MorbidTableWriteClient<T, C, TableName extends string = any, Result = void> {
  where(value: I.SchemalessWhereLiteral<T, C, TableName>) {
    return this as MorbidTableWriteClient<T, C, TableName, Result>;
  }
  returning<S extends I.InferTableOrViewColumnNamesWithoutSchema<T, TableName>>(...s: S[]) {
    return this as any as MorbidTableWriteClient<
      T,
      C,
      TableName,
      Pick<I.TableReturnShape<T, C, TableName>, S>
    >;
  }
  run() {
    return Promise.resolve() as any as Promise<Result>;
  }
}

export class MorbidTableReadClient<T, C, TableName extends string = any, Result = void> {
  where(value: I.SchemalessWhereLiteral<T, C, TableName>) {
    return this as MorbidTableReadClient<T, C, TableName, Result>;
  }
  run() {
    return Promise.resolve() as any as Promise<Result>;
  }
}

export class MorbidTableClient<T, C, TableName extends string = any, Result = void> {
  constructor(
    private table: I.AnyTableOrView
  ) { }
  set(value: I.SchemalessUpdateLiteral<T, C, TableName>) {
    return this as any as MorbidTableWriteClient<T, C, TableName, Result>;
  }
  select() {
    return this as any as MorbidTableReadClient<T, C, TableName, Result & I.TableReturnShape<T, C, TableName>>;
  }
}
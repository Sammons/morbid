import { QueryBuilder } from "./querybuilder";

/**
 * This is the part where we take a generated definition,
 * and extrapolate the querybuilder type
 */

type StringKeys<T> = Exclude<keyof T, number | symbol>;
// exact string
const s = <Strings extends string[]>(...strings: Strings) => strings[0] as Strings[0];
// exact tuple
const l = <Strings extends string[]>(...strings: Strings) => strings as Strings;
// bool as "T" or "F"
const b = <Strings extends Array<("T" | "F")>>(...strings: Strings) => strings[0] as Strings[0];

// used to convert a value like "text" into a type e.g. number
type DefaultTypeMap = {
  varchar: string;
  text: string;
  int4: number;
  int2: number;
  jsonb: {};
  json: {};
};
type PG_Types = keyof DefaultTypeMap;

// exact pg_type name
const t = <Strings extends Array<(PG_Types)>>(...strings: Strings) => strings[0] as Strings[0];

type InferColumns<T, TypeOverrides> = T extends { columns: infer Cols } ? {
  [ColumnName in StringKeys<Cols>]: Cols[ColumnName] extends {
    type: infer ColType;
    nullable: infer Nullable;
  } ? {
    name: ColumnName;
    typename: TypeOverrides extends { [Key in ColumnName]: infer Override }
    ? "overridden"
    : ColType
    type: TypeOverrides extends { [Key in ColumnName]: infer Override }
    ? Override
    : (
      ColType extends StringKeys<DefaultTypeMap>
      ? DefaultTypeMap[ColType]
      : "unknown"
    )
    nullable: Nullable;
  } : never;
} : never;

type InferIndices<T> = T extends { indices: infer Indices } ? {
  [IndexName in StringKeys<Indices>]: Indices[IndexName] extends {
    struct: infer IndexStruct;
    unique: infer UniqueIndex;
    columns: infer IndexColumns;
  } ? {
    name: IndexName;
    struct: IndexStruct;
    unique: UniqueIndex;
    columns: IndexColumns;
  } : never;
} : never;

type InferTables<T, C> = T extends { tables: infer Tables } ? {
  [TableName in StringKeys<Tables>]: {
    name: TableName;
    columns: InferColumns<Tables[TableName], C extends {
      [OverrideTableName in TableName]: infer OverriddenTypes
    } ? OverriddenTypes : {}>;
    indices: InferIndices<Tables[TableName]>;
  }
} : never;

type InferViews<T, C> = T extends { views: infer Views } ? {
  [TableName in StringKeys<Views>]: {
    name: TableName;
    columns: InferColumns<Views[TableName], C extends {
      [OverrideTableName in TableName]: infer OverriddenTypes
    } ? OverriddenTypes : {}>;
  }
} : never;

export type InferSchema<T, C> = {
  [SchemaName in StringKeys<T>]: {
    name: SchemaName;
    tables: InferTables<T[SchemaName], C extends {
      [Key in SchemaName]: infer Custom
    } ? Custom : {}>;
    views: InferViews<T[SchemaName], C extends {
      [Key in SchemaName]: infer Custom
    } ? Custom : {}>;
  }
};

export type CustomTypeSignature<T> = T extends { schemas: infer S } ? {
  [Key in StringKeys<S>]?: S[Key] extends { tables: infer Tables } ? {
    [TableName in StringKeys<Tables>]?: Tables[TableName] extends {
      columns: infer Columns;
    } ? {
      [ColumnName in StringKeys<Columns>]?: Columns[ColumnName] extends { type: infer Type } ? any : never
    } : never
  } : never;
} : never;

export function Wrap<T, C extends CustomTypeSignature<T>>(definition: T) {
  const extracted: T extends { schemas: infer S } ? { schemas: InferSchema<S, C> } : never = definition as any;
  return {
    __def: extracted,

  };
}

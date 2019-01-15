/**
 * This is the part where we take a generated definition,
 * and extrapolate the querybuilder type
 */

export type StringKeys<T> = Exclude<keyof T, number | symbol>;

// used to convert a value like "text" into a type e.g. number
type DefaultTypeMap = {
  varchar: string;
  'character varying': string;
  '"char"': string;
  text: string;
  integer: number;
  'timestamp with time zone': Date,
  name: string;
  int4: number;
  int2: number;
  jsonb: {};
  json: {};
};

type InferColumns<T, TypeOverrides> = T extends { columns: infer Cols } ? {
  [ColumnName in StringKeys<Cols>]: Cols[ColumnName] extends {
    type: infer ColType;
    nullable: infer Nullable;
  } ? {
    name: ColumnName;
    typename: TypeOverrides extends { [Key in ColumnName]: infer Override }
    ? 'overridden'
    : ColType
    type: TypeOverrides extends { [Key in ColumnName]: infer Override }
    ? Override
    : (
      ColType extends StringKeys<DefaultTypeMap>
      ? DefaultTypeMap[ColType]
      : 'unknown'
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
export interface AnyDefinition {
  schemas: {
    [k: string]: {
      tables: {
        [t: string]: {
          name: string; columns: {
            [c: string]: {
              name: string;
            },
          }
        },
      },
      views: {
        [t: string]: {
          name: string; columns: {
            [c: string]: {
              name: string;
            },
          }
        },
      },
    },
  };
}
export interface AnyTableOrView {
  name: string;
  columns: {
    [c: string]: {
      name: string;
      typename: string;
      type: string;
      nullable: string;
    },
  };
}
export type InferDefinition<T> =
  T extends {
    schemas: infer Schemas,
  }
  ? {
    [Schema in StringKeys<Schemas>]: {
      name: Schema
      tables: Schemas[Schema] extends {
        tables: infer Tables,
      }
      ? {
        [Table in StringKeys<Tables>]: {
          name: Table;
          columns: InferColumns<Tables[Table], {}>
        }
      }
      : never,
      views: Schemas[Schema] extends {
        views: infer Views,
      }
      ? {
        [View in StringKeys<Views>]: {
          name: View;
          columns: InferColumns<Views[View], {}>
        }
      }
      : never,
    }
  }
  : never;
// export type ExtractStringNamesAtLevel<T, L1 extends string, L2 extends string> =
//   T extends { [K1 in L1]: infer O1 }
//   ? O1 extends { [K2 in L2]: infer O2 }
//   ? O2
//   : O1
//   : never;
export type TableNames<D> =
  D extends { schemas: infer Schemas }
  ? {
    [Schema in StringKeys<Schemas>]:
    Schemas[Schema] extends { tables: infer Tables }
    ? StringKeys<Tables>
    : never
  }[StringKeys<Schemas>]
  : never;

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

export type GetTableOrView<Schema> =
  (Schema extends { tables: infer Tables } ? StringKeys<Tables> : never) |
  (Schema extends { views: infer Views } ? StringKeys<Views> : never);

export type GetTableOrViewType<Schema, Name> =
  (Schema extends { tables: infer Tables }
    ? Name extends StringKeys<Tables>
    ? Tables[Name] : never
    : never
  ) |
  (Schema extends { views: infer Views }
    ? Name extends StringKeys<Views>
    ? Views[Name] : never
    : never
  );

export type GetAnyTableOrViewType//TODO: extract any table or view

export; type GetColumnJSType<Column> = Column extends { type: infer Type }
  ? Type | Type[] | (
    Column extends { nullable: 'T' } ? null : Type
  )
  : never;

export type GetFlatColumnJSType<Column> = Column extends { type: infer Type }
  ? Type | (
    Column extends { nullable: 'T' } ? null : Type
  )
  : never;

export type GetColumnJSTypeByColName<Schema, Table, Name extends string> =
  GetTableOrViewType<Schema, Table> extends { columns: infer Columns }
  ? Columns extends { [Column in Name]: infer ColType }
  ? GetFlatColumnJSType<ColType>
  : never
  : never;

export type WhereStart<Schema, TargetNames extends string> = {

};

export type GetSchemas<T> = T extends { schemas: infer S } ? StringKeys<S> : never;
export type SchemaType<T, SchemaName> = T extends { schemas: infer S }
  ? SchemaName extends StringKeys<S> ? S[SchemaName] : never
  : never;

export type OneOrMore<T> = ({
  [K in keyof T]: { [SubK in K]: T[K] } & { [OtherK in Exclude<keyof T, K>]?: T[OtherK] }
})[keyof T];

export type WhereLiteral<Schema, TargetName> = GetTableOrViewType<Schema, TargetName> extends {
  columns: infer Columns,
}
  ? OneOrMore<{
    [ColumnName in StringKeys<Columns>]: GetColumnJSType<Columns[ColumnName]>
  }>
  : never;

export type SelectColumns<Schema, TargetName> = GetTableOrViewType<Schema, TargetName> extends {
  columns: infer Columns,
}
  ? Array<StringKeys<Columns>>
  : never;

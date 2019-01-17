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
  // uuid: string;
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


export type GetDefaultJSType<Column> =
  (Column extends { type: infer Type }
    ? Type extends string
    ? DefaultTypeMap extends { [K in Type]: infer JSType; }
    ? JSType | (Column extends { nullable: 'Y' } ? null : JSType)
    : 'unknown'
    : Type
    : never);

export type GetMappedJSType<Customizer, TableName extends string, Column> =
  (
    Column extends { name: infer ColName }
    ? ColName extends string
    ? Customizer extends { tables: { [T in TableName]: { [C in ColName]: infer CustomType } } }
    ? CustomType | (Column extends { nullable: 'Y' } ? null : CustomType)
    : Column extends { type: infer TypeName }
    ? TypeName extends string
    ? Customizer extends { __override__: { [K in TypeName]: infer CustomType } }
    ? CustomType | (Column extends { nullable: 'Y' } ? null : CustomType)
    : GetDefaultJSType<Column>
    : GetDefaultJSType<Column>
    : GetDefaultJSType<Column>
    : never
    : never
  )
  ;

export type OneOrMore<T> = ({
  [K in keyof T]: { [SubK in K]: T[K] } & { [OtherK in Exclude<keyof T, K>]?: T[OtherK] }
})[keyof T];


export type AllTableOrViewNames<T> =
  (T extends { schemas: infer Schemas }
    ? Schemas extends {
      [SchemaName in StringKeys<Schemas>]: {
        tables: {
          [tableName: string]: {
            name: infer Name,
          },
        },
      }
    }
    ? Name extends string ? Name : never
    : never
    : never)
  |
  (T extends { schemas: infer Schemas }
    ? Schemas extends {
      [SchemaName in StringKeys<Schemas>]: {
        views: {
          [tableName: string]: {
            name: infer Name,
          },
        },
      }
    }
    ? Name extends string ? Name : never
    : never
    : never)
  ;

export type InferTableWithoutSchema<T, TargetName extends string> =
  T extends {
    schemas: infer Schemas,
  }
  ? {
    [SchemaName in StringKeys<Schemas>]: Schemas[SchemaName] extends {
      tables: {
        [TableName in TargetName]: infer Table
      };
    }
    ? Table
    : never
  }[StringKeys<Schemas>]
  : never;

export type InferViewWithoutSchema<T, TargetName extends string> =
  T extends {
    schemas: infer Schemas,
  }
  ? {
    [SchemaName in StringKeys<Schemas>]: Schemas[SchemaName] extends {
      views: {
        [TableName in TargetName]: infer Table
      };
    }
    ? Table
    : never
  }[StringKeys<Schemas>]
  : never;

export type InferTableOrViewWithoutSchema<T, TargetName extends string> =
  InferTableWithoutSchema<T, TargetName> |
  InferViewWithoutSchema<T, TargetName>;

export type InferTableOrViewColumnNamesWithoutSchema<T, TargetName extends string> =
  InferTableOrViewWithoutSchema<T, TargetName> extends {
    columns: infer Columns,
  }
  ? StringKeys<Columns>
  : never;

export type SchemalessUpdateLiteral<T, C, TargetName extends string> =
  InferTableOrViewWithoutSchema<T, TargetName> extends {
    columns: infer Columns,
  }
  ? OneOrMore<{
    [ColumnName in StringKeys<Columns>]: GetMappedJSType<C, TargetName, Columns[ColumnName]>
  }>
  : never;

export type Whereish<K> = Exclude<K, void> | Exclude<K, void>[];

export type SchemalessWhereLiteral<T, C, TargetName extends string> =
  InferTableOrViewWithoutSchema<T, TargetName> extends {
    columns: infer Columns,
  }
  ? OneOrMore<{
    [ColumnName in StringKeys<Columns>]:
    GetMappedJSType<C, TargetName, Columns[ColumnName]> extends infer JSType
    ? Whereish<JSType>
    : never
  }>
  : never;

export type TableShape<T, C, TargetName extends string> =
  InferTableOrViewWithoutSchema<T, TargetName> extends {
    columns: infer Columns,
  }
  ? {
    [ColumnName in StringKeys<Columns>]:
    GetMappedJSType<C, TargetName, Columns[ColumnName]> extends infer JSType
    ? Exclude<JSType, undefined | void>
    : never
  }
  : never;

export type SelectColumns<Schema, TargetName> = GetTableOrViewType<Schema, TargetName> extends {
  columns: infer Columns,
}
  ? Array<StringKeys<Columns>>
  : never;

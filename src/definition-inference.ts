import * as PG from './pg-types';
import { StringKeys, OneOrMore } from "./common-types";


export type AllSchemaNamesInDef<Def> = Def extends { schemas: infer Schemas }
  ? StringKeys<Schemas>
  : never;

type AllSchemasInDef<Def> = Def extends { schemas: infer Schemas } ? Schemas : never;

type SchemaInDef<Def, SchemaName extends AllSchemaNamesInDef<Def>> =
  AllSchemasInDef<Def> extends { [SpecificSchemaName in SchemaName]: infer SpecificSchema }
  ? SpecificSchema
  : never;

type AllTablesInSchema<Def, SchemaName extends AllSchemaNamesInDef<Def>> =
  SchemaInDef<Def, SchemaName> extends { tables: infer Tables }
  ? Tables
  : never;

export type AllTableNamesInSchema<Def, SchemaName extends AllSchemaNamesInDef<Def>> =
  StringKeys<AllTablesInSchema<Def, SchemaName>>;

type AllViewsInSchema<Def, SchemaName extends AllSchemaNamesInDef<Def>> =
  SchemaInDef<Def, SchemaName> extends { views: infer Views }
  ? Views
  : never;

export type AllViewNamesInSchema<Def, SchemaName extends AllSchemaNamesInDef<Def>> =
  StringKeys<AllViewsInSchema<Def, SchemaName>>;

type AllViewOrTableNamesInSchema<
  Def,
  SchemaName extends AllSchemaNamesInDef<Def>
  > =
  | StringKeys<AllTablesInSchema<Def, SchemaName>>
  | StringKeys<AllViewsInSchema<Def, SchemaName>>;

export type AllViewOrTableNamesInDef<
  Def
  > = AllViewOrTableNamesInSchema<Def, AllSchemaNamesInDef<Def>>

type ViewInSchema<
  Def,
  SchemaName extends AllSchemaNamesInDef<Def>,
  ViewName extends AllViewNamesInSchema<Def, SchemaName>
  > =
  AllViewsInSchema<Def, SchemaName> extends { [SpecificView in ViewName]: infer View }
  ? View
  : never;

type TableInSchema<
  Def,
  SchemaName extends AllSchemaNamesInDef<Def>,
  TableName extends AllTableNamesInSchema<Def, SchemaName>
  > =
  AllTablesInSchema<Def, SchemaName> extends { [SpecificTableName in TableName]: infer Table }
  ? Table
  : never;

type ViewOrTableInSchema<
  Def,
  SchemaName extends AllSchemaNamesInDef<Def>,
  ViewOrTableName extends AllViewOrTableNamesInSchema<Def, SchemaName>
  > =
  ViewOrTableName extends AllViewNamesInSchema<Def, SchemaName>
  ? ViewInSchema<Def, SchemaName, ViewOrTableName>
  : ViewOrTableName extends AllTableNamesInSchema<Def, SchemaName>
  ? TableInSchema<Def, SchemaName, ViewOrTableName>
  : never;

export type ViewsInDef<Def> = AllViewsInSchema<Def, AllSchemaNamesInDef<Def>>;
export type TablesInDef<Def> = AllTablesInSchema<Def, AllSchemaNamesInDef<Def>>;


type AllColumnsInSchemaViewOrTable<
  Def,
  SchemaName extends AllSchemaNamesInDef<Def>,
  ViewOrTableName extends AllViewOrTableNamesInSchema<Def, SchemaName>
  > = ViewOrTableInSchema<Def, SchemaName, ViewOrTableName> extends {
    columns: infer Columns
  }
  ? Columns
  : never;

type AllColumnNamesInSchemaViewOrTable<
  Def,
  SchemaName extends AllSchemaNamesInDef<Def>,
  ViewOrTableName extends AllViewOrTableNamesInSchema<Def, SchemaName>
  > = StringKeys<AllColumnsInSchemaViewOrTable<Def, SchemaName, ViewOrTableName>>

type ColumnInSchemaViewOrTable<
  Def,
  SchemaName extends AllSchemaNamesInDef<Def>,
  ViewOrTableName extends AllViewOrTableNamesInSchema<Def, SchemaName>,
  ColumnName extends AllColumnNamesInSchemaViewOrTable<Def, SchemaName, ViewOrTableName>
  > = AllColumnsInSchemaViewOrTable<Def, SchemaName, ViewOrTableName> extends {
    [SpecificColumnName in ColumnName]: infer Column
  }
  ? Column
  : never;

export type Customizer<Def> = Partial<{
  [SchemaName in AllSchemaNamesInDef<Def>]: OneOrMore<{
    [TableName in AllTableNamesInSchema<Def, SchemaName>]: OneOrMore<{
      [ColumnName in AllColumnNamesInSchemaViewOrTable<Def, SchemaName, TableName>]: any
    }>
  }>
}>

type AllSchemaNamesInCustomizer<Def, Cust extends Customizer<Def>> = StringKeys<Cust>;
type CustomizedSchema<
  Def,
  Cust extends Customizer<Def>,
  SchemaName extends AllSchemaNamesInDef<Def>
  > = Cust extends {
    [SpecificSchemaName in SchemaName]: infer CustomizedSchema
  }
  ? CustomizedSchema
  : never;

type AllCustomizedTableOrViewNamesInSchema<
  Def,
  Cust extends Customizer<Def>,
  SchemaName extends AllSchemaNamesInDef<Def>
  > = StringKeys<CustomizedSchema<Def, Cust, SchemaName>>

type CustomizedTableOrViewInSchema<
  Def,
  Cust extends Customizer<Def>,
  SchemaName extends AllSchemaNamesInDef<Def>,
  TableOrViewName extends AllViewOrTableNamesInSchema<Def, SchemaName>
  > = CustomizedSchema<Def, Cust, SchemaName> extends {
    [SpecificName in TableOrViewName]: infer CustomizedTableOrView
  }
  ? CustomizedTableOrView
  : never;

type AllColumnNamesInCustomizedTableOrViewInSchema<
  Def,
  Cust extends Customizer<Def>,
  SchemaName extends AllSchemaNamesInDef<Def>,
  TableOrViewName extends AllViewOrTableNamesInSchema<Def, SchemaName>
  > = StringKeys<CustomizedTableOrViewInSchema<Def, Cust, SchemaName, TableOrViewName>>;

type CustomizedColumnInSchema<
  Def,
  Cust extends Customizer<Def>,
  SchemaName extends AllSchemaNamesInDef<Def>,
  TableOrViewName extends AllViewOrTableNamesInSchema<Def, SchemaName>,
  ColumnName extends AllColumnNamesInSchemaViewOrTable<Def, SchemaName, TableOrViewName>
  > = CustomizedTableOrViewInSchema<Def, Cust, SchemaName, TableOrViewName> extends {
    [SpecificColumnName in ColumnName]: infer CustomizedColumn
  }
  ? CustomizedColumn
  : never;

export type JSTypeForColumnInTableOrViewInSchema<
  Def,
  Cust extends Customizer<Def>,
  SchemaName extends AllSchemaNamesInDef<Def>,
  ViewOrTableName extends AllViewOrTableNamesInSchema<Def, SchemaName>,
  ColumnName extends AllColumnNamesInSchemaViewOrTable<Def, SchemaName, ViewOrTableName>
  > =
  CustomizedColumnInSchema<Def, Cust, SchemaName, ViewOrTableName, ColumnName> extends undefined
  ? ColumnInSchemaViewOrTable<Def, SchemaName, ViewOrTableName, ColumnName> extends {
    type: infer Type;
    nullable: infer Nullable;
  }
  ? (Type extends PG.TypeNames ? PG.TypeMap[Type] : 'unknown') |
  (Nullable extends "T" ? null : Type)
  : CustomizedColumnInSchema<Def, Cust, SchemaName, ViewOrTableName, ColumnName> 
  : never

export type JSTypeForColumnInTableOrView<
Def,
Cust extends Customizer<Def>,
ViewOrTableName extends AllViewOrTableNamesInDef<Def>,
ColumnName extends AllColumnNamesInViewOrTable<Def, ViewOrTableName>
> =
CustomizedColumnInSchema<Def, Cust, AllSchemaNamesInDef<Def>, ViewOrTableName, ColumnName> extends undefined
? ColumnInSchemaViewOrTable<Def, AllSchemaNamesInDef<Def>, ViewOrTableName, ColumnName> extends {
  type: infer Type;
  nullable: infer Nullable;
}
? (Type extends PG.TypeNames ? PG.TypeMap[Type] : 'unknown') |
(Nullable extends "T" ? null : Type)
: CustomizedColumnInSchema<Def, Cust, AllSchemaNamesInDef<Def>, ViewOrTableName, ColumnName> 
: never

type SchemaViewOrTableRowShape<
  Def,
  Cust extends Customizer<Def>,
  SchemaName extends AllSchemaNamesInDef<Def>,
  ViewOrTableName extends AllViewOrTableNamesInSchema<Def, SchemaName>,
  ColumnName extends AllColumnNamesInSchemaViewOrTable<Def, SchemaName, ViewOrTableName>
  > = {
    [Column in AllColumnNamesInSchemaViewOrTable<Def, SchemaName, ViewOrTableName>]:
    JSTypeForColumnInTableOrViewInSchema<Def, Cust, SchemaName, ViewOrTableName, ColumnName>
  }

export type BasicWhere<
Def, 
Cust extends Customizer<Def>,
ViewOrTableName extends AllViewOrTableNamesInSchema<Def, AllSchemaNamesInDef<Def>>
> = {
  [ColumnName in AllColumnNamesInViewOrTable<Def, ViewOrTableName>]: JSTypeForColumnInTableOrViewInSchema<
    Def, Cust, AllSchemaNamesInDef<Def>, ViewOrTableName, ColumnName
  >
}

export type AllColumnNamesInViewOrTable<
Def,
ViewOrTableName extends AllViewOrTableNamesInSchema<Def, AllSchemaNamesInDef<Def>>
> = AllColumnNamesInSchemaViewOrTable<Def, AllSchemaNamesInDef<Def>, ViewOrTableName>;

export type SchemaIgnorantViewOrTableRowShape<
  Def,
  Cust extends Customizer<Def>,
  ViewOrTableName extends AllViewOrTableNamesInSchema<Def, AllSchemaNamesInDef<Def>>,
  > = {
    [ColumnName in AllColumnNamesInSchemaViewOrTable<Def, AllSchemaNamesInDef<Def>, ViewOrTableName>]:
    JSTypeForColumnInTableOrViewInSchema<Def, Cust, AllSchemaNamesInDef<Def>, ViewOrTableName, ColumnName>
  }
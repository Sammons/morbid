import * as pg from 'pg';
import * as T from '../definition-inference';
import * as Q from './querybuilder-interfaces';
import { OneOrMore } from '../common-types';
import { ExtractAllViewOrTableNames } from './querybuilder-utils';
interface BuilderParams {
  pool: pg.Pool;
}

import { Def } from '../../test/samples/morbid-definition';


type NameFromAliasMap<Def, AliasMap, Alias extends string> =
  AliasMap extends { [A in Alias]: infer N } ? N extends T.AllViewOrTableNamesInDef<Def> ? N : never : never

type ColumnsFromAliasMap<Def, AliasMap, Alias extends string> = T.AllColumnNamesInViewOrTable<
  Def,
  AliasMap extends { [A in Alias]: infer N } ? N extends T.AllViewOrTableNamesInDef<Def> ? N : never : never
  >
type ColumnJSTypeFromAliasMap<
  Def,
  Cust,
  AliasMap,
  Alias extends string,
  ColumnName
  > =
  AliasMap extends {
    [A in Alias]: infer TableName
  }
  ? TableName extends T.AllViewOrTableNamesInDef<Def>
  ? ColumnName extends T.AllColumnNamesInViewOrTable<Def, TableName>
  ? T.SchemaIgnorantViewOrTableRowShape<Def, Cust, TableName> extends {
    [C in ColumnName]: infer JSType
  } ? JSType
  : never
  : never
  : never
  : never;

class InnerJoinAsOnCol<
  Def,
  Cust extends T.Customizer<Def>,
  TableOrViewName extends T.AllViewOrTableNamesInDef<Def>,
  KnownAliases extends string,
  CurrentAlias extends string,
  AliasMap,
  SelectedAlias extends KnownAliases,
  SelectedColumn extends ColumnsFromAliasMap<Def, AliasMap, SelectedAlias>
  > {
  is<V extends ColumnJSTypeFromAliasMap<Def, Cust, AliasMap, SelectedAlias, SelectedColumn>>(v: V) {
    
  }
}


type MethodsFromColumnType<
  Def,
  Cust extends T.Customizer<Def>,
  TableOrViewName extends T.AllViewOrTableNamesInDef<Def>,
  KnownAliases extends string,
  CurrentAlias extends string,
  AliasMap,
  SelectedAlias extends KnownAliases,
  SelectedColumn extends ColumnsFromAliasMap<Def, AliasMap, SelectedAlias>
  > = {
    trim(): any // TODO: extract from Def
  }

type TInnerJoinAsOnCol<
  Def,
  Cust extends T.Customizer<Def>,
  TableOrViewName extends T.AllViewOrTableNamesInDef<Def>,
  KnownAliases extends string,
  CurrentAlias extends string,
  AliasMap,
  SelectedAlias extends KnownAliases,
  SelectedColumn extends ColumnsFromAliasMap<Def, AliasMap, SelectedAlias>
  > = InnerJoinAsOnCol<
  Def,
  Cust,
  TableOrViewName,
  KnownAliases,
  CurrentAlias,
  AliasMap,
  SelectedAlias,
  SelectedColumn
  > & MethodsFromColumnType<
  Def,
  Cust,
  TableOrViewName,
  KnownAliases,
  CurrentAlias,
  AliasMap,
  SelectedAlias,
  SelectedColumn
  >

class InnerJoinAs<
  Def,
  Cust extends T.Customizer<Def>,
  TableOrViewName extends T.AllViewOrTableNamesInDef<Def>,
  KnownAliases extends string,
  CurrentAlias extends string,
  AliasMap
  > {
  constructor() { }
  get onCol(): {
    [K in KnownAliases]: {
      [C in ColumnsFromAliasMap<Def, AliasMap, K>]: TInnerJoinAsOnCol<
      Def,
      Cust,
      TableOrViewName,
      KnownAliases,
      CurrentAlias,
      AliasMap,
      K,
      C
      >
    }
  } {
    return {} as any;
  }
}

class InnerJoin<
  Def,
  Cust extends T.Customizer<Def>,
  TableOrViewName extends T.AllViewOrTableNamesInDef<Def>,
  KnownAliases extends string,
  AliasMap
  > {
  constructor() { }
  as<Alias extends string>(alias: Alias & Exclude<Alias, KnownAliases>):
    InnerJoinAs<Def, Cust, TableOrViewName, KnownAliases | Alias, Alias, AliasMap & {
      [A in Alias]: TableOrViewName
    }> {
    return new InnerJoinAs<Def, Cust, TableOrViewName, KnownAliases | Alias, Alias, AliasMap & {
      [A in Alias]: TableOrViewName
    }>();
  }
}

class FromAs<
  Def,
  Cust extends T.Customizer<Def>,
  KnownAliases extends string,
  AliasMap extends { [K in KnownAliases]: T.AllViewOrTableNamesInDef<Def> }
  > {
  constructor() { }
  get innerJoin(): {
    [K in T.AllViewOrTableNamesInDef<Def>]: InnerJoin<Def, Cust, K, KnownAliases, AliasMap>
  } {
    return {} as any;
  }
}

class FromWhere {
  constructor() { }
}

function Wrap<
  Def,
  Cust extends T.Customizer<Def>
  >(def: Def) {
  const viewsOrTableNames = ExtractAllViewOrTableNames(def);
  const o = {} as {
    [K in T.AllViewOrTableNamesInDef<Def>]: {
      where: <W extends T.BasicWhere<Def, Cust, K>>(w: W) => FromWhere;
      as: <Alias extends string>(alias: Alias) => FromAs<Def, Cust, Alias, {
        [AliasName in Alias]: K
      }>;
    }
  };
  viewsOrTableNames.forEach(viewOrTableName => {
    o[viewOrTableName] = {
      where: <W extends T.BasicWhere<Def, Cust, typeof viewOrTableName>>(w: W) => new FromWhere(),
      as: <Alias extends string>(alias: Alias) => new FromAs<Def, Cust, Alias, {
        [AliasName in Alias]: typeof viewOrTableName
      }>()
    }
  });
  return o;
}

Wrap(Def)
  .sequences.as('x')
  .innerJoin.routines.as("y")
  .onCol.x.data_type.



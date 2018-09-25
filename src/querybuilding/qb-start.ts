import * as pg from 'pg';
import * as T from '../definition-inference';

interface BuilderParams {
  pool: pg.Pool;
}
// internal

// public builder classes
export class SchemaIgnorantDDLBuilderStart<Def> {
  constructor(def: Def, common: BuilderParams) {}
}

export class Subquery<Def, Cust, SuperTargets> {
  constructor(def: Def) {};

}

export class SchemaIgnorantFrom<Def, Cust, FromTarget extends T.AllViewOrTableNamesInDef<Def>> {
  constructor(def: Def, common: BuilderParams, private from: FromTarget) {};
  as<Alias extends string>(alias: Alias) {

  }
  whereValues = <Shape extends WhereValuesInput<T.SchemaIgnorantViewOrTableRowShape<Def, Cust, FromTarget>>>(
    p: Shape
  ) => {
    return this;
  }
  whereColumn = <Shape extends WhereValuesInput<T.SchemaIgnorantViewOrTableRowShape<Def, Cust, FromTarget>>>(
    p: Shape
  ) => {
    return {
      []
    };
  }
}

export class SchemaIgnorantQueryBuilderStart<Def, Cust = {}> {
  constructor(private def: Def, private common: BuilderParams) {}
  from = <TargetName extends T.AllViewOrTableNamesInDef<Def>>(target: TargetName) => {
    return new SchemaIgnorantFrom<Def, Cust, TargetName>(this.def, this.common, target);
  }
}

import {Def} from '../../test/samples/morbid-definition';
import { WhereValuesInput } from './querybuilder-interfaces';

new SchemaIgnorantQueryBuilderStart(Def, {pool: {} as any})
.from('tables')
.whereValues({
  is_typed: null,
  commit_action: null,
  table_name: null,
})
.where
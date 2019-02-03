
import * as I from '../../inference/definition-inference';
import * as _ from 'lodash';

export type ContextFrom<Ctx> = Ctx extends { from: infer Table } ? Table : never;
export type ContextAliases<Ctx> = Ctx extends { aliases: infer Aliases } ? Aliases : {};
export type ContextAliasNames<Ctx> = Ctx extends { aliases: infer Aliases } ? Extract<keyof Aliases, string> : never;
export type ColumnNamesByAliasName<
  T,
  Ctx, AliasName extends string
  > =
  ContextAliases<Ctx> extends { [K in AliasName]: infer TableName }
  ? TableName extends string ? I.InferTableOrViewColumnNamesWithoutSchema<T, TableName> : never
  : never;

export type BasicComparison = {
  kind: 'comp1';
  alias1: string;
  column1: string;
  op: string;
  alias2: string;
  column2: string;
} | {
  kind: 'comp2';
  alias1: string;
  column1: string;
  op: string;
  value?: (string | number | null) | (string | number | null)[];
};

export interface AndOr {
  kind: 'andor';
  type: 'and' | 'or';
  list: (BasicComparison | AndOr)[];
}

export type BoolExpression = AndOr | BasicComparison;

export interface Selection {
  alias: string;
  column: string;
  as: string;
}

export class SelectContainer {
  from: {
    schema: string;
    table: string;
    alias: string;
  } | null = null;
  joins: {
    kind: 'inner' | 'left';
    schema: string;
    table: string;
    alias: string;
    expressions: BoolExpression[]
  }[] = [];
  wheres: BoolExpression | null = null;
  selections: Selection[] = [];
  mapping: { [K: string]: string } = {};
  get tables() {
    let res: { schema: string; table: string }[] = [];
    if (this.from) {
      res.push({ schema: this.from.schema, table: this.from.table });
    }
    res.push(...this.joins.map(j => ({ schema: j.schema, table: j.table })));
    return res;
  }
  clone() {
    const fresh = new SelectContainer();
    return Object.assign(fresh, _.cloneDeep(this));
  }
}
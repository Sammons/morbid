import { MorbidPGClientTracker } from '../client-tracker';
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

type BasicComparison = {
  alias1: string;
  column1: string;
  op: string;
  alias2: string;
  column2: string;
} | {
  schema1: string;
  table1: string;
  column1: string;
  op: string;
  value?: (string | number | null) | (string | number | null)[];
};

interface AndOr {
  type: 'and' | 'or';
  list: (BasicComparison | AndOr)[];
}

type BoolExpression = AndOr | BasicComparison;

class SelectContainer {
  from: string | null = null;
  joins: {
    schema: string;
    table: string;
    alias: string;
    expressions: BoolExpression[]
  }[] = [];
  wheres: BoolExpression | null = null;
  clone() {
    const fresh = new SelectContainer();
    return Object.assign(fresh, _.cloneDeep(this));
  }
}

export class MorbidOnAfterJoin<T, C, Context> {
  constructor(
    private definition: T,
    private clientTracker: MorbidPGClientTracker,
    private container: SelectContainer
  ) { }
  on<
    Alias1 extends ContextAliasNames<Context>,
    Col1 extends ColumnNamesByAliasName<T, Context, Alias1>,
    Op extends ('=' | '>' | '<>' | '<' | 'like' | 'ilike' | 'in'),
    Alias2 extends ContextAliasNames<Context>,
    Col2 extends ColumnNamesByAliasName<T, Context, Alias2>
  >(
    a1: Alias1,
    c1: Col1,
    o: Op,
    a2: Alias2,
    c2: Col2
  ): MorbidAfterFrom<T, C, Context> {
    const top = this.container.joins.slice(-1)[0];
    top.expressions.push({
      alias1: a1,
      alias2: a2,
      column1: c1,
      column2: c2,
      op: o,
    });
    return new MorbidAfterFrom<T, C, Context>(this.definition, this.clientTracker, this.container.clone());
  }
}

export class MorbidAfterWhere<T extends any, C, Context> {
  constructor(
    // private definition: T,
    // private clientTracker: MorbidPGClientTracker,
    // private container: SelectContainer
  ) { }
}

export class MorbidAfterFrom<T extends any, C, Context> {
  constructor(
    private definition: T,
    private clientTracker: MorbidPGClientTracker,
    private container: SelectContainer
  ) { }
  innerJoin<Table extends I.AllTableOrViewNames<T>, Alias extends string = Table>(table: Table, alias: Alias = table) {
    const schemas = Object.keys(this.definition.schemas);
    const schema = schemas.find(s => this.definition.schemas[s].tables[table]);
    if (!schema) {
      throw new Error('Invalid table name could not be found in a schema. Your code probably had compile errors but still emitted.');
    }
    this.container.joins.push({
      alias: alias,
      schema: schema,
      table: table,
      expressions: [],
    });
    return new MorbidOnAfterJoin<T, C, Context & { aliases: ContextAliases<Context> & { [K in Alias]: Table } }>(
      this.definition,
      this.clientTracker,
      this.container.clone()
    );
  }
  where(clause: { [K in ContextAliasNames<Context>]?: I.SchemalessWhereLiteral<T, C, ContextAliases<Context>[K]> }) {
    const aliasesUsed = Object.keys(clause);
    aliasesUsed.map(a => this.container.joins.find(j => j.alias === a)).forEach(usedJoin => {
      if (usedJoin) {
        const clauseKey = usedJoin.alias as keyof typeof clause;
        const specificClause = clause[clauseKey] as { [col: string]: any | any[] };
        if (!this.container.wheres) {
          const commonWhereValues = {
            schema1: usedJoin.schema,
            table1: usedJoin.table,
          };
          if (!this.container.wheres) {
            this.container.wheres = {
              type: 'and',
              list: [],
            };
          }
          const columnsUsed = Object.keys(specificClause);
          columnsUsed.forEach(col => {
            const w = this.container.wheres as AndOr;
            const v = specificClause[col];
            if (v === null) {
              w.list.push({
                ...commonWhereValues,
                column1: col,
                op: 'is null',
              });
              return;
            }
            if (Array.isArray(v)) {
              w.list.push({
                ...commonWhereValues,
                column1: col,
                op: 'in',
                value: v,
              });
              return;
            }
            w.list.push({
              ...commonWhereValues,
              column1: col,
              op: '=',
              value: v,
            });
            return;
          });
        }
      }
    });
    return new MorbidAfterWhere<T, C, Context>(
      // this.definition, this.clientTracker, this.container
    );
  }
}

export class MorbidBuilder<T, C, Context> {
  constructor(
    private definition: T,
    private clientTracker: MorbidPGClientTracker
  ) { }
  container: SelectContainer = new SelectContainer();
  from<Table extends I.AllTableOrViewNames<T>>(table: Table) {
    this.container.from = table;
    return new MorbidAfterFrom<T, C, { from: Table }>(
      this.definition,
      this.clientTracker,
      this.container.clone()
    );
  }
}
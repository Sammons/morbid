import { MorbidPGClientTracker } from '../client-tracker';
import * as I from '../../inference/definition-inference';
import * as _ from 'lodash';
import { CompileSelectBuilder } from '../../sql-construction/select';
import { SelectContainer, ContextAliasNames, ColumnNamesByAliasName, ContextAliases, AndOr, Selection } from './builder-types';
import { MorbidTransaction } from '../transaction';
import { Run } from '../execution/run';


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
      kind: 'comp1',
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
    private clientTracker: MorbidPGClientTracker,
    private container: SelectContainer
  ) {

  }
  compile() {
    const construction = CompileSelectBuilder(this.container);
    return {
      text: construction.text,
      values: construction.bindings,
    };
  }
  run = (transaction?: MorbidTransaction) => Run<any>({
    clientTracker: this.clientTracker,
    query: this.compile(),
    transaction,
  })
}

export class MorbidAfterSelect<T extends any, C, Context> {
  constructor(
    private definition: T,
    private clientTracker: MorbidPGClientTracker,
    private container: SelectContainer
  ) {
    this.definition;//TODO
  }
  compile() {
    const construction = CompileSelectBuilder(this.container);
    return {
      text: construction.text,
      values: construction.bindings,
    };
  }
  run = (transaction?: MorbidTransaction) => Run<Context extends { shape: infer Shape } ? Shape : {}>({
    clientTracker: this.clientTracker,
    query: this.compile(),
    transaction,
  }, this.container.mapping)
}

export class MorbidAfterFrom<T extends any, C, Context> {
  constructor(
    private definition: T,
    private clientTracker: MorbidPGClientTracker,
    private container: SelectContainer
  ) { }
  select<Clause extends { [K in ContextAliasNames<Context>]?: I.SchemalessSelectColumns<T, ContextAliases<Context>[K]> }>(
    clause: Clause
  ) {
    const aliasesUsed = Object.keys(clause);
    for (let alias of aliasesUsed) {
      const columnNames = (clause as { [K: string]: string[] })[alias] as string[];
      if (columnNames) {
        this.container.selections.push(...columnNames.map(c => {
          // this is saying map the result "x.y" to the path "x"."y"
          this.container.mapping[`${alias}.${c}`] = `${alias}.${c}`;
          return {
            alias: alias,
            column: c,
            as: `${alias}.${c}`,
          };
        }));
      }
    }
    return new MorbidAfterSelect<T, C, Context & {
      shape: {
        [K in keyof Clause]: K extends keyof ContextAliases<Context>
        ? ContextAliases<Context>[K] extends infer A
        ? A extends string
        ? Pick<I.TableShape<T, C, A>,
          Clause[K] extends infer Cols
          ? Cols extends string[] ? Cols[number] : any
          : never
        >
        : never
        : never
        : never
      },
    }>(
      this.definition,
      this.clientTracker,
      this.container.clone()
    );
  }
  innerJoin<Table extends I.AllTableOrViewNames<T>, Alias extends string = Table>(table: Table, alias: Alias = table) {
    const schemas = Object.keys(this.definition.schemas);
    const schema = schemas.find(s => this.definition.schemas[s].tables[table]);
    if (!schema) {
      throw new Error('Invalid table name could not be found in a schema. Your code probably had compile errors but still emitted.');
    }
    this.container.joins.push({
      kind: 'inner',
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
    aliasesUsed.map(a => {
      const joinUsed = this.container.joins.find(j => j.alias === a);
      if (joinUsed) {
        return joinUsed;
      }
      if (this.container.from!.alias === a) {
        return this.container.from;
      }
      throw new Error('Could not find alias that was in where clause!');
    }).forEach(usedJoin => {
      if (usedJoin) {
        const clauseKey = usedJoin.alias as keyof typeof clause;
        const specificClause = clause[clauseKey] as { [col: string]: any | any[] };
        const commonWhereValues = {
          alias1: usedJoin.alias,
        };
        if (!this.container.wheres) {
          this.container.wheres = {
            kind: 'andor',
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
              kind: 'comp2',
              column1: col,
              op: 'is null',
            });
            return;
          }
          if (Array.isArray(v)) {
            w.list.push({
              ...commonWhereValues,
              kind: 'comp2',
              column1: col,
              op: 'in',
              value: v,
            });
            return;
          }
          w.list.push({
            ...commonWhereValues,
            kind: 'comp2',
            column1: col,
            op: '=',
            value: v,
          });
          return;
        });
      }
    });
    return new MorbidAfterWhere<T, C, Context>(
      // this.definition, 
      this.clientTracker,
      this.container
    );
  }
}

export class MorbidBuilder<T extends any, C, Context> {
  constructor(
    private definition: T,
    private clientTracker: MorbidPGClientTracker
  ) { }
  private container: SelectContainer = new SelectContainer();
  from<Table extends I.AllTableOrViewNames<T>, Alias extends string = Table>(table: Table, alias: Alias = table) {
    const schemas = Object.keys(this.definition.schemas);
    const schema = schemas.find(s => this.definition.schemas[s].tables[table]) as string;
    this.container.from = {
      schema,
      table,
      alias,
    };
    return new MorbidAfterFrom<T, C, { from: Table, aliases: { [K in Alias]: Table } }>(
      this.definition,
      this.clientTracker,
      this.container.clone()
    );
  }
}
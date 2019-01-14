import * as pg from "pg";
import * as Infer from "./definition-inference";

interface WhereCondition {
  source: {
    type: "tableOrView";
    tableOrView: string;
    schema: string;
    column: string;
  };
  target: {
    type: "literal";
    value: any
  };
}

interface SelectColumn {
  source: {
    type: "tableOrView";
    tableOrView: string;
    schema: string;
    column: string;
  };
}

interface FromTarget {
  source: {
    type: "fromTableOrView";
    schema: string;
    name: string;
  };
}

function CompileQuery(params: {
  def: any;
  froms: FromTarget[];
  wheres: WhereCondition[];
  select: SelectColumn[];
}) {
  const { froms, wheres, select, def } = params;
  const primaryTarget = froms.find(f => f.source.type === "fromTableOrView");
  if (!primaryTarget) {
    throw new Error("Missing from clause!");
  }
  let statement = "SELECT";
  select.forEach((selectColumn, i) => {
    statement += ` ${selectColumn.source.schema}.${selectColumn.source.tableOrView}.${selectColumn.source.column} as ` +
      ` "${selectColumn.source.schema}.${selectColumn.source.tableOrView}.${selectColumn.source.column}"`;
    if (i !== select.length - 1) {
      statement += ",";
    }
  });
  statement += ` FROM ${primaryTarget.source.schema}.${primaryTarget.source.name}`;
  statement += ` WHERE`;
  let counter = 1;
  const bindings: any[] = [];
  wheres.forEach((whereCond, i) => {
    const type: string =
      (
        def.schemas[whereCond.source.schema].tables[whereCond.source.tableOrView] ||
        def.schemas[whereCond.source.schema].views[whereCond.source.tableOrView]
      ).columns[whereCond.source.column].type;
    if (i > 0) {
      statement += " AND";
    }
    statement += ` ${whereCond.source.schema}.${whereCond.source.tableOrView}.${whereCond.source.column} = $${counter}::${type}`;

    counter++;
    bindings.push(whereCond.target.value);
  });
  return {
    sql: statement,
    bindings,
  };
}

class QBTableOrViewFrom<
  Def,
  SchemaName extends string,
  Schema,
  FromTargetNames extends string,
  Selections
  > {
  constructor(
    private pool: pg.Pool,
    private def: Def,
    private schema: SchemaName,
    private fromTargets: FromTargetNames[],
    private whereConditions: WhereCondition[],
    private selectColumnSets: SelectColumn[]
  ) { }
  public where = <Params extends Infer.OneOrMore<{
    [Target in FromTargetNames]: Infer.WhereLiteral<Schema, Target>
  }>>(p: Partial<Params>) => {
    const currentConditions = this.whereConditions.slice();
    const targetsWithConditions = Object.keys(p) as Array<(keyof typeof p)>;
    for (const target of targetsWithConditions) {
      const columnParams = p[target] as Params[typeof target];
      if (columnParams != null) {
        const columnsWithConditions = Object.keys(columnParams) as Array<(keyof Params[typeof target])>;
        for (const columnName of columnsWithConditions) {
          currentConditions.push({
            source: {
              schema: this.schema as string,
              column: columnName as string,
              type: "tableOrView",
              tableOrView: target as string,
            },
            target: {
              type: "literal",
              value: columnParams[columnName],
            },
          });
        }
      }
    }
    return new QBTableOrViewFrom<
      Def,
      SchemaName,
      Schema,
      FromTargetNames,
      Selections
      >(
        this.pool, this.def, this.schema, this.fromTargets, currentConditions, []
      );
  }
  public selectColumns = <Params extends Infer.OneOrMore<{
    [Target in FromTargetNames]: Infer.SelectColumns<Schema, Target>
  }>>(p: Params) => {
    const currentSelectColumns = this.selectColumnSets.slice();
    const targetsWithSelections = Object.keys(p) as Array<(keyof typeof p)>;
    for (const target of targetsWithSelections) {
      const columnParams = p[target] as any as string[];
      if (columnParams != null) {
        for (const columnName of columnParams) {
          currentSelectColumns.push({
            source: {
              tableOrView: target as string,
              schema: this.schema as string,
              column: columnName as string,
              type: "tableOrView",
            },
          });
        }
      }
    }
    return new QBTableOrViewFrom<
      Def,
      SchemaName,
      Schema,
      FromTargetNames,
      Selections & {
        [Table in Infer.StringKeys<typeof p>]: (typeof p)[Table] extends Array<infer S>
        ? {
          [ColumnName in Extract<S, string>]: Infer.GetColumnJSTypeByColName<Schema, Table, ColumnName>
        }
        : never
      }
      >(
        this.pool,
        this.def,
        this.schema,
        this.fromTargets,
        this.whereConditions,
        currentSelectColumns
      );
  }
  public async run() {
    const compilation = CompileQuery({
      def: this.def,
      froms: this.fromTargets.map(t => ({
        source: {
          type: "fromTableOrView" as "fromTableOrView",
          name: t as string,
          schema: this.schema,
        },
      })),
      select: this.selectColumnSets,
      wheres: this.whereConditions,
    });
    const res = await this.pool.query(compilation.sql, compilation.bindings);
    const { rows } = res;
    const resultSet: Selections[] = [] as any;
    for (const row of rows) {
      const resultRow = {} as any;
      this.selectColumnSets.forEach(selects => {
        if (!resultRow[selects.source.tableOrView]) {
          resultRow[selects.source.tableOrView] = {};
        }
        resultRow[selects.source.tableOrView][selects.source.column] =
          row[`${selects.source.schema}.${selects.source.tableOrView}.${selects.source.column}`];
      });
      resultSet.push(resultRow);
    }
    return resultSet;
  }
}

class QBFrom<Def, SchemaName extends string, Schema> {
  constructor(private pool: pg.Pool, private def: Def, private schema: SchemaName) { }
  public fromTable = <TableOrViewName extends Infer.GetTableOrView<Schema>>(tableOrview: TableOrViewName) => {
    return new QBTableOrViewFrom<Def, SchemaName, Schema, TableOrViewName, {}>(
      this.pool, this.def, this.schema, [tableOrview], [], []
    );
  }
  public fromView = <TableOrViewName extends Infer.GetTableOrView<Schema>>(tableOrview: TableOrViewName) => {
    return new QBTableOrViewFrom<Def, SchemaName, Schema, TableOrViewName, {}>(
      this.pool, this.def, this.schema, [tableOrview], [], []
    );
  }
}

export class QBStart<Def> {
  constructor(private def: Def, private pool: pg.Pool) { }
  public using = <SchemaName extends Infer.GetSchemas<Def>>(schemaname: SchemaName) => {
    return new QBFrom<Def, SchemaName, Infer.SchemaType<Def, SchemaName>>(
      this.pool, this.def, schemaname
    );
  }
}

export function Wrap<T, C extends Infer.CustomTypeSignature<T>>(definition: T, pool: pg.Pool) {
  const extracted: T extends { schemas: infer S } ? { schemas: Infer.InferSchema<S, C> } : never = definition as any;
  return new QBStart(extracted, pool);
}

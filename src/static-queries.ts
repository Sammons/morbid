import * as pg from "pg";
import { ExtractedIndex, ExtractedSchema, ExtractedTable, ExtractedView } from "./extraction-interfaces";

export class Queries {
  constructor(private pool: pg.Pool) { }

  public async gather(options: {
    schemas?: string[];
  }) {
    const schemas = await this.detectSchemas(options.schemas);
    const result = new Map<string, ExtractedSchema>();
    for (const schema of schemas) {
      result.set(schema, {
        schema,
        tables: await this.gatherAllTables({ schema }),
        views: await this.gatherAllViews({ schema }),
      });
    }
    return result;
  }
  private async detectSchemas(includeSchemas?: string[]) {
    const { rows } = await this.pool.query(this.detectSchemasSQL());
    const schemas: Set<string> = new Set(rows.map((row: { schemaname: string }) => row.schemaname));
    if (includeSchemas) {
      return Array.from(schemas).filter(s => includeSchemas.includes(s));
    }
    return Array.from(schemas);
  }
  private detectSchemasSQL() {
    return `select distinct schemaname from pg_tables`;
  }
  private async gatherAllTables(options: { schema?: string; table?: string }) {
    const { rows } = await this.pool.query(this.gatherAllTablesSQL(options), [options.schema]);
    return rows as ExtractedTable[];
  }
  private async gatherAllViews(options: { schema?: string; view?: string }) {
    const { rows } = await this.pool.query(this.gatherAllViewsSQL(options), [options.schema]);
    return rows as ExtractedView[];
  }
  private gatherAllTablesSQL(options: { schema?: string; table?: string }) {
    const sql = `
      select
      schemaname,
      tablename,
      array(
        select to_json(x) from (
          select
            column_name as columnname,
            ordinal_position as position,
            is_nullable <> 'NO' as nullable,
            data_type as type
          from information_schema."columns" where table_schema = t.schemaname and table_name = t.tablename
        ) x
      ) as columns,
      array (
        select to_json(x) from (
          select
            ind.indexname,
            trim(substring(ind.indexdef from 'CREATE#"%#"INDEX%' for '#')) = 'UNIQUE' as unique,
            trim(substring(ind.indexdef from 'CREATE%INDEX%ON%USING #"%#"[(]%' for '#')) as struct,
            regexp_split_to_array(substring(ind.indexdef from 'CREATE%INDEX%ON%USING%[(]#"%#"[)]' for '#'), ',') as cols
          from pg_indexes ind where ind.tablename = t.tablename and ind.schemaname = t.schemaname
        ) x
      ) as indices
      from pg_tables t
    `;
    if (options.schema && options.table) {
      return sql + `where schemaname = $1::TEXT and tablename = $2::TEXT`;
    }
    if (options.table) {
      return sql + `where tablename = $1::TEXT`;
    }
    if (options.schema) {
      return sql + `where schemaname = $1::TEXT`;
    }
    return sql;
  }
  private gatherAllViewsSQL(options: { schema?: string; view?: string }) {
    const sql = `
    select
    v.table_schema as schemaname,
    v.table_name as viewname,
    array(
      select to_json(x) from (
        select
          column_name as columnname,
          ordinal_position as position,
          is_nullable <> 'NO' as nullable,
          data_type as type
        from information_schema."columns" c
        where c.table_schema = v.table_schema and c.table_name = v.table_name
      ) x
    ) as columns
    from pg_views pv
    inner join information_schema."views" v
    on pv.schemaname = v.table_schema and pv.viewname = v.table_name
    `;
    if (options.schema && options.view) {
      return sql + `where v.table_schema = $1::TEXT and v.table_name = $2::TEXT`;
    }
    if (options.view) {
      return sql + `where v.table_name = $1::TEXT`;
    }
    if (options.schema) {
      return sql + `where v.table_schema = $1::TEXT`;
    }
    return sql;
  }
  private gatherProceduresSQL() {
    // https://www.postgresql.org/docs/8.4/static/catalog-pg-type.html
    return `
    select
      p.proname proname,
      p.pronargs numargs,
      p.proisagg isagg,
      p.proiswindow iswindow,
      p.provariadic isvariadic,
      array (
        select to_json(x) from (
          select
            t.typname,
            t.typcategory,
            t.typlen,
            t.typelem,
            t.typndims,
            t.typbyval
          from unnest(p.proargtypes) arg_type(oid)
          inner join pg_type t on t.oid = arg_type.oid
        ) x
      ) args,
      (
        select to_json(x) from (
          select
            t.typname,
            t.typcategory,
            t.typlen,
            t.typelem,
            t.typndims,
            t.typbyval
          from pg_type t
          where t.oid = p.prorettype
          limit 1
        ) x
      ) as returntype
    from pg_proc p
    `;
  }
}

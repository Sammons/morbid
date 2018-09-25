import * as fs from "fs";
import * as pg from "pg";
import { ExtractedColumn, ExtractedIndex, ExtractedSchema, ExtractedTable, ExtractedView } from "./extraction-interfaces";
import { Queries } from "./static-queries";
const S = (value: string | boolean | Array<string>): string => {
  if (Array.isArray(value)) {
    return `[${value.map(S).join(', ')}]`;
  }
  if (typeof value === 'string') {
    const str = value.replace(/"/gm, "\\\"")
    return `"${str}" as "${str}"`
  }
  return S(value ? "T" : "F");
};
export class SchemaExtractor {
  constructor(private pool: pg.Pool) { }
  public async extract(destination: string, schemas: string[]) {
    const gatheredSchemas = await new Queries(this.pool).gather({schemas});

    const lines = [
      `
// this is a generated file.

export const Def = {`,
      `  schemas: {`,
      ...Array.from(gatheredSchemas.values()).map(schema => this.renderSchema(schema.schema, schema)),
      `  },`,
      `};`,
    ].join("\n") + `\n`;
    fs.writeFileSync(destination, lines);
  }
  private renderColumn(name: string, extract: ExtractedColumn) {
    const nullable = extract.nullable ? "T" : "F";
    return [
      `            ${name}: {`,
      `              name: ${S(name)},`,
      `              type: ${S(extract.type)},`,
      `              nullable: ${S(nullable)},`,
      `            },`,
    ].join("\n");
  }
  private renderIndex(name: string, extract: ExtractedIndex) {
    return [
      `            ${name}: {`,
      `              name: ${S(name)},`,
      `              struct: ${S(extract.struct)},`,
      `              unique: ${S(extract.unique)},`,
      `              columns: ${S(extract.cols)},`,
      `            },`,
    ].join("\n");
  }
  private renderTable(name: string, extract: ExtractedTable) {
    return [
      `        ${name}: {`,
      `          name: ${S(name)},`,
      `          columns: {`,
      ...extract.columns.map(c => this.renderColumn(c.columnname, c)),
      `          },`,
      `          indices: {`,
      ...extract.indices.map(i => this.renderIndex(i.indexname, i)),
      `          },`,
      `        },`,
    ].join("\n");
  }
  private renderView(name: string, extract: ExtractedView) {
    return [
      `        ${name}: {`,
      `          name: ${S(name)},`,
      `          columns: {`,
      ...extract.columns.map(c => this.renderColumn(c.columnname, c)),
      `          },`,
      `        },`,
    ].join("\n");
  }
  private renderSchema(name: string, extract: ExtractedSchema) {
    return [
      `    ${name}: {`,
      `      name: ${S(name)},`,
      `      tables: {`,
      ...extract.tables.map(t => this.renderTable(t.tablename, t)),
      `      },`,
      `      views: {`,
      ...extract.views.map(t => this.renderView(t.viewname, t)),
      `      },`,
      `    },`,
    ].join("\n");
  }
}

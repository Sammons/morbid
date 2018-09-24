import * as fs from "fs";
import * as pg from "pg";
import { ExtractedColumn, ExtractedIndex, ExtractedSchema, ExtractedTable, ExtractedView } from "./extraction-interfaces";
import { Queries } from "./static-queries";
export class SchemaExtractor {
  constructor(private pool: pg.Pool) { }
  public async extract(destination: string) {
    const gatheredSchemas = await new Queries(this.pool).gather({});

    const lines = [
      `
// this is a generated file.
// exact string
const s = <Strings extends string[]>(...strings: Strings) => strings[0] as Strings[0];
// exact tuple
const l = <Strings extends string[]>(...strings: Strings) => strings as Strings;
// bool as "T" or "F"
const b = <Strings extends Array<("T" | "F")>>(...strings: Strings) => strings[0] as Strings[0];

export const Def = {`,
      `  schemas: {`,
      ...Array.from(gatheredSchemas.values()).map(schema => this.renderSchema(schema.schema, schema)),
      `  },`,
      `};`,
    ].join("\n") + `\n`;
    fs.writeFileSync(destination, lines);
  }
  private renderColumn(name: string, extract: ExtractedColumn) {
    return [
      `            ${name}: {`,
      `              name: s("${name}"),`,
      `              type: s("${extract.type.replace(/"/gm, "\\\"")}"),`,
      `              nullable: b("${extract.nullable ? "T" : "F"}"),`,
      `            },`,
    ].join("\n");
  }
  private renderIndex(name: string, extract: ExtractedIndex) {
    return [
      `            ${name}: {`,
      `              name: s("${name}"),`,
      `              struct: s("${extract.struct}"),`,
      `              unique: b("${extract.unique}"),`,
      `              columns: l(${extract.cols.map(c => `"${c}"`).join(", ")}),`,
      `            },`,
    ].join("\n");
  }
  private renderTable(name: string, extract: ExtractedTable) {
    return [
      `        ${name}: {`,
      `          name: s("${name}"),`,
      `          columns: {`,
      ...extract.columns.map(c => this.renderColumn(c.columnname, c)),
      `          },`,
      `          indices: {`,
      `          },`,
      `        },`,
    ].join("\n");
  }
  private renderView(name: string, extract: ExtractedView) {
    return [
      `        ${name}: {`,
      `          name: s("${name}"),`,
      `          columns: {`,
      ...extract.columns.map(c => this.renderColumn(c.columnname, c)),
      `          },`,
      `          indices: {`,
      `          },`,
      `        },`,
    ].join("\n");
  }
  private renderSchema(name: string, extract: ExtractedSchema) {
    return [
      `    ${name}: {`,
      `      name: s("${name}"),`,
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

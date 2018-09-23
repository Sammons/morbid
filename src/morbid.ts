import * as pg from "pg";
import { CustomTypeSignature, Wrap } from "./definition-inference";
import { QueryBuilder } from "./querybuilder";
import { SchemaExtractor } from "./schema-extractor";

export class Morbid {
  private pool: pg.Pool;
  constructor(options: {
    pool: pg.Pool,
  }) {
    this.pool = options.pool;
  }
  /**
   * Generates a definition file that morbid can use to inform the querybilder type-system
   */
  public async extractSchema(params: {
    destinationFile: string;
  }) {
    const schemas = new SchemaExtractor(this.pool).extractTables();

  }
  /**
   *
   */
  public querybuilder<T, C extends CustomTypeSignature<T>>(definition: T) {
    return Wrap<T, C>(definition);
  }
}

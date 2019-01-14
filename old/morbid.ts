import * as pg from "pg";
import { CustomTypeSignature } from "./definition-inference";
import { Wrap } from "./querybuilder";
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
    schemas: string[];
  }) {
    await new SchemaExtractor(this.pool).extract(params.destinationFile, params.schemas);
  }
  /**
   *
   */
  public querybuilder<T, C extends CustomTypeSignature<T>>(definition: T) {
    return Wrap<T, C>(definition, this.pool);
  }
}

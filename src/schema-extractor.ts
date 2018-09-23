import * as pg from 'pg';
import { Queries } from './static-queries';

export class SchemaExtractor {
  constructor(private pool: pg.Pool) { }

  async extract() {
    const gatheredSchemas = await new Queries(this.pool).gather({});

  }
}

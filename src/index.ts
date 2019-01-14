import * as pg from 'pg';
import * as extractor from './extraction/schema-extractor';

interface MorbidParams {
  pg: pg.ConnectionConfig;
  destination: string; // output definition typescript file
  schemas: string[]; // must be provided, the schemas to extract
}
/**
 * Accepts the database, schemas, destination, and filename prefix
 * Will extract the structure of the postgres database write one file:
 * 1) [name].ts
 * Which contains a massive export of a typescript literal object.
 * This object can be passed to the other export from this file "Client"
 * to produce a super handy (morbidly so) database client.
 */
export const Generate = async (params: MorbidParams) => {
  await new extractor.SchemaExtractor(new pg.Pool(params.pg)).extract(params.destination, params.schemas);
};

/**
 * Import the generated [name].ts and pass it as the definition.
 * The returned anonymous class can be new'd up into a database client
 * with intellisense and full type information (via typescript generics)
 */
export const Morbid = <T>(definition: T) => {
  return {
    table: {},
    build: {},
  };
};
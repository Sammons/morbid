import * as pg from 'pg';
import * as extractor from './extraction/schema-extractor';
import { MorbidTableClientWrapper } from './interface/table-client-wrapper';
import { MorbidPGClientTracker } from './interface/client-tracker';
import { TransactionOptions, MorbidTransaction } from './interface/transaction';
import { MorbidBuilder } from './interface/builder/builder';
import { Migrater } from './migrations/migrater';

interface MorbidParams {
  pg: pg.Pool;
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
  await new extractor.SchemaExtractor(params.pg).extract(params.destination, params.schemas);
};

/**
 * Import the generated [name].ts and pass it as the definition.
 * The returned anonymous class can be new'd up into a database client
 * with intellisense and full type information (via typescript generics)
 */
export class Morbid<T, C>{

  constructor(private definition: T, private pool: pg.Pool) { }
  private clientTracker = new MorbidPGClientTracker(this.pool);

  tables = new MorbidTableClientWrapper<T, C>(this.definition, this.clientTracker).build();
  builder = new MorbidBuilder<T, C, {}>(this.definition, this.clientTracker);
  startTransaction = async (opts?: TransactionOptions) => {
    // declare error first for correct stack
    const failure = new Error('Transaction was not initialized!');
    const transaction = new MorbidTransaction(opts || {
      isolation: 'committed',
    }, this.clientTracker);
    if (await transaction.initialize()) {
      return transaction;
    }
    throw failure;
  }

}

export { Migrater };
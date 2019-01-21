import { PoolClient } from 'pg';
import { MorbidPGClientTracker } from './client-tracker';

/**
 * From 9.5 docs
 * Isolation Level   DirtyRead      NonrepeatableRead   PhantomRead      Serialization Anomaly
 * 
 * Read uncommitted  Allowed,        Possible           Possible         Possible
 *                   but not in PG
 * Read committed    Not possible    Possible           Possible         Possible
 * 
 * Repeatable read   Not possible    Not possible       Allowed, 
 *                                                      but not in PG    Possible
 * Serializable      Not possible    Not possible       Not possible     Not possible
 */

export interface TransactionOptions {
  isolation: 'uncommitted' | 'committed' | 'repeatable' | 'serializable';
}
const isolationLevels: { [K in TransactionOptions['isolation']]: string } = {
  uncommitted: 'read uncommitted',
  committed: 'read committed',
  repeatable: 'repeatable read',
  serializable: 'serializable',
};
/**
 * Pass this to Run to tie transactions together
 */
export class MorbidTransaction {
  constructor(
    private opts: TransactionOptions,
    private tracker: MorbidPGClientTracker
  ) {
  }

  private initialized = false;
  private committed = false;
  private aborted = false;

  private get canAbort() { return this.initialized && (!this.aborted && !this.committed); }
  private get canInitialize() { return !this.initialized; }
  private get canCommit() { return this.initialized && (!this.aborted && !this.committed); }

  id?: string = undefined;
  client?: PoolClient = undefined;

  async initialize() {
    if (this.canInitialize) {
      const { client, id } = await this.tracker.acquire();
      this.client = client;
      this.id = id;
      if (client) {
        if (!this.opts) {
          await client.query('begin'); // TODO allow isolation levels
        } else {
          if (!isolationLevels[this.opts.isolation]) {
            throw new Error(`Invalid isolation level: ${this.opts.isolation}`);
          }
          await client.query(`begin transaction isolation level ${isolationLevels[this.opts.isolation]}`);
        }
        this.initialized = true;
      }
    }
    return this.initialized;
  }

  async commit() {
    if (this.canCommit && this.client && this.id) {
      await this.client.query('COMMIT;');
      this.committed = true;
      this.tracker.release(this.id);
    }
    return this.committed;
  }
  async abort() {
    if (this.canAbort && this.client && this.id) {
      await this.client.query('ABORT;');
      this.aborted = true;
      this.tracker.release(this.id);
    }
    return this.aborted;
  }
}
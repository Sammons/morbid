import { Pool, PoolClient } from 'pg';
import * as uuid from 'uuid';
/**
 * Tracks active clients for a Morbid instance.
 * So that transactions can look up the current connection
 * and tie together properly
 */
export class MorbidPGClientTracker {
  private active = new Map<string, PoolClient>();
  private clients = new Map<PoolClient, Set<string>>();
  constructor(private pool: Pool) { }
  private clear(client: PoolClient) {
    if (this.clients.has(client)) {
      const ids = Array.from(this.clients.get(client)!);
      ids.forEach(id => {
        this.active.delete(id);
      });
      this.clients.delete(client);
    }
  }

  async acquire(id?: string) {
    if (!id) {
      const id = uuid.v4();
      const client = await this.pool.connect();
      if (!this.clients.has(client)) {
        client.once('error', () => this.clear(client));
        client.once('close', () => this.clear(client));
        this.clients.set(client, new Set());
      }
      this.clients.get(client)!.add(id);
      this.active.set(id, client);

      return { id, client };
    } else {
      const client = this.active.get(id);
      if (!client) {
        throw new Error(`ID is already completed: ${id}!`);
      }
      return { id, client };
    }
  }

  release(id: string) {
    if (this.active.has(id)) {
      const client = this.active.get(id) as PoolClient;
      if (this.clients.has(client)) {
        this.clients.get(client)!.delete(id);
        client.release();
      } else {
        throw new Error('impossible state, where client is not indexed but the id is');
      }
      this.active.delete(id);
    }
    return !this.active.has(id);
  }
}
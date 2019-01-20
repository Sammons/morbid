import { Pool, Query } from 'pg';

interface MorbidQuery {
  values: any[];
  text: string;
}

export const Run = async <T>(pool: Pool, query: MorbidQuery): Promise<T[]> => {
  // workaround bad async stacks in node < 12 https://github.com/nodejs/node/issues/11865
  const error = new Error();
  const client = await pool.connect();
  return new Promise((resolve, reject) => {
    try {
      const pgQuery = new (Query as any)(query.text, query.values);
      const rows: T[] = [];
      const fail = (e: Error) => {
        // TODO: move this out into a util of some sort
        e.stack = (e.stack || '') + '\n' + (error.stack || '').split('\n').slice(1).join('\n');
        console.log(e.stack.split('\n').slice(1));
        return e;
      };
      pgQuery.on('row', (row: any) => {
        rows.push(row);
      });
      pgQuery.on('end', () => {
        resolve(rows);
      });
      pgQuery.on('error', (e: Error) => {
        console.log('error');
        reject(fail(e));
      });
      client.query(pgQuery);
    } catch (e) {
      reject(new Error('Postgres query initiation failure ' + e.message));
    } finally {
      client.release();
    }
  });
};
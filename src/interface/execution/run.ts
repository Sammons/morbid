import { Query } from 'pg';
import { RunOptions } from './execution-params';
const _ = require('lodash');

const fail = (...errors: Error[]) => {
  let stack = errors[0].stack;
  for (let i = 1; i < errors.length; ++i) {
    stack += '\n' + (errors[i].stack || '').split('\n').slice(1).join('\n');
  }
  errors[0].stack = stack;
  return errors[0];
};

export const Run = async <T>(opts: RunOptions, mapping?: { [K: string]: string }): Promise<T[]> => {
  // workaround bad async stacks in node < 12 https://github.com/nodejs/node/issues/11865
  const defaultError = new Error();

  let { client, id } =
    opts.transaction && opts.transaction.id
      ? await opts.clientTracker.acquire(opts.transaction.id)
      : await opts.clientTracker.acquire();

  if (client == null) {
    throw fail(new Error('could not acquire client to run'), defaultError);
  } else {
    return new Promise((resolve, reject) => {
      try {
        console.log(opts.query.text);
        const pgQuery = new (Query as any)(opts.query.text, opts.query.values);
        const rows: any[] = [];
        pgQuery.on('row', (row: any) => {
          if (!mapping) {
            rows.push(row);
          } else {
            const mappingKeys = Object.keys(mapping);
            let newRow: T = {} as any;
            mappingKeys.forEach(k => _.set(newRow, mapping[k], row[k]));
            rows.push(newRow);
          }
        });
        pgQuery.on('end', () => {
          resolve(rows);
        });
        pgQuery.on('error', async (e: Error) => {
          if (opts.transaction) {
            try {
              await opts.transaction.abort();
            } catch (abortFailure) {
              return reject(fail(e, abortFailure, defaultError));
            }
          }
          return reject(fail(e, defaultError));
        });
        client!.query(pgQuery);
      } catch (e) {
        reject(fail(e, defaultError));
      } finally {
        if (!opts.transaction) {
          opts.clientTracker.release(id);
        }
      }
    });
  }
};
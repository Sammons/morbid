import { RunOptions } from './execution-params';
import * as QueryStream from 'pg-query-stream';
import { Readable } from 'stream';

const fail = (...errors: Error[]) => {
  let stack = errors[0].stack;
  for (let i = 1; i < errors.length; ++i) {
    stack += '\n' + (errors[i].stack || '').split('\n').slice(1).join('\n');
  }
  errors[0].stack = stack;
  return errors[0];
};

export interface MorbidReadable<T> extends Readable {
  [Symbol.asyncIterator](): AsyncIterableIterator<T>;
  read(size?: number): T[];
}

export const Pipe = <T>(opts: RunOptions): MorbidReadable<T> => {
  // workaround bad async stacks in node < 12 https://github.com/nodejs/node/issues/11865
  const defaultError = new Error();
  const streamOpts = {
    batchSize: 1024,
    highWaterMark: 2048,
  };
  const queryStream = new QueryStream(opts.query.text, opts.query.values, streamOpts);
  process.nextTick(async () => {
    try {
      let { client, id } =
        opts.transaction && opts.transaction.id
          ? await opts.clientTracker.acquire(opts.transaction.id)
          : await opts.clientTracker.acquire();

      if (client == null) {
        throw fail(new Error('could not acquire client to run'), defaultError);
      } else {
        queryStream.once('close', () => {
          if (!opts.transaction) {
            opts.clientTracker.release(id);
          }
        });
        queryStream.once('error', async streamError => {
          if (opts.transaction) {
            try {
              await opts.transaction.abort();
            } catch (abortError) {
              throw fail(streamError, abortError, defaultError);
            }
          } else {
            opts.clientTracker.release(id);
          }
        });
        client.query(queryStream);
      }
    } catch (err) {
      queryStream.emit('error', err);
    }
  });
  return queryStream;
};
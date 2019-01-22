import { MorbidPGClientTracker } from '../client-tracker';
import { MorbidTransaction } from '../transaction';

interface MorbidQuery {
  values: any[];
  text: string;
}

export interface RunOptions {
  clientTracker: MorbidPGClientTracker;
  query: MorbidQuery;
  transaction?: MorbidTransaction;
}

export interface PipeOptions extends RunOptions {
  batchSize: number;
  highWaterMark: number;
}
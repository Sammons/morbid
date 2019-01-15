import * as pg from 'pg';
import * as I from '../inference/definition-inference';
import { MorbidTableClient } from './table-client';

export class MorbidTableClientBuilder<T> {
  constructor(private definition: T, connection: pg.ConnectionConfig) { }
  build() {
    const tableClient = {} as {
      [K in I.TableNames<T>]: MorbidTableClient<T, K>
    };
    const definition = this.definition as unknown as I.AnyDefinition;
    const schemaNames = Object.keys(definition.schemas);

    const buildIndividual = tableOrView => {

    };
    schemaNames.forEach(current => {
      const tables = definition.schemas[current].tables;
      Object.keys(tables).forEach(tableName => {
        buildIndividual(tables[tableName]);
      });
      const views = definition.schemas[current].views;
    });
    names;
    tableClient.;
    return tableClient;
  }
}
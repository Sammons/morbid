import * as pg from 'pg';
import * as I from '../inference/definition-inference';
import { MorbidTableClient } from './table-client';

export class MorbidTableClientBuilder<T, C> {
  constructor(private definition: T, connection: pg.ConnectionConfig) { }
  build() {
    const tableClient = {} as {
      [K in I.TableNames<T>]: MorbidTableClient<T, C, K>
    };
    const definition = this.definition as unknown as I.AnyDefinition;
    const schemaNames = Object.keys(definition.schemas);

    const buildIndividual = (tableOrView: any) => {
      return new MorbidTableClient(tableOrView);
    };
    schemaNames.forEach(current => {
      const tables = definition.schemas[current].tables;
      Object.keys(tables).forEach(tableName => {
        tableClient[tableName as I.TableNames<T>] = buildIndividual(tables[tableName]);
      });
      const views = definition.schemas[current].views;
      Object.keys(views).forEach(viewName => {
        tableClient[viewName as I.TableNames<T>] = buildIndividual(views[viewName]);
      });
    });
    return tableClient;
  }
}
import * as pg from 'pg';
import * as I from '../inference/definition-inference';
import { MorbidTableClientRoot } from './table-client-root';

export class MorbidTableClientWrapper<T, C> {
  constructor(private definition: T, private pool: pg.Pool) { }
  build() {
    const tableClient = {} as {
      [K in I.TableNames<T>]: MorbidTableClientRoot<T, C, K>
    };
    const definition = this.definition as unknown as I.AnyDefinition;
    const schemaNames = Object.keys(definition.schemas);

    const buildIndividual = (tableOrView: any) => {
      return new MorbidTableClientRoot(this.pool, tableOrView);
    };
    schemaNames.forEach(current => {
      const tables = definition.schemas[current].tables;
      Object.keys(tables).forEach(tableName => {
        tableClient[tableName as I.TableNames<T>] = buildIndividual(Object.assign(
          {}, tables[tableName], { schema: current }
        ));
      });
      const views = definition.schemas[current].views;
      Object.keys(views).forEach(viewName => {
        tableClient[viewName as I.TableNames<T>] = buildIndividual(Object.assign(
          {}, views[viewName], { schema: current }
        ));
      });
    });
    return tableClient;
  }
}
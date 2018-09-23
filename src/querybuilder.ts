import { SomeDefinition } from "./interfaces";

export class QueryBuilder<T extends SomeDefinition> {
  constructor(private definition: T) { }
}

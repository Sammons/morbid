import * as T from '../definition-inference';
import { StringKeys } from '../common-types';

export function Keys<T>(o: T) {
  return Object.keys(o) as (keyof T)[];
}
export function Flatten<T extends (E | [])[], E>(o: T): E[] {
  const result: E[] = [];
  o.forEach(el => {
    Array.isArray(el) ? result.push(...el) : result.push(el)
  });
  return result;
}

export function ExtractAllViewOrTableNames<Def extends any>(def: Def){
    const schemaNames = Object.keys(def.schemas);
    let names: string[] = [];

    schemaNames.forEach(schemaName => {
      names.push(...Object.keys(def.schemas[schemaName].tables)),
      names.push(...Object.keys(def.schemas[schemaName].views))
    });
    return names as T.AllViewOrTableNamesInDef<Def>[] ;
}
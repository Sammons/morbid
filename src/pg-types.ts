// used to convert a value like "text" into a type e.g. number
export type TypeMap = {
  varchar: string;
  "character varying": string;
  "\"char\"": string;
  text: string;
  integer: number;
  "timestamp with time zone": Date,
  name: string;
  int4: number;
  int2: number;
  jsonb: {};
  json: {};
};
export type TypeNames = keyof TypeMap;
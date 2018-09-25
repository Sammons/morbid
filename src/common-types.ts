export type StringKeys<T> = Exclude<keyof T, number | symbol>;
export type OneOrMore<T> = ({
  [K in keyof T]: { [SubK in K]: T[K] } & Partial<Pick<T, Exclude<keyof T, K>>>
})[keyof T];
export type TupleElements<T extends string[]> = T[number];
export function StrEnum<T extends string[]>(...t: T) {
  const e = {};
  return e as any as {
    [K in TupleElements<T>]: K;
  };
}
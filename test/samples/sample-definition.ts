// this is a sample of what generated files will look like:

// exact string
const s = <Strings extends string[]>(...strings: Strings) => strings[0] as Strings[0];
// exact tuple
const l = <Strings extends string[]>(...strings: Strings) => strings as Strings;
// bool as "T" or "F"
const b = <Strings extends Array<("T" | "F")>>(...strings: Strings) => strings[0] as Strings[0];

export const Def = {
  schemas: {
    test: {
      name: s("test"),
      tables: {
        one: {
          name: s("one"),
          columns: {
            id: {
              name: s("id"),
              type: s("int4"),
              nullable: b("F"),
            },
            v: {
              name: s("v"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
            i_am_a_pk: {
              name: s("i_am_a_pk"),
              struct: s("BTREE"),
              unique: b("F"),
              columns: l("id", "v"),
            },
          },
        },
      },
    },
  },
};

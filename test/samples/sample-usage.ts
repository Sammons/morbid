import * as pg from "pg";
import { Morbid } from "../../src";
import { Wrap } from "../../src/definition-inference";
import { Def } from "./sample-definition";
const pool = new pg.Pool({

});

const morbid = new Morbid({
  pool: new pg.Pool({
    application_name: "sample_morbid",
    database: "test",
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    min: 1,
    max: 10,
  }),
});

// when you disagree with the type morbid is detecting for a specific column
// you can override it:
type ColumnTypeOverrides = {
  test: {//  schema
    one: {// table
      id: {// column
        test: number;
      },
    },
  },
};

const qb = morbid.querybuilder<typeof Def, ColumnTypeOverrides>(Def);

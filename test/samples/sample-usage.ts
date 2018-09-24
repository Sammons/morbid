import * as pg from "pg";
import "source-map-support/register";
import { Morbid } from "../../src";
import { Def } from "./morbid-definition";
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
  information_schema: {//  schema
    // tables: {// table
    //   // table_name: string
    // },
  },
};

const qb = morbid.querybuilder(Def);

const schemaQb = qb.using("information_schema");

schemaQb.fromTable("tables").where({
  tables: {
    table_name: "tables",
    table_type: "VIEW",
  },
}).selectColumns({
  tables: ["table_name", "table_type", "table_schema"],
}).run().then(r => console.log(r)).catch(e => console.log(e));

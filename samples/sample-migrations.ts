import * as pg from "pg";
import { Morbid } from "../../src";

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

morbid.extractSchema({
  destinationFile: "../morbid-definition.ts",
  schemas: ["information_schema"],
});

// TODO: build migrator

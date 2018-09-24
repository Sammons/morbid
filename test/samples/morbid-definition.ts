
// this is a generated file.
// exact string
const s = <Strings extends string[]>(...strings: Strings) => strings[0] as Strings[0];
// exact tuple
const l = <Strings extends string[]>(...strings: Strings) => strings as Strings;
// bool as "T" or "F"
const b = <Strings extends Array<("T" | "F")>>(...strings: Strings) => strings[0] as Strings[0];

export const Def = {
  schemas: {
    pg_catalog: {
      name: s("pg_catalog"),
      tables: {
        pg_statistic: {
          name: s("pg_statistic"),
          columns: {
            starelid: {
              name: s("starelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            staattnum: {
              name: s("staattnum"),
              type: s("smallint"),
              nullable: b("F"),
            },
            stainherit: {
              name: s("stainherit"),
              type: s("boolean"),
              nullable: b("F"),
            },
            stanullfrac: {
              name: s("stanullfrac"),
              type: s("real"),
              nullable: b("F"),
            },
            stawidth: {
              name: s("stawidth"),
              type: s("integer"),
              nullable: b("F"),
            },
            stadistinct: {
              name: s("stadistinct"),
              type: s("real"),
              nullable: b("F"),
            },
            stakind1: {
              name: s("stakind1"),
              type: s("smallint"),
              nullable: b("F"),
            },
            stakind2: {
              name: s("stakind2"),
              type: s("smallint"),
              nullable: b("F"),
            },
            stakind3: {
              name: s("stakind3"),
              type: s("smallint"),
              nullable: b("F"),
            },
            stakind4: {
              name: s("stakind4"),
              type: s("smallint"),
              nullable: b("F"),
            },
            stakind5: {
              name: s("stakind5"),
              type: s("smallint"),
              nullable: b("F"),
            },
            staop1: {
              name: s("staop1"),
              type: s("oid"),
              nullable: b("F"),
            },
            staop2: {
              name: s("staop2"),
              type: s("oid"),
              nullable: b("F"),
            },
            staop3: {
              name: s("staop3"),
              type: s("oid"),
              nullable: b("F"),
            },
            staop4: {
              name: s("staop4"),
              type: s("oid"),
              nullable: b("F"),
            },
            staop5: {
              name: s("staop5"),
              type: s("oid"),
              nullable: b("F"),
            },
            stanumbers1: {
              name: s("stanumbers1"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            stanumbers2: {
              name: s("stanumbers2"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            stanumbers3: {
              name: s("stanumbers3"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            stanumbers4: {
              name: s("stanumbers4"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            stanumbers5: {
              name: s("stanumbers5"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            stavalues1: {
              name: s("stavalues1"),
              type: s("anyarray"),
              nullable: b("T"),
            },
            stavalues2: {
              name: s("stavalues2"),
              type: s("anyarray"),
              nullable: b("T"),
            },
            stavalues3: {
              name: s("stavalues3"),
              type: s("anyarray"),
              nullable: b("T"),
            },
            stavalues4: {
              name: s("stavalues4"),
              type: s("anyarray"),
              nullable: b("T"),
            },
            stavalues5: {
              name: s("stavalues5"),
              type: s("anyarray"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_type: {
          name: s("pg_type"),
          columns: {
            typname: {
              name: s("typname"),
              type: s("name"),
              nullable: b("F"),
            },
            typnamespace: {
              name: s("typnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            typowner: {
              name: s("typowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            typlen: {
              name: s("typlen"),
              type: s("smallint"),
              nullable: b("F"),
            },
            typbyval: {
              name: s("typbyval"),
              type: s("boolean"),
              nullable: b("F"),
            },
            typtype: {
              name: s("typtype"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            typcategory: {
              name: s("typcategory"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            typispreferred: {
              name: s("typispreferred"),
              type: s("boolean"),
              nullable: b("F"),
            },
            typisdefined: {
              name: s("typisdefined"),
              type: s("boolean"),
              nullable: b("F"),
            },
            typdelim: {
              name: s("typdelim"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            typrelid: {
              name: s("typrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            typelem: {
              name: s("typelem"),
              type: s("oid"),
              nullable: b("F"),
            },
            typarray: {
              name: s("typarray"),
              type: s("oid"),
              nullable: b("F"),
            },
            typinput: {
              name: s("typinput"),
              type: s("regproc"),
              nullable: b("F"),
            },
            typoutput: {
              name: s("typoutput"),
              type: s("regproc"),
              nullable: b("F"),
            },
            typreceive: {
              name: s("typreceive"),
              type: s("regproc"),
              nullable: b("F"),
            },
            typsend: {
              name: s("typsend"),
              type: s("regproc"),
              nullable: b("F"),
            },
            typmodin: {
              name: s("typmodin"),
              type: s("regproc"),
              nullable: b("F"),
            },
            typmodout: {
              name: s("typmodout"),
              type: s("regproc"),
              nullable: b("F"),
            },
            typanalyze: {
              name: s("typanalyze"),
              type: s("regproc"),
              nullable: b("F"),
            },
            typalign: {
              name: s("typalign"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            typstorage: {
              name: s("typstorage"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            typnotnull: {
              name: s("typnotnull"),
              type: s("boolean"),
              nullable: b("F"),
            },
            typbasetype: {
              name: s("typbasetype"),
              type: s("oid"),
              nullable: b("F"),
            },
            typtypmod: {
              name: s("typtypmod"),
              type: s("integer"),
              nullable: b("F"),
            },
            typndims: {
              name: s("typndims"),
              type: s("integer"),
              nullable: b("F"),
            },
            typcollation: {
              name: s("typcollation"),
              type: s("oid"),
              nullable: b("F"),
            },
            typdefaultbin: {
              name: s("typdefaultbin"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
            typdefault: {
              name: s("typdefault"),
              type: s("text"),
              nullable: b("T"),
            },
            typacl: {
              name: s("typacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_policy: {
          name: s("pg_policy"),
          columns: {
            polname: {
              name: s("polname"),
              type: s("name"),
              nullable: b("F"),
            },
            polrelid: {
              name: s("polrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            polcmd: {
              name: s("polcmd"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            polpermissive: {
              name: s("polpermissive"),
              type: s("boolean"),
              nullable: b("F"),
            },
            polroles: {
              name: s("polroles"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            polqual: {
              name: s("polqual"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
            polwithcheck: {
              name: s("polwithcheck"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_authid: {
          name: s("pg_authid"),
          columns: {
            rolname: {
              name: s("rolname"),
              type: s("name"),
              nullable: b("F"),
            },
            rolsuper: {
              name: s("rolsuper"),
              type: s("boolean"),
              nullable: b("F"),
            },
            rolinherit: {
              name: s("rolinherit"),
              type: s("boolean"),
              nullable: b("F"),
            },
            rolcreaterole: {
              name: s("rolcreaterole"),
              type: s("boolean"),
              nullable: b("F"),
            },
            rolcreatedb: {
              name: s("rolcreatedb"),
              type: s("boolean"),
              nullable: b("F"),
            },
            rolcanlogin: {
              name: s("rolcanlogin"),
              type: s("boolean"),
              nullable: b("F"),
            },
            rolreplication: {
              name: s("rolreplication"),
              type: s("boolean"),
              nullable: b("F"),
            },
            rolbypassrls: {
              name: s("rolbypassrls"),
              type: s("boolean"),
              nullable: b("F"),
            },
            rolconnlimit: {
              name: s("rolconnlimit"),
              type: s("integer"),
              nullable: b("F"),
            },
            rolpassword: {
              name: s("rolpassword"),
              type: s("text"),
              nullable: b("T"),
            },
            rolvaliduntil: {
              name: s("rolvaliduntil"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_user_mapping: {
          name: s("pg_user_mapping"),
          columns: {
            umuser: {
              name: s("umuser"),
              type: s("oid"),
              nullable: b("F"),
            },
            umserver: {
              name: s("umserver"),
              type: s("oid"),
              nullable: b("F"),
            },
            umoptions: {
              name: s("umoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_subscription: {
          name: s("pg_subscription"),
          columns: {
            subdbid: {
              name: s("subdbid"),
              type: s("oid"),
              nullable: b("F"),
            },
            subname: {
              name: s("subname"),
              type: s("name"),
              nullable: b("F"),
            },
            subowner: {
              name: s("subowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            subenabled: {
              name: s("subenabled"),
              type: s("boolean"),
              nullable: b("F"),
            },
            subconninfo: {
              name: s("subconninfo"),
              type: s("text"),
              nullable: b("F"),
            },
            subslotname: {
              name: s("subslotname"),
              type: s("name"),
              nullable: b("F"),
            },
            subsynccommit: {
              name: s("subsynccommit"),
              type: s("text"),
              nullable: b("F"),
            },
            subpublications: {
              name: s("subpublications"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_attribute: {
          name: s("pg_attribute"),
          columns: {
            attrelid: {
              name: s("attrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            attname: {
              name: s("attname"),
              type: s("name"),
              nullable: b("F"),
            },
            atttypid: {
              name: s("atttypid"),
              type: s("oid"),
              nullable: b("F"),
            },
            attstattarget: {
              name: s("attstattarget"),
              type: s("integer"),
              nullable: b("F"),
            },
            attlen: {
              name: s("attlen"),
              type: s("smallint"),
              nullable: b("F"),
            },
            attnum: {
              name: s("attnum"),
              type: s("smallint"),
              nullable: b("F"),
            },
            attndims: {
              name: s("attndims"),
              type: s("integer"),
              nullable: b("F"),
            },
            attcacheoff: {
              name: s("attcacheoff"),
              type: s("integer"),
              nullable: b("F"),
            },
            atttypmod: {
              name: s("atttypmod"),
              type: s("integer"),
              nullable: b("F"),
            },
            attbyval: {
              name: s("attbyval"),
              type: s("boolean"),
              nullable: b("F"),
            },
            attstorage: {
              name: s("attstorage"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            attalign: {
              name: s("attalign"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            attnotnull: {
              name: s("attnotnull"),
              type: s("boolean"),
              nullable: b("F"),
            },
            atthasdef: {
              name: s("atthasdef"),
              type: s("boolean"),
              nullable: b("F"),
            },
            attidentity: {
              name: s("attidentity"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            attisdropped: {
              name: s("attisdropped"),
              type: s("boolean"),
              nullable: b("F"),
            },
            attislocal: {
              name: s("attislocal"),
              type: s("boolean"),
              nullable: b("F"),
            },
            attinhcount: {
              name: s("attinhcount"),
              type: s("integer"),
              nullable: b("F"),
            },
            attcollation: {
              name: s("attcollation"),
              type: s("oid"),
              nullable: b("F"),
            },
            attacl: {
              name: s("attacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            attoptions: {
              name: s("attoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            attfdwoptions: {
              name: s("attfdwoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_proc: {
          name: s("pg_proc"),
          columns: {
            proname: {
              name: s("proname"),
              type: s("name"),
              nullable: b("F"),
            },
            pronamespace: {
              name: s("pronamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            proowner: {
              name: s("proowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            prolang: {
              name: s("prolang"),
              type: s("oid"),
              nullable: b("F"),
            },
            procost: {
              name: s("procost"),
              type: s("real"),
              nullable: b("F"),
            },
            prorows: {
              name: s("prorows"),
              type: s("real"),
              nullable: b("F"),
            },
            provariadic: {
              name: s("provariadic"),
              type: s("oid"),
              nullable: b("F"),
            },
            protransform: {
              name: s("protransform"),
              type: s("regproc"),
              nullable: b("F"),
            },
            proisagg: {
              name: s("proisagg"),
              type: s("boolean"),
              nullable: b("F"),
            },
            proiswindow: {
              name: s("proiswindow"),
              type: s("boolean"),
              nullable: b("F"),
            },
            prosecdef: {
              name: s("prosecdef"),
              type: s("boolean"),
              nullable: b("F"),
            },
            proleakproof: {
              name: s("proleakproof"),
              type: s("boolean"),
              nullable: b("F"),
            },
            proisstrict: {
              name: s("proisstrict"),
              type: s("boolean"),
              nullable: b("F"),
            },
            proretset: {
              name: s("proretset"),
              type: s("boolean"),
              nullable: b("F"),
            },
            provolatile: {
              name: s("provolatile"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            proparallel: {
              name: s("proparallel"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            pronargs: {
              name: s("pronargs"),
              type: s("smallint"),
              nullable: b("F"),
            },
            pronargdefaults: {
              name: s("pronargdefaults"),
              type: s("smallint"),
              nullable: b("F"),
            },
            prorettype: {
              name: s("prorettype"),
              type: s("oid"),
              nullable: b("F"),
            },
            proargtypes: {
              name: s("proargtypes"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
            proallargtypes: {
              name: s("proallargtypes"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            proargmodes: {
              name: s("proargmodes"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            proargnames: {
              name: s("proargnames"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            proargdefaults: {
              name: s("proargdefaults"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
            protrftypes: {
              name: s("protrftypes"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            prosrc: {
              name: s("prosrc"),
              type: s("text"),
              nullable: b("F"),
            },
            probin: {
              name: s("probin"),
              type: s("text"),
              nullable: b("T"),
            },
            proconfig: {
              name: s("proconfig"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            proacl: {
              name: s("proacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_class: {
          name: s("pg_class"),
          columns: {
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("F"),
            },
            relnamespace: {
              name: s("relnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            reltype: {
              name: s("reltype"),
              type: s("oid"),
              nullable: b("F"),
            },
            reloftype: {
              name: s("reloftype"),
              type: s("oid"),
              nullable: b("F"),
            },
            relowner: {
              name: s("relowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            relam: {
              name: s("relam"),
              type: s("oid"),
              nullable: b("F"),
            },
            relfilenode: {
              name: s("relfilenode"),
              type: s("oid"),
              nullable: b("F"),
            },
            reltablespace: {
              name: s("reltablespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            relpages: {
              name: s("relpages"),
              type: s("integer"),
              nullable: b("F"),
            },
            reltuples: {
              name: s("reltuples"),
              type: s("real"),
              nullable: b("F"),
            },
            relallvisible: {
              name: s("relallvisible"),
              type: s("integer"),
              nullable: b("F"),
            },
            reltoastrelid: {
              name: s("reltoastrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            relhasindex: {
              name: s("relhasindex"),
              type: s("boolean"),
              nullable: b("F"),
            },
            relisshared: {
              name: s("relisshared"),
              type: s("boolean"),
              nullable: b("F"),
            },
            relpersistence: {
              name: s("relpersistence"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            relkind: {
              name: s("relkind"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            relnatts: {
              name: s("relnatts"),
              type: s("smallint"),
              nullable: b("F"),
            },
            relchecks: {
              name: s("relchecks"),
              type: s("smallint"),
              nullable: b("F"),
            },
            relhasoids: {
              name: s("relhasoids"),
              type: s("boolean"),
              nullable: b("F"),
            },
            relhaspkey: {
              name: s("relhaspkey"),
              type: s("boolean"),
              nullable: b("F"),
            },
            relhasrules: {
              name: s("relhasrules"),
              type: s("boolean"),
              nullable: b("F"),
            },
            relhastriggers: {
              name: s("relhastriggers"),
              type: s("boolean"),
              nullable: b("F"),
            },
            relhassubclass: {
              name: s("relhassubclass"),
              type: s("boolean"),
              nullable: b("F"),
            },
            relrowsecurity: {
              name: s("relrowsecurity"),
              type: s("boolean"),
              nullable: b("F"),
            },
            relforcerowsecurity: {
              name: s("relforcerowsecurity"),
              type: s("boolean"),
              nullable: b("F"),
            },
            relispopulated: {
              name: s("relispopulated"),
              type: s("boolean"),
              nullable: b("F"),
            },
            relreplident: {
              name: s("relreplident"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            relispartition: {
              name: s("relispartition"),
              type: s("boolean"),
              nullable: b("F"),
            },
            relfrozenxid: {
              name: s("relfrozenxid"),
              type: s("xid"),
              nullable: b("F"),
            },
            relminmxid: {
              name: s("relminmxid"),
              type: s("xid"),
              nullable: b("F"),
            },
            relacl: {
              name: s("relacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            reloptions: {
              name: s("reloptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            relpartbound: {
              name: s("relpartbound"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_attrdef: {
          name: s("pg_attrdef"),
          columns: {
            adrelid: {
              name: s("adrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            adnum: {
              name: s("adnum"),
              type: s("smallint"),
              nullable: b("F"),
            },
            adbin: {
              name: s("adbin"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
            adsrc: {
              name: s("adsrc"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_constraint: {
          name: s("pg_constraint"),
          columns: {
            conname: {
              name: s("conname"),
              type: s("name"),
              nullable: b("F"),
            },
            connamespace: {
              name: s("connamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            contype: {
              name: s("contype"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            condeferrable: {
              name: s("condeferrable"),
              type: s("boolean"),
              nullable: b("F"),
            },
            condeferred: {
              name: s("condeferred"),
              type: s("boolean"),
              nullable: b("F"),
            },
            convalidated: {
              name: s("convalidated"),
              type: s("boolean"),
              nullable: b("F"),
            },
            conrelid: {
              name: s("conrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            contypid: {
              name: s("contypid"),
              type: s("oid"),
              nullable: b("F"),
            },
            conindid: {
              name: s("conindid"),
              type: s("oid"),
              nullable: b("F"),
            },
            confrelid: {
              name: s("confrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            confupdtype: {
              name: s("confupdtype"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            confdeltype: {
              name: s("confdeltype"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            confmatchtype: {
              name: s("confmatchtype"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            conislocal: {
              name: s("conislocal"),
              type: s("boolean"),
              nullable: b("F"),
            },
            coninhcount: {
              name: s("coninhcount"),
              type: s("integer"),
              nullable: b("F"),
            },
            connoinherit: {
              name: s("connoinherit"),
              type: s("boolean"),
              nullable: b("F"),
            },
            conkey: {
              name: s("conkey"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            confkey: {
              name: s("confkey"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            conpfeqop: {
              name: s("conpfeqop"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            conppeqop: {
              name: s("conppeqop"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            conffeqop: {
              name: s("conffeqop"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            conexclop: {
              name: s("conexclop"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            conbin: {
              name: s("conbin"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
            consrc: {
              name: s("consrc"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_inherits: {
          name: s("pg_inherits"),
          columns: {
            inhrelid: {
              name: s("inhrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            inhparent: {
              name: s("inhparent"),
              type: s("oid"),
              nullable: b("F"),
            },
            inhseqno: {
              name: s("inhseqno"),
              type: s("integer"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_index: {
          name: s("pg_index"),
          columns: {
            indexrelid: {
              name: s("indexrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            indrelid: {
              name: s("indrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            indnatts: {
              name: s("indnatts"),
              type: s("smallint"),
              nullable: b("F"),
            },
            indisunique: {
              name: s("indisunique"),
              type: s("boolean"),
              nullable: b("F"),
            },
            indisprimary: {
              name: s("indisprimary"),
              type: s("boolean"),
              nullable: b("F"),
            },
            indisexclusion: {
              name: s("indisexclusion"),
              type: s("boolean"),
              nullable: b("F"),
            },
            indimmediate: {
              name: s("indimmediate"),
              type: s("boolean"),
              nullable: b("F"),
            },
            indisclustered: {
              name: s("indisclustered"),
              type: s("boolean"),
              nullable: b("F"),
            },
            indisvalid: {
              name: s("indisvalid"),
              type: s("boolean"),
              nullable: b("F"),
            },
            indcheckxmin: {
              name: s("indcheckxmin"),
              type: s("boolean"),
              nullable: b("F"),
            },
            indisready: {
              name: s("indisready"),
              type: s("boolean"),
              nullable: b("F"),
            },
            indislive: {
              name: s("indislive"),
              type: s("boolean"),
              nullable: b("F"),
            },
            indisreplident: {
              name: s("indisreplident"),
              type: s("boolean"),
              nullable: b("F"),
            },
            indkey: {
              name: s("indkey"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
            indcollation: {
              name: s("indcollation"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
            indclass: {
              name: s("indclass"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
            indoption: {
              name: s("indoption"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
            indexprs: {
              name: s("indexprs"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
            indpred: {
              name: s("indpred"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_operator: {
          name: s("pg_operator"),
          columns: {
            oprname: {
              name: s("oprname"),
              type: s("name"),
              nullable: b("F"),
            },
            oprnamespace: {
              name: s("oprnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            oprowner: {
              name: s("oprowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            oprkind: {
              name: s("oprkind"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            oprcanmerge: {
              name: s("oprcanmerge"),
              type: s("boolean"),
              nullable: b("F"),
            },
            oprcanhash: {
              name: s("oprcanhash"),
              type: s("boolean"),
              nullable: b("F"),
            },
            oprleft: {
              name: s("oprleft"),
              type: s("oid"),
              nullable: b("F"),
            },
            oprright: {
              name: s("oprright"),
              type: s("oid"),
              nullable: b("F"),
            },
            oprresult: {
              name: s("oprresult"),
              type: s("oid"),
              nullable: b("F"),
            },
            oprcom: {
              name: s("oprcom"),
              type: s("oid"),
              nullable: b("F"),
            },
            oprnegate: {
              name: s("oprnegate"),
              type: s("oid"),
              nullable: b("F"),
            },
            oprcode: {
              name: s("oprcode"),
              type: s("regproc"),
              nullable: b("F"),
            },
            oprrest: {
              name: s("oprrest"),
              type: s("regproc"),
              nullable: b("F"),
            },
            oprjoin: {
              name: s("oprjoin"),
              type: s("regproc"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_opfamily: {
          name: s("pg_opfamily"),
          columns: {
            opfmethod: {
              name: s("opfmethod"),
              type: s("oid"),
              nullable: b("F"),
            },
            opfname: {
              name: s("opfname"),
              type: s("name"),
              nullable: b("F"),
            },
            opfnamespace: {
              name: s("opfnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            opfowner: {
              name: s("opfowner"),
              type: s("oid"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_opclass: {
          name: s("pg_opclass"),
          columns: {
            opcmethod: {
              name: s("opcmethod"),
              type: s("oid"),
              nullable: b("F"),
            },
            opcname: {
              name: s("opcname"),
              type: s("name"),
              nullable: b("F"),
            },
            opcnamespace: {
              name: s("opcnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            opcowner: {
              name: s("opcowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            opcfamily: {
              name: s("opcfamily"),
              type: s("oid"),
              nullable: b("F"),
            },
            opcintype: {
              name: s("opcintype"),
              type: s("oid"),
              nullable: b("F"),
            },
            opcdefault: {
              name: s("opcdefault"),
              type: s("boolean"),
              nullable: b("F"),
            },
            opckeytype: {
              name: s("opckeytype"),
              type: s("oid"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_am: {
          name: s("pg_am"),
          columns: {
            amname: {
              name: s("amname"),
              type: s("name"),
              nullable: b("F"),
            },
            amhandler: {
              name: s("amhandler"),
              type: s("regproc"),
              nullable: b("F"),
            },
            amtype: {
              name: s("amtype"),
              type: s("\"char\""),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_amop: {
          name: s("pg_amop"),
          columns: {
            amopfamily: {
              name: s("amopfamily"),
              type: s("oid"),
              nullable: b("F"),
            },
            amoplefttype: {
              name: s("amoplefttype"),
              type: s("oid"),
              nullable: b("F"),
            },
            amoprighttype: {
              name: s("amoprighttype"),
              type: s("oid"),
              nullable: b("F"),
            },
            amopstrategy: {
              name: s("amopstrategy"),
              type: s("smallint"),
              nullable: b("F"),
            },
            amoppurpose: {
              name: s("amoppurpose"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            amopopr: {
              name: s("amopopr"),
              type: s("oid"),
              nullable: b("F"),
            },
            amopmethod: {
              name: s("amopmethod"),
              type: s("oid"),
              nullable: b("F"),
            },
            amopsortfamily: {
              name: s("amopsortfamily"),
              type: s("oid"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_amproc: {
          name: s("pg_amproc"),
          columns: {
            amprocfamily: {
              name: s("amprocfamily"),
              type: s("oid"),
              nullable: b("F"),
            },
            amproclefttype: {
              name: s("amproclefttype"),
              type: s("oid"),
              nullable: b("F"),
            },
            amprocrighttype: {
              name: s("amprocrighttype"),
              type: s("oid"),
              nullable: b("F"),
            },
            amprocnum: {
              name: s("amprocnum"),
              type: s("smallint"),
              nullable: b("F"),
            },
            amproc: {
              name: s("amproc"),
              type: s("regproc"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_language: {
          name: s("pg_language"),
          columns: {
            lanname: {
              name: s("lanname"),
              type: s("name"),
              nullable: b("F"),
            },
            lanowner: {
              name: s("lanowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            lanispl: {
              name: s("lanispl"),
              type: s("boolean"),
              nullable: b("F"),
            },
            lanpltrusted: {
              name: s("lanpltrusted"),
              type: s("boolean"),
              nullable: b("F"),
            },
            lanplcallfoid: {
              name: s("lanplcallfoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            laninline: {
              name: s("laninline"),
              type: s("oid"),
              nullable: b("F"),
            },
            lanvalidator: {
              name: s("lanvalidator"),
              type: s("oid"),
              nullable: b("F"),
            },
            lanacl: {
              name: s("lanacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_largeobject_metadata: {
          name: s("pg_largeobject_metadata"),
          columns: {
            lomowner: {
              name: s("lomowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            lomacl: {
              name: s("lomacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_aggregate: {
          name: s("pg_aggregate"),
          columns: {
            aggfnoid: {
              name: s("aggfnoid"),
              type: s("regproc"),
              nullable: b("F"),
            },
            aggkind: {
              name: s("aggkind"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            aggnumdirectargs: {
              name: s("aggnumdirectargs"),
              type: s("smallint"),
              nullable: b("F"),
            },
            aggtransfn: {
              name: s("aggtransfn"),
              type: s("regproc"),
              nullable: b("F"),
            },
            aggfinalfn: {
              name: s("aggfinalfn"),
              type: s("regproc"),
              nullable: b("F"),
            },
            aggcombinefn: {
              name: s("aggcombinefn"),
              type: s("regproc"),
              nullable: b("F"),
            },
            aggserialfn: {
              name: s("aggserialfn"),
              type: s("regproc"),
              nullable: b("F"),
            },
            aggdeserialfn: {
              name: s("aggdeserialfn"),
              type: s("regproc"),
              nullable: b("F"),
            },
            aggmtransfn: {
              name: s("aggmtransfn"),
              type: s("regproc"),
              nullable: b("F"),
            },
            aggminvtransfn: {
              name: s("aggminvtransfn"),
              type: s("regproc"),
              nullable: b("F"),
            },
            aggmfinalfn: {
              name: s("aggmfinalfn"),
              type: s("regproc"),
              nullable: b("F"),
            },
            aggfinalextra: {
              name: s("aggfinalextra"),
              type: s("boolean"),
              nullable: b("F"),
            },
            aggmfinalextra: {
              name: s("aggmfinalextra"),
              type: s("boolean"),
              nullable: b("F"),
            },
            aggsortop: {
              name: s("aggsortop"),
              type: s("oid"),
              nullable: b("F"),
            },
            aggtranstype: {
              name: s("aggtranstype"),
              type: s("oid"),
              nullable: b("F"),
            },
            aggtransspace: {
              name: s("aggtransspace"),
              type: s("integer"),
              nullable: b("F"),
            },
            aggmtranstype: {
              name: s("aggmtranstype"),
              type: s("oid"),
              nullable: b("F"),
            },
            aggmtransspace: {
              name: s("aggmtransspace"),
              type: s("integer"),
              nullable: b("F"),
            },
            agginitval: {
              name: s("agginitval"),
              type: s("text"),
              nullable: b("T"),
            },
            aggminitval: {
              name: s("aggminitval"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_statistic_ext: {
          name: s("pg_statistic_ext"),
          columns: {
            stxrelid: {
              name: s("stxrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            stxname: {
              name: s("stxname"),
              type: s("name"),
              nullable: b("F"),
            },
            stxnamespace: {
              name: s("stxnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            stxowner: {
              name: s("stxowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            stxkeys: {
              name: s("stxkeys"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
            stxkind: {
              name: s("stxkind"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
            stxndistinct: {
              name: s("stxndistinct"),
              type: s("pg_ndistinct"),
              nullable: b("T"),
            },
            stxdependencies: {
              name: s("stxdependencies"),
              type: s("pg_dependencies"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_rewrite: {
          name: s("pg_rewrite"),
          columns: {
            rulename: {
              name: s("rulename"),
              type: s("name"),
              nullable: b("F"),
            },
            ev_class: {
              name: s("ev_class"),
              type: s("oid"),
              nullable: b("F"),
            },
            ev_type: {
              name: s("ev_type"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            ev_enabled: {
              name: s("ev_enabled"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            is_instead: {
              name: s("is_instead"),
              type: s("boolean"),
              nullable: b("F"),
            },
            ev_qual: {
              name: s("ev_qual"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
            ev_action: {
              name: s("ev_action"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_trigger: {
          name: s("pg_trigger"),
          columns: {
            tgrelid: {
              name: s("tgrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            tgname: {
              name: s("tgname"),
              type: s("name"),
              nullable: b("F"),
            },
            tgfoid: {
              name: s("tgfoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            tgtype: {
              name: s("tgtype"),
              type: s("smallint"),
              nullable: b("F"),
            },
            tgenabled: {
              name: s("tgenabled"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            tgisinternal: {
              name: s("tgisinternal"),
              type: s("boolean"),
              nullable: b("F"),
            },
            tgconstrrelid: {
              name: s("tgconstrrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            tgconstrindid: {
              name: s("tgconstrindid"),
              type: s("oid"),
              nullable: b("F"),
            },
            tgconstraint: {
              name: s("tgconstraint"),
              type: s("oid"),
              nullable: b("F"),
            },
            tgdeferrable: {
              name: s("tgdeferrable"),
              type: s("boolean"),
              nullable: b("F"),
            },
            tginitdeferred: {
              name: s("tginitdeferred"),
              type: s("boolean"),
              nullable: b("F"),
            },
            tgnargs: {
              name: s("tgnargs"),
              type: s("smallint"),
              nullable: b("F"),
            },
            tgattr: {
              name: s("tgattr"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
            tgargs: {
              name: s("tgargs"),
              type: s("bytea"),
              nullable: b("F"),
            },
            tgqual: {
              name: s("tgqual"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
            tgoldtable: {
              name: s("tgoldtable"),
              type: s("name"),
              nullable: b("T"),
            },
            tgnewtable: {
              name: s("tgnewtable"),
              type: s("name"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_event_trigger: {
          name: s("pg_event_trigger"),
          columns: {
            evtname: {
              name: s("evtname"),
              type: s("name"),
              nullable: b("F"),
            },
            evtevent: {
              name: s("evtevent"),
              type: s("name"),
              nullable: b("F"),
            },
            evtowner: {
              name: s("evtowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            evtfoid: {
              name: s("evtfoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            evtenabled: {
              name: s("evtenabled"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            evttags: {
              name: s("evttags"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_description: {
          name: s("pg_description"),
          columns: {
            objoid: {
              name: s("objoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            classoid: {
              name: s("classoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            objsubid: {
              name: s("objsubid"),
              type: s("integer"),
              nullable: b("F"),
            },
            description: {
              name: s("description"),
              type: s("text"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_cast: {
          name: s("pg_cast"),
          columns: {
            castsource: {
              name: s("castsource"),
              type: s("oid"),
              nullable: b("F"),
            },
            casttarget: {
              name: s("casttarget"),
              type: s("oid"),
              nullable: b("F"),
            },
            castfunc: {
              name: s("castfunc"),
              type: s("oid"),
              nullable: b("F"),
            },
            castcontext: {
              name: s("castcontext"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            castmethod: {
              name: s("castmethod"),
              type: s("\"char\""),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_enum: {
          name: s("pg_enum"),
          columns: {
            enumtypid: {
              name: s("enumtypid"),
              type: s("oid"),
              nullable: b("F"),
            },
            enumsortorder: {
              name: s("enumsortorder"),
              type: s("real"),
              nullable: b("F"),
            },
            enumlabel: {
              name: s("enumlabel"),
              type: s("name"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_namespace: {
          name: s("pg_namespace"),
          columns: {
            nspname: {
              name: s("nspname"),
              type: s("name"),
              nullable: b("F"),
            },
            nspowner: {
              name: s("nspowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            nspacl: {
              name: s("nspacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_conversion: {
          name: s("pg_conversion"),
          columns: {
            conname: {
              name: s("conname"),
              type: s("name"),
              nullable: b("F"),
            },
            connamespace: {
              name: s("connamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            conowner: {
              name: s("conowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            conforencoding: {
              name: s("conforencoding"),
              type: s("integer"),
              nullable: b("F"),
            },
            contoencoding: {
              name: s("contoencoding"),
              type: s("integer"),
              nullable: b("F"),
            },
            conproc: {
              name: s("conproc"),
              type: s("regproc"),
              nullable: b("F"),
            },
            condefault: {
              name: s("condefault"),
              type: s("boolean"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_depend: {
          name: s("pg_depend"),
          columns: {
            classid: {
              name: s("classid"),
              type: s("oid"),
              nullable: b("F"),
            },
            objid: {
              name: s("objid"),
              type: s("oid"),
              nullable: b("F"),
            },
            objsubid: {
              name: s("objsubid"),
              type: s("integer"),
              nullable: b("F"),
            },
            refclassid: {
              name: s("refclassid"),
              type: s("oid"),
              nullable: b("F"),
            },
            refobjid: {
              name: s("refobjid"),
              type: s("oid"),
              nullable: b("F"),
            },
            refobjsubid: {
              name: s("refobjsubid"),
              type: s("integer"),
              nullable: b("F"),
            },
            deptype: {
              name: s("deptype"),
              type: s("\"char\""),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_database: {
          name: s("pg_database"),
          columns: {
            datname: {
              name: s("datname"),
              type: s("name"),
              nullable: b("F"),
            },
            datdba: {
              name: s("datdba"),
              type: s("oid"),
              nullable: b("F"),
            },
            encoding: {
              name: s("encoding"),
              type: s("integer"),
              nullable: b("F"),
            },
            datcollate: {
              name: s("datcollate"),
              type: s("name"),
              nullable: b("F"),
            },
            datctype: {
              name: s("datctype"),
              type: s("name"),
              nullable: b("F"),
            },
            datistemplate: {
              name: s("datistemplate"),
              type: s("boolean"),
              nullable: b("F"),
            },
            datallowconn: {
              name: s("datallowconn"),
              type: s("boolean"),
              nullable: b("F"),
            },
            datconnlimit: {
              name: s("datconnlimit"),
              type: s("integer"),
              nullable: b("F"),
            },
            datlastsysoid: {
              name: s("datlastsysoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            datfrozenxid: {
              name: s("datfrozenxid"),
              type: s("xid"),
              nullable: b("F"),
            },
            datminmxid: {
              name: s("datminmxid"),
              type: s("xid"),
              nullable: b("F"),
            },
            dattablespace: {
              name: s("dattablespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            datacl: {
              name: s("datacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_db_role_setting: {
          name: s("pg_db_role_setting"),
          columns: {
            setdatabase: {
              name: s("setdatabase"),
              type: s("oid"),
              nullable: b("F"),
            },
            setrole: {
              name: s("setrole"),
              type: s("oid"),
              nullable: b("F"),
            },
            setconfig: {
              name: s("setconfig"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_tablespace: {
          name: s("pg_tablespace"),
          columns: {
            spcname: {
              name: s("spcname"),
              type: s("name"),
              nullable: b("F"),
            },
            spcowner: {
              name: s("spcowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            spcacl: {
              name: s("spcacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            spcoptions: {
              name: s("spcoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_pltemplate: {
          name: s("pg_pltemplate"),
          columns: {
            tmplname: {
              name: s("tmplname"),
              type: s("name"),
              nullable: b("F"),
            },
            tmpltrusted: {
              name: s("tmpltrusted"),
              type: s("boolean"),
              nullable: b("F"),
            },
            tmpldbacreate: {
              name: s("tmpldbacreate"),
              type: s("boolean"),
              nullable: b("F"),
            },
            tmplhandler: {
              name: s("tmplhandler"),
              type: s("text"),
              nullable: b("F"),
            },
            tmplinline: {
              name: s("tmplinline"),
              type: s("text"),
              nullable: b("T"),
            },
            tmplvalidator: {
              name: s("tmplvalidator"),
              type: s("text"),
              nullable: b("T"),
            },
            tmpllibrary: {
              name: s("tmpllibrary"),
              type: s("text"),
              nullable: b("F"),
            },
            tmplacl: {
              name: s("tmplacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_auth_members: {
          name: s("pg_auth_members"),
          columns: {
            roleid: {
              name: s("roleid"),
              type: s("oid"),
              nullable: b("F"),
            },
            member: {
              name: s("member"),
              type: s("oid"),
              nullable: b("F"),
            },
            grantor: {
              name: s("grantor"),
              type: s("oid"),
              nullable: b("F"),
            },
            admin_option: {
              name: s("admin_option"),
              type: s("boolean"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_shdepend: {
          name: s("pg_shdepend"),
          columns: {
            dbid: {
              name: s("dbid"),
              type: s("oid"),
              nullable: b("F"),
            },
            classid: {
              name: s("classid"),
              type: s("oid"),
              nullable: b("F"),
            },
            objid: {
              name: s("objid"),
              type: s("oid"),
              nullable: b("F"),
            },
            objsubid: {
              name: s("objsubid"),
              type: s("integer"),
              nullable: b("F"),
            },
            refclassid: {
              name: s("refclassid"),
              type: s("oid"),
              nullable: b("F"),
            },
            refobjid: {
              name: s("refobjid"),
              type: s("oid"),
              nullable: b("F"),
            },
            deptype: {
              name: s("deptype"),
              type: s("\"char\""),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_shdescription: {
          name: s("pg_shdescription"),
          columns: {
            objoid: {
              name: s("objoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            classoid: {
              name: s("classoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            description: {
              name: s("description"),
              type: s("text"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_ts_config: {
          name: s("pg_ts_config"),
          columns: {
            cfgname: {
              name: s("cfgname"),
              type: s("name"),
              nullable: b("F"),
            },
            cfgnamespace: {
              name: s("cfgnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            cfgowner: {
              name: s("cfgowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            cfgparser: {
              name: s("cfgparser"),
              type: s("oid"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_ts_config_map: {
          name: s("pg_ts_config_map"),
          columns: {
            mapcfg: {
              name: s("mapcfg"),
              type: s("oid"),
              nullable: b("F"),
            },
            maptokentype: {
              name: s("maptokentype"),
              type: s("integer"),
              nullable: b("F"),
            },
            mapseqno: {
              name: s("mapseqno"),
              type: s("integer"),
              nullable: b("F"),
            },
            mapdict: {
              name: s("mapdict"),
              type: s("oid"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_ts_dict: {
          name: s("pg_ts_dict"),
          columns: {
            dictname: {
              name: s("dictname"),
              type: s("name"),
              nullable: b("F"),
            },
            dictnamespace: {
              name: s("dictnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            dictowner: {
              name: s("dictowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            dicttemplate: {
              name: s("dicttemplate"),
              type: s("oid"),
              nullable: b("F"),
            },
            dictinitoption: {
              name: s("dictinitoption"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_ts_parser: {
          name: s("pg_ts_parser"),
          columns: {
            prsname: {
              name: s("prsname"),
              type: s("name"),
              nullable: b("F"),
            },
            prsnamespace: {
              name: s("prsnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            prsstart: {
              name: s("prsstart"),
              type: s("regproc"),
              nullable: b("F"),
            },
            prstoken: {
              name: s("prstoken"),
              type: s("regproc"),
              nullable: b("F"),
            },
            prsend: {
              name: s("prsend"),
              type: s("regproc"),
              nullable: b("F"),
            },
            prsheadline: {
              name: s("prsheadline"),
              type: s("regproc"),
              nullable: b("F"),
            },
            prslextype: {
              name: s("prslextype"),
              type: s("regproc"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_ts_template: {
          name: s("pg_ts_template"),
          columns: {
            tmplname: {
              name: s("tmplname"),
              type: s("name"),
              nullable: b("F"),
            },
            tmplnamespace: {
              name: s("tmplnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            tmplinit: {
              name: s("tmplinit"),
              type: s("regproc"),
              nullable: b("F"),
            },
            tmpllexize: {
              name: s("tmpllexize"),
              type: s("regproc"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_extension: {
          name: s("pg_extension"),
          columns: {
            extname: {
              name: s("extname"),
              type: s("name"),
              nullable: b("F"),
            },
            extowner: {
              name: s("extowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            extnamespace: {
              name: s("extnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            extrelocatable: {
              name: s("extrelocatable"),
              type: s("boolean"),
              nullable: b("F"),
            },
            extversion: {
              name: s("extversion"),
              type: s("text"),
              nullable: b("F"),
            },
            extconfig: {
              name: s("extconfig"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            extcondition: {
              name: s("extcondition"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_foreign_data_wrapper: {
          name: s("pg_foreign_data_wrapper"),
          columns: {
            fdwname: {
              name: s("fdwname"),
              type: s("name"),
              nullable: b("F"),
            },
            fdwowner: {
              name: s("fdwowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            fdwhandler: {
              name: s("fdwhandler"),
              type: s("oid"),
              nullable: b("F"),
            },
            fdwvalidator: {
              name: s("fdwvalidator"),
              type: s("oid"),
              nullable: b("F"),
            },
            fdwacl: {
              name: s("fdwacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            fdwoptions: {
              name: s("fdwoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_foreign_server: {
          name: s("pg_foreign_server"),
          columns: {
            srvname: {
              name: s("srvname"),
              type: s("name"),
              nullable: b("F"),
            },
            srvowner: {
              name: s("srvowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            srvfdw: {
              name: s("srvfdw"),
              type: s("oid"),
              nullable: b("F"),
            },
            srvtype: {
              name: s("srvtype"),
              type: s("text"),
              nullable: b("T"),
            },
            srvversion: {
              name: s("srvversion"),
              type: s("text"),
              nullable: b("T"),
            },
            srvacl: {
              name: s("srvacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            srvoptions: {
              name: s("srvoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_foreign_table: {
          name: s("pg_foreign_table"),
          columns: {
            ftrelid: {
              name: s("ftrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            ftserver: {
              name: s("ftserver"),
              type: s("oid"),
              nullable: b("F"),
            },
            ftoptions: {
              name: s("ftoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_replication_origin: {
          name: s("pg_replication_origin"),
          columns: {
            roident: {
              name: s("roident"),
              type: s("oid"),
              nullable: b("F"),
            },
            roname: {
              name: s("roname"),
              type: s("text"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_default_acl: {
          name: s("pg_default_acl"),
          columns: {
            defaclrole: {
              name: s("defaclrole"),
              type: s("oid"),
              nullable: b("F"),
            },
            defaclnamespace: {
              name: s("defaclnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            defaclobjtype: {
              name: s("defaclobjtype"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            defaclacl: {
              name: s("defaclacl"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_init_privs: {
          name: s("pg_init_privs"),
          columns: {
            objoid: {
              name: s("objoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            classoid: {
              name: s("classoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            objsubid: {
              name: s("objsubid"),
              type: s("integer"),
              nullable: b("F"),
            },
            privtype: {
              name: s("privtype"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            initprivs: {
              name: s("initprivs"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_seclabel: {
          name: s("pg_seclabel"),
          columns: {
            objoid: {
              name: s("objoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            classoid: {
              name: s("classoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            objsubid: {
              name: s("objsubid"),
              type: s("integer"),
              nullable: b("F"),
            },
            provider: {
              name: s("provider"),
              type: s("text"),
              nullable: b("F"),
            },
            label: {
              name: s("label"),
              type: s("text"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_shseclabel: {
          name: s("pg_shseclabel"),
          columns: {
            objoid: {
              name: s("objoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            classoid: {
              name: s("classoid"),
              type: s("oid"),
              nullable: b("F"),
            },
            provider: {
              name: s("provider"),
              type: s("text"),
              nullable: b("F"),
            },
            label: {
              name: s("label"),
              type: s("text"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_collation: {
          name: s("pg_collation"),
          columns: {
            collname: {
              name: s("collname"),
              type: s("name"),
              nullable: b("F"),
            },
            collnamespace: {
              name: s("collnamespace"),
              type: s("oid"),
              nullable: b("F"),
            },
            collowner: {
              name: s("collowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            collprovider: {
              name: s("collprovider"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            collencoding: {
              name: s("collencoding"),
              type: s("integer"),
              nullable: b("F"),
            },
            collcollate: {
              name: s("collcollate"),
              type: s("name"),
              nullable: b("F"),
            },
            collctype: {
              name: s("collctype"),
              type: s("name"),
              nullable: b("F"),
            },
            collversion: {
              name: s("collversion"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_partitioned_table: {
          name: s("pg_partitioned_table"),
          columns: {
            partrelid: {
              name: s("partrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            partstrat: {
              name: s("partstrat"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            partnatts: {
              name: s("partnatts"),
              type: s("smallint"),
              nullable: b("F"),
            },
            partattrs: {
              name: s("partattrs"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
            partclass: {
              name: s("partclass"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
            partcollation: {
              name: s("partcollation"),
              type: s("ARRAY"),
              nullable: b("F"),
            },
            partexprs: {
              name: s("partexprs"),
              type: s("pg_node_tree"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_range: {
          name: s("pg_range"),
          columns: {
            rngtypid: {
              name: s("rngtypid"),
              type: s("oid"),
              nullable: b("F"),
            },
            rngsubtype: {
              name: s("rngsubtype"),
              type: s("oid"),
              nullable: b("F"),
            },
            rngcollation: {
              name: s("rngcollation"),
              type: s("oid"),
              nullable: b("F"),
            },
            rngsubopc: {
              name: s("rngsubopc"),
              type: s("oid"),
              nullable: b("F"),
            },
            rngcanonical: {
              name: s("rngcanonical"),
              type: s("regproc"),
              nullable: b("F"),
            },
            rngsubdiff: {
              name: s("rngsubdiff"),
              type: s("regproc"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_transform: {
          name: s("pg_transform"),
          columns: {
            trftype: {
              name: s("trftype"),
              type: s("oid"),
              nullable: b("F"),
            },
            trflang: {
              name: s("trflang"),
              type: s("oid"),
              nullable: b("F"),
            },
            trffromsql: {
              name: s("trffromsql"),
              type: s("regproc"),
              nullable: b("F"),
            },
            trftosql: {
              name: s("trftosql"),
              type: s("regproc"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_sequence: {
          name: s("pg_sequence"),
          columns: {
            seqrelid: {
              name: s("seqrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            seqtypid: {
              name: s("seqtypid"),
              type: s("oid"),
              nullable: b("F"),
            },
            seqstart: {
              name: s("seqstart"),
              type: s("bigint"),
              nullable: b("F"),
            },
            seqincrement: {
              name: s("seqincrement"),
              type: s("bigint"),
              nullable: b("F"),
            },
            seqmax: {
              name: s("seqmax"),
              type: s("bigint"),
              nullable: b("F"),
            },
            seqmin: {
              name: s("seqmin"),
              type: s("bigint"),
              nullable: b("F"),
            },
            seqcache: {
              name: s("seqcache"),
              type: s("bigint"),
              nullable: b("F"),
            },
            seqcycle: {
              name: s("seqcycle"),
              type: s("boolean"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_publication: {
          name: s("pg_publication"),
          columns: {
            pubname: {
              name: s("pubname"),
              type: s("name"),
              nullable: b("F"),
            },
            pubowner: {
              name: s("pubowner"),
              type: s("oid"),
              nullable: b("F"),
            },
            puballtables: {
              name: s("puballtables"),
              type: s("boolean"),
              nullable: b("F"),
            },
            pubinsert: {
              name: s("pubinsert"),
              type: s("boolean"),
              nullable: b("F"),
            },
            pubupdate: {
              name: s("pubupdate"),
              type: s("boolean"),
              nullable: b("F"),
            },
            pubdelete: {
              name: s("pubdelete"),
              type: s("boolean"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_publication_rel: {
          name: s("pg_publication_rel"),
          columns: {
            prpubid: {
              name: s("prpubid"),
              type: s("oid"),
              nullable: b("F"),
            },
            prrelid: {
              name: s("prrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_subscription_rel: {
          name: s("pg_subscription_rel"),
          columns: {
            srsubid: {
              name: s("srsubid"),
              type: s("oid"),
              nullable: b("F"),
            },
            srrelid: {
              name: s("srrelid"),
              type: s("oid"),
              nullable: b("F"),
            },
            srsubstate: {
              name: s("srsubstate"),
              type: s("\"char\""),
              nullable: b("F"),
            },
            srsublsn: {
              name: s("srsublsn"),
              type: s("pg_lsn"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
        pg_largeobject: {
          name: s("pg_largeobject"),
          columns: {
            loid: {
              name: s("loid"),
              type: s("oid"),
              nullable: b("F"),
            },
            pageno: {
              name: s("pageno"),
              type: s("integer"),
              nullable: b("F"),
            },
            data: {
              name: s("data"),
              type: s("bytea"),
              nullable: b("F"),
            },
          },
          indices: {
          },
        },
      },
      views: {
        pg_shadow: {
          name: s("pg_shadow"),
          columns: {
            usename: {
              name: s("usename"),
              type: s("name"),
              nullable: b("T"),
            },
            usesysid: {
              name: s("usesysid"),
              type: s("oid"),
              nullable: b("T"),
            },
            usecreatedb: {
              name: s("usecreatedb"),
              type: s("boolean"),
              nullable: b("T"),
            },
            usesuper: {
              name: s("usesuper"),
              type: s("boolean"),
              nullable: b("T"),
            },
            userepl: {
              name: s("userepl"),
              type: s("boolean"),
              nullable: b("T"),
            },
            usebypassrls: {
              name: s("usebypassrls"),
              type: s("boolean"),
              nullable: b("T"),
            },
            passwd: {
              name: s("passwd"),
              type: s("text"),
              nullable: b("T"),
            },
            valuntil: {
              name: s("valuntil"),
              type: s("abstime"),
              nullable: b("T"),
            },
            useconfig: {
              name: s("useconfig"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_settings: {
          name: s("pg_settings"),
          columns: {
            name: {
              name: s("name"),
              type: s("text"),
              nullable: b("T"),
            },
            setting: {
              name: s("setting"),
              type: s("text"),
              nullable: b("T"),
            },
            unit: {
              name: s("unit"),
              type: s("text"),
              nullable: b("T"),
            },
            category: {
              name: s("category"),
              type: s("text"),
              nullable: b("T"),
            },
            short_desc: {
              name: s("short_desc"),
              type: s("text"),
              nullable: b("T"),
            },
            extra_desc: {
              name: s("extra_desc"),
              type: s("text"),
              nullable: b("T"),
            },
            context: {
              name: s("context"),
              type: s("text"),
              nullable: b("T"),
            },
            vartype: {
              name: s("vartype"),
              type: s("text"),
              nullable: b("T"),
            },
            source: {
              name: s("source"),
              type: s("text"),
              nullable: b("T"),
            },
            min_val: {
              name: s("min_val"),
              type: s("text"),
              nullable: b("T"),
            },
            max_val: {
              name: s("max_val"),
              type: s("text"),
              nullable: b("T"),
            },
            enumvals: {
              name: s("enumvals"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            boot_val: {
              name: s("boot_val"),
              type: s("text"),
              nullable: b("T"),
            },
            reset_val: {
              name: s("reset_val"),
              type: s("text"),
              nullable: b("T"),
            },
            sourcefile: {
              name: s("sourcefile"),
              type: s("text"),
              nullable: b("T"),
            },
            sourceline: {
              name: s("sourceline"),
              type: s("integer"),
              nullable: b("T"),
            },
            pending_restart: {
              name: s("pending_restart"),
              type: s("boolean"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_hba_file_rules: {
          name: s("pg_hba_file_rules"),
          columns: {
            line_number: {
              name: s("line_number"),
              type: s("integer"),
              nullable: b("T"),
            },
            type: {
              name: s("type"),
              type: s("text"),
              nullable: b("T"),
            },
            database: {
              name: s("database"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            user_name: {
              name: s("user_name"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            address: {
              name: s("address"),
              type: s("text"),
              nullable: b("T"),
            },
            netmask: {
              name: s("netmask"),
              type: s("text"),
              nullable: b("T"),
            },
            auth_method: {
              name: s("auth_method"),
              type: s("text"),
              nullable: b("T"),
            },
            options: {
              name: s("options"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            error: {
              name: s("error"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_file_settings: {
          name: s("pg_file_settings"),
          columns: {
            sourcefile: {
              name: s("sourcefile"),
              type: s("text"),
              nullable: b("T"),
            },
            sourceline: {
              name: s("sourceline"),
              type: s("integer"),
              nullable: b("T"),
            },
            seqno: {
              name: s("seqno"),
              type: s("integer"),
              nullable: b("T"),
            },
            name: {
              name: s("name"),
              type: s("text"),
              nullable: b("T"),
            },
            setting: {
              name: s("setting"),
              type: s("text"),
              nullable: b("T"),
            },
            applied: {
              name: s("applied"),
              type: s("boolean"),
              nullable: b("T"),
            },
            error: {
              name: s("error"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_config: {
          name: s("pg_config"),
          columns: {
            name: {
              name: s("name"),
              type: s("text"),
              nullable: b("T"),
            },
            setting: {
              name: s("setting"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_replication_origin_status: {
          name: s("pg_replication_origin_status"),
          columns: {
            local_id: {
              name: s("local_id"),
              type: s("oid"),
              nullable: b("T"),
            },
            external_id: {
              name: s("external_id"),
              type: s("text"),
              nullable: b("T"),
            },
            remote_lsn: {
              name: s("remote_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
            local_lsn: {
              name: s("local_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_user_tables: {
          name: s("pg_stat_user_tables"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            seq_scan: {
              name: s("seq_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            seq_tup_read: {
              name: s("seq_tup_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_scan: {
              name: s("idx_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_fetch: {
              name: s("idx_tup_fetch"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_ins: {
              name: s("n_tup_ins"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_upd: {
              name: s("n_tup_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_del: {
              name: s("n_tup_del"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_hot_upd: {
              name: s("n_tup_hot_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_live_tup: {
              name: s("n_live_tup"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_dead_tup: {
              name: s("n_dead_tup"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_mod_since_analyze: {
              name: s("n_mod_since_analyze"),
              type: s("bigint"),
              nullable: b("T"),
            },
            last_vacuum: {
              name: s("last_vacuum"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_autovacuum: {
              name: s("last_autovacuum"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_analyze: {
              name: s("last_analyze"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_autoanalyze: {
              name: s("last_autoanalyze"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            vacuum_count: {
              name: s("vacuum_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            autovacuum_count: {
              name: s("autovacuum_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            analyze_count: {
              name: s("analyze_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            autoanalyze_count: {
              name: s("autoanalyze_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_xact_user_tables: {
          name: s("pg_stat_xact_user_tables"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            seq_scan: {
              name: s("seq_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            seq_tup_read: {
              name: s("seq_tup_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_scan: {
              name: s("idx_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_fetch: {
              name: s("idx_tup_fetch"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_ins: {
              name: s("n_tup_ins"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_upd: {
              name: s("n_tup_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_del: {
              name: s("n_tup_del"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_hot_upd: {
              name: s("n_tup_hot_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_statio_all_tables: {
          name: s("pg_statio_all_tables"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            heap_blks_read: {
              name: s("heap_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            heap_blks_hit: {
              name: s("heap_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_blks_read: {
              name: s("idx_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_blks_hit: {
              name: s("idx_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
            toast_blks_read: {
              name: s("toast_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            toast_blks_hit: {
              name: s("toast_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
            tidx_blks_read: {
              name: s("tidx_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            tidx_blks_hit: {
              name: s("tidx_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_statio_sys_tables: {
          name: s("pg_statio_sys_tables"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            heap_blks_read: {
              name: s("heap_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            heap_blks_hit: {
              name: s("heap_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_blks_read: {
              name: s("idx_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_blks_hit: {
              name: s("idx_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
            toast_blks_read: {
              name: s("toast_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            toast_blks_hit: {
              name: s("toast_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
            tidx_blks_read: {
              name: s("tidx_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            tidx_blks_hit: {
              name: s("tidx_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_statio_user_tables: {
          name: s("pg_statio_user_tables"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            heap_blks_read: {
              name: s("heap_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            heap_blks_hit: {
              name: s("heap_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_blks_read: {
              name: s("idx_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_blks_hit: {
              name: s("idx_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
            toast_blks_read: {
              name: s("toast_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            toast_blks_hit: {
              name: s("toast_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
            tidx_blks_read: {
              name: s("tidx_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            tidx_blks_hit: {
              name: s("tidx_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_all_indexes: {
          name: s("pg_stat_all_indexes"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            indexrelid: {
              name: s("indexrelid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            indexrelname: {
              name: s("indexrelname"),
              type: s("name"),
              nullable: b("T"),
            },
            idx_scan: {
              name: s("idx_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_read: {
              name: s("idx_tup_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_fetch: {
              name: s("idx_tup_fetch"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_roles: {
          name: s("pg_roles"),
          columns: {
            rolname: {
              name: s("rolname"),
              type: s("name"),
              nullable: b("T"),
            },
            rolsuper: {
              name: s("rolsuper"),
              type: s("boolean"),
              nullable: b("T"),
            },
            rolinherit: {
              name: s("rolinherit"),
              type: s("boolean"),
              nullable: b("T"),
            },
            rolcreaterole: {
              name: s("rolcreaterole"),
              type: s("boolean"),
              nullable: b("T"),
            },
            rolcreatedb: {
              name: s("rolcreatedb"),
              type: s("boolean"),
              nullable: b("T"),
            },
            rolcanlogin: {
              name: s("rolcanlogin"),
              type: s("boolean"),
              nullable: b("T"),
            },
            rolreplication: {
              name: s("rolreplication"),
              type: s("boolean"),
              nullable: b("T"),
            },
            rolconnlimit: {
              name: s("rolconnlimit"),
              type: s("integer"),
              nullable: b("T"),
            },
            rolpassword: {
              name: s("rolpassword"),
              type: s("text"),
              nullable: b("T"),
            },
            rolvaliduntil: {
              name: s("rolvaliduntil"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            rolbypassrls: {
              name: s("rolbypassrls"),
              type: s("boolean"),
              nullable: b("T"),
            },
            rolconfig: {
              name: s("rolconfig"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            oid: {
              name: s("oid"),
              type: s("oid"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_locks: {
          name: s("pg_locks"),
          columns: {
            locktype: {
              name: s("locktype"),
              type: s("text"),
              nullable: b("T"),
            },
            database: {
              name: s("database"),
              type: s("oid"),
              nullable: b("T"),
            },
            relation: {
              name: s("relation"),
              type: s("oid"),
              nullable: b("T"),
            },
            page: {
              name: s("page"),
              type: s("integer"),
              nullable: b("T"),
            },
            tuple: {
              name: s("tuple"),
              type: s("smallint"),
              nullable: b("T"),
            },
            virtualxid: {
              name: s("virtualxid"),
              type: s("text"),
              nullable: b("T"),
            },
            transactionid: {
              name: s("transactionid"),
              type: s("xid"),
              nullable: b("T"),
            },
            classid: {
              name: s("classid"),
              type: s("oid"),
              nullable: b("T"),
            },
            objid: {
              name: s("objid"),
              type: s("oid"),
              nullable: b("T"),
            },
            objsubid: {
              name: s("objsubid"),
              type: s("smallint"),
              nullable: b("T"),
            },
            virtualtransaction: {
              name: s("virtualtransaction"),
              type: s("text"),
              nullable: b("T"),
            },
            pid: {
              name: s("pid"),
              type: s("integer"),
              nullable: b("T"),
            },
            mode: {
              name: s("mode"),
              type: s("text"),
              nullable: b("T"),
            },
            granted: {
              name: s("granted"),
              type: s("boolean"),
              nullable: b("T"),
            },
            fastpath: {
              name: s("fastpath"),
              type: s("boolean"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_group: {
          name: s("pg_group"),
          columns: {
            groname: {
              name: s("groname"),
              type: s("name"),
              nullable: b("T"),
            },
            grosysid: {
              name: s("grosysid"),
              type: s("oid"),
              nullable: b("T"),
            },
            grolist: {
              name: s("grolist"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_user: {
          name: s("pg_user"),
          columns: {
            usename: {
              name: s("usename"),
              type: s("name"),
              nullable: b("T"),
            },
            usesysid: {
              name: s("usesysid"),
              type: s("oid"),
              nullable: b("T"),
            },
            usecreatedb: {
              name: s("usecreatedb"),
              type: s("boolean"),
              nullable: b("T"),
            },
            usesuper: {
              name: s("usesuper"),
              type: s("boolean"),
              nullable: b("T"),
            },
            userepl: {
              name: s("userepl"),
              type: s("boolean"),
              nullable: b("T"),
            },
            usebypassrls: {
              name: s("usebypassrls"),
              type: s("boolean"),
              nullable: b("T"),
            },
            passwd: {
              name: s("passwd"),
              type: s("text"),
              nullable: b("T"),
            },
            valuntil: {
              name: s("valuntil"),
              type: s("abstime"),
              nullable: b("T"),
            },
            useconfig: {
              name: s("useconfig"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_policies: {
          name: s("pg_policies"),
          columns: {
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            tablename: {
              name: s("tablename"),
              type: s("name"),
              nullable: b("T"),
            },
            policyname: {
              name: s("policyname"),
              type: s("name"),
              nullable: b("T"),
            },
            permissive: {
              name: s("permissive"),
              type: s("text"),
              nullable: b("T"),
            },
            roles: {
              name: s("roles"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            cmd: {
              name: s("cmd"),
              type: s("text"),
              nullable: b("T"),
            },
            qual: {
              name: s("qual"),
              type: s("text"),
              nullable: b("T"),
            },
            with_check: {
              name: s("with_check"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_rules: {
          name: s("pg_rules"),
          columns: {
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            tablename: {
              name: s("tablename"),
              type: s("name"),
              nullable: b("T"),
            },
            rulename: {
              name: s("rulename"),
              type: s("name"),
              nullable: b("T"),
            },
            definition: {
              name: s("definition"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_views: {
          name: s("pg_views"),
          columns: {
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            viewname: {
              name: s("viewname"),
              type: s("name"),
              nullable: b("T"),
            },
            viewowner: {
              name: s("viewowner"),
              type: s("name"),
              nullable: b("T"),
            },
            definition: {
              name: s("definition"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_tables: {
          name: s("pg_tables"),
          columns: {
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            tablename: {
              name: s("tablename"),
              type: s("name"),
              nullable: b("T"),
            },
            tableowner: {
              name: s("tableowner"),
              type: s("name"),
              nullable: b("T"),
            },
            tablespace: {
              name: s("tablespace"),
              type: s("name"),
              nullable: b("T"),
            },
            hasindexes: {
              name: s("hasindexes"),
              type: s("boolean"),
              nullable: b("T"),
            },
            hasrules: {
              name: s("hasrules"),
              type: s("boolean"),
              nullable: b("T"),
            },
            hastriggers: {
              name: s("hastriggers"),
              type: s("boolean"),
              nullable: b("T"),
            },
            rowsecurity: {
              name: s("rowsecurity"),
              type: s("boolean"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_matviews: {
          name: s("pg_matviews"),
          columns: {
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            matviewname: {
              name: s("matviewname"),
              type: s("name"),
              nullable: b("T"),
            },
            matviewowner: {
              name: s("matviewowner"),
              type: s("name"),
              nullable: b("T"),
            },
            tablespace: {
              name: s("tablespace"),
              type: s("name"),
              nullable: b("T"),
            },
            hasindexes: {
              name: s("hasindexes"),
              type: s("boolean"),
              nullable: b("T"),
            },
            ispopulated: {
              name: s("ispopulated"),
              type: s("boolean"),
              nullable: b("T"),
            },
            definition: {
              name: s("definition"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_indexes: {
          name: s("pg_indexes"),
          columns: {
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            tablename: {
              name: s("tablename"),
              type: s("name"),
              nullable: b("T"),
            },
            indexname: {
              name: s("indexname"),
              type: s("name"),
              nullable: b("T"),
            },
            tablespace: {
              name: s("tablespace"),
              type: s("name"),
              nullable: b("T"),
            },
            indexdef: {
              name: s("indexdef"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_sequences: {
          name: s("pg_sequences"),
          columns: {
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            sequencename: {
              name: s("sequencename"),
              type: s("name"),
              nullable: b("T"),
            },
            sequenceowner: {
              name: s("sequenceowner"),
              type: s("name"),
              nullable: b("T"),
            },
            data_type: {
              name: s("data_type"),
              type: s("regtype"),
              nullable: b("T"),
            },
            start_value: {
              name: s("start_value"),
              type: s("bigint"),
              nullable: b("T"),
            },
            min_value: {
              name: s("min_value"),
              type: s("bigint"),
              nullable: b("T"),
            },
            max_value: {
              name: s("max_value"),
              type: s("bigint"),
              nullable: b("T"),
            },
            increment_by: {
              name: s("increment_by"),
              type: s("bigint"),
              nullable: b("T"),
            },
            cycle: {
              name: s("cycle"),
              type: s("boolean"),
              nullable: b("T"),
            },
            cache_size: {
              name: s("cache_size"),
              type: s("bigint"),
              nullable: b("T"),
            },
            last_value: {
              name: s("last_value"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stats: {
          name: s("pg_stats"),
          columns: {
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            tablename: {
              name: s("tablename"),
              type: s("name"),
              nullable: b("T"),
            },
            attname: {
              name: s("attname"),
              type: s("name"),
              nullable: b("T"),
            },
            inherited: {
              name: s("inherited"),
              type: s("boolean"),
              nullable: b("T"),
            },
            null_frac: {
              name: s("null_frac"),
              type: s("real"),
              nullable: b("T"),
            },
            avg_width: {
              name: s("avg_width"),
              type: s("integer"),
              nullable: b("T"),
            },
            n_distinct: {
              name: s("n_distinct"),
              type: s("real"),
              nullable: b("T"),
            },
            most_common_vals: {
              name: s("most_common_vals"),
              type: s("anyarray"),
              nullable: b("T"),
            },
            most_common_freqs: {
              name: s("most_common_freqs"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            histogram_bounds: {
              name: s("histogram_bounds"),
              type: s("anyarray"),
              nullable: b("T"),
            },
            correlation: {
              name: s("correlation"),
              type: s("real"),
              nullable: b("T"),
            },
            most_common_elems: {
              name: s("most_common_elems"),
              type: s("anyarray"),
              nullable: b("T"),
            },
            most_common_elem_freqs: {
              name: s("most_common_elem_freqs"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            elem_count_histogram: {
              name: s("elem_count_histogram"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_publication_tables: {
          name: s("pg_publication_tables"),
          columns: {
            pubname: {
              name: s("pubname"),
              type: s("name"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            tablename: {
              name: s("tablename"),
              type: s("name"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_cursors: {
          name: s("pg_cursors"),
          columns: {
            name: {
              name: s("name"),
              type: s("text"),
              nullable: b("T"),
            },
            statement: {
              name: s("statement"),
              type: s("text"),
              nullable: b("T"),
            },
            is_holdable: {
              name: s("is_holdable"),
              type: s("boolean"),
              nullable: b("T"),
            },
            is_binary: {
              name: s("is_binary"),
              type: s("boolean"),
              nullable: b("T"),
            },
            is_scrollable: {
              name: s("is_scrollable"),
              type: s("boolean"),
              nullable: b("T"),
            },
            creation_time: {
              name: s("creation_time"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_available_extensions: {
          name: s("pg_available_extensions"),
          columns: {
            name: {
              name: s("name"),
              type: s("name"),
              nullable: b("T"),
            },
            default_version: {
              name: s("default_version"),
              type: s("text"),
              nullable: b("T"),
            },
            installed_version: {
              name: s("installed_version"),
              type: s("text"),
              nullable: b("T"),
            },
            comment: {
              name: s("comment"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_available_extension_versions: {
          name: s("pg_available_extension_versions"),
          columns: {
            name: {
              name: s("name"),
              type: s("name"),
              nullable: b("T"),
            },
            version: {
              name: s("version"),
              type: s("text"),
              nullable: b("T"),
            },
            installed: {
              name: s("installed"),
              type: s("boolean"),
              nullable: b("T"),
            },
            superuser: {
              name: s("superuser"),
              type: s("boolean"),
              nullable: b("T"),
            },
            relocatable: {
              name: s("relocatable"),
              type: s("boolean"),
              nullable: b("T"),
            },
            schema: {
              name: s("schema"),
              type: s("name"),
              nullable: b("T"),
            },
            requires: {
              name: s("requires"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            comment: {
              name: s("comment"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_prepared_xacts: {
          name: s("pg_prepared_xacts"),
          columns: {
            transaction: {
              name: s("transaction"),
              type: s("xid"),
              nullable: b("T"),
            },
            gid: {
              name: s("gid"),
              type: s("text"),
              nullable: b("T"),
            },
            prepared: {
              name: s("prepared"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            owner: {
              name: s("owner"),
              type: s("name"),
              nullable: b("T"),
            },
            database: {
              name: s("database"),
              type: s("name"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_prepared_statements: {
          name: s("pg_prepared_statements"),
          columns: {
            name: {
              name: s("name"),
              type: s("text"),
              nullable: b("T"),
            },
            statement: {
              name: s("statement"),
              type: s("text"),
              nullable: b("T"),
            },
            prepare_time: {
              name: s("prepare_time"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            parameter_types: {
              name: s("parameter_types"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            from_sql: {
              name: s("from_sql"),
              type: s("boolean"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_seclabels: {
          name: s("pg_seclabels"),
          columns: {
            objoid: {
              name: s("objoid"),
              type: s("oid"),
              nullable: b("T"),
            },
            classoid: {
              name: s("classoid"),
              type: s("oid"),
              nullable: b("T"),
            },
            objsubid: {
              name: s("objsubid"),
              type: s("integer"),
              nullable: b("T"),
            },
            objtype: {
              name: s("objtype"),
              type: s("text"),
              nullable: b("T"),
            },
            objnamespace: {
              name: s("objnamespace"),
              type: s("oid"),
              nullable: b("T"),
            },
            objname: {
              name: s("objname"),
              type: s("text"),
              nullable: b("T"),
            },
            provider: {
              name: s("provider"),
              type: s("text"),
              nullable: b("T"),
            },
            label: {
              name: s("label"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_timezone_names: {
          name: s("pg_timezone_names"),
          columns: {
            name: {
              name: s("name"),
              type: s("text"),
              nullable: b("T"),
            },
            abbrev: {
              name: s("abbrev"),
              type: s("text"),
              nullable: b("T"),
            },
            utc_offset: {
              name: s("utc_offset"),
              type: s("interval"),
              nullable: b("T"),
            },
            is_dst: {
              name: s("is_dst"),
              type: s("boolean"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_timezone_abbrevs: {
          name: s("pg_timezone_abbrevs"),
          columns: {
            abbrev: {
              name: s("abbrev"),
              type: s("text"),
              nullable: b("T"),
            },
            utc_offset: {
              name: s("utc_offset"),
              type: s("interval"),
              nullable: b("T"),
            },
            is_dst: {
              name: s("is_dst"),
              type: s("boolean"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_all_tables: {
          name: s("pg_stat_all_tables"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            seq_scan: {
              name: s("seq_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            seq_tup_read: {
              name: s("seq_tup_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_scan: {
              name: s("idx_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_fetch: {
              name: s("idx_tup_fetch"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_ins: {
              name: s("n_tup_ins"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_upd: {
              name: s("n_tup_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_del: {
              name: s("n_tup_del"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_hot_upd: {
              name: s("n_tup_hot_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_live_tup: {
              name: s("n_live_tup"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_dead_tup: {
              name: s("n_dead_tup"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_mod_since_analyze: {
              name: s("n_mod_since_analyze"),
              type: s("bigint"),
              nullable: b("T"),
            },
            last_vacuum: {
              name: s("last_vacuum"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_autovacuum: {
              name: s("last_autovacuum"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_analyze: {
              name: s("last_analyze"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_autoanalyze: {
              name: s("last_autoanalyze"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            vacuum_count: {
              name: s("vacuum_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            autovacuum_count: {
              name: s("autovacuum_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            analyze_count: {
              name: s("analyze_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            autoanalyze_count: {
              name: s("autoanalyze_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_xact_all_tables: {
          name: s("pg_stat_xact_all_tables"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            seq_scan: {
              name: s("seq_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            seq_tup_read: {
              name: s("seq_tup_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_scan: {
              name: s("idx_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_fetch: {
              name: s("idx_tup_fetch"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_ins: {
              name: s("n_tup_ins"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_upd: {
              name: s("n_tup_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_del: {
              name: s("n_tup_del"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_hot_upd: {
              name: s("n_tup_hot_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_sys_tables: {
          name: s("pg_stat_sys_tables"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            seq_scan: {
              name: s("seq_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            seq_tup_read: {
              name: s("seq_tup_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_scan: {
              name: s("idx_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_fetch: {
              name: s("idx_tup_fetch"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_ins: {
              name: s("n_tup_ins"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_upd: {
              name: s("n_tup_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_del: {
              name: s("n_tup_del"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_hot_upd: {
              name: s("n_tup_hot_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_live_tup: {
              name: s("n_live_tup"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_dead_tup: {
              name: s("n_dead_tup"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_mod_since_analyze: {
              name: s("n_mod_since_analyze"),
              type: s("bigint"),
              nullable: b("T"),
            },
            last_vacuum: {
              name: s("last_vacuum"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_autovacuum: {
              name: s("last_autovacuum"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_analyze: {
              name: s("last_analyze"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_autoanalyze: {
              name: s("last_autoanalyze"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            vacuum_count: {
              name: s("vacuum_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            autovacuum_count: {
              name: s("autovacuum_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            analyze_count: {
              name: s("analyze_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            autoanalyze_count: {
              name: s("autoanalyze_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_xact_sys_tables: {
          name: s("pg_stat_xact_sys_tables"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            seq_scan: {
              name: s("seq_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            seq_tup_read: {
              name: s("seq_tup_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_scan: {
              name: s("idx_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_fetch: {
              name: s("idx_tup_fetch"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_ins: {
              name: s("n_tup_ins"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_upd: {
              name: s("n_tup_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_del: {
              name: s("n_tup_del"),
              type: s("bigint"),
              nullable: b("T"),
            },
            n_tup_hot_upd: {
              name: s("n_tup_hot_upd"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_sys_indexes: {
          name: s("pg_stat_sys_indexes"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            indexrelid: {
              name: s("indexrelid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            indexrelname: {
              name: s("indexrelname"),
              type: s("name"),
              nullable: b("T"),
            },
            idx_scan: {
              name: s("idx_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_read: {
              name: s("idx_tup_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_fetch: {
              name: s("idx_tup_fetch"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_user_indexes: {
          name: s("pg_stat_user_indexes"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            indexrelid: {
              name: s("indexrelid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            indexrelname: {
              name: s("indexrelname"),
              type: s("name"),
              nullable: b("T"),
            },
            idx_scan: {
              name: s("idx_scan"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_read: {
              name: s("idx_tup_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_tup_fetch: {
              name: s("idx_tup_fetch"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_statio_all_indexes: {
          name: s("pg_statio_all_indexes"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            indexrelid: {
              name: s("indexrelid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            indexrelname: {
              name: s("indexrelname"),
              type: s("name"),
              nullable: b("T"),
            },
            idx_blks_read: {
              name: s("idx_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_blks_hit: {
              name: s("idx_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_statio_sys_indexes: {
          name: s("pg_statio_sys_indexes"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            indexrelid: {
              name: s("indexrelid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            indexrelname: {
              name: s("indexrelname"),
              type: s("name"),
              nullable: b("T"),
            },
            idx_blks_read: {
              name: s("idx_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_blks_hit: {
              name: s("idx_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_statio_user_indexes: {
          name: s("pg_statio_user_indexes"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            indexrelid: {
              name: s("indexrelid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            indexrelname: {
              name: s("indexrelname"),
              type: s("name"),
              nullable: b("T"),
            },
            idx_blks_read: {
              name: s("idx_blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            idx_blks_hit: {
              name: s("idx_blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_statio_all_sequences: {
          name: s("pg_statio_all_sequences"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            blks_read: {
              name: s("blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            blks_hit: {
              name: s("blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_statio_sys_sequences: {
          name: s("pg_statio_sys_sequences"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            blks_read: {
              name: s("blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            blks_hit: {
              name: s("blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_statio_user_sequences: {
          name: s("pg_statio_user_sequences"),
          columns: {
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            blks_read: {
              name: s("blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            blks_hit: {
              name: s("blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_activity: {
          name: s("pg_stat_activity"),
          columns: {
            datid: {
              name: s("datid"),
              type: s("oid"),
              nullable: b("T"),
            },
            datname: {
              name: s("datname"),
              type: s("name"),
              nullable: b("T"),
            },
            pid: {
              name: s("pid"),
              type: s("integer"),
              nullable: b("T"),
            },
            usesysid: {
              name: s("usesysid"),
              type: s("oid"),
              nullable: b("T"),
            },
            usename: {
              name: s("usename"),
              type: s("name"),
              nullable: b("T"),
            },
            application_name: {
              name: s("application_name"),
              type: s("text"),
              nullable: b("T"),
            },
            client_addr: {
              name: s("client_addr"),
              type: s("inet"),
              nullable: b("T"),
            },
            client_hostname: {
              name: s("client_hostname"),
              type: s("text"),
              nullable: b("T"),
            },
            client_port: {
              name: s("client_port"),
              type: s("integer"),
              nullable: b("T"),
            },
            backend_start: {
              name: s("backend_start"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            xact_start: {
              name: s("xact_start"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            query_start: {
              name: s("query_start"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            state_change: {
              name: s("state_change"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            wait_event_type: {
              name: s("wait_event_type"),
              type: s("text"),
              nullable: b("T"),
            },
            wait_event: {
              name: s("wait_event"),
              type: s("text"),
              nullable: b("T"),
            },
            state: {
              name: s("state"),
              type: s("text"),
              nullable: b("T"),
            },
            backend_xid: {
              name: s("backend_xid"),
              type: s("xid"),
              nullable: b("T"),
            },
            backend_xmin: {
              name: s("backend_xmin"),
              type: s("xid"),
              nullable: b("T"),
            },
            query: {
              name: s("query"),
              type: s("text"),
              nullable: b("T"),
            },
            backend_type: {
              name: s("backend_type"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_replication: {
          name: s("pg_stat_replication"),
          columns: {
            pid: {
              name: s("pid"),
              type: s("integer"),
              nullable: b("T"),
            },
            usesysid: {
              name: s("usesysid"),
              type: s("oid"),
              nullable: b("T"),
            },
            usename: {
              name: s("usename"),
              type: s("name"),
              nullable: b("T"),
            },
            application_name: {
              name: s("application_name"),
              type: s("text"),
              nullable: b("T"),
            },
            client_addr: {
              name: s("client_addr"),
              type: s("inet"),
              nullable: b("T"),
            },
            client_hostname: {
              name: s("client_hostname"),
              type: s("text"),
              nullable: b("T"),
            },
            client_port: {
              name: s("client_port"),
              type: s("integer"),
              nullable: b("T"),
            },
            backend_start: {
              name: s("backend_start"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            backend_xmin: {
              name: s("backend_xmin"),
              type: s("xid"),
              nullable: b("T"),
            },
            state: {
              name: s("state"),
              type: s("text"),
              nullable: b("T"),
            },
            sent_lsn: {
              name: s("sent_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
            write_lsn: {
              name: s("write_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
            flush_lsn: {
              name: s("flush_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
            replay_lsn: {
              name: s("replay_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
            write_lag: {
              name: s("write_lag"),
              type: s("interval"),
              nullable: b("T"),
            },
            flush_lag: {
              name: s("flush_lag"),
              type: s("interval"),
              nullable: b("T"),
            },
            replay_lag: {
              name: s("replay_lag"),
              type: s("interval"),
              nullable: b("T"),
            },
            sync_priority: {
              name: s("sync_priority"),
              type: s("integer"),
              nullable: b("T"),
            },
            sync_state: {
              name: s("sync_state"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_wal_receiver: {
          name: s("pg_stat_wal_receiver"),
          columns: {
            pid: {
              name: s("pid"),
              type: s("integer"),
              nullable: b("T"),
            },
            status: {
              name: s("status"),
              type: s("text"),
              nullable: b("T"),
            },
            receive_start_lsn: {
              name: s("receive_start_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
            receive_start_tli: {
              name: s("receive_start_tli"),
              type: s("integer"),
              nullable: b("T"),
            },
            received_lsn: {
              name: s("received_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
            received_tli: {
              name: s("received_tli"),
              type: s("integer"),
              nullable: b("T"),
            },
            last_msg_send_time: {
              name: s("last_msg_send_time"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_msg_receipt_time: {
              name: s("last_msg_receipt_time"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            latest_end_lsn: {
              name: s("latest_end_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
            latest_end_time: {
              name: s("latest_end_time"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            slot_name: {
              name: s("slot_name"),
              type: s("text"),
              nullable: b("T"),
            },
            conninfo: {
              name: s("conninfo"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_subscription: {
          name: s("pg_stat_subscription"),
          columns: {
            subid: {
              name: s("subid"),
              type: s("oid"),
              nullable: b("T"),
            },
            subname: {
              name: s("subname"),
              type: s("name"),
              nullable: b("T"),
            },
            pid: {
              name: s("pid"),
              type: s("integer"),
              nullable: b("T"),
            },
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            received_lsn: {
              name: s("received_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
            last_msg_send_time: {
              name: s("last_msg_send_time"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_msg_receipt_time: {
              name: s("last_msg_receipt_time"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            latest_end_lsn: {
              name: s("latest_end_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
            latest_end_time: {
              name: s("latest_end_time"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_ssl: {
          name: s("pg_stat_ssl"),
          columns: {
            pid: {
              name: s("pid"),
              type: s("integer"),
              nullable: b("T"),
            },
            ssl: {
              name: s("ssl"),
              type: s("boolean"),
              nullable: b("T"),
            },
            version: {
              name: s("version"),
              type: s("text"),
              nullable: b("T"),
            },
            cipher: {
              name: s("cipher"),
              type: s("text"),
              nullable: b("T"),
            },
            bits: {
              name: s("bits"),
              type: s("integer"),
              nullable: b("T"),
            },
            compression: {
              name: s("compression"),
              type: s("boolean"),
              nullable: b("T"),
            },
            clientdn: {
              name: s("clientdn"),
              type: s("text"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_replication_slots: {
          name: s("pg_replication_slots"),
          columns: {
            slot_name: {
              name: s("slot_name"),
              type: s("name"),
              nullable: b("T"),
            },
            plugin: {
              name: s("plugin"),
              type: s("name"),
              nullable: b("T"),
            },
            slot_type: {
              name: s("slot_type"),
              type: s("text"),
              nullable: b("T"),
            },
            datoid: {
              name: s("datoid"),
              type: s("oid"),
              nullable: b("T"),
            },
            database: {
              name: s("database"),
              type: s("name"),
              nullable: b("T"),
            },
            temporary: {
              name: s("temporary"),
              type: s("boolean"),
              nullable: b("T"),
            },
            active: {
              name: s("active"),
              type: s("boolean"),
              nullable: b("T"),
            },
            active_pid: {
              name: s("active_pid"),
              type: s("integer"),
              nullable: b("T"),
            },
            xmin: {
              name: s("xmin"),
              type: s("xid"),
              nullable: b("T"),
            },
            catalog_xmin: {
              name: s("catalog_xmin"),
              type: s("xid"),
              nullable: b("T"),
            },
            restart_lsn: {
              name: s("restart_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
            confirmed_flush_lsn: {
              name: s("confirmed_flush_lsn"),
              type: s("pg_lsn"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_database: {
          name: s("pg_stat_database"),
          columns: {
            datid: {
              name: s("datid"),
              type: s("oid"),
              nullable: b("T"),
            },
            datname: {
              name: s("datname"),
              type: s("name"),
              nullable: b("T"),
            },
            numbackends: {
              name: s("numbackends"),
              type: s("integer"),
              nullable: b("T"),
            },
            xact_commit: {
              name: s("xact_commit"),
              type: s("bigint"),
              nullable: b("T"),
            },
            xact_rollback: {
              name: s("xact_rollback"),
              type: s("bigint"),
              nullable: b("T"),
            },
            blks_read: {
              name: s("blks_read"),
              type: s("bigint"),
              nullable: b("T"),
            },
            blks_hit: {
              name: s("blks_hit"),
              type: s("bigint"),
              nullable: b("T"),
            },
            tup_returned: {
              name: s("tup_returned"),
              type: s("bigint"),
              nullable: b("T"),
            },
            tup_fetched: {
              name: s("tup_fetched"),
              type: s("bigint"),
              nullable: b("T"),
            },
            tup_inserted: {
              name: s("tup_inserted"),
              type: s("bigint"),
              nullable: b("T"),
            },
            tup_updated: {
              name: s("tup_updated"),
              type: s("bigint"),
              nullable: b("T"),
            },
            tup_deleted: {
              name: s("tup_deleted"),
              type: s("bigint"),
              nullable: b("T"),
            },
            conflicts: {
              name: s("conflicts"),
              type: s("bigint"),
              nullable: b("T"),
            },
            temp_files: {
              name: s("temp_files"),
              type: s("bigint"),
              nullable: b("T"),
            },
            temp_bytes: {
              name: s("temp_bytes"),
              type: s("bigint"),
              nullable: b("T"),
            },
            deadlocks: {
              name: s("deadlocks"),
              type: s("bigint"),
              nullable: b("T"),
            },
            blk_read_time: {
              name: s("blk_read_time"),
              type: s("double precision"),
              nullable: b("T"),
            },
            blk_write_time: {
              name: s("blk_write_time"),
              type: s("double precision"),
              nullable: b("T"),
            },
            stats_reset: {
              name: s("stats_reset"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_database_conflicts: {
          name: s("pg_stat_database_conflicts"),
          columns: {
            datid: {
              name: s("datid"),
              type: s("oid"),
              nullable: b("T"),
            },
            datname: {
              name: s("datname"),
              type: s("name"),
              nullable: b("T"),
            },
            confl_tablespace: {
              name: s("confl_tablespace"),
              type: s("bigint"),
              nullable: b("T"),
            },
            confl_lock: {
              name: s("confl_lock"),
              type: s("bigint"),
              nullable: b("T"),
            },
            confl_snapshot: {
              name: s("confl_snapshot"),
              type: s("bigint"),
              nullable: b("T"),
            },
            confl_bufferpin: {
              name: s("confl_bufferpin"),
              type: s("bigint"),
              nullable: b("T"),
            },
            confl_deadlock: {
              name: s("confl_deadlock"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_user_functions: {
          name: s("pg_stat_user_functions"),
          columns: {
            funcid: {
              name: s("funcid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            funcname: {
              name: s("funcname"),
              type: s("name"),
              nullable: b("T"),
            },
            calls: {
              name: s("calls"),
              type: s("bigint"),
              nullable: b("T"),
            },
            total_time: {
              name: s("total_time"),
              type: s("double precision"),
              nullable: b("T"),
            },
            self_time: {
              name: s("self_time"),
              type: s("double precision"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_xact_user_functions: {
          name: s("pg_stat_xact_user_functions"),
          columns: {
            funcid: {
              name: s("funcid"),
              type: s("oid"),
              nullable: b("T"),
            },
            schemaname: {
              name: s("schemaname"),
              type: s("name"),
              nullable: b("T"),
            },
            funcname: {
              name: s("funcname"),
              type: s("name"),
              nullable: b("T"),
            },
            calls: {
              name: s("calls"),
              type: s("bigint"),
              nullable: b("T"),
            },
            total_time: {
              name: s("total_time"),
              type: s("double precision"),
              nullable: b("T"),
            },
            self_time: {
              name: s("self_time"),
              type: s("double precision"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_archiver: {
          name: s("pg_stat_archiver"),
          columns: {
            archived_count: {
              name: s("archived_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            last_archived_wal: {
              name: s("last_archived_wal"),
              type: s("text"),
              nullable: b("T"),
            },
            last_archived_time: {
              name: s("last_archived_time"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            failed_count: {
              name: s("failed_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            last_failed_wal: {
              name: s("last_failed_wal"),
              type: s("text"),
              nullable: b("T"),
            },
            last_failed_time: {
              name: s("last_failed_time"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            stats_reset: {
              name: s("stats_reset"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_bgwriter: {
          name: s("pg_stat_bgwriter"),
          columns: {
            checkpoints_timed: {
              name: s("checkpoints_timed"),
              type: s("bigint"),
              nullable: b("T"),
            },
            checkpoints_req: {
              name: s("checkpoints_req"),
              type: s("bigint"),
              nullable: b("T"),
            },
            checkpoint_write_time: {
              name: s("checkpoint_write_time"),
              type: s("double precision"),
              nullable: b("T"),
            },
            checkpoint_sync_time: {
              name: s("checkpoint_sync_time"),
              type: s("double precision"),
              nullable: b("T"),
            },
            buffers_checkpoint: {
              name: s("buffers_checkpoint"),
              type: s("bigint"),
              nullable: b("T"),
            },
            buffers_clean: {
              name: s("buffers_clean"),
              type: s("bigint"),
              nullable: b("T"),
            },
            maxwritten_clean: {
              name: s("maxwritten_clean"),
              type: s("bigint"),
              nullable: b("T"),
            },
            buffers_backend: {
              name: s("buffers_backend"),
              type: s("bigint"),
              nullable: b("T"),
            },
            buffers_backend_fsync: {
              name: s("buffers_backend_fsync"),
              type: s("bigint"),
              nullable: b("T"),
            },
            buffers_alloc: {
              name: s("buffers_alloc"),
              type: s("bigint"),
              nullable: b("T"),
            },
            stats_reset: {
              name: s("stats_reset"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_stat_progress_vacuum: {
          name: s("pg_stat_progress_vacuum"),
          columns: {
            pid: {
              name: s("pid"),
              type: s("integer"),
              nullable: b("T"),
            },
            datid: {
              name: s("datid"),
              type: s("oid"),
              nullable: b("T"),
            },
            datname: {
              name: s("datname"),
              type: s("name"),
              nullable: b("T"),
            },
            relid: {
              name: s("relid"),
              type: s("oid"),
              nullable: b("T"),
            },
            phase: {
              name: s("phase"),
              type: s("text"),
              nullable: b("T"),
            },
            heap_blks_total: {
              name: s("heap_blks_total"),
              type: s("bigint"),
              nullable: b("T"),
            },
            heap_blks_scanned: {
              name: s("heap_blks_scanned"),
              type: s("bigint"),
              nullable: b("T"),
            },
            heap_blks_vacuumed: {
              name: s("heap_blks_vacuumed"),
              type: s("bigint"),
              nullable: b("T"),
            },
            index_vacuum_count: {
              name: s("index_vacuum_count"),
              type: s("bigint"),
              nullable: b("T"),
            },
            max_dead_tuples: {
              name: s("max_dead_tuples"),
              type: s("bigint"),
              nullable: b("T"),
            },
            num_dead_tuples: {
              name: s("num_dead_tuples"),
              type: s("bigint"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        pg_user_mappings: {
          name: s("pg_user_mappings"),
          columns: {
            umid: {
              name: s("umid"),
              type: s("oid"),
              nullable: b("T"),
            },
            srvid: {
              name: s("srvid"),
              type: s("oid"),
              nullable: b("T"),
            },
            srvname: {
              name: s("srvname"),
              type: s("name"),
              nullable: b("T"),
            },
            umuser: {
              name: s("umuser"),
              type: s("oid"),
              nullable: b("T"),
            },
            usename: {
              name: s("usename"),
              type: s("name"),
              nullable: b("T"),
            },
            umoptions: {
              name: s("umoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
      },
    },
    information_schema: {
      name: s("information_schema"),
      tables: {
        sql_parts: {
          name: s("sql_parts"),
          columns: {
            feature_id: {
              name: s("feature_id"),
              type: s("character varying"),
              nullable: b("T"),
            },
            feature_name: {
              name: s("feature_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_supported: {
              name: s("is_supported"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_verified_by: {
              name: s("is_verified_by"),
              type: s("character varying"),
              nullable: b("T"),
            },
            comments: {
              name: s("comments"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        sql_languages: {
          name: s("sql_languages"),
          columns: {
            sql_language_source: {
              name: s("sql_language_source"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sql_language_year: {
              name: s("sql_language_year"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sql_language_conformance: {
              name: s("sql_language_conformance"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sql_language_integrity: {
              name: s("sql_language_integrity"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sql_language_implementation: {
              name: s("sql_language_implementation"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sql_language_binding_style: {
              name: s("sql_language_binding_style"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sql_language_programming_language: {
              name: s("sql_language_programming_language"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        sql_features: {
          name: s("sql_features"),
          columns: {
            feature_id: {
              name: s("feature_id"),
              type: s("character varying"),
              nullable: b("T"),
            },
            feature_name: {
              name: s("feature_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sub_feature_id: {
              name: s("sub_feature_id"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sub_feature_name: {
              name: s("sub_feature_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_supported: {
              name: s("is_supported"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_verified_by: {
              name: s("is_verified_by"),
              type: s("character varying"),
              nullable: b("T"),
            },
            comments: {
              name: s("comments"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        sql_implementation_info: {
          name: s("sql_implementation_info"),
          columns: {
            implementation_info_id: {
              name: s("implementation_info_id"),
              type: s("character varying"),
              nullable: b("T"),
            },
            implementation_info_name: {
              name: s("implementation_info_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            integer_value: {
              name: s("integer_value"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_value: {
              name: s("character_value"),
              type: s("character varying"),
              nullable: b("T"),
            },
            comments: {
              name: s("comments"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        sql_packages: {
          name: s("sql_packages"),
          columns: {
            feature_id: {
              name: s("feature_id"),
              type: s("character varying"),
              nullable: b("T"),
            },
            feature_name: {
              name: s("feature_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_supported: {
              name: s("is_supported"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_verified_by: {
              name: s("is_verified_by"),
              type: s("character varying"),
              nullable: b("T"),
            },
            comments: {
              name: s("comments"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        sql_sizing: {
          name: s("sql_sizing"),
          columns: {
            sizing_id: {
              name: s("sizing_id"),
              type: s("integer"),
              nullable: b("T"),
            },
            sizing_name: {
              name: s("sizing_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            supported_value: {
              name: s("supported_value"),
              type: s("integer"),
              nullable: b("T"),
            },
            comments: {
              name: s("comments"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        sql_sizing_profiles: {
          name: s("sql_sizing_profiles"),
          columns: {
            sizing_id: {
              name: s("sizing_id"),
              type: s("integer"),
              nullable: b("T"),
            },
            sizing_name: {
              name: s("sizing_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            profile_id: {
              name: s("profile_id"),
              type: s("character varying"),
              nullable: b("T"),
            },
            required_value: {
              name: s("required_value"),
              type: s("integer"),
              nullable: b("T"),
            },
            comments: {
              name: s("comments"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
      },
      views: {
        information_schema_catalog_name: {
          name: s("information_schema_catalog_name"),
          columns: {
            catalog_name: {
              name: s("catalog_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        attributes: {
          name: s("attributes"),
          columns: {
            udt_catalog: {
              name: s("udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_schema: {
              name: s("udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_name: {
              name: s("udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            attribute_name: {
              name: s("attribute_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            ordinal_position: {
              name: s("ordinal_position"),
              type: s("integer"),
              nullable: b("T"),
            },
            attribute_default: {
              name: s("attribute_default"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_nullable: {
              name: s("is_nullable"),
              type: s("character varying"),
              nullable: b("T"),
            },
            data_type: {
              name: s("data_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_maximum_length: {
              name: s("character_maximum_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_octet_length: {
              name: s("character_octet_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_set_catalog: {
              name: s("character_set_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_schema: {
              name: s("character_set_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_name: {
              name: s("character_set_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_catalog: {
              name: s("collation_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_schema: {
              name: s("collation_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_name: {
              name: s("collation_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            numeric_precision: {
              name: s("numeric_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_precision_radix: {
              name: s("numeric_precision_radix"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_scale: {
              name: s("numeric_scale"),
              type: s("integer"),
              nullable: b("T"),
            },
            datetime_precision: {
              name: s("datetime_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            interval_type: {
              name: s("interval_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            interval_precision: {
              name: s("interval_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            attribute_udt_catalog: {
              name: s("attribute_udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            attribute_udt_schema: {
              name: s("attribute_udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            attribute_udt_name: {
              name: s("attribute_udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_catalog: {
              name: s("scope_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_schema: {
              name: s("scope_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_name: {
              name: s("scope_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            maximum_cardinality: {
              name: s("maximum_cardinality"),
              type: s("integer"),
              nullable: b("T"),
            },
            dtd_identifier: {
              name: s("dtd_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_derived_reference_attribute: {
              name: s("is_derived_reference_attribute"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        applicable_roles: {
          name: s("applicable_roles"),
          columns: {
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            role_name: {
              name: s("role_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        administrable_role_authorizations: {
          name: s("administrable_role_authorizations"),
          columns: {
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            role_name: {
              name: s("role_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        check_constraint_routine_usage: {
          name: s("check_constraint_routine_usage"),
          columns: {
            constraint_catalog: {
              name: s("constraint_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_schema: {
              name: s("constraint_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_name: {
              name: s("constraint_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_catalog: {
              name: s("specific_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_schema: {
              name: s("specific_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_name: {
              name: s("specific_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        character_sets: {
          name: s("character_sets"),
          columns: {
            character_set_catalog: {
              name: s("character_set_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_schema: {
              name: s("character_set_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_name: {
              name: s("character_set_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_repertoire: {
              name: s("character_repertoire"),
              type: s("character varying"),
              nullable: b("T"),
            },
            form_of_use: {
              name: s("form_of_use"),
              type: s("character varying"),
              nullable: b("T"),
            },
            default_collate_catalog: {
              name: s("default_collate_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            default_collate_schema: {
              name: s("default_collate_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            default_collate_name: {
              name: s("default_collate_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        check_constraints: {
          name: s("check_constraints"),
          columns: {
            constraint_catalog: {
              name: s("constraint_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_schema: {
              name: s("constraint_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_name: {
              name: s("constraint_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            check_clause: {
              name: s("check_clause"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        collations: {
          name: s("collations"),
          columns: {
            collation_catalog: {
              name: s("collation_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_schema: {
              name: s("collation_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_name: {
              name: s("collation_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            pad_attribute: {
              name: s("pad_attribute"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        collation_character_set_applicability: {
          name: s("collation_character_set_applicability"),
          columns: {
            collation_catalog: {
              name: s("collation_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_schema: {
              name: s("collation_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_name: {
              name: s("collation_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_catalog: {
              name: s("character_set_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_schema: {
              name: s("character_set_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_name: {
              name: s("character_set_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        column_domain_usage: {
          name: s("column_domain_usage"),
          columns: {
            domain_catalog: {
              name: s("domain_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_schema: {
              name: s("domain_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_name: {
              name: s("domain_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            column_name: {
              name: s("column_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        column_privileges: {
          name: s("column_privileges"),
          columns: {
            grantor: {
              name: s("grantor"),
              type: s("character varying"),
              nullable: b("T"),
            },
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            column_name: {
              name: s("column_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            privilege_type: {
              name: s("privilege_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        routine_privileges: {
          name: s("routine_privileges"),
          columns: {
            grantor: {
              name: s("grantor"),
              type: s("character varying"),
              nullable: b("T"),
            },
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_catalog: {
              name: s("specific_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_schema: {
              name: s("specific_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_name: {
              name: s("specific_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_catalog: {
              name: s("routine_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_schema: {
              name: s("routine_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_name: {
              name: s("routine_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            privilege_type: {
              name: s("privilege_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        column_udt_usage: {
          name: s("column_udt_usage"),
          columns: {
            udt_catalog: {
              name: s("udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_schema: {
              name: s("udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_name: {
              name: s("udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            column_name: {
              name: s("column_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        columns: {
          name: s("columns"),
          columns: {
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            column_name: {
              name: s("column_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            ordinal_position: {
              name: s("ordinal_position"),
              type: s("integer"),
              nullable: b("T"),
            },
            column_default: {
              name: s("column_default"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_nullable: {
              name: s("is_nullable"),
              type: s("character varying"),
              nullable: b("T"),
            },
            data_type: {
              name: s("data_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_maximum_length: {
              name: s("character_maximum_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_octet_length: {
              name: s("character_octet_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_precision: {
              name: s("numeric_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_precision_radix: {
              name: s("numeric_precision_radix"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_scale: {
              name: s("numeric_scale"),
              type: s("integer"),
              nullable: b("T"),
            },
            datetime_precision: {
              name: s("datetime_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            interval_type: {
              name: s("interval_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            interval_precision: {
              name: s("interval_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_set_catalog: {
              name: s("character_set_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_schema: {
              name: s("character_set_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_name: {
              name: s("character_set_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_catalog: {
              name: s("collation_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_schema: {
              name: s("collation_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_name: {
              name: s("collation_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_catalog: {
              name: s("domain_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_schema: {
              name: s("domain_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_name: {
              name: s("domain_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_catalog: {
              name: s("udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_schema: {
              name: s("udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_name: {
              name: s("udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_catalog: {
              name: s("scope_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_schema: {
              name: s("scope_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_name: {
              name: s("scope_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            maximum_cardinality: {
              name: s("maximum_cardinality"),
              type: s("integer"),
              nullable: b("T"),
            },
            dtd_identifier: {
              name: s("dtd_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_self_referencing: {
              name: s("is_self_referencing"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_identity: {
              name: s("is_identity"),
              type: s("character varying"),
              nullable: b("T"),
            },
            identity_generation: {
              name: s("identity_generation"),
              type: s("character varying"),
              nullable: b("T"),
            },
            identity_start: {
              name: s("identity_start"),
              type: s("character varying"),
              nullable: b("T"),
            },
            identity_increment: {
              name: s("identity_increment"),
              type: s("character varying"),
              nullable: b("T"),
            },
            identity_maximum: {
              name: s("identity_maximum"),
              type: s("character varying"),
              nullable: b("T"),
            },
            identity_minimum: {
              name: s("identity_minimum"),
              type: s("character varying"),
              nullable: b("T"),
            },
            identity_cycle: {
              name: s("identity_cycle"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_generated: {
              name: s("is_generated"),
              type: s("character varying"),
              nullable: b("T"),
            },
            generation_expression: {
              name: s("generation_expression"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_updatable: {
              name: s("is_updatable"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        constraint_column_usage: {
          name: s("constraint_column_usage"),
          columns: {
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            column_name: {
              name: s("column_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_catalog: {
              name: s("constraint_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_schema: {
              name: s("constraint_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_name: {
              name: s("constraint_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        role_routine_grants: {
          name: s("role_routine_grants"),
          columns: {
            grantor: {
              name: s("grantor"),
              type: s("character varying"),
              nullable: b("T"),
            },
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_catalog: {
              name: s("specific_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_schema: {
              name: s("specific_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_name: {
              name: s("specific_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_catalog: {
              name: s("routine_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_schema: {
              name: s("routine_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_name: {
              name: s("routine_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            privilege_type: {
              name: s("privilege_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        constraint_table_usage: {
          name: s("constraint_table_usage"),
          columns: {
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_catalog: {
              name: s("constraint_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_schema: {
              name: s("constraint_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_name: {
              name: s("constraint_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        domain_constraints: {
          name: s("domain_constraints"),
          columns: {
            constraint_catalog: {
              name: s("constraint_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_schema: {
              name: s("constraint_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_name: {
              name: s("constraint_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_catalog: {
              name: s("domain_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_schema: {
              name: s("domain_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_name: {
              name: s("domain_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_deferrable: {
              name: s("is_deferrable"),
              type: s("character varying"),
              nullable: b("T"),
            },
            initially_deferred: {
              name: s("initially_deferred"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        domain_udt_usage: {
          name: s("domain_udt_usage"),
          columns: {
            udt_catalog: {
              name: s("udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_schema: {
              name: s("udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_name: {
              name: s("udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_catalog: {
              name: s("domain_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_schema: {
              name: s("domain_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_name: {
              name: s("domain_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        routines: {
          name: s("routines"),
          columns: {
            specific_catalog: {
              name: s("specific_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_schema: {
              name: s("specific_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_name: {
              name: s("specific_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_catalog: {
              name: s("routine_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_schema: {
              name: s("routine_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_name: {
              name: s("routine_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_type: {
              name: s("routine_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            module_catalog: {
              name: s("module_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            module_schema: {
              name: s("module_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            module_name: {
              name: s("module_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_catalog: {
              name: s("udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_schema: {
              name: s("udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_name: {
              name: s("udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            data_type: {
              name: s("data_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_maximum_length: {
              name: s("character_maximum_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_octet_length: {
              name: s("character_octet_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_set_catalog: {
              name: s("character_set_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_schema: {
              name: s("character_set_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_name: {
              name: s("character_set_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_catalog: {
              name: s("collation_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_schema: {
              name: s("collation_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_name: {
              name: s("collation_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            numeric_precision: {
              name: s("numeric_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_precision_radix: {
              name: s("numeric_precision_radix"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_scale: {
              name: s("numeric_scale"),
              type: s("integer"),
              nullable: b("T"),
            },
            datetime_precision: {
              name: s("datetime_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            interval_type: {
              name: s("interval_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            interval_precision: {
              name: s("interval_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            type_udt_catalog: {
              name: s("type_udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            type_udt_schema: {
              name: s("type_udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            type_udt_name: {
              name: s("type_udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_catalog: {
              name: s("scope_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_schema: {
              name: s("scope_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_name: {
              name: s("scope_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            maximum_cardinality: {
              name: s("maximum_cardinality"),
              type: s("integer"),
              nullable: b("T"),
            },
            dtd_identifier: {
              name: s("dtd_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_body: {
              name: s("routine_body"),
              type: s("character varying"),
              nullable: b("T"),
            },
            routine_definition: {
              name: s("routine_definition"),
              type: s("character varying"),
              nullable: b("T"),
            },
            external_name: {
              name: s("external_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            external_language: {
              name: s("external_language"),
              type: s("character varying"),
              nullable: b("T"),
            },
            parameter_style: {
              name: s("parameter_style"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_deterministic: {
              name: s("is_deterministic"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sql_data_access: {
              name: s("sql_data_access"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_null_call: {
              name: s("is_null_call"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sql_path: {
              name: s("sql_path"),
              type: s("character varying"),
              nullable: b("T"),
            },
            schema_level_routine: {
              name: s("schema_level_routine"),
              type: s("character varying"),
              nullable: b("T"),
            },
            max_dynamic_result_sets: {
              name: s("max_dynamic_result_sets"),
              type: s("integer"),
              nullable: b("T"),
            },
            is_user_defined_cast: {
              name: s("is_user_defined_cast"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_implicitly_invocable: {
              name: s("is_implicitly_invocable"),
              type: s("character varying"),
              nullable: b("T"),
            },
            security_type: {
              name: s("security_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            to_sql_specific_catalog: {
              name: s("to_sql_specific_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            to_sql_specific_schema: {
              name: s("to_sql_specific_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            to_sql_specific_name: {
              name: s("to_sql_specific_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            as_locator: {
              name: s("as_locator"),
              type: s("character varying"),
              nullable: b("T"),
            },
            created: {
              name: s("created"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            last_altered: {
              name: s("last_altered"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
            new_savepoint_level: {
              name: s("new_savepoint_level"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_udt_dependent: {
              name: s("is_udt_dependent"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_from_data_type: {
              name: s("result_cast_from_data_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_as_locator: {
              name: s("result_cast_as_locator"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_char_max_length: {
              name: s("result_cast_char_max_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            result_cast_char_octet_length: {
              name: s("result_cast_char_octet_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            result_cast_char_set_catalog: {
              name: s("result_cast_char_set_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_char_set_schema: {
              name: s("result_cast_char_set_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_char_set_name: {
              name: s("result_cast_char_set_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_collation_catalog: {
              name: s("result_cast_collation_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_collation_schema: {
              name: s("result_cast_collation_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_collation_name: {
              name: s("result_cast_collation_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_numeric_precision: {
              name: s("result_cast_numeric_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            result_cast_numeric_precision_radix: {
              name: s("result_cast_numeric_precision_radix"),
              type: s("integer"),
              nullable: b("T"),
            },
            result_cast_numeric_scale: {
              name: s("result_cast_numeric_scale"),
              type: s("integer"),
              nullable: b("T"),
            },
            result_cast_datetime_precision: {
              name: s("result_cast_datetime_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            result_cast_interval_type: {
              name: s("result_cast_interval_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_interval_precision: {
              name: s("result_cast_interval_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            result_cast_type_udt_catalog: {
              name: s("result_cast_type_udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_type_udt_schema: {
              name: s("result_cast_type_udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_type_udt_name: {
              name: s("result_cast_type_udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_scope_catalog: {
              name: s("result_cast_scope_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_scope_schema: {
              name: s("result_cast_scope_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_scope_name: {
              name: s("result_cast_scope_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            result_cast_maximum_cardinality: {
              name: s("result_cast_maximum_cardinality"),
              type: s("integer"),
              nullable: b("T"),
            },
            result_cast_dtd_identifier: {
              name: s("result_cast_dtd_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        domains: {
          name: s("domains"),
          columns: {
            domain_catalog: {
              name: s("domain_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_schema: {
              name: s("domain_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            domain_name: {
              name: s("domain_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            data_type: {
              name: s("data_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_maximum_length: {
              name: s("character_maximum_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_octet_length: {
              name: s("character_octet_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_set_catalog: {
              name: s("character_set_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_schema: {
              name: s("character_set_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_name: {
              name: s("character_set_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_catalog: {
              name: s("collation_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_schema: {
              name: s("collation_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_name: {
              name: s("collation_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            numeric_precision: {
              name: s("numeric_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_precision_radix: {
              name: s("numeric_precision_radix"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_scale: {
              name: s("numeric_scale"),
              type: s("integer"),
              nullable: b("T"),
            },
            datetime_precision: {
              name: s("datetime_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            interval_type: {
              name: s("interval_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            interval_precision: {
              name: s("interval_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            domain_default: {
              name: s("domain_default"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_catalog: {
              name: s("udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_schema: {
              name: s("udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_name: {
              name: s("udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_catalog: {
              name: s("scope_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_schema: {
              name: s("scope_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_name: {
              name: s("scope_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            maximum_cardinality: {
              name: s("maximum_cardinality"),
              type: s("integer"),
              nullable: b("T"),
            },
            dtd_identifier: {
              name: s("dtd_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        enabled_roles: {
          name: s("enabled_roles"),
          columns: {
            role_name: {
              name: s("role_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        key_column_usage: {
          name: s("key_column_usage"),
          columns: {
            constraint_catalog: {
              name: s("constraint_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_schema: {
              name: s("constraint_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_name: {
              name: s("constraint_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            column_name: {
              name: s("column_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            ordinal_position: {
              name: s("ordinal_position"),
              type: s("integer"),
              nullable: b("T"),
            },
            position_in_unique_constraint: {
              name: s("position_in_unique_constraint"),
              type: s("integer"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        schemata: {
          name: s("schemata"),
          columns: {
            catalog_name: {
              name: s("catalog_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            schema_name: {
              name: s("schema_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            schema_owner: {
              name: s("schema_owner"),
              type: s("character varying"),
              nullable: b("T"),
            },
            default_character_set_catalog: {
              name: s("default_character_set_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            default_character_set_schema: {
              name: s("default_character_set_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            default_character_set_name: {
              name: s("default_character_set_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sql_path: {
              name: s("sql_path"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        parameters: {
          name: s("parameters"),
          columns: {
            specific_catalog: {
              name: s("specific_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_schema: {
              name: s("specific_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_name: {
              name: s("specific_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            ordinal_position: {
              name: s("ordinal_position"),
              type: s("integer"),
              nullable: b("T"),
            },
            parameter_mode: {
              name: s("parameter_mode"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_result: {
              name: s("is_result"),
              type: s("character varying"),
              nullable: b("T"),
            },
            as_locator: {
              name: s("as_locator"),
              type: s("character varying"),
              nullable: b("T"),
            },
            parameter_name: {
              name: s("parameter_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            data_type: {
              name: s("data_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_maximum_length: {
              name: s("character_maximum_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_octet_length: {
              name: s("character_octet_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_set_catalog: {
              name: s("character_set_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_schema: {
              name: s("character_set_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_name: {
              name: s("character_set_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_catalog: {
              name: s("collation_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_schema: {
              name: s("collation_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_name: {
              name: s("collation_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            numeric_precision: {
              name: s("numeric_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_precision_radix: {
              name: s("numeric_precision_radix"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_scale: {
              name: s("numeric_scale"),
              type: s("integer"),
              nullable: b("T"),
            },
            datetime_precision: {
              name: s("datetime_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            interval_type: {
              name: s("interval_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            interval_precision: {
              name: s("interval_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            udt_catalog: {
              name: s("udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_schema: {
              name: s("udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_name: {
              name: s("udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_catalog: {
              name: s("scope_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_schema: {
              name: s("scope_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_name: {
              name: s("scope_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            maximum_cardinality: {
              name: s("maximum_cardinality"),
              type: s("integer"),
              nullable: b("T"),
            },
            dtd_identifier: {
              name: s("dtd_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
            parameter_default: {
              name: s("parameter_default"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        referential_constraints: {
          name: s("referential_constraints"),
          columns: {
            constraint_catalog: {
              name: s("constraint_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_schema: {
              name: s("constraint_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_name: {
              name: s("constraint_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            unique_constraint_catalog: {
              name: s("unique_constraint_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            unique_constraint_schema: {
              name: s("unique_constraint_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            unique_constraint_name: {
              name: s("unique_constraint_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            match_option: {
              name: s("match_option"),
              type: s("character varying"),
              nullable: b("T"),
            },
            update_rule: {
              name: s("update_rule"),
              type: s("character varying"),
              nullable: b("T"),
            },
            delete_rule: {
              name: s("delete_rule"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        role_column_grants: {
          name: s("role_column_grants"),
          columns: {
            grantor: {
              name: s("grantor"),
              type: s("character varying"),
              nullable: b("T"),
            },
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            column_name: {
              name: s("column_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            privilege_type: {
              name: s("privilege_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        sequences: {
          name: s("sequences"),
          columns: {
            sequence_catalog: {
              name: s("sequence_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sequence_schema: {
              name: s("sequence_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            sequence_name: {
              name: s("sequence_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            data_type: {
              name: s("data_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            numeric_precision: {
              name: s("numeric_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_precision_radix: {
              name: s("numeric_precision_radix"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_scale: {
              name: s("numeric_scale"),
              type: s("integer"),
              nullable: b("T"),
            },
            start_value: {
              name: s("start_value"),
              type: s("character varying"),
              nullable: b("T"),
            },
            minimum_value: {
              name: s("minimum_value"),
              type: s("character varying"),
              nullable: b("T"),
            },
            maximum_value: {
              name: s("maximum_value"),
              type: s("character varying"),
              nullable: b("T"),
            },
            increment: {
              name: s("increment"),
              type: s("character varying"),
              nullable: b("T"),
            },
            cycle_option: {
              name: s("cycle_option"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        view_routine_usage: {
          name: s("view_routine_usage"),
          columns: {
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_catalog: {
              name: s("specific_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_schema: {
              name: s("specific_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_name: {
              name: s("specific_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        table_constraints: {
          name: s("table_constraints"),
          columns: {
            constraint_catalog: {
              name: s("constraint_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_schema: {
              name: s("constraint_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_name: {
              name: s("constraint_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            constraint_type: {
              name: s("constraint_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_deferrable: {
              name: s("is_deferrable"),
              type: s("character varying"),
              nullable: b("T"),
            },
            initially_deferred: {
              name: s("initially_deferred"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        table_privileges: {
          name: s("table_privileges"),
          columns: {
            grantor: {
              name: s("grantor"),
              type: s("character varying"),
              nullable: b("T"),
            },
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            privilege_type: {
              name: s("privilege_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
            with_hierarchy: {
              name: s("with_hierarchy"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        foreign_table_options: {
          name: s("foreign_table_options"),
          columns: {
            foreign_table_catalog: {
              name: s("foreign_table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_table_schema: {
              name: s("foreign_table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_table_name: {
              name: s("foreign_table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            option_name: {
              name: s("option_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            option_value: {
              name: s("option_value"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        role_table_grants: {
          name: s("role_table_grants"),
          columns: {
            grantor: {
              name: s("grantor"),
              type: s("character varying"),
              nullable: b("T"),
            },
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            privilege_type: {
              name: s("privilege_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
            with_hierarchy: {
              name: s("with_hierarchy"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        view_table_usage: {
          name: s("view_table_usage"),
          columns: {
            view_catalog: {
              name: s("view_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            view_schema: {
              name: s("view_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            view_name: {
              name: s("view_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        tables: {
          name: s("tables"),
          columns: {
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_type: {
              name: s("table_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            self_referencing_column_name: {
              name: s("self_referencing_column_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            reference_generation: {
              name: s("reference_generation"),
              type: s("character varying"),
              nullable: b("T"),
            },
            user_defined_type_catalog: {
              name: s("user_defined_type_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            user_defined_type_schema: {
              name: s("user_defined_type_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            user_defined_type_name: {
              name: s("user_defined_type_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_insertable_into: {
              name: s("is_insertable_into"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_typed: {
              name: s("is_typed"),
              type: s("character varying"),
              nullable: b("T"),
            },
            commit_action: {
              name: s("commit_action"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        transforms: {
          name: s("transforms"),
          columns: {
            udt_catalog: {
              name: s("udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_schema: {
              name: s("udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_name: {
              name: s("udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_catalog: {
              name: s("specific_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_schema: {
              name: s("specific_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            specific_name: {
              name: s("specific_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            group_name: {
              name: s("group_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            transform_type: {
              name: s("transform_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        triggered_update_columns: {
          name: s("triggered_update_columns"),
          columns: {
            trigger_catalog: {
              name: s("trigger_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            trigger_schema: {
              name: s("trigger_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            trigger_name: {
              name: s("trigger_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            event_object_catalog: {
              name: s("event_object_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            event_object_schema: {
              name: s("event_object_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            event_object_table: {
              name: s("event_object_table"),
              type: s("character varying"),
              nullable: b("T"),
            },
            event_object_column: {
              name: s("event_object_column"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        foreign_data_wrappers: {
          name: s("foreign_data_wrappers"),
          columns: {
            foreign_data_wrapper_catalog: {
              name: s("foreign_data_wrapper_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_data_wrapper_name: {
              name: s("foreign_data_wrapper_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            authorization_identifier: {
              name: s("authorization_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
            library_name: {
              name: s("library_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_data_wrapper_language: {
              name: s("foreign_data_wrapper_language"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        triggers: {
          name: s("triggers"),
          columns: {
            trigger_catalog: {
              name: s("trigger_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            trigger_schema: {
              name: s("trigger_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            trigger_name: {
              name: s("trigger_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            event_manipulation: {
              name: s("event_manipulation"),
              type: s("character varying"),
              nullable: b("T"),
            },
            event_object_catalog: {
              name: s("event_object_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            event_object_schema: {
              name: s("event_object_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            event_object_table: {
              name: s("event_object_table"),
              type: s("character varying"),
              nullable: b("T"),
            },
            action_order: {
              name: s("action_order"),
              type: s("integer"),
              nullable: b("T"),
            },
            action_condition: {
              name: s("action_condition"),
              type: s("character varying"),
              nullable: b("T"),
            },
            action_statement: {
              name: s("action_statement"),
              type: s("character varying"),
              nullable: b("T"),
            },
            action_orientation: {
              name: s("action_orientation"),
              type: s("character varying"),
              nullable: b("T"),
            },
            action_timing: {
              name: s("action_timing"),
              type: s("character varying"),
              nullable: b("T"),
            },
            action_reference_old_table: {
              name: s("action_reference_old_table"),
              type: s("character varying"),
              nullable: b("T"),
            },
            action_reference_new_table: {
              name: s("action_reference_new_table"),
              type: s("character varying"),
              nullable: b("T"),
            },
            action_reference_old_row: {
              name: s("action_reference_old_row"),
              type: s("character varying"),
              nullable: b("T"),
            },
            action_reference_new_row: {
              name: s("action_reference_new_row"),
              type: s("character varying"),
              nullable: b("T"),
            },
            created: {
              name: s("created"),
              type: s("timestamp with time zone"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        views: {
          name: s("views"),
          columns: {
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            view_definition: {
              name: s("view_definition"),
              type: s("character varying"),
              nullable: b("T"),
            },
            check_option: {
              name: s("check_option"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_updatable: {
              name: s("is_updatable"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_insertable_into: {
              name: s("is_insertable_into"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_trigger_updatable: {
              name: s("is_trigger_updatable"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_trigger_deletable: {
              name: s("is_trigger_deletable"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_trigger_insertable_into: {
              name: s("is_trigger_insertable_into"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        udt_privileges: {
          name: s("udt_privileges"),
          columns: {
            grantor: {
              name: s("grantor"),
              type: s("character varying"),
              nullable: b("T"),
            },
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_catalog: {
              name: s("udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_schema: {
              name: s("udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_name: {
              name: s("udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            privilege_type: {
              name: s("privilege_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        role_udt_grants: {
          name: s("role_udt_grants"),
          columns: {
            grantor: {
              name: s("grantor"),
              type: s("character varying"),
              nullable: b("T"),
            },
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_catalog: {
              name: s("udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_schema: {
              name: s("udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_name: {
              name: s("udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            privilege_type: {
              name: s("privilege_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        usage_privileges: {
          name: s("usage_privileges"),
          columns: {
            grantor: {
              name: s("grantor"),
              type: s("character varying"),
              nullable: b("T"),
            },
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_catalog: {
              name: s("object_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_schema: {
              name: s("object_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_name: {
              name: s("object_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_type: {
              name: s("object_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            privilege_type: {
              name: s("privilege_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        data_type_privileges: {
          name: s("data_type_privileges"),
          columns: {
            object_catalog: {
              name: s("object_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_schema: {
              name: s("object_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_name: {
              name: s("object_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_type: {
              name: s("object_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            dtd_identifier: {
              name: s("dtd_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        role_usage_grants: {
          name: s("role_usage_grants"),
          columns: {
            grantor: {
              name: s("grantor"),
              type: s("character varying"),
              nullable: b("T"),
            },
            grantee: {
              name: s("grantee"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_catalog: {
              name: s("object_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_schema: {
              name: s("object_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_name: {
              name: s("object_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_type: {
              name: s("object_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            privilege_type: {
              name: s("privilege_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_grantable: {
              name: s("is_grantable"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        user_defined_types: {
          name: s("user_defined_types"),
          columns: {
            user_defined_type_catalog: {
              name: s("user_defined_type_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            user_defined_type_schema: {
              name: s("user_defined_type_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            user_defined_type_name: {
              name: s("user_defined_type_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            user_defined_type_category: {
              name: s("user_defined_type_category"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_instantiable: {
              name: s("is_instantiable"),
              type: s("character varying"),
              nullable: b("T"),
            },
            is_final: {
              name: s("is_final"),
              type: s("character varying"),
              nullable: b("T"),
            },
            ordering_form: {
              name: s("ordering_form"),
              type: s("character varying"),
              nullable: b("T"),
            },
            ordering_category: {
              name: s("ordering_category"),
              type: s("character varying"),
              nullable: b("T"),
            },
            ordering_routine_catalog: {
              name: s("ordering_routine_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            ordering_routine_schema: {
              name: s("ordering_routine_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            ordering_routine_name: {
              name: s("ordering_routine_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            reference_type: {
              name: s("reference_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            data_type: {
              name: s("data_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_maximum_length: {
              name: s("character_maximum_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_octet_length: {
              name: s("character_octet_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_set_catalog: {
              name: s("character_set_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_schema: {
              name: s("character_set_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_name: {
              name: s("character_set_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_catalog: {
              name: s("collation_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_schema: {
              name: s("collation_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_name: {
              name: s("collation_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            numeric_precision: {
              name: s("numeric_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_precision_radix: {
              name: s("numeric_precision_radix"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_scale: {
              name: s("numeric_scale"),
              type: s("integer"),
              nullable: b("T"),
            },
            datetime_precision: {
              name: s("datetime_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            interval_type: {
              name: s("interval_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            interval_precision: {
              name: s("interval_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            source_dtd_identifier: {
              name: s("source_dtd_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
            ref_dtd_identifier: {
              name: s("ref_dtd_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        _pg_foreign_servers: {
          name: s("_pg_foreign_servers"),
          columns: {
            oid: {
              name: s("oid"),
              type: s("oid"),
              nullable: b("T"),
            },
            srvoptions: {
              name: s("srvoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            foreign_server_catalog: {
              name: s("foreign_server_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_name: {
              name: s("foreign_server_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_data_wrapper_catalog: {
              name: s("foreign_data_wrapper_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_data_wrapper_name: {
              name: s("foreign_data_wrapper_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_type: {
              name: s("foreign_server_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_version: {
              name: s("foreign_server_version"),
              type: s("character varying"),
              nullable: b("T"),
            },
            authorization_identifier: {
              name: s("authorization_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        view_column_usage: {
          name: s("view_column_usage"),
          columns: {
            view_catalog: {
              name: s("view_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            view_schema: {
              name: s("view_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            view_name: {
              name: s("view_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            column_name: {
              name: s("column_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        element_types: {
          name: s("element_types"),
          columns: {
            object_catalog: {
              name: s("object_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_schema: {
              name: s("object_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_name: {
              name: s("object_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            object_type: {
              name: s("object_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collection_type_identifier: {
              name: s("collection_type_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
            data_type: {
              name: s("data_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_maximum_length: {
              name: s("character_maximum_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_octet_length: {
              name: s("character_octet_length"),
              type: s("integer"),
              nullable: b("T"),
            },
            character_set_catalog: {
              name: s("character_set_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_schema: {
              name: s("character_set_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            character_set_name: {
              name: s("character_set_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_catalog: {
              name: s("collation_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_schema: {
              name: s("collation_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            collation_name: {
              name: s("collation_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            numeric_precision: {
              name: s("numeric_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_precision_radix: {
              name: s("numeric_precision_radix"),
              type: s("integer"),
              nullable: b("T"),
            },
            numeric_scale: {
              name: s("numeric_scale"),
              type: s("integer"),
              nullable: b("T"),
            },
            datetime_precision: {
              name: s("datetime_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            interval_type: {
              name: s("interval_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            interval_precision: {
              name: s("interval_precision"),
              type: s("integer"),
              nullable: b("T"),
            },
            domain_default: {
              name: s("domain_default"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_catalog: {
              name: s("udt_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_schema: {
              name: s("udt_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            udt_name: {
              name: s("udt_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_catalog: {
              name: s("scope_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_schema: {
              name: s("scope_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            scope_name: {
              name: s("scope_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            maximum_cardinality: {
              name: s("maximum_cardinality"),
              type: s("integer"),
              nullable: b("T"),
            },
            dtd_identifier: {
              name: s("dtd_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        _pg_foreign_table_columns: {
          name: s("_pg_foreign_table_columns"),
          columns: {
            nspname: {
              name: s("nspname"),
              type: s("name"),
              nullable: b("T"),
            },
            relname: {
              name: s("relname"),
              type: s("name"),
              nullable: b("T"),
            },
            attname: {
              name: s("attname"),
              type: s("name"),
              nullable: b("T"),
            },
            attfdwoptions: {
              name: s("attfdwoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        column_options: {
          name: s("column_options"),
          columns: {
            table_catalog: {
              name: s("table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_schema: {
              name: s("table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            table_name: {
              name: s("table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            column_name: {
              name: s("column_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            option_name: {
              name: s("option_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            option_value: {
              name: s("option_value"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        _pg_foreign_data_wrappers: {
          name: s("_pg_foreign_data_wrappers"),
          columns: {
            oid: {
              name: s("oid"),
              type: s("oid"),
              nullable: b("T"),
            },
            fdwowner: {
              name: s("fdwowner"),
              type: s("oid"),
              nullable: b("T"),
            },
            fdwoptions: {
              name: s("fdwoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            foreign_data_wrapper_catalog: {
              name: s("foreign_data_wrapper_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_data_wrapper_name: {
              name: s("foreign_data_wrapper_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            authorization_identifier: {
              name: s("authorization_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_data_wrapper_language: {
              name: s("foreign_data_wrapper_language"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        foreign_server_options: {
          name: s("foreign_server_options"),
          columns: {
            foreign_server_catalog: {
              name: s("foreign_server_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_name: {
              name: s("foreign_server_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            option_name: {
              name: s("option_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            option_value: {
              name: s("option_value"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        foreign_data_wrapper_options: {
          name: s("foreign_data_wrapper_options"),
          columns: {
            foreign_data_wrapper_catalog: {
              name: s("foreign_data_wrapper_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_data_wrapper_name: {
              name: s("foreign_data_wrapper_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            option_name: {
              name: s("option_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            option_value: {
              name: s("option_value"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        user_mapping_options: {
          name: s("user_mapping_options"),
          columns: {
            authorization_identifier: {
              name: s("authorization_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_catalog: {
              name: s("foreign_server_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_name: {
              name: s("foreign_server_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            option_name: {
              name: s("option_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            option_value: {
              name: s("option_value"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        foreign_servers: {
          name: s("foreign_servers"),
          columns: {
            foreign_server_catalog: {
              name: s("foreign_server_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_name: {
              name: s("foreign_server_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_data_wrapper_catalog: {
              name: s("foreign_data_wrapper_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_data_wrapper_name: {
              name: s("foreign_data_wrapper_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_type: {
              name: s("foreign_server_type"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_version: {
              name: s("foreign_server_version"),
              type: s("character varying"),
              nullable: b("T"),
            },
            authorization_identifier: {
              name: s("authorization_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        _pg_foreign_tables: {
          name: s("_pg_foreign_tables"),
          columns: {
            foreign_table_catalog: {
              name: s("foreign_table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_table_schema: {
              name: s("foreign_table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_table_name: {
              name: s("foreign_table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            ftoptions: {
              name: s("ftoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            foreign_server_catalog: {
              name: s("foreign_server_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_name: {
              name: s("foreign_server_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            authorization_identifier: {
              name: s("authorization_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        foreign_tables: {
          name: s("foreign_tables"),
          columns: {
            foreign_table_catalog: {
              name: s("foreign_table_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_table_schema: {
              name: s("foreign_table_schema"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_table_name: {
              name: s("foreign_table_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_catalog: {
              name: s("foreign_server_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_name: {
              name: s("foreign_server_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        _pg_user_mappings: {
          name: s("_pg_user_mappings"),
          columns: {
            oid: {
              name: s("oid"),
              type: s("oid"),
              nullable: b("T"),
            },
            umoptions: {
              name: s("umoptions"),
              type: s("ARRAY"),
              nullable: b("T"),
            },
            umuser: {
              name: s("umuser"),
              type: s("oid"),
              nullable: b("T"),
            },
            authorization_identifier: {
              name: s("authorization_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_catalog: {
              name: s("foreign_server_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_name: {
              name: s("foreign_server_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
            srvowner: {
              name: s("srvowner"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
        user_mappings: {
          name: s("user_mappings"),
          columns: {
            authorization_identifier: {
              name: s("authorization_identifier"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_catalog: {
              name: s("foreign_server_catalog"),
              type: s("character varying"),
              nullable: b("T"),
            },
            foreign_server_name: {
              name: s("foreign_server_name"),
              type: s("character varying"),
              nullable: b("T"),
            },
          },
          indices: {
          },
        },
      },
    },
  },
};


// this is a generated file.
// exact string
const s = <Strings extends string[]>(...strings: Strings) => strings[0] as Strings[0];
// exact tuple
const l = <Strings extends string[]>(...strings: Strings) => strings as Strings;
// bool as "T" or "F"
const b = <Strings extends Array<("T" | "F")>>(...strings: Strings) => strings[0] as Strings[0];

export const Def = {
  schemas: {
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

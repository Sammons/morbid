
// this is a generated file.

export const Def = {
  schemas: {
    information_schema: {
      name: "information_schema" as "information_schema",
      tables: {
        sql_parts: {
          name: "sql_parts" as "sql_parts",
          columns: {
            feature_id: {
              name: "feature_id" as "feature_id",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            feature_name: {
              name: "feature_name" as "feature_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_supported: {
              name: "is_supported" as "is_supported",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_verified_by: {
              name: "is_verified_by" as "is_verified_by",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            comments: {
              name: "comments" as "comments",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
          indices: {
          },
        },
        sql_languages: {
          name: "sql_languages" as "sql_languages",
          columns: {
            sql_language_source: {
              name: "sql_language_source" as "sql_language_source",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sql_language_year: {
              name: "sql_language_year" as "sql_language_year",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sql_language_conformance: {
              name: "sql_language_conformance" as "sql_language_conformance",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sql_language_integrity: {
              name: "sql_language_integrity" as "sql_language_integrity",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sql_language_implementation: {
              name: "sql_language_implementation" as "sql_language_implementation",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sql_language_binding_style: {
              name: "sql_language_binding_style" as "sql_language_binding_style",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sql_language_programming_language: {
              name: "sql_language_programming_language" as "sql_language_programming_language",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
          indices: {
          },
        },
        sql_features: {
          name: "sql_features" as "sql_features",
          columns: {
            feature_id: {
              name: "feature_id" as "feature_id",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            feature_name: {
              name: "feature_name" as "feature_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sub_feature_id: {
              name: "sub_feature_id" as "sub_feature_id",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sub_feature_name: {
              name: "sub_feature_name" as "sub_feature_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_supported: {
              name: "is_supported" as "is_supported",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_verified_by: {
              name: "is_verified_by" as "is_verified_by",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            comments: {
              name: "comments" as "comments",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
          indices: {
          },
        },
        sql_implementation_info: {
          name: "sql_implementation_info" as "sql_implementation_info",
          columns: {
            implementation_info_id: {
              name: "implementation_info_id" as "implementation_info_id",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            implementation_info_name: {
              name: "implementation_info_name" as "implementation_info_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            integer_value: {
              name: "integer_value" as "integer_value",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_value: {
              name: "character_value" as "character_value",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            comments: {
              name: "comments" as "comments",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
          indices: {
          },
        },
        sql_packages: {
          name: "sql_packages" as "sql_packages",
          columns: {
            feature_id: {
              name: "feature_id" as "feature_id",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            feature_name: {
              name: "feature_name" as "feature_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_supported: {
              name: "is_supported" as "is_supported",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_verified_by: {
              name: "is_verified_by" as "is_verified_by",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            comments: {
              name: "comments" as "comments",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
          indices: {
          },
        },
        sql_sizing: {
          name: "sql_sizing" as "sql_sizing",
          columns: {
            sizing_id: {
              name: "sizing_id" as "sizing_id",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            sizing_name: {
              name: "sizing_name" as "sizing_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            supported_value: {
              name: "supported_value" as "supported_value",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            comments: {
              name: "comments" as "comments",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
          indices: {
          },
        },
        sql_sizing_profiles: {
          name: "sql_sizing_profiles" as "sql_sizing_profiles",
          columns: {
            sizing_id: {
              name: "sizing_id" as "sizing_id",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            sizing_name: {
              name: "sizing_name" as "sizing_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            profile_id: {
              name: "profile_id" as "profile_id",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            required_value: {
              name: "required_value" as "required_value",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            comments: {
              name: "comments" as "comments",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
          indices: {
          },
        },
      },
      views: {
        information_schema_catalog_name: {
          name: "information_schema_catalog_name" as "information_schema_catalog_name",
          columns: {
            catalog_name: {
              name: "catalog_name" as "catalog_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        attributes: {
          name: "attributes" as "attributes",
          columns: {
            udt_catalog: {
              name: "udt_catalog" as "udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_schema: {
              name: "udt_schema" as "udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_name: {
              name: "udt_name" as "udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            attribute_name: {
              name: "attribute_name" as "attribute_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            ordinal_position: {
              name: "ordinal_position" as "ordinal_position",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            attribute_default: {
              name: "attribute_default" as "attribute_default",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_nullable: {
              name: "is_nullable" as "is_nullable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            data_type: {
              name: "data_type" as "data_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_maximum_length: {
              name: "character_maximum_length" as "character_maximum_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_octet_length: {
              name: "character_octet_length" as "character_octet_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_set_catalog: {
              name: "character_set_catalog" as "character_set_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_schema: {
              name: "character_set_schema" as "character_set_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_name: {
              name: "character_set_name" as "character_set_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_catalog: {
              name: "collation_catalog" as "collation_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_schema: {
              name: "collation_schema" as "collation_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_name: {
              name: "collation_name" as "collation_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            numeric_precision: {
              name: "numeric_precision" as "numeric_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_precision_radix: {
              name: "numeric_precision_radix" as "numeric_precision_radix",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_scale: {
              name: "numeric_scale" as "numeric_scale",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            datetime_precision: {
              name: "datetime_precision" as "datetime_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            interval_type: {
              name: "interval_type" as "interval_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            interval_precision: {
              name: "interval_precision" as "interval_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            attribute_udt_catalog: {
              name: "attribute_udt_catalog" as "attribute_udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            attribute_udt_schema: {
              name: "attribute_udt_schema" as "attribute_udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            attribute_udt_name: {
              name: "attribute_udt_name" as "attribute_udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_catalog: {
              name: "scope_catalog" as "scope_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_schema: {
              name: "scope_schema" as "scope_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_name: {
              name: "scope_name" as "scope_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            maximum_cardinality: {
              name: "maximum_cardinality" as "maximum_cardinality",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            dtd_identifier: {
              name: "dtd_identifier" as "dtd_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_derived_reference_attribute: {
              name: "is_derived_reference_attribute" as "is_derived_reference_attribute",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        applicable_roles: {
          name: "applicable_roles" as "applicable_roles",
          columns: {
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            role_name: {
              name: "role_name" as "role_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        administrable_role_authorizations: {
          name: "administrable_role_authorizations" as "administrable_role_authorizations",
          columns: {
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            role_name: {
              name: "role_name" as "role_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        check_constraint_routine_usage: {
          name: "check_constraint_routine_usage" as "check_constraint_routine_usage",
          columns: {
            constraint_catalog: {
              name: "constraint_catalog" as "constraint_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_schema: {
              name: "constraint_schema" as "constraint_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_name: {
              name: "constraint_name" as "constraint_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_catalog: {
              name: "specific_catalog" as "specific_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_schema: {
              name: "specific_schema" as "specific_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_name: {
              name: "specific_name" as "specific_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        character_sets: {
          name: "character_sets" as "character_sets",
          columns: {
            character_set_catalog: {
              name: "character_set_catalog" as "character_set_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_schema: {
              name: "character_set_schema" as "character_set_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_name: {
              name: "character_set_name" as "character_set_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_repertoire: {
              name: "character_repertoire" as "character_repertoire",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            form_of_use: {
              name: "form_of_use" as "form_of_use",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            default_collate_catalog: {
              name: "default_collate_catalog" as "default_collate_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            default_collate_schema: {
              name: "default_collate_schema" as "default_collate_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            default_collate_name: {
              name: "default_collate_name" as "default_collate_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        check_constraints: {
          name: "check_constraints" as "check_constraints",
          columns: {
            constraint_catalog: {
              name: "constraint_catalog" as "constraint_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_schema: {
              name: "constraint_schema" as "constraint_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_name: {
              name: "constraint_name" as "constraint_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            check_clause: {
              name: "check_clause" as "check_clause",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        collations: {
          name: "collations" as "collations",
          columns: {
            collation_catalog: {
              name: "collation_catalog" as "collation_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_schema: {
              name: "collation_schema" as "collation_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_name: {
              name: "collation_name" as "collation_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            pad_attribute: {
              name: "pad_attribute" as "pad_attribute",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        collation_character_set_applicability: {
          name: "collation_character_set_applicability" as "collation_character_set_applicability",
          columns: {
            collation_catalog: {
              name: "collation_catalog" as "collation_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_schema: {
              name: "collation_schema" as "collation_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_name: {
              name: "collation_name" as "collation_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_catalog: {
              name: "character_set_catalog" as "character_set_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_schema: {
              name: "character_set_schema" as "character_set_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_name: {
              name: "character_set_name" as "character_set_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        column_domain_usage: {
          name: "column_domain_usage" as "column_domain_usage",
          columns: {
            domain_catalog: {
              name: "domain_catalog" as "domain_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_schema: {
              name: "domain_schema" as "domain_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_name: {
              name: "domain_name" as "domain_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            column_name: {
              name: "column_name" as "column_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        column_privileges: {
          name: "column_privileges" as "column_privileges",
          columns: {
            grantor: {
              name: "grantor" as "grantor",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            column_name: {
              name: "column_name" as "column_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            privilege_type: {
              name: "privilege_type" as "privilege_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        routine_privileges: {
          name: "routine_privileges" as "routine_privileges",
          columns: {
            grantor: {
              name: "grantor" as "grantor",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_catalog: {
              name: "specific_catalog" as "specific_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_schema: {
              name: "specific_schema" as "specific_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_name: {
              name: "specific_name" as "specific_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_catalog: {
              name: "routine_catalog" as "routine_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_schema: {
              name: "routine_schema" as "routine_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_name: {
              name: "routine_name" as "routine_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            privilege_type: {
              name: "privilege_type" as "privilege_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        column_udt_usage: {
          name: "column_udt_usage" as "column_udt_usage",
          columns: {
            udt_catalog: {
              name: "udt_catalog" as "udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_schema: {
              name: "udt_schema" as "udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_name: {
              name: "udt_name" as "udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            column_name: {
              name: "column_name" as "column_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        columns: {
          name: "columns" as "columns",
          columns: {
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            column_name: {
              name: "column_name" as "column_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            ordinal_position: {
              name: "ordinal_position" as "ordinal_position",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            column_default: {
              name: "column_default" as "column_default",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_nullable: {
              name: "is_nullable" as "is_nullable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            data_type: {
              name: "data_type" as "data_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_maximum_length: {
              name: "character_maximum_length" as "character_maximum_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_octet_length: {
              name: "character_octet_length" as "character_octet_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_precision: {
              name: "numeric_precision" as "numeric_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_precision_radix: {
              name: "numeric_precision_radix" as "numeric_precision_radix",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_scale: {
              name: "numeric_scale" as "numeric_scale",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            datetime_precision: {
              name: "datetime_precision" as "datetime_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            interval_type: {
              name: "interval_type" as "interval_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            interval_precision: {
              name: "interval_precision" as "interval_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_set_catalog: {
              name: "character_set_catalog" as "character_set_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_schema: {
              name: "character_set_schema" as "character_set_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_name: {
              name: "character_set_name" as "character_set_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_catalog: {
              name: "collation_catalog" as "collation_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_schema: {
              name: "collation_schema" as "collation_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_name: {
              name: "collation_name" as "collation_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_catalog: {
              name: "domain_catalog" as "domain_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_schema: {
              name: "domain_schema" as "domain_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_name: {
              name: "domain_name" as "domain_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_catalog: {
              name: "udt_catalog" as "udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_schema: {
              name: "udt_schema" as "udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_name: {
              name: "udt_name" as "udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_catalog: {
              name: "scope_catalog" as "scope_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_schema: {
              name: "scope_schema" as "scope_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_name: {
              name: "scope_name" as "scope_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            maximum_cardinality: {
              name: "maximum_cardinality" as "maximum_cardinality",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            dtd_identifier: {
              name: "dtd_identifier" as "dtd_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_self_referencing: {
              name: "is_self_referencing" as "is_self_referencing",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_identity: {
              name: "is_identity" as "is_identity",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            identity_generation: {
              name: "identity_generation" as "identity_generation",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            identity_start: {
              name: "identity_start" as "identity_start",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            identity_increment: {
              name: "identity_increment" as "identity_increment",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            identity_maximum: {
              name: "identity_maximum" as "identity_maximum",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            identity_minimum: {
              name: "identity_minimum" as "identity_minimum",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            identity_cycle: {
              name: "identity_cycle" as "identity_cycle",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_generated: {
              name: "is_generated" as "is_generated",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            generation_expression: {
              name: "generation_expression" as "generation_expression",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_updatable: {
              name: "is_updatable" as "is_updatable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        constraint_column_usage: {
          name: "constraint_column_usage" as "constraint_column_usage",
          columns: {
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            column_name: {
              name: "column_name" as "column_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_catalog: {
              name: "constraint_catalog" as "constraint_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_schema: {
              name: "constraint_schema" as "constraint_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_name: {
              name: "constraint_name" as "constraint_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        role_routine_grants: {
          name: "role_routine_grants" as "role_routine_grants",
          columns: {
            grantor: {
              name: "grantor" as "grantor",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_catalog: {
              name: "specific_catalog" as "specific_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_schema: {
              name: "specific_schema" as "specific_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_name: {
              name: "specific_name" as "specific_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_catalog: {
              name: "routine_catalog" as "routine_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_schema: {
              name: "routine_schema" as "routine_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_name: {
              name: "routine_name" as "routine_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            privilege_type: {
              name: "privilege_type" as "privilege_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        constraint_table_usage: {
          name: "constraint_table_usage" as "constraint_table_usage",
          columns: {
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_catalog: {
              name: "constraint_catalog" as "constraint_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_schema: {
              name: "constraint_schema" as "constraint_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_name: {
              name: "constraint_name" as "constraint_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        domain_constraints: {
          name: "domain_constraints" as "domain_constraints",
          columns: {
            constraint_catalog: {
              name: "constraint_catalog" as "constraint_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_schema: {
              name: "constraint_schema" as "constraint_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_name: {
              name: "constraint_name" as "constraint_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_catalog: {
              name: "domain_catalog" as "domain_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_schema: {
              name: "domain_schema" as "domain_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_name: {
              name: "domain_name" as "domain_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_deferrable: {
              name: "is_deferrable" as "is_deferrable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            initially_deferred: {
              name: "initially_deferred" as "initially_deferred",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        domain_udt_usage: {
          name: "domain_udt_usage" as "domain_udt_usage",
          columns: {
            udt_catalog: {
              name: "udt_catalog" as "udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_schema: {
              name: "udt_schema" as "udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_name: {
              name: "udt_name" as "udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_catalog: {
              name: "domain_catalog" as "domain_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_schema: {
              name: "domain_schema" as "domain_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_name: {
              name: "domain_name" as "domain_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        routines: {
          name: "routines" as "routines",
          columns: {
            specific_catalog: {
              name: "specific_catalog" as "specific_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_schema: {
              name: "specific_schema" as "specific_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_name: {
              name: "specific_name" as "specific_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_catalog: {
              name: "routine_catalog" as "routine_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_schema: {
              name: "routine_schema" as "routine_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_name: {
              name: "routine_name" as "routine_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_type: {
              name: "routine_type" as "routine_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            module_catalog: {
              name: "module_catalog" as "module_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            module_schema: {
              name: "module_schema" as "module_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            module_name: {
              name: "module_name" as "module_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_catalog: {
              name: "udt_catalog" as "udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_schema: {
              name: "udt_schema" as "udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_name: {
              name: "udt_name" as "udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            data_type: {
              name: "data_type" as "data_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_maximum_length: {
              name: "character_maximum_length" as "character_maximum_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_octet_length: {
              name: "character_octet_length" as "character_octet_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_set_catalog: {
              name: "character_set_catalog" as "character_set_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_schema: {
              name: "character_set_schema" as "character_set_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_name: {
              name: "character_set_name" as "character_set_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_catalog: {
              name: "collation_catalog" as "collation_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_schema: {
              name: "collation_schema" as "collation_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_name: {
              name: "collation_name" as "collation_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            numeric_precision: {
              name: "numeric_precision" as "numeric_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_precision_radix: {
              name: "numeric_precision_radix" as "numeric_precision_radix",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_scale: {
              name: "numeric_scale" as "numeric_scale",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            datetime_precision: {
              name: "datetime_precision" as "datetime_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            interval_type: {
              name: "interval_type" as "interval_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            interval_precision: {
              name: "interval_precision" as "interval_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            type_udt_catalog: {
              name: "type_udt_catalog" as "type_udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            type_udt_schema: {
              name: "type_udt_schema" as "type_udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            type_udt_name: {
              name: "type_udt_name" as "type_udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_catalog: {
              name: "scope_catalog" as "scope_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_schema: {
              name: "scope_schema" as "scope_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_name: {
              name: "scope_name" as "scope_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            maximum_cardinality: {
              name: "maximum_cardinality" as "maximum_cardinality",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            dtd_identifier: {
              name: "dtd_identifier" as "dtd_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_body: {
              name: "routine_body" as "routine_body",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            routine_definition: {
              name: "routine_definition" as "routine_definition",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            external_name: {
              name: "external_name" as "external_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            external_language: {
              name: "external_language" as "external_language",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            parameter_style: {
              name: "parameter_style" as "parameter_style",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_deterministic: {
              name: "is_deterministic" as "is_deterministic",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sql_data_access: {
              name: "sql_data_access" as "sql_data_access",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_null_call: {
              name: "is_null_call" as "is_null_call",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sql_path: {
              name: "sql_path" as "sql_path",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            schema_level_routine: {
              name: "schema_level_routine" as "schema_level_routine",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            max_dynamic_result_sets: {
              name: "max_dynamic_result_sets" as "max_dynamic_result_sets",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            is_user_defined_cast: {
              name: "is_user_defined_cast" as "is_user_defined_cast",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_implicitly_invocable: {
              name: "is_implicitly_invocable" as "is_implicitly_invocable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            security_type: {
              name: "security_type" as "security_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            to_sql_specific_catalog: {
              name: "to_sql_specific_catalog" as "to_sql_specific_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            to_sql_specific_schema: {
              name: "to_sql_specific_schema" as "to_sql_specific_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            to_sql_specific_name: {
              name: "to_sql_specific_name" as "to_sql_specific_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            as_locator: {
              name: "as_locator" as "as_locator",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            created: {
              name: "created" as "created",
              type: "timestamp with time zone" as "timestamp with time zone",
              nullable: "T" as "T",
            },
            last_altered: {
              name: "last_altered" as "last_altered",
              type: "timestamp with time zone" as "timestamp with time zone",
              nullable: "T" as "T",
            },
            new_savepoint_level: {
              name: "new_savepoint_level" as "new_savepoint_level",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_udt_dependent: {
              name: "is_udt_dependent" as "is_udt_dependent",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_from_data_type: {
              name: "result_cast_from_data_type" as "result_cast_from_data_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_as_locator: {
              name: "result_cast_as_locator" as "result_cast_as_locator",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_char_max_length: {
              name: "result_cast_char_max_length" as "result_cast_char_max_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            result_cast_char_octet_length: {
              name: "result_cast_char_octet_length" as "result_cast_char_octet_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            result_cast_char_set_catalog: {
              name: "result_cast_char_set_catalog" as "result_cast_char_set_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_char_set_schema: {
              name: "result_cast_char_set_schema" as "result_cast_char_set_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_char_set_name: {
              name: "result_cast_char_set_name" as "result_cast_char_set_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_collation_catalog: {
              name: "result_cast_collation_catalog" as "result_cast_collation_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_collation_schema: {
              name: "result_cast_collation_schema" as "result_cast_collation_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_collation_name: {
              name: "result_cast_collation_name" as "result_cast_collation_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_numeric_precision: {
              name: "result_cast_numeric_precision" as "result_cast_numeric_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            result_cast_numeric_precision_radix: {
              name: "result_cast_numeric_precision_radix" as "result_cast_numeric_precision_radix",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            result_cast_numeric_scale: {
              name: "result_cast_numeric_scale" as "result_cast_numeric_scale",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            result_cast_datetime_precision: {
              name: "result_cast_datetime_precision" as "result_cast_datetime_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            result_cast_interval_type: {
              name: "result_cast_interval_type" as "result_cast_interval_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_interval_precision: {
              name: "result_cast_interval_precision" as "result_cast_interval_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            result_cast_type_udt_catalog: {
              name: "result_cast_type_udt_catalog" as "result_cast_type_udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_type_udt_schema: {
              name: "result_cast_type_udt_schema" as "result_cast_type_udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_type_udt_name: {
              name: "result_cast_type_udt_name" as "result_cast_type_udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_scope_catalog: {
              name: "result_cast_scope_catalog" as "result_cast_scope_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_scope_schema: {
              name: "result_cast_scope_schema" as "result_cast_scope_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_scope_name: {
              name: "result_cast_scope_name" as "result_cast_scope_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            result_cast_maximum_cardinality: {
              name: "result_cast_maximum_cardinality" as "result_cast_maximum_cardinality",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            result_cast_dtd_identifier: {
              name: "result_cast_dtd_identifier" as "result_cast_dtd_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        domains: {
          name: "domains" as "domains",
          columns: {
            domain_catalog: {
              name: "domain_catalog" as "domain_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_schema: {
              name: "domain_schema" as "domain_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            domain_name: {
              name: "domain_name" as "domain_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            data_type: {
              name: "data_type" as "data_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_maximum_length: {
              name: "character_maximum_length" as "character_maximum_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_octet_length: {
              name: "character_octet_length" as "character_octet_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_set_catalog: {
              name: "character_set_catalog" as "character_set_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_schema: {
              name: "character_set_schema" as "character_set_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_name: {
              name: "character_set_name" as "character_set_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_catalog: {
              name: "collation_catalog" as "collation_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_schema: {
              name: "collation_schema" as "collation_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_name: {
              name: "collation_name" as "collation_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            numeric_precision: {
              name: "numeric_precision" as "numeric_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_precision_radix: {
              name: "numeric_precision_radix" as "numeric_precision_radix",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_scale: {
              name: "numeric_scale" as "numeric_scale",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            datetime_precision: {
              name: "datetime_precision" as "datetime_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            interval_type: {
              name: "interval_type" as "interval_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            interval_precision: {
              name: "interval_precision" as "interval_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            domain_default: {
              name: "domain_default" as "domain_default",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_catalog: {
              name: "udt_catalog" as "udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_schema: {
              name: "udt_schema" as "udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_name: {
              name: "udt_name" as "udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_catalog: {
              name: "scope_catalog" as "scope_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_schema: {
              name: "scope_schema" as "scope_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_name: {
              name: "scope_name" as "scope_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            maximum_cardinality: {
              name: "maximum_cardinality" as "maximum_cardinality",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            dtd_identifier: {
              name: "dtd_identifier" as "dtd_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        enabled_roles: {
          name: "enabled_roles" as "enabled_roles",
          columns: {
            role_name: {
              name: "role_name" as "role_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        key_column_usage: {
          name: "key_column_usage" as "key_column_usage",
          columns: {
            constraint_catalog: {
              name: "constraint_catalog" as "constraint_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_schema: {
              name: "constraint_schema" as "constraint_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_name: {
              name: "constraint_name" as "constraint_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            column_name: {
              name: "column_name" as "column_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            ordinal_position: {
              name: "ordinal_position" as "ordinal_position",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            position_in_unique_constraint: {
              name: "position_in_unique_constraint" as "position_in_unique_constraint",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
          },
        },
        schemata: {
          name: "schemata" as "schemata",
          columns: {
            catalog_name: {
              name: "catalog_name" as "catalog_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            schema_name: {
              name: "schema_name" as "schema_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            schema_owner: {
              name: "schema_owner" as "schema_owner",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            default_character_set_catalog: {
              name: "default_character_set_catalog" as "default_character_set_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            default_character_set_schema: {
              name: "default_character_set_schema" as "default_character_set_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            default_character_set_name: {
              name: "default_character_set_name" as "default_character_set_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sql_path: {
              name: "sql_path" as "sql_path",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        parameters: {
          name: "parameters" as "parameters",
          columns: {
            specific_catalog: {
              name: "specific_catalog" as "specific_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_schema: {
              name: "specific_schema" as "specific_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_name: {
              name: "specific_name" as "specific_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            ordinal_position: {
              name: "ordinal_position" as "ordinal_position",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            parameter_mode: {
              name: "parameter_mode" as "parameter_mode",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_result: {
              name: "is_result" as "is_result",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            as_locator: {
              name: "as_locator" as "as_locator",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            parameter_name: {
              name: "parameter_name" as "parameter_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            data_type: {
              name: "data_type" as "data_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_maximum_length: {
              name: "character_maximum_length" as "character_maximum_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_octet_length: {
              name: "character_octet_length" as "character_octet_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_set_catalog: {
              name: "character_set_catalog" as "character_set_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_schema: {
              name: "character_set_schema" as "character_set_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_name: {
              name: "character_set_name" as "character_set_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_catalog: {
              name: "collation_catalog" as "collation_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_schema: {
              name: "collation_schema" as "collation_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_name: {
              name: "collation_name" as "collation_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            numeric_precision: {
              name: "numeric_precision" as "numeric_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_precision_radix: {
              name: "numeric_precision_radix" as "numeric_precision_radix",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_scale: {
              name: "numeric_scale" as "numeric_scale",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            datetime_precision: {
              name: "datetime_precision" as "datetime_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            interval_type: {
              name: "interval_type" as "interval_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            interval_precision: {
              name: "interval_precision" as "interval_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            udt_catalog: {
              name: "udt_catalog" as "udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_schema: {
              name: "udt_schema" as "udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_name: {
              name: "udt_name" as "udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_catalog: {
              name: "scope_catalog" as "scope_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_schema: {
              name: "scope_schema" as "scope_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_name: {
              name: "scope_name" as "scope_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            maximum_cardinality: {
              name: "maximum_cardinality" as "maximum_cardinality",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            dtd_identifier: {
              name: "dtd_identifier" as "dtd_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            parameter_default: {
              name: "parameter_default" as "parameter_default",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        referential_constraints: {
          name: "referential_constraints" as "referential_constraints",
          columns: {
            constraint_catalog: {
              name: "constraint_catalog" as "constraint_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_schema: {
              name: "constraint_schema" as "constraint_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_name: {
              name: "constraint_name" as "constraint_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            unique_constraint_catalog: {
              name: "unique_constraint_catalog" as "unique_constraint_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            unique_constraint_schema: {
              name: "unique_constraint_schema" as "unique_constraint_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            unique_constraint_name: {
              name: "unique_constraint_name" as "unique_constraint_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            match_option: {
              name: "match_option" as "match_option",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            update_rule: {
              name: "update_rule" as "update_rule",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            delete_rule: {
              name: "delete_rule" as "delete_rule",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        role_column_grants: {
          name: "role_column_grants" as "role_column_grants",
          columns: {
            grantor: {
              name: "grantor" as "grantor",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            column_name: {
              name: "column_name" as "column_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            privilege_type: {
              name: "privilege_type" as "privilege_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        sequences: {
          name: "sequences" as "sequences",
          columns: {
            sequence_catalog: {
              name: "sequence_catalog" as "sequence_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sequence_schema: {
              name: "sequence_schema" as "sequence_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            sequence_name: {
              name: "sequence_name" as "sequence_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            data_type: {
              name: "data_type" as "data_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            numeric_precision: {
              name: "numeric_precision" as "numeric_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_precision_radix: {
              name: "numeric_precision_radix" as "numeric_precision_radix",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_scale: {
              name: "numeric_scale" as "numeric_scale",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            start_value: {
              name: "start_value" as "start_value",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            minimum_value: {
              name: "minimum_value" as "minimum_value",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            maximum_value: {
              name: "maximum_value" as "maximum_value",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            increment: {
              name: "increment" as "increment",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            cycle_option: {
              name: "cycle_option" as "cycle_option",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        view_routine_usage: {
          name: "view_routine_usage" as "view_routine_usage",
          columns: {
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_catalog: {
              name: "specific_catalog" as "specific_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_schema: {
              name: "specific_schema" as "specific_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_name: {
              name: "specific_name" as "specific_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        table_constraints: {
          name: "table_constraints" as "table_constraints",
          columns: {
            constraint_catalog: {
              name: "constraint_catalog" as "constraint_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_schema: {
              name: "constraint_schema" as "constraint_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_name: {
              name: "constraint_name" as "constraint_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            constraint_type: {
              name: "constraint_type" as "constraint_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_deferrable: {
              name: "is_deferrable" as "is_deferrable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            initially_deferred: {
              name: "initially_deferred" as "initially_deferred",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        table_privileges: {
          name: "table_privileges" as "table_privileges",
          columns: {
            grantor: {
              name: "grantor" as "grantor",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            privilege_type: {
              name: "privilege_type" as "privilege_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            with_hierarchy: {
              name: "with_hierarchy" as "with_hierarchy",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        foreign_table_options: {
          name: "foreign_table_options" as "foreign_table_options",
          columns: {
            foreign_table_catalog: {
              name: "foreign_table_catalog" as "foreign_table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_table_schema: {
              name: "foreign_table_schema" as "foreign_table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_table_name: {
              name: "foreign_table_name" as "foreign_table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            option_name: {
              name: "option_name" as "option_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            option_value: {
              name: "option_value" as "option_value",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        role_table_grants: {
          name: "role_table_grants" as "role_table_grants",
          columns: {
            grantor: {
              name: "grantor" as "grantor",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            privilege_type: {
              name: "privilege_type" as "privilege_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            with_hierarchy: {
              name: "with_hierarchy" as "with_hierarchy",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        view_table_usage: {
          name: "view_table_usage" as "view_table_usage",
          columns: {
            view_catalog: {
              name: "view_catalog" as "view_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            view_schema: {
              name: "view_schema" as "view_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            view_name: {
              name: "view_name" as "view_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        tables: {
          name: "tables" as "tables",
          columns: {
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_type: {
              name: "table_type" as "table_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            self_referencing_column_name: {
              name: "self_referencing_column_name" as "self_referencing_column_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            reference_generation: {
              name: "reference_generation" as "reference_generation",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            user_defined_type_catalog: {
              name: "user_defined_type_catalog" as "user_defined_type_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            user_defined_type_schema: {
              name: "user_defined_type_schema" as "user_defined_type_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            user_defined_type_name: {
              name: "user_defined_type_name" as "user_defined_type_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_insertable_into: {
              name: "is_insertable_into" as "is_insertable_into",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_typed: {
              name: "is_typed" as "is_typed",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            commit_action: {
              name: "commit_action" as "commit_action",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        transforms: {
          name: "transforms" as "transforms",
          columns: {
            udt_catalog: {
              name: "udt_catalog" as "udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_schema: {
              name: "udt_schema" as "udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_name: {
              name: "udt_name" as "udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_catalog: {
              name: "specific_catalog" as "specific_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_schema: {
              name: "specific_schema" as "specific_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            specific_name: {
              name: "specific_name" as "specific_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            group_name: {
              name: "group_name" as "group_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            transform_type: {
              name: "transform_type" as "transform_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        triggered_update_columns: {
          name: "triggered_update_columns" as "triggered_update_columns",
          columns: {
            trigger_catalog: {
              name: "trigger_catalog" as "trigger_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            trigger_schema: {
              name: "trigger_schema" as "trigger_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            trigger_name: {
              name: "trigger_name" as "trigger_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            event_object_catalog: {
              name: "event_object_catalog" as "event_object_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            event_object_schema: {
              name: "event_object_schema" as "event_object_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            event_object_table: {
              name: "event_object_table" as "event_object_table",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            event_object_column: {
              name: "event_object_column" as "event_object_column",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        foreign_data_wrappers: {
          name: "foreign_data_wrappers" as "foreign_data_wrappers",
          columns: {
            foreign_data_wrapper_catalog: {
              name: "foreign_data_wrapper_catalog" as "foreign_data_wrapper_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_data_wrapper_name: {
              name: "foreign_data_wrapper_name" as "foreign_data_wrapper_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            authorization_identifier: {
              name: "authorization_identifier" as "authorization_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            library_name: {
              name: "library_name" as "library_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_data_wrapper_language: {
              name: "foreign_data_wrapper_language" as "foreign_data_wrapper_language",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        triggers: {
          name: "triggers" as "triggers",
          columns: {
            trigger_catalog: {
              name: "trigger_catalog" as "trigger_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            trigger_schema: {
              name: "trigger_schema" as "trigger_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            trigger_name: {
              name: "trigger_name" as "trigger_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            event_manipulation: {
              name: "event_manipulation" as "event_manipulation",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            event_object_catalog: {
              name: "event_object_catalog" as "event_object_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            event_object_schema: {
              name: "event_object_schema" as "event_object_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            event_object_table: {
              name: "event_object_table" as "event_object_table",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            action_order: {
              name: "action_order" as "action_order",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            action_condition: {
              name: "action_condition" as "action_condition",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            action_statement: {
              name: "action_statement" as "action_statement",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            action_orientation: {
              name: "action_orientation" as "action_orientation",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            action_timing: {
              name: "action_timing" as "action_timing",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            action_reference_old_table: {
              name: "action_reference_old_table" as "action_reference_old_table",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            action_reference_new_table: {
              name: "action_reference_new_table" as "action_reference_new_table",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            action_reference_old_row: {
              name: "action_reference_old_row" as "action_reference_old_row",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            action_reference_new_row: {
              name: "action_reference_new_row" as "action_reference_new_row",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            created: {
              name: "created" as "created",
              type: "timestamp with time zone" as "timestamp with time zone",
              nullable: "T" as "T",
            },
          },
        },
        views: {
          name: "views" as "views",
          columns: {
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            view_definition: {
              name: "view_definition" as "view_definition",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            check_option: {
              name: "check_option" as "check_option",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_updatable: {
              name: "is_updatable" as "is_updatable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_insertable_into: {
              name: "is_insertable_into" as "is_insertable_into",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_trigger_updatable: {
              name: "is_trigger_updatable" as "is_trigger_updatable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_trigger_deletable: {
              name: "is_trigger_deletable" as "is_trigger_deletable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_trigger_insertable_into: {
              name: "is_trigger_insertable_into" as "is_trigger_insertable_into",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        udt_privileges: {
          name: "udt_privileges" as "udt_privileges",
          columns: {
            grantor: {
              name: "grantor" as "grantor",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_catalog: {
              name: "udt_catalog" as "udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_schema: {
              name: "udt_schema" as "udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_name: {
              name: "udt_name" as "udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            privilege_type: {
              name: "privilege_type" as "privilege_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        role_udt_grants: {
          name: "role_udt_grants" as "role_udt_grants",
          columns: {
            grantor: {
              name: "grantor" as "grantor",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_catalog: {
              name: "udt_catalog" as "udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_schema: {
              name: "udt_schema" as "udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_name: {
              name: "udt_name" as "udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            privilege_type: {
              name: "privilege_type" as "privilege_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        usage_privileges: {
          name: "usage_privileges" as "usage_privileges",
          columns: {
            grantor: {
              name: "grantor" as "grantor",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_catalog: {
              name: "object_catalog" as "object_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_schema: {
              name: "object_schema" as "object_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_name: {
              name: "object_name" as "object_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_type: {
              name: "object_type" as "object_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            privilege_type: {
              name: "privilege_type" as "privilege_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        data_type_privileges: {
          name: "data_type_privileges" as "data_type_privileges",
          columns: {
            object_catalog: {
              name: "object_catalog" as "object_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_schema: {
              name: "object_schema" as "object_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_name: {
              name: "object_name" as "object_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_type: {
              name: "object_type" as "object_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            dtd_identifier: {
              name: "dtd_identifier" as "dtd_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        role_usage_grants: {
          name: "role_usage_grants" as "role_usage_grants",
          columns: {
            grantor: {
              name: "grantor" as "grantor",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            grantee: {
              name: "grantee" as "grantee",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_catalog: {
              name: "object_catalog" as "object_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_schema: {
              name: "object_schema" as "object_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_name: {
              name: "object_name" as "object_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_type: {
              name: "object_type" as "object_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            privilege_type: {
              name: "privilege_type" as "privilege_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_grantable: {
              name: "is_grantable" as "is_grantable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        user_defined_types: {
          name: "user_defined_types" as "user_defined_types",
          columns: {
            user_defined_type_catalog: {
              name: "user_defined_type_catalog" as "user_defined_type_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            user_defined_type_schema: {
              name: "user_defined_type_schema" as "user_defined_type_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            user_defined_type_name: {
              name: "user_defined_type_name" as "user_defined_type_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            user_defined_type_category: {
              name: "user_defined_type_category" as "user_defined_type_category",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_instantiable: {
              name: "is_instantiable" as "is_instantiable",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            is_final: {
              name: "is_final" as "is_final",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            ordering_form: {
              name: "ordering_form" as "ordering_form",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            ordering_category: {
              name: "ordering_category" as "ordering_category",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            ordering_routine_catalog: {
              name: "ordering_routine_catalog" as "ordering_routine_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            ordering_routine_schema: {
              name: "ordering_routine_schema" as "ordering_routine_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            ordering_routine_name: {
              name: "ordering_routine_name" as "ordering_routine_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            reference_type: {
              name: "reference_type" as "reference_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            data_type: {
              name: "data_type" as "data_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_maximum_length: {
              name: "character_maximum_length" as "character_maximum_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_octet_length: {
              name: "character_octet_length" as "character_octet_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_set_catalog: {
              name: "character_set_catalog" as "character_set_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_schema: {
              name: "character_set_schema" as "character_set_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_name: {
              name: "character_set_name" as "character_set_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_catalog: {
              name: "collation_catalog" as "collation_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_schema: {
              name: "collation_schema" as "collation_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_name: {
              name: "collation_name" as "collation_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            numeric_precision: {
              name: "numeric_precision" as "numeric_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_precision_radix: {
              name: "numeric_precision_radix" as "numeric_precision_radix",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_scale: {
              name: "numeric_scale" as "numeric_scale",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            datetime_precision: {
              name: "datetime_precision" as "datetime_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            interval_type: {
              name: "interval_type" as "interval_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            interval_precision: {
              name: "interval_precision" as "interval_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            source_dtd_identifier: {
              name: "source_dtd_identifier" as "source_dtd_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            ref_dtd_identifier: {
              name: "ref_dtd_identifier" as "ref_dtd_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        _pg_foreign_servers: {
          name: "_pg_foreign_servers" as "_pg_foreign_servers",
          columns: {
            oid: {
              name: "oid" as "oid",
              type: "oid" as "oid",
              nullable: "T" as "T",
            },
            srvoptions: {
              name: "srvoptions" as "srvoptions",
              type: "ARRAY" as "ARRAY",
              nullable: "T" as "T",
            },
            foreign_server_catalog: {
              name: "foreign_server_catalog" as "foreign_server_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_name: {
              name: "foreign_server_name" as "foreign_server_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_data_wrapper_catalog: {
              name: "foreign_data_wrapper_catalog" as "foreign_data_wrapper_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_data_wrapper_name: {
              name: "foreign_data_wrapper_name" as "foreign_data_wrapper_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_type: {
              name: "foreign_server_type" as "foreign_server_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_version: {
              name: "foreign_server_version" as "foreign_server_version",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            authorization_identifier: {
              name: "authorization_identifier" as "authorization_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        view_column_usage: {
          name: "view_column_usage" as "view_column_usage",
          columns: {
            view_catalog: {
              name: "view_catalog" as "view_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            view_schema: {
              name: "view_schema" as "view_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            view_name: {
              name: "view_name" as "view_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            column_name: {
              name: "column_name" as "column_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        element_types: {
          name: "element_types" as "element_types",
          columns: {
            object_catalog: {
              name: "object_catalog" as "object_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_schema: {
              name: "object_schema" as "object_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_name: {
              name: "object_name" as "object_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            object_type: {
              name: "object_type" as "object_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collection_type_identifier: {
              name: "collection_type_identifier" as "collection_type_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            data_type: {
              name: "data_type" as "data_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_maximum_length: {
              name: "character_maximum_length" as "character_maximum_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_octet_length: {
              name: "character_octet_length" as "character_octet_length",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            character_set_catalog: {
              name: "character_set_catalog" as "character_set_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_schema: {
              name: "character_set_schema" as "character_set_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            character_set_name: {
              name: "character_set_name" as "character_set_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_catalog: {
              name: "collation_catalog" as "collation_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_schema: {
              name: "collation_schema" as "collation_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            collation_name: {
              name: "collation_name" as "collation_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            numeric_precision: {
              name: "numeric_precision" as "numeric_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_precision_radix: {
              name: "numeric_precision_radix" as "numeric_precision_radix",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            numeric_scale: {
              name: "numeric_scale" as "numeric_scale",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            datetime_precision: {
              name: "datetime_precision" as "datetime_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            interval_type: {
              name: "interval_type" as "interval_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            interval_precision: {
              name: "interval_precision" as "interval_precision",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            domain_default: {
              name: "domain_default" as "domain_default",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_catalog: {
              name: "udt_catalog" as "udt_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_schema: {
              name: "udt_schema" as "udt_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            udt_name: {
              name: "udt_name" as "udt_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_catalog: {
              name: "scope_catalog" as "scope_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_schema: {
              name: "scope_schema" as "scope_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            scope_name: {
              name: "scope_name" as "scope_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            maximum_cardinality: {
              name: "maximum_cardinality" as "maximum_cardinality",
              type: "integer" as "integer",
              nullable: "T" as "T",
            },
            dtd_identifier: {
              name: "dtd_identifier" as "dtd_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        _pg_foreign_table_columns: {
          name: "_pg_foreign_table_columns" as "_pg_foreign_table_columns",
          columns: {
            nspname: {
              name: "nspname" as "nspname",
              type: "name" as "name",
              nullable: "T" as "T",
            },
            relname: {
              name: "relname" as "relname",
              type: "name" as "name",
              nullable: "T" as "T",
            },
            attname: {
              name: "attname" as "attname",
              type: "name" as "name",
              nullable: "T" as "T",
            },
            attfdwoptions: {
              name: "attfdwoptions" as "attfdwoptions",
              type: "ARRAY" as "ARRAY",
              nullable: "T" as "T",
            },
          },
        },
        column_options: {
          name: "column_options" as "column_options",
          columns: {
            table_catalog: {
              name: "table_catalog" as "table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_schema: {
              name: "table_schema" as "table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            table_name: {
              name: "table_name" as "table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            column_name: {
              name: "column_name" as "column_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            option_name: {
              name: "option_name" as "option_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            option_value: {
              name: "option_value" as "option_value",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        _pg_foreign_data_wrappers: {
          name: "_pg_foreign_data_wrappers" as "_pg_foreign_data_wrappers",
          columns: {
            oid: {
              name: "oid" as "oid",
              type: "oid" as "oid",
              nullable: "T" as "T",
            },
            fdwowner: {
              name: "fdwowner" as "fdwowner",
              type: "oid" as "oid",
              nullable: "T" as "T",
            },
            fdwoptions: {
              name: "fdwoptions" as "fdwoptions",
              type: "ARRAY" as "ARRAY",
              nullable: "T" as "T",
            },
            foreign_data_wrapper_catalog: {
              name: "foreign_data_wrapper_catalog" as "foreign_data_wrapper_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_data_wrapper_name: {
              name: "foreign_data_wrapper_name" as "foreign_data_wrapper_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            authorization_identifier: {
              name: "authorization_identifier" as "authorization_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_data_wrapper_language: {
              name: "foreign_data_wrapper_language" as "foreign_data_wrapper_language",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        foreign_server_options: {
          name: "foreign_server_options" as "foreign_server_options",
          columns: {
            foreign_server_catalog: {
              name: "foreign_server_catalog" as "foreign_server_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_name: {
              name: "foreign_server_name" as "foreign_server_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            option_name: {
              name: "option_name" as "option_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            option_value: {
              name: "option_value" as "option_value",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        foreign_data_wrapper_options: {
          name: "foreign_data_wrapper_options" as "foreign_data_wrapper_options",
          columns: {
            foreign_data_wrapper_catalog: {
              name: "foreign_data_wrapper_catalog" as "foreign_data_wrapper_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_data_wrapper_name: {
              name: "foreign_data_wrapper_name" as "foreign_data_wrapper_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            option_name: {
              name: "option_name" as "option_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            option_value: {
              name: "option_value" as "option_value",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        user_mapping_options: {
          name: "user_mapping_options" as "user_mapping_options",
          columns: {
            authorization_identifier: {
              name: "authorization_identifier" as "authorization_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_catalog: {
              name: "foreign_server_catalog" as "foreign_server_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_name: {
              name: "foreign_server_name" as "foreign_server_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            option_name: {
              name: "option_name" as "option_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            option_value: {
              name: "option_value" as "option_value",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        foreign_servers: {
          name: "foreign_servers" as "foreign_servers",
          columns: {
            foreign_server_catalog: {
              name: "foreign_server_catalog" as "foreign_server_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_name: {
              name: "foreign_server_name" as "foreign_server_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_data_wrapper_catalog: {
              name: "foreign_data_wrapper_catalog" as "foreign_data_wrapper_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_data_wrapper_name: {
              name: "foreign_data_wrapper_name" as "foreign_data_wrapper_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_type: {
              name: "foreign_server_type" as "foreign_server_type",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_version: {
              name: "foreign_server_version" as "foreign_server_version",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            authorization_identifier: {
              name: "authorization_identifier" as "authorization_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        _pg_foreign_tables: {
          name: "_pg_foreign_tables" as "_pg_foreign_tables",
          columns: {
            foreign_table_catalog: {
              name: "foreign_table_catalog" as "foreign_table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_table_schema: {
              name: "foreign_table_schema" as "foreign_table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_table_name: {
              name: "foreign_table_name" as "foreign_table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            ftoptions: {
              name: "ftoptions" as "ftoptions",
              type: "ARRAY" as "ARRAY",
              nullable: "T" as "T",
            },
            foreign_server_catalog: {
              name: "foreign_server_catalog" as "foreign_server_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_name: {
              name: "foreign_server_name" as "foreign_server_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            authorization_identifier: {
              name: "authorization_identifier" as "authorization_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        foreign_tables: {
          name: "foreign_tables" as "foreign_tables",
          columns: {
            foreign_table_catalog: {
              name: "foreign_table_catalog" as "foreign_table_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_table_schema: {
              name: "foreign_table_schema" as "foreign_table_schema",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_table_name: {
              name: "foreign_table_name" as "foreign_table_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_catalog: {
              name: "foreign_server_catalog" as "foreign_server_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_name: {
              name: "foreign_server_name" as "foreign_server_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        _pg_user_mappings: {
          name: "_pg_user_mappings" as "_pg_user_mappings",
          columns: {
            oid: {
              name: "oid" as "oid",
              type: "oid" as "oid",
              nullable: "T" as "T",
            },
            umoptions: {
              name: "umoptions" as "umoptions",
              type: "ARRAY" as "ARRAY",
              nullable: "T" as "T",
            },
            umuser: {
              name: "umuser" as "umuser",
              type: "oid" as "oid",
              nullable: "T" as "T",
            },
            authorization_identifier: {
              name: "authorization_identifier" as "authorization_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_catalog: {
              name: "foreign_server_catalog" as "foreign_server_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_name: {
              name: "foreign_server_name" as "foreign_server_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            srvowner: {
              name: "srvowner" as "srvowner",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
        user_mappings: {
          name: "user_mappings" as "user_mappings",
          columns: {
            authorization_identifier: {
              name: "authorization_identifier" as "authorization_identifier",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_catalog: {
              name: "foreign_server_catalog" as "foreign_server_catalog",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
            foreign_server_name: {
              name: "foreign_server_name" as "foreign_server_name",
              type: "character varying" as "character varying",
              nullable: "T" as "T",
            },
          },
        },
      },
    },
  },
};

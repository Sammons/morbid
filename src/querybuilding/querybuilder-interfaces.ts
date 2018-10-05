import { StringKeys, StrEnum, OneOrMore } from "../common-types";
import * as T from '../definition-inference';

const TargetKinds = StrEnum("SchemaIgnorantViewOrTable", "SchemaAwareViewOrTable", "Subquery")
type TargetKinds = typeof TargetKinds;

type SchemaIgnorantTableOrViewTarget = {
  type: TargetKinds['SchemaIgnorantViewOrTable'];
  name: string;
  alias: string | null;
}

type SchemaAwareTableOrViewTarget = {
  type: TargetKinds['SchemaIgnorantViewOrTable'];
  name: string;
  schema: string;
  alias: string | null;
}

type UpdateableTarget = SchemaAwareTableOrViewTarget | SchemaIgnorantTableOrViewTarget;

type SubqueryTarget = {
  type: TargetKinds['Subquery'];
  subquery: QueryTypeInterfaces['select'];
  alias: string;
}

type FromTarget = SchemaIgnorantTableOrViewTarget | SubqueryTarget

const JoinTypes = StrEnum("Inner", "Left");
type JoinTypes = typeof JoinTypes;
type JoinType = StringKeys<JoinTypes>

type JoinTarget = {
  type: JoinType;
  join: FromTarget;
  on: Condition;
};

const ConditionTypes = StrEnum("Binary", "Unary");
type ConditionTypes = typeof ConditionTypes;

const ConditionElementTypes = StrEnum("Literal", "Expression", "SubCondition", "Subquery");
type ConditionElementTypes = typeof ConditionElementTypes;

type ExpressionWrapper = {
  type: ConditionElementTypes["Expression"]
  value: {
    target: string;
    column: string;
    pgtype?: string; // to coerce
  }
}

type SubqueryWrapper = {
  type: ConditionElementTypes["Subquery"];
  value: QueryTypeInterfaces["select"];
}

// such a string 'hello'::TEXT or a number 1::INT
type LiteralWrapper = {
  type: ConditionElementTypes["Literal"]
  value: string;
  pgtype: string;
};

type ValueWrapper =
  | LiteralWrapper // 'hello'
  | ExpressionWrapper // table.column
  | SubqueryWrapper // (select 'hello')
  | Condition;

type ConditionValueWithAlias = ValueWrapper & { alias: string; };
type ColumnValues = ExpressionWrapper;

const OperatorTypes = StrEnum("Simple", "Complex")
type OperatorTypes = typeof OperatorTypes;

const Operators = StrEnum("<", ">", "=", "<>", "LIKE", "ILIKE", "IN", "AND", "OR"); // TODO: ellaborate
type SimpleOperator = StringKeys<typeof Operators>;

type Operator = {
  type: OperatorTypes["Simple"];
  operation: SimpleOperator;
}

type BinaryCondition = {
  type: ConditionTypes["Binary"];
  operator: Operator;
  left: ValueWrapper;
  right: ValueWrapper;
};

type UnaryCondition = {
  type: ConditionTypes["Unary"];
  value: ValueWrapper;
}

type Condition = BinaryCondition | UnaryCondition;

type QueryTypeInterfaces = {
  insert: {
    values: ConditionValueWithAlias // the alias is the target column name in this context
    into: UpdateableTarget;
    from: FromTarget | null;
    joins: JoinTarget[];
    where: Condition;
  };
  update: {
    update: UpdateableTarget;
    from: FromTarget | null;
    joins: JoinTarget[];
    set: ValueWrapper[];
    where: Condition;
    returning: ColumnValues[];
  };
  select: {
    from: FromTarget;
    joins: JoinTarget[];
    where: Condition;
    select: ConditionValueWithAlias[];
  };
  delete: {
    from: FromTarget;
    joins: JoinTarget[];
    where: Condition;
    returning: ColumnValues[];
  }
  ddl: {
    createTable: {};
    createView: {};
  }
}

type QueryTypes = StringKeys<QueryTypeInterfaces>

type Query<Type extends QueryTypes> = {
  type: Type,
  params: QueryTypeInterfaces[Type]
}

export type WhereValuesInput<T> = OneOrMore<{
  [Key in StringKeys<T>]: T[Key] | NonNullable<T[Key]>[]
}>
export type WhereColumnsInput<Def, ViewOrTableName> = OneOrMore<{
  [Key in StringKeys<T>]: 
}>

export type SelectStatement = Query<'select'>;
export type UpdateStatement = Query<'update'>;
export type InsertStatement = Query<'insert'>;
export type DeleteStatement = Query<'delete'>;
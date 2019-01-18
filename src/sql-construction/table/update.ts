
interface ConstructSelectFromTable {
  returning?: any[];
  set?: {
    [key: string]: any,
  };
  table: string;
  where?: {
    [key: string]: (number | string | null)[] | (number | string | null),
  };
}

export const ConstructUpdateTable = (params: ConstructSelectFromTable) => {
  let sql = `update "${params.table}"`;
  let bindings: (string | number)[] = [];
  const bind = (el: any) => {
    bindings.push(el);
    return `$${bindings.length}`;
  };
  const set = params.set;
  if (set != null && Object.keys(set).length > 0) {
    sql += ' set';
    const keys = Object.keys(set);
    const expressions = [] as string[];
    for (let key of keys) {
      expressions.push(`"${key}" = ${bind(set[key])}`);
    }
    sql += ` ${expressions.join(', ')}`;
  }
  const where = params.where;
  if (where != null && Object.keys(where).length > 0) {
    sql += ' where';
    const keys = Object.keys(where);
    let hasFirstWhere = false;
    const and = () => {
      if (hasFirstWhere) {
        sql += ' and';
      } else {
        hasFirstWhere = true;
        sql += '';
      }
    };
    for (let key of keys) {
      and();
      const value = where[key];
      if (Array.isArray(value)) {
        sql += ` "${key}" in (`;
        sql += value.map((el: any) => bind(el)).join(', ');
        sql += ')';
        continue;
      }
      if (value === null) {
        sql += ` "${key}" is null`;
        continue;
      }
      sql += ` "${key}" = ${bind(value)}`;
    }
  }
  if (params.returning && Array.isArray(params.returning) && params.returning.length > 0) {
    sql += ` returning ${params.returning.map(s => `"${s}"`).join(', ')}`;
  }
  sql += ';';
  return {
    text: sql,
    bindings,
  };
};

interface ConstructSelectFromTable {
  selections: any[];
  table: string;
  schema: string;
  where?: {
    [key: string]: (number | string | null)[] | (number | string | null),
  };
}

export const ConstructSelectFromTable = (params: ConstructSelectFromTable) => {
  let sql = 'select';
  let bindings: (string | number)[] = [];
  const bind = (el: any) => {
    bindings.push(el);
    return `$${bindings.length}`;
  };
  if (params.selections && params.selections.length > 0) {
    sql += ` ${params.selections.map(s => `"${s}"`).join(', ')}`;
  } else {
    sql += ' *';
  }
  sql += ` from "${params.schema}"."${params.table}"`;
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
  sql += ';';
  return {
    text: sql,
    bindings,
  };
};
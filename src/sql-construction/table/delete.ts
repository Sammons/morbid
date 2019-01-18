interface ConstructDeleteFromTable {
  returning?: string[];
  table: string;
  schema: string;
  where?: {
    [key: string]: (number | string | null)[] | (number | string | null),
  };
}

export const ConstructDeleteFromTable = (params: ConstructDeleteFromTable) => {
  let sql = `delete from "${params.schema}"."${params.table}"`;
  let bindings: (string | number)[] = [];
  const bind = (el: any) => {
    bindings.push(el);
    return `$${bindings.length}`;
  };
  const where = params.where;
  if (where != null) {
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
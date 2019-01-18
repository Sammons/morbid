interface ConstructInsertIntoTable {
  returning?: string[];
  table: string;
  values?: {}[];
}

/** https://github.com/brianc/node-postgres/issues/1091 */
const MaxPGBindings = 34464;

export const ConstructInsertIntoTable = (params: ConstructInsertIntoTable) => {
  let sql = `insert into "${params.table}"`;
  let bindings: (string | number)[] = [];
  const bind = (el: any) => {
    bindings.push(el);
    return `$${bindings.length}`;
  };
  const values = params.values;
  if (values && Array.isArray(values) && values.length > 0) {
    const keysSet = new Set<string>();
    for (let v of values) {
      Object.keys(v).forEach(k => keysSet.add(k));
    }
    const keys = Array.from(keysSet);
    sql += ` (${keys.map(k => `"${k}"`).join(', ')}) values `;
    if (keys.length * values.length >= MaxPGBindings) {
      // TODO: automatically break into pages and create
      // a transaction if there isn't one already
      throw new Error('Exceeded max bindings acceptable at once');
    }
    const valuePieces: string[] = [];
    values.forEach((v: { [k: string]: any }) => {
      const valueElements: string[] = [];
      keys.forEach((k: string) => {
        if (v[k] === void 0) {
          valueElements.push('DEFAULT');
        } else {
          valueElements.push(bind(v[k]));
        }
      });
      valuePieces.push(`(${valueElements.join(', ')})`);
    });
    sql += valuePieces.join(', ');
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
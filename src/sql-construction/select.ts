import { SelectContainer, BoolExpression } from '../interface/builder/builder-types';

export const CompileSelectBuilder = (container: SelectContainer) => {
  let bindings: (string | number)[] = [];
  const bind = (el: any) => {
    bindings.push(el);
    return `$${bindings.length}`;
  };
  let sql = 'select * from ';
  if (!container.from) {
    throw new Error('Need a from table!');
  } else {
    sql += `"${container.from.schema}"."${container.from.table}" as "${container.from.alias}" `;
  }
  const mapExp = (exp: BoolExpression): { text: string } => {
    if (exp.kind === 'andor') {
      return {
        text: `(${exp.list.map(el => mapExp(el).text).join(` ${exp.type} `)})`,
      };
    }
    if (exp.kind === 'comp1') {
      return {
        text: `"${exp.alias1}"."${exp.column1}" ${exp.op} "${exp.alias2}"."${exp.column2}"`,
      };
    }
    if (exp.kind === 'comp2') {
      let text = `"${exp.alias1}"."${exp.column1}"`;
      if (exp.op === 'is null') {
        text += ' is null';
      } else {
        if (exp.op === 'in' && Array.isArray(exp.value)) {
          text += ` ${exp.op} (${exp.value.map(v => bind(v)).join(', ')})`;
        } else {
          text += ` ${exp.op} ${bind(exp.value)}`;
        }
      }
      return {
        text: `${text}`,
      };
    }
    throw new Error('invalid expression kind');
  };
  if (container.joins.length > 0) {
    container.joins.forEach(j => {
      sql += `${j.kind} join "${j.schema}"."${j.table}" as "${j.alias}" `;
      sql += `on ${j.expressions.map(exp => mapExp(exp).text).join(' and ')} `;
    });
  }
  if (container.wheres) {
    const where = mapExp(container.wheres);
    if (where.text[0] === '(')
      sql += `where ${
        //TODO: clean this up later
        where.text.substr(1, where.text.length - 2)
        }`;
  }
  return {
    text: sql,
    bindings,
  };
};
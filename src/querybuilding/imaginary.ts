const db = {} as any;
const sample = () => {
db // database interface generated by extracting database schema into typescript
  .users.as('u')
  .innerJoin.users.as('u2')
  .onCol.u.name.trim
  .equals.u2.name.trim
  // shorthand support for exact matches, in clauses
  .whereColumnsOf.u2({
    id: [1, 2]
  })
  // negated shorthand support for exact matches and in clauses
  .whereColumnsOf.u2.areNot({
    name: 'ExcludedName'
  })
  // "is" = compare to literal
  .whereCol.u.name.is('Good')
  // "not" = compare to literal
  .whereCol.u.name.not('Pretty')
  // "trim": support for detected single-param functions matching column type
  .whereCol.u.name.trim.is('Still Bad')
  // "position": support for detected (N>1)-param functions with first param matching column type
  .whereCol.u.name.trim.position('up there').is(1)
  // > numeric compare to literal , also support "lt" "lte" "gte"
  .whereCol.u.id.gt(42)
  // "in" literals support
  .whereCol.u.name.inValues(['A', 'B'])
  // "in" subquery support
  // note this sub-querybuilder will be aware of the joined tables
  // note also that the inQuery should be type-safe, understanding that the
  // sub querybuilder is returning only 1 column, and if they return more than that, then
  // compilation should fail
  .whereCol.u.name.inQuery(
    query => query
      .refnames.as('r')
      .whereCol.r.id.gtCol.u.id
      .selectCol.r.name
  )
  // support for nulls, method will not exist for non-nullable columns
  .whereCol.u.deactivated.isNull()
  // dates: "lt" "lte" "gt" "gte" "is", and support for "between" 
  .whereCol.u.insert_ts.lt(new Date('03/02/1990'))
  // example date function usage
  .whereCol.u.insert_ts.date_part('day').is(19)
  // concatenation support for both literals and columns
  .whereCol.u.name.concatVal(', ').concatCol.id.trim.is('Ben 123')
  // coalesce example, note coalesce is variatic
  .whereFunc.coalesce(
    param => param.col.u.name.trim.concat('hiya'), // lambda to do complex types
    'Unknown' // or just drop in a literal
  )
  // OR support
  .or.whereCol.u.name.is('NotSoBad')
  // sub-where clause, supports everything in normal whereclause
  .where(w => w.whereCol.u.is(1).or.whereCol.u.is(2))
;

db 
  .users.as('u')
  .innerJoin.users.as('u2')
  .onCol.u.name.trim
  .equals.u2.name.trim
  .selectCol.u.name.trim
  .select(sub => sub.from.x.whereCol.u.name.equals.x)

}
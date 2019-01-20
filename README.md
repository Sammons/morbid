![build-status](https://travis-ci.org/Sammons/morbid.svg?branch=master)

This project is a work in progress. At this point in time it is not a viable solution. Feel free to pitch in, just open a PR!

Take a look at the test/samples directory for how to use Morbid.

# Morbid

A schema-aware typescript querybuilder for postgres. Other morbid flavors may come to exist, but will be in different repositories.

## Goals

To provide strong safety in code that interacts with the database, and to do so in a natural way for people who have SQL expertise.

We will:

* Strive to be simple, but not at the cost of breadth.
  + Even if something is not documented, it should work the way you would think it does
  + We won't give up on fun things like window functions in SQL just to make the api more minimal
  + We will still try to keep the api more minimal :)
* Encourage declarative, but clear programming.
* Provide the strongest types possible.
  + If it compiles, it should work as intended.
* Provide semantic versioning where possible, erring towards caution.
  + Known breakages of any size will be a major change.
  + New methods will be minor changes.
  + Everything else will be a patch change, including changes to documentation.
  + Version changes correspond to published NPM packages.

## Features:

### V0.1.0 - goals

* Extracts the schema of your postgres database into a typescript "definition" file
* Uses the "definition" to provide clean intellisense & typesafety
  - inner join 
    + support strict type comparisons
  - where clause construction
    + support strict type comparisons
  - basic subquery support
  - default isolation level transactions
* Provides basic migration support
  - add support for valid type coercion to inner joins and where clauses
### V0.2.0 - goals

* Provide way to access/use table foreign key relationships
* 

## Potential Features

Things that are large efforts and slated for.... one day. If you want to know how to approach these, please ask.

* Have a way to flag queries that are not cross-database compatible.
* Dynamic column constraint verification / coercion - e.g. provide an option to substring strings that exceed a column width.
* Query profiling? We should be able to output explain metrics and usage reports to a file.
* Query optimization? We should be able to use profiling output to internally optimize queries.
* Dashboard of queries executed, counts, data return sizes, usage location, performance? We should be able to aggregate data and provide a dashboard for developers that helps identify problem queries and in general give insights that are otherwise impossible to get.

## Quick Start

TBD

## Why not use an ORM?

Sooner or later most applications need to execute queries more complex than simple CRUD (Create Read Update Delete) operations. This causes developers to break away from the standard ORM usage to write raw queries or use a querybuilder. Most things can be handled by the ORM, but not everything. A querybuilder seeks to provide a single way to access the data layer for 100% of interactions.

## Attributions

Knex.js is a powerful cross-database tool, but they often break people in patch changes and have limited typescript support, especially since many database-specific queries have to break out into raw expressions which have zero typechecking. At this point that project does a good job for javascript projects, but Morbid strives to take querybuilding to the next level.

## Questions, Issues

Just open a github issue.

## Authors

- Sammons (creator)

## Why is this morbid?

- Its recursively funny, don't worry about it too much.

## License

MIT - will put the whole license in here sooner or later. Use as you like but the author is not liable.

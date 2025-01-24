import { readFileSync } from 'fs'
import { join as pathJoin } from 'path'

import { DateResolver } from 'graphql-scalars'
import { createYoga, createSchema } from 'graphql-yoga'

import { Resolvers } from './resolvers-types.ts'
import { DataLoader } from './data.ts'

const typeDefs = readFileSync(pathJoin(__dirname, 'schema.gql'), 'utf8')

const resolvers: Resolvers = {
  Date: DateResolver,
  // Land: {
  //   abbr: (m) => m.abbr,
  //   bday: (m) => m.bday,
  //   name: (m) => m.name,
  // },
  // Law: {
  //   bday: (m) => m.bday,
  //   detail: (m) => m.detail,
  //   land: (m) => m.land,
  // },
  // Level: {
  //   bday: (m) => m.bday,
  //   dday: (m) => m.bday,
  //   details: (m) => m.details,
  // },
  // LevelDetail: {
  //   index: (m) => m.index,
  //   name: (m) => m.name,
  //   notes: (m) => m.notes || null,
  // },
  // Rule: {
  //   bday: (m) => m.bday,
  //   lands: (m) => m.lands,
  //   level: (m) => m.level || null,
  // },
  Query: {
    laws: (_m, a, c) => c.data.laws(a.topic),
  },
}

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  context: { data: new DataLoader() },
})

const server = Bun.serve({
  fetch: yoga.fetch,
})

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`,
  )}`,
)

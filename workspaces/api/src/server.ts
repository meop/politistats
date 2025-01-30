import 'reflect-metadata'

import { createYoga } from 'graphql-yoga'
import { useGraphQLModules } from '@envelop/graphql-modules'

import { application } from './application'

const yoga = createYoga({
  plugins: [useGraphQLModules(application)],
})

const server = Bun.serve({
  fetch: yoga.fetch,
  port: process.env.PORT || 3000,
})

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`,
  )}`,
)

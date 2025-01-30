import { join as pathJoin } from 'node:path'

import { createModule } from 'graphql-modules'
import { loadFilesSync } from '@graphql-tools/load-files'

import { LawDataProvider } from '../../providers/law/provider'

const loadFiles = (p: string) => loadFilesSync(pathJoin(__dirname, p))

export default createModule({
  id: 'law-module',
  dirname: __dirname,
  typeDefs: loadFiles('*.{gql,graphql}'),
  providers: [LawDataProvider],
  resolvers: loadFiles('*resolver.ts'),
})

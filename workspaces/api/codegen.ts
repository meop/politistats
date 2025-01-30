import type { CodegenConfig } from '@graphql-codegen/cli'

// const config: CodegenConfig = {
//   schema: './src/schema.gql',
//   generates: {
//     './src/resolvers-types.ts': {
//       plugins: ['typescript', 'typescript-resolvers'],
//       config: {
//         contextType: './contexts.ts#DataContext',
//         mappers: {
//           Land: './models.ts#LandModel',
//           Law: './models.ts#LawModel',
//           Level: './models.ts#LevelModel',
//           LevelDetail: './models.ts#LevelDetailModel',
//           Rule: './models.ts#RuleModel',
//         },
//       },
//     },
//   },
// }

const config: CodegenConfig = {
  schema: './src/modules/**/*.{gql,graphql}',
  generates: {
    './src/modules': {
      preset: 'graphql-modules',
      presetConfig: {
        baseTypesPath: './types.ts',
        filename: 'types.ts',
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
}

export default config

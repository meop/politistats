import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/modules/**/*.{gql,graphql}',
  generates: {
    './src/modules/': {
      preset: 'graphql-modules',
      config: {
        scalars: {
          Date: 'Date',
        },
        strictScalars: true,
        useTypeImports: true,
      },
      presetConfig: {
        baseTypesPath: './types.ts',
        filename: 'types.ts',
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
}

export default config

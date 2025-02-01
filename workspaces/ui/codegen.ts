import type { CodegenConfig } from '@graphql-codegen/cli'
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: './src/api/documents/*.ts',
  generates: {
    './src/api/types/': {
      config: {
        // documentMode: 'string',
        scalars: {
          Date: 'Date',
        },
        strictScalars: true,
        useTypeImports: true,
      },
      preset: 'client',
      // presetConfig: {
      //   persistedDocuments: true,
      // },
      documentTransforms: [addTypenameSelectionDocumentTransform],
    },
  },
}

export default config

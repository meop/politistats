import { graphql } from '../types'

export const lawsAbortionQueryDocument = graphql(`
  query LawsAbortion($topic: String!) {
    laws(topic: $topic) {
      __typename
      bday
      detail {
        __typename
        index
        name
        notes
      }
      land {
        __typename
        abbr
        bday
        name
      }
    }
  }
`)

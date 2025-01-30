import { DateResolver } from 'graphql-scalars'

import type { LawModule } from './types'

import { type LawData, LawDataProvider } from '../../providers/law/provider'

export const resolvers: LawModule.Resolvers = {
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
    laws: (_parent, args, context, _info) => {
      const provider: LawData = context.injector.get(LawDataProvider)
      return provider.laws(args.topic)
    },
  },
}

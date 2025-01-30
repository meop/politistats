import { createApplication } from 'graphql-modules'

import { default as lawModule } from './modules/law/module'

export const application = createApplication({
  modules: [lawModule],
})

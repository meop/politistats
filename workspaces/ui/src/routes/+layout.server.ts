import { Client, cacheExchange, fetchExchange } from '@urql/svelte'

import { error } from '@sveltejs/kit'

import { lawsAbortionQueryDocument } from '../api/documents/laws'

const urlLaws = 'http://localhost:3000/graphql'
const urlLandGeos = 'https://cdn.jsdelivr.net/npm/us-atlas/states-10m.json'

const client = new Client({
  url: urlLaws,
  exchanges: [cacheExchange, fetchExchange],
})

export async function load() {
  const resultLaws = await client
    .query(lawsAbortionQueryDocument, { topic: 'abortion' })
    .toPromise()

  if (resultLaws.error) {
    error(404, { message: 'failed to load laws' })
  }

  const resultLandGeos = await fetch(urlLandGeos)
  if (!resultLandGeos.ok) {
    error(404, { message: 'failed to load states geo data' })
  }

  return {
    laws: resultLaws.data?.laws,
    landGeos: await resultLandGeos.json(),
  }
}

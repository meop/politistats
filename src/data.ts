import { promises as fsPromises } from 'fs'
import { basename as pathBasename, join as pathJoin } from 'path'

import { parse as yamlParse } from 'yaml'

import { LandModel, LawModel, LevelModel, RuleModel } from './models.ts'

export interface Data {
  lands: (category?: string) => Promise<Array<LandModel>>
  laws: (topic: string) => Promise<Array<LawModel>>
  levels: (topic: string) => Promise<Array<LevelModel>>
  rules: (topic: string) => Promise<Array<RuleModel>>
}

async function getData<T>(
  group: string,
  subgroup?: string,
  file?: string,
): Promise<Array<T>> {
  const data: Array<T> = []

  const pathParts = [__dirname, '..', 'data', group]
  if (subgroup) {
    pathParts.push(subgroup)
  }
  const parentDir = pathJoin(...pathParts)
  for (const f of await fsPromises.readdir(parentDir)) {
    const fname = pathBasename(f, '.yml')
    if (file && file !== fname) {
      continue
    }

    const yf = yamlParse(
      await fsPromises.readFile(pathJoin(parentDir, f), 'utf8'),
    )
    data.push(...yf)
  }

  return data
}

export class DataLoader implements Data {
  lands = (category?: string) =>
    getData<LandModel>('lands', undefined, category)
  laws = async (topic: string) => {
    const lands = await this.lands()
    const levels = await this.levels(topic)
    const rules = await this.rules(topic)

    const laws: Array<LawModel> = []

    for (const rule of rules) {
      for (const land of rule.lands) {
        laws.push({
          bday: rule.bday,
          land: lands.find((l) => l.abbr === land)!,
          detail: levels
            .findLast(
              (l) =>
                rule.bday >= l.bday &&
                (!l.dday || rule.bday <= l.dday),
            )!
            .details.find((d) => rule.level === d.index)!,
        })
      }
    }

    return laws
  }
  levels = (topic: string) => getData<LevelModel>('laws', topic, 'levels')
  rules = (topic: string) => getData<RuleModel>('laws', topic, 'rules')
}

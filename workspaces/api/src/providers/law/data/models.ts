export type LandModel = {
  abbr: string
  bday: Date
  name: string
}

export type LawModel = {
  bday: Date
  detail: LevelDetailModel
  land: LandModel
}

export type LevelModel = {
  bday: Date
  dday?: Date
  details: Array<LevelDetailModel>
}

export type LevelDetailModel = {
  index: number
  name: string
  notes?: Array<string>
}

export type RuleModel = {
  bday: Date
  lands: Array<string>
  level?: number
}

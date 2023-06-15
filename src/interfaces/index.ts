export interface Planet {
  id: string
  name: string
  rotation: string
  revolution: string
  radius: string
  temperature: string
  geology: OverviewClass
  images: Images
  overview: OverviewClass
  structure: OverviewClass
}

export interface OverviewClass {
  id: string
  content: string
  source: string
  planetId: string
}

export interface Images {
  planet: InternalClass
  geology: InternalClass
  internal: InternalClass
}

export interface InternalClass {
  id: string
  small: string
  medium: string
  large: string
}

export type Planets =
  | 'earth'
  | 'mercury'
  | 'mars'
  | 'venus'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune'

export type PlanetStructureInfo =
  | 'overview'
  | 'internalStructure'
  | 'surfaceGeology'

export interface Links {
  id: string
  title: Planets
  path: string
}

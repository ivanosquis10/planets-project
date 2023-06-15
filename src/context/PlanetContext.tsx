import { createContext } from 'react'
import { Links, Planets, PlanetStructureInfo } from '../interfaces'

interface ContextProps {
  stateNavbar: Planets
  planetsLinks: Links[]
  planetStructure: PlanetStructureInfo

  // Methods
  changeNav: (value: Planets) => void
  handleClick: (info: PlanetStructureInfo) => void
}

export const PlanetContext = createContext({} as ContextProps)

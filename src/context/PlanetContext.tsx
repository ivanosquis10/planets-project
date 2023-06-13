import { createContext } from 'react'
import { Links, Planets } from '../interfaces'

interface ContextProps {
  stateNavbar: Planets
  planetsLinks: Links[]
  changeNav: (value: Planets) => void
}

export const PlanetContext = createContext({} as ContextProps)

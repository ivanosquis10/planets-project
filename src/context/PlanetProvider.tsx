import { FC, ReactNode, useState } from 'react'
import { PlanetContext } from './PlanetContext'
import { Links, Planets, PlanetStructureInfo } from '../interfaces'

type Props = {
  children: ReactNode
}

export const PlanetProvider: FC<Props> = ({ children }) => {
  const [stateNavbar, setStateNavbar] = useState<Planets>('earth')
  const [planetStructure, setPlanetStructure] =
    useState<PlanetStructureInfo>('overview')

  const planetsLinks: Links[] = [
    {
      id: crypto.randomUUID(),
      title: 'earth',
      path: 'earth',
    },
    {
      id: crypto.randomUUID(),
      title: 'mercury',
      path: 'mercury',
    },
    {
      id: crypto.randomUUID(),
      title: 'mars',
      path: 'mars',
    },
    {
      id: crypto.randomUUID(),
      title: 'venus',
      path: 'venus',
    },
    {
      id: crypto.randomUUID(),
      title: 'jupiter',
      path: 'jupiter',
    },
    {
      id: crypto.randomUUID(),
      title: 'saturn',
      path: 'saturn',
    },
    {
      id: crypto.randomUUID(),
      title: 'uranus',
      path: 'uranus',
    },
    {
      id: crypto.randomUUID(),
      title: 'neptune',
      path: 'neptune',
    },
  ]

  const changeNav = (value: Planets) => {
    setStateNavbar(value)
  }

  const handleClick = (info: PlanetStructureInfo) => {
    setPlanetStructure(info)
  }

  return (
    <PlanetContext.Provider
      value={{
        // values
        stateNavbar,
        planetsLinks,
        planetStructure,

        // methods
        changeNav,
        handleClick,
      }}
    >
      {children}
    </PlanetContext.Provider>
  )
}

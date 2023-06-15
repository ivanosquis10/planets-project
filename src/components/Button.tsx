import { FC } from 'react'
import { usePlanet } from '../hooks/usePlanet'
import { PlanetStructureInfo } from '../interfaces'

interface Props {
  text?: string
  planetInformation?: PlanetStructureInfo
}

export const Button: FC<Props> = ({ planetInformation = 'overview', text }) => {
  const { handleClick, planetStructure } = usePlanet()
  const btnClassName = `rounded w-full md:w-3/4 p-5 text-start capitalize text-lg border-2 border-slate-600 ${
    planetStructure === planetInformation
      ? 'bg-green-600'
      : 'bg-slate-800 hover:bg-slate-500/50'
  }`
  return (
    <button
      onClick={() => handleClick(planetInformation)}
      className={btnClassName}
    >
      {text}
    </button>
  )
}

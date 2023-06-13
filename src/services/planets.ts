import { Planet } from '../interfaces'

export const getPlanets = async (planet: string): Promise<Planet> => {
  const resp = await fetch(
    `https://api-planets.onrender.com/api/planet/${planet}`
  )
  const data = await resp.json()
  return data
}

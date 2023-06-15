import { Link } from 'wouter'
import { usePlanet } from '../hooks/usePlanet'
import { Planets } from '../interfaces'

/**
+ * Renders a card for a planet, with an image and a link to navigate to the planet page.
+ *
+ * @param {Planets} planet - the planet object to render the card for
+ * @returns {JSX.Element} A React component representing the planet card
+ */

export const PlanetCard = ({ planet }: { planet: Planets }): JSX.Element => {
  const { changeNav } = usePlanet()

  return (
    <Link
      href={`planets/${planet}`}
      className='flex flex-col items-center pt-2'
      onClick={() => changeNav(planet)}
    >
      <img
        src={`/assets/planet-${planet}-small.svg`}
        height={150}
        width={150}
        alt={`image of the planet ${planet}`}
      />
      <p className='w-full text-xl py-1 rounded tracking-wider text-center bg-slate-800'>
        Go to {planet}
      </p>
    </Link>
  )
}

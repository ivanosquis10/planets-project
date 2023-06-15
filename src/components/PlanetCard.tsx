import { Link } from 'wouter'
import { usePlanet } from '../hooks/usePlanet'
import { Planets } from '../interfaces'

export const PlanetCard = ({ title }: { title: Planets }) => {
  const { changeNav } = usePlanet()

  return (
    <Link
      href={`planets/${title}`}
      className='flex flex-col items-center pt-2'
      onClick={() => changeNav(title)}
    >
      <img
        src={`/assets/planet-${title}-small.svg`}
        height={150}
        width={150}
        alt={`image of the planet ${title}`}
        loading='lazy'
      />
      {/* <p className='w-full text-xl rounded tracking-wider text-center btn btn-success'> */}
      <p className='w-full text-xl py-1 rounded tracking-wider text-center bg-slate-800'>
        Go to {title}
      </p>
    </Link>
  )
}

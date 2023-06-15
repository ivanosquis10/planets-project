import { usePlanet } from '../hooks/usePlanet'
import { PlanetCard } from '../components/PlanetCard'

export function Home() {
  const { planetsLinks } = usePlanet()
  return (
    <section className='lg:h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl text-center md:text-6xl font-normal my-5 md:mb-5'>
        Welcome to the{' '}
        <span className='text-green-500 font-black'>Planets</span>
      </h1>
      <ul className='space-y-8 w-full grid md:grid-cols-2 lg:grid-cols-4 md:gap-5 md:space-y-0 px-5 mb-5 md:0'>
        {planetsLinks.map(({ title }) => (
          <li
            className='w-full bg-slate-800/40 backdrop-blur hover:bg-slate-800/70 rounded duration-300 ease-in-out hover:scale-105'
            key={title}
          >
            <PlanetCard title={title} />
          </li>
        ))}
      </ul>
    </section>
  )
}

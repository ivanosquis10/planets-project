import { Link } from 'wouter'
import { usePlanet } from '../hooks/usePlanet'

export function Home() {
  const { changeNav, planetsLinks } = usePlanet()
  return (
    <section className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-normal mb-5'>
        Welcome to the{' '}
        <span className='text-green-500 font-black'>Planets</span>
      </h1>
      <ul className='space-y-8 w-full grid md:grid-cols-2 lg:grid-cols-4 md:gap-5 md:space-y-0 px-5'>
        {planetsLinks.map(({ title }) => (
          <li
            className='w-full bg-slate-800/40 hover:bg-slate-800/70 rounded duration-300 ease-in-out'
            key={title}
          >
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
              <p className='w-full text-xl py-1 rounded tracking-wider text-center bg-slate-800'>
                Go to {title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

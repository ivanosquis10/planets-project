import useSWR from 'swr'

import { usePlanet } from '../hooks/usePlanet'
import { PlanetLoading, PlanetInformation, Layout, Button } from '../components'

import { getPlanets } from '../services/planets'

export const PlanetDetail = (props: {
  params: {
    id: string
  }
}) => {
  const {
    params: { id },
  } = props

  const { data, isLoading } = useSWR(`/planets/${id}`, () => getPlanets(id))
  const { planetStructure } = usePlanet()

  // encargado de mostrar el estado del loading
  if (isLoading) {
    return <PlanetLoading />
  }

  // extraemos la información necesaria para mostrar
  const {
    overview,
    structure,
    geology,
    name,
    images,
    rotation,
    radius,
    revolution,
    temperature,
  } = data!

  // colocamos la información en un objeto para dividirla y mostrarla segun el estado
  const infoPlanet = {
    overview: {
      overview: overview.content,
      source: overview.source,
    },
    internalStructure: {
      overview: structure.content,
      source: structure.source,
    },
    surfaceGeology: {
      overview: geology.content,
      source: geology.source,
    },
  }

  // Retorna el string con la url a la imagen validando el estado
  const getImageSource = (value?: boolean) => {
    if (planetStructure === 'internalStructure') return images.internal.large
    if (planetStructure === 'surfaceGeology' && value)
      return images.geology.large

    return images.planet.large
  }

  return (
    <Layout title={id} navVisible>
      <section className='w-full flex flex-col items-center justify-center p-2'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-5 relative'>
          <picture className='flex justify-center px-2 relative'>
            <img
              className={`absolute z-40 -bottom-4 md:bottom-10 ${
                planetStructure !== 'surfaceGeology' ? 'hidden' : 'block'
              } `}
              src={getImageSource(true)}
              alt=''
            />
            <img
              src={getImageSource()}
              className='w-72 md:w-auto'
              width={500}
              height={500}
              alt={`image of the planet ${name}`}
              loading='lazy'
            />
          </picture>

          <div className='h-full flex flex-col px-2 text-center md:text-start'>
            <div className='w-full md:max-w-2xl flex flex-col text-lg flex-grow justify-around'>
              <h2 className='text-7xl uppercase mt-5 md:mt-0'>{name}</h2>
              <p className='my-2'>{infoPlanet[planetStructure].overview}</p>
              <a
                className='my-5 text-lg capitalize text-slate-300 hover:text-slate-100 ease-in-out duration-300'
                href={infoPlanet[planetStructure].source}
                target='_blank'
                rel='noreferrer'
              >
                source: <span className='underline'>wikipedia</span>
              </a>
            </div>

            <div className='flex flex-grow flex-col gap-3 justify-start'>
              <Button planetInformation='overview' text='overview' />
              <Button
                planetInformation='surfaceGeology'
                text='surfaceGeology'
              />
              <Button
                planetInformation='internalStructure'
                text='internalStructure'
              />
            </div>
          </div>
        </div>
        <PlanetInformation
          rotation={rotation}
          revolution={revolution}
          temp={temperature}
          radius={radius}
        />
      </section>
    </Layout>
  )
}

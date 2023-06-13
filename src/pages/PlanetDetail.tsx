import { useState } from 'react'
import useSWR from 'swr'

import { PlanetLoading } from '../components/PlanetLoading'
import { PlanetInformation } from '../components/PlanetInformation'
import { Layout } from '../components/Layout'

import { getPlanets } from '../services/planets'
import type { Information } from '../interfaces'

export const PlanetDetail = (props: {
  params: {
    id: string
  }
}) => {
  const {
    params: { id },
  } = props

  const { data, isLoading } = useSWR(`/planets/${id}`, () => getPlanets(id))
  const [info, setInformation] = useState<Information>('overview')

  if (isLoading) {
    return <PlanetLoading />
  }

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

  const getImageSource = (value?: boolean) => {
    if (info === 'internalStructure') return images.internal.large
    // if (info === 'surfaceGeology') return images.geology.large
    if (info === 'surfaceGeology' && value) return images.geology.large

    return images.planet.large
  }

  const handleClick = (info: Information) => {
    setInformation(info)
  }

  return (
    <Layout>
      <section className='w-full flex flex-col items-center justify-center p-2'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-5 relative'>
          <picture className='flex justify-center px-2 relative'>
            <img
              className={`absolute z-40 -bottom-4 md:bottom-10 ${
                info !== 'surfaceGeology' ? 'hidden' : 'block'
              } `}
              src={getImageSource(true)}
              alt=''
            />
            <img
              src={getImageSource()}
              className='w-72 md:w-auto'
              width={500}
              height={500}
              alt=''
              loading='lazy'
            />
          </picture>

          <div className='h-full flex flex-col px-2 text-center'>
            <div className='w-full md:max-w-2xl flex flex-col text-lg flex-grow justify-around'>
              <h2 className='text-7xl uppercase mt-5 md:mt-0'>{name}</h2>
              <p className='my-2'>{infoPlanet[info].overview}</p>
              <a
                className='my-5 text-lg capitalize text-slate-400 hover:text-slate-100 ease-in-out duration-300'
                href={infoPlanet[info].source}
                target='_blank'
                rel='noreferrer'
              >
                source: <span className='underline'>wikipedia</span>
              </a>
            </div>

            <div className='flex flex-grow flex-col gap-3 justify-start'>
              <button
                onClick={() => handleClick('overview')}
                className={`
              ${
                info === 'overview'
                  ? 'bg-green-600'
                  : 'bg-slate-800 hover:bg-slate-500/50'
              } rounded w-full md:w-3/4 p-5 text-start capitalize text-lg border-2 border-slate-600`}
              >
                overview
              </button>
              <button
                onClick={() => handleClick('internalStructure')}
                className={`${
                  info === 'internalStructure'
                    ? 'bg-green-600'
                    : 'bg-slate-800 hover:bg-slate-500/50'
                } 
                rounded border-2 border-slate-600 w-full md:w-3/4 p-5 text-start capitalize text-lg`}
              >
                internal structure
              </button>
              <button
                onClick={() => handleClick('surfaceGeology')}
                className={`
              ${
                info === 'surfaceGeology'
                  ? 'bg-green-600'
                  : 'bg-slate-800 hover:bg-slate-500/50'
              }
                border-2 border-slate-600 rounded w-full md:w-3/4 p-5 text-start capitalize text-lg `}
              >
                surface geology
              </button>
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

import { FC } from 'react'

interface Props {
  rotation: string
  revolution: string
  temp: string
  radius: string
}

export const PlanetInformation: FC<Props> = ({
  rotation,
  revolution,
  temp,
  radius,
}) => {
  const information = [
    {
      id: 1,
      title: 'rotation time',
      content: rotation,
    },
    {
      id: 2,
      title: 'revolution time',
      content: revolution,
    },
    {
      id: 3,
      title: 'radius',
      content: radius,
    },
    {
      id: 4,
      title: 'average temp',
      content: temp,
    },
  ]

  return (
    <div className='w-full mt-10 md:mt-20 mb-2 flex flex-col md:flex-row items-center justify-around gap-5 md:gap-10 p-4'>
      {information.map(info => (
        <div
          key={info.id}
          className='bg-slate-800 px-5 py-4 w-full rounded space-y-2 border-2 border-slate-700 hover:scale-105 duration-300 ease-in-out'
        >
          <p className='uppercase text-sm font-medium text-slate-400 tracking-wider'>
            {info.title}
          </p>
          <p className='text-3xl tracking-wider font-bold'>{info.content}</p>
        </div>
      ))}
    </div>
  )
}

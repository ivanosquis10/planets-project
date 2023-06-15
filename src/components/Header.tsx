import { Link } from 'wouter'
import { usePlanet } from '../hooks/usePlanet'
import { IconEarth, MenuIcon } from './Icons'

export const Header = ({ isVisible }: { isVisible?: boolean }) => {
  const { stateNavbar, changeNav, planetsLinks } = usePlanet()

  return (
    <div className='drawer relative z-50'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />

      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <div className='w-full navbar bg-slate-900'>
          <div className='flex-none lg:hidden'>
            <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
              <MenuIcon />
            </label>
          </div>
          <div className='flex-1 px-2 mx-2'>
            <Link
              href='/'
              className='flex-grow text-2xl cursor-pointer tracking-tighter uppercase'
            >
              Planets | World
            </Link>
          </div>

          <div
            className={`flex-none hidden ${isVisible ? 'lg:block' : 'hidden'}`}
          >
            <ul className='menu-horizontal md:flex items-center justify-end gap-x-5'>
              {planetsLinks.map(link => (
                <li
                  className='flex items-center flex-col relative'
                  key={link.id}
                >
                  <Link
                    onClick={() => changeNav(link.title)}
                    className={`uppercase text-sm p-1 ${
                      stateNavbar === link.title
                        ? 'text-white'
                        : 'text-slate-300'
                    }  hover:text-white font-bold tracking-widest`}
                    href={`/planets/${link.path}`}
                  >
                    {link.title}
                  </Link>
                  <div
                    className={`absolute top-6
                  ${stateNavbar === link.title ? 'opacity-100' : 'opacity-0'}
              `}
                  >
                    <IconEarth />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
        <ul className='p-4 w-80 h-full bg-green-600/30 space-y-5 backdrop-blur-sm'>
          {planetsLinks.map(link => (
            <li className='border-b' key={link.id}>
              <Link
                onClick={() => changeNav(link.title)}
                className={`uppercase text-base p-1 flex items-center justify-between ${
                  stateNavbar === link.title ? 'text-white' : 'text-slate-300'
                }  hover:text-white font-bold tracking-widest`}
                href={`/planets/${link.path}`}
              >
                {link.title}
                <IconEarth />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

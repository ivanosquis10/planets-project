// import { Link } from 'wouter'
// import { usePlanet } from '../hooks/usePlanet'
// import { IconEarth } from './Icons'
// import { useState } from 'react'

// function Header() {
//   const { stateNavbar, changeNav, planetsLinks } = usePlanet()
//   const [menubar, setStateNavbar] = useState(false)

//   const handleClick = () => {
//     setStateNavbar(!menubar)
//   }
//   return (
//     <header className='flex items-center justify-between px-10 py-5 border-b border-slate-700/50'>
//       {/* <Link
//         href='/'
//         className='flex-grow text-3xl cursor-pointer tracking-tighter uppercase'
//       >
//         Planets | World
//       </Link>

//       <button
//         data-collapse-toggle='navbar-default'
//         type='button'
//         className='block md:hidden'
//         aria-controls='navbar-default'
//         aria-expanded='false'
//       >
//         <span className='sr-only'>Open main menu</span>
//         <svg
//           className='w-6 h-6'
//           aria-hidden='true'
//           fill='currentColor'
//           viewBox='0 0 20 20'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             fill-rule='evenodd'
//             d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
//             clip-rule='evenodd'
//           ></path>
//         </svg>
//       </button>

//       <nav className=''>
//         <ul className={`hidden md:flex items-center justify-end gap-x-8`}>
//           {planetsLinks.map(link => (
//             <li className='flex items-center flex-col relative' key={link.id}>
//               <Link
//                 onClick={() => changeNav(link.title)}
//                 className={`uppercase text-sm p-1 ${
//                   stateNavbar === link.title ? 'text-white' : 'text-slate-300'
//                 }  hover:text-white font-bold tracking-widest`}
//                 href={`/planets/${link.path}`}
//               >
//                 {link.title}
//               </Link>
//               <div
//                 className={`absolute top-6
//                   ${stateNavbar === link.title ? 'opacity-100' : 'opacity-0'}
//               `}
//               >
//                 <IconEarth />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </nav> */}

//       <nav className='w-full'>
//         <div className='px-2 sm:px-6 lg:px-8'>
//           <div className='relative flex h-16 items-center justify-between'>
//             <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
//               {/* <!-- Mobile menu button--> */}
//               <button
//                 type='button'
//                 className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
//                 aria-controls='mobile-menu'
//                 aria-expanded='false'
//               >
//                 <span className='sr-only'>Open main menu</span>
//                 {/* <!--
//             Icon when menu is closed.

//             Menu open: "hidden", Menu closed: "block"
//           --> */}
//                 <svg
//                   className='block h-6 w-6'
//                   fill='none'
//                   viewBox='0 0 24 24'
//                   stroke-width='1.5'
//                   stroke='currentColor'
//                   aria-hidden='true'
//                 >
//                   <path
//                     stroke-linecap='round'
//                     stroke-linejoin='round'
//                     d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
//                   />
//                 </svg>
//                 {/* <!--
//             Icon when menu is open.

//             Menu open: "block", Menu closed: "hidden"
//           --> */}
//                 <svg
//                   className='hidden h-6 w-6'
//                   fill='none'
//                   viewBox='0 0 24 24'
//                   stroke-width='1.5'
//                   stroke='currentColor'
//                   aria-hidden='true'
//                 >
//                   <path
//                     stroke-linecap='round'
//                     stroke-linejoin='round'
//                     d='M6 18L18 6M6 6l12 12'
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className='flex flex-1 items-center justify-center sm:justify-between'>
//               <Link
//                 href='/'
//                 className='flex-grow text-3xl cursor-pointer tracking-tighter uppercase'
//               >
//                 Planets | World
//               </Link>

//               <div className='hidden sm:ml-6 sm:block'>
//                 <ul className='flex space-x-4'>
//                   {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
//                   {planetsLinks.map(link => (
//                     <li
//                       className='flex items-center flex-col relative'
//                       key={link.id}
//                     >
//                       <Link
//                         onClick={() => changeNav(link.title)}
//                         className={`uppercase text-sm p-1 ${
//                           stateNavbar === link.title
//                             ? 'text-white'
//                             : 'text-slate-300'
//                         }  hover:text-white font-bold tracking-widest`}
//                         href={`/planets/${link.path}`}
//                       >
//                         {link.title}
//                       </Link>
//                       <div
//                         className={`absolute top-6
//                   ${stateNavbar === link.title ? 'opacity-100' : 'opacity-0'}
//               `}
//                       >
//                         <IconEarth />
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='sm:hidden' id='mobile-menu'>
//           <div className='space-y-1 px-2 pb-3 pt-2'>
//             {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
//             <a
//               href='#'
//               className='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
//               aria-current='page'
//             >
//               Dashboard
//             </a>
//             <a
//               href='#'
//               className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
//             >
//               Team
//             </a>
//             <a
//               href='#'
//               className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
//             >
//               Projects
//             </a>
//             <a
//               href='#'
//               className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
//             >
//               Calendar
//             </a>
//           </div>
//         </div>
//       </nav>
//     </header>
//   )
// }

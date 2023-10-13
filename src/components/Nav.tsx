'use client'

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { id: 0, name: 'home', path: '/', icon: <HiHome /> },
  { id: 1, name: 'about', path: '/about', icon: <HiUser /> },
  { id: 2, name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { id: 3, name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    id: 4, name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    id: 5, name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {

  const pathname = usePathname()

  console.log(pathname)

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen  '>

      <div className={`flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px]   xl:h-max py-4 bg-white/10  xl:bg-red-500 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full `}>
        {navData.map(({ id, name, icon, path }) => {
          return (
            <Link className={`${path === pathname && 'text-accent'} relative flex items-center group-hover:text-accent transition-all duration-300`} href={path} key={id}>
              {/* ${path === pathname && 'text-accent'} */}
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>{name}</div>
                </div>

                {/* triangle */}
                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>

                </div>

              </div>
              <div >{icon}</div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
};

export default Nav;

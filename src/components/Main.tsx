'use client'

// fonts 
import { Sora } from "next/font/google";

// font settings
const sora = ({
  subset: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

//components
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./footer";
import NavFooter from "./footer";
// import React from 'react'
import TopLeftImg from "./TopLeftImg";
import { Transition } from '@/components/Transition'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Typography from "@material-tailwind/react/components/Typography";




const Main_Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.div key={pathname} className='h-full'>
          <Transition />
        </motion.div>

      </AnimatePresence>

      <div className={`w-full h-screen  text-black  ${sora.variable} font-sora relative}`}>
        <ul className="flex list-none">
          <li className="w-[15%]"><TopLeftImg /></li>
          <li className="w-[85%]"><Header /></li>
        </ul>

        <Nav />

        <div className="w-full " >
          {children}
        </div>

        <div className="hidden xl:bottom-0 xl:inset-0 xl:flex xl:h-28 justify-start items-end px-5">
          <Typography
            variant="small"
            className=" text-white  font-normal"
          >
            &copy; {2023} <a href="#">Misbahu Ahmed</a>. All
            Rights Reserved.
          </Typography>
        </div>
      </div >
    </div>
  )
};

export default Main_Layout;

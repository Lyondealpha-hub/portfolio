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




const Main_Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.div key={pathname} className='h-full'>
          <Transition />
        </motion.div>

      </AnimatePresence>

      <div className={`page bg-white text-black bg-cover bg-no-repeat ${sora.variable} font-sora relative}`}>
        <TopLeftImg />
        <Nav />
        {/* <Header /> */}

        <div className="site-layout bg-white" >
          {children}
        </div>
        <NavFooter />
      </div >
    </div>
  )
};

export default Main_Layout;

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
import React from 'react'
import TopLeftImg from "./TopLeftImg";


const Main_Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative}`}>
      <TopLeftImg />
      <Nav />
      <Header />

      <div className="site-layout" >
        {children}
      </div>
      <NavFooter />
    </div >
  )
};

export default Main_Layout;
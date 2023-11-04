// fonts 
import { Sora } from "next/font/google";

// font settings
const sora = ({
  subset: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

//components
import React from "react";

const Main_Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`page bg-white bg-cover  bg-no-repeat ${sora.variable} font-sora relative}`}>
      <div className="site-layout bg-white" >
        {children}
      </div>
    </div >
  )
};

export default Main_Layout;

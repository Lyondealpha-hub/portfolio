// fonts 
import ProjectsBtn from "@/components/ProjectsBtn";
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
    <div className={`page w-full h-screen  bg-white bg-cover  bg-no-repeat ${sora.variable} font-sora relative}`}>
      <div className="w-full h-full justify-center xl:justify-between">
        {/* leftSide */}
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h1">Transforming Ideas <br /> Into {' '}
            <span className="text-red-500">Digital Reality</span>
          </h1>
          {/* subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="flex justify-center xl:justify-start">
            {/* project btn */}
            <ProjectsBtn />
          </div>
          {/* <motion.div>
            
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
          </motion.div> */}
        </div>
        {/* rightSide */}
        <div className="hidden ">

        </div>
      </div>
    </div >
  )
};

export default Main_Layout;

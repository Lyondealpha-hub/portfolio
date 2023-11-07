// fonts 
import ParticlesContainer from "@/components/ParticlesContainer";
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
    <div className={`page w-full  bg-white ${sora.variable} font-sora relative}`}>

      <div className="w-full h-full justify-center xl:justify-between xl: flex">

        {/* leftSide */}
        <div className="text-center pt-10 flex flex-col justify-center xl:w-1/2 xl:pt-20 xl:px-10 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className=" text-4xl xl:text-6xl font-semibold">Transforming Ideas <br /> Into {' '}
            <span className="text-red-500">Digital Reality</span>
          </h1>
          {/* subtitle */}
          <p className="max-w-sm p-2 xl:max-w-xl mx-auto xl:mx-0">
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
        <div className="hidden xl:w-1/2 xl:h-full xl:flex  ">
          {/* particles */}
          <ParticlesContainer />
        </div>
      </div>
    </div >
  )
};

export default Main_Layout;

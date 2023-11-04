// next Image 
import Image from "next/image";
import Link from "next/link";
import rounded_image from '../../public/rounded-text.png'
import { HiArrowRight } from "react-icons/hi2";



const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link className="relative  w-[185px] h-[185px] flex justify-center items-center " href={"/work"}>
        <Image
          src={rounded_image}
          alt={""}
          width={141}
          height={148}
          className="animate-spin-slow p-3 bg-red-500 w-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>

    </div>
  )

};

export default ProjectsBtn;

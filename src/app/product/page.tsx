
import {Montserrat} from'@next/font/google';
import React from 'react'
import Image from "next/image";


import { FaChevronRight } from "react-icons/fa";
import NavBar2 from '../components/NavBar2';
import v1 from "@/app/assets/v1.png";
import v2 from "@/app/assets/v2.png";
import v3 from "@/app/assets/v3.png";
import v4 from "@/app/assets/v4.png";
import v5 from "@/app/assets/v5.png";
import v6 from "@/app/assets/v6.png";
import ProductMain from '../components/ProductMain';
import ProductTeam from '../components/ProductTeam';
import Footer from '../components/Footer';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

const page = () => {
  return (
    <>
      <section>
        <NavBar2/>
        <div className=' justify-center'> 
            <div className=' text-center justify-center pt-10 '>
                <h5 className='text-base font-bold text-center text-[#737373]'>WHAT WE DO</h5>
                <h1 className='text-6xl font-bold text-center pt-8 text-[#252B42]'>Innovation tailored for you</h1>
                <p className='flex items-center  justify-center pl-19 gap-3 pt-16'><span className='text-sm font-bold'>Home</span><span><FaChevronRight className='text-xs font-normal text-[#BDBDBD]' /></span><span className='text-sm font-bold text-[#BDBDBD]'>Products</span></p>
               </div></div>

        <ProductMain /> 
        <ProductTeam /> 

         {/* Big companies Section */}
<section className="relative bg-white top-0 h-[500px] py-20">
  <div className="w-full text-center">
    <h5 className="font-bold text-[24px] lg:text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] font-montserrat py-5">
      Big Companies Are Here
    </h5>
    <h4 className="font-normal text-[14px] text-[#737373] leading-5 tracking-wide">
      Problems trying to resolve the conflict between
      <span className="block">the two major realms of Classical physics: Newtonian mechanics</span>
    </h4>
  </div>

  <div className="flex justify-center items-center py-10">
    <div className="flex gap-8">
      <div className="flex flex-col items-center">
        <Image
          src={v1}
          alt="logo"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={v2}
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={v3}
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={v4}
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={v5}
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={v6}
          alt="logo"
        />
      </div>
    </div>
  </div>
</section>
     
        <Footer />   
      </section>
    </>
  )
}

export default page
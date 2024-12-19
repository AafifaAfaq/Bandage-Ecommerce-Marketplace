import Image from "next/image";
import {Montserrat} from'@next/font/google';
import React from 'react'
import NavBar2 from '../components/NavBar2'
import Footer from '../components/Footer'
import PricingSection from '../components/PSection'
import FAQs from '../components/FAQs'
import Pricing from '../components/Pricing'
import v1 from "@/app/assets/v1.png";
import v2 from "@/app/assets/v2.png";
import v3 from "@/app/assets/v3.png";
import v4 from "@/app/assets/v4.png";
import v5 from "@/app/assets/v5.png";
import v6 from "@/app/assets/v6.png";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
  });


const page = () => {
  return (
    <>
      <section className='wraper'>
       <NavBar2 />
        <Pricing />
        <PricingSection/>
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
        <FAQs/>
        <Footer/>

      </section>
    </>
  )
}

export default page
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import {Montserrat} from'@next/font/google';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import bg2 from "@/app/assets/bg2.png";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";
import { Carlito } from "next/font/google";
import c1 from "@/app/assets/c1.png";
import c2 from "@/app/assets/c2.png";
import arrow from "@/app/assets/Arrow 2.png";


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

  const carlito = Carlito({
    subsets: ['latin'],
    weight: ['400', '700'],
  });


export default function ContactUs() {
  return (
    <div>
      {/* Navbar Section */}
      <NavBar2 />

      {/* About Us Section */}
<div className="relative w-full py-[112px] bg-white">
  <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-[80px]">
    {/* Column 1 */}
    <div className="flex flex-col items-start gap-6 w-full lg:w-[599px] font-montserrat text-center lg:text-left">
      <h5 className="font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
        Contact Us
      </h5>
      <h1 className="font-bold text-[36px] lg:text-[58px] leading-tight lg:leading-[80px] tracking-[0.2px] text-[#252B42]">
        Get in touch <span className="block">today!</span>
      </h1>
      <p className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] tracking-[0.2px] text-[#737373]">
        We know how large objects will act, but things on a small scale.
      </p>
      <div className="space-y-2">
        <p className="text-[#252B42] font-bold text-[16px] lg:text-[20px]">
          Phone: +451 215 215
        </p>
        <p className="text-[#252B42] font-bold text-[16px] lg:text-[20px]">
          Fax: +451 215 215
        </p>
      </div>
      {/* Social Media Icons */}
      <div className="flex justify-center lg:justify-start space-x-6 mt-4">
        <a href="#" className="text-[#23A6F0] hover:text-blue-600 text-xl">
          <FaFacebook />
        </a>
        <a href="#" className="text-[#23A6F0] hover:text-blue-500 text-xl">
          <FaTwitter />
        </a>
        <a href="#" className="text-[#23A6F0] hover:text-pink-600 text-xl">
          <FaInstagram />
        </a>
      </div>
    </div>

    {/* Column 2 */}
    <div className="w-full lg:w-auto">
      <Image
        src={bg2}
        alt="girl"
        className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[700px] object-contain"
      />
    </div>
  </div>
</div>

      
{/* Team Section */}
<section className="relative bg-white top-0 h-[700px] flex flex-col justify-center items-center font-montserrat">
  <div className="w-full text-center">
    <h5 className="font-bold text-[28px] md:text-[35px] leading-[50px] tracking-[0.2px] text-[#252B42] font-montserrat py-5">
    We help small businesses 
    <span className="block"
  >with big ideas</span>
    </h5>
    <h4 className="font-normal text-[14px] text-[#737373] leading-5 tracking-wide">
      Problems trying to resolve the conflict between 
      <span className="block">the two major realms of Classical physics: Newtonian mechanics</span>
    </h4>
  </div>

  <div className="flex justify-center items-center py-5">
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <Image
          src={c1}
          alt="row"
        />
       
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={c2}
          alt="row"
        />
       
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={c1}
          alt="row"
        />
     
      </div>
    </div>
  </div>
</section>



{/* Let's Talk Section */}
<section className="relative bg-white h-[500px] top-0 flex flex-col justify-center items-center">
  {/* Heading Section */}
  <div className="text-center">
    <Image src={arrow} alt="Arrow" width={50} height={50} className="mx-auto mb-2" />
    <h5 className="font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
      WE CAN'T WAIT TO MEET YOU
    </h5>
    <h2 className="font-bold  text-[30px] md:text-[40px]  leading-[60px] tracking-[0.2px] text-[#252B42] font-montserrat py-5">
      Let's Talk
    </h2>
  </div>
  {/* CTA Button */}
  <div className="mt-3">
    <button className="px-[40px] py-[15px] bg-[#23A6F0] rounded-[5px]">
      <span className="font-bold text-[14px] leading-[20px] tracking-[0.2px] text-white">
        Button
      </span>
    </button>
  </div>
</section>


 
<section className="relative ">
  <div className=" w-full">
    <Footer />
  </div>
</section>


    </div>
  );
}

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
      <div className="absolute w-full h-auto  top-[90px] flex flex-col items-center  gap-[80px] py-[112px] bg-white">
        <div className="flex flex-row items-center gap-[30px] w-[1044px] h-[500px]">
          {/* Column 1 */}
          <div className="flex flex-col items-start ml-20 gap-[35px] w-[599px] h-[321px] font-montserrat">
            <h5 className="w-[149px] h-[24px] font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Contact US</h5>
            <h1 className="w-[542px] h-[80px] font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">Get in touch <span className="block">
            today! </span></h1>
            <h4 className="w-[376px] h-[60px] font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373] py-10 font-montserrat">
              We know how large objects will act, but things on a small scale
            </h4>
            <h4 className="w-[376px] h-[60px]  text-[20px] leading-[10px] tracking-[0.2px] text-[#252B42] font-bold">
            Phone ; +451 215 215 
            </h4>
            <h4 className="w-[376px] h-[60px]  text-[#252B42] font-bold text-[20px] leading-[10px] tracking-[0.2px]">
            Fax : +451 215 215
            </h4>
            <div className="flex space-x-6 mt-4 justify-center md:justify-start">
              <a href="#" className="text-[#23A6F0] hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#23A6F0] hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#23A6F0] hover:text-pink-600">
                <FaInstagram />
              </a>
            </div>

           
          </div>

          {/* Column 2 */}
          <Image src={bg2} alt="girl" height={700} className="absolute right-[20px]" />
        </div>
      </div>

     
      
{/* Team Section */}
<section className="relative bg-white top-[700px] h-[700px] flex flex-col justify-center items-center font-montserrat">
  <div className="w-full text-center">
    <h5 className="font-bold text-[35px] leading-[50px] tracking-[0.2px] text-[#252B42] font-montserrat py-5">
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
<section className="relative bg-white h-[400px] top-[800px] flex flex-col justify-center items-center">
  {/* Heading Section */}
  <div className="text-center">
    <Image src={arrow} alt="Arrow" width={50} height={50} className="mx-auto mb-2" />
    <h5 className="font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
      WE CAN&#39T WAIT TO MEET YOU
    </h5>
    <h2 className="font-bold text-[50px] leading-[60px] tracking-[0.2px] text-[#252B42] font-montserrat py-5">
      Let&#39s Talk
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


 
<section className="relative bg-white top-[800px] h-[450px]">
  <div className="absolute bottom-0 w-full">
    <Footer />
  </div>
</section>


    </div>
  );
}

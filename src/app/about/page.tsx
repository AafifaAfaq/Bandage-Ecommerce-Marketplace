
import Image from "next/image";
import {Montserrat} from'@next/font/google';
import girl from "@/app/assets/background.png";
import bg from "@/app/assets/media bg-cover.png";
import pinkgirl from "@/app/assets/pinkgirl.png";
import t1 from "@/app/assets/t1.png";
import t2 from "@/app/assets/t2.png";
import t3 from "@/app/assets/t3.png";
import cart from "@/app/assets/card-content.png";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";
import { Carlito } from "next/font/google";
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

  const carlito = Carlito({
    subsets: ['latin'],
    weight: ['400', '700'],
  });


export default function AboutUs() {
  return (
    <div>
      {/* Navbar Section */}
      <NavBar2 />

     {/* About Us Section */}
<div className="relative  h-auto py-8 bg-white">
  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[30px] px-4 md:px-16 lg:px-24">
    {/* Column 1 */}
    <div className="flex flex-col items-start gap-6 md:gap-[35px] w-full md:w-1/2 font-montserrat">
      <h5 className="text-[16px] font-semibold text-[#252B42]">
        ABOUT COMPANY
      </h5>
      <h1 className="text-[28px] md:text-[38px] lg:text-[48px] font-bold text-[#252B42]">
        ABOUT US
      </h1>
      <h4 className=" w-[275px] lg:w-[375px] text-[16px] md:text-[20px] text-[#737373] leading-[1.5]">
        We know how large objects will act, but things on a small scale.
      </h4>
      {/* CTA */}
      <div className="mt-4">
        <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-bold hover:bg-blue-600">
          Get Quote Now
        </button>
      </div>
    </div>

    {/* Column 2 */}
    <div className="relative w-full md:w-1/2 flex justify-center">
      <Image
        src={girl}
        alt="girl"
        className="object-cover w-full md:w-[80%] lg:w-[60%] max-w-[400px]"
        priority
      />
    </div>
  </div>
</div>


    {/* Problem Section */}
<div className="absolute  h-[400px] left-[50%]  transform -translate-x-[50%] bg-white flex flex-col items-center py-[15px] px-4 md:px-8">
  <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[60px] ">
    {/* Left Column */}
    <div className="flex flex-col items-start gap-4 md:gap-[80px] w-full md:w-[394px]">
      <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#E74040]">
        Problems trying
      </p>
      <h2 className="font-bold w-[275px] lg:w-[375px] text-[20px] md:text-[22px] leading-[28px] md:leading-[30px] tracking-[0.1px] text-[#252B42]">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      </h2>
    </div>

    {/* Right Column */}
    <div className="flex flex-col items-start gap-4 w-full md:w-[529px]">
      <p className="font-normal  w-[275px] lg:w-[375px] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
      </p>
    </div>
  </div>
</div>


      {/* Metrics Section */}
<section className="bg-white top-0 py-16 relative">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-10 sm:gap-12 md:gap-16 items-center">
      {/* Metric 1 */}
      <div className="flex flex-col items-center text-center space-y-2">
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-gray-800">15K</h1>
        <p className="text-base sm:text-sm md:text-base font-semibold text-gray-500">Happy Customers</p>
      </div>
      {/* Metric 2 */}
      <div className="flex flex-col items-center text-center space-y-2">
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-gray-800">150K</h1>
        <p className="text-base sm:text-sm md:text-base font-semibold text-gray-500">Monthly Visitors</p>
      </div>
      {/* Metric 3 */}
      <div className="flex flex-col items-center text-center space-y-2">
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-gray-800">15</h1>
        <p className="text-base sm:text-sm md:text-base font-semibold text-gray-500">Countries Worldwide</p>
      </div>
      {/* Metric 4 */}
      <div className="flex flex-col items-center text-center space-y-2">
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-gray-800">100+</h1>
        <p className="text-base sm:text-sm md:text-base font-semibold text-gray-500">Top Partners</p>
      </div>
    </div>
  </div>
</section>


{/* Video Card Section */}
<section className="relative top-0 bg-white py-12">
  <div className="relative w-full max-w-[1050px] mx-auto h-auto rounded-2xl shadow-lg">
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[540px] rounded-2xl shadow-lg bg-white">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/90 rounded-2xl z-10"></div>
      {/* Play Button */}
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <button className="w-[50px] sm:w-[70px] md:w-[90px] h-[50px] sm:h-[70px] md:h-[90px] bg-[#23A6F0] rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>


{/* Team Section */}
<section className="relative bg-white top-0 h-[700px] flex flex-col justify-center items-center">
  <div className="w-full text-center">
    <h5 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] font-montserrat py-5">
      Meet Our Team
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
          src={t1}
          alt="row"
          width={500}
          height={500}
        />
        <Image src={cart} alt="cart" />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={t2}
          alt="row"
          width={500}
          height={500}
        />
        <Image src={cart} alt="cart" />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={t3}
          alt="row"
          width={500}
          height={500}
        />
        <Image src={cart} alt="cart" />
      </div>
    </div>
  </div>
</section>



 {/* Big companies Section */}
<section className="relative bg-white h-[500px] top-0 py-20">
  <div className="  w-full text-center">
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

{/* Work with Us Section */}
<section className="w-full px-6 py-12 md:px-12 lg:px-36 bg-[#2A7CC7]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 p-6 md:p-12">
            <p className="text-xl font-normal text-[#FFFFFF] mb-4">WORK WITH US</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-5">
              Now Let’s grow Yours
            </h1>
            <p className="text-sm font-normal text-[#FFFFFF] mb-3">
              The gradual accumulation of information about atomic and
            </p>
            <p className="text-sm font-normal text-[#FFFFFF] mb-5">
              small-scale behavior during the first quarter of the 20th
            </p>
            <button className="text-sm font-bold text-[#FFFFFF] md:w-[184px] h-[52px] bg-[#23A6F0] rounded-md px-4 py-2 hover:bg-[#185274]">
              Button
            </button>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 ">
            <Image
              src={pinkgirl}
              alt="Image"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>


{/* Footer Section */}
<section className="relative bg-white">
  <div className="w-full">
    <Footer />
  </div>
</section>

    </div>
  );
}

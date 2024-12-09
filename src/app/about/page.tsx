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
      <div className="absolute w-full h-[545px]  top-[90px] flex flex-col items-center  gap-[80px] py-[112px] bg-white">
        <div className="flex flex-row items-center gap-[30px] w-[1044px] h-[500px]">
          {/* Column 1 */}
          <div className="flex flex-col items-start ml-20 gap-[35px] w-[599px] h-[321px]">
            <h5 className="w-[149px] h-[24px] font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">ABOUT COMPANY</h5>
            <h1 className="w-[542px] h-[80px] font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">ABOUT US</h1>
            <h4 className="w-[376px] h-[60px] font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">
              We know how large objects will act, but things on a small scale
            </h4>
            {/* CTA */}
            <div className="flex flex-row items-start gap-[10px] w-[195px] h-[52px]">
              <div className="flex flex-col items-center px-[40px] py-[15px] gap-[10px] w-[195px] h-[52px] bg-[#23A6F0] rounded-[5px]">
                <span className="w-[115px] h-[22px] font-bold text-[14px] leading-[22px] text-center tracking-[0.2px] text-[#FFFFFF]">
                  Get Quote Now
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <Image src={girl} alt="girl" className="absolute right-[20px]" />
        </div>
      </div>

      {/* Problem Section */}
      <div className="absolute w-full h-[400px] left-[50%] top-[600px] transform -translate-x-[50%] bg-white flex flex-col items-center py-[15px]">
        <div className="flex flex-row justify-center items-center gap-[60px] w-[1018px] h-[188px]">
          {/* Left Column */}
          <div className="flex flex-col items-start py-[40px] gap-[80px] w-[394px] h-[188px]">
            <p className="w-[116px] h-[20px] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#E74040]">Problems trying</p>
            <h2 className="w-[394px] h-[96px] font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start gap-[49px] w-[529px] h-[40px]">
            <p className="w-[545px] h-[40px] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
<section className="bg-white py-16" style={{ top: "850px", position: "relative" }}>
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-6 items-center">
      {/* Metric 1 */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">15K</h1>
        <p className="text-sm md:text-base font-semibold text-gray-500">Happy Customers</p>
      </div>
      {/* Metric 2 */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">150K</h1>
        <p className="text-sm md:text-base font-semibold text-gray-500">Monthly Visitors</p>
      </div>
      {/* Metric 3 */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">15</h1>
        <p className="text-sm md:text-base font-semibold text-gray-500">Countries Worldwide</p>
      </div>
      {/* Metric 4 */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">100+</h1>
        <p className="text-sm md:text-base font-semibold text-gray-500">Top Partners</p> 
      </div>
    </div>
  </div>
</section>



  {/* Video Card Section */}
<section className="relative bg-white top-[800px] h-[600px]">
  <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 w-full max-w-[1050px] h-auto rounded-2xl shadow-lg">
    <div className="relative w-full h-[500px] sm:h-[400px] md:h-[540px] rounded-2xl shadow-lg bg-white">
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
        <button className="w-[60px] sm:w-[80px] md:w-[92.6px] h-[60px] sm:h-[80px] md:h-[92.6px] bg-[#23A6F0] rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-4 h-5 sm:w-5 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

{/* Team Section */}
<section className="relative bg-white top-[800px] h-[700px] flex flex-col justify-center items-center">
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
<section className="relative bg-white top-[800px] h-[400px] py-20">
<div className="w-[1000] text-center">
      <h5 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] font-montserrat py-5">Big Companies Are Here</h5>
      <h4 className="font-normal text-[14px] text-[#737373] leading-5 tracking-wide">
      Problems trying to resolve the conflict between 
      <span className="block">the two major realms of Classical physics: Newtonian mechanics </span></h4>
</div>

<div className="flex justify-center items-center py-20">
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
<section className="relative bg-white top-[800px] h-[600px]">
  <div className="absolute w-full h-[545px] top-[90px] flex flex-row items-center py-[112px]">
    {/* Left Column */}
    <div className="flex flex-col items-center gap-[35px] w-[1500px] h-[600px] bg-[#2A7CC7] px-[40px] py-[30px]">
    <div className="w-[500px]">
    <h1 className="font-bold text-[16px] leading-[80px] tracking-[0.2px] text-white">WORK WITH US</h1>
      <h5 className="font-semibold text-[50px] leading-[50px] tracking-[0.1px] text-white">Now Let’s grow Yours</h5>
      <h4 className="font-normal text-[14px] leading-[30px] tracking-[0.2px] text-white">
        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
        {/* CTA Button */}
      <div className="flex flex-row items-start gap-[10px] w-[195px] h-[52px] py-10">
        <div className="flex flex-col items-center px-[40px] py-[15px] gap-[10px] w-[195px] h-[52px] bg-[#23A6F0] rounded-[5px]">
          <span className="font-bold text-[14px] leading-[22px] text-center tracking-[0.2px] text-[#FFFFFF]">
            Button
          </span>
        </div>
      </div>
      </h4>
      </div>
      
    </div>

    {/* Right Column (Image without background) */}
    <div className="flex justify-center items-center w-[600px] h-[600px]">
      <Image src={pinkgirl} alt="girl" className="w-full h-full object-cover" />
    </div>
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

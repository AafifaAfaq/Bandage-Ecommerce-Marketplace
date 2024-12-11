import React from 'react';
import { Montserrat } from '@next/font/google';
import Image from 'next/image';
import vita from '@/app/assets/vita.png';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const VitaClassic = () => {
  return (
    <div className="relative w-full h-screen flex bg-[#23856D]">
      {/* Left Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white space-y-4 max-w-md text-left transform -translate-x-1/2 -translate-y-1/2 left-1/3 top-1/2 px-6 sm:left-1/4 sm:top-1/4 md:left-1/3 md:top-1/3">
        <p className="uppercase text-sm tracking-wide font-bold">Summer 2020</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-normal">
          Vita Classic Product
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-light">
          We know how large objects will act, We know how our objects will act, We know
        </p>
      {/* Price and Add to Cart */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
  {/* Price Section */}
  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
    $16.48
  </p>

  {/* Add to Cart Button */}
  <button className="bg-[#3AB666] text-white py-2 px-4 sm:px-6 rounded-md font-semibold hover:bg-green-600 transition-all">
    Add to Cart
  </button>
</div>

      </div>
      {/* Right Image */}
<div className="absolute bottom-0 right-6 w-[60%] sm:right-2 sm:w-[40%] md:w-[40%] lg:w-[60%] flex justify-center">
  <Image
    src={vita} // Ensure the file path is correct
    alt="Vita Classic Product"
    width={500}
    height={500}
    className="object-cover"
    priority
  />
</div>


    </div>
  );
};

export default VitaClassic;

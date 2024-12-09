import React from 'react';
import {Montserrat} from'@next/font/google';
import Image from 'next/image';
import img1 from '@/app/assets/img1.png';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
  });


const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#FAFAFA] md:row">
      {/* Left Content */}
      <div className="absolute center px-10 top-1/2 transform -translate-y-1/2 text-white space-y-4 max-w-md">
        <p className="uppercase text-sm tracking-wide">Summer 2020</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          New Collection
        </h1>
        <p className="text-sm md:text-lg font-light">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-600">
          Shop Now
        </button>
      </div>

      {/* Centered Image */}
      <div className="w-[100%]">
        <Image
          src={img1}
          alt="Shop"
          layout="responsive"
          width={1440}
          height={716}
          className="rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;

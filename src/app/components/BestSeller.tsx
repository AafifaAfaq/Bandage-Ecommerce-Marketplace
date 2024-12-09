import React from 'react'
import { Montserrat } from '@next/font/google';
import Image from "next/image";
import Vector2 from "@/app/assets/Vector2.png";
import product1 from "@/app/assets/product1.png";
import product2 from "@/app/assets/product2.png";
import product3 from "@/app/assets/product3.png";
import product4 from "@/app/assets/product4.png";
import product5 from "@/app/assets/product5.png";
import product6 from "@/app/assets/product6.png";
import product7 from "@/app/assets/product7.png";
import product8 from "@/app/assets/product8.png";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const BestSeller = () => {
  return (
    <div className="w-full h-auto bg-[#FAFAFA] py-12 px-8">
      {/* Title Section */}
      <div className="text-center mb-8">
        <p className="font-Montserrat text-[#737373] text-sm font-normal leading-5 tracking-[0.2px] mt-2">
          Featured Products
        </p>
        <h3 className="text-[#252B42] font-montserrat text-1xl font-bold leading-8 tracking-[0.1px]">
          BESTSELLER PRODUCTS
        </h3>
        <p className="font-montserrat text-[#737373] text-sm font-normal leading-5 tracking-[0.2px] mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Wrapper for Full Centering */}
      <div className="relative flex justify-center items-center w-full mb-20 py-20">
        <div className="w-7/12 flex justify-between gap-4">
          {/* Men */}
          <div className="relative group">
            <Image
              src={product1}
              alt="Men"
              width={510}
              height={700} // Increased height
              className="w-full h-full object-cover rounded-md"
            />
            <Image src={Vector2} alt="price"/>
          </div>

          {/* Women */}
          <div className="relative group">
            <Image
              src={product2}
              alt="Women"
              width={510}
              height={700} // Increased height
              className="w-full h-full object-cover rounded-md"
            />
            <Image src={Vector2} alt="price"/>
          </div>

          {/* Accessories */}
          <div className="relative group">
            <Image
              src={product3}
              alt="Accessories"
              width={510}
              height={700} // Increased height
              className="w-full h-full object-cover rounded-md"
            />
            <Image src={Vector2} alt="price"/>
          </div>

          {/* Kids */}
          <div className="relative group">
            <Image
              src={product4}
              alt="Kids"
              width={510}
              height={700} // Increased height
              className="w-full h-full object-cover rounded-md"
            />
          <Image src={Vector2} alt="price"/>
          </div>
        </div>
      </div>

      {/* Second Row with Centering */}
      <div className="relative flex justify-center items-center w-full mb-20 py-20">
        <div className="w-7/12 flex justify-between gap-4">
          {/* Men */}
          <div className="relative group">
            <Image
              src={product5}
              alt="Men"
              width={510}
              height={700} // Increased height
              className="w-full h-full object-cover rounded-md"
            />
           <Image src={Vector2} alt="price"/>
          </div>

          {/* Women */}
          <div className="relative group">
            <Image
              src={product6}
              alt="Women"
              width={510}
              height={700} // Increased height
              className="w-full h-full object-cover rounded-md"
            />
            <Image src={Vector2} alt="price"/>
          </div>

          {/* Accessories */}
          <div className="relative group">
            <Image
              src={product7}
              alt="Accessories"
              width={510}
              height={700} // Increased height
              className="w-full h-full object-cover rounded-md"
            />
           <Image src={Vector2} alt="price"/>
          </div>

          {/* Kids */}
          <div className="relative group">
            <Image
              src={product8}
              alt="Kids"
              width={510}
              height={700} // Increased height
              className="w-full h-full object-cover rounded-md"
            />
            <Image src={Vector2} alt="price"/>
          </div>
        </div>
      </div>
    </div>
  )
}

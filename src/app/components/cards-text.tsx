
import React from "react";
import Image from "next/image";
import colours from "@/app/assets/product-colors.png";

export default function CardText() {
  return (
    <div className="w-[350px] h-[100px] py-[5px] px-[25px] flex flex-col items-center justify-center gap-[10px] border border-gray-200 rounded-lg shadow-sm sm:w-[280px] sm:h-[220px] md:w-[300px] md:h-[240px]">
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42] sm:text-[18px] sm:leading-[26px] md:text-[20px] md:leading-[28px]">
        Graphic Design
      </h5>

      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD] line-through sm:text-[18px] sm:leading-[26px] md:text-[20px] md:leading-[28px]">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D] sm:text-[18px] sm:leading-[26px] md:text-[20px] md:leading-[28px]">
          $6.48
        </h5>
      </div>
      <div className="w-[82.2px] h-[16px] flex justify-center sm:w-[100px] sm:h-[20px] md:w-[120px] md:h-[24px]">
        <Image src={colours} alt="colours" />
      </div>
    </div>
  );
}

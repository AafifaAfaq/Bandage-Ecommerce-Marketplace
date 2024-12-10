import React from "react";
import {Montserrat} from'@next/font/google';
import Image from "next/image";
import menImg from "@/app/assets/img2.png";
import womenImg from "@/app/assets/img3.png";
import accessoriesImg from "@/app/assets/img4.png";
import kidsImg from "@/app/assets/img5.png";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const EditorSection = () => {
  return (
    <div className="w-full bg-[#FAFAFA] py-12 px-8">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-[#252B42] font-montserrat text-2xl font-bold leading-8 tracking-[0.1px]">
          EDITOR’S PICK
        </h2>
        <p className="font-montserrat text-[#737373] text-sm font-normal leading-5 tracking-[0.2px] mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

     {/* Wrapper for Full Centering */}
<div className=" relative flex justify-around items-center w-full h-50% lg:h-auto bg-[#FAFAFA]">
  <div className="w-12/12  lg:6/12  md:flex justify-center gap-4 ">
    {/* Men */}
    <div className="relative group">
      <Image
        src={menImg}
        alt="Men"
        width={510}
        height={500}
        className="w-12/12 h-full  object-cover rounded-md"
      />
      <div className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-semibold rounded-md shadow-md opacity-90 group-hover:opacity-100">
        MEN
      </div>
    </div>

    {/* Women */}
    <div className="relative group">
      <Image
        src={womenImg}
        alt="Women"
        width={510}
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-semibold rounded-md shadow-md opacity-90 group-hover:opacity-100">
        WOMEN
      </div>
    </div>

    {/* Accessories & Kids */}
    <div className="flex flex-col gap-3">
      {/* Accessories */}
      <div className="relative group">
        <Image
          src={accessoriesImg}
          alt="Accessories"
          width={400}
          className="w-full h-full object-cover rounded-md"

        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-semibold rounded-md shadow-md opacity-90 group-hover:opacity-100">
          ACCESSORIES
        </div>
      </div>

      {/* Kids */}
      <div className="relative group">
        <Image
          src={kidsImg}
          alt="Kids"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-1 text-sm font-semibold rounded-md shadow-md opacity-90 group-hover:opacity-100">
          KIDS
        </div>
      </div>
    </div>
  </div>
</div>


        
        
      </div>

  );
};

export default EditorSection;

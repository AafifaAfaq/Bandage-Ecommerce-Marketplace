import Image from "next/image";
import NavBar2 from "../components/NavBar2";
import { GreenHeader } from "../components/GreenHeader";
import { RiArrowDropDownLine } from "react-icons/ri";
import cat1 from "@/app/assets/category1.jpg";
import cat2 from "@/app/assets/category2.jpg";
import cat3 from "@/app/assets/category3.jpg";
import cat4 from "@/app/assets/category4.jpg";
import cat5 from "@/app/assets/category5.jpg";
import v1 from "@/app/assets/v1.png";
import v2 from "@/app/assets/v2.png";
import v3 from "@/app/assets/v3.png";
import v4 from "@/app/assets/v4.png";
import v5 from "@/app/assets/v5.png";
import v6 from "@/app/assets/v6.png";
import product1 from "@/app/assets/product1.png";
import product2 from "@/app/assets/product2.png";
import product3 from "@/app/assets/product3.png";
import product4 from "@/app/assets/product4.png";
import product5 from "@/app/assets/product5.png";
import product6 from "@/app/assets/product6.png";
import product7 from "@/app/assets/product7.png";
import product8 from "@/app/assets/product8.png";
import product9 from "@/app/assets/product9.jpg";
import product10 from "@/app/assets/product10.jpg";
import product11 from "@/app/assets/product11.jpg";
import product12 from "@/app/assets/product12.jpg";
import Vector2 from "@/app/assets/Vector2.png";
import CardText from "../components/cards-text";
import drop from "@/app/assets/Vector13.png";
import frame from "@/app/assets/Frame 31.png";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <div>
      <GreenHeader />

      {/* Shop Section */}
<div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-full h-[300px] py-[24px] flex flex-col items-center sm:px-4 md:px-8">
  <div className="w-full h-[44px] flex flex-col sm:flex-row justify-between items-center py-[40px] sm:py-[24px]">
    {/* Shop Title */}
    <div className="w-full h-[32px] flex justify-center sm:justify-start items-center mb-[8px]">
      <h2 className="font-Montserrat font-bold text-[24px] sm:text-[20px] md:text-[28px] leading-[32px] text-[#252B42] hidden md:block lg:block">
        Shop
      </h2>
    </div>
    {/* Breadcrumb */}
    <div className="w-full h-[44px] flex justify-center sm:justify-end items-center gap-[5px]">
      <div className="flex items-center gap-[15px]">
        <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42] hidden md:block lg:block">
          Home
        </div>
        <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42] flex items-center">
          Shop
          <RiArrowDropDownLine className="text-xl ml-2" />
        </h6>
      </div>
    </div>
  </div>
</div>


      {/* Categories Section */}
<div className="w-full h-auto bg-[#FAFAFA] py-12">
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="flex flex-wrap gap-[15px] justify-center">
      {[cat1, cat2, cat3, cat4, cat5].map((category, index) => (
        <Image key={index} src={category} alt={`Category ${index + 1}`} className="w-full md:w-[200px] lg:w-[220px] h-auto object-cover" />
      ))}
    </div>
  </div>
</div>

{/* Popularity Section */}
<div className="w-full h-auto bg-white py-6">
  <div className="max-w-screen-xl mx-auto px-4">
    {/* Main Container */}
    <div className="flex flex-wrap sm:flex-col md:flex-row justify-between items-center gap-4">
      {/* Showing Results */}
      <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373] py-3 text-center sm:text-left">
        Showing all 12 results
      </div>

      {/* Views & Filter Section */}
      <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-between">
        {/* Views */}
        <div className="flex items-center gap-4">
          <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
            Views:
          </h6>
          <Image src={frame} alt="frame" className="h-6 w-6" />
        </div>

        {/* Popularity & Filter Buttons */}
        <div className="flex flex-col sm:flex-row md:flex-row gap-4 items-center">
          <button className="w-[141px] h-[50px] border border-[#DDDDDD] flex items-center justify-center relative">
            <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
              Popularity
            </p>
            <Image
              src={drop}
              alt="drop"
              className="absolute top-[10px] left-[10px] w-4 h-4"
            />
          </button>
          <button className="w-[94px] h-[50px] px-[20px] py-[10px] bg-[#23A6F0] flex justify-center items-center">
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
              Filter
            </h6>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


{/* Clients Section */}
<section className="relative bg-white py-10">
  <div className="flex justify-center items-center">
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
      <div className="flex flex-col items-center w-[120px] h-[120px]">
        <Image src={v1} alt="Logo 1" width={120} height={120} />
      </div>
      <div className="flex flex-col items-center w-[150px] h-[150px]">
        <Image src={v2} alt="Logo 2" width={150} height={150} />
      </div>
      <div className="flex flex-col items-center w-[180px] h-[180px]">
        <Image src={v3} alt="Logo 3" width={180} height={180} />
      </div>
      <div className="flex flex-col items-center w-[130px] h-[130px]">
        <Image src={v4} alt="Logo 4" width={130} height={130} />
      </div>
      <div className="flex flex-col items-center w-[140px] h-[140px]">
        <Image src={v5} alt="Logo 5" width={140} height={140} />
      </div>
      <div className="flex flex-col items-center w-[160px] h-[160px]">
        <Image src={v6} alt="Logo 6" width={160} height={160} />
      </div>
    </div>
  </div>
</section>


      <Footer />

      {/* Product Section */}
<div className="grid place-items-center min-h-screen bg-[#FAFAFA] px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-[1124px] py-[48px] gap-[48px]">
    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
      {[product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12].map(
        (pic, index) => (
          <div key={index} className="flex flex-col items-center mx-auto mb-6">
            {/* Image Container */}
            <div className="relative w-full ">
              <Image 
                src={pic} 
                alt={`Product ${index + 1}`} 
                className="w-full h-auto"
              />
            </div>
            <CardText />
          </div>
        )
      )}
    </div>
  </div>
</div>



          {/* Pagination Buttons */}
<div className="w-full flex justify-center items-center py-4">
  <div
    className="max-w-full w-auto rounded-[6.73px] border-[1.35px] border-[#BDBDBD] p-4"
    style={{ boxShadow: "0px 2px 4px 0px #0000001A" }}
  >
    {/* Button Group */}
    <div className="flex flex-wrap items-center justify-center gap-2">
      {/* First Button */}
      <div className="bg-[#F3F3F3] text-[#737373] font-extrabold px-4 py-2 border border-[#d5d5d5] rounded-md shadow-md cursor-pointer">
        First
      </div>
      {/* Page Number Buttons */}
      <div className="bg-white text-[#1D4ED8] px-4 py-2 border border-[#d5d5d5] shadow-md cursor-pointer hidden sm:hidden md:block lg:block">
        1
      </div>
      <div className="bg-[#1D4ED8] text-white px-4 py-2 border border-[#d5d5d5] shadow-md cursor-pointer hidden  sm:hidden md:block lg:block">
        2
      </div>
      <div className="bg-white text-[#1D4ED8] px-4 py-2 border border-[#d5d5d5] shadow-md cursor-pointer hidden  sm:hidden md:block lg:block">
        3
      </div>
      {/* Next Button */}
      <div className="bg-white text-[#1D4ED8] px-4 py-2 border border-[#d5d5d5] rounded-md shadow-md cursor-pointer ">
        Next
      </div>
    </div>
  </div>
</div>
</div>
     
  );
};

export default Shop;

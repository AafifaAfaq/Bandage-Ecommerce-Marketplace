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
import drop from "@/app/assets/Vector13.png";
import frame from "@/app/assets/Frame 31.png";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <div>
      <GreenHeader />

      {/* Shop Section */}
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-full h-[300px] py-[24px] flex flex-col items-center">
        <div className="w-full h-[44px] flex gap-[1000px] items-center py-[40px]">
          {/* Shop Title */}
          <div className="w-full h-[32px] flex justify-center items-center mb-[8px]">
            <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
              Shop
            </h2>
          </div>
          {/* Breadcrumb */}
          <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
            <div className="flex items-center gap-[15px]">
              <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </div>
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42] flex ">
                Shop
                <RiArrowDropDownLine className="text-xl" />
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full h-[600px] bg-[#FAFAFA]">
        <div className="w-[1088px] h-[271px] absolute top-[200px] left-[176px] pb-[48px]">
          <div className="w-[1088px] h-[223px] flex gap-[15px]">
            {[cat1, cat2, cat3, cat4, cat5].map((category, index) => (
              <Image key={index} src={category} alt={`Category ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Popularity Section */}
      <div className="w-[1440px] h-[98px] absolute justify-center top-[500px]">
        <div className="w-[1050px] h-[98px] absolute left-[195px] py-[24px] flex gap-[80px]">
          <div className="w-[1040px] h-[50px] flex justify-between">
            <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373] py-3">
              Showing all 12 results
            </div>
          </div>
          <div className="w-[177px] h-[46px] px-[1px] flex gap-[15px] justify-center">
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373] py-3">
              Views:
            </h6>
            <Image src={frame} alt="frame" className="flex justify-center" />
          </div>
          <div className="w-[252px] px-[1px] flex gap-[15px]">
            <button className="w-[141px] h-[50px] border border-[#DDDDDD]">
              <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
                Popularity
              </p>
              <Image
                src={drop}
                alt="drop"
                className="absolute top-[10px] left-[10px]"
              />
            </button>
            <button className="w-[94px] h-[50px] px-[20px] py-[10px] flex gap-[10px] bg-[#23A6F0]">
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                Filter
              </h6>
            </button>
          </div>
        </div>
      </div>
{/* Clients Section */}
<section className="relative bg-white h-[400px] py-20">
  <div className="flex justify-center items-center py-20">
    <div className="flex justify-center gap-20 items-center">
      <div className="flex flex-col items-center  justify-evenly w-[120px] h-[120px]">
        <Image src={v1} alt="Logo 1" width={200} height={200} />
      </div>
      <div className="flex flex-col items-center w-[150px] h-[150px]">
        <Image src={v2} alt="Logo 2" width={300} height={100} />
      </div>
      <div className="flex flex-col items-center w-[180px] h-[180px]">
        <Image src={v3} alt="Logo 3" width={180} height={200} />
      </div>
      <div className="flex flex-col items-center w-[130px] h-[130px]">
        <Image src={v4} alt="Logo 4" width={200} height={200} />
      </div>
      <div className="flex flex-col items-center w-[140px] h-[140px]">
        <Image src={v5} alt="Logo 5" width={200} height={200} />
      </div>
      <div className="flex flex-col items-center w-[160px] h-[160px]">
        <Image src={v6} alt="Logo 6" width={200} height={200} />
      </div>
    </div>
  </div>
</section>

      <Footer />

      {/* Product Section */}
<div className="grid place-items-center min-h-screen">
  <div className="w-[1124px] h-auto py-[48px] gap-[48px]">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
      {[product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12].map(
        (pic, index) => (
          <div key={index} className="w-[238px] mx-auto mb-[30px]">
            <div className="w-full h-full flex flex-col items-center mb-[50px]">
              <div className="w-[239px] h-[427px]">
                <Image src={pic} alt={`Product ${index + 1}`} />
                <Image src={Vector2} alt="Price" />
              </div>
            </div>
          </div>
        )
      )}
    </div>
 


          {/* Pagination Buttons */}
          <div
            className="w-[313px] h-[74px] rounded-[6.73px] absolute left-[700px] border-[1.35px] border-[#BDBDBD]"
            style={{ boxShadow: "0px 2px 4px 0px #0000001A" }}
          >
            <div className="flex items-center justify-center space-x-2">
              <div className="bg-[#F3F3F3] text-[#737373] font-extrabold py-6 px-8 border border-[#d5d5d5] rounded-l-md shadow-md cursor-pointer">
                First
              </div>
              <div className="bg-white text-[#1D4ED8] py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
                1
              </div>
              <div className="bg-[#1D4ED8] text-white py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
                2
              </div>
              <div className="bg-white text-[#1D4ED8] py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
                3
              </div>
              <div className="bg-white text-[#1D4ED8] py-6 px-8 border border-[#d5d5d5] rounded-r-md shadow-md cursor-pointer">
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

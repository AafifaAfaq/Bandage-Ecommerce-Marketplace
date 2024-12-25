import Image from "next/image";
import pic1 from "@/app/assets/pic1.png";
import pic2 from "@/app/assets/product-cover-5 (21).png";
import pic3 from "@/app/assets/product-cover-5 (22).png";
import pic4 from "@/app/assets/product-cover-5 (23).png";
import pic5 from "@/app/assets/product-cover-5 (24).png";
import pic6 from "@/app/assets/product-cover-5 (26).png";
import v1 from "@/app/assets/v1.png";
import v2 from "@/app/assets/v2.png";
import v3 from "@/app/assets/v3.png";
import v4 from "@/app/assets/v4.png";
import v5 from "@/app/assets/v5.png";
import v6 from "@/app/assets/v6.png";
import CardT2 from "./cards-text-2";

export default function Bestseller() {
    return (
      <div className="relative bg-[#FAFAFA] w-full">
        <div className="max-w-[1440px] h-auto mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1124px] py-[24px] sm:py-[32px] lg:py-[48px] flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px] mx-auto">
            {/* Heading */}
            <div className="flex gap-[10px]">
              <h3 className="font-Montserrat font-bold text-[20px] sm:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[32px] tracking-[0.2px] text-[#252B42]">
                BESTSELLER PRODUCTS
              </h3>
            </div>
            {/* Line under the heading */}
            <div className="w-full h-[2px] bg-[#dbdbdb]"></div>
            {/* Products Section */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[15px] sm:gap-[20px] lg:gap-[30px]">
              {[pic6, pic2, pic3, pic4, pic5, pic1, pic6, pic2].map((image, index) => (
                <div
                  key={index}
                  className="w-full h-auto flex flex-col bg-[#FFFFFF] shadow-lg rounded-md overflow-hidden"
                >
                  <div className="flex-grow">
                    <Image
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover max-h-[200px] sm:max-h-[250px] lg:max-h-[300px]"
                    />
                    <CardT2 />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Clients Section */}
        <section className="relative bg-white py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
              {[v1, v2, v3, v4, v5, v6].map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px]"
                >
                  <Image src={logo} alt={`Logo ${index + 1}`} width={150} height={150} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  

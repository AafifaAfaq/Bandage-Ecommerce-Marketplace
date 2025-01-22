/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Montserrat } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const products = [
  { id: 1, src: product1, alt: "Women", title: "Women's Classic Top", description: "Elegant and chic clothing for women." },
  { id: 2, src: product2, alt: "Men", title: "Men's White T-Shirt", description: "Stylish and trendy clothing for men." },
  { id: 3, src: product3, alt: "Kids", title: "Elegant Shoes", description: "Comfortable and stylish shoes." },
  { id: 4, src: product4, alt: "Accessories", title: "Stylish Jacket", description: "Stylish and trendy outfit." },
  { id: 5, src: product5, alt: "Men", title: "Gray Coat", description: "Classic and warm coat." },
  { id: 6, src: product6, alt: "Women", title: "Yellow Top", description: "Elegant and chic top." },
  { id: 7, src: product7, alt: "Accessories", title: "Cool Jacket", description: "Enhance your look with cool jacket." },
  { id: 8, src: product8, alt: "Kids", title: "Black and White Printed Shirt", description: "Bright and vibrant outfits for kids." },
  { id: 9, src: product9, alt: "Men", title: "Waterproof Jacket", description: "Stylish and waterproof jacket." },
  { id: 10, src: product10, alt: "Men", title: "Hoodie", description: "Decorate your look with a hoodie." },
  { id: 11, src: product11, alt: "Men", title: "Summer-Wear T-Shirt", description: "Comfortable and elegant t-shirt." },
  { id: 12, src: product12, alt: "Women", title: "Brown Jacket", description: "Dash your style with a brown jacket." },
];

export const BestSellerShop = () => {
  return (
    <div className="w-full bg-[#FAFAFA] py-12 px-6">
      {/* BESTSELLER PRODUCTS */}
      <div className="text-center mb-8">
        <p className="font-Montserrat text-[#737373] text-sm font-normal leading-5 tracking-[0.2px] mt-2">
          Featured Products
        </p>
        <h3 className="text-[#252B42] font-Montserrat text-2xl font-bold leading-8 tracking-[0.1px]">
          BESTSELLER PRODUCTS
        </h3>
        <p className="font-Montserrat text-[#737373] text-sm font-normal leading-5 tracking-[0.2px] mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/sellershop/${product.id}`} passHref>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer border border-gray-200 shadow-sm hover:shadow-md">
              {/* Product Image */}
              <Image
                src={product.src}
                alt={product.alt}
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-t-lg"
              />

              {/* Product Details */}
              <div className="p-4 flex flex-col items-center">
                <h5 className="font-Montserrat font-bold text-lg text-[#252B42] text-center">
                  {product.title}
                </h5>
                <div className="flex justify-center gap-3 mt-2">
                  <h5 className="font-Montserrat font-bold text-sm text-[#BDBDBD] line-through">
                    $16.48
                  </h5>
                  <h5 className="font-Montserrat font-bold text-sm text-[#23856D]">
                    $6.48
                  </h5>
                </div>

                {/* Color Options */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="h-5 w-5 rounded-full bg-blue-500 border border-gray-300"></span>
                  <span className="h-5 w-5 rounded-full bg-green-500 border border-gray-300"></span>
                  <span className="h-5 w-5 rounded-full bg-orange-500 border border-gray-300"></span>
                  <span className="h-5 w-5 rounded-full bg-black border border-gray-300"></span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

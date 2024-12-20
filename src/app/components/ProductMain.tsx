import React from 'react';
import Image from "next/image";
import p1 from "@/app/assets/product-01.jpg";
import p2 from "@/app/assets/product-02.jpg";
import p3 from "@/app/assets/product-03.jpg";
import p4 from "@/app/assets/product-04.jpg";
import p5 from "@/app/assets/product-05.jpg";

const ProductMain = () => {
  return (
    <section className="w-full px-4 py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
        {/* Large Image */}
        <div className="sm:col-span-1">
          <Image
            src={p1}
            alt="Large Product"
            className="w-full h-[500px] sm:h-[400px] md:h-[600px] rounded-md object-cover"
          />
        </div>

        {/* Smaller Images */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-2 md:col-span-2">
          <div>
            <Image
              src={p2}
              alt="Product 2"
              className="w-full h-[200px] sm:h-[300px] rounded-md object-cover"
            />
          </div>
          <div>
            <Image
              src={p3}
              alt="Product 3"
              className="w-full h-[200px] sm:h-[300px] rounded-md object-cover"
            />
          </div>
          <div>
            <Image
              src={p4}
              alt="Product 4"
              className="w-full h-[200px] sm:h-[300px] rounded-md object-cover"
            />
          </div>
          <div>
            <Image
              src={p5}
              alt="Product 5"
              className="w-full h-[200px] sm:h-[300px] rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMain;

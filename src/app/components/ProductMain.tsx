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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Large Image on the Left */}
        <div className="md:col-span-1">
          <Image
            src={p1}
            alt="Large Product"
            className="w-full h-[1000px] rounded-md object-cover"
          />
        </div>

        {/* Smaller Images on the Right */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <div>
            <Image
              src={p2}
              alt="Product 2"
              className="w-full h-[500px] rounded-md object-cover"
            />
          </div>
          <div>
            <Image
              src={p3}
              alt="Product 3"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
          <div>
            <Image
              src={p4}
              alt="Product 4"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
          <div>
            <Image
              src={p5}
              alt="Product 5"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMain;

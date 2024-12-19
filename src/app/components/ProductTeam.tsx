import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import p6 from "@/app/assets/product-06.jpg";
import p7 from "@/app/assets/product-07.jpg";
import p8 from "@/app/assets/product-08.jpg";
import p9 from "@/app/assets/product-09.jpg";
import p10 from "@/app/assets/product-10.jpg";
import p11 from "@/app/assets/product-11.jpg";
import t1 from  "@/app/assets/t1.png";
import t2 from  "@/app/assets/t2.png";
import t3 from  "@/app/assets/t3.png";

const ProductTeam = () => {
  const teamMembers = [
    { id: 1, image: p9, name: 'Alice' },
    { id: 2, image: p10, name: 'Bob' },
    { id: 3, image: p11, name: 'Charlie' },
    { id: 4, image: t3, name: 'Diana' },
    { id: 5, image: p6, name: 'Edward' },
    { id: 6, image: t1, name: 'Fiona' },
    { id: 7, image: t2, name: 'George' },
    { id: 8, image: p7, name: 'Hannah' },
    { id: 9, image: p8, name: 'Ivy' },
  ];

  return (
    <section className="px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-[#252B42]">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover"
              width={300}
              height={240}
            />
            <div className="text-center p-4">
              <h5 className="text-lg font-bold">{member.name}</h5>
              <div className="flex justify-center gap-4 mt-3">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductTeam;

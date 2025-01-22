"use client"
import Image from "next/image";
import pic2 from "@/app/assets/product-cover-5 (21).png";
import pic3 from "@/app/assets/product-cover-5 (22).png";
import pic4 from "@/app/assets/product-cover-5 (23).png";
import pic5 from "@/app/assets/product-cover-5 (24).png";
import pic6 from "@/app/assets/product-cover-5 (26).png";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import { NavBar } from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const products = [
  { 
    id: 1, 
    image: pic6, 
    title: "Product 1", 
    description: "A high-quality product designed to meet your needs and expectations. It offers excellent durability, sleek design, and unmatched performance.",
    price: 49.99,
    tags: ["Durable", "Sleek", "High-Quality"]
  },
  { 
    id: 2, 
    image: pic2, 
    title: "Product 2", 
    description: "This product offers great features and excellent value for money. Its modern design and advanced functionality make it a top choice.",
    price: 59.99,
    tags: ["Modern", "Functional", "Value"]
  },
  { 
    id: 3, 
    image: pic3, 
    title: "Product 3", 
    description: "Perfect for daily use and crafted with precision. Experience the convenience and reliability you deserve.",
    price: 29.99,
    tags: ["Daily Use", "Reliable", "Convenient"]
  },
  { 
    id: 4, 
    image: pic4, 
    title: "Product 4", 
    description: "Perfect for daily use and crafted with precision. Experience the convenience and reliability you deserve.",
    price: 29.99,
    tags: ["Daily Use", "Reliable", "Convenient"]
  },
  { 
    id: 5, 
    image: pic5, 
    title: "Product 5", 
    description: "Perfect for daily use and crafted with precision. Experience the convenience and reliability you deserve.",
    price: 29.99,
    tags: ["Daily Use", "Reliable", "Convenient"]
  },
  { 
    id: 6, 
    image: pic3, 
    title: "Product 6", 
    description: "Perfect for daily use and crafted with precision. Experience the convenience and reliability you deserve.",
    price: 29.99,
    tags: ["Daily Use", "Reliable", "Convenient"]
  },
  { 
    id: 7, 
    image: pic6, 
    title: "Product 7", 
    description: "A high-quality product designed to meet your needs and expectations. It offers excellent durability, sleek design, and unmatched performance.",
    price: 49.99,
    tags: ["Durable", "Sleek", "High-Quality"]
  },
  { 
    id: 8, 
    image: pic2, 
    title: "Product 8", 
    description: "This product offers great features and excellent value for money. Its modern design and advanced functionality make it a top choice.",
    price: 59.99,
    tags: ["Modern", "Functional", "Value"]
  },

];

interface Params{
  id: string;
}
export default function ProductDetail({ params }: { params: Params }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  if (!product) return <p>Product not found</p>;

  return (
    <>
      <NavBar />
      <article className="bg-gradient-to-br from-purple-50 to-indigo-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat">
          {/* Left Section - Image */}
          <div className="flex-1">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.title}
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-800">{product.title}</h1>
            <div className="flex items-center mt-2">
              <span className="flex items-center text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-300"
                >
                  <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                </svg>
              </span>
              <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
            </div>

            {/* Price and Availability */}
            <p className="text-xl font-Montserrat font-semibold text-black mt-4">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Availability: <span className="text-[#23A6F0] font-medium">In Stock</span>
            </p>

            {/* Description */}
            <p className="text-gray-700 mt-4">{product.description}</p>

            {/* Tags Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-1">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 hover:bg-indigo-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600 w-full sm:w-auto">
                Select Options
              </button>
              <div className="flex items-center justify-center gap-4 w-full sm:w-auto">
                <CiHeart />
                <FiShoppingCart />
                <FaEye />
              </div>
            </div>
            
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

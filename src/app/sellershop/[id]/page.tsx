/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image";
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

import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import { NavBar } from "@/app/components/NavBar";
import Bestseller from "@/app/components/BestSellerProduct";
import { useCart } from "@/app/ContextApi/CartProvider";

const products = [
  {
    id: 1,
    src: product2,
    title: "Men's White T-Shirt",
    description: "Stylish and trendy clothing for men.",
    price: 49.99,
    tags: ["Trendy", "Comfortable", "Stylish"],
  },
  {
    id: 2,
    src: product1,
    title: "Women's Classic Top",
    description: "Elegant and chic clothing for women.",
    price: 59.99,
    tags: ["Elegant", "Chic", "Exclusive"],
  },
  {
    id: 3,
    src: product3,
    title: "Elegant Shoes",
    description: "Comfortable and stylish shoes.",
    price: 19.99,
    tags: ["Comfortable", "Stylish", "Vibrant"],
  },
  {
    id: 4,
    src: product4,
    title: "Stylish Jacket",
    description: "Stylish and trendy outfit.",
    price: 29.99,
    tags: ["Stylish", "Trendy", "Casual"],
  },
  {
    id: 5,
    src: product5,
    title: "Gray Coat",
    description: "Classic and warm coat.",
    price: 39.99,
    tags: ["Classic", "Warm", "Casual"],
  },
  {
    id: 6,
    src: product6,
    title: "Yellow Top",
    description: "Elegant and chic top.",
    price: 49.99,
    tags: ["Elegant", "Chic", "Exclusive"],
  },
  {
    id: 7,
    src: product7,
    title: "Cool Jacket",
    description: "Enhance your look with cool jacket.",
    price: 14.99,
    tags: ["Charming", "Unique", "Affordable"],
  },
  {
    id: 8,
    src: product8,
    title: "Black and White Printed Shirt",
    description: "Bright and vibrant outfits for kids.",
    price: 24.99,
    tags: ["Bright", "Vibrant", "Kids"],
  },
  {
    id: 9,
    src: product9,
    alt: "Men",
    title: "Waterproof Jacket",
    description: "Stylish and waterproof jacket.",
    price: 44.99,
    tags: ["Stylish", "Waterproof", "Casual"],
  },
  {
    id: 10,
    src: product10,
    alt: "Men",
    title: "Hoodie",
    description: "Decorate your look with a hoodie.",
    price: 54.99,
    tags: ["Charming", "Unique", "Affordable"],
  },
  {
    id: 11,
    src: product11,
    alt: "Men",
    title: "Summer-Wear T-Shirt",
    description: "Comfortable and elegant t-shirt.",
    price: 14.99,
    tags: ["Comfortable", "Elegant", "Vibrant"],
  },
  {
    id: 12,
    src: product12,
    alt: "Women",
    title: "Brown Jacket",
    description: "Dash your style with a brown jacket.",
    price: 24.99,
    tags: ["Stylish", "Charming", "Casual"],
  },
];

interface Params {
  id: string;
}

export default function ProductDetail({ params }: { params: Params }) {
   const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(params.id));
  if (!product) return <p>Product not found</p>;

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center font-Montserrat">
          {/* Left Section - Image */}
          <div className="flex-1">
            <Image
              src={product.src}
              alt={product.title}
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>

          {/* Right Section - Product Details */}
          <div className="flex-1">
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

            <h1 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h1>
            <p className="text-lg text-gray-500 mt-2">{product.description}</p>
            <p className="text-xl font-semibold text-black mt-4">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Availability:{" "}
              <span className="text-green-600 font-medium">In Stock</span>
            </p>

            {/* Tags */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium hover:bg-indigo-200 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div className="flex items-center gap-2 mt-4">
              <span className="h-5 w-5 rounded-full bg-blue-500 border border-gray-300"></span>
              <span className="h-5 w-5 rounded-full bg-green-500 border border-gray-300"></span>
              <span className="h-5 w-5 rounded-full bg-orange-500 border border-gray-300"></span>
              <span className="h-5 w-5 rounded-full bg-black border border-gray-300"></span>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">
                Select Options
              </button>

              <div className="flex items-center justify-center gap-4 w-full sm:w-auto">
                <CiHeart
                  size={24}
                  className="cursor-pointer hover:text-red-500"
                />
                <FiShoppingCart
                  size={24}
                  className="cursor-pointer hover:text-green-500"
                />
                <FaEye
                  size={24}
                  className="cursor-pointer hover:text-blue-500"
                />
              </div>
            </div>
            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto mt-6"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Bestseller />
      <Footer />
    </>
  );
}

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import { NavBar } from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Bestseller from "@/app/components/BestSellerProduct";


export const revalidate = 60; // Revalidation time in seconds

// `generateStaticParams` generates the paths for dynamic routes
export async function generateStaticParams() {
  const query = `*[_type == 'product']{ "slug": slug.current }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item: { slug: string }) => item.slug);

  return slugRoutes.map((slug: string) => ({
    slug,
  }));
}

// The page function for rendering a single product
export default async function ProductPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type == 'product' && slug.current == $slug][0]{
    title, price, description, "imageUrl": productImage.asset->url, tags, content
  }`;
  const product = await client.fetch(query, { slug });

  if (!product) {
    notFound();
  }

  return (
    <>
    <NavBar />
    <article className="bg-gradient-to-br  from-purple-50 to-indigo-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat">
        {/* Left Section - Image Slider */}
        <div className="flex-1">
          <div className="relative">
            {/* Main Image */}
            <Image
              src={
                urlFor(product.imageUrl).width(1200).height(700).url() ||
                "/placeholder.svg"
              }
              alt={product.title}
              className="rounded-lg"
              width={600}
              height={400}
            />
            {/* Arrows */}
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex mt-4 gap-4">
            <Image
              src={urlFor(product.imageUrl).width(200).height(200).url()}
              alt="Thumbnail 1"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
            <Image
              src={urlFor(product.imageUrl).width(200).height(200).url()}
              alt="Thumbnail 2"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800">
            {product.title}
          </h1>
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
            Availability:{" "}
            <span className="text-[#23A6F0] font-medium">In Stock</span>
          </p>

          {/* Description */}
          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Tags Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-1">
              {product.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 hover:bg-indigo-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
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
    <Bestseller />
    <Footer />
    </>
  );
}

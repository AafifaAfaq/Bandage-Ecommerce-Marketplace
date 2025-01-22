"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { useCart } from "../ContextApi/CartProvider";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
  slug: { current: string };
}

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  // Fetch 8 products from the Sanity database
  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"][0..7] {  // Fetch the first 8 products
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags,
          slug
        }
      `;
      const data = await client.fetch<Product[]>(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle adding a product to the cart
  const handleAddToCart = (product: Product) => {
    addToCart({
      ...product,
      quantity: 1,
      name: product.title,
      cartid: product._id,
    });
    alert(`${product.title} has been added to the cart!`);
  };

  return (
    <>
      <div className="py-10">
        <h2 className="text-center text-slate-800 font-bold text-2xl mb-6 py-2">
          TOP SELLING HOME DECORATION PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Link for Dynamic Route */}
              <Link href={`/Products/${product.slug.current}`}>
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="w-full h-60 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold text-slate-700">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-bold text-green-600">
                      ${product.price}
                    </p>
                    {product.discountPercentage > 0 && (
                      <span className="bg-red-100 text-red-500 px-2 py-1 rounded-md text-sm">
                        {product.discountPercentage}% off
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div className="text-center mt-8">
          {/* Link to Shop Page */}
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-blue-600 text-white py-3 px-8 rounded-lg font-bold hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            <span className="mr-2">View More</span>
            <FaArrowAltCircleRight className="text-lg" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

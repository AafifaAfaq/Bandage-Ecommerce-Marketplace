"use client";

import React, { useState, useEffect } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../ContextApi/CartProvider";

const client = sanityClient({
  projectId: "oy4usune",
  dataset: "production",
  useCdn: true,
});

interface Product {
  _id: number;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
  isNew: boolean;
  slug: { current: string };
}

const ProductByTag: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isNewFilter, setIsNewFilter] = useState<boolean | null>(null);

  const { addToCart } = useCart();

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags,
          isNew,
          slug
        }
      `;
      const data = await client.fetch<Product[]>(query);
      setProducts(data);

      // Extract unique tags
      const allTags = data.flatMap((product) => product.tags);
      const uniqueTags = Array.from(new Set(allTags));
      setTags(uniqueTags);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = products;

    // Filter by tag
    if (selectedTag) {
      updatedProducts = updatedProducts.filter((product) =>
        product.tags.includes(selectedTag)
      );
    }

    // Filter by "New" badge
    if (isNewFilter !== null) {
      updatedProducts = updatedProducts.filter((product) => product.isNew === isNewFilter);
    }

    setFilteredProducts(updatedProducts);
  }, [selectedTag, isNewFilter, products]);

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
    <div className="py-20 bg-gray-50">
      <h2 className="text-center text-gray-800 font-extrabold text-3xl mb-10">
        Explore Products by Tags and New Arrivals
      </h2>

      {/* Tag Filter (Dropdown) */}
      <div className="flex justify-center mb-10">
        <label htmlFor="tag-select" className="mr-4 text-gray-700 font-medium">
          Filter by Tag:
        </label>
        <select
          id="tag-select"
          className="px-6 py-2 rounded-full font-medium text-sm shadow-md bg-gray-200 text-gray-700"
          onChange={(e) => setSelectedTag(e.target.value)}
          value={selectedTag || ""}
        >
          <option value="">All</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* "New" Badge Filter */}
      <div className="flex justify-center mb-10">
        <button
          className={`px-6 py-2 rounded-full font-medium text-sm shadow-md ${
            isNewFilter === null
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
          } transition-colors duration-300`}
          onClick={() => setIsNewFilter(null)}
        >
          All Products
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium text-sm shadow-md ${
            isNewFilter === true
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
          } transition-colors duration-300`}
          onClick={() => setIsNewFilter(true)}
        >
          New Arrivals
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium text-sm shadow-md ${
            isNewFilter === false
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
          } transition-colors duration-300`}
          onClick={() => setIsNewFilter(false)}
        >
          Older Products
        </button>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            {/* Dynamic Link */}
            <Link href={`/Products/${product.slug.current}`}>
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-60 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-bold text-green-600">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <span className="bg-red-100 text-red-500 px-2 py-1 rounded-md text-xs">
                      {product.discountPercentage}% off
                    </span>
                  )}
                </div>
              </div>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-full font-bold text-sm shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-12">
          No products found for the selected filters.
        </p>
      )}
    </div>
  );
};

export default ProductByTag;

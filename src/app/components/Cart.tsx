"use client";

import Link from "next/link";
import { useCart } from "../ContextApi/CartProvider";
import Image from "next/image";
import { NavBar } from "./NavBar";
import { ShoppingCart } from "lucide-react";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const total: number = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <NavBar />
      <section>
        <div className="p-8 bg-gray-50 min-h-screen">
          <h1 className="text-3xl font-extrabold mb-8 text-gray-900 text-center tracking-tight">
            Your Shopping Cart 🛒
          </h1>
          {cart.length === 0 ? (
            <div className="text-center mt-20">
              <p className="text-xl text-gray-500">Your cart is empty.</p>
              <Link
                href="/"
                className="text-blue-600 underline mt-6 inline-block text-lg font-medium hover:text-blue-800 transition duration-200"
              >
                Go back to shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-10">
              {/* Desktop Table */}
              <div className="hidden md:block shadow-lg rounded-xl overflow-hidden border border-gray-300">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-indigo-200 text-gray-900 text-center">
                      <th className="py-4 px-6 border-b text-sm font-semibold uppercase tracking-wide">
                        Image
                      </th>
                      <th className="py-4 px-6 border-b text-sm font-semibold uppercase tracking-wide">
                        Name
                      </th>
                      <th className="py-4 px-6 border-b text-sm font-semibold uppercase tracking-wide">
                        Price
                      </th>
                      <th className="py-4 px-6 border-b text-sm font-semibold uppercase tracking-wide">
                        Quantity
                      </th>
                      <th className="py-4 px-6 border-b text-sm font-semibold uppercase tracking-wide text-left">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {cart.map((item) => (
                      <tr
                        key={item.cartid}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="py-4 px-6 border-b">
                          <div className="w-20 h-20 mx-auto">
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              width={40}
                              height={40}
                              className="rounded-md shadow-sm object-cover"
                            />
                          </div>
                        </td>
                        <td className="py-4 px-6 border-b font-medium text-gray-800">
                          {item.name}
                        </td>
                        <td className="py-4 px-6 border-b font-bold text-green-600">
                          ${item.price}
                        </td>
                        <td className="py-4 px-6 border-b text-center">
                          {item.quantity}
                        </td>
                        <td className="py-4 px-6 border-b text-left">
                          <button
                            onClick={() => removeFromCart(item.cartid)}
                            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-shadow shadow-md"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total Price Section */}
              <div className="p-8 bg-white shadow-lg rounded-xl border border-gray-200 text-center">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-6 tracking-tight">
                  Total Summary
                </h2>
                <div className="flex flex-col items-center">
                  <span className="text-lg text-gray-600 mb-2">
                    Total Price:
                  </span>
                  <span className="text-3xl font-black text-green-500">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Section */}
              <div className="flex flex-col items-center mt-6">
                <Link
                  href="/"
                  className="text-blue-600 underline text-lg font-medium hover:text-blue-800 transition duration-200 py-2"
                >
                  Continue Shopping
                </Link>

                <Link
                  href="/checkout">
                <button className="bg-gray-800 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition duration-200 shadow-lg">
                  Proceed to Checkout
                </button>
                </Link>

                
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;

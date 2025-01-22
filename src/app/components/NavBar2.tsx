"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function NavBar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state on hamburger click
  };

  return (
    <div className="w-full h-[91px] px-[20px] md:px-[54px] bg-white">
      <nav className="w-full h-full flex justify-between items-center">
        {/* Brand Section */}
        <div className="text-[#252B42] font-bold text-[24px] leading-[32px]">
          Bandage
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div
          className="md:hidden text-[#252B42] text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>

        {/* Navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-sm font-Montserrat font-semibold absolute md:static top-[91px] left-0 md:left-auto bg-white md:bg-transparent w-full md:w-auto z-10`}
        >
          <Link href="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link href="/Products" className="text-gray-600 hover:text-black">
            Product
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-black">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-black">
            Contact
          </Link>

          {/* Button Section */}
          <div className="flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0 md:space-x-8">
            {/* Login Link */}
            <Link legacyBehavior href="/login">
              <a className="font-semibold text-sm text-[#23A6F0]">Login</a>
            </Link>

            {/* Become a Member Button */}
            <Link legacyBehavior href="/learn-more">
              <a className="font-semibold text-sm text-white flex items-center gap-2 px-6 py-3 bg-[#23A6F0] rounded-[5px]">
                Become a Member
                <svg
                  className="w-[12px] h-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 10"
                  fill="none"
                  stroke="#FFFFFF"
                >
                  <path d="M2 5h8M5 2l3 3-3 3" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </nav>

     
      {/* Mobile Menu Content */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-[#252B42] p-4 flex flex-col items-center gap-4 z-50`}
      >
        <ul className="font-Montserrat font-semibold text-[14px] text-white leading-[24px] gap-4 flex flex-col items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Products">Product</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="text-white font-Montserrat text-[14px]"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
}

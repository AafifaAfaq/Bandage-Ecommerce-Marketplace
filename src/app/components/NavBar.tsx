"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState for toggling hamburger menu
import Vector from "@/app/assets/Vector.png";
import {
  FaFacebook,
  FaRegEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Montserrat } from "@next/font/google";
import { FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state on hamburger click
  };

  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-full ">
      {/* Top Banner */}
      <div className="bg-[#252B42] text-white py-2 text-sm flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-8 w-full h-auto">
        {/* Left Section */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start mb-2 md:mb-0">
          <Image src={Vector} alt="Phone" width={24} height={24} />
          <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] underline-offset-auto decoration-skip-ink-none">
            (225) 555-0118
          </h6>
        </div>

        {/* Center Section */}
        <div className="text-center w-full md:w-auto mb-2 md:mb-0">
          <div className="flex items-center gap-2 justify-center">
            <FaRegEnvelope />
            <h6 className="text-sm font-montserrat font-bold leading-6 tracking-[0.2px] text-left underline-offset-auto decoration-skip-ink-none">
              michelle.rivera@example.com
            </h6>
          </div>
        </div>

        <div className="text-sm  sm:hidden md:block lg:block font-montserrat font-bold leading-6 tracking-[0.2px] text-left underline-offset-auto decoration-skip-ink-none">
          Follow Us and get a chance to win 80% off
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-end">
          <span className="text-sm sm:hidden md:block lg:block  font-montserrat font-bold leading-6 tracking-[0.2px] text-left underline-offset-auto decoration-skip-ink-none">
            Follow Us:
          </span>
          <FaInstagram className="text-white text-xl" />
          <FaYoutube className="text-white text-xl" />
          <FaFacebook className="text-white text-xl" />
          <FaTwitter className="text-white text-xl" />
        </div>
      </div>

      <div className="w-full px-6 py-4 shadow-sm bg-white hidden lg:block ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="font-Montserrat text-2xl text-[#252B42] font-bold">
            Bandage
          </h1>

          {/* Navigation */}
          <nav className="flex items-center space-x-8 text-sm font-Montserrat font-semibold">
            <Link href="/" className="text-gray-600 hover:text-black">
              Home
            </Link>

            <div className="flex items-center text-gray-600 hover:text-black">
              <Link href="/shop">Shop</Link>
              <RiArrowDropDownLine className="text-xl" />
            </div>
            <Link href="/about" className="text-gray-600 hover:text-black">
              About
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-black">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black">
              Contact
            </Link>
            <Link href="/pages" className="text-gray-600 hover:text-black">
              Pages
            </Link>
            <Link href="/Products" className="text-gray-600 hover:text-black">
              Products
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-6 text-sm font-semibold">
            {/* Login/Register */}
            <Link
              href="/login"
              className="text-[#23A6F0] hover:underline flex items-center"
            >
              Login / Register
            </Link>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <div className="border-2 border-[#23A6F0] rounded-md p-1">
                <CiSearch className="text-[#23A6F0] text-xl" />
              </div>
              {/* Cart Icon */}
              <Link href="/cart">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <GrCart className="text-[#23A6F0] text-xl" />
                </div>
              </Link>

              {/* Heart Icon */}
              <div className="flex items-center space-x-1">
                <CiHeart className="text-[#23A6F0] text-xl" />
                <span className="text-[#23A6F0] text-xs font-bold">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="lg:hidden w-full flex items-center justify-between p-4">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold leading-[32px] text-[24px]">
          Bandage
        </h3>

        {/* Login/Register */}
        <Link
          href="/login"
          className="text-[#23A6F0] text-sm  hover:underline flex items-center"
        >
          Login / Register
        </Link>

        {/* Cart Icon */}
        <Link href="/cart">
          <div className="flex items-center space-x-1 cursor-pointer">
            <GrCart className="text-[#23A6F0] text-xl" />
          </div>
        </Link>

        {/* Hamburger Icon */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black"></div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-[#252B42] p-4 flex flex-col items-center gap-4 z-50`}
      >
        <ul className="font-Montserrat font-semibold text-[14px] text-white leading-[24px] gap-4 flex flex-col items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
          <li>
            <Link href="/Products">Products</Link>
          </li>
        </ul>

        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="text-white font-Montserrat text-[14px]"
        >
          Close Menu
        </button>
      </div>
    </header>
  );
};

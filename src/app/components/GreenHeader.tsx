"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Vector from "@/app/assets/Vector.png";
import { FaFacebook, FaRegEnvelope, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Montserrat } from '@next/font/google';
import { FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const GreenHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state on hamburger click
  };

  return (
    <header className="bg-white shadow-sm border-b mx-auto w-full">
      {/* Top Banner */}
<div className="bg-[#23856D] text-white py-2 text-sm flex flex-wrap md:flex-nowrap justify-between items-center px-8 w-full h-[58px] k">
  {/* Left Section */}
  <div className="flex items-center gap-4">
    <Image src={Vector} alt="Phone" width={24} height={24} />
    <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] underline-offset-auto decoration-skip-ink-none">
      (225) 555-0118
    </h6>
  </div>

        {/* Center Section */}
        <div className="text-center">
          <div className="flex items-center gap-2 justify-center">
            <FaRegEnvelope />
            <h6 className="text-sm font-montserrat font-bold leading-6 tracking-[0.2px] text-left underline-offset-auto decoration-skip-ink-none">
              michelle.rivera@example.com
            </h6>
          </div>
        </div>
        <div className="text-sm font-montserrat font-bold leading-6 tracking-[0.2px] text-left underline-offset-auto decoration-skip-ink-none sm:hidden md:hidden lg:block">
          Follow Us and get a chance to win 80% off
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-montserrat font-bold leading-6 tracking-[0.2px] text-left underline-offset-auto decoration-skip-ink-none sm:hidden md:hidden lg:block">
            Follow Us:
          </span>
          <FaInstagram className="text-white text-xl" />
          <FaYoutube className="text-white text-xl" />
          <FaFacebook className="text-white text-xl" />
          <FaTwitter className="text-white text-xl" />
        </div>
      </div>

      <div className="w-full px-6 py-4 shadow-sm bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between">
          {/* Logo */}
          <h1 className="font-Montserrat text-2xl text-[#252B42] font-bold md:hidden lg:block">
            Bandage
          </h1>

          {/* Navigation */}
<nav className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 sm:text-center md:text-left font-Montserrat font-semibold text-sm">
  <a href="/" className="text-gray-600 hover:text-black">
    Home
  </a>
  <div className="flex items-center text-gray-600 hover:text-black justify-center sm:justify-center md:justify-center">
    <a href="/shop">Shop</a>
    <RiArrowDropDownLine className="text-xl" />
  </div>
  <a href="/about" className="text-gray-600 hover:text-black">
    About
  </a>
  <a href="/blog" className="text-gray-600 hover:text-black">
    Blog
  </a>
  <a href="/contact" className="text-gray-600 hover:text-black">
    Contact
  </a>
  <a href="/pages" className="text-gray-600 hover:text-black">
    Pages
  </a>
</nav>

{/* Right Section */}
<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center text-sm font-semibold">
  {/* Login/Register */}
  <a href="#" className="text-[#23A6F0] hover:underline flex items-center justify-center sm:justify-start">
    Login / Register
  </a>

  {/* Icons */}
  <div className="flex items-center justify-center space-x-4 sm:justify-start md:justify-start">
    {/* Search Icon */}
    <div className="border-2 border-[#23A6F0] rounded-md p-1">
      <CiSearch className="text-[#23A6F0] text-xl" />
    </div>
    {/* Cart Icon */}
    <div className="flex items-center space-x-1">
      <GrCart className="text-[#23A6F0] text-xl" />
      <span className="text-[#23A6F0] text-xs font-bold">1</span>
    </div>
    {/* Heart Icon */}
    <div className="flex items-center space-x-1">
      <CiHeart className="text-[#23A6F0] text-xl" />
      <span className="text-[#23A6F0] text-xs font-bold">1</span>
    </div>
  </div>
</div>


        {/* Mobile Menu Content */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 w-full bg-[#252B42] p-4 flex flex-col items-center gap-4 z-50`}
        >
          <ul className="font-Montserrat font-semibold text-[14px] text-white leading-[24px] gap-4 flex flex-col items-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>

          {/* Close button */}
          <button onClick={toggleMenu} className="text-white font-Montserrat text-[14px]">
            Close Menu
          </button>
        </div>
      </div>
      </div>
    </header>
  );
};

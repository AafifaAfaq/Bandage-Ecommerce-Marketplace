"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Vector from "@/app/assets/Vector.png";
import { FaFacebook, FaRegEnvelope, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Montserrat } from "@next/font/google";
import { FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai"; // For Hamburger Icon

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const GreenHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state on hamburger click
  };

  return (
    <header className="bg-white shadow-sm border-b mx-auto w-full">
      {/* Top Banner */}
      <div className="bg-[#23856D] text-white py-2 text-sm flex flex-wrap md:flex-nowrap justify-between items-center px-8 w-full h-[58px]">
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
        <div className="text-sm font-montserrat font-bold leading-6 tracking-[0.2px] text-left underline-offset-auto decoration-skip-ink-none hidden lg:block">
          Follow Us and get a chance to win 80% off
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-montserrat font-bold leading-6 tracking-[0.2px] text-left underline-offset-auto decoration-skip-ink-none hidden lg:block">
            Follow Us:
          </span>
          <FaInstagram className="text-white text-xl" />
          <FaYoutube className="text-white text-xl" />
          <FaFacebook className="text-white text-xl" />
          <FaTwitter className="text-white text-xl" />
        </div>
      </div>

      <div className="w-full px-6 py-4 shadow-sm bg-white relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="font-Montserrat text-2xl text-[#252B42] font-bold">
            Bandage
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-Montserrat font-semibold text-sm">
            <Link href="/" className="text-gray-600 hover:text-black">
              Home
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-black">
              Shop
            </Link>
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
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-[#23A6F0] hover:underline">
              Login / Register
            </Link>
            <CiSearch className="text-[#23A6F0] text-xl" />
            <GrCart className="text-[#23A6F0] text-xl" />
            <CiHeart className="text-[#23A6F0] text-xl" />
          </div>

          {/* Hamburger Menu for Small Screens */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-[#23A6F0] focus:outline-none"
          >
            <AiOutlineMenu />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#252B42] text-white p-4 flex flex-col items-center gap-4 z-50">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/pages" className="hover:underline">
              Pages
            </Link>

            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="mt-4 px-6 py-2 bg-red-500 rounded text-white"
            >
              Close Menu
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

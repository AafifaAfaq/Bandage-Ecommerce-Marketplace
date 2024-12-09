import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-700 font-montserrat">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex  w-9/12 justify-between items-center space-y-4 md:space-y-0  py-6 px-2">
          {/* Company Info (Bandage Logo on Left) */}
          <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>

          {/* Social Media Links (Centered) */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800">Follow Us</h3>
            <div className="flex space-x-6 mt-4 justify-center md:justify-start">
              <a href="#" className="text-[#23A6F0] hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#23A6F0] hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#23A6F0] hover:text-pink-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10 w-full">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-gray-800">Company Info</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
              <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-800">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500">Licenses</a></li>
              <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-800">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
              <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
              <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
              <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Lore ipsum dolor sit amet.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          Made With Love By Finland | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

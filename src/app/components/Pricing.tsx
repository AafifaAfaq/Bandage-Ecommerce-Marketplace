
import React from 'react';
import { FaChevronRight } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading Section */}
        <div className="mb-8">
          <h5 className="text-base font-bold text-gray-500">PRICING</h5>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">
            Simple Pricing
          </h1>
        </div>

        {/* Breadcrumb Section */}
        <div className="flex justify-center items-center text-sm font-bold text-gray-500 mb-8">
          <span className="text-gray-800">Home</span>
          <FaChevronRight className="mx-2 text-gray-400" />
          <span>Pricing</span>
        </div>

        {/* Pricing Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Pricing
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-4">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>

          {/* Pricing Toggle */}
          <div className="flex justify-center gap-4 mt-6">
            <div className="flex items-center space-x-2">
              <h4 className="text-base font-bold text-gray-800">Monthly</h4>
              <button className="text-blue-600 bg-blue-100 px-2 py-1 rounded">
                Save 10%
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <h4 className="text-base font-bold text-gray-800">Yearly</h4>
              <button className="text-blue-600 bg-blue-100 px-2 py-1 rounded">
                Save 25%
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

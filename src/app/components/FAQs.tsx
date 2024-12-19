
import React from 'react';

const FAQs = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Pricing FAQs</h2>
          <p className="text-xl font-normal text-gray-500 pt-5">
            Problems trying to resolve the conflict between
          </p>
          <p className="text-xl font-normal text-gray-500">
            the two major realms of Classical physics
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-16 grid sm:grid-cols-2 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index}>
              <h5 className="text-lg font-bold text-gray-800">
                The quick fox jumps over the lazy dog
              </h5>
              <p className="text-sm font-normal text-gray-500 pt-2">
                Met minim Mollie non desert Alamo est sit cliquey
              </p>
              <p className="text-sm font-normal text-gray-500">
                dolor do met sent. RELIT official consequent door ENIM
              </p>
              <p className="text-sm font-normal text-gray-500">
                RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-lg font-normal text-gray-500">
            Haven’t got your answer? Contact our support
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

"use client"

import React, { useState } from 'react';

const CheckoutPage = () => {
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

  const handleConfirmPayment = () => {
    setIsPaymentConfirmed(true);
  };

  if (isPaymentConfirmed) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg text-center p-6">
          <h1 className="text-2xl font-bold text-gray-700">Thank You for Shopping!</h1>
          <p className="text-gray-700 mt-4">Your order will be dispatched to you within 3-5 business days.</p>
          <p className="text-gray-500 mt-2">We hope to see you again soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
        <header className="bg-gray-800 text-white p-4 rounded-t-lg">
          <h1 className="text-lg font-bold">Checkout</h1>
        </header>
        <main className="p-6 space-y-4">
          <section className="border-b pb-4">
            <h2 className="text-gray-700 font-semibold">Shipping Address</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-gray-400 focus:border-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  placeholder="123 Main Street"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-gray-400 focus:border-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  placeholder="Karachi"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-gray-400 focus:border-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  placeholder="12345"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-gray-400 focus:border-gray-400"
                />
              </div>
            </form>
          </section>

          <section className="border-b pb-4">
            <h2 className="text-gray-700 font-semibold">Payment Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-gray-400 focus:border-gray-400"
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-gray-400 focus:border-gray-400"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-gray-400 focus:border-gray-400"
                  />
                </div>
              </div>
            </form>
          </section>

          <section className="flex justify-between items-center">
            <h2 className="text-gray-700 font-semibold">Total</h2>
            <p className="text-xl font-bold">$99.99</p>
          </section>
        </main>
        <footer className="bg-gray-100 p-4 flex justify-end space-x-4">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">Cancel</button>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
            onClick={handleConfirmPayment}
          >
            Confirm Payment
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CheckoutPage;

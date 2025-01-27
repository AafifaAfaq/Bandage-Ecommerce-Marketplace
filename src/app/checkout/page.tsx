"use client";

import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import React, { useState } from "react";

const CheckoutPage = () => {
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on input
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.zip) newErrors.zip = "ZIP Code is required.";
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required.";
    if (!formData.expirationDate) newErrors.expirationDate = "Expiration date is required.";
    if (!formData.cvv) newErrors.cvv = "CVV is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmPayment = () => {
    if (validateForm()) {
      setIsPaymentConfirmed(true);
    }
  };

  if (isPaymentConfirmed) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg text-center p-6">
          <h1 className="text-2xl font-bold text-gray-700">Thank You for Shopping!</h1>
          <p className="text-gray-700 mt-4">Your order will be dispatched to you within 3-5 business days.</p>
          <p className="text-gray-500 mt-2">We hope to see you again soon!</p>
          <button className="text-gray-700" onClick={() => window.location.href = '/' }>Go to home 
          </button>
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider>
      <SignedIn>
        <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg">
            <header className="bg-gray-800 text-white p-4 rounded-t-lg">
              <h1 className="text-lg font-bold">Checkout</h1>
            </header>
            <main className="p-6 space-y-6">
              <ShippingAddressForm
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
              <PaymentDetailsForm
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
              <CheckoutSummary total={99.99} />
            </main>
            <footer className="bg-gray-100 p-4 flex justify-end space-x-4">
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                onClick={handleConfirmPayment}
              >
                Confirm Payment
              </button>
            </footer>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-lg font-bold text-gray-700">Sign in to proceed</h2>
            <SignIn path="/checkout" routing="path" signUpUrl="/sign-up" />
          </div>
        </div>
      </SignedOut>
    </ClerkProvider>
  );
};

const ShippingAddressForm = ({
  formData,
  handleInputChange,
  errors,
}: {
  formData: Record<string, string>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
}) => (
  <section>
    <h2 className="text-lg font-bold">Shipping Address</h2>
    <form className="space-y-4">
      {["name", "address", "city", "zip"].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium capitalize">{field}</label>
          <input
            type="text"
            name={field}
            placeholder={`Enter ${field}`}
            value={formData[field]}
            onChange={handleInputChange}
            className={`w-full p-2 border ${
              errors[field] ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
          />
          {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
        </div>
      ))}
    </form>
  </section>
);

const PaymentDetailsForm = ({
  formData,
  handleInputChange,
  errors,
}: {
  formData: Record<string, string>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
}) => (
  <section>
    <h2 className="text-lg font-bold">Payment Details</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={formData.cardNumber}
          onChange={handleInputChange}
          className={`w-full p-2 border ${
            errors.cardNumber ? "border-red-500" : "border-gray-300"
          } rounded-lg`}
        />
        {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
      </div>
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium">Expiration Date</label>
          <input
            type="text"
            name="expirationDate"
            placeholder="MM/YY"
            value={formData.expirationDate}
            onChange={handleInputChange}
            className={`w-full p-2 border ${
              errors.expirationDate ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
          />
          {errors.expirationDate && <p className="text-red-500 text-sm">{errors.expirationDate}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">CVV</label>
          <input
            type="text"
            name="cvv"
            placeholder="123"
            value={formData.cvv}
            onChange={handleInputChange}
            className={`w-full p-2 border ${
              errors.cvv ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
          />
          {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
        </div>
      </div>
    </form>
  </section>
);

const CheckoutSummary = ({ total }: { total: number }) => (
  <section className="flex justify-between items-center">
    <h2 className="text-lg font-bold">Total</h2>
    <p className="text-xl font-bold">${total.toFixed(2)}</p>
  </section>
);

export default CheckoutPage;

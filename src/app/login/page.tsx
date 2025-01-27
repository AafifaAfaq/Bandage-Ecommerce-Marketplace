"use client";
import { useState } from "react";
import { useSignIn, useSession, useClerk } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";

const Login = () => {
  const { isSignedIn } = useSession();  // Use the `useSession` hook to check if the user is signed in
  const { signOut } = useClerk(); // Get the `signOut` function from the `useClerk` hook

  if (isSignedIn) {
    // Redirect to another page if the user is already signed in
    window.location.href = "#";  // Redirect to home or dashboard
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>

        {isSignedIn ? (
          // If the user is signed in, show the log out button or go back to home button
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">You are already logged in!</h3>

            {/* Log out button */}
            <button
              onClick={() => signOut()} // Sign out the user when button is clicked
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
            >
              Log Out
            </button>

            {/* Go back to home button */}
            <button
              onClick={() => window.location.href = '/'} // Go back to the home page
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Go back to Home
            </button>
          </div>
        ) : (
          // Use Clerk's SignIn form if the user is not signed in
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        )}
      </div>
    </div>
  );
};

export default Login;

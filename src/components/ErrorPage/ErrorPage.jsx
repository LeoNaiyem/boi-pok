import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4 text-center">
      {/* Animated 404 */}
      <div className="relative mb-8">
        <div className="text-[8rem] md:text-[12rem] font-bold text-indigo-400 opacity-20">
          404
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl md:text-7xl font-bold text-indigo-700">
            Page Not Found
          </div>
        </div>
      </div>

      {/* Message */}
      <p className="text-lg md:text-xl text-gray-600 max-w-md mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Back button */}
      <Link
        to="/"
        className="relative inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 group"
      >
        <span className="mr-2">Back to Home</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 group-hover:translate-x-1 transition-transform"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        {/* Pulse effect */}
        <span className="absolute -z-10 inset-0 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></span>
      </Link>

      {/* Optional decorative elements */}
      <div className="mt-12 opacity-30">
        <svg
          width="200"
          height="200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-indigo-300"
        >
          <path
            d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;

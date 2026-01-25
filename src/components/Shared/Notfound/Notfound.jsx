import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#34C9B6]/10 px-4">
      <div className="relative text-center max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg animate-fadeIn">

        {/* Floating Doctor Emoji */}
        <div className="text-6xl mb-3 animate-float">👨‍⚕️</div>

        {/* Heartbeat Line */}
        <div className="flex justify-center mb-4">
          <span className="text-3xl animate-heartbeat">🫀</span>
        </div>

        {/* 404 */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#34C9B6] mb-2">
          404
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Doctor Not Available
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Looks like this page needs medical attention.  
          Don’t worry, let’s take you back safely.
        </p>

        {/* Button */}
        <Link
          to ="/"
          className="inline-block bg-[#34C9B6] text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:scale-105 transition-transform duration-300"
        >
          Go to Home
        </Link>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-float {
            animation: float 2.5s ease-in-out infinite;
          }

          @keyframes heartbeat {
            0% {
              transform: scale(1);
            }
            25% {
              transform: scale(1.2);
            }
            40% {
              transform: scale(1);
            }
            60% {
              transform: scale(1.15);
            }
            100% {
              transform: scale(1);
            }
          }

          .animate-heartbeat {
            animation: heartbeat 1.4s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Notfound;

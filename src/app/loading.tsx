"use client";

import { FiLoader } from "react-icons/fi";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center">
      
      {/* Spinner */}
      <FiLoader className="animate-spin text-5xl text-green-500 mb-4" />

      {/* Text */}
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        লোড হচ্ছে...
      </h2>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        অনুগ্রহ করে একটু অপেক্ষা করুন
      </p>
    </div>
  );
}

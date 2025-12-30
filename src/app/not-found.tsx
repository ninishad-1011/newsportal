"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiAlertTriangle } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "@/context/themecontext";

export default function NotFound() {
  const { isDarkMode } = useContext(ThemeContext)!;

  return (
    <div
      className={`min-h-screen flex flex-col items-center  justify-center px-4 text-center ${
        isDarkMode ? "text-white" : " text-black"
      }`}
    >
      {/* Icon */}
      <FiAlertTriangle className="text-6xl text-green-600 mb-4" />

      {/* Title */}
      <h1 className="text-5xl font-bold mb-2">404</h1>

      {/* Subtitle */}
      <h2 className="text-xl font-semibold mb-4">
        দুঃখিত! পেজটি পাওয়া যায়নি
      </h2>

      {/* Description */}
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
        আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, নাম পরিবর্তন হয়েছে অথবা
        এখনো তৈরি হয়নি।
      </p>

      {/* Button */}
      <Link href="/">
        <Button className="px-6 py-2">
          হোম পেজে ফিরে যান
        </Button>
      </Link>
    </div>
  );
}

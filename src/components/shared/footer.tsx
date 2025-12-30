"use client";

import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMoon, FiSun } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "@/context/themecontext";
import { Button } from "../ui/button";

export default function Footer() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)!;

  return (
    <footer className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} mt-10`}>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-green-500">
            বাংলাদেশ <span className="text-red-600">420</span>
          </h1>
          <p className="mt-2 text-gray-800 max-w-xs dark:text-white">
            আমরা বাংলাদেশের ব্যবহারকারীদের জন্য একটি উচ্চমানের ওয়েব ভিত্তিক নিউজপেপার সেবা প্রদান করি।
          </p>
          {/* Dark Mode Icon */}
          <button
            onClick={toggleTheme}
            className="mt-4 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
          >
            {isDarkMode ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">দ্রুত লিঙ্ক</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-green-500">হোম</Link></li>
            <li><Link href="/news" className="hover:text-green-500">সব খবর</Link></li>
            <li><Link href="/services" className="hover:text-green-500">আমাদের সেবা</Link></li>
            <li><Link href="/about" className="hover:text-green-500">আমাদের সম্পর্কে</Link></li>
            <li><Link href="/contact" className="hover:text-green-500">যোগাযোগ</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="font-semibold text-lg mb-3">নিউজলেটার সাবস্ক্রাইব করুন</h2>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="আপনার ইমেইল দিন"
              className="px-3 py-2 border-1 border-green-400 rounded-md dark:text-white w-full"
            />
            <Button variant={'default'}> সাবস্ক্রাইব</Button>
          </div>
        </div>

        {/* Social & Contact Info */}
        <div>
          <h2 className="font-semibold text-lg mb-3 ">যোগাযোগ & সোশ্যাল</h2>
          <ul className="space-y-2 text-gray-800 dark:text-white">
            <li>📞 +880 1234 567890</li>
            <li>✉ info@example.com</li>
            <li>🏢 ঢাকা, বাংলাদেশ</li>
          </ul>
          <div className="flex items-center gap-4 mt-4 text-xl">
            <Link href="#" className="hover:text-blue-500"><FiFacebook /></Link>
            <Link href="#" className="hover:text-blue-400"><FiTwitter /></Link>
            <Link href="#" className="hover:text-pink-500"><FiInstagram /></Link>
            <Link href="#" className="hover:text-blue-700"><FiLinkedin /></Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className=" mb-5 border-t border-gray-900 mt-8 pt-4 text-center text-gray-400 text-sm">
        © 2025 বাংলাদেশ 420. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}

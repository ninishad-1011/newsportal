"use client";

import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMoon,
  FiSun,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "@/context/themecontext";
import { Button } from "../ui/button";

export default function Footer() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)!;

  return (
    <footer
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } mt-10`}
    >
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold text-green-500">
            বাংলাদেশ <span className="text-red-600">420</span>
          </h1>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            আধুনিক ও নির্ভরযোগ্য বাংলা নিউজ প্ল্যাটফর্ম
          </p>

          <button
            onClick={toggleTheme}
            className="mt-4 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
          >
            {isDarkMode ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">দ্রুত লিঙ্ক</h2>
          <ul className="space-y-2">
            <li><Link href="/">হোম</Link></li>
            <li><Link href="/news">সব খবর</Link></li>
            <li><Link href="/services">সেবা</Link></li>
            <li><Link href="/about">আমাদের সম্পর্কে</Link></li>
            <li><Link href="/contact">যোগাযোগ</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-lg mb-3">নিউজলেটার</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="আপনার ইমেইল দিন"
              className="px-3 py-2 rounded-md border border-slate-800 dark:bg-gray-800 w-full"
            />
            <Button>Subscribe</Button>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-lg mb-3">যোগাযোগ</h2>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FiPhone /> +8801571117435
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FiMail /> nafiul1011@gmail.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FiMapPin /> ঢাকা, বাংলাদেশ
            </li>
          </ul>

          {/* Social */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
            <Link href="https://www.facebook.com/picci1011" target="_blank">
              <FiFacebook className="hover:text-blue-500" />
            </Link>
            <Link href="https://github.com/ninishad-1011" target="_blank">
              <FaGithub className="hover:text-gray-400" />
            </Link>
            <Link href="https://www.linkedin.com/in/nafiul1011" target="_blank">
              <FiLinkedin className="hover:text-blue-600" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © 2025 বাংলাদেশ 420 — সর্বস্বত্ব সংরক্ষিত <br />
        Developed by <span className="text-green-400">Nafiul Islam</span>
      </div>
    </footer>
  );
}

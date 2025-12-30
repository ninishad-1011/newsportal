"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/themecontext";
import { FiTarget, FiCheckCircle } from "react-icons/fi";

export default function AboutPage() {
  const { isDarkMode } = useContext(ThemeContext)!;

  return (
    <section className={`py-16 mt-10 rounded-md px-4
      ${isDarkMode 
        ? "bg-gray-900 text-white shadow-lg" 
        : "bg-gray-100"}
    `}>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className={`text-4xl font-bold text-center mb-6
          ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
          <span className={isDarkMode ? "text-green-400" : "text-green-600"}>বাংলাদেশ</span>{" "}
          <span className={isDarkMode ? "text-red-400" : "text-red-600"}>420</span>
        </h1>

        <p className={`text-center mb-12 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          সত্য, সাহসী ও সময়োপযোগী সংবাদ পরিবেশনের একটি প্রফেশনাল ওয়েব ভিত্তিক নিউজপ্ল্যাটফর্ম
        </p>

        {/* Content */}
        <div className={`space-y-6 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          <p>
            <strong>বাংলাদেশ 420</strong> একটি স্বাধীন প্রফেশনাল ডিজিটাল নিউজ প্ল্যাটফর্ম,
            যেখানে দেশের সর্বশেষ খবর, রাজনীতি, প্রযুক্তি, খেলাধুলা এবং আন্তর্জাতিক বিষয়াদি
            নির্ভরযোগ্যভাবে প্রকাশ করা হয়।
          </p>

          <p>
            আমাদের লক্ষ্য হলো —  
            <span className="font-semibold">
              সত্য তথ্য দ্রুত, সহজ ও নির্ভুলভাবে পাঠকের কাছে পৌঁছে দেওয়া।
            </span>
          </p>

          <p>
            আমরা বিশ্বাস করি তথ্যই শক্তি। তাই ভুয়া খবর নয়, যাচাইকৃত সংবাদই আমাদের অগ্রাধিকার।
          </p>

          <p>
            <strong>বাংলাদেশ 420</strong> শুধু একটি নিউজ সাইট নয়, এটি একটি সচেতন প্রজন্ম গড়ার উদ্যোগ।
          </p>
        </div>

        {/* Mission */}
        <div className="mt-12 p-6 rounded-lg bg-white/20 backdrop-blur-lg border border-white/30 shadow-sm">
          <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
            <FiTarget /> আমাদের লক্ষ্য
          </h2>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500" /> সঠিক ও নির্ভরযোগ্য সংবাদ প্রদান
            </li>
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500" /> ডিজিটাল বাংলাদেশ গঠনে ভূমিকা রাখা
            </li>
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500" /> তরুণ প্রজন্মকে তথ্যভিত্তিক সিদ্ধান্তে সহায়তা
            </li>
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500" /> স্বচ্ছ ও নিরপেক্ষ সাংবাদিকতা
            </li>
          </ul>
        </div>

        {/* Owner / Footer Image */}
        <div className="mt-12 flex flex-col items-center text-center">
          <Image
            src="/image/WhatsApp_Image_2025-12-06_at_00.28.32_0b879863-removebg-preview-Photoroom.png"
            alt="Owner"
            width={200}
            height={150}
            className="rounded-full object-cover shadow-lg"
          />
          <h3 className={`mt-4 text-xl font-semibold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
            মোঃ নাফিউল ইসলাম নিশাদ
          </h3>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} mt-1`}>
            ফ্রন্ট-এন্ড সফটওয়্যার ডেভেলপার
          </p>
        </div>

      </div>
    </section>
  );
}

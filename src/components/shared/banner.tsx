import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Link } from "lucide-react";

function Banner() {
  return (
    <div className="bg-gray-200/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/30 dark:border-gray-500/30 rounded-md">
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* ছবি */}
        <div>
          <Image
            src="/image/world-cup-trophy-at-metlife-20251230223236.jpg"
            width={600}
            height={400}
            alt="banner image"
            className="rounded-md"
          />
        </div>

        
        <div className="space-y-4 flex flex-col">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400">
            খেলা
          </h4>
          <h2 className="text-xl font-bold">
            ২০২৬ ফুটবল বিশ্বকাপে নজিরবিহীন আগ্রহ, টিকিট পেতে রেকর্ড আবেদন
          </h2>
          <p className="text-gray-800 dark:text-gray-300">
            ২০২৬ ফুটবল বিশ্বকাপ সরাসরি মাঠে বসে উপভোগ করতে নজিরবিহীন সাড়া
            দিচ্ছেন সারা বিশ্বের দর্শকরা। যুক্তরাষ্ট্র, কানাডা ও মেক্সিকোর
            মাটিতে হতে যাওয়া এই মেগা টুর্নামেন্টের র‍্যান্ডম সিলেকশন ড্র টিকিটিং
            পর্বের প্রথমার্ধেই জমা পড়েছে প্রায় ১৫ কোটি টিকিটের আবেদন। সবমিলিয়ে
            বিশ্বকাপের টিকিট নিয়ে প্রায় ৩০ গুণ অতিরিক্ত চাহিদা তৈরি হয়েছে।
          </p>

          <a
            href="https://www.dhakapost.com/sports/420458"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default">বিস্তারিত পড়ুন</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;

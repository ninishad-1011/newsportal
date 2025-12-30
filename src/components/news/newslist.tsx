"use client";

import { useState } from "react";
import NewsCart from "@/components/shared/newsCart";
import { News } from "@/types/news";

interface NewsListProps {
  news: News[];
}

const NewsList = ({ news }: NewsListProps) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // ইউনিক ক্যাটেগরি বের করা
  const categories = Array.from(new Set(news.flatMap((n) => n.categories)));

  // ফিল্টার করা নিউজ
  const filteredNews = news.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || item.categories.includes(category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* অনুসন্ধান ও ক্যাটেগরি */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="খবর অনুসন্ধান করুন..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-green-400 rounded px-4 py-2 flex-1"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-green-400 rounded px-4 py-2"
        >
          <option value="all">সব ক্যাটেগরি</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* নিউজ গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredNews.map((item) => (
          <NewsCart key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;

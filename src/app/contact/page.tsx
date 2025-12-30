"use client";

import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { ThemeContext } from "@/context/themecontext";
import { FiUser, FiMail, FiMessageCircle, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactPage() {
  const { isDarkMode } = useContext(ThemeContext)!;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={`mt-10 py-16 rounded-md px-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-green-100 text-gray-800"}`}>
      <div className="max-w-3xl mx-auto ">

        {/* Form Section */}
        <div className={`${isDarkMode ? " p-8 rounded-lg" : ""} mb-12`}>
          <h1 className="text-3xl dark:text-green-400 text-green-600 font-bold text-center mb-6">আমাদের সাথে যোগাযোগ</h1>
          <p className={`text-center mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            আমাদের সাথে যোগাযোগ করতে নিচের ফর্মটি পূরণ করুন
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="block mb-2 font-medium flex items-center gap-2" htmlFor="name">
                <FiUser /> নাম
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="আপনার নাম লিখুন"
                required
                className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  isDarkMode ? "border-gray-600 bg-gray-900 text-white" : "border-green-600 bg-transparent text-gray-800"
                }`}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="block mb-2 font-medium flex items-center gap-2" htmlFor="email">
                <FiMail /> ইমেইল
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="আপনার ইমেইল লিখুন"
                required
                className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  isDarkMode ? "border-gray-600 bg-gray-900 text-white" : "border-green-600 bg-transparent text-gray-800"
                }`}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="block mb-2 font-medium flex items-center gap-2" htmlFor="message">
                <FiMessageCircle /> বার্তা
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="আপনার বার্তা লিখুন"
                required
                rows={5}
                className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  isDarkMode ? "border-gray-600 bg-gray-900 text-white" : "border-green-600 bg-transparent text-gray-800"
                }`}
              />
            </div>

            <div className="text-center">
              <Button type="submit" variant="default">পাঠান</Button>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 dark:text-green-400 text-green-600 text-center">যোগাযোগের তথ্য</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            <div className="flex items-center gap-3"><FiPhone className="text-green-500 text-xl" /> +880 1234 567890</div>
            <div className="flex items-center gap-3"><FiMail className="text-green-500 text-xl" /> info@example.com</div>
            <div className="flex items-center gap-3"><FiMapPin className="text-green-500 text-xl" /> ঢাকা, বাংলাদেশ</div>
            <div className="flex items-center gap-3"><FiClock className="text-green-500 text-xl" /> সপ্তাহের প্রতিদিন: ৯ AM – ৬ PM</div>
          </div>
        </div>

      </div>
    </section>
  );
}

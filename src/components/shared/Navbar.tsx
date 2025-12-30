"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { FiAlignJustify, FiX, FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "@/context/themecontext";

export default function Navbar() {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)!;
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href);

  return (
    <header
      className={`shadow-md ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <span className="text-green-600">বাংলাদেশ </span>
            <span className="text-red-600">420</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex font-semibold">
          <NavigationMenuList className="flex items-center gap-6">
            {/* খবর */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/news"
                  className={`cursor-pointer ${
                    isActive("/news") ? "text-green-600" : ""
                  }`}
                >
                  সব খবর
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* সেবাসমূহ */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${
                  pathname.startsWith("/services") ? "text-green-500" : ""
                }`}
              >
                আমাদের সেবা
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className={
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                }
              >
                <ul className="rounded-md space-y-2 w-44 p-2 shadow-md">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/web"
                        className={`block px-4 py-2 hover:bg-gray-100 ${
                          isActive("/services/web") ? "text-green-500" : ""
                        }`}
                      >
                        ওয়েব ডেভেলপমেন্ট
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/app"
                        className={`block px-4 py-2 hover:bg-gray-100 ${
                          isActive("/services/app") ? "text-green-500" : ""
                        }`}
                      >
                        অ্যাপ ডেভেলপমেন্ট
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/seo"
                        className={`block px-4 py-2 hover:bg-gray-100 ${
                          isActive("/services/seo") ? "text-green-500" : ""
                        }`}
                      >
                        এসইও
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* আমাদের সম্পর্কে */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className={`cursor-pointer ${
                    isActive("/about") ? "text-green-500" : ""
                  }`}
                >
                  আমাদের সম্পর্কে
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* যোগাযোগ */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className={`cursor-pointer ${
                    isActive("/contact") ? "text-green-500" : ""
                  }`}
                >
                  যোগাযোগ
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Right: Dark Mode Icon + Login */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={toggleTheme}
            className="p-1 text-xl"
          >
            {isDarkMode ? <FiMoon /> : <FiSun />}
          </Button>
          <Button variant="default">লগইন</Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <Button variant="ghost" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={30} /> : <FiAlignJustify size={30} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={`lg:hidden ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          } shadow-md`}
        >
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link
                href="/news"
                className={`block px-4 py-2 hover:bg-gray-100 ${
                  isActive("/news") ? "text-green-600" : ""
                }`}
              >
                সব খবর
              </Link>
            </li>

            <li>
              <div
                className={`px-4 py-2 font-semibold ${
                  pathname.startsWith("/services") ? "text-green-500" : ""
                }`}
              >
                আমাদের সেবা
              </div>
              <ul className="pl-6 flex flex-col gap-2">
                <li>
                  <Link
                    href="/services/web"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      isActive("/services/web") ? "text-green-500" : ""
                    }`}
                  >
                    ওয়েব ডেভেলপমেন্ট
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/app"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      isActive("/services/app") ? "text-green-500" : ""
                    }`}
                  >
                    অ্যাপ ডেভেলপমেন্ট
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seo"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      isActive("/services/seo") ? "text-green-500" : ""
                    }`}
                  >
                    এসইও
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/about"
                className={`block px-4 py-2 hover:bg-gray-100 ${
                  isActive("/about") ? "text-green-500" : ""
                }`}
              >
                আমাদের সম্পর্কে
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`block px-4 py-2 hover:bg-gray-100 ${
                  isActive("/contact") ? "text-red-500" : ""
                }`}
              >
                যোগাযোগ
              </Link>
            </li>

            {/* Mobile Dark Mode Icon */}
            <li className="px-4 py-2">
              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="p-1 text-xl w-full flex justify-start"
              >
                {isDarkMode ? <FiMoon /> : <FiSun />}
              </Button>
            </li>

            <li>
              <Button variant="default" className="w-full mt-2">
                লগইন
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

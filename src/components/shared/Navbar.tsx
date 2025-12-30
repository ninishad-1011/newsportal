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
import { Button } from "@/components/ui/button";
import { FiAlignJustify, FiX, FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "@/context/themecontext";

export default function Navbar() {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)!;
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href);

  const handleCloseMenu = () => setMobileOpen(false);

  return (
    <header
      className={`shadow-md ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-[26px] font-bold">
          <span className="text-green-600">বাংলাদেশ </span>
          <span className="text-red-600">420</span>
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex gap-6 font-semibold">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/news"
                  className={isActive("/news") ? "text-green-600" : ""}
                >
                  সব খবর
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold text-[16px]">আমাদের সেবা</NavigationMenuTrigger>
              <NavigationMenuContent
                className={isDarkMode ? "bg-gray-800" : "bg-white"}
              >
                <ul className="w-44 p-2 space-y-2">
                  <li>
                    <Link href="/services/web" className="block px-4 py-2 hover:bg-gray-100">
                      ওয়েব ডেভেলপমেন্ট
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/app" className="block px-4 py-2 hover:bg-gray-100">
                      অ্যাপ ডেভেলপমেন্ট
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seo" className="block px-4 py-2 hover:bg-gray-100">
                      এসইও
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about">আমাদের সম্পর্কে</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact">যোগাযোগ</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right */}
        <div className="hidden lg:flex gap-3 items-center">
          <Button variant="ghost" onClick={toggleTheme}>
            {isDarkMode ? <FiMoon /> : <FiSun />}
          </Button>
          <Button>লগইন</Button>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={28} /> : <FiAlignJustify size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={`lg:hidden px-4 py-4 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white"
          }`}
        >
          <ul className="space-y-3">
            <li>
              <Link href="/news" onClick={handleCloseMenu}>
                সব খবর
              </Link>
            </li>

            <li className="font-semibold ">আমাদের সেবা</li>
            <li className="pl-4">
              <Link href="/services/web" onClick={handleCloseMenu}>
                ওয়েব ডেভেলপমেন্ট
              </Link>
            </li>
            <li className="pl-4">
              <Link href="/services/app" onClick={handleCloseMenu}>
                অ্যাপ ডেভেলপমেন্ট
              </Link>
            </li>
            <li className="pl-4">
              <Link href="/services/seo" onClick={handleCloseMenu}>
                এসইও
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={handleCloseMenu}>
                আমাদের সম্পর্কে
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={handleCloseMenu}>
                যোগাযোগ
              </Link>
            </li>

            <li>
              <Button
                variant="ghost"
                onClick={() => {
                  toggleTheme();
                  handleCloseMenu();
                }}
              >
                {isDarkMode ? <FiMoon /> : <FiSun />}
              </Button>
            </li>

            <li>
              <Button className="w-full">লগইন</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

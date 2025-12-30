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
import { FiAlignJustify, FiX } from "react-icons/fi";
import { ThemeContext } from "@/context/themecontext";

export default function Navbar() {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)!;
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <header className={`shadow-md ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">

        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex font-semibold">
          <NavigationMenuList className="flex items-center gap-6">

            {/* News */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/news"
                  className={`cursor-pointer ${isActive("/news") ? "text-red-500" : ""}`}
                >
                  News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`${pathname.startsWith("/services") ? "text-red-500" : ""}`}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className={isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}>
                <ul className="rounded-md space-y-2 w-44 p-2 shadow-md">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/web"
                        className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/services/web") ? "text-red-500" : ""}`}
                      >
                        Web Development
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/app"
                        className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/services/app") ? "text-red-500" : ""}`}
                      >
                        App Development
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/seo"
                        className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/services/seo") ? "text-red-500" : ""}`}
                      >
                        SEO
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className={`cursor-pointer ${isActive("/about") ? "text-red-500" : ""}`}
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className={`cursor-pointer ${isActive("/contact") ? "text-red-500" : ""}`}
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Right: Dark Mode + Login */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="inline-flex items-center gap-2">
            <span>Dark Mode</span>
            <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
          </div>
          <Button variant="default">Login</Button>
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
        <div className={`lg:hidden ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-md`}>
          <ul className="flex flex-col gap-2 p-4">

            <li>
              <Link
                href="/news"
                className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/news") ? "text-red-500" : ""}`}
              >
                News
              </Link>
            </li>

            <li>
              <div className={`px-4 py-2 font-semibold ${pathname.startsWith("/services") ? "text-red-500" : ""}`}>
                Services
              </div>
              <ul className="pl-6 flex flex-col gap-2">
                <li>
                  <Link
                    href="/services/web"
                    className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/services/web") ? "text-red-500" : ""}`}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/app"
                    className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/services/app") ? "text-red-500" : ""}`}
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seo"
                    className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/services/seo") ? "text-red-500" : ""}`}
                  >
                    SEO
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/about"
                className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/about") ? "text-red-500" : ""}`}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/contact") ? "text-red-500" : ""}`}
              >
                Contact
              </Link>
            </li>

            <li className="flex items-center gap-2 px-4 py-2">
              <span>Dark Mode</span>
              <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
            </li>

            <li>
              <Button variant="default" className="w-full mt-2">Login</Button>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
}

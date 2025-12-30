"use client";

import Link from "next/link";
import { useState } from "react";
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">

        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center gap-6">

            {/* News */}
            <NavigationMenuItem>
              <Link href="/news" passHref legacyBehavior>
                <NavigationMenuLink className="cursor-pointer">News</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Services Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="rounded-md space-y-2 w-44 p-2 bg-white shadow-md">
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/services/web">Web Development</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/services/app">App Development</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/services/seo">SEO</Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <Link href="/about" passHref legacyBehavior>
                <NavigationMenuLink className="cursor-pointer">About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <Link href="/contact" passHref legacyBehavior>
                <NavigationMenuLink className="cursor-pointer">Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Right: Dark Mode + Login */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="inline-flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
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
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-2 p-4">

            {/* News */}
            <li>
              <Link href="/newspath" className="block px-4 py-2 hover:bg-gray-100">News</Link>
            </li>

            {/* Services - Submenu */}
            <li>
              <div className="px-4 py-2 font-semibold">Services</div>
              <ul className="pl-6 flex flex-col gap-2">
                <li>
                  <Link href="/services/web" className="block px-4 py-2 hover:bg-gray-100">Web Development</Link>
                </li>
                <li>
                  <Link href="/services/app" className="block px-4 py-2 hover:bg-gray-100">App Development</Link>
                </li>
                <li>
                  <Link href="/services/seo" className="block px-4 py-2 hover:bg-gray-100">SEO</Link>
                </li>
              </ul>
            </li>

            {/* About */}
            <li>
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
            </li>

            {/* Contact */}
            <li>
              <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
            </li>

            {/* Dark Mode */}
            <li className="flex items-center gap-2 px-4 py-2">
              <span>Dark Mode</span>
              <Switch />
            </li>

            {/* Login */}
            <li>
              <Button variant="default" className="w-full mt-2">Login</Button>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
}

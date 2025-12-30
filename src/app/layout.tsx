import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/context/themecontext";
import Footer from "@/components/shared/footer";
import { describe } from "node:test";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " বাংলাদেশ 420 - Bangladesh 420 ",
  description: "Develop by Nafiul Islam",
  icons: {
    icon: "/favicon.ico?v=4",
    apple: "/apple-touch-icon.png?v=4",
    shortcut: "/favicon-16x16.png?v=4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><ThemeProvider>
        <Navbar/>
      <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer/>
      </ThemeProvider>
      
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar/Navbar";
import Footer from "./_components/Navbar/Footer/Footer";
import { Exo } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import MyProvider from "./_components/MyProvider/MyProvider";
import CartContextProvider from "@/context/cartContext";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: "FreshCart",
  description: "E-commerce website built with Next.js 13 and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo.className} antialiased flex flex-col`}>
        <MyProvider>
          <CartContextProvider>
           <Navbar />
          {children}
          <Toaster />
          <Footer />
          </CartContextProvider>
        </MyProvider>
      </body>
    </html>
  );
}

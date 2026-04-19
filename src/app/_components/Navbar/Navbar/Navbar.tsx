"use client";
import Logo from "@/assests/images/freshcart-logo.svg";
import React, { useContext } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { MdHeadsetMic } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CiUser } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import FirstNav from "../FirstNav/FirstNav";
import { signOut, useSession } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import { CartContext } from "@/context/cartContext";

export default function Navbar() {
  const { data: mySessionData, status } = useSession();
  const { numberOfCartItems, setNumberOfCartItems } = useContext(CartContext);

  function mySignOut() {
    signOut({ redirect: true, callbackUrl: "/login" });
  }

  return (
    <>
      <FirstNav />
      <NavigationMenu className="max-w-full p-4 sticky top-0 left-0 right-0 z-50 shadow-sm shadow-gray-300 bg-white">
        <NavigationMenuList className="xl:max-w-[80%] lg:max-w-[90%] mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={180} height={100} />
          </Link>
          <NavigationMenuItem className="flex lg:hidden">
            <NavigationMenuTrigger>
              <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex justify-center items-center text-lg">
                <MdOutlineMenu />
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#16A34A] transition-all w-full block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-[#16A34A] transition-all w-full block"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="hover:text-[#16A34A] transition-all w-full block"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands"
                    className="hover:text-[#16A34A] transition-all w-full block"
                  >
                    Brands
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative w-[35%] hidden xl:flex">
            {" "}
            <Input
              placeholder="Search for products, brands and more..."
              className="rounded-2xl px-3! py-5! focus:ring-1! focus:ring-[#16A34A]! focus:shadow-md focus:shadow-[#16A34A]"
            />
            <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#16A34A] text-white absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
              <IoSearch />
            </div>
          </NavigationMenuItem>

          <div className="items-center gap-4 hidden xl:flex">
            <NavigationMenuList className="hidden xl:flex gap-3 max-w-fit">
              <NavigationMenuItem>
                <Link href="/" className="hover:text-[#16A34A] transition-all">
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/shop"
                  className="hover:text-[#16A34A] transition-all"
                >
                  Shop
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/categories"
                  className="hover:text-[#16A34A] transition-all"
                >
                  Categories
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/brands"
                  className="hover:text-[#16A34A] transition-all"
                >
                  Brands
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/support"
                  className="flex items-center gap-3 border-e-2 border-[#E5E7EB] pe-4"
                >
                  <div className="bg-[#F0FDF4] rounded-full w-10 h-10 flex justify-center items-center">
                    <MdHeadsetMic className="text-lg text-[#16A34A]" />
                  </div>
                  <div>
                    <p className="text-[#99A1AF] font-semibold text-sm">
                      Support
                    </p>
                    <p className="text-sm font-medium">24/7 Help</p>
                  </div>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuList className="hidden md:flex gap-1 max-w-fit">
              <NavigationMenuItem>
                <Link
                  href="/wishlist"
                  className="flex items-center justify-center hover:bg-[#F3F4F6] rounded-full w-8 h-8 hover:cursor-pointer text-[#6A7282] hover:text-[#16A34A] transition-all"
                >
                  <FaRegHeart />
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/cart"
                  className="relative flex items-center justify-center hover:bg-[#F3F4F6] rounded-full w-8 h-8 hover:cursor-pointer text-[#6A7282] hover:text-[#16A34A] transition-all"
                >
                 {numberOfCartItems > 0 ? <div className="bg-[#16A34A] size-4 text-white absolute -top-[1px] -inset-e-0.5 rounded-full font-bold text-[10px] flex justify-center items-center">
                    {numberOfCartItems}
                  </div>: ""}
                  <FaShoppingCart className="text-xl" />
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                {status === "unauthenticated" ? (
                  <Button className="bg-[#16A34A] hover:bg-[#0f7133] text-white font-semibold rounded-2xl hover:cursor-pointer py-4 px-3">
                    <Link href="/login" className="flex gap-1 items-center">
                      <CiUser /> <span> Sign In</span>
                    </Link>
                  </Button>
                ) : (
                  <Button
                    onClick={mySignOut}
                    className="bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold rounded-xl hover:cursor-pointer py-4 px-3"
                  >
                    <div className="flex gap-1 items-center cursor-pointer">
                      <FiLogOut /> <span> Sign Out</span>
                    </div>
                  </Button>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

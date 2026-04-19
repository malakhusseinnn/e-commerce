import Image from "next/image";
import Logo from "@/assests/images/freshcart-logo.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io";
import { TbCreditCard } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaShieldHalved } from "react-icons/fa6";
import { MdHeadsetMic } from "react-icons/md";


export default function Footer() {
  return (
    <>
      <div className="w-full relative bottom-0 mt-12">
        <div className="bg-[#F0FDF4] p-4">
          <div className="w-full p-4 xl:p-0 xl:w-[80%] lg:w-[90%] mx-auto flex flex-wrap flex-col gap-3 md:flex-row md:justify-between md:items-center ">
            <div className="flex gap-4 w-full lg:w-[20%]">
              <div className="bg-[#DCFCE7] p-5 rounded-xl w-fit text-[#22C55E] flex items-center justify-center">
                <FaTruck className="font-bold" />
              </div>
              <div>
                <p className="font-bold">Free Shipping</p>
                <p className="text-[#6A7282] text-sm">On orders over 500 EGP</p>
              </div>
            </div>

            <div className="flex gap-4 w-full lg:w-[25%]">
              <div className="bg-[#DCFCE7] p-5 rounded-xl w-fit text-[#22C55E] flex items-center justify-center">
                <FaArrowRotateLeft className="font-bold" />
              </div>
              <div>
                <p className="font-bold">Easy Returns</p>
                <p className="text-[#6A7282] text-sm">14-day return policy</p>
              </div>
            </div>
            <div className="flex gap-4 w-full lg:w-[25%]">
              <div className="bg-[#DCFCE7] p-5 rounded-xl w-fit text-[#22C55E] flex items-center justify-center">
                <FaShieldHalved className="font-bold" />
              </div>
              <div>
                <p className="font-bold">Secure Payment</p>
                <p className="text-[#6A7282] text-sm">100% secure checkout</p>
              </div>
            </div>
            <div className="flex gap-4 w-full lg:w-[25%]">
              <div className="bg-[#DCFCE7] p-5 rounded-xl w-fit text-[#22C55E] flex items-center justify-center">
                <MdHeadsetMic className="font-bold" />
              </div>
              <div>
                <p className="font-bold">24/7 Support</p>
                <p className="text-[#6A7282] text-sm">Contact us anytime</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#101828] text-white py-6 mx-auto">
          <div className="xl:w-[80%] lg:w-[90%] p-4 xl:p-0 w-full mx-auto flex justify-between flex-wrap ">
            <div className="flex flex-col gap-4 md:w-[30%] w-full">
              <div className="bg-white py-2 px-4 rounded-sm w-fit">
                <Image
                  src={Logo}
                  alt="FreshCart logo - e-commerce grocery shopping platform"
                  width={150}
                  height={80}
                />
              </div>

              <p className="text-[#6A7282] font-bold text-sm">
                FreshCart is your one-stop destination for quality products.
                From fashion to electronics, we bring you the best brands at
                competitive prices with a seamless shopping experience.
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center text-[#6A7282]">
                  <FaPhoneAlt className="text-[#22C55E]" />
                  <p className="hover:cursor-pointer hover:text-[#22C55E] transition-color duration-300 font-bold text-sm">
                    +1 (800) 123-4567
                  </p>
                </div>
                <div className="flex gap-2 items-center text-[#6A7282]">
                  <IoMdMail className="text-[#22C55E]" />
                  <p className="hover:cursor-pointer hover:text-[#22C55E] transition-color duration-300 font-bold text-sm">
                    support@freshcart.com
                  </p>
                </div>
                <div className="flex gap-2 items-center text-[#6A7282]">
                  <FaLocationDot className="text-[#22C55E]" />
                  <p className="hover:cursor-pointer hover:text-[#22C55E] transition-color duration-300 font-bold text-sm">
                    123 Commerce Street, New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <div className="bg-[#1E2939] rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#22C55E] hover:cursor-pointer transition-colors duration-300">
                  <FaFacebookF className="text-[#99A1AF] text-white transition-colors duration-300" />
                </div>
                <div className="bg-[#1E2939] rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#22C55E] hover:cursor-pointer transition-colors duration-300">
                  <FaTwitter className="text-[#99A1AF] text-white transition-colors duration-300" />
                </div>
                <div className="bg-[#1E2939] rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#22C55E] hover:cursor-pointer transition-colors duration-300">
                  <LuInstagram className="text-[#99A1AF] text-white transition-colors duration-300" />
                </div>
                <div className="bg-[#1E2939] rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#22C55E] hover:cursor-pointer transition-colors duration-300">
                  <IoLogoYoutube className="text-[#99A1AF] text-white transition-colors duration-300" />
                </div>
              </div>
            </div>

            <div className="w-full mt-3 md:mt-0 md:w-[17%] flex flex-col">
              <p className="font-bold text-xl">Shop</p>

              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p className="text-sm">All Products</p>
              </Link>
              <Link
                href="/categories"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Categories</p>
              </Link>
              <Link
                href="/brands"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Brands</p>
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Electronics</p>
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Men's Fashion</p>
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Women's Fashion</p>
              </Link>
            </div>

            <div className="w-full mt-3 md:mt-0 md:w-[17%] flex flex-col">
              <p className="font-bold text-xl">Account</p>

              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">My Account</p>
              </Link>
              <Link
                href="/categories"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Order History</p>
              </Link>
              <Link
                href="/brands"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Wishlist</p>
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Shopping Cart</p>
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Sign In</p>
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Create Account</p>
              </Link>
            </div>

            <div className="w-full mt-3 md:mt-0 md:w-[17%] flex flex-col">
              <p className="font-bold text-xl">Support</p>

              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Contact Us</p>
              </Link>
              <Link
                href="/categories"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Help Center</p>
              </Link>
              <Link
                href="/brands"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Shipping Info</p>
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Returns & Refunds</p>
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Track Order</p>
              </Link>
            </div>

            <div className="w-full mt-3 md:mt-0 md:w-[17%] flex flex-col ">
              <p className="font-bold text-xl">Legal</p>

              <Link
                href="/products"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Privacy Policy</p>
              </Link>
              <Link
                href="/categories"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Terms of Service</p>
              </Link>
              <Link
                href="/brands"
                className="flex items-center gap-2 mt-4 text-[#6A7282] hover:text-[#22C55E] transition-colors duration-300 font-bold"
              >
                {" "}
                <p  className="text-sm">Cookie Policy</p>
              </Link>
            </div>
          </div>

          {/* {footer bottom section} */}
          <div className="border-t border-[#6A7282]/25 pt-3 flex justify-center items-center mt-6">
            <div className="flex justify-between items-center w-[80%] text-[#6A7282]">
              <p>© 2026 FreshCart. All rights reserved.</p>
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <TbCreditCard />
                  Visa
                </div>
                <div className="flex gap-2 items-center">
                  <TbCreditCard />
                  Mastercard
                </div>
                <div className="flex gap-2 items-center">
                  <TbCreditCard />
                  PayPal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function page() {
  const router = useRouter();
  function goBack() {
    router.back();
  }
  return (
    <>
      <div className="bg-[#F8FBFB] flex flex-col items-center justify-center min-h-screen">
        <div className="relative">
          <div className="bg-white rounded-2xl flex justify-center items-center h-50 w-65 shadow-[0_4px_15px_#6EE599]/50">
            <FaShoppingCart className="text-[80px] text-[#6EE599]" />
          </div>
          <div className="bg-white size-23 rounded-full flex justify-center items-center absolute -top-5 -right-5">
            <div className="bg-[#1EB957] size-20 rounded-full flex justify-center items-center shadow-[0_4px_8px_#6EE599]/50">
              <p className="text-white font-bold">404</p>
            </div>
          </div>
        </div>
        <p className="text-[50px] mt-8 text-[#151C2C] font-extrabold">
          Oops! Nothing Here
        </p>
        <p className="text-[#4A5565] font-semibold max-w-100 text-center mt-2 mb-8">
          Looks like this page went out of stock! Don't worry, there's plenty
          more fresh content to explore.
        </p>

        <div className="flex items-start gap-3">
          <Link
            href="/"
            className="bg-[#16A34A] text-white font-bold px-6 py-4 rounded-lg hover:-translate-y-2 hover:shadow-md hover:shadow-[#16A34A]/50 transition-all duration-300 flex items-center gap-2"
          >
            <IoMdHome className="text-2xl" />
            Go to Home Page
          </Link>

          <button
            onClick={goBack}
            className="group text-[#4A5565] font-semibold bg-white py-4 px-6 flex items-center shadow-lg shadow-gray-300 border border-gray-200/50 gap-2 rounded-xl hover:-translate-y-2 hover:shadow-md hover:shadow-[#6EE599]/50 transition-all duration-300"
          >
            <FaArrowLeftLong className="group-hover:-translate-x-2 transition-all duration-300" />{" "}
            Go Back
          </button>
        </div>

        <div className="bg-white border border-white/50 shadow-lg shadow-gray-300 p-6 flex flex-col gap-3 mt-10 rounded-2xl">
          <p className="font-semibold text-gray-400 uppercase text-center">
            Popular Destinations
          </p>

          <div className="mt-2 flex items-center gap-4">
            <Link href="/shop" className="bg-[#F0FDF4] px-3 py-2 rounded-lg text-[#126e34] font-semibold hover:bg-[#DCFCE7] transition-all duration-300">
            All Products
            </Link>

            <Link href="/categories" className="bg-[#F3F4F6] px-3 py-2 rounded-lg text-[#4A5565] font-semibold hover:bg-[#E5E7EB] transition-all duration-300">
            Categories
            </Link>

            <Link href="/notfound" className="bg-[#F3F4F6] px-3 py-2 rounded-lg text-[#4A5565] font-semibold hover:bg-[#E5E7EB] transition-all duration-300">
            Today's Deals
            </Link>

            <Link href="/support" className="bg-[#F3F4F6] px-3 py-2 rounded-lg text-[#4A5565] font-semibold hover:bg-[#E5E7EB] transition-all duration-300">
            Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

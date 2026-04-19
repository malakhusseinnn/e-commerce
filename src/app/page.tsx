import FeaturedProducts from "./_components/FeaturedProducts/FeaturedProducts";
import HomeSlider from "./_components/Slider/HomeSlider";
import { FaTruck } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { BsHeadset } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import { lazy, Suspense } from "react";

const LazyShopByCategory = lazy(
  () => import("./_components/ShopByCategory/ShopByCategory"),
);

export default function Home() {
  return (
    <>
      <div className="min-h-screen p-4 lg:p-0">
        <div className="h-100">
          <HomeSlider />
        </div>

        <div className="my-8 xl:w-[80%] lg:w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-3">
          <div className="flex gap-3 items-center shadow-sm rounded-md py-3 px-5 lg:w-1/4 w-full hover:shadow-lg transition-shadow duration-300">
            <div className="size-12 bg-[#EFF6FF] text-[#2B7FFF] rounded-full flex justify-center items-center text-xl">
              <FaTruck />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">Free Shipping</p>
              <p className="text-xs text-[#6A7282] font-medium">
                On orders over 500 EGP
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center shadow-sm rounded-md py-3 px-5 lg:w-1/4  w-full hover:shadow-lg transition-shadow duration-300">
            <div className="size-12 bg-[#ECFDF5] text-[#00BC7D] rounded-full flex justify-center items-center text-xl">
              <FaShieldHalved />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">Secure Payment</p>
              <p className="text-xs text-[#6A7282] font-medium">
                100% secure transactions
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center shadow-sm rounded-md py-3 px-5 lg:w-1/4  w-full hover:shadow-lg transition-shadow duration-300">
            <div className="size-12 bg-[#FFF7ED] text-[#FF6900] rounded-full flex justify-center items-center text-xl">
              <FaArrowRotateLeft />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">Easy Returns</p>
              <p className="text-xs text-[#6A7282] font-medium">
                14-day return policy
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center shadow-sm rounded-md py-3 px-5 lg:w-1/4  w-full hover:shadow-lg transition-shadow duration-300">
            <div className="size-12 bg-[#FAF5FF] text-[#AD46FF] rounded-full flex justify-center items-center text-xl">
              <BsHeadset />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">24/7 Support</p>
              <p className="text-xs text-[#6A7282] font-medium">
                Dedicated support team
              </p>
            </div>
          </div>
        </div>

        <Suspense fallback={<div className="text-center py-10 text-3xl text-green-600">Loading categories...</div>}>
          <LazyShopByCategory />
        </Suspense>

        <div className="flex flex-col gap-4 lg:flex-row my-20 xl:w-[80%] lg:w-[90%] mx-auto">
          <div className="relative overflow-hidden lg:w-1/2 w-full bg-[linear-gradient(to_bottom_right,#00BC7D,#00A86B,#009E64,#008F5C,#007A55)]  rounded-xl p-6 flex flex-col gap-4 text-white">
            <p className="rounded-xl py-1 px-3 bg-[#FFFFFF33] w-fit text-sm">
              🔥 Deal of the Day
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-3xl">Fresh Organic Fruits</p>
              <p className="text-[#FFFFFFCC] font-medium">
                Get up to 40% off on selected organic fruits
              </p>
              <div className="flex gap-2 items-center">
                <span className="font-bold text-3xl">40% OFF</span>
                <p className="text-xs text-[#FFFFFFB2] font-medium">
                  Use code:{" "}
                  <span className="font-bold text-white text-md">
                    {" "}
                    ORGANIC40
                  </span>
                </p>
              </div>
            </div>
            <div>
              <Link
                href="/shop"
                className="flex gap-2 items-center bg-white py-2 px-6 text-[#009966] w-fit rounded-3xl font-semibold transition-all hover:bg-[#F3F4F6] mt-3"
              >
                Shop Now <FaLongArrowAltRight />
              </Link>
            </div>

            <div className="bg-[#FFFFFF1A] rounded-full size-38 absolute -top-16 -right-18"></div>
            <div className="bg-[#FFFFFF1A] rounded-full size-35 absolute -bottom-16 -left-18"></div>
          </div>

          <div className="relative overflow-hidden lg:w-1/2 w-full bg-[linear-gradient(to_bottom_right,#FF8904,#FF6A1A,#FF4F2F,#FF3743,#FF2056)] rounded-xl p-6 flex flex-col gap-4 text-white">
            <p className="rounded-xl py-1 px-3 bg-[#FFFFFF33] w-fit text-sm">
              ✨ New Arrivals
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-3xl">Exotic Vegetables</p>
              <p className="text-[#FFFFFFCC] font-medium">
                Discover our latest collection of premium vegetables
              </p>
              <div className="flex gap-2 items-center">
                <span className="font-bold text-3xl">25% OFF</span>
                <p className="text-xs text-[#FFFFFFB2] font-medium">
                  Use code:{" "}
                  <span className="font-bold text-white text-md"> FRESH25</span>
                </p>
              </div>
            </div>
            <div>
              <Link
                href="/shop"
                className="flex gap-2 items-center bg-white py-2 px-6 text-[#FF6900] w-fit rounded-3xl font-semibold transition-all hover:bg-[#F3F4F6] mt-3"
              >
                Explore Now <FaLongArrowAltRight />
              </Link>
            </div>

            <div className="bg-[#FFFFFF1A] rounded-full size-38 absolute -top-16 -right-18"></div>
            <div className="bg-[#FFFFFF1A] rounded-full size-35 absolute -bottom-16 -left-18"></div>
          </div>
        </div>

        <FeaturedProducts />

        <div className="my-8 xl:w-[80%] lg:w-[90%] mx-auto p-4">
          <div></div>
        </div>
      </div>
    </>
  );
}

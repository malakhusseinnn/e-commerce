"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "@/assests/images/swiper1.png";
import Link from "next/link";

export default function HomeSlider({
  spaceBetween = 0,
  slidesPerView = 1,
}: {
  spaceBetween?: number;
  slidesPerView?: number;
}) {
  return (
    <Swiper
      className="h-full"
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      speed={600}
      onSwiper={(swiper) => {
        if (swiper.activeIndex === 0) {
          const activeSlide = swiper.slides[0];
          const element = activeSlide.querySelector(".slide-content");

          if (element) {
            element.classList.add("animate-fadeUp");
          }
        }
      }}
    >
      <SwiperSlide className="relative">
        <img
          src={img.src}
          alt="Slide 1"
          className="w-full h-full object-cover "
        />
        <div className="bg-[linear-gradient(to_right,#00C950E5_0%,#00C950B3_40%,#05DF7280_100%)] absolute inset-0 flex flex-col items-start justify-center gap-4 p-12 text-white ">
          <p className="font-bold text-4xl max-w-115 animate-[fadeUp_0.9s_ease-out] slide-content">
            Fresh Products Delivered to your Door
          </p>
          <p className="font-semibold animate-[fadeUp_1s_ease-out] slide-content">
            Get 20% off your first order
          </p>
          <div className="flex gap-4 items-center">
            <Link
              href={"/shop"}
              className="font-semibold bg-white rounded-lg py-2 px-6 text-[#00C950] hover:scale-108 hover:font-bold transition-all duration-300 animate-[fadeUp_1.2s_ease-out] slide-content"
            >
              Shop Now
            </Link>
            <Link
              href={"/notfound"}
              className="font-semibold border-2 border-white/50 box-border rounded-lg py-2 px-6 text-white hover:scale-108 hover:font-bold transition-all duration-300 animate-[fadeUp_1.3s_ease-out] slide-content"
            >
              View Deals
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img.src}
          alt="Slide 2"
          className="w-full h-full object-cover "
        />
        <div className="bg-[linear-gradient(to_right,#00C950E5_0%,#00C950B3_40%,#05DF7280_100%)] absolute inset-0 flex flex-col items-start justify-center gap-4 p-12 text-white ">
          <p className="font-bold text-4xl max-w-115">
            Premium Quality Guaranteed
          </p>
          <p className="font-semibold">Fresh from farm to your table</p>
          <div className="flex gap-4 items-center">
            <Link
              href={"/shop"}
              className="font-semibold bg-white rounded-lg py-2 px-6 text-[#2B7FFF] hover:scale-108 hover:font-bold transition-all duration-300"
            >
              Shop Now
            </Link>
            <Link
              href={"/notfound"}
              className="font-semibold border-2 border-white/50 box-border rounded-lg py-2 px-6 text-white hover:scale-108 hover:font-bold transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img.src}
          alt="Slide 3"
          className="w-full h-full object-cover "
        />
        <div className="bg-[linear-gradient(to_right,#00C950E5_0%,#00C950B3_40%,#05DF7280_100%)] absolute inset-0 flex flex-col items-start justify-center gap-4 p-12 text-white ">
          <p className="font-bold text-4xl max-w-115">Fast & Free Delivery</p>
          <p className="font-semibold">Same day delivery available</p>
          <div className="flex gap-4 items-center">
            <Link
              href={"/shop"}
              className="font-semibold bg-white rounded-lg py-2 px-6 text-[#AD46FF] hover:scale-108 hover:font-bold transition-all duration-300"
            >
              Order Now
            </Link>
            <Link
              href={"/notfound"}
              className="font-semibold border-2 border-white/50 box-border rounded-lg py-2 px-6 text-white hover:scale-108 hover:font-bold transition-all duration-300"
            >
              Delivery Info
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

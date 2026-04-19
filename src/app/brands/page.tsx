import { getAllBrands } from "@/api/services/routemisr.service";
import Link from "next/link";
import { FaTags } from "react-icons/fa";
import {FaArrowRightLong } from "react-icons/fa6";

export default async function Brands() {
  const allBrands = await getAllBrands();
  return (
    <>
      <div className="w-full h-60 bg-[linear-gradient(to_bottom_right,#BC77FF_0%,#995CFF_20%,#8D50FF_100%)] flex items-center">
        <div className="my-8 xl:w-[80%] lg:w-[90%] mx-auto">
          <div className="flex gap-4">
            <div className="size-20 bg-white/25 flex items-center justify-center rounded-2xl border border-white/30 p-2">
              <FaTags className="text-white text-4xl" />
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-1">Top Brands</h2>
              <p className="text-[#D3F3DF] font-medium">
                Shop from your favorite brands
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[95%] mx-auto flex mt-12">
        <div className="flex items-center flex-wrap">
          {allBrands?.map((brand) => (
            <>
              <div className="w-full lg:w-1/3 xl:w-1/5" key={brand._id}>
                <div className="p-2">
                  <Link href={`/brands/${brand._id}`}>
                    <div className="group border h-70 py-4 border-gray-300/50 rounded-xl flex flex-col gap-3 items-center shadow-md hover:border-green-300/50">
                      <div className="size-40 rounded-xl overflow-hidden">
                        <img
                          src={brand.image}
                          alt={brand.name}
                          className="w-full h-full rounded-xl hover:scale-120 mt-3 object-contain transition-all duration-300"
                        />
                      </div>
                      <p className="font-bold group-hover:text-[#9154FF] transition-all duration-300">
                        {brand.name}
                      </p>
                      <div className="flex gap-2 items-center text-xs font-semibold text-[#9154FF] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Products <FaArrowRightLong />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

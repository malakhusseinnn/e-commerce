import { getAllCategories } from "@/api/services/routemisr.service";
import Link from "next/link";
import { FaLayerGroup } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function Categories() {
  const allCategories = await getAllCategories();
  return (
    <>
      <div className="w-full h-60 bg-[linear-gradient(to_bottom,#16A34A_0%,#22C55E_30%,#4ADE80_100%)] flex items-center">
        <div className="my-8 xl:w-[80%] lg:w-[90%] mx-auto">
          <div className="flex gap-4">
            <div className="size-20 bg-white/25 flex items-center justify-center rounded-2xl border border-white/30 p-2">
              <FaLayerGroup className="text-white text-4xl" />
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-1">All Categories</h2>
              <p className="text-[#D3F3DF] font-medium">
                Browse our wide range of product categories
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[95%] mx-auto flex mt-12">
       <div className="flex items-center flex-wrap">
         {allCategories?.map((category) => (
          <>
            <div className="w-full lg:w-1/3 xl:w-1/5" key={category._id}>
              <div className="p-2">
                <Link href={`/specificcategory/${category._id}`}>
                  <div className="group border h-80 py-4 border-gray-300/50 rounded-xl flex flex-col gap-3 items-center shadow-md hover:border-green-300/50">
                    <div className="size-55 rounded-xl overflow-hidden">
                      <img src={category.image} alt={category.name} className = "w-full h-full rounded-xl hover:scale-120 mt-3 object-cover transition-all duration-300"/>
                    </div>
                    <p className = "font-bold group-hover:text-[#16A34A] transition-all duration-300">{category.name}</p>
                    <div className = "flex gap-2 items-center text-xs font-semibold text-[#16A34A] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      View Subcategories <FaArrowRightLong />
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

import { FaBoxOpen } from "react-icons/fa";
import FeaturedProducts from "../_components/FeaturedProducts/FeaturedProducts";

export default function Shop() {
  return (
    <>
      <div className="w-full h-60 bg-[linear-gradient(to_bottom,#16A34A_0%,#22C55E_30%,#4ADE80_100%)] flex items-center">
        <div className="my-8 xl:w-[80%] lg:w-[90%] mx-auto">
          <div className="flex gap-4">
            <div className="size-20 bg-white/25 flex items-center justify-center rounded-2xl border border-white/30 p-2">
              <FaBoxOpen className="text-white text-4xl" />
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-1">All Products</h2>
              <p className="text-[#D3F3DF] font-medium">
                Explore our complete product collection
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className = "font-semibold text-[#6F7FA6] text-sm my-4 xl:w-[80%] lg:w-[90%] mx-auto">Showing 40 products</h2>

      <FeaturedProducts  isShop/>
    </>
  );
}

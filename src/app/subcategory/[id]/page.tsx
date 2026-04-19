import {
  getAllProducts,
  getSpecificSubcategory,
} from "@/api/services/routemisr.service";
import ProductCard from "@/app/_components/ProductCard/ProductCard";
import { FaBoxOpen, FaFolderOpen } from "react-icons/fa";

export default async function Subcategory(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;
  const specificSubcategory = await getSpecificSubcategory(id);
  const allProducts = await getAllProducts(80);
  console.log(allProducts);
  const products = getSpecificSubcategoryProducts(id);
  function getSpecificSubcategoryProducts() {
    return allProducts?.filter((product) => {
      return product.subcategory[0]._id === id;
    });
  }
  console.log(products);
  console.log(specificSubcategory);

  if (products?.length === 0) {
    return (
      <>
        <div className="w-full h-60 bg-[linear-gradient(to_bottom,#16A34A_0%,#22C55E_30%,#4ADE80_100%)] flex items-center">
          <div className="my-8 xl:w-[80%] lg:w-[90%] mx-auto">
            <div className="flex gap-4">
              <div className="size-20 bg-white/25 flex items-center justify-center rounded-2xl border border-white/30 p-2">
                <FaFolderOpen className="text-white text-4xl" />
              </div>
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-1">
                  {specificSubcategory?.name}
                </h2>
                <p className="text-[#D3F3DF] font-medium">
                  Choose a subcategory to browse products
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-20">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
            <FaBoxOpen className="text-3xl text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            No Products Found
          </h3>
          <p className="text-gray-500 mb-6">
            No products match your current filters.
          </p>
          <a
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            href="/shop"
          >
            View All Products
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full h-60 bg-[linear-gradient(to_bottom,#16A34A_0%,#22C55E_30%,#4ADE80_100%)] flex items-center">
        <div className="my-8 xl:w-[80%] lg:w-[90%] mx-auto">
          <div className="flex gap-4">
            <div className="size-20 bg-white/25 flex items-center justify-center rounded-2xl border border-white/30 p-2">
              <FaFolderOpen className="text-white text-4xl" />
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-1">
                {specificSubcategory?.name}
              </h2>
              <p className="text-[#D3F3DF] font-medium">
                Choose a subcategory to browse products
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full lg:w-[95%] mx-auto flex flex-wrap">
        {products?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </>
  );
}

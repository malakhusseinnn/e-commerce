import { getAllProducts } from "@/api/services/routemisr.service";
import ProductCard from './../ProductCard/ProductCard';


export default async function FeaturedProducts({isShop = false}) {
  const allProducts = await getAllProducts();

  return (
    <>
    {!isShop && <div className="lg:w-[90%] xl:w-[80%] mx-auto mt-12">
        <p className="text-2xl font-bold border-s-4 rounded-xs px-3 border-[#16A34A]">Featured <span className="text-[#16A34A]">Products</span></p>
    </div>}
      <div className="lg:w-[90%] xl:w-[80%] mx-auto mt-4 flex flex-wrap">
        {allProducts?.map((product) => (
         <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}

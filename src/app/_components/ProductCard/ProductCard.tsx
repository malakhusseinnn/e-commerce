import { ProductType } from "@/api/types/Product.type";
import Link from "next/link";
import { FaRegEye, FaStar } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import AddBTN from "../AddBTN/AddBTN";
import AddToWishlistBtn from "../AddToWishlistBtn/AddToWishlistBtn";

export default function ProductCard({ product }: { product: ProductType }) {
  const discount = ((product.price - (product.priceAfterDiscount || 0)) / product.price) * 100;
  return (
    <>
      <div key={product._id} className="py-2 px-1 w-full lg:w-1/4 xl:w-1/5">
        <div className="p-4 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border rounded-lg relative">
          <img src={product.imageCover} alt={product.title} />
          <h3 className="text-xs font-semibold mt-2 text-[#6A7282]">
            {product.category.name}
          </h3>
          <h2 className="text-sm font-semibold mt-1 line-clamp-2 text-[#364153]">
            {product.title}
          </h2>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1 mt-1 text-[#FCC800]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center gap-0.5 mt-1 text-[#6A7282] text-xs">
              <p>{product.ratingsAverage}</p>
              <p>{`(${product.ratingsQuantity})`}</p>
            </div>
          </div>

          <div className="flex justify-between items-center w-full">
            {product.priceAfterDiscount ? (
              <div className="flex gap-1 items-center mt-3">
                <span className="text-[#16A34A] font-bold text-xl ">
                  {product.priceAfterDiscount} EGP
                </span>
                <span className="text-[#6A7282] line-through font-semibold text-xs">
                  {product.price} EGP
                </span>
              </div>
            ) : (
              <span className="font-bold text-xl block mt-3">
                {product.price} EGP
              </span>
            )}

            <AddBTN  classes = "rounded-full size-10 text-3xl bg-[#16A34A] text-white cursor-pointer hover:bg-[#15803D] transition-all" word = "+" productId = {product._id}/>
          </div>

          <div className="flex flex-col gap-2 absolute top-2 inset-e-2">
            <AddToWishlistBtn productId = {product._id}/>
            <div className="size-8 rounded-full bg-white shadow-sm flex justify-center items-center text-md text-[#4A5565] hover:text-[#16A34A] transition-all duration-300 cursor-pointer">
              <FaArrowsRotate />
            </div>
            <Link
              href={`/productdetails/${product._id}`}
              title="View details"
              className="size-8 rounded-full bg-white shadow-sm flex justify-center items-center text-md text-[#4A5565] hover:text-[#16A34A] transition-all duration-300 cursor-pointer"
            >
              <FaRegEye />
            </Link>
          </div>

          {product.priceAfterDiscount && (
            <div className="absolute top-2 inset-s-2 bg-red-500 px-2 py-1 text-white text-xs font-bold rounded">
              -{Math.round(discount)}%
            </div>
          )}

        </div>
      </div>
    </>
  );
}

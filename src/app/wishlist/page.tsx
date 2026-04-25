"use client";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { FaRegHeart, FaHeart, FaTrash } from "react-icons/fa";
import { toast } from "sonner";
import { FaArrowRightLong } from "react-icons/fa6";
import { ThreeDots } from "react-loader-spinner";
import { ProductType } from './../../api/types/Product.type';
import {
  getLoggedUserWishlist,
  removeProductFromWishlist,
} from "@/actions/wishlist.actions";
import {
  wishlistResponseType,
} from "@/api/types/wishlist.types";
import { WishlistContext } from "@/context/wishlistContext";

export default function Wishlist() {
  const [allResponse, setAllResponse] = useState<null | wishlistResponseType>(null);
    const { numberOfWishlistItems, setNumberOfWishlistItems } = useContext(WishlistContext);
  

  async function getUserWishlist() {
    const res = await getLoggedUserWishlist();
    console.log("wishlist RESPONSE:", res);
    if (res.status === "success") {
      setAllResponse(res);
    }
  }

async function removeProduct(productId: string) {
  const res = await removeProductFromWishlist(productId);
  if (res.status === "success") {
    toast.success(res.message, { position: "top-center", duration: 1000 });

    setAllResponse((prev) => {
      if (!prev) return prev;
      const updatedData = prev.data.filter((p) => p._id !== productId);
      return { ...prev, data: updatedData, count: updatedData.length };
    });

    setNumberOfWishlistItems(numberOfWishlistItems - 1);
  } else {
    toast.error("Can't delete this product right now!", {
      position: "top-center",
      duration: 2000,
    });
  }
}

  useEffect(() => {
    getUserWishlist();
  }, []);

  if (!allResponse) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <>
      {allResponse.data.length > 0 ? (
        <div className="w-full lg:w-[95%] mx-auto mt-12">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="flex items-center justify-center rounded-lg size-13 bg-[#16A34A] text-white text-4xl">
                <FaHeart />
              </div>
              <p className="text-3xl font-bold">Your Wishlist</p>
            </div>
            <p className="text-[#6A7282] text-md font-semibold">
              You have{" "}
              <span className="text-[#16A34A]">
                {allResponse.count} item{allResponse.count !== 1 ? "s" : ""}
              </span>{" "}
              in your wishlist
            </p>
          </div>

          <div className="mt-5">
            <div className="p-2 flex flex-col gap-3">
              {allResponse.data.map((product: ProductType) => (
                <div
                  className="border shadow-lg p-4 rounded-lg flex gap-3 w-full"
                    key={product._id}
                  >
                  <Link
                    href={`/productdetails/${product._id}`}
                    className="overflow-hidden rounded-xl"
                  >
                    <img
                      src={product.imageCover}
                      alt="product image"
                      className="size-22 rounded-xl hover:scale-115 transition-all duration-300"
                    />
                  </Link>

                  <div className="flex flex-col gap-3 w-full">
                    <Link
                      href={`/productdetails/${product._id}`}
                      className="hover:text-[#16A34A] transition-all duration-200"
                    >
                      <p className="font-semibold text-lg">{product.title}</p>
                    </Link>

                    <p className="w-fit bg-[#F0FDF4] text-[#16A34A] rounded-lg px-2 py-1 text-xs font-semibold">
                      {product.category?.name}
                    </p>

                    <p className="text-lg text-[#16A34A] font-bold">
                      {product.price} EGP
                    </p>

                    <div className="flex justify-end items-center">
                      <button
                        onClick={() => removeProduct(product._id)}
                        className="rounded-xl size-10 border hover:cursor-pointer hover:text-white hover:bg-red-500 transition-all duration-200 border-red-400/25 bg-red-100/50 p-2 text-red-600 flex justify-center items-center"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-start items-center pt-5 border-t border-gray-200/50 mt-6">
              <Link
                href={"/shop"}
                className="text-[#16A34A] hover:text-green-700 text-sm"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50/50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-sm mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <FaRegHeart className="text-3xl text-[#6A7282]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Browse products and save your favorites here.
              </p>
              <Link
                href={"/shop"}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
              >
                Browse Products
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

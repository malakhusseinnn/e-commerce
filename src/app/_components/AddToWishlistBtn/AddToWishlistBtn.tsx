"use client";
import { addToWishlist } from "@/actions/wishlist.actions";
import { WishlistContext } from "@/context/wishlistContext";
import { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "sonner";

export default function AddToWishlistBtn({ productId }: { productId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const { numberOfWishlistItems, setNumberOfWishlistItems } = useContext(WishlistContext);
  async function AddToWishlistFun() {
    setIsLoading(true);
    const res = await addToWishlist(productId);
    if (res.status === "success") {
      toast.success(`${res.message} 💜`, {
        position: "top-center",
        duration: 2000,
      });
      setIsLoading(false);
      setNumberOfWishlistItems(numberOfWishlistItems + 1);
    } else {
      toast.error("Can't add to wishlist righ now!", {
        position: "top-center",
        duration: 2000,
      });
      setIsLoading(false);
    }
  }

  return (
    <div
      onClick={AddToWishlistFun}
      className="size-8 rounded-full bg-white shadow-sm flex justify-center items-center text-md text-[#4A5565] hover:text-[#FB2C36] transition-all duration-300 cursor-pointer"
      title="Add to wishlist"
    >
      <FaRegHeart />
    </div>
  );
}

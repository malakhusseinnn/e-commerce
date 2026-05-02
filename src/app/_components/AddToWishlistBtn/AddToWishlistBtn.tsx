"use client";
import { addToWishlist } from "@/actions/wishlist.actions";
import { WishlistContext } from "@/context/wishlistContext";
import { ReactNode, useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "sonner";

export default function AddToWishlistBtn({ productId , content , style }: { productId: string , content: ReactNode , style:string }) {
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
      toast.error("Can't add to wishlist righ now! Login First🚫", {
        position: "top-center",
        duration: 2000,
      });
      setIsLoading(false);
    }
  }

  return (
    <div
      onClick={AddToWishlistFun}
      className={style}
      title="Add to wishlist"
    >
      {content}
    </div>
  );
}

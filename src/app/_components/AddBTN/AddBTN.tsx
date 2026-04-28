"use client";
import { addToCart } from "@/actions/cart.actions";
import { ReactNode, useContext, useState } from "react";
import { toast } from "sonner";
import { FaCheck } from "react-icons/fa6";
import { CartContext } from "@/context/cartContext";

export default function AddBTN({
  classes,
  word,
  productId,
}: {
  classes: string;
  word: string | ReactNode;
  productId: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { numberOfCartItems, setNumberOfCartItems } = useContext(CartContext);
  async function AddToCart() {
    setIsLoading(true);
    const res = await addToCart(productId);
    if (res.status === "success") {
      toast.success(`${res.message} 💜`, {
        position: "top-center",
        duration: 2000,
      });
      setIsLoading(false);
      setNumberOfCartItems(numberOfCartItems + 1);
    } else {
      toast.error("Can't add to cart righ now! Login First 🚫", {
        position: "top-center",
        duration: 2000,
      });
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={AddToCart}
        className={`flex justify-center items-center ${classes}`}
      >
        {isLoading ? <FaCheck className="text-md" /> : word}
      </button>
    </>
  );
}

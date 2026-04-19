"use client";
import { getLoggedUserCart } from "@/actions/cart.actions";
import { productObjectType } from "@/api/types/cart.types";
import { createContext, ReactNode, useEffect, useState } from "react";

export const CartContext = createContext({
  numberOfCartItems: 0,
  setNumberOfCartItems(num: number) {},
});

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  async function getUserCart() {
    try {
      const res = await getLoggedUserCart();
      let sum = 0;
      res.data.products.forEach((product: productObjectType) => {
        sum += product.count;
      });
      setNumberOfCartItems(sum);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserCart();
  }, []);

  return (
    <CartContext.Provider value={{ numberOfCartItems, setNumberOfCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

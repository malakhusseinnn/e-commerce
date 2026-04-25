"use client";
import { getLoggedUserWishlist } from "@/actions/wishlist.actions";
import { productObjectType } from "@/api/types/cart.types";
import { createContext, ReactNode, useEffect, useState } from "react";

export const WishlistContext = createContext({
  numberOfWishlistItems: 0,
  setNumberOfWishlistItems(num: number) {},
});

export default function WishlistContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [numberOfWishlistItems, setNumberOfWishlistItems] = useState(0);
  async function getUserWishlist() {
    try {
      const res = await getLoggedUserWishlist();
         setNumberOfWishlistItems(res.count);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={{ numberOfWishlistItems, setNumberOfWishlistItems }}>
      {children}
    </WishlistContext.Provider>
  );
}

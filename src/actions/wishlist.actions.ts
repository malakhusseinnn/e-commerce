"use server";

import { getToken } from "@/utilities";

export async function addToWishlist(productId: string) {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error("Please, Login first!");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      method: "POST",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: productId }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

export async function getLoggedUserWishlist() {
  const token = await getToken();
  if (!token) {
    throw new Error("Please, Login first!");
  }

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    method: "GET",
    headers: {
      token: token as string,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}


export async function removeProductFromWishlist(productId: string) {
  const token = await getToken();
  if (!token) {
    throw new Error("Please, Login first!");
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    },
  );

  const data = await res.json();
  return data;
}

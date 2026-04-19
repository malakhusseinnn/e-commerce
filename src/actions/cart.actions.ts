"use server";

import { getToken } from "@/utilities";

export async function addToCart(productId: string) {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error("Please, Login first!");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
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

export async function getLoggedUserCart() {
  const token = await getToken();
  if (!token) {
    throw new Error("Please, Login first!");
  }

  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "GET",
    headers: {
      token: token as string,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

export async function updateProductQuantity(productId: string, count: number) {
  const token = await getToken();
  if (!token) {
    throw new Error("Please, Login first!");
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
    {
      method: "PUT",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count: count }),
    },
  );

  const data = await res.json();
  return data;
}

export async function removeProductFromCart(productId: string) {
  const token = await getToken();
  if (!token) {
    throw new Error("Please, Login first!");
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
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

export async function clearAllCartProducts() {
  const token = await getToken();
  console.log(token);
  if (!token) {
    throw new Error("Please, Login first!");
  }

  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "DELETE",
    headers: {
      token: token as string,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

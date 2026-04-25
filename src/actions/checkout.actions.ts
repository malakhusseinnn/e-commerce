"use server";

import { checkoutSchemaType } from "@/shemas/authShemas";
import { getToken } from "@/utilities";

export async function onlinePayment(
  cartId: string | undefined,
  url: string = process.env.NEXTAUTH_URL!,
  data: checkoutSchemaType,
) {
  const token = await getToken();
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
    {
      method: "POST",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shippingAddress: data }),
    },
  );

  const checkoutData = await res.json()
  return checkoutData;
}

export async function cashPayment(
  cartId: string | undefined,
  data: checkoutSchemaType,
) {
  const token = await getToken();
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
    {
      method: "POST",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shippingAddress: data }),
    },
  );

  const checkoutData = await res.json()
  return checkoutData;
}

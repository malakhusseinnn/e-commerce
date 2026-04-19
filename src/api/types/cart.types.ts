import { ProductType } from "./Product.type";

export interface cartData {
  cartOwner: string;
  createdAt: string;
  products: productObjectType[];
  totalCartPrice: number;
}

export interface productObjectType {
  count: number;
  price: number;
  _id: string;
  product: ProductType;
}

export interface cartResponseType {
  cartId: string;
  data: cartData;
  message: string;
  numOfCartItems: number;
  status: string;
}

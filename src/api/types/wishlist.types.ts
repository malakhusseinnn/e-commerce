import { ProductType } from "./Product.type";

export interface wishlistResponseType {
  count: number;
  data: ProductType[];
  status: string;
}

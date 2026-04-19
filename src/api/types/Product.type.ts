export interface ProductType {
  sold: number;
  images: string[];
  subcategory: SubcategoryType[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: CategoryType;
  brand: BrandType;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  availableColors?: string[];
  priceAfterDiscount?: number;
}

export interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
export interface  {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface SubcategoryType {
  _id: string;
  name: string;
  slug: string;
}
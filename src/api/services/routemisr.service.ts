import { BrandType, CategoryType, ProductType, SubcategoryType } from "../types/Product.type";

export async function getAllProducts(limit:number = 40): Promise<ProductType[] | undefined> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?limit=${limit}`,
      { cache: "force-cache",
       },
      
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSingleProduct(
  id: string,
): Promise<ProductType | undefined> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllCategories(): Promise<CategoryType[] | null> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories`,
    );
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getSpecificCategory(
  id: string,
): Promise<CategoryType | null> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
    );
    const data = await res.json();
    return data.data;
  } catch (err) {
    return null;
  }
}

export async function getAllSubCategories(
  id: string,
): Promise<CategoryType[] | null> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
    );
    const data = await res.json();
    return data.data;
  } catch (err) {
    return null;
  }
}

export async function getSpecificSubcategoryProducts(id: string) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?subcategories=${id}`,
    );
    const data = await res.json();
    return data.data;
  } catch (err) {
    return null;
  }
}

export async function getAllBrands(): Promise<BrandType[] | null> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    return null;
  }
}

export async function getSpecificBrand(
  id: string,
): Promise<BrandType | null> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    return null;
  }
}


export async function getSpecificSubcategory(
  id: string,
): Promise<SubcategoryType | null> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    return null;
  }
}
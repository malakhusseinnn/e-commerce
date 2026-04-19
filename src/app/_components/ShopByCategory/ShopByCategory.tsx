import { getAllCategories } from "@/api/services/routemisr.service";
import Link from "next/link";

export default async function ShopByCategory({}) {
  const allCategories = await getAllCategories();

  return (
    <>
      <div className="my-8 xl:w-[80%] lg:w-[90%] mx-auto">
        <div className="mt-12">
          <p className="text-2xl font-bold border-s-4 rounded-xs px-3 border-[#16A34A]">
            Shop By <span className="text-[#16A34A]">Products</span>
          </p>
        </div>

        <div className="flex flex-wrap mt-5">
          {allCategories?.map((category) => (
            <Link
              href={`/specificcategory/${category._id}`}
              key={category._id}
              className="w-full px-2 py-4 md:w-1/2 lg:w-1/4 xl:w-1/6"
            >
              <div>
                <div className="shadow-sm  border-lg rounded-md w-full p-2 flex flex-col justify-center items-center hover:shadow-lg hover:cursor-pointer transition-shadow duration-300">
                  <div className="size-20">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-full size-20"
                    />
                  </div>
                  <h2 className="text-md font-medium mt-2">{category.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

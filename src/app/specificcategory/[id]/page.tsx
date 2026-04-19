import { getAllSubCategories, getSpecificCategory } from "@/api/services/routemisr.service";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function SpecificCategory(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  const specificCategory = await getSpecificCategory(id);
  const subCategories = await getAllSubCategories(id);
  console.log("SUBBBBBB" , subCategories)

  return (
    <>
      <div className="w-full h-60 bg-[linear-gradient(to_bottom,#16A34A_0%,#22C55E_30%,#4ADE80_100%)] flex items-center">
        <div className="my-8 xl:w-[80%] lg:w-[90%] mx-auto">
          <div className="flex gap-4">
            <div className="size-20 bg-white/25 flex items-center justify-center rounded-2xl border border-white/30 p-2">
              <img
                src={specificCategory?.image}
                alt={specificCategory?.name}
                className="object-cover w-10 rounded-xl"
              />
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-1">
                {specificCategory?.name}
              </h2>
              <p className="text-[#D3F3DF] font-medium">
                Choose a subcategory to browse products
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 xl:w-[80%] lg:w-[90%] mx-auto">
        <Link
          href={"/categories"}
          className="flex gap-2 items-center text-[#6A7282] font-semibold hover:text-[#16A34A] transition-colors duration-200 mb-3"
        >
          <FaArrowLeftLong />
          Back to Categories
        </Link>

        <p className="font-bold text-md">
          {subCategories?.length} Subcategories in {specificCategory?.name}
        </p>

        <div className="flex flex-wrap mt-5">
          {subCategories?.map((category) => (
            <Link
              href={`/subcategory/${category._id}`}
              key={category._id}
              className="w-full px-2 py-4 md:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <div>
                <div className="group shadow-sm border-lg rounded-lg w-full p-5 flex flex-col gap-1 hover:shadow-lg hover:cursor-pointer hover:border hover:border-[#16A34A]/30 hover:-translate-y-2 transition-all duration-300">
                  <div className="size-15 bg-[#F0FDF4] group-hover:bg-[#DCFCE7] flex items-center justify-center rounded-2xl border border-[#DCFCE7] p-2 text-[#16A34A]">
                    <FaFolderOpen className="text-2xl" />
                  </div>
                  <h2 className="text-md font-bold mt-2 group-hover:text-[#16A34A]">
                    {category.name}
                  </h2>

                  <p className="flex gap-2 items-center text-sm text-[#16A34A] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Browse Products <FaArrowRightLong />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

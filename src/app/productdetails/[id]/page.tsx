import { getSingleProduct } from "@/api/services/routemisr.service";
import AddBTN from "@/app/_components/AddBTN/AddBTN";
import { FaShieldAlt, FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRotateLeft, FaBolt } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";

export default async function Productdetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  const product = await getSingleProduct(id);

  return (
    <>
      <div className="w-full xl:w-[80%] lg:w-[90%] mx-auto mt-12">
        <div className="flex flex-col lg:flex-row flex-wrap relative">
          <div className="p-2 w-1/4 sticky self-start top-14">
            <div className="bg-white shadow-md border rounded-xl">
              <img
                src={product?.imageCover}
                alt="product image"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="w-3/4 ">
            <div className="p-2">
              <div className=" bg-white shadow-md border rounded-xl p-5">
                <div className="border-b border-gray-300/25 pb-6  flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <div className="rounded-xl text-sm text-[#16A34A] py-2 px-3 bg-[#F0FDF4]">
                      {product?.category.name}
                    </div>
                    <div className="bg-[#F3F4F6] rounded-xl px-3 py-2 text-sm">
                      {product?.brand.name}
                    </div>
                  </div>
                  <h1 className="font-bold text-2xl">{product?.title}</h1>

                  <div className="flex gap-2 items-center">
                    <div className="flex items-center gap-1 mt-1 text-[#FCC800]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="flex items-center gap-0.5 mt-1 text-[#6A7282] text-md font-medium">
                      <p>{product?.ratingsAverage}</p>
                      <p>{`(${product?.ratingsQuantity})`} reviews</p>
                    </div>
                  </div>

                  <p className="text-4xl font-semibold">{product?.price} EGP</p>

                  <div className="flex gap-1 rounded-lg bg-[#F0FDF4] w-fit py-1 px-3 items-center text-[#16A34A] font-medium mt-2">
                    <div className="bg-[#00C950] rounded-full size-2"></div>
                    <p>In Stock</p>
                  </div>
                </div>

                <div className="border-b border-gray-300/25 pb-2">
                  <div className="mt-5">
                    <p className="font-medium text-[#434d5b]">
                      {product?.description}
                    </p>
                  </div>

                  <div className="rounded-lg p-4 bg-[#F9FAFB] flex items-center justify-between mt-5">
                    <p className="text-lg font-semibold text-[#485363]">
                      Total Price:
                    </p>
                    <p className="text-xl text-[#16A34A] font-bold">
                      {product?.price}.00 EGP
                    </p>
                  </div>

                  <div className="flex items-center flex-wrap my-5">
                    <div className="p-2 w-1/2">
                      <AddBTN
                        classes="w-full p-3 hover:cursor-pointer hover:bg-[#15803D] transition-all duration-200 justify-center rounded-lg bg-[#16A34A] text-white text-bold flex items-center gap-2"
                        word={
                          <>
                            <FaShoppingCart />
                            Add to Cart
                          </>
                        }
                        productId={product?._id || ""}
                      />
                    </div>
                    <div className="w-1/2 p-2">
                      <button className="w-full p-3 hover:cursor-pointer hover:bg-[#1E2939] transition-all duration-200 justify-center rounded-lg bg-[#101828] text-white text-bold flex items-center gap-2">
                        <FaBolt />
                        Buy Now
                      </button>
                    </div>
                  </div>

                  <div className="my-5 flex flex-wrap items-center">
                    <div className="p-2 w-11/12">
                      <button className="flex w-full gap-2 justify-center items-center border-2 border-[#E5E7EB] p-3 rounded-lg hover:cursor-pointer hover:border-[#8AF0AF] hover:text-[#16A34A] transition-all duration-300  text-medium">
                        <FaRegHeart />
                        Add to Wishlist
                      </button>
                    </div>
                    <div className="p-2 w-1/12">
                      <div className="flex justify-center items-center border-2 border-[#E5E7EB] p-3 rounded-lg hover:cursor-pointer hover:border-[#8AF0AF] hover:text-[#16A34A] transition-all duration-300 ">
                        <FaShareNodes className="text-xl" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-6 flex justify-between items-center px-4">
                  <div className="flex gap-3 items-center">
                    <div className="rounded-full size-10 text-[#16A34A] bg-[#DCFCE7] text-xl flex items-center justify-center">
                      <FaTruckFast />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Free Delivery</p>
                      <p className="text-xs font-medium text-[#434d5b]">
                        Orders over $50
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="rounded-full size-10 text-[#16A34A] bg-[#DCFCE7] text-xl flex items-center justify-center">
                      <FaArrowRotateLeft />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">30 Days Return</p>
                      <p className="text-xs font-medium text-[#434d5b]">
                        Money back
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="rounded-full size-10 text-[#16A34A] bg-[#DCFCE7] text-xl flex items-center justify-center">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Secure Payment</p>
                      <p className="text-xs font-medium text-[#434d5b]">
                        100% Protected
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

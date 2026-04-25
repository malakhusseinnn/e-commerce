"use client";
import {
  FaCheckCircle,
  FaLock,
  FaReceipt,
  FaShieldAlt,
  FaTruck,
  FaWallet,
} from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaArrowLeftLong, FaCircleInfo } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, checkoutSchemaType } from "@/shemas/authShemas";
import { FaMoneyBill } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { getLoggedUserCart } from "@/actions/cart.actions";
import { cartData, cartResponseType } from "@/api/types/cart.types";
import { onlinePayment, cashPayment } from "@/actions/checkout.actions";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/cartContext";
export default function checkout() {
  const { id }: { id: string } = useParams();
  const [selected, setSelected] = useState("");
  const [userCart, setUserCart] = useState<null | cartResponseType>(null);
  const [productDetails, setProductDetails] = useState<null | cartData>(null);
  const router = useRouter();
  const { numberOfCartItems, setNumberOfCartItems } = useContext(CartContext);

  async function getCart() {
    const res = await getLoggedUserCart();
    if (res.status === "success") {
      setProductDetails(res.data);
      setUserCart(res);
    }
  }
  useEffect(() => {
    getCart();
  }, []);

  const form = useForm<checkoutSchemaType>({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    resolver: zodResolver(checkoutSchema),
  });

  const { handleSubmit, control } = form;

  async function checkout(data: checkoutSchemaType) {
    const res = await onlinePayment(id, "", data);
    if (res.status === "success") {
      window.location.href = res.session.url;
    }
  }
  async function cash(data: checkoutSchemaType) {
    const res = await cashPayment(id, data);
    if (res.status === "success") {
      toast.success("Order Placed Successfully 💜", {
        position: "top-center",
        duration: 2000,
      });
      setNumberOfCartItems(0);
      router.push("/");
    } else {
      toast.error("Can not place the order right now! 🚫", {
        position: "top-center",
        duration: 2000,
      });
    }
  }

  return (
    <>
      <div className="w-full lg:w-[90%] mx-auto mt-12">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="flex items-center justify-center rounded-lg size-13 bg-[#16A34A] text-white text-4xl">
                <FaReceipt />
              </div>
              <p className="text-3xl font-bold">Complete Your Order</p>
            </div>
            <p className="text-[#6A7282] text-md font-semibold">
              Review your items and complete your purchase
            </p>
          </div>

          <Link
            href="/cart"
            className="flex gap-2 items-center text-[#16A34A] hover:text-[#158840] transition-all duration-300 px-4 py-2 rounded-md hover:bg-[#F0FDF4]"
          >
            <FaArrowLeftLong />
            Back to Cart
          </Link>
        </div>

        <div className="flex flex-col xl:flex-row mt-6 relative">
          <div className="xl:w-2/3 w-full">
            <div className="p-2">
              <div className="shadow-lg border rounded-xl">
                <div className="text-white bg-[#158840] rounded-tr-xl rounded-tl-xl p-3">
                  <div className="flex gap-2 items-center">
                    <IoMdHome className="text-2xl" />
                    <p className="font-bold text-xl">Shipping Address</p>
                  </div>
                  <p className="text-sm text=[#DCFCE7] mt-2">
                    Where should we deliver your order?
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 bg-[#EFF6FF] rounded-xl p-2 items-center border border-blue-300/25">
                    <div className="bg-[#DBEAFE] rounded-full size-8 text-blue-600 flex justify-center items-center">
                      <FaCircleInfo />
                    </div>
                    <div className="flex gap-1 flex-col">
                      <p className="text-[#193CB8] text-sm font-semibold">
                        Delivery Information
                      </p>
                      <p className="text-[#155DFC] text-xs">
                        Please ensure your address is accurate for smooth
                        delivery
                      </p>
                    </div>
                  </div>

                  <form
                    id="checkOutForm"
                    className="flex flex-col gap-6 mt-6"
                    onSubmit={handleSubmit(
                      selected === "cash" ? cash : checkout,
                    )}
                  >
                    <div>
                      <label
                        htmlFor="city"
                        className="text-[#364153] font-semibold"
                      >
                        City*
                      </label>
                      <Controller
                        control={control}
                        name="city"
                        render={({ field, fieldState }) => {
                          return (
                            <>
                              <Input
                                {...field}
                                type="text"
                                id="city"
                                className="w-full border border-[#99A1AF66] p-2 rounded-md mt-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-green-500/25 focus-visible:outline-none shadow-none focus:shadow-[1px_1px_8px_#16A34A98]"
                                placeholder="e.g. Cairo, Alexandria, Giza"
                              />

                              {fieldState.error && (
                                <p className="text-red-500 text-sm mt-2 font-bold bg-red-100/50 px-2 py-1 rounded-md ">
                                  {fieldState.error.message}
                                </p>
                              )}
                            </>
                          );
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="details"
                        className="text-[#364153] font-semibold"
                      >
                        Street Address*
                      </label>
                      <Controller
                        control={control}
                        name="details"
                        render={({ field, fieldState }) => {
                          return (
                            <>
                              <textarea
                                {...field}
                                id="details"
                                className="w-full border border-[#99A1AF66] p-2 rounded-md mt-1 focus:outline-none resize-none h-[120px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-green-500/25 focus-visible:outline-none shadow-none focus:shadow-[1px_1px_8px_#16A34A98]"
                                placeholder="Street name, building number, floor, apartment..."
                              />

                              {fieldState.error && (
                                <p className="text-red-500 text-sm mt-2 font-bold bg-red-100/50 px-2 py-1 rounded-md ">
                                  {fieldState.error.message}
                                </p>
                              )}
                            </>
                          );
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[#364153] font-semibold"
                      >
                        Phone Number*
                      </label>
                      <Controller
                        control={control}
                        name="phone"
                        render={({ field, fieldState }) => {
                          return (
                            <>
                              <Input
                                {...field}
                                type="tel"
                                id="phone"
                                className="w-full border border-[#99A1AF66] p-2 rounded-md mt-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-green-500 focus-visible:outline-none shadow-none focus:shadow-[1px_1px_8px_#16A34A98]"
                                placeholder="01xxxxxxxxx"
                              />

                              {fieldState.error && (
                                <p className="text-red-500 text-sm mt-2 font-bold bg-red-100/50 px-2 py-1 rounded-md ">
                                  {fieldState.error.message}
                                </p>
                              )}
                            </>
                          );
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="shadow-lg border rounded-xl mt-5">
                <div className="text-white bg-[#158840] rounded-tr-xl rounded-tl-xl p-3">
                  <div className="flex gap-2 items-center">
                    <FaWallet className="text-2xl" />
                    <p className="font-bold text-xl">Payment Method</p>
                  </div>
                  <p className="text-sm text=[#DCFCE7] mt-2">
                    Choose how you'd like to pay
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-3 mt-6">
                  <div
                    className={`cursor-pointer border-2 rounded-xl p-4 group transition-all duration-200 ${
                      selected === "cash"
                        ? "border-[#16a14984] bg-[#EDFDF5]"
                        : "border-[#E5E7EB] hover:border-[#BBF7D0] hover:bg-[#F9FAFB]"
                    }`}
                  >
                    <label
                      htmlFor="paymentMethod"
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        id="paymentMethod"
                        name="paymentMethod"
                        value="cash"
                        checked={selected === "cash"}
                        onChange={() => setSelected("cash")}
                        className="hidden"
                      />
                      <div className="flex gap-2 items-center">
                        <div
                          className={`size-15 transition-all duration-200 rounded-xl flex justify-center items-center ${
                            selected === "cash"
                              ? "bg-[#16A149]"
                              : "bg-[#F3F4F6] group-hover:bg-[#E5E7EB]"
                          }`}
                        >
                          <FaMoneyBill
                            className={`text-2xl ${selected === "cash" ? "text-white" : "text-[#99A1AF]"}`}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p
                            className={`font-bold text-lg ${selected === "cash" ? "text-[#15803D]" : ""} `}
                          >
                            Cash on Delivery
                          </p>
                          <p className="text-sm text-[#6A7282]">
                            Pay when your order arrives at your doorstep
                          </p>
                        </div>
                      </div>
                      {selected === "cash" ? (
                        <FaCheckCircle className="size-7 text-[#16A149]" />
                      ) : (
                        <div className="border-[#E5E7EB] border-2 size-7 rounded-full flex justify-center items-center "></div>
                      )}
                    </label>
                  </div>

                  <div
                    className={`cursor-pointer border-2 rounded-xl p-4 group transition-all duration-200 ${
                      selected === "online"
                        ? "border-[#16a14984] bg-[#EDFDF5]"
                        : "border-[#E5E7EB] hover:border-[#BBF7D0] hover:bg-[#F9FAFB]"
                    }`}
                  >
                    <label
                      htmlFor="paymentOnline"
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        id="paymentOnline"
                        name="paymentMethod"
                        className="hidden"
                        value="online"
                        checked={selected === "online"}
                        onChange={() => setSelected("online")}
                      />
                      <div className="flex gap-2 items-center">
                        <div
                          className={`size-15 transition-all duration-200 rounded-xl flex justify-center items-center ${
                            selected === "online"
                              ? "bg-[#16A149]"
                              : "bg-[#F3F4F6] group-hover:bg-[#E5E7EB]"
                          }`}
                        >
                          <FaWallet
                            className={`text-2xl ${selected === "online" ? "text-white" : "text-[#99A1AF]"}`}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p
                            className={`font-bold text-lg ${selected === "online" ? "text-[#15803D]" : ""} `}
                          >
                            Pay Online
                          </p>
                          <p className="text-sm text-[#6A7282]">
                            Secure payment with Credit/Debit Card via Stripe
                          </p>
                        </div>
                      </div>
                      {selected === "online" ? (
                        <FaCheckCircle className="size-7 text-[#16A149]" />
                      ) : (
                        <div className="border-[#E5E7EB] border-2 size-7 rounded-full flex justify-center items-center "></div>
                      )}
                    </label>
                  </div>

                  <div className="bg-[#EDFDF4] p-3 rounded-xl flex gap-2 items-center my-4">
                    <div className="text-[#00A63E] bg-[#DBFCE7] size-10 rounded-full flex justify-center items-center">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <p className="text-sm text-[#016630] font-semibold">
                        Secure & Encrypted
                      </p>
                      <p className="text-[#00A63E] text-xs">
                        Your payment info is protected with 256-bit SSL
                        encryption
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:w-1/3 w-full sticky self-start top-14">
            <div className="p-2">
              <div className="border border-gray-300/50 rounded-xl shadow-lg">
                <div className="flex flex-col bg-[#158840] rounded-tl-xl rounded-tr-xl p-2">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center rounded-lg size-13 text-white text-xl">
                      <FaLock />
                    </div>
                    <p className="text-xl font-bold text-white">
                      Order Summary
                    </p>
                  </div>
                  <p className="text-[#DCFCE7] text-sm font-semibold px-3">
                    {userCart?.numOfCartItems} items
                  </p>
                </div>
                <div className="h-70 overflow-y-auto mt-6 flex flex-col gap-3 p-2">
                  {productDetails?.products.map((product) => (
                    <div
                      key={product.product._id}
                      className="flex justify-between bg-[#F9FAFB] transition-all duration-200 hover:bg-[#F3F4F6] rounded-lg p-4 border border-gray-300/50"
                    >
                      <div className="flex gap-2 items-center">
                        <div className="size-15 rounded-lg">
                          <img
                            src={product.product.imageCover}
                            alt="product image"
                            className="rounded-lg object-cover h-full w-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-semibold">
                            {product.product.title}
                          </p>
                          <p className="text-[#6A7282] text-xs font-semibold">
                            {product.count} × {product.price} EGP
                          </p>
                        </div>
                      </div>
                      <p className="text-md font-bold">
                        {product.count * product.price}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 border-t border-gray-300/25">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <p className="text-[#4A5565] font-semibold">Subtotal</p>
                      <p className="text-[#4A5565] font-semibold">
                        {userCart?.data.totalCartPrice} EGP
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center text-[#4A5565] font-semibold">
                        <FaTruck />
                        <p>Shipping</p>
                      </div>
                      <p className="text-[#16A34A] text-sm font-bold">FREE</p>
                    </div>
                  </div>
                </div>

                <div className="mt-2 p-4 border-t border-gray-300/25">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">Total</p>
                    <p className="text-xl text-[#16A34A] font-bold">
                      {userCart?.data.totalCartPrice}{" "}
                      <span className="text-xs text-[#6A7282]">EGP</span>
                    </p>
                  </div>
                  <button
                    type="submit"
                    form="checkOutForm"
                    className="w-full mt-4 bg-[#16A34A] rounded-xl p-4 cursor-pointer hover:bg-[#158840] transition-all duration-200 text-white flex justify-center items-center font-bold gap-2"
                  >
                    {selected === "cash" ? (
                      <>
                        <FaMoneyBill />
                        Place Order
                      </>
                    ) : (
                      <>
                        <FaShieldAlt />
                        Proceed to Payment
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

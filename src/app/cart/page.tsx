"use client";
import {
  clearAllCartProducts,
  getLoggedUserCart,
  removeProductFromCart,
  updateProductQuantity,
} from "@/actions/cart.actions";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "sonner";
import { FaCheck } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { ThreeDots } from "react-loader-spinner";
import { cartData, cartResponseType } from "@/api/types/cart.types";
import { CartContext } from "@/context/cartContext";

export default function Cart() {
  const { numberOfCartItems, setNumberOfCartItems } = useContext(CartContext);
  const [productDetails, setProductDetails] = useState<null | cartData>(null);
  const [allResponse, setAllResponse] = useState<null | cartResponseType>(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [currentId, setCurrentId] = useState<null | string>(null);
  const [plus, setPlus] = useState(false);
  const [cartId, setCartId] = useState<string | null>(null);

  async function getUserCart() {
    const res = await getLoggedUserCart();
    console.log("CART RESPONSE:", res);
    if (res.status === "success") {
      setCartId(res.cartId);
      setProductDetails(res.data);
      setAllResponse(res);
    }
  }

  async function updateCount(id: string, newCount: number, sign: string) {
    setUpdateLoading(true);
    setCurrentId(id);
    const res = await updateProductQuantity(id, newCount);
    if (res.status === "success") {
      toast.success(res.message, { position: "top-center", duration: 1000 });
      setProductDetails(res.data);
      setUpdateLoading(false);
      setAllResponse(res);
      sign === "+"
        ? setNumberOfCartItems(numberOfCartItems + 1)
        : setNumberOfCartItems(numberOfCartItems - 1);
    } else {
      toast.error("Can't update the cart right now!", {
        position: "top-center",
        duration: 2000,
      });
      setUpdateLoading(false);
    }
  }

  async function removeProduct(productId: string, count: number) {
    const res = await removeProductFromCart(productId);
    if (res.status === "success") {
      toast.success(res.message, { position: "top-center", duration: 1000 });
      setProductDetails(res.data);
      setAllResponse(res);
      setNumberOfCartItems(numberOfCartItems - count);
    } else {
      toast.error("Can't delete this product right now!", {
        position: "top-center",
        duration: 2000,
      });
    }
  }

  async function clearCart() {
    const res = await clearAllCartProducts();
    if (res.status === "success") {
      toast.success(res.message, { position: "top-center", duration: 1000 });
      setProductDetails(res.data);
      setAllResponse(res);
      setNumberOfCartItems(0);
    } else {
      toast.error("Can't delete the cart right now!", {
        position: "top-center",
        duration: 2000,
      });
    }
  }

  useEffect(() => {
    getUserCart();
  }, []);

  if (!productDetails) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </>
    );
  }

  return (
    <>
      {productDetails?.products.length > 0 ? (
        <div className="w-full lg:w-[95%] mx-auto mt-12">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="flex items-center justify-center rounded-lg size-13 bg-[#16A34A] text-white text-4xl">
                <FaShoppingCart />
              </div>
              <p className="text-3xl font-bold">Shopping Cart</p>
            </div>
            <p className="text-[#6A7282] text-md font-semibold">
              You have{" "}
              <span className="text-[#16A34A]">
                {allResponse?.numOfCartItems} item{" "}
              </span>{" "}
              in your cart
            </p>
          </div>

          <div className="flex flex-col xl:flex-row mt-5 relative">
            <div className="w-full xl:w-3/4">
              <div className="p-2 flex flex-col gap-3">
                {productDetails?.products.map((product) => (
                  <div
                    className="border shadow-lg p-4 rounded-lg flex gap-3 w-full"
                    key={product.product.id}
                  >
                    <Link
                      href={`/productdetails/${product.product.id}`}
                      className="overflow-hidden rounded-xl"
                    >
                      <img
                        src={product.product.imageCover}
                        alt="product image"
                        className="size-22 rounded-xl hover:scale-115 transition-all duration-300"
                      />
                    </Link>
                    <div className="flex flex-col gap-3 w-full">
                      <Link
                        href={`/productdetails/${product.product.id}`}
                        className="hover:text-[#16A34A] transition-all duration-200"
                      >
                        <p className="font-semibold text-lg">
                          {product.product.title}
                        </p>
                      </Link>
                      <p className="w-fit bg-[#F0FDF4] text-[#16A34A] rounded-lg px-2 py-1 text-xs font-semibold">
                        {product.product.category.name}
                      </p>
                      <p className="text-lg text-[#16A34A] font-bold">
                        {product.price} EGP
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="bg-[#F9FAFB] rounded-lg px-2 hover:cursor-pointer py-1 border flex gap-4 items-center">
                          <button
                            className="bg=[#F9FAFB] rounded-lg border text-[#6A7282] size-8 text-2xl"
                            onClick={() => {
                              setPlus(false);
                              updateCount(
                                product.product.id,
                                product.count - 1,
                                "-",
                              );
                            }}
                          >
                            -
                          </button>
                          <p className="font-bold">{product.count}</p>
                          <button
                            className="bg-[#16A34A] hover:bg-[#15803D] hover:cursor-pointer transition-all duration-200 rounded-lg border text-white size-8 text-2xl flex justify-center items-center"
                            onClick={() => {
                              setPlus(true);
                              updateCount(
                                product.product.id,
                                product.count + 1,
                                "+",
                              );
                            }}
                          >
                            {updateLoading &&
                            product.product.id === currentId &&
                            plus ? (
                              <FaCheck className="text-sm" />
                            ) : (
                              "+"
                            )}
                          </button>
                        </div>
                        <div className="flex gap-4 items-center">
                          <div>
                            <p className="text-[#6A7282] text-sm text-end">
                              Total
                            </p>
                            <p className="font-bold text-lg">
                              {product.count * product.price}{" "}
                              <span className="text-[#6A7282] text-sm">
                                EGP
                              </span>
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              removeProduct(product.product.id, product.count);
                            }}
                            className="rounded-xl size-10 border hover:cursor-pointer hover:text-white hover:bg-red-500 transition-all duration-200 border-red-400/25 bg-red-100/50 p-2 text-red-600 flex justify-center items-center"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between items-center pt-5 border-t border-gray-200/50 mt-6">
                  <Link
                    href={"/shop"}
                    className="text-[#16A34A] hover:text-green-700 text-sm"
                  >
                    ← Continue Shopping
                  </Link>
                  <button
                    onClick={() => {
                      clearCart();
                    }}
                    className="flex items-center gap-2 text-sm text-[#99A1AF] hover:text-red-500 group transition-all duration-200 hover:cursor-pointer"
                  >
                    <FaTrash className="text-xs group-hover:scale-115" /> Clear
                    all items{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-1/4 sticky top-18 self-start">
              <div className="p-2">
                <div className="border shadow-lg rounded-lg">
                  <p className="text-white text-2xl font-bold bg-[#101828] p-4 rounded-tl-xl rounded-tr-xl">
                    Order Summary
                  </p>
                  <div className="border-b-gray-300/50 border-b p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <p className="text-[#4A5565] font-semibold test-sm">
                        Subtotal ({allResponse?.numOfCartItems} items)
                      </p>
                      <p className="text-[#4A5565] font-semibold test-sm">
                        {productDetails.totalCartPrice} EGP
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#4A5565] font-semibold test-sm">
                        Shipping
                      </p>
                      <p className="text-[#16A34A] font-semibold test-sm">
                        Calculated at checkout
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 border-b-gray-300/50 border-b ">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-xl">Estimated Total</p>
                      <p className="text-[#16A34A] font-bold test-sm">
                        {productDetails.totalCartPrice} EGP
                      </p>
                    </div>
                    <Link href={`/checkout/${cartId}`}>
                      <button className="text-white flex justify-center items-center gap-3 mt-5 rounded-lg p-3 font-semibold hover:cursor-pointer hover:bg-[#15803D] transition-all duration-300 bg-[#16A34A] w-full">
                        <FaUserAlt />
                        Secure Checkout
                      </button>
                    </Link>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 p-3">
                    <p className="text-xs text-[#4A5565]">
                      ✓ Your cart items will be saved
                    </p>
                    <p className="text-xs text-[#4A5565]">
                      ✓ Track your orders easily
                    </p>
                    <p className="text-xs text-[#4A5565]">
                      ✓ Access exclusive member deals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                <svg
                  data-prefix="fas"
                  data-icon="box-open"
                  className="svg-inline--fa fa-box-open text-5xl text-gray-300"
                  role="img"
                  viewBox="0 0 640 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Looks like you haven't added anything to your cart yet.
              <br />
              Start exploring our products!
            </p>
            <Link
              className="inline-flex items-center gap-2 bg-[#16A34A] text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg"
              href="/shop"
            >
              Start Shopping
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

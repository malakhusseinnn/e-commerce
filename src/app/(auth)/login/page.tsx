"use client";
import Image from "next/image";
import { FaTruck } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import userImage from "@/assests/images/loginImage.png";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { FaClock } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { loginSchema, loginSchemaType } from "@/shemas/authShemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
export default function Login() {
  const router = useRouter();
  const form = useForm<loginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const { handleSubmit, control } = form;

  async function Login(data: loginSchemaType) {
    // calling the api to register the user
   const response = await signIn("credentials",{...data,redirect:false})

    if (response?.ok) {
      toast.success("You logged in successfully. Welcome back 💜", {
        position: "top-center",
        duration: 3000,
      });
      form.reset();
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } else {
      toast.error("Login failed. Please try again. 🚫", {
        position: "top-center",
        duration: 3000,
      });
    }
  }

  return (
    <>
      <div className="w-full lg:w-[90%] xl:w-[80%] mx-auto mt-12">
        <div className="flex flex-col lg:flex-row flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <div className="p-6 flex flex-col gap-6">
              {" "}
              <div>
                <div>
                  <Image
                    src={userImage}
                    alt="fresh vegetables and fruits shopping cart illustration, modern clean style, green theme"
                    width={616}
                    height={384}
                    className="shadow-md rounded-2xl mx-auto object-cover w-full h-96"
                  />
                </div>
                <p className="text-[#1E2939] font-bold text-2xl text-center mt-5">
                  FreshCart - Your One-Stop Shop for Fresh Products
                </p>
                <p className="text-[#4A5565] text-center mt-3 font-medium">
                  Join thousands of happy customers who trust FreshCart for
                  their daily grocery needs
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center mt-6">
                    <FaTruck className="text-[#16A34A]" />
                    <p className="text-[#6A7282] text-sm font-semibold">
                      Free Delivery
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mt-6">
                    <FaShieldAlt className="text-[#16A34A]" />
                    <p className="text-[#6A7282] text-sm font-semibold">
                      Secure Payment
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mt-6">
                    <FaClock className="text-[#16A34A]" />
                    <p className="text-[#6A7282] text-sm font-semibold">
                      24/7 Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-4">
            <div className="flex flex-col gap-6 shadow-md rounded-xl p-4">
              <div>
                <h2 className="text-center text-2xl text-[#364153] font-bold">
                  <span className="text-[#16A34A]">Fresh</span>Cart
                </h2>
                <h2 className="text-center text-2xl text-[#364153] font-bold">
                  Welcome Back!
                </h2>
                <p className="text-center text-[#364153] text-sm">
                  Sign in to continue your fresh shopping experience
                </p>

                <div className="flex flex-col">
                  <div className="p-1 w-full">
                    {" "}
                    <div className="flex gap-2 justify-center hover:text-[#16A34A] transition-all duration-300 items-center text-[#101828] border border-[#D1D5DC] rounded-lg p-2 mt-6 cursor-pointer">
                      <FaGoogle className="text-red-600 text-lg" />
                      Continue with Google
                    </div>
                  </div>
                  <div className="p-1 w-full">
                    {" "}
                    <div className="flex gap-2 justify-center hover:text-[#16A34A] transition-all duration-300 items-center text-[#101828] border border-[#D1D5DC] rounded-lg p-2 mt-2 cursor-pointer">
                      <FaFacebook className="text-[#155DFC] text-xl" />
                      Continue with Facebook
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-6 mb-3">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="text-gray-500 text-sm">
                    OR CONTINUE WITH EMAIL
                  </span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <form
                  className="flex flex-col gap-5"
                  onSubmit={handleSubmit(Login)}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[#364153] font-semibold"
                    >
                      Email*
                    </label>
                    <Controller
                      control={control}
                      name="email"
                      render={({ field, fieldState }) => {
                        return (
                          <>
                            <Input
                              {...field}
                              type="email"
                              id="email"
                              className="w-full border border-[#99A1AF66] p-2 rounded-md mt-1 focus:shadow-md focus:outline-none"
                              placeholder="Enter Your Email..."
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
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-[#364153] font-semibold"
                      >
                        Password
                      </label>

                      <Link href={"/forgetpassword"} className="text-[#16A34A]">
                        Forgot Password?
                      </Link>
                    </div>
                    <Controller
                      control={control}
                      name="password"
                      render={({ field, fieldState }) => {
                        return (
                          <>
                            <Input
                              {...field}
                              type="password"
                              id="password"
                              className="w-full border border-[#99A1AF66] p-2 rounded-md mt-1 focus:shadow-md focus:outline-none"
                              placeholder="Enter Your Password..."
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

                  <div className="flex gap-4 items-center px-2">
                    <Input
                      type="checkbox"
                      id="agree"
                      name="terms"
                      className="border border-[#99A1AF66] p-2 rounded-md mt-1 w-fit"
                    />
                    <label
                      htmlFor="agree"
                      className="text-[#364153] font-medium"
                    >
                      Keep me signed in
                    </label>
                  </div>

                  <button className="w-full bg-[#16A34A] text-white font-semibold flex gap-2 items-center p-3 rounded-lg justify-center hover:bg-[#16A34A]/90 hover:cursor-pointer transition-all duration-300">
                    Sign In
                  </button>
                </form>

                <div className="py-6 border-t border-[#D1D5DC]/30 mt-5">
                  <p className="text-center text-[#4A5565] font-medium">
                    New to FreshCart?
                    <Link
                      href="/register"
                      className="text-[#16A34A] hover:underline ms-2 font-semibold"
                    >
                      Create an account
                    </Link>
                  </p>
                </div>

                <div className="text-[#6A7282] font-semibold text-xs mb-10 flex items-center justify-center gap-3">
                  <div className="flex gap-1 items-center">
                    <FaLock />
                    SSL Secured
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaUsers />
                    50K+ Users
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaStar />
                    4.9 Rating
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

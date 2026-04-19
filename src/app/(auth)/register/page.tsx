"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import userImage from "@/assests/images/userImage.png";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormType, registerSchema } from "@/shemas/authShemas";
import { userRegister } from "@/actions/auth.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const form = useForm<RegisterFormType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, control } = form;

  async function Register(data: RegisterFormType) {
    // calling the api to register the user
    const isRegistered = await userRegister(data);

    if (isRegistered) {
      toast.success("You registered successfully 💜", {
        position: "top-center",
        duration: 3000,
      });
      form.reset();
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } else {
      toast.error("Registration failed. Please try again. 🚫", {
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
            <div className="shadow-md rounded-xl p-6 flex flex-col gap-6">
              {" "}
              <div>
                <h1 className="text-[#364153] text-3xl font-bold">
                  Welcome to <span className="text-[#16A34A]">FreshCart</span>
                </h1>
                <p className="text-[#364153] text-md mt-2">
                  Join thousands of happy customers who enjoy fresh groceries
                  delivered right to their doorstep.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#BBF7D0] flex justify-center items-center size-12 rounded-full text-[#16A34A] text-xl">
                    <FaStar />
                  </div>
                  <div>
                    <p className="text-[#364153] font-semibold">
                      Premium Quality
                    </p>
                    <p className="text-sm font-medium">
                      Premium quality products sourced from trusted suppliers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-[#BBF7D0] flex justify-center items-center size-12 rounded-full text-[#16A34A] text-xl">
                    <FaTruck />
                  </div>
                  <div>
                    <p className="text-[#364153] font-semibold">
                      Fast Delivery
                    </p>
                    <p className="text-sm font-medium">
                      Same-day delivery available in most areas
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-[#BBF7D0] flex justify-center items-center size-12 rounded-full text-[#16A34A] text-xl">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <p className="text-[#364153] font-semibold">
                      Secure Shopping
                    </p>
                    <p className="text-sm font-medium">
                      Your data and payments are completely secure
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-3 mt-4">
                  <div>
                    <Image src={userImage} alt="User" width={45} height={45} />
                  </div>

                  <div>
                    <p className="text-[#364153] font-semibold">
                      Sarah Johnson
                    </p>
                    <div className="flex gap-1 text-[#FFDF20]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p className="text-[#4A5565] mt-3">
                  "FreshCart has transformed my shopping experience. The quality
                  of the products is outstanding, and the delivery is always on
                  time. Highly recommend!"
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-4">
            <div className="flex flex-col gap-6 shadow-md rounded-xl p-4">
              <div>
                <h2 className="text-center text-2xl text-[#364153] font-bold">
                  Create Your Account
                </h2>
                <p className="text-center text-[#364153] text-sm">
                  Start your fresh journey with us today
                </p>

                <div className="flex gap-2">
                  <div className="p-1 w-1/2">
                    {" "}
                    <div className="flex gap-1 justify-center hover:text-[#16A34A] transition-all duration-300 items-center text-[#101828] border border-[#D1D5DC] rounded-lg p-2 mt-6 cursor-pointer">
                      <FaGoogle className="text-red-600" />
                      Google
                    </div>
                  </div>
                  <div className="p-1 w-1/2">
                    {" "}
                    <div className="flex gap-1 justify-center hover:text-[#16A34A] transition-all duration-300 items-center text-[#101828] border border-[#D1D5DC] rounded-lg p-2 mt-6 cursor-pointer">
                      <FaFacebook className="text-[#155DFC]" />
                      Facebook
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-6 mb-3">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="text-gray-500 text-sm">or</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <form
                  className="flex flex-col gap-5"
                  onSubmit={handleSubmit(Register)}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[#364153] font-semibold"
                    >
                      Name*
                    </label>
                    <Controller
                      control={control}
                      name="name"
                      render={({ field, fieldState }) => {
                        return (
                          <>
                            <Input
                              {...field}
                              type="text"
                              id="name"
                              className="w-full border border-[#99A1AF66] p-2 rounded-md mt-1 focus:shadow-md focus:outline-none"
                              placeholder="Enter Your Name..."
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
                    <label
                      htmlFor="password"
                      className="text-[#364153] font-semibold"
                    >
                      Password*
                    </label>
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
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="text-[#364153] font-semibold"
                    >
                      Confirm Password*
                    </label>
                    <Controller
                      control={control}
                      name="rePassword"
                      render={({ field, fieldState }) => {
                        return (
                          <>
                            <Input
                              {...field}
                              type="password"
                              id="confirmPassword"
                              className="w-full border border-[#99A1AF66] p-2 rounded-md mt-1 focus:shadow-md focus:outline-none"
                              placeholder="Confirm Your Password..."
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
                              className="w-full border border-[#99A1AF66] p-2 rounded-md mt-1 focus:shadow-md focus:outline-none"
                              placeholder="Enter Your Phone Number..."
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
                      I agree to the{" "}
                      <span className="text-[#16A34A] hover:cursor-pointer">
                        Terms of Service
                      </span>{" "}
                      and{" "}
                      <span className="text-[#16A34A] hover:cursor-pointer">
                        Privacy Policy
                      </span>{" "}
                      *
                    </label>
                  </div>

                  <button className="w-full bg-[#16A34A] text-white flex gap-2 items-center p-3 rounded-lg justify-center hover:bg-[#16A34A]/90 hover:cursor-pointer transition-all duration-300">
                    <FaUserPlus />
                    Create My Account
                  </button>
                </form>

                <div className="py-6 border-t border-[#D1D5DC]/30 mt-5">
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-[#16A34A] hover:underline"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

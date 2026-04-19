"use client";
import { FaTruck, FaUserPlus } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaGift } from "react-icons/fa6";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function FirstNav() {
  const { data: mySessionData, status } = useSession();

  return (
    <>
      <div className=" border-b border-[#E5E7EB]">
        <div className="flex flex-col gap-2 xl:justify-between xl:flex-row items-center py-2 px-3 md:w-[80%] mx-auto">
          <div className="flex gap-3 items-center">
            <div className="flex gap-2 items-center">
              <FaTruck className="text-[#16A34A]" />
              <p className="text-[#6A7282] font-semibold text-sm">
                Free Shipping on Orders 500 EGP
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaGift className="text-[#16A34A]" />
              <p className="text-[#6A7282] font-semibold text-sm">
                New Arrivals Daily
              </p>
            </div>
          </div>
          <div className="gap-4 items-center flex flex-col md:justify-between md:flex-row">
            <div className="flex gap-3 items-center border-e-2 border-[#E5E7EB] pe-4">
              <div className="flex gap-2 items-center text-sm text-[#6A7282] font-semibold hover:cursor-pointer hover:text-[#16A34A] transition-all">
                <FaPhoneAlt />
                <p>+1 (800) 123-4567</p>
              </div>
              <div className="flex gap-2 items-center  text-sm text-[#6A7282] font-semibold hover:cursor-pointer hover:text-[#16A34A] transition-all">
                <CiMail />
                <p>support@freshcart.com</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              {status === "unauthenticated" ? (
                <>
                  <Link
                    href="/login"
                    className="flex gap-2 items-center  text-sm text-[#6A7282] font-semibold  hover:cursor-pointer hover:text-[#16A34A] transition-all"
                  >
                    <CiUser />
                    <p>Sign In</p>
                  </Link>

                  <Link
                    href="/register"
                    className="flex gap-2 items-center  text-sm text-[#6A7282] font-semibold  hover:cursor-pointer hover:text-[#16A34A] transition-all"
                  >
                    <FaUserPlus />
                    <p>Sign Up</p>
                  </Link>
                </>
              ) : (
                ""
              )}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

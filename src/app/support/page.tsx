import { FaHeadset } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { FaCircleQuestion } from "react-icons/fa6";
import Link from "next/link";

export default function Support() {
  return (
    <>
      <div className="w-full h-60 bg-[linear-gradient(to_bottom,#16A34A_0%,#22C55E_30%,#4ADE80_100%)] flex items-center">
        <div className="my-8 xl:w-[80%] lg:w-[90%] mx-auto">
          <div className="flex gap-4">
            <div className="size-20 bg-white/25 flex items-center justify-center rounded-2xl border border-white/30 p-2">
              <FaHeadset className="text-white text-4xl" />
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-1">Contact Us</h2>
              <p className="text-[#D3F3DF] font-medium">
                We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row my-8 lg:w-[95%] mx-auto flex-wrap">
        <div className="w-full xl:w-1/4">
          <div className="p-4 flex flex-col gap-8">
            <div className="p-5 border border-white/50 shadow-sm flex gap-4 rounded-lg">
              <div className="size-10 rounded-lg bg-[#F0FDF4] flex justify-center items-center">
                <FaPhoneAlt className="text-[#16A34A] text-lg" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold">Phone</p>
                <p className="text-sm text-[#6A7282]">
                  Mon-Fri from 8am to 6pm
                </p>
                <a
                  href="tel:+1800123-4567"
                  className="text-[#16A34A] hover:underline"
                >
                  +1 (800) 123-4567
                </a>
              </div>
            </div>
            <div className="p-5 border border-white/50 shadow-sm flex gap-4 rounded-lg">
              <div className="size-10 rounded-lg bg-[#F0FDF4] flex justify-center items-center">
                <IoMail className="text-[#16A34A] text-lg" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold">Email</p>
                <p className="text-sm text-[#6A7282]">
                  We'll respond within 24 hours
                </p>
                <a
                  href="mailto:support@freshcart.com"
                  className="text-[#16A34A] hover:underline"
                >
                  support@freshcart.com
                </a>
              </div>
            </div>
            <div className="p-5 border border-white/50 shadow-sm flex gap-4 rounded-lg">
              <div className="size-10 rounded-lg bg-[#F0FDF4] flex justify-center items-center">
                <FaLocationDot className="text-[#16A34A] text-lg" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold">Office</p>
                <p className="text-sm text-[#6A7282]">
                  123 Commerce Street New York, NY 10001 United States
                </p>
              </div>
            </div>
            <div className="p-5 border border-white/50 shadow-sm flex gap-4 rounded-lg">
              <div className="size-10 rounded-lg bg-[#F0FDF4] flex justify-center items-center">
                <FaClock className="text-[#16A34A] text-lg" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold">Business Hours</p>
                <p className="text-sm text-[#6A7282]">
                  Monday - Friday: 8am - 6pm Saturday: 9am - 4pm Sunday:
                  Closed{" "}
                </p>
              </div>
            </div>

            <div className="p-5 border border-white/50 shadow-sm flex flex-col gap-4 rounded-lg">
              <p className="font-bold text-lg">Follow Us</p>
              <div className="flex gap-2">
                <div className="size-12 rounded-full bg-[#F3F4F6] flex justify-center items-center text-[#6A7282] hover:bg-[#16A34A] hover:text-white cursor-pointer transition-all duration-300">
                  <FaFacebookF />
                </div>
                <div className="size-12 rounded-full bg-[#F3F4F6] flex justify-center items-center text-[#6A7282] hover:bg-[#16A34A] hover:text-white cursor-pointer transition-all duration-300">
                  <FaTwitter />
                </div>
                <div className="size-12 rounded-full bg-[#F3F4F6] flex justify-center items-center text-[#6A7282] hover:bg-[#16A34A] hover:text-white cursor-pointer transition-all duration-300">
                  <FaInstagram />
                </div>
                <div className="size-12 rounded-full bg-[#F3F4F6] flex justify-center items-center text-[#6A7282] hover:bg-[#16A34A] hover:text-white cursor-pointer transition-all duration-300">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-3/4 mt-8 xl:mt-0">
          <div className="p-4">
            <div className="border border-white/50 shadow-sm rounded-lg p-6">
              <div className="flex gap-4">
                <div className="size-12 rounded-lg bg-[#F0FDF4] flex justify-center items-center">
                  <FaHeadset className="text-[#16A34A] text-xl" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-lg">Send us a Message</p>
                  <p className="text-sm text-[#6A7282]">
                    Fill out the form and we'll get back to you
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <form className="flex flex-col gap-6">
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-2 w-1/2 p-1">
                      <label htmlFor="fullName" className="text-sm">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border border-gray-200 rounded-xl p-3  focus:shadow-[0_0_10px_rgba(22,163,74,0.5)] focus:outline-none focus:border focus:border-[#16A34A]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2 p-1">
                      <label htmlFor="fullName" className="text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="border border-gray-200 rounded-xl p-3  focus:shadow-[0_0_10px_rgba(22,163,74,0.5)] focus:outline-none focus:border focus:border-[#16A34A]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="border border-gray-200 rounded-xl p-3  focus:shadow-[0_0_10px_rgba(22,163,74,0.5)] focus:outline-none focus:border focus:border-[#16A34A]"
                    >
                      <option selected>Select a subject</option>
                      <option value="general">General Industry</option>
                      <option value="order">Order Support</option>
                      <option value="shipping">Shipping Questions</option>
                      <option value="returns">Returns & Refunds</option>
                      <option value="product">Product Information</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 w-1/2 p-1 w-full">
                    <label htmlFor="message" className="text-sm">
                      Message
                    </label>
                    <textarea
                      className="w-full border border-gray-200 rounded-xl p-3 resize-none focus:shadow-[0_0_10px_rgba(22,163,74,0.5)] focus:outline-none focus:border focus:border-[#16A34A]"
                      placeholder="How can We Help You?"
                      rows={5}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#16A34A] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#15873D] transition-all duration-300 flex items-center gap-2 w-max"
                  >
                    <BsFillSendFill />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-6 bg-[#F0FDF4] p-8 rounded-lg flex gap-5">
              <div className="size-12 bg-white rounded-lg flex justify-center items-center">
                <FaCircleQuestion className="text-[#16A34A] text-lg" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Looking for quick answers?</p>
                <p className="text-sm">Check out our Help Center for frequently asked questions about orders, shipping, returns, and more.</p>
                <Link href="/notfound" className="text-[#16A34A] hover:underline w-max text-sm">Visit Help Center →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import "./Contact.css";
import { HeadingText } from "../untility/HeadingText/HeadingText";
export const ContactFrom = () => {
  return (
    <>
      <div id="contact" class="container py-5 mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-10 relative ">
          <div className="absolute top-[30px] flex justify-center items-center w-[100%] z-[100]">
            <HeadingText title1={"Contact Me"} title2={"Contact"} />
          </div>
          <div className="h-[400px] bg-[#00000090] absolute w-[100%] z-[10]"></div>
          <div class="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>

          <div class="container px-6 md:px-12">
            <div class="block  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,5%,0.7)] rounded-lg shadow-black/20 md:py-16 md:px-12 relative z-[20] -mt-[180px] backdrop-blur-[30px]">
              <div class="contact-container-box flex gap-10 ">
                <div class="flex flex-row justify-center items-center w-[100%] md:w-[60%] ">
                  <div class="md:socal-icon flex flex-col md:block w-[100%] gap-5">
                    <div class="flex flex-col justify-center items-center border-2 md:p-5 p-4">
                      <FaEnvelope className="text-[28px]" />
                      <p class="pt-2  dark:text-white  text-[16px]">
                        johirulislam574206@gmail.com
                      </p>
                    </div>
                    <div class="flex flex-col justify-center items-center border-2 md:p-5 p-4 md:my-5">
                      <FaGithub className="text-[28px]" />
                      <p class="pt-2  dark:text-white  text-[16px]">
                        johirul-islam-6
                      </p>
                    </div>
                    <div class="flex flex-col justify-center items-center border-2 md:p-5 p-4">
                      <FaPhoneAlt className="text-[28px]" />
                      <p class="pt-2  dark:text-white  text-[16px]">
                        +880 1824842336
                      </p>
                    </div>
                  </div>
                </div>

                {/* ----- frome ----- */}
                <div class="mb-12 w-full mt-10 md:mt-0 md:px-3 lg:mb-0 2 lg:px-6">
                  <form
                    action="https://getform.io/f/346003ba-86ef-4b17-9fc1-6ebd93a3af1a"
                    method="POST"
                  >
                    <div className="relative">
                      <label
                        for="name"
                        className="leading-7 text-[16px]  text-[#ffff]"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full mt-1 bg-[#10121A] rounded border border-gray-100 focus:border-indigo-500 text-base outline-none text-[#fff] py-[6px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                    <div className="relative my-2 mt-3">
                      <label
                        for="emil"
                        className="leading-7 text-[16px] text-[#ffff]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full mt-1 bg-[#10121A] rounded border border-gray-100 focus:border-indigo-500 text-base outline-none text-[#fff] py-[6px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                    <div className="relative pt-1">
                      <label
                        for="message"
                        className="leading-7 text-[16px] text-[#ffff]"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full mt-1 bg-[#10121A] rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-[#fff] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      class="mb-6 mt-2 font-[600] bg-[#FF7A01] text-[#000] inline-block w-full rounded px-6 pt-2.5 py-3 text-[14px] md:text-[18px] pb-2  uppercase leading-normal hover:text-white  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
    </>
  );
};

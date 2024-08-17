import React from "react";
import unitech from "@/app/assets/projects/MERN/unitech.png";
import Image from "next/image";
import frontend from "@/app/assets/bestProject/course-d.png";
import frontend2 from "@/app/assets/bestProject/topstudent.png";
import backend from "@/app/assets/bestProject/dahsboard.png";
import backend2 from "@/app/assets/bestProject/payment.png";
import { HeadingText } from "@/Components/untility/HeadingText/HeadingText";

const liveDetails = () => {
  return (
    <div className="mt-5 ">
      <main class="pt-16">
        {/* <!-- Hero Section --> */}
        <section class="relative text-white overflow-hidden">
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div
            class="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
              height: "100vh", // Example to cover full viewport height
              backgroundSize: "cover", // Ensures the image covers the entire div
              backgroundPosition: "center", // Centers the image
            }}
          ></div>

          <div class="container mx-auto px-4 pb-24 relative z-10">
            <div class="flex mx-w-[1400px] flex-col md:flex-row items-center justify-between relative">
              <div>
                <div className="hidden md:flex md:h-[400px] md:w-[580px] md:mt-20 ms-10 backdrop-filter backdrop-blur-lg border-4 rounded-lg rotate-12"></div>
                <Image
                  width={0}
                  height={0}
                  className="md:h-[400px] md:w-[600px] md:absolute border-2 rounded-lg top-[80px]"
                  src={unitech}
                  alt=""
                />
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 py-5 mt-5">
                  <a
                    target="_blank"
                    href="https://unitechbangladesh.com/"
                    class="border-2 hover:border-amber-600 hover:bg-transparent hover:text-white font-semibold px-8 py-3 rounded-full bg-white text-blue-900 transition duration-300 text-center"
                  >
                    Live Stite view
                  </a>
                </div>
              </div>

              {/* <!-- Right Side: Features --> */}
              <div class="w-full md:w-1/2 md:pl-12 relative top-0">
                <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                  <h2 class="text-2xl font-semibold mb-2">
                    This is A Academic Services Website.
                  </h2>
                  <p>
                    I myself prepared this full stack website with the same
                    <br className="hidden md:flex" /> frontend or back-end
                    sector and live hosting.
                  </p>
                  <ul class="space-y-4 pt-4">
                    {/* <li class="flex items-center">
                      <svg
                        class="w-6 h-6 mr-3 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      <span>Lightning-fast Performance</span>
                    </li> */}

                    <li class="flex items-center">
                      <svg
                        class="w-6 h-6 mr-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span>A student can easily create an account</span>
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-6 h-6 mr-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span>Students can book academic courses</span>
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-6 h-6 mr-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span>
                        Only their students can view notice board notices
                      </span>
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-6 h-6 mr-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span>
                        All students can be controlled from admin panel
                      </span>
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-6 h-6 mr-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span>
                        The entire website will be under the control of a super
                        admin
                      </span>
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-6 h-6 mr-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span>Besides, there is much more</span>
                    </li>
                    <li class="flex items-center">
                      {/* <svg
                        class="w-6 h-6 mr-3 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        ></path>
                      </svg> */}
                      <svg
                        class="w-6 h-6 mr-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>

                      <span>
                        An admin can easily control student transactions payment
                      </span>
                    </li>
                  </ul>
                  <p className="pt-3 font-extrabold text-gray-300">
                    Technology : Next.js, Node.js, Express, NodeMailer, JWT,
                    Redux, Tailwind, Swiper Slider, React-Slider, etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-color pt-6">
          <HeadingText title1={"Expalin Project"} title2={"Expalin Project"} />

          <div className="grid  md:grid-cols-2 gap-5 pt-20">
            <div className="flex gap-3 flex-col">
              <Image width={650} height={600} src={frontend} alt="" />
              <Image width={650} height={600} src={frontend2} alt="" />
            </div>
            <div className="content  flex flex-col justify-center items-center h-[100%]">
              <div className="">
                <h1>Front-End : </h1>
              </div>
            </div>
          </div>
          <div className="grid  md:grid-cols-2 gap-5 pt-20">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <div className="">
                <h1>Back-End : </h1>
              </div>
            </div>
            <div className="flex gap-3 flex-col">
              <Image width={650} height={600} src={backend} alt="" />
              <Image width={650} height={600} src={backend2} alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default liveDetails;

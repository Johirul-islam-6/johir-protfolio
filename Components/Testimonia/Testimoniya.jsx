"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Testimoniya.css";

import EmblaCarousel from "./EmblaCarousel";
import "./css/base.css";
import "./css/sandbox.css";
import "./css/embla.css";
import Image from "next/image";
import Image01 from "@/app/assets/review/career.png";

const OPTIONS = { align: "center", containScroll: false };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Testimoniya() {
  const [successModal, setModal] = useState(false);
  const [reviewDisplayData, setreviewData] = useState();

  const handelSubmit = async (event) => {
    event.preventDefault();
    const fieldValue = event.target;
    const name = fieldValue.full_name.value;
    const profession = fieldValue.professional.value;
    const image = fieldValue.img.value;
    const phone = fieldValue.phone.value;
    const email = fieldValue.email.value;
    const date = fieldValue.date.value;
    const message = fieldValue.message.value;

    // console.log(name, profession, image,phone, email, date, message)
    const reviewData = {
      name,
      profession,
      image,
      phone,
      email,
      date,
      message,
    };
    setreviewData(reviewData);
    try {
      const response = await fetch(
        "https://web-technology-server-site.vercel.app/review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        }
      );

      if (response.ok) {
        setModal(true);
        fieldValue("");
        // You can perform further actions here, like updating a list of posts.
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // get data loade

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://web-technology-server-site.vercel.app/reviews"
      ); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-20 px-2 md:px-5 lg:px-5 overflow-hidden text-white">
        <div className="mx-auto">
          {/*----- section header -----*/}
          <div className="mt-[100px] text-center pb-7 md:pb-10 lg:pb-10">
            <h5 className="font-bold text-2xl md:text-4xl lg:text-4xl uppercase">
              What other people say
            </h5>
            <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#bb7103] h-1"></div>
            <p className="text-center pt-3 text-[18px] rem md:px-[20%] px-2 ">
              Don t tire of doing little things for others, because sometimes{" "}
              <br /> those little things occupy the biggest part of their heart.
            </p>
          </div>
          {/*----- section header -----*/}
          <div className=" review-container grid gap-2 gap-y-5 grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto sticky-top items-center justify-center mt-5">
            <div className="flex justify-center">
              <Image
                className="w-[100%] mx-auto p-10 relative z-50"
                src={Image01}
                alt="Testimonial image"
              />
              {/* ------------ gradient div------- */}
              <div className="relative ">
                <div className="gradient-rounded-image right-[0px] background_color_animation"></div>
              </div>
            </div>

            {/* review section cursel */}
            <main className="sandbox h-[350px] border-x-2 border-indigo-500 ">
              <section className="sandbox__carousel">
                <EmblaCarousel data={data} slides={SLIDES} options={OPTIONS} />
              </section>
            </main>
          </div>

          {/* submit review */}

          <div className="collapse ">
            <input type="checkbox" />
            <div className="collapse-title text-[26px] font-medium flex justify-center items-center">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-[#5014B8] via-red-500 to-amber-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-9 py-4 text-center mr-2 mb-2 text-[20px]"
              >
                Write Review
              </button>
            </div>
            <div className="collapse-content">
              <form
                onSubmit={handelSubmit}
                className="w-[80%] mx-auto bg-[#111c34] p-16"
              >
                {successModal && (
                  <>
                    <div
                      method="dialog"
                      className="modal-box absolute top-[30%] md:left-[30%]  p-8 border-2 border-amber-700 overflow-hidden"
                    >
                      <div className="text-white  justify-center ">
                        <h2 className="text-center text-[27px] text-white rem ">
                          Take love {reviewDisplayData?.name}
                        </h2>
                        <ul className="firaCode">
                          <p>Name : {reviewDisplayData?.name}</p>
                          <p>Profession : {reviewDisplayData?.profession}</p>
                          <p>Phone : {reviewDisplayData?.phone}</p>
                          <p> Email : {reviewDisplayData?.email}</p>
                          <p>Date : {reviewDisplayData?.date}</p>
                          <p>
                            Message : {reviewDisplayData?.message.slice(0, 30)}
                            ...
                          </p>
                        </ul>
                      </div>
                      <p className="py-4 text-[18px] text-center">
                        "Confirm Sending Feedback?"
                      </p>
                      <button
                        onClick={() => {
                          setModal(false);
                          window.location.reload();
                        }}
                        className="font-bold text-[20px] btn btn-primary flex justify-center w-full"
                      >
                        Ok!
                      </button>
                    </div>
                  </>
                )}

                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="full Name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      class="bg-gray-50   input-primary border-2 py-4 text-[18px] border-rose-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Md. Rasel khan"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="Professional"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Professional Place
                    </label>
                    <input
                      type="text"
                      id="professional"
                      class="bg-gray-50   input-primary border-2 py-4 text-[18px] border-rose-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Professional Place"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="img"
                      class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white"
                    >
                      Image Link
                    </label>
                    <input
                      type="text"
                      id="img"
                      class="bg-gray-50   input-primary border-2 py-4 text-[18px] border-rose-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Image Link : https:/.."
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white"
                    >
                      Phone number
                    </label>
                    <input
                      type="number"
                      id="phone"
                      class="bg-gray-50   input-primary border-2 py-4 text-[18px] border-rose-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="123-45-678"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50  py-4 text-[18px] input-primary border-2 border-rose-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="jon@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="date"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      class="bg-gray-50  py-4 text-[18px]  input-primary border-2 border-rose-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="01/02/2023"
                      required
                    />
                  </div>
                </div>
                <div class="mb-6">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  border-2 border-rose-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mx-auto flex justify-center focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[18px] w-full sm:w-auto px-12 py-[14px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

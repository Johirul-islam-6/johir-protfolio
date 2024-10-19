"use client";
import React, { useState } from "react";
import unitech from "@/app/assets/bookstore/home.png";
import Image from "next/image";
import frontend from "@/app/assets/bookstore/home.png";
import frontend1 from "@/app/assets/bookstore/all.png";
import frontend2 from "@/app/assets/bookstore/cetagory.png";
import frontend3 from "@/app/assets/bookstore/cetagory-details.png";
import frontend4 from "@/app/assets/bookstore/no-cetagory.png";
import frontend5 from "@/app/assets/bookstore/profile.png";
import frontend6 from "@/app/assets/bestProject/topstudent.png";

import backend1 from "@/app/assets/bookstore/admin.png";
import backend2 from "@/app/assets/bookstore/user-product.png";
import backend4 from "@/app/assets/bookstore/users.png";
import backend3 from "@/app/assets/bookstore/show.png";

import { HeadingText } from "@/Components/untility/HeadingText/HeadingText";

const BookStore = () => {
  const images = [
    frontend,
    frontend1,
    frontend2,
    frontend3,
    frontend4,
    frontend5,
  ];
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

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
                    href="https://resell-book-store.vercel.app/"
                    class="border-2 hover:border-amber-600 hover:bg-transparent hover:text-white font-semibold px-8 py-3 rounded-full bg-white text-blue-900 transition duration-300 text-center"
                  >
                    Live Stite view
                  </a>
                </div>
              </div>

              {/* <!-- Right Side: Features --> */}
              <div class="w-full md:w-1/2  relative top-3">
                <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl py-8 px-8 shadow-2xl">
                  <h2 class="text-2xl font-semibold mb-2">
                    Resell Book Store C2C web application.
                  </h2>
                  <p className="text-amber-600">
                    admin access: - Email : rasel@gmail.com, Password : 123456.
                  </p>
                  <ul class="space-y-4 pt-4">
                    <li class="flex items-center text-[16px]">
                      <div className="w-[30px]">
                        <svg
                          class="w-5 h-5 mr-3 text-green-400"
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
                      </div>
                      <span>
                        <b>Account Creation & Security : </b> Users can
                        effortlessly create accounts with encrypted passwords
                        securely stored in the backend. Password recovery is
                        available via email.{" "}
                      </span>
                    </li>
                    <li class="flex items-center text-[16px]">
                      <div className="w-[30px]">
                        <svg
                          class="w-5 h-5 mr-3 text-green-400"
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
                      </div>
                      <span>
                        <b>Book Creation & Viewing :</b> Users can create up to
                        3 books, with views counted each time a book is visited.
                        Books are categorized by 7 departments and 8 semesters,
                        with options for technical, medical, and general books.
                      </span>
                    </li>
                    <li class="flex items-center text-[16px]">
                      <div className="w-[30px]">
                        <svg
                          class="w-5 h-5 mr-3 text-green-400"
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
                      </div>
                      <span>
                        <b>Search & Filtering : </b> Users can search and filter
                        books by name, semester, or category. All books are
                        listed by department and semester.{" "}
                      </span>
                    </li>
                    <li class="flex items-center text-[16px]">
                      <div className="w-[30px]">
                        <svg
                          class="w-5 h-5 mr-3 text-green-400"
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
                      </div>
                      <span>
                        <b> Admin Approval : </b> User-created books are sent to
                        the admin for approval before being displayed on the
                        client site. Admins can control user accounts, block
                        accounts, delete fake books, and approve new admins.
                      </span>
                    </li>
                    <li class="flex items-center text-[16px]">
                      <div className="w-[30px]">
                        <svg
                          class="w-5 h-5 mr-3 text-green-400"
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
                      </div>
                      <span>
                        <b> Admin Controls & Metrics : </b> Admins can track
                        site metrics, search users by various criteria (email,
                        phone, name, location), and monitor statistics like
                        total visits today, pending posts, and total posts.{" "}
                      </span>
                    </li>
                  </ul>
                  <p className="pt-3  text-white">
                    <b>Technology : </b> Next.js, Node.js, Express, MongoDb,
                    Mongoss, NodeMailer, JWT, Redux, Tailwind, Swiper Slider,
                    React-Slider, etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-color max-w-screen-xl mx-auto pt-12 md:px-5 ">
          <HeadingText title1={"Expalin Project"} title2={"Expalin Project"} />

          <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 pt-12">
              {images.map((src, index) => (
                <Image
                  key={index}
                  width={850}
                  height={800}
                  src={src}
                  alt={`Image ${index + 1}`}
                  onClick={() => openModal(index)}
                  className="cursor-pointer"
                />
              ))}
            </div>

            {currentIndex !== null && (
              <>
                <button
                  onClick={closeModal}
                  className="absolute  z-[6000000000] top-5 px-2 right-5 text-white text-2xl bg-red-800"
                >
                  ×
                </button>

                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ">
                  <button
                    onClick={goToPrevious}
                    className="absolute left-5 text-white text-3xl"
                  >
                    {"<"}
                  </button>
                  <div>
                    <Image
                      width={900}
                      height={800}
                      src={images[currentIndex]}
                      alt={`Image ${currentIndex + 1}`}
                    />
                  </div>
                  <button
                    onClick={goToNext}
                    className="absolute right-5 text-white text-3xl"
                  >
                    {">"}
                  </button>
                </div>
              </>
            )}
            <div className="container py-5">
              <h1 className="text-gray-300 text-[18px] text-justify md:text-start px-3 md:px-0">
                <b>Expalin Front-End : </b> In the Resell Book Store Management
                C2C web application, users can securely create accounts with
                encrypted passwords using bcrypt. During login, passwords are
                hashed and authenticated via JWT or session-based methods. For
                password recovery, NodeMailer sends a reset link containing a
                unique token, ensuring secure password resets. <br /> <br />
                Users can create up to three books on the platform, categorized
                by title, author, department, and semester. After creation,
                books require admin approval before being visible to ensure
                quality. A real-time view counter tracks and stores the
                popularity of each book in the database.The application offers
                robust search and filtering capabilities. Users can search books
                by title using partial matches via full-text search and filter
                by semester, category, and more. Books are listed by department
                and semester, with advanced filtering options like condition
                (new or used), price, and availability, enabling a tailored
                search experience. <br /> <br /> These features are integrated
                into a responsive user interface, ensuring a seamless experience
                across different devices, from desktops to mobile phones. The
                frontend, often built with frameworks like Next.js, dynamically
                displays data fetched from the backend..
              </h1>
              <div className="py-12">
                <a
                  target="_blank"
                  href="https://resell-book-store.vercel.app/"
                  class="border-2  border-amber-600 bg-transparent text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center"
                >
                  Live Stite view
                </a>
              </div>
            </div>
          </div>
          <div className="grid  md:grid-cols-2 gap-5 pt-5">
            <Image width={850} height={800} src={backend1} alt="" />
            <Image width={850} height={800} src={backend2} alt="" />
          </div>
          <div className="grid  md:grid-cols-2 gap-5 pt-20">
            <Image width={850} height={800} src={backend4} alt="" />
            <Image width={850} height={800} src={backend3} alt="" />
          </div>

          <div className="container py-5">
            <h1 className="text-gray-300 text-[18px] text-justify md:text-start px-3 md:px-0">
              <b>Expalin Back-End : </b> In the Resell Book Store Management C2C
              web application, users can securely create accounts with encrypted
              passwords using bcrypt. During login, passwords are hashed and
              authenticated via JWT or session-based methods. For password
              recovery, NodeMailer sends a reset link <br />
              <br />
              User-created books are first stored in a MongoDB database and
              require admin approval before appearing on the client site. The
              admin panel, built with Node.js and Express, allows admins to
              manage content effectively. Admins can control user accounts by
              blocking violators, toggling their status to 'blocked' in the
              database, delete inappropriate or fake books by sending a delete
              request to the server, and approve new admins by promoting users
              to admin status through a database role update. enabling admins to
              track site visits, manage posts, and monitor statistics, all
              stored in MongoDB. Admins can search for users using various
              criteria like email or location through Mongoose queries and track
              real-time analytics like daily visits. <br />
              <br />
              he backend features robust security and error-handling mechanisms,
              including custom authentication middleware that validates JWT
              tokens and user sessions, error-handling middleware that logs and
              responds to API request errors, and data validation using
              libraries like Joi or Validator.js to prevent injection attacks
              and ensure data integrity. <br />
              <b>admin access: - Email : rasel@gmail.com, Password : 123456.</b>
            </h1>
            <div className="pt-12">
              <a
                target="_blank"
                href="https://resell-book-store.vercel.app/admin"
                class="border-2  border-amber-600 bg-transparent text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center"
              >
                Live Stite view
              </a>
            </div>
            <h1 className="font-bold text-amber-600 text-center py-8 text-[18px]">
              {"`` "}I believe that I can improve myself more when I am in
              real-time project work with a good team.{"``"}
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};
export default BookStore;

"use client";
import "./About.css";
import "./Hire.css";
// import aboutImage from "../../app/assets/Looking-man.jpg";
import Link from "next/link";
import { FaArrowRight, FaCloudDownloadAlt } from "react-icons/fa";
import SlideImage from "./SlideImage";
import { HeadingText } from "../untility/HeadingText/HeadingText";
import { useState } from "react";

export const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [changeAbout, setChangeAbout] = useState("Education");

  const buttonText = [
    { cetagory: "All", name: "Education", total: "3" },
    { cetagory: "front-end", name: "Experience", total: "3" },
  ];

  const handleButtonClick = (index, name) => {
    setActiveIndex(index);
    setChangeAbout(name);
  };
  return (
    <>
      {/* ------------- about information --------- */}
      <div className="About pt-[60px] ">
        <HeadingText title1={"About Me"} title2={"About"} />
        <div className="block px-3 padding-1000px-in pt-[40px]">
          {/* ----------------------- about content ----------------- */}
          <div className="about-Banner flex md:grid grid-cols-2 md:flex-row relative flex-col justify-start gap-8 xl:gap-16  ">
            <div className="md:w-[100%] h-[100%] w-[80%] mx-auto md:p-5 flex justify-center items-center shadow-lg">
              <SlideImage />
            </div>
            {/* --------- about content ----- */}
            <div className="flex-1  overflow-hidden">
              <div className="flex gap-5 flex-wrap items-center justify-center md:justify-end">
                {buttonText?.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(index, item?.name)}
                    className={`life-button w-[120px] md:w-[180px] h-[44px]  text-[14px] md:text-[16px] overflow-hidden duration-300 flex justify-center items-center relative ${
                      activeIndex === index ? "bg-[#ff7c00] text-[#000]" : ""
                    }`}
                  >
                    <span className="real-text-btn absolute text-center ">
                      {item?.name}
                    </span>
                    <span className=" real-text-btn2 absolute flex justify-center items-center gap-1">
                      Click{" "}
                      <span
                        className={` ${
                          activeIndex === index
                            ? "text-[#000000]"
                            : "text-[#fff]"
                        } hidden md:flex`}
                      >
                        {item?.name}
                      </span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        color="#fff"
                        fill="none"
                      >
                        <path
                          d="M4.49843 5.00004C3.19503 4.97812 2.56968 5.23496 2.22294 6.14258C2.01241 6.69367 2 7.29677 2 7.88676V18C2.10783 18.6348 2.28792 19.0559 2.74232 19.4001C3.48302 19.9611 4.46716 20.0378 5.38129 20.2033C7.3857 20.5663 9.12918 21.1811 11.9937 22M19.489 5.00004C20.0658 4.95075 20.4998 4.97733 20.8427 5.13087C22.2148 5.74518 21.9874 7.76209 21.9874 9.26623V17C21.9944 17.5973 21.9559 18.0619 21.8719 18.4323C21.5518 19.8431 19.7432 20.0199 18.3213 20.2822C16.5435 20.6101 14.6465 21.1794 11.9937 22M11.9937 22V15"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.9929 12C14.7526 12 16.9898 9.76142 16.9898 7C16.9898 4.23858 14.7526 2 11.9929 2M11.9929 12C9.23326 12 6.99609 9.76142 6.99609 7C6.99609 4.23858 9.23326 2 11.9929 2M11.9929 12C13.0969 12 13.9917 9.76142 13.9917 7C13.9917 4.23858 13.0969 2 11.9929 2M11.9929 12C10.889 12 9.99421 9.76142 9.99421 7C9.99421 4.23858 10.889 2 11.9929 2"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                ))}
              </div>
              <br />

              {changeAbout === "Education" && (
                <div>
                  <p className="text-justify px-1 md:hidden pt-[4px] about-text text-[#9B9B9B]  text-[16px] leading-7 font-bolde">
                    I'm a CST student with a 4-year Diploma in Computer Science
                    and Technology. As class CR, I lead with creativity and
                    innovation, focusing on pursuing a BSC in Software
                    Engineering and modern technologies.
                  </p>
                  <p
                    // data-aos="fade-up"
                    // data-aos-duration={`500`}
                    // data-aos-delay="500"
                    // data-aos-easing="linear"
                    className="hidden md:block pt-[4px] about-text text-[#9B9B9B]  text-[16px] leading-7 font-bolde"
                  >
                    I'm a CST student with a 4-year Diploma in Computer Science
                    and Technology. As class CR, I lead with creativity and
                    innovation, focusing on pursuing a BSC in Software
                    Engineering and modern technologies.
                  </p>

                  <button
                    className={`mt-6 life-button w-[100%] md:w-[100%] h-[130px]  text-[14px] md:text-[16px] overflow-hidden duration-300 flex justify-start items-center relative px-5 md:px-7 gap-3`}
                  >
                    <span className="border-[0.5px] border-[#ff8001b5] p-3 md:p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        color="#ff7e01"
                        fill="none"
                      >
                        <path
                          d="M7.5 4.94531H16C16.8284 4.94531 17.5 5.61688 17.5 6.44531V7.94531"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 12.9453H9"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 16.9453H9"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.497 2L6.30767 2.00002C5.81071 2.00002 5.30241 2.07294 4.9007 2.36782C3.62698 3.30279 2.64539 5.38801 4.62764 7.2706C5.18421 7.7992 5.96217 7.99082 6.72692 7.99082H18.2835C19.077 7.99082 20.5 8.10439 20.5 10.5273V17.9812C20.5 20.2007 18.7103 22 16.5026 22H7.47246C5.26886 22 3.66619 20.4426 3.53959 18.0713L3.5061 5.16638"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>{" "}
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-easing="linear"
                      className="about-text-container flex flex-col justify-start ps-2 md:ps-5"
                    >
                      <h1 className="md:text-[20px] text-[16px] font-bold">
                        Mymensingh Polytechnic Institute.
                      </h1>
                      <p className="text-start pt-2 text-[14px] text-[#FF7B00]">
                        Diploma Engineer - CST (3.80)
                      </p>
                      <p className="text-start pt-2 text-[12px]">
                        (Jan 2021 - jan 2024)
                      </p>
                    </div>
                  </button>
                  <button
                    className={`mt-6 life-button w-[100%] md:w-[100%] h-[130px]  text-[14px] md:text-[16px] overflow-hidden duration-300 flex justify-start items-center relative px-5 md:px-7 gap-3`}
                  >
                    <span className="border-[0.5px] border-[#ff8001b5] p-3 md:p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        color="#ff7e01"
                        fill="none"
                      >
                        <path
                          d="M7.5 4.94531H16C16.8284 4.94531 17.5 5.61688 17.5 6.44531V7.94531"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 12.9453H9"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 16.9453H9"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.497 2L6.30767 2.00002C5.81071 2.00002 5.30241 2.07294 4.9007 2.36782C3.62698 3.30279 2.64539 5.38801 4.62764 7.2706C5.18421 7.7992 5.96217 7.99082 6.72692 7.99082H18.2835C19.077 7.99082 20.5 8.10439 20.5 10.5273V17.9812C20.5 20.2007 18.7103 22 16.5026 22H7.47246C5.26886 22 3.66619 20.4426 3.53959 18.0713L3.5061 5.16638"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>{" "}
                    <div
                      data-aos="fade-left"
                      data-aos-duration="800"
                      data-aos-easing="linear"
                      className="about-text-container flex flex-col justify-start ps-2 md:ps-5"
                    >
                      <h1 className="md:text-[20px] text-[16px] font-bold">
                        Goradoba Abdul Hamid High School.
                      </h1>
                      <p className="text-start pt-2 text-[14px] text-[#FF7B00]">
                        SSC - Computer Technology (A+)
                      </p>
                      <p className="text-start pt-2 text-[12px]">
                        (Jan 2018 - jan 2020)
                      </p>
                    </div>
                  </button>
                  <button
                    className={`mt-6 life-button w-[100%] md:w-[100%] h-[130px]  text-[14px] md:text-[16px] overflow-hidden duration-300 flex justify-start items-center relative px-5 md:px-7 gap-3`}
                  >
                    <span className="border-[0.5px] border-[#ff8001b5] p-3 md:p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        color="#ff7e01"
                        fill="none"
                      >
                        <path
                          d="M7.5 4.94531H16C16.8284 4.94531 17.5 5.61688 17.5 6.44531V7.94531"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 12.9453H9"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 16.9453H9"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.497 2L6.30767 2.00002C5.81071 2.00002 5.30241 2.07294 4.9007 2.36782C3.62698 3.30279 2.64539 5.38801 4.62764 7.2706C5.18421 7.7992 5.96217 7.99082 6.72692 7.99082H18.2835C19.077 7.99082 20.5 8.10439 20.5 10.5273V17.9812C20.5 20.2007 18.7103 22 16.5026 22H7.47246C5.26886 22 3.66619 20.4426 3.53959 18.0713L3.5061 5.16638"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>{" "}
                    <div className="about-text-container flex flex-col justify-start ps-2 md:ps-5">
                      <h1 className="md:text-[20px] text-[16px] font-bold">
                        Goradoba Abdul Hamid High School.
                      </h1>
                      <p className="text-start pt-2 text-[14px] text-[#FF7B00]">
                        JSC - General (A+)
                      </p>
                      <p className="text-start pt-2 text-[12px]">
                        (Jan 2021 - jan 2024)
                      </p>
                    </div>
                  </button>

                  <div className=" mt-[25px]">
                    {/* ------------ gradient div------- */}
                    <div className="absolute">
                      <div className="gradient-rounded-top right-[0px] background_color_animation"></div>
                    </div>
                  </div>
                </div>
              )}
              {/* ------------- experiance -------------------- */}
              {changeAbout === "Experience" && (
                <div>
                  <p
                    data-aos="fade-up"
                    data-aos-duration={`1500`}
                    data-aos-delay="500"
                    className="about-text overflow-hidden text-[#9B9B9B]  text-[16px] leading-7 font-bolde"
                  >
                    I'm a CSE student with over three years + of web development
                    experience. As a creative person and project leader, I've
                    been dedicated to learning various programming languages and
                    modern technologies.
                  </p>

                  <button
                    className={`mt-6 life-button w-[100%] md:w-[100%] h-[130px]  text-[14px] md:text-[16px] overflow-hidden duration-300 flex justify-start items-center relative px-5 md:px-7 gap-3`}
                  >
                    <span className="border-[0.5px] border-[#ff8001b5] p-3 md:p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="45"
                        height="45"
                        color="#ff7e01"
                        fill="none"
                      >
                        <path
                          d="M12 22L10 16H2L4 22H12ZM12 22H16"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 13V12.5C12 10.6144 12 9.67157 11.4142 9.08579C10.8284 8.5 9.88562 8.5 8 8.5C6.11438 8.5 5.17157 8.5 4.58579 9.08579C4 9.67157 4 10.6144 4 12.5V13"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19 13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13C15 11.8954 15.8954 11 17 11C18.1046 11 19 11.8954 19 13Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                        <path
                          d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                        <path
                          d="M14 17.5H20C21.1046 17.5 22 18.3954 22 19.5V20C22 21.1046 21.1046 22 20 22H19"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>{" "}
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-easing="linear"
                      className="about-text-container flex flex-col justify-start ps-2 md:ps-5"
                    >
                      <h1 className="md:text-[20px] text-start text-[16px] font-bold">
                        Fiverr.Com
                      </h1>
                      <p className="text-start pt-2 text-[14px] text-[#FF7B00]">
                        Full Stack - Web Developer
                      </p>
                      <p className="text-start pt-2 text-[12px]">
                        (May 2024 - panding...)
                      </p>
                    </div>
                  </button>

                  <button
                    className={`mt-6 life-button w-[100%] md:w-[100%] h-[130px]  text-[14px] md:text-[16px] overflow-hidden duration-300 flex justify-start items-center relative px-5 md:px-7 gap-3`}
                  >
                    <span className="border-[0.5px] border-[#ff8001b5] p-3 md:p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="45"
                        height="45"
                        color="#ff7e01"
                        fill="none"
                      >
                        <path
                          d="M12 22L10 16H2L4 22H12ZM12 22H16"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 13V12.5C12 10.6144 12 9.67157 11.4142 9.08579C10.8284 8.5 9.88562 8.5 8 8.5C6.11438 8.5 5.17157 8.5 4.58579 9.08579C4 9.67157 4 10.6144 4 12.5V13"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19 13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13C15 11.8954 15.8954 11 17 11C18.1046 11 19 11.8954 19 13Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                        <path
                          d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                        <path
                          d="M14 17.5H20C21.1046 17.5 22 18.3954 22 19.5V20C22 21.1046 21.1046 22 20 22H19"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>{" "}
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-easing="linear"
                      className="about-text-container flex flex-col justify-start ps-2 md:ps-5"
                    >
                      <h1 className="md:text-[20px] text-start text-[16px] font-bold">
                        Mocdit
                      </h1>
                      <p className="text-start pt-2 text-[14px] text-[#FF7B00]">
                        MERN Stack - Developer
                      </p>
                      <p className="text-start pt-2 text-[12px]">
                        ( Mar 2023 - Feb 2024 )
                      </p>
                    </div>
                  </button>

                  <button
                    className={`mt-6 life-button w-[100%] md:w-[100%] h-[130px]  text-[14px] md:text-[16px] overflow-hidden duration-300 flex justify-start items-center relative px-5 md:px-7 gap-3`}
                  >
                    <span className="border-[0.5px] border-[#ff8001b5] p-3 md:p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="45"
                        height="45"
                        color="#ff7e01"
                        fill="none"
                      >
                        <path
                          d="M12 22L10 16H2L4 22H12ZM12 22H16"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 13V12.5C12 10.6144 12 9.67157 11.4142 9.08579C10.8284 8.5 9.88562 8.5 8 8.5C6.11438 8.5 5.17157 8.5 4.58579 9.08579C4 9.67157 4 10.6144 4 12.5V13"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19 13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13C15 11.8954 15.8954 11 17 11C18.1046 11 19 11.8954 19 13Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                        <path
                          d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                        <path
                          d="M14 17.5H20C21.1046 17.5 22 18.3954 22 19.5V20C22 21.1046 21.1046 22 20 22H19"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>{" "}
                    <div
                      // data-aos="fade-up"
                      // data-aos-duration="500"
                      // data-aos-easing="linear"
                      className="about-text-container flex flex-col justify-start ps-2 md:ps-5"
                    >
                      <h1 className="md:text-[20px] text-[16px] font-bold">
                        Nexgeninnovators
                      </h1>
                      <p className="text-start pt-2 text-[14px] text-[#FF7B00]">
                        Front-End - Designer
                      </p>
                      <p className="text-start pt-2 text-[12px]">
                        (Jan 2020 - Feb 2022)
                      </p>
                    </div>
                  </button>

                  <div className=" mt-[25px]">
                    {/* ------------ gradient div------- */}
                    <div className="absolute">
                      <div className="gradient-rounded-top right-[0px] background_color_animation"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* ------------- about button ------------- */}
              <hr className="hr mt-[30px] relative left-[-600px]" />
              <div className=" contact-about flex flex-wrap justify-start gap-5 mt-[20px] ">
                <div className="Contact-button flex justify-start  ">
                  <Link
                    href={""}
                    className="btn-epic justify-center items-center "
                    target="_blank"
                  >
                    <div className="hover:border-s-2 border-[#ffffff] ">
                      <span className="flex justify-center items-center text-[13px] font-bold ">
                        Contact Me{" "}
                        <FaArrowRight className="text-[#fff] text-[15px] ms-1 pt-1" />
                      </span>
                      <span className="flex justify-center items-center text-[13px] font-bold ">
                        {" "}
                        Contact Me{" "}
                        <FaArrowRight className="text-[#fff] text-[15px] ms-1 pt-1" />
                      </span>
                    </div>
                  </Link>
                </div>
                {/* ----------------------------- downlode CV ------------------------------ */}
                <div className="Download-button flex justify-start  ">
                  <Link
                    href={""}
                    className="btn-epic justify-center items-center "
                    target="_blank"
                  >
                    <div className=" ">
                      <span className="flex justify-center items-center text-[13px] font-bold ">
                        {" "}
                        <FaCloudDownloadAlt className="text-[#000] text-[18px] me-2 pt-1" />{" "}
                        Download CV{" "}
                      </span>
                      <span className="flex justify-center items-center text-[13px] font-bold ">
                        <FaCloudDownloadAlt className="text-[#fff] text-[18px] me-2 pt-1" />{" "}
                        Download CV{" "}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

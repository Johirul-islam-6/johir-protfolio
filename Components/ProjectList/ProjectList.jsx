"use client";
import Image from "next/image";

import image1 from "@/app/assets/design/01.png";
import "./ProjectList.css";
import { HeadingText } from "../untility/HeadingText/HeadingText";
import { useEffect, useState } from "react";
import { SmallHeadingText } from "../untility/SmallHeadingText/SmallHeadingText";

export const ProjectList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCetagory, setActiveCetagory] = useState("All");
  const [projects, setprojects] = useState([]);
  const [singnal, setSignal] = useState(false);

  const allSite = [
    {
      id: 1,
      name: "Unitech Bangaladesh.com",
      services: "Academic Services",
      category: "MERN",
      All: "All",
      Live: "Live",
      image: image1,
      Live: "https://",
    },
    {
      id: 2,
      name: "Tech Innovators",
      services: "Consulting",
      category: "front-end",
      All: "All",
      Live: "Live",
      image: image1,
      Live: "https://",
    },
    {
      id: 3,
      name: "Eco Solutions",
      services: "Environmental Consulting",
      category: "MERN",
      All: "All",
      Live: "Live",
      image: image1,
      Live: "https://",
    },
    {
      id: 4,
      name: "Health Plus",
      services: "Healthcare Services",
      category: "front-end",
      All: "All",
      Live: "Live",
      image: image1,
      Live: "https://",
    },
    {
      id: 5,
      name: "EduTech World",
      services: "Educational Technology",
      category: "front-end",
      All: "All",
      Live: "Live",
      image: image1,
      Live: "https://",
    },
    {
      id: 6,
      name: "Design Masters",
      services: "Graphic Design",
      category: "wordpress",
      All: "All",
      Live: "Live",
      image: image1,
      Live: "https://",
    },
    {
      id: 7,
      name: "Foodie Haven",
      services: "Restaurant Management",
      category: "MERN",
      All: "All",
      Live: "Live",
      image: image1,
      Live: "https://",
    },
    {
      id: 8,
      name: "Travel Guru",
      services: "Travel Booking",
      category: "wordpress",
      All: "All",
      Live: "Live",
      image: image1,
      Live: "https://",
    },
    {
      id: 9,
      name: "Finance Hub",
      services: "Financial Services",
      category: "React",
      All: "All",
      Live: "Live",
      image: image1,
      Live: "https://",
    },
    {
      id: 10,
      name: "Media Connect",
      services: "Media Management",
      category: "Next.js",
      All: "All",
      Live: "Live",
      image: image1,
      Live: "https://",
    },
  ];

  const buttonText = [
    { cetagory: "All", name: "All", total: allSite?.length },
    { cetagory: "front-end", name: "Front-End Design", total: "6" },
    { cetagory: "MERN", name: "MERN Stack", total: "4" },
    { cetagory: "wordpress", name: "Wordpress", total: "2" },
    { cetagory: "live", name: "Live Hosting", total: "2" },
  ];

  const handleButtonClick = (index, name) => {
    setActiveIndex(index);
    setActiveCetagory(name);
  };

  useEffect(() => {
    try {
      setSignal(true);
      setTimeout(() => {
        // only MERN Stack project
        if (activeCetagory === "All") {
          const result = allSite?.filter(
            (item) => item?.All === activeCetagory
          );
          setSignal(false);
          return setprojects(result);
        }
        // only MERN Stack project
        if (activeCetagory === "MERN") {
          const result = allSite?.filter(
            (item) => item?.category === activeCetagory
          );
          setSignal(false);
          return setprojects(result);
        }
        // only front-End Stack project
        if (activeCetagory === "front-end") {
          const result = allSite?.filter(
            (item) => item?.category === activeCetagory
          );
          setSignal(false);
          return setprojects(result);
        }
        // only front-End Stack project
        if (activeCetagory === "wordpress") {
          const result = allSite?.filter(
            (item) => item?.category === activeCetagory
          );
          setSignal(false);
          return setprojects(result);
        }
      }, 1000);

      setprojects(allSite);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  }, [activeCetagory]);

  return (
    <>
      <div className="pt-10">
        <HeadingText
          title1={"Here Are My Projects"}
          title2={"Here Are My Projects"}
        />
        <div className="mt-12 all-button">
          {/* ----button maping------ */}
          <div className="flex flex-wrap gap-5">
            {buttonText?.map((item, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index, item?.cetagory)}
                className={`life-button w-[140px] md:w-[180px] h-[42px] text-[14px] md:text-[16px] overflow-hidden duration-300 flex justify-center items-center relative ${
                  activeIndex === index ? "bg-[#ff7c00] text-[#000]" : ""
                }`}
              >
                <span className="real-text-btn absolute text-center">
                  {item?.name}
                </span>
                <span className="real-text-btn2 absolute flex justify-center items-center gap-1">
                  Click{" "}
                  <span
                    className={` ${
                      activeIndex === index
                        ? "text-[#000000]"
                        : "text-[#ff7c00]"
                    }`}
                  >
                    {item?.total}
                  </span>{" "}
                  site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    color="#ff7c00"
                    fill="none"
                  >
                    <path
                      d="M11.8013 6.48949L13.2869 5.00392C14.9596 3.3312 17.1495 2.63737 19.4671 2.52399C20.3686 2.47989 20.8193 2.45784 21.1807 2.81928C21.5422 3.18071 21.5201 3.63143 21.476 4.53289C21.3626 6.8505 20.6688 9.04042 18.9961 10.7131L17.5105 12.1987C16.2871 13.4221 15.9393 13.77 16.1961 15.097C16.4496 16.1107 16.6949 17.0923 15.9578 17.8294C15.0637 18.7235 14.2481 18.7235 13.354 17.8294L6.17058 10.646C5.27649 9.75188 5.27646 8.9363 6.17058 8.04219C6.90767 7.30509 7.88929 7.55044 8.90297 7.80389C10.23 8.06073 10.5779 7.71289 11.8013 6.48949Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.9959 7H17.0049"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 21.5L7.5 16.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.5 21.5L10.5 19.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2.5 15.5L4.5 13.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="title py-8">
          <SmallHeadingText
            title1={activeCetagory === "All" ? "All WebSite" : activeCetagory}
            title2={activeCetagory === "All" ? "All WebSite" : activeCetagory}
          />
        </div>
        {/* ------ */}
        {singnal & (activeCetagory !== "All") && (
          <div className="bg-[#000] w-[100%] h-[60vh] relative">
            {" "}
            <div className="flex w-[100%] h-[60vh] justify-center items-center duration-200 ease-out">
              <span
                className={`absolute top-[80px] ${
                  singnal ? "top-[1px]" : ""
                } duration-200 ease-out `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="70"
                  height="70"
                  color="#ff7c00"
                  fill="none"
                >
                  <path
                    d="M12 3C9.05058 3 6.59627 5.11144 6.07743 7.8996C5.9907 8.36569 5.94733 8.59873 6.1089 8.90532C6.27048 9.2119 6.49914 9.31381 6.95646 9.51763C8.33509 10.1321 10.0897 10.5 12 10.5C13.9103 10.5 15.6649 10.1321 17.0435 9.51763C17.5009 9.31381 17.7295 9.2119 17.8911 8.90532C18.0527 8.59873 18.0093 8.36569 17.9226 7.8996C17.4037 5.11144 14.9494 3 12 3Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 5.5C19.989 6.28752 22 7.75946 22 9.44533C22 11.9608 17.5228 14 12 14C6.47715 14 2 11.9608 2 9.44533C2 7.75946 4.01099 6.28752 7 5.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M12 18V21"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 17L18 21"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 17L6 21"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        )}

        <div className=" grid md:grid-cols-3 lg:grid-cols-3 justify-center md:justify-start gap-y-8 gap-x-0 items-center overflow-hidden">
          {/* -------card maping----- */}
          {projects?.slice(0, 6)?.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration={`${
                index == index / 2 ? index * 8 : index * 9
              }00`}
              data-aos-delay="500"
              key={index}
              className="relative max-w-sm flex flex-col bg-white shadow-lg rounded-lg overflow-hidden group"
            >
              <Image
                width={1250}
                height={1200}
                className="card-hover-Image h-[320px] w-[100%] object-cover rounded-lg"
                src={item?.image}
                alt="Car"
              />
              <div className="py-3 px-2 text-container absolute bottom-[-20px] z-[200] w-[100%] opacity-0 flex flex-col items-center">
                <h2 className="text-[17px] font-bold text-start w-[100%]">
                  {item?.name}
                </h2>
                <div className="flex w-[100%] justify-between pt-2">
                  <p className="text-[14px] font-bold">{item?.services}</p>
                  <a
                    href="#"
                    className="px-2 py-1 text-blue-300 text-[14px] font-bold hover:bg-[#B45309] hover:text-white border-x-2 flex justify-center items-center gap-1"
                  >
                    view live
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      color={"#fff"}
                      fill={"none"}
                    >
                      <path
                        d="M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M21.0001 16H18.9212M16.0001 21L16.0001 18.9211"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.00009 8H5.07898M8.00009 3L8.00009 5.07889"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

"use client";
import Image from "next/image";

import "./ProjectList.css";
import Roket from "@/app/assets/navbar/roket.gif";
import image1 from "@/app/assets/design/01.png";
import { HeadingText } from "../untility/HeadingText/HeadingText";
import { useEffect, useState } from "react";
import { SmallHeadingText } from "../untility/SmallHeadingText/SmallHeadingText";
// image
import phonix from "@/app/assets/projects/phonix.png";
import unar from "@/app/assets/projects/unar.png";
import mocdit from "@/app/assets/projects/mocdt.png";
import uabout from "@/app/assets/projects/uabout.png";
import tarvel from "@/app/assets/projects/tarvel.png";
//MERN
import resel from "@/app/assets/projects/MERN/resell.png";
import fernicar from "@/app/assets/projects/MERN/fernicar.png";
import dental from "@/app/assets/projects/MERN/dental.png";
import event from "@/app/assets/projects/MERN/event.png";
import unitech from "@/app/assets/projects/MERN/unitech.png";
import Loader from "../untility/Loader/Loader";

export const ProjectList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCetagory, setActiveCetagory] = useState("All");
  const [projects, setprojects] = useState([]);
  const [singnal, setSignal] = useState(false);

  const allSite = [
    // ----
    {
      id: 10,
      name: "Unitech Bangaladesh",
      services: "Academic Services",
      category: "live",
      All: "All",
      Live: "Live",
      image: unitech,
      Live: "/liveDetails",
    },

    {
      id: 1,
      name: "Phoenix dark/light",
      services: "Landing Page",
      category: "front-end",
      All: "All",
      Live: "Live",
      image: phonix,
      Live: "https://wonderful-wisp-2f81f4.netlify.app/",
    },
    {
      id: 2,
      name: "Unitech Architctural",
      services: "Landing Page",
      category: "front-end",
      All: "All",
      Live: "Live",
      image: unar,
      Live: "https://unitechbangladesh.com/unitech-architctural",
    },
    {
      id: 3,
      name: "Mocdt Product",
      services: "Product Review",
      category: "front-end",
      All: "All",
      Live: "Live",
      image: mocdit,
      Live: "https://mocdt.vercel.app/",
    },
    {
      id: 5,
      name: "travel-xone",
      services: "Travel Page",
      category: "front-end",
      All: "All",
      Live: "Live",
      image: tarvel,
      Live: "https://travel-xone-2023.vercel.app/",
    },
    {
      id: 4,
      name: "About Info",
      services: "Landing Page",
      category: "front-end",
      All: "All",
      Live: "Live",
      image: uabout,
      Live: "https://unitechbangladesh.com/about",
    },

    //  ------
    {
      id: 6,
      name: "Unitech Bangaladesh",
      services: "Academic Services",
      category: "MERN",
      All: "All",
      Live: "Live",
      image: unitech,
      Live: "https://unitechbangladesh.com/",
    },
    {
      id: 9,
      name: "resell Book",
      services: "Store Management",
      category: "MERN",
      All: "All",
      Live: "Live",
      image: resel,
      Live: "https://resell-book-store.vercel.app/",
    },
    {
      id: 7,
      name: "Furniture Zoon",
      services: "furniture store",
      category: "MERN",
      All: "All",
      Live: "Live",
      image: fernicar,
      Live: "https://furniture-zoon.web.app/",
    },
    {
      id: 8,
      name: "Doctor Portal",
      services: "Appointments Booking",
      category: "MERN",
      All: "All",
      Live: "Live",
      image: dental,
      Live: "https://doctor-portal-b10c4.web.app/",
    },
    {
      id: 9,
      name: "Event Management",
      services: "Management",
      category: "MERN",
      All: "All",
      Live: "Live",
      image: event,
      Live: "https://event-management-client.vercel.app/",
    },
  ];

  const buttonText = [
    { cetagory: "All", name: "All", total: allSite?.length },
    { cetagory: "front-end", name: "Front-End Design", total: "5" },
    { cetagory: "MERN", name: "MERN Stack", total: "5" },
    { cetagory: "wordpress", name: "Wordpress", total: "2" },
    { cetagory: "live", name: "Live Hosting", total: "1" },
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
        // only front-End Stack project
        if (activeCetagory === "live") {
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
      <div id="projects" className="pt-[160px]">
        <HeadingText
          title1={"Here Are My Projects"}
          title2={"Here Are My Projects"}
        />
        <div className="mt-[60px] all-button">
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

        <div className="title py-10">
          <SmallHeadingText
            title1={activeCetagory === "All" ? "All WebSite" : activeCetagory}
            title2={
              singnal
                ? "Waiting ...!"
                : activeCetagory === "All"
                ? "All WebSite"
                : activeCetagory
            }
          />
        </div>

        {singnal & (activeCetagory !== "All") ? (
          <div
            className={`bg-[#0000001b] w-[100%] h-[60vh] relative ${
              singnal ? "" : "hidden"
            }`}
          >
            {" "}
            <div className="flex w-[100%] absolute h-[80vh] md:h-[60vh] justify-center items-center duration-200 ease-out">
              <Loader />
            </div>
          </div>
        ) : (
          <div className=" grid md:grid-cols-3 lg:grid-cols-3 justify-center md:justify-start gap-y-8 gap-x-0 items-center overflow-hidden">
            {/* -------card maping----- */}
            {projects?.slice(0, 6)?.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration={`${
                  index == index / 2 ? index * 8 : index * 9
                }00`}
                // data-aos-delay="500"
                key={index}
                className="relative max-w-sm flex flex-col bg-white shadow-lg rounded-lg overflow-hidden group"
              >
                <Image
                  width={1250}
                  height={1200}
                  className="card-hover-Image h-[320px] w-[100%] object-fill rounded-lg"
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
                      target="_blank"
                      href={item?.Live}
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
        )}
      </div>
    </>
  );
};

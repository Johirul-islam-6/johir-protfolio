"use client";
import { useState } from "react";
import { HeadingText } from "../untility/HeadingText/HeadingText";

export const Accrodion = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const [bannerOpen, setBannerOpen] = useState(true);

  const faqItems = [
    {
      question: "I am working on a Front End Design & Development System.",
      answer:
        "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      cetagory: "front-end",
    },
    {
      question:
        "Are there any fees or commissions in addition to the monthly subscription?",
      answer:
        "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      cetagory: "back-end",
    },
    {
      question: "You really don't charge per user? Why not?",
      answer:
        "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      cetagory: "hosting",
    },
  ];

  return (
    <div className="relative font-inter antialiased">
      <main className="relative  flex flex-col justify-center bg-color overflow-hidden">
        <div className="w-full  mx-auto px-4 md:px-6 py-24">
          <span className="">
            <HeadingText title1={"FAQs"} title2={"FAQs"} />
          </span>
          <div className="">
            {faqItems.map((item, index) => (
              <div key={index} className="py-2">
                <h2>
                  <button
                    id={`faqs-title-${index}`}
                    type="button"
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    onClick={() => toggleItem(index)}
                    aria-expanded={expandedItems[index]}
                    aria-controls={`faqs-text-${index}`}
                  >
                    <span className="md:text-[20px]">
                      {index + 1}. {item.question}
                    </span>
                    <span className="">
                      <svg
                        className="fill-indigo-500 shrink-0 ml-8"
                        width="30"
                        height="30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="14"
                          width="40"
                          height="2"
                          rx="10"
                          className={`transform origin-center  transition duration-200 ease-out ${
                            expandedItems[index] ? "!rotate-45" : ""
                          }`}
                        />
                        <rect
                          y="12"
                          width="40"
                          height="2"
                          rx="10"
                          className={`transform origin-center  rotate-90 transition duration-200 ease-out ${
                            expandedItems[index] ? "!rotate-45" : ""
                          }`}
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div
                  id={`faqs-text-${index}`}
                  role="region"
                  aria-labelledby={`faqs-title-${index}`}
                  className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItems[index]
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-3 pt-1 text-[18px] text-[#767676e7]">
                      {item?.cetagory === "front-end" && (
                        <div className="grid md:grid-cols-2 gap-5 grid-cols-1 ">
                          <div>
                            <p
                              id="front-end "
                              className="font-bold text-[#cc51439e]"
                            >
                              *Front End Desing{" "}
                            </p>
                            <p className="pt-2 ps-2">
                              As a front-end developer, I've completed fully
                              responsive designs for any device using various
                              tools and technologies
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span> Figma
                              designs to Converted code.
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span> PDF Design
                              to Converted code.
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span>
                              Any Idea design to responsive code
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span>
                              Landing Page Design
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span>
                              Business Page Design
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span>
                              E-commerce Page Design
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span>
                              Portfolio Page Design
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              or More Designs...
                            </p>
                          </div>
                          <div>
                            <p
                              id="front-end"
                              className="font-bold text-[#cc51439e]"
                            >
                              *Front End Development{" "}
                            </p>
                            <p className="pt-2 ps-2">
                              As a front-end developer, handle API integration
                              for CRUD and authentication, and ensure
                              user-friendly experiences Design.
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span> API
                              Integration.
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span>{" "}
                              Authentication protocols
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span> Searching,
                              Pagination, Filtering etc.
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span>{" "}
                              Performance Optimization
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span>
                              Testing and Debugging
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span>
                              User Experience (UX) Enhancements
                            </p>

                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              <span className="font-[900] ">- </span>
                              Portfolio Page Design
                            </p>
                            <p className="pt-2 ps-3 text-[#ffffff97]">
                              {" "}
                              or More Designs...
                            </p>
                          </div>
                        </div>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ------- fixed btn ---------- */}
      <div
        className={`fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50 ${
          bannerOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between">
          <div className="text-slate-500 inline-flex">
            <a
              className="font-medium hover:underline text-slate-300"
              href="https://cruip.com/building-a-simple-animated-accordion-component-with-tailwind-css/"
              target="_blank"
              rel="noreferrer"
            >
              Read Tutorial
            </a>
            <span className="italic px-1.5">or</span>
            <a
              className="font-medium hover:underline text-indigo-500 flex items-center"
              href="https://github.com/cruip/cruip-tutorials/blob/main/animated-accordion/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <span>Download</span>
              <svg
                className="fill-indigo-400 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
              >
                <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
              </svg>
            </a>
          </div>
          <button
            className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700"
            onClick={() => setBannerOpen(false)}
          >
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

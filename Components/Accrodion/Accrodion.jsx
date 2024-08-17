"use client";
import { useState } from "react";
import { HeadingText } from "../untility/HeadingText/HeadingText";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

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
        <div className="bg-[#2828280c] text-sm p-3 md:rounded shadow flex justify-between">
          <div className="text-slate-500 inline-flex gap-2">
            <a
              data-aos="fade-up"
              data-aos-duration={`200`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-[0.5px] border-gray-500 bg-[#0745ef] rounded-lg p-1"
              href="https://www.facebook.com/rasel2023boss"
              title="Facebook"
            >
              <FaFacebook size={22} color="#fff" />
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration={`800`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-[0.5px] border-gray-500 bg-[#00000000] rounded-lg p-1"
              href="https://leetcode.com/u/johirulislam574206/"
              title="Leetcode"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 95 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-auto max-w-none"
              >
                <path
                  d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                  fill="#FFA116"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                  fill="#B3B3B3"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                  fill="black"
                ></path>
              </svg>
            </a>

            <a
              data-aos="fade-up"
              data-aos-duration={`1200`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-500 rounded-lg p-1 "
              title="gitHub"
              href="https://github.com/Johirul-islam-6"
            >
              <FaGithub size={22} color="#fff" />
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

import { HeadingText } from "@/Components/untility/HeadingText/HeadingText";
import img1 from "@/app/assets/services/design.gif";
import img2 from "@/app/assets/services/backend.gif";
import img3 from "@/app/assets/services/hosting.jpg";
import Image from "next/image";
import "./Serveces.css";

export const Services = () => {
  return (
    <>
      <div id="services" className="IDo pb-16 mt-[120px] ">
        {/* ------------ gradient div------- */}
        <div className="relative">
          <div className="gradient-rounded-top right-[0px]"></div>
        </div>
        <HeadingText title1={"My Services"} title2={"My Services"} />
        <p className="text-center py-3 text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing{" "}
          <br className="hidden md:block" /> elit. Aut mollitia voluptatem fugit
          ullam ea
        </p>

        <div className="mt-20 px-2 md:px-0">
          <div className="grid md:grid-cols-3 gap-10 justify-center items-center">
            <div className="relative cursor-pointer serveices-card border-2 h-[300px] flex flex-col items-center justify-center">
              <Image
                width={1200}
                height={0}
                className="h-[300px]"
                src={img1}
                alt=""
              />
              <div className="absolute w-[100%] h-[300px] items-center justify-center flex flex-col">
                <div className="bg-color bg-srverces-div py-3 w-[100%] flex flex-col justify-center items-center">
                  <h1 className="text-[22px] font-bold text-center text-[#fff]">
                    Front End Design <br className="" /> & Development
                  </h1>
                  <p className="text-center pt-2  text-[14px] text-[#ffffff8f]">
                    full Responsive any Devices
                  </p>
                </div>

                <div className="details-servecis-btn hidden duration-300 ease-linear mt-1">
                  <a
                    href="#faqs-title-0"
                    className="text-center px-3 py-1 bg-amber-700 text-[14px] text-[#ffffff]"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
            <div className="relative cursor-pointer serveices-card border-2 h-[300px] flex flex-col items-center justify-center">
              <Image
                width={1200}
                height={0}
                className="h-[300px]"
                src={img2}
                alt=""
              />
              <div className="absolute  w-[100%] h-[300px] items-center justify-center flex flex-col">
                <div className="bg-color bg-srverces-div py-3 w-[100%] flex flex-col justify-center items-center">
                  <h1 className="text-[22px] font-bold text-center text-[#fff]">
                    Back End Development
                    <br className="" /> in Node.js
                  </h1>
                  <p className="text-center pt-2  text-[14px] text-[#ffffff8f]">
                    Custom Server
                  </p>
                </div>

                <div className="details-servecis-btn hidden duration-300 ease-linear mt-1">
                  <p className="text-center px-3 py-1 bg-amber-700 text-[14px] text-[#ffffff]">
                    Details
                  </p>
                </div>
              </div>
            </div>
            <div className="relative cursor-pointer serveices-card border-2 h-[300px] flex flex-col items-center justify-center">
              <Image
                width={1200}
                height={0}
                className="h-[300px]"
                src={img3}
                alt=""
              />
              <div className="absolute  w-[100%] h-[300px] items-center justify-center flex flex-col">
                <div className="bg-color bg-srverces-div py-3 w-[100%] flex flex-col justify-center items-center">
                  <h1 className="text-[22px] font-bold text-center text-[#fff]">
                    Live stite Purchase
                    <br className="" /> Domain & hosting
                  </h1>
                  <p className="text-center pt-2  text-[14px] text-[#ffffff8f]">
                    Static, VPS, MERN, etc
                  </p>
                </div>

                <div className="details-servecis-btn hidden duration-300 ease-linear mt-1">
                  <p className="text-center px-3 py-1 bg-amber-700 text-[14px] text-[#ffffff]">
                    Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-20 flex md:px-16 px-5 relative z-50">
          <div className="grid lg:grid-cols-2 md:grid-col-3 grid-cols-1 gap-8 ">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
              class="bg-[#5014B8] p-6 rounded-2xl py-6 pb-20"
            >
              <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-2 text-[28px]">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h4 class="text-2xl font-medium mb-2 text-[#dbdbdb]">
                Frontend Development
              </h4>
              <div className="divider w-[120px] my-1 mb-3 bg-[#8d8c8b] h-[2px]"></div>
              <p className="text-white px-2  text-[18px] rem">
                I am able to build a responsive website. I have almost 2 years
                of experience and complete almost 30+ projects.. I have good
                skills on Web Development please.{" "}
                <span className="text-[#c4c3c3] ">
                  <br />
                  <br />
                  <ul>
                    <li className="flex flex-wrap items-center">
                      ➢ HTML, CSS3, BootStrap, Tailwind,SASS, Slider,
                      ReactBootstrap, etc..
                    </li>
                    <li className="flex flex-wrap items-center mt-3 text-[#cbc8cf]">
                      ➢ JavaScript, ES6, React.Js, Next.JS, Redux, API
                      Integration etc.
                    </li>
                    <li className="flex flex-wrap items-center mt-3 text-[#cbc8cf]">
                      I have completed numerous web page design projects that
                      are fully responsive, ensuring they display perfectly on
                      any device.
                    </li>

                    <li className=" flex flex-wrap items-center mt-3">
                      {" "}
                      <Link href="/design">
                        <button className="text-[#fdfdfd] p-2 text-[15px] font-[400] underline">
                          See Design
                        </button>
                      </Link>
                    </li>
                  </ul>
                </span>{" "}
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
              class="bg-[#111b30] p-6 rounded-2xl py-6"
            >
              <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-2 text-[28px]">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h4 class="text-2xl font-medium mb-2 text-[#ffff]">
                Backend Development
              </h4>
              <div className="divider w-[120px] my-1 mb-3 bg-[#0032b1] h-[2px]"></div>
              <p className="px-2  text-[18px] rem text-[#d7d5da]">
                {" "}
                Proficient in Software Development Lifecycle (SDLC) and Node.js
                Server Development with Modular and MVC Architectures Using
                Node.js and Express.
                <br />
                <br />
                <ul>
                  <li className="flex flex-wrap items-center text-[#cbc8cf]">
                    ➢ Modular & MVC pattern : I create servers using Node.js and
                    Express, with NoSQL (MongoDB) for data storage. My approach
                    includes Global Error Handling, Mongoose for MongoDB
                    interaction, REST API development, query handling, cookie
                    management, authentication, dotenv for environment
                    variables, JWT token authentication, and the integration of
                    additional external packages for enhanced functionality.
                  </li>

                  <li className="flex flex-wrap items-center mt-3"></li>

                  <li className=" flex flex-wrap items-center mt-3">
                    {" "}
                    <Link href="/project">
                      <button className="text-[#fdfdfd] p-2 text-[15px] font-[400] underline">
                        See Project
                      </button>
                    </Link>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

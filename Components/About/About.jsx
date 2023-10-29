import "./About.css";
import "./Hire.css";
// import aboutImage from "../../app/assets/Looking-man.jpg";
import Link from "next/link";
import { FaArrowRight, FaCloudDownloadAlt } from "react-icons/fa";
import SlideImage from "./SlideImage";

export const About = () => {
  return (
    <>
      {/* ------------- about information --------- */}
      <div className="About mt-[60px] py-[60px] ">
        <div className="block px-3 padding-1000px-in ">
          {/* ----------------------- about content ----------------- */}
          <div className="about-Banner flex md:flex-row relative flex-col justify-start gap-8 xl:gap-16  ">
            <div className="md:w-[45%] w-[80%] mx-auto  flex justify-center items-end">
              <SlideImage />
            </div>

            <div className="flex-1  overflow-hidden">
              <div className="about-button-box">
                <button className=" text-[#FAFAFA] border-4 py-4 px-8 border-white text-[25px] text-[600]">
                  About Me
                </button>
              </div>
              <br />

              <p className="about-text text-[#9B9B9B] pt-8 text-[17px] leading-7 font-bolde">
                Hi, Dear, I'm Johirul Islam (Rasel). Everyone affectionately
                calls me Rasel. I am a Computer Science and Engineering (CSE)
                department student. Over the past three years, I have been
                actively engaged in web development. During this time, I have
                dedicated myself to learning a multitude of programming
                languages and cutting-edge technologies. I want to go far...
              </p>

              <p className="about-text text-[#9B9B9B] pt-8 text-[17px] leading-7 font-bolde">
                <span className="font-[700]">Education :</span>
                <br />
                ✍️ Junior School Certificate (JSC). My score of 4.86 (A) out of
                5.00
                <br />
                ✍️ Secondary School Certificate (SSC). My score of 5.00 (A+) Out
                of 5.00
                <br />
                ✍️ Diploma Engineering | CGPA |------
                <br />
                1st | 3.65 | | 2nd | 3.47 | | 3rd | 3.46 | | 4th | 3.45 | | 5th
                | 3.49 | | 6th | X.XX | | 7th | X.XX | | 8th | X.XX |
              </p>
              <div className=" mt-[25px]">
                {/* ---------------- contact information -------- */}
                <div className="flex justify-between flex-wrap gap-3">
                  <div className="block mt-3">
                    <h1 className="text-[#F26C4F] font-extrabold text-[16px]">
                      Name :
                    </h1>
                    <p className="text-white font-bold text-[14px]">
                      Md.Johirul Islam (rasel)
                    </p>
                  </div>
                  <div className="block mt-3 md:me-20 ">
                    <h1 className="text-[#F26C4F] font-extrabold text-[16px]">
                      Email :
                    </h1>
                    <p className="text-white font-bold text-[14px]">
                      johir@gmail.com
                    </p>
                  </div>
                </div>

                {/* ------------ gradient div------- */}
                <div className="absolute">
                  <div className="gradient-rounded-top right-[0px] background_color_animation"></div>
                </div>
              </div>

              {/* ------------- about button ------------- */}
              <hr className="hr mt-[40px] relative left-[-600px]" />
              <div className=" contact-about flex flex-wrap justify-start gap-5 mt-[60px] ">
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

      {/* -------------- Hire banner ------------- */}

      <div className="mt-[100px] md:px-6">
        <div className="hire-banner relative z-50">
          <div className="over-color-div flex justify-center items-center relative z-50">
            <div>
              {" "}
              <h1 className="text-[20px] md:text-[36px] line-clamp-[36px] font-[600] text-center  text-[#fff]">
                Let’s Work Together On Your Next Project!
              </h1>
              <div className="flex justify-center items-end ">
                <button className="uppercase hire-me-button py-4 px-7 absolute bottom-[-30px] ">
                  Hire me Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// import banner from '../../../assets/bg-hero.jpg'
// import Link from "next/link";
import "./Banner.css";
import TextChangeAnimation from "./TextChangeAnimation";
import { FaArrowDown, FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import banner_image from "../../../app/assets/rasel.png";

export const Banner = () => {
  return (
    <>
      {/* ------------ gradient div------- */}
      <div className="flex justify-between absolute">
        <div className="gradient-rounded-div-left left-[0px] background_color_animation"></div>
        <div className="gradient-rounded-div-right right-[0px] background_color_animation "></div>
      </div>
      <div className=" banner-container h-[720px] flex md:flex-row items-center justify-between pb-10 overflow-hidden">
        {/* ------------------- banner container ---------------- */}
        <div className="banner-contain w-[60%]  items-center pt-[150px] ">
          <div className="block px-3 relative z-50">
            {/* ---------socail-icon ---------- */}
            {/* <div className="social-icon flex flex-wrap gap-3">
              <a href="/" className="mr-3">
                <i className="text-[20px] text-[#9E9E9E] fab fa-facebook"></i>
              </a>
              <a href="#" className="mr-3">
                <i className="text-[20px] text-[#9E9E9E] fab fa-twitter"></i>
              </a>
              <a href="#" className="mr-3">
                <i className="text-[20px] text-[#9E9E9E] fab fa-pinterest"></i>
              </a>
              <a href="#" className="mr-3">
                <i className="text-[20px] text-[#9E9E9E] fab fa-slack"></i>
              </a>
              <a href="#" className="mr-3">
                <i className="text-[20px] text-[#9E9E9E] fab fa-instagram"></i>
              </a>
            </div> */}

            {/* ---------- heading text animation---------- */}
            <div className="banner-heading-text ">
              <a className=" banner-heading" href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=48&pause=3000&color=FFFFFF&width=503&height=76&lines=I'm+Johirul+Islam.;My+Web+Services-"
                  alt="Typing SVG"
                />
              </a>
            </div>

            {/* ------------- animation text box ---------- */}
            <div className="animation-box block w-[100%] mt-[0px]">
              <FaCaretDown className="down-content-out-box flex relative top-[126px] text-[#fff] left-[20px] text-[35px]" />
              <TextChangeAnimation />
            </div>
            {/* -------- paragrap ------- */}
            <p className=" work-sans pt-[50px] mb-8 text-lg lg:text-[18px] sm:mb-12 md:pe-16 text-justify">
              Always love to learn something new . Love to get error and handle
              error . If I learn something special I share this with my friends
              . One secret about me I'm very fast learner programming is my
              Heard.
            </p>
            {/* ------------------------ Banner button  -------------- */}
            <div className="banner-Button flex justify-start  md:mt-[80px]">
              <Link
                href={"#services"}
                className="btn-epic justify-center items-center bg-gradient-to-r from-[#5014B8] "
              >
                <div className="hover:border-b-2 border-[#FE7E01]">
                  <span className="flex justify-center items-center ">
                    <FaArrowDown className="text-[#fff] text-[20px] font-[500]" />
                  </span>
                  <span className="flex justify-center items-center ">
                    <FaArrowDown className="text-[#fff] text-[20px] font-[500]" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="banner-image  w-[50%] flex justify-end">
          <Image
            width={600}
            height={1200}
            src={banner_image}
            alt=""
            className="object-cover relative z-50"
          />
        </div>
      </div>
    </>
  );
};

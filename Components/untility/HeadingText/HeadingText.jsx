import React from "react";
import "./HeadingText.css";
export const HeadingText = ({ title1, title2 }) => {
  return (
    <div>
      <div className="relative flex flex-col justify-center items-center ">
        <h1 className="md:text-[50px] text-[35px] text-center relative  textStock  font-extrabold mx-auto heading-font">
          {title1}
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="md:text-[45px] text-[35px] absolute text-center z-[100] top-[22px] inset-0 uparText font-extrabold heading-font "
        >
          {title2}
        </h1>
        <div
          data-aos="fade-left"
          data-aos-duration="1800"
          data-aos-easing="linear"
          data-aos-delay="500"
          className="divider w-[120px] rounded-lg mx-auto my-1 mt-[50px] bg-[#FF7B00] h-1"
        ></div>
      </div>
    </div>
  );
};

import React from "react";
import "./SmallHeadingText.css";
export const SmallHeadingText = ({ title1, title2 }) => {
  return (
    <div>
      <div className="smallTextHeading relative flex flex-col ">
        <h1 className="md:text-[28px]  text-[25px] text-start relative  textStock  font-extrabold  heading-font">
          {title1}
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="md:text-[25px]  text-[22px] absolute text-start z-[100] top-[12px] inset-0 uparText font-extrabold heading-font "
        >
          {title2}
        </h1>
      </div>
    </div>
  );
};

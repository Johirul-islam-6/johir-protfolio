import React from "react";
import "./Hire.css";
export const Hire = () => {
  return (
    <div>
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
    </div>
  );
};

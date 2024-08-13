"use client";

import "./SlideImage.css";
import Image from "next/image";
import { useState } from "react";
import mocdt_workflow from "@/app/assets/about/room.jpg";
import today_workflow from "@/app/assets/about/room2.jpg";
function SlideImage() {
  const [position, setPosition] = useState(50);

  const handleSliderChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <>
      <div>
        <div
          className="slider-container border-2 "
          style={{ "--position": `${position}%` }}
        >
          <div className="workflow_image_container h-full object-cover p-5">
            <Image
              className="image-before slider-image object-cover "
              width={700}
              height={700}
              src={today_workflow}
              alt="color photo"
              loading="lazy"
            />
            <Image
              className="image-after  object-cover"
              width={700}
              height={700}
              src={mocdt_workflow}
              alt="color photo"
              loading="lazy"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            aria-label="Percentage of before photo shown"
            className="slider-input outline-none"
            onChange={handleSliderChange}
          />
          <div className="slider-line" aria-hidden="true"></div>
          <div className="slider-button outline-none" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="128"
                y1="40"
                x2="128"
                y2="216"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="96"
                y1="128"
                x2="16"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="48 160 16 128 48 96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
              <line
                x1="160"
                y1="128"
                x2="240"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="208 96 240 128 208 160"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideImage;

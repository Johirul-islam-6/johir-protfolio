"use client";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import "./ReviewCard.css";

import Jorna from "@/app/assets/review/jorna.jpg";
import rakib from "@/app/assets/review/rakib.jpg";
import monowar3 from "@/app/assets/review/monowar.jpg";
import Image from "next/image";

const ReviewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1250, // define breakpoint for lg screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // define breakpoint for md screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // define breakpoint for sm screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520, // define breakpoint for sm screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const review = [
    {
      id: 1,
      image: Jorna,
      name: "Jorna Katun",
      passion: "Software Engineer",
      company: "SSL",
      message:
        "He is such a hard-working man who does not know how to give up. I know he will shine in the programming field by any means. Best of luck boy.",
    },
    {
      id: 5,
      image: rakib,
      name: "Rakib Hasan",
      passion: "Student",
      company: "Islamic University",
      message:
        "Very passionate about programming and really super talented, hard-working, and punctual boy. I know him through programming and he proved himself to remember him until I escape this programming field. Best wishes to you Mr rising Start Programmer 💖",
    },
    {
      id: 2,
      image: monowar3,
      name: "Monowar Islam",
      passion: "(devops)",
      company: "SSL Wireless",
      message:
        "He is such a hard-working man who does not know how to give up. I know he will shine in the programming field by any means. Best of luck johirul islam .",
    },
    {
      id: 1,
      image: Jorna,
      name: "Jorna Katun",
      passion: "Software Engineer",
      company: "SSL",
      message:
        "He is such a hard-working man who does not know how to give up. I know he will shine in the programming field by any means. Best of luck boy.",
    },
    {
      id: 5,
      image: rakib,
      name: "Rakib Hasan",
      passion: "Student",
      company: "Islamic University",
      message:
        "Very passionate about programming and really super talented, hard-working, and punctual boy. I know him through programming and he proved himself to remember him until I escape this programming field. Best wishes to you Mr rising Start Programmer 💖",
    },
    {
      id: 2,
      image: monowar3,
      name: "Monowar Islam",
      passion: "(devops)",
      company: "SSL Wireless",
      message:
        "He is such a hard-working man who does not know how to give up. I know he will shine in the programming field by any means. Best of luck johirul islam .",
    },
  ];

  return (
    <div className="md:px-10 ">
      <Slider {...settings}>
        {review.map((student, index) => (
          <div key={index} className="reviewCard-container relative">
            <div className="reviewCard items-center overflow-hidden hover:border-y-0 border-x-4 shadow-sliding-card border-[#FF7E01] relative md:h-[280px] justify-center px-5 py-6 ">
              <div className="flex justify-start ">
                <div className="flex relative justify-start  flex-col">
                  <Image
                    width={400}
                    height={400}
                    className="border-2 border-amber-700 w-[80px] h-[80px] flex object-cover p-[3px] justify-start rounded-full"
                    src={student?.image}
                    alt=""
                  />
                  <div className="flex absolute bottom-[-10px] items-center justify-center ">
                    <div className="bg-[#F96C42] p-2 rounded-full">
                      <FaQuoteRight className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center ps-5">
                  <h1 className="text-center md:text-[20px] pt-1 font-[600] text-white ">
                    {student?.name?.slice(0, 16)}
                  </h1>
                  <p className="text-[14px] text-white">
                    {student?.company} -
                    <span className="ps-1">{student?.passion}</span>
                  </p>
                </div>
              </div>

              <h2 className="text-[17px] text-white  SILIGURI pt-[22px] text-start">
                {student?.message.slice(0, 152)}{" "}
                <span className="text-[#c56505]">...</span>
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsSlider;

"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import unitech from "@/app/assets/bestProject/u.png";
import resell from "@/app/assets/bestProject/b.png";
import mocdt from "@/app/assets/bestProject/m.png";
// Import Swiper styles
import "../../node_modules/swiper/swiper-bundle.min.css";
import "./Swiper_style.css";

// Import Link from Next.js
import Link from "next/link";
import Image from "next/image";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Project = () => {
  const bestProject = [
    {
      id: "1",
      PName: "Unitech Bangladesh",
      PImage: unitech,
      Live: "https://unitech-seven.vercel.app/",
      PDetails:
        "An online educational website where an admin has full control: they can create courses, issue notices, manage students and more.",
      PExtra: "This MERN Stack Project.",
    },
    {
      id: "2",
      PName: "Resell Book Store",
      PImage: resell,
      Live: "https://resell-book-store.vercel.app/",
      PDetails:
        "An online used book store where students can sell their old books. The listed books will be sent to the admin for review, and the admin can then publish or delete them as needed.",
      PExtra: "This is C2C online Book Store.",
    },
    {
      id: "3",
      PName: "Mocdt",
      PImage: mocdt,
      Live: "https://mocdt.vercel.app/",
      PDetails:
        "This website showcases Mocdt company's products, with each product having a dedicated page for detailed explanations. It is fully responsive, adapting seamlessly to different screen sizes and devices.",
      PExtra: "This Is Next Js Projcet Design.",
    },
  ];

  return (
    <>
      <h1 className="text-white text-4xl text-center font pt-10 animation_p uppercase">
        My Best Projects
      </h1>
      <p className="text-center pt-3 text-[18px]">
        I have been complete Many projects last few months.
      </p>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        className="project-slider"
      >
        {bestProject?.map((product) => (
          <SwiperSlide key={product?.id}>
            <div className="card z-50">
              <h2 className="text-center py-5 text-[16px] md:text-[20px]">
                Site Name:{" "}
                <span className="text-amber-700">{product?.PName}</span>
              </h2>
              <figure className="relative">
                <div className="w-[100%] flex h-[100%] flex-col bg-[#0000007e] absolute justify-end items-center ">
                  <div className="w-[100%] bg-[#00000096] p-3 ">
                    <p className=" text-amber-500 px-2 font-[600] text-[16px] md:text-[20px] text-start">
                      {product?.PExtra}
                    </p>
                    <p className="px-2 text-white font-[400] text-[12px] md:text-[18px] text-start">
                      {product?.PDetails}
                    </p>
                  </div>
                </div>
                <Image
                  width={0}
                  height={0}
                  className="slider_Image"
                  src={product?.PImage}
                  alt="product image"
                />
              </figure>
              <div className="mt-5">
                <Link
                  className="flex btn btn-primary project-button"
                  href={product?.Live}
                  target="blank"
                >
                  <span className="">Live Link</span>
                </Link>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <div className="w-full flex justify-center h-[90vh] items-center">
            <Link href="/project">
              <span className="btn btn-primary  ">More Projects..</span>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Project;

"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "../../node_modules/swiper/swiper-bundle.min.css";
import "./Swiper_style.css";

// Import Link from Next.js
import Link from "next/link";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Project = () => {
  const [imgss, setImg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://web-technology-server-site.vercel.app/simple")
      .then((res) => res.json())
      .then((data) => {
        setImg(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <div class="center">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="text-white text-4xl text-center font pt-10 animation_p uppercase">
        My latest Projects
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
        {imgss?.map((product) => (
          <SwiperSlide key={product?.id}>
            <div className="card z-50">
              <h2 className="text-center py-5 text-[16px] md:text-[20px]">
                Site Name:{" "}
                <span className="text-amber-700">{product?.name}</span>
              </h2>
              <figure>
                <img
                  className="slider_Image"
                  src={product?.img}
                  alt="product image"
                />
              </figure>
              <div className="mt-5">
                <Link
                  className="flex btn btn-primary project-button"
                  href={`/${product?.id}`}
                >
                  <span className="">Details</span>
                </Link>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <div className="w-full flex justify-center h-[90vh]">
            <Link href="/project">
              <span className="btn btn-primary mt-[70%] md:mt-[50%]">
                More Projects..
              </span>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Project;

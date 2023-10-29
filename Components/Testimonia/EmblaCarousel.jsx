"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  DotButton,
  PrevButton,
  NextButton,
} from "./EmblaCarouselArrowsDotsButtons";

import images from "./imageByIndex";

const EmblaCarousel = (props) => {
  const { slides, options, data } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="embla ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container cursor-move">
            {slides &&
              data?.map((index) => (
                <>
                  <div key={index?.id} className="embla__slide">
                    <div className="flex gap-4 justify-center firaCode">
                      <div className="md:flex flex-shrink-0 w-full mb-6 h-44 sm:h-16 sm:w-16 sm:mb-0 hidden ">
                        <img
                          src={index?.image}
                          alt=""
                          className="object-cover object-center md:w-full md:h-full  rounded dark:bg-gray-500"
                        />
                      </div>
                      <div className="flex flex-col space-y-4">
                        <div>
                          <h2 className="text-2xl font-semibold">
                            {index?.name}
                          </h2>
                          <span className="text-sm dark:text-gray-400">
                            {index?.profession}
                          </span>{" "}
                          <br />
                          <span className="text-[12px] dark:text-gray-400">
                            {index?.date}
                          </span>
                        </div>
                        <p className="roboto text-[17px]">{index?.message}</p>
                        <div className="space-y-1">
                          <span className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              aria-label="Email address"
                              className="w-4 h-4"
                            >
                              <path
                                fill="currentColor"
                                d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                              ></path>
                            </svg>
                            <span className="dark:text-gray-400">
                              {index?.email}
                            </span>
                          </span>
                          <span className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              aria-label="Phonenumber"
                              className="w-4 h-4"
                            >
                              <path
                                fill="currentColor"
                                d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                              ></path>
                            </svg>
                            <span className="dark:text-gray-400">
                              {index?.phone}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>

        <div className="embla__buttons flex justify-center relative w-[50%]  md:w-[70%] md:h-[60vh]  z-[10000] ml-[45%] mx-auto">
          <PrevButton
            className="absolute md:mt-[220px] mt-[350px] w-[15%]  md:w-[9%] cursor-pointer bg-amber-700 rounded-full mx-auto flex justify-center py-2 hover:bg-amber-600 "
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className="absolute md:mt-[220px] mt-[350px] w-[15%] cursor-pointer md:w-[9%] ml-[40%] md:ml-[25%] bg-amber-700 rounded-full mx-auto flex justify-center py-2 hover:bg-amber-600"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProductSlider = () => {
  const products = [
    {
      image:
        "https://w7.pngwing.com/pngs/798/102/png-transparent-upwork-freelancer-com-fiverr-peopleperhour-others.png",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-fVj3UuCUFAjclmOpoRRI5JhQx4Gxy33AA&usqp=CAU",
    },

    {
      image: "https://www.toptal.com/toptal-logo.png",
    },

    {
      image: "https://i.ytimg.com/vi/wTBJF-UTIrY/maxresdefault.jpg",
    },
    {
      image:
        "https://w7.pngwing.com/pngs/798/102/png-transparent-upwork-freelancer-com-fiverr-peopleperhour-others.png",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-fVj3UuCUFAjclmOpoRRI5JhQx4Gxy33AA&usqp=CAU",
    },

    {
      image: "https://www.toptal.com/toptal-logo.png",
    },

    {
      image: "https://i.ytimg.com/vi/wTBJF-UTIrY/maxresdefault.jpg",
    },
  ];

  return (
    <div className="auto-slide-freelancer">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        loop={true}
        breakpoints={{
          420: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1160: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1650: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          2000: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {products?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black border border-[#414548] p-[5px] xl:w-[280px] 2xl:w-[320px] sm:h-[115px] h-[90px] rounded-[10px] flex gap-2 items-center justify-center">
              <img
                src={item.image}
                alt="Picture of product"
                className="h-full object-cover w-[100%] md:p-2 rounded-[10%]"
              />
              {/* <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-[500]">
                {item.title}
              </p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;

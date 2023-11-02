"use client";
// import { ReviewsClient } from "./clientSlider/ReviewsClient";
import "./Products.css";
import ProductSlider from "./ProductSlider";

const Products = () => {
  return (
    <>
      {/* -------------------- market place ----------- */}
      <div className="mt-[100px] ">
        <h5 className="font-bold text-center text-2xl md:text-4xl lg:text-4xl uppercase">
          online marketplaces
        </h5>
        <div className="divider w-[120px] mx-auto my-1 mt-2 bg-[#bb7103] h-1"></div>

        <div className="mt-10 relative z-50">
          <ProductSlider />
        </div>
      </div>
    </>
  );
};

export default Products;

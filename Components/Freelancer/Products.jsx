"use client";
import { HeadingText } from "../untility/HeadingText/HeadingText";
// import { ReviewsClient } from "./clientSlider/ReviewsClient";
import "./Products.css";
import ProductSlider from "./ProductSlider";

const Products = () => {
  return (
    <>
      {/* -------------------- market place ----------- */}
      <div className="mt-[100px] ">
        <HeadingText
          title1={"  Online Marketplaces"}
          title2={"  Online Marketplaces"}
        />

        <div className="mt-10 relative z-50">
          <ProductSlider />
        </div>
      </div>
    </>
  );
};

export default Products;

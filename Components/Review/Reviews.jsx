import { HeadingText } from "../untility/HeadingText/HeadingText";
import ReviewsSlider from "./ReviewsSlider";

export const Reviews = () => {
  return (
    <>
      <div id="reviews" className="review   pb-10">
        <div className="pt-10 ">
          <HeadingText
            title1={"IT Expert Insights"}
            title2={"IT Expert Insights"}
          />

          <div className=" my-16 mt-20">
            <ReviewsSlider />
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import BannerImg from "../../assets/books.jpg";

const HomeBanner = () => {
  return (
    <div className="hero bg-[#151515] h-[554px] rounded-2xl mt-9">
      <div className="hero-content flex-col lg:flex-row-reverse gap-14">
        <img className="rounded-2xl" src={BannerImg} alt="banner image" />
        <div>
          <h1 className="leading-16 mb-8 text-5xl font-bold playfair-font">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="text-white btn btn-success word-sens-font bg-[#23BE0A]">
            View The List

          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

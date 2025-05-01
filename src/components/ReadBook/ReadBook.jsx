import React from "react";
import { FaBuilding, FaCalendarAlt, FaFileAlt } from "react-icons/fa";

const ReadBook = ({book}) => {

    const {
    author,
    category,
    bookName,
    tags,
    rating,
    image,
    publisher,
    totalPages,
    yearOfPublishing,
  }=book
  return (
    <div className="hero shadow-xs shadow-gray-500 rounded-2xl mb-6  bg-base-200 p-6">
      <div className="hero-content w-full gap-10 flex-col lg:flex-row">
        <div className="bg-amber-50 flex flex-1/5 items-center justify-center p-7 rounded-lg perspective-1000">
          <div className="relative transform-style-preserve-3d transition-all duration-500 hover:rotate-y-12 hover:-rotate-x-3">
            {/* Book Cover */}
            <img
              src={image}
              className="max-h-[200px] object-cover rounded-lg shadow-2xl border-2 border-amber-100"
              style={{ transform: "translateZ(10px)" }}
            />

            {/* Spine (side of book) */}
            <div className="absolute left-0 top-0 w-2 h-full bg-amber-200 origin-right transform rotate-y-90 translate-x-[-0.5rem] translate-z-[-1px] rounded-l-lg" />

            {/* Shadow */}
            <div className="absolute -bottom-3 left-3 right-3 h-3 bg-amber-300/20 blur-md transform rotate-x-90 scale-y-0.5 origin-bottom" />
          </div>
        </div>
        <div className="flex-4/5">
          <h1 className="playfair-font text-5xl font-bold mb-2">{bookName}</h1>
          <div className="text-lg font-normal work-sans-font mb-3">
            By: {author}
          </div>
          <div className="flex gap-4 mt-2 mb-4 ">
            <strong>Tags: </strong>
            {tags &&
              tags.map((tag, i) => (
                <button
                  key={i}
                  className="btn btn-sm rounded-3xl text-base text-[#23BE0A]"
                >
                  #{tag}
                </button>
              ))}
            <div className="flex gap-1.5 items-center">
              {" "}
              <FaCalendarAlt /> Year Of Publishing: {yearOfPublishing}
            </div>
          </div>
          <div className="flex gap-5">
            <p className="flex gap-1.5 items-center">
              {" "}
              <FaBuilding /> Publisher: {publisher}
            </p>
            <p className="flex gap-1.5 items-center">
              {" "}
              <FaFileAlt></FaFileAlt> Pages: {totalPages}
            </p>
          </div>
          <div className="divider my-3"></div>
          <div className="flex gap-3">
            <button className="btn btn-soft btn-primary rounded-3xl">
              Category: {category}
            </button>
            <button className="btn btn-soft btn-warning rounded-3xl">
              Raging: {rating}
            </button>
            <button className="btn bg-[#23BE0A] rounded-3xl">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;

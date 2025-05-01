import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";

const Book = ({ book }) => {
  const { bookId,author, bookName, category, image, rating, tags } = book;

  return (
    <Link to={`books/${bookId}`} className="card bg-base-100 w-100 shadow-2xl p-7">
      <figure className="bg-amber-50 py-5">
        <img className="h-56" src={image} alt={`image of ${bookName}`} />
      </figure>
      <div className="flex gap-4 mt-5 ">
        {tags &&
          tags.map((tag, i) => (
            <button key={i} className="btn btn-sm bg-[#e4fbde] text-[#23BE0A]">
              {tag}
            </button>
          ))}
      </div>
      <div className="card-body px-0">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-xs badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="border-b-[1px] border-dashed my-3 border-[#DCDCDC]"></div>
        <div className="flex justify-between">
          <div className="badge badge-outline">{category}</div>
          <StarRating rating={rating} />
        </div>
      </div>
    </Link>
  );
};

export default Book;

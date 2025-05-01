import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const books = useLoaderData();
  const {
    author,
    category,
    bookName,
    tags,
    rating,
    image,
    publisher,
    review,
    totalPages,
    yearOfPublishing,
  } = Array.isArray(books) && books.find((book) => book.bookId === id);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content max-h-[70vh] gap-10 flex-col lg:flex-row">
        <div className="bg-amber-50 flex flex-1/2 items-center justify-center p-16 rounded-lg">
          <img src={image} className="max-h-[500px] object-cover rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1/2">
          <h1 className="playfair-font text-5xl font-bold">{bookName}</h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { setReadList, setWishList } from "../../utils/addToLocalHost";
import StarRating from "../StarRating/StarRating";

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

  const handleAddToReadList = (id) => {
    setReadList(id);
  };
  const handleAddToWishlist = (id) => {
    setWishList(id);
  };
  return (
    <div className="hero bg-base-200 min-h-screen p-6">
      <div className="hero-content gap-10 flex-col lg:flex-row">
        <div className="bg-amber-50 flex flex-1/2 items-center justify-center p-12 rounded-lg">
          <img
            src={image}
            className="max-h-[650px] object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1/2">
          <h1 className="playfair-font text-5xl font-bold mb-2">{bookName}</h1>
          <div className="text-lg font-normal work-sans-font mb-3">
            By: {author}
          </div>
          <div className="divider my-1"></div>
          <p className="work-sens-font">{category}</p>
          <div className="divider my-1"></div>

          <p className="py-6 work-sans-font font-normal text-sm">
            <strong className="text-base underline">Review: </strong>
            {review}
          </p>
          <div className="flex gap-4 mt-2 mb-4 ">
            {tags &&
              tags.map((tag, i) => (
                <button
                  key={i}
                  className="btn btn-sm rounded-sm text-base btn-outline text-[#23BE0A]"
                >
                  #{tag}
                </button>
              ))}
          </div>
          <div className="divider my-1"></div>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody className="work-sans-font ">
                {/* row 1 */}
                <tr>
                  <td>Number of Pages: </td>
                  <th className="text-left">{totalPages}</th>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Publisher: </td>
                  <th className="text-left">{publisher}</th>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Year of Publishing: </td>
                  <th className="text-left">{yearOfPublishing}</th>
                </tr>
                <tr>
                  <td>Rating: </td>
                  <th className="text-left">
                    <StarRating rating={rating}></StarRating>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <button
              onClick={() => handleAddToReadList(bookId)}
              className="btn btn-outline mr-4 text-base font-semibold "
            >
              Add To Read List
            </button>
            <button
              onClick={() => handleAddToWishlist(bookId)}
              className="btn btn-info text-base font-semibold"
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

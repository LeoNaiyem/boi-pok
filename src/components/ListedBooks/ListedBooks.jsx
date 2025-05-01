import React, { useEffect, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { SiWish } from "react-icons/si";
import { useLoaderData } from "react-router-dom";
import { getReadList, getWishList } from "../../utils/addToLocalHost";
import ReadBook from "../ReadBook/ReadBook";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();
  useEffect(() => {
    const readListArr = getReadList();
    const readListId = readListArr.map((id) => parseInt(id));
    const readListBooks =
      Array.isArray(allBooks) &&
      allBooks.filter((book) => readListId.includes(book.bookId));
    setReadList(readListBooks);
  }, [allBooks]);
  useEffect(() => {
    const wishListArr = getWishList();
    const wishListId = wishListArr.map((id) => parseInt(id));
    const wishListBooks =
      Array.isArray(allBooks) &&
      allBooks.filter((book) => wishListId.includes(book.bookId));
    setWishList(wishListBooks);
  }, [allBooks]);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "Rating") {
      const sortedReadList = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedReadList);
    } else if (sortType === "Pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <div className="bg-[#F3F3F3] text-black rounded-lg my-8 shadow-2xl flex justify-center items-center py-5">
        <h1 className="work-sans-font text-3xl text-bolder">Books</h1>
      </div>
      <div className="flex justify-center items-center my-8">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn bg-[#23BE0A] m-1">
            {sort ? `Sort by: ${sort}` : "Sort By"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li
              className="cursor-pointer mb-2"
              onClick={() => handleSort("Rating")}
            >
              Rating
            </li>
            <li className="cursor-pointer" onClick={() => handleSort("Pages")}>
              Pages
            </li>
          </ul>
        </div>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <label className="tab flex gap-2">
          <input type="radio" name="my_tabs_4" defaultChecked />
          <FaBookReader />
          Read Books
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {Array.isArray(readList) &&
            readList.map((book) => <ReadBook key={book.bookId} book={book} />)}
        </div>

        <label className="tab flex gap-2">
          <input type="radio" name="my_tabs_4" />
          <SiWish />
          Wishlist Books
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {Array.isArray(wishList) &&
            wishList.map((book) => <ReadBook key={book.bookId} book={book} />)}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;

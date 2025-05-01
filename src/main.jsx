import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import PageToRead from "./components/PageToRead/PageToRead.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        loader:()=>fetch('booksData.json'),
        path: `books/:bookId`,
        element: <BookDetails />,
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/pageToRead',
        element:<PageToRead></PageToRead>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

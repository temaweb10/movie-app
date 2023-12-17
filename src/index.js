import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main/Main";
import Movie from "./Pages/Movie/Movie";
import MovieCategory from "./Pages/MovieCategory/MovieCategory";
import Header from "./components/Header/Header";

import Search from "./Pages/Search/Search";
import NotFound404 from "./components/NotFound404/NotFound404";
import Test from "./components/Test";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Main />
      </>
    ),
  },

  {
    path: "/movie/:idMovie",
    element: (
      <>
        <Header />
        <Movie />
      </>
    ),
  },
  {
    path: "/category/:idCategory",
    element: (
      <>
        <Header />
        <MovieCategory />
      </>
    ),
  },
  {
    path: "/search/",
    element: (
      <>
        <Header />
        <Search />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <NotFound404 />
      </>
    ),
  },
  {
    path: "/category/movie/popular",
    element: (
      <>
        <Header />
        <MovieCategory
          fetchUrl={
            "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL"
          }
        />
      </>
    ),
  },
  {
    path: "/test",
    element: (
      <>
        <Test></Test>
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
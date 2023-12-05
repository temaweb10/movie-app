import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MoviePlayer from "./components/MoviePlayer/MoviePlayer";
import Main from "./Pages/Main/Main";
import Movie from "./Pages/Movie/Movie";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/test/:idMovie",
    element: <MoviePlayer />,
  },
  {
    path: "/movie/:idMovie",
    element: <Movie />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

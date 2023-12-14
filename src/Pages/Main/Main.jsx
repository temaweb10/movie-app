import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import GalleryMovie from "../../components/GalleryMovie/GalleryMovie";
import Loading from "../../components/Loading/Loading";
import MoviesList from "../../components/MoviesList/MoviesList";
import Test from "../../components/Test";
import Input from "../../components/UI/Input/Input";
import styles from "../Main/Main.module.css";

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState();
  const [newMovies, setNewMovies] = useState();

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    let resNewMovies = await axios.get(
      "https://api.movielab.media/api/v1/catalog/1?page=1&limit=12"
    );
    let resPopularMovies = await axios.get(
      "https://api.movielab.media/api/v1/catalog/0?page=1&limit=12"
    );

    /*    setCategories(res.data); */
    setPopularMovies(resPopularMovies.data.result);
    setNewMovies(resNewMovies.data.result);
    setIsLoading(true);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      className={styles.Main}
      style={
        isLoading
          ? { alignItems: "start", marginTop: "35px" }
          : {
              alignItems: "center",
              marginTop: "0px",
            }
      }
    >
      <div className={styles.mainContent}>
        {console.log(newMovies)}
        {isLoading ? (
          [newMovies, popularMovies].map((category) => (
            <GalleryMovie title={category.name} movies={category.movies} />
          ))
        ) : (
          /*   <GalleryMovie title={newMovies.name} movies={newMovies.movies} /> */
          <Loading />
        )}
      </div>
    </div>
  );
}

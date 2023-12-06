import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Gradients from "../../components/Gradients/Gradients";
import MoviesList from "../../components/MoviesList/MoviesList";
import Input from "../../components/UI/Input/Input";
import styles from "../Main/Main.module.css";

export default function Main() {
  const [query, setQuery] = useState("париж");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMoviesByKeyword = async () => {
    const res = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${query}&page=${currentPage}`,
      {
        headers: {
          "X-API-KEY": "fa065cb4-7f83-4cb8-8bf5-230e1060e656",
          "Content-Type": "application/json",
        },
      }
    );

    setPagesCount(res.data.pagesCount);
    setMovies([...movies, ...res.data.films]);
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.Main}>
      <div className={styles.MainSearchBlock}>
        <div>
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            id="filled-search"
            label="Название фильма"
            type="search"
            variant="filled"
          />
        </div>
        <button className={styles.btnSearch} onClick={getMoviesByKeyword}>
          поиск
        </button>
      </div>

      {movies.length !== 0 ? (
        <div className={styles.moviesListParent}>
          <MoviesList movies={movies} haveRating={true} />
          <>
            {pagesCount !== 0 && currentPage < pagesCount ? (
              <button
                className={styles.btnLoadMore}
                onClick={getMoviesByKeyword}
              >
                Загрузить ещё
              </button>
            ) : (
              ""
            )}
          </>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

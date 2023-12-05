import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Gradients from "../../components/Gradients/Gradients";
import MoviesList from "../../components/MoviesList/MoviesList";
import SearchBlock from "../../components/SearchBlock/SearchBlock";
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
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      {movies.length !== 0 ? <MoviesList movies={movies} /> : ""}

      <button onClick={getMoviesByKeyword}>search</button>
      {pagesCount !== 0 && currentPage < pagesCount ? (
        <button onClick={getMoviesByKeyword}>Загрузить ещё</button>
      ) : (
        <h1>нету</h1>
      )}
    </div>
  );
}

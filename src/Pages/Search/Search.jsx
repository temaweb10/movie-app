import Input from "../../components/UI/Input/Input";
import styles from "./Search.module.css";

import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Gradients from "../../components/Gradients/Gradients";
import Loading from "../../components/Loading/Loading";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("movieName"));
  const [query, setQuery] = useState({ name: searchParams.get("movieName") });
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMoviesByKeyword = async () => {
    const res = await axios.get(
      `https://api.movielab.media/api/v1/search/movies?title=${query.name}&sort_by=asc&page=1&limit=15&page=${currentPage}`
    );
    console.log(res.data);
    setPagesCount(res.data.pagination.pages);
    setMovies([...movies, ...res.data.results]);
    setCurrentPage(currentPage + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    if (query.name === "") {
      setIsLoading(true);
    } else {
      getMoviesByKeyword();
    }
  }, []);

  return (
    <div className={styles.Main}>
      <div className={styles.MainSearchBlock}>
        {/*  <Input
          value={query.title}
          onChange={(e) => {
            setQuery({ ...query, name: e.target.value });
          }}
          id="filled-search"
          label="Название фильма"
          type="search"
          variant="filled"
        />

        <button
          className={styles.btnSearch}
          onClick={async () => {
            await setMovies([]);
            getMoviesByKeyword();
          }}
        >
          поиск
        </button> */}
      </div>
      {isLoading ? (
        <div className={styles.moviesListParent}>
          <MoviesList
            movies={movies}
            haveRating={true}
            idMovieKeyName={"kinopoisk_id"}
          />
          <>
            {console.log(currentPage + " " + pagesCount)}
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
        <Loading />
      )}

      {/*  {movies.length !== 0 ? (
        <div className={styles.moviesListParent}>
          <MoviesList
            movies={movies}
            haveRating={true}
            idMovieKeyName={"filmId"}
          />
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
      )} */}
    </div>
  );
}

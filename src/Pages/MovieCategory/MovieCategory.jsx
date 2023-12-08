import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import styles from "./MovieCategory.module.css";

function MovieCategory({ fetchUrl }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const getMovieByUrl = async () => {
    const res = await axios.get(`${fetchUrl}&page=${currentPage}`, {
      headers: {
        "X-API-KEY": "fa065cb4-7f83-4cb8-8bf5-230e1060e656",
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    setPagesCount(res.data.totalPages);
    setMovies([...movies, ...res.data.items]);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getMovieByUrl();
  }, []);

  return (
    <div className={styles.Movies}>
      {movies.length !== 0 ? (
        <div className={styles.moviesListParent}>
          <MoviesList
            movies={movies}
            haveRating={true}
            idMovieKeyName={"kinopoiskId"}
          />
          <>
            {pagesCount !== 0 && currentPage < pagesCount ? (
              <button className={styles.btnLoadMore} onClick={getMovieByUrl}>
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

export default MovieCategory;

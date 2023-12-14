import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesList from "../../components/MoviesList/MoviesList";
import styles from "./MovieCategory.module.css";

function MovieCategory({ fetchUrl }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState();
  const params = useParams();
  const getMovieByUrl = async () => {
    const res = await axios.get(
      `https://api.movielab.media/api/v1/catalog/${params.idCategory}?&page=${currentPage}&limit=20`
    );
    console.log(res.data.result);
    /*     setPagesCount(0); */
    console.log(
      `https://api.movielab.media/api/v1/catalog/${params.idCategory}?&page=${currentPage}&limit=20`
    );
    console.log(res.headers["x-total-count"]);
    setTitle(res.data.result.name);
    setMovies([...movies, ...res.data.result.movies]);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getMovieByUrl();
  }, []);

  return (
    <div className={styles.Movies}>
      <span className={styles.categoryTitle}>{title}</span>

      <div className={styles.moviesListParent}>
        <MoviesList movies={movies} haveRating={true} />
        <>
          {/*  {pagesCount !== 0 && currentPage < pagesCount ? (
              <button className={styles.btnLoadMore} onClick={getMovieByUrl}>
                Загрузить ещё
              </button>
            ) : (
              ""
            )} */}

          <button className={styles.btnLoadMore} onClick={getMovieByUrl}>
            Загрузить ещё
          </button>
        </>
      </div>
    </div>
  );
}

export default MovieCategory;

import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import styles from "../MoviesList/MoviesList.module.css";

function MoviesList({ movies, haveRating, idMovieKeyName }) {
  console.log(movies);

  return (
    <div className={styles.moviesList}>
      {movies.map((el) => (
        <Link
          to={`/movie/${el[idMovieKeyName]}`}
          key={Math.random() + Math.random()}
        >
          <MovieCard movie={el} haveRating={haveRating} />
        </Link>
      ))}
    </div>
  );
}

export default MoviesList;

import React from "react";
import Rating from "../Rating/Rating";
import styles from "./MovieCard.module.css";

function MovieCard({ movie, haveRating }) {
  return (
    <div className={styles.movieCard}>
      {haveRating ? (
        <Rating rating={Number(movie.ratings.kinopoisk.rating)} />
      ) : (
        ""
      )}

      <img className={styles.moviePoster} src={movie.poster} />
      <span className={styles.movieName}>{movie.title_ru}</span>
    </div>
  );
}

export default MovieCard;

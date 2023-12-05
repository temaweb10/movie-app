import React from "react";
import Rating from "../Rating/Rating";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className={styles.movieCard}>
      <Rating rating={Number(movie.rating)} />
      <img className={styles.moviePoster} src={movie.posterUrlPreview} />
      <span className={styles.movieName}>{movie.nameRu}</span>
    </div>
  );
}

export default MovieCard;

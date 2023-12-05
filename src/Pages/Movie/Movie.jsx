import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import MoviePlayer from "../../components/MoviePlayer/MoviePlayer";
import styles from "./Movie.module.css";
function Movie() {
  const [movieInfo, setMovieInfo] = useState();
  const [IsLoading, setIsLoading] = useState(false);
  const params = useParams();

  const getInfoMovie = async () => {
    const res = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/${params.idMovie}`,
      {
        headers: {
          "X-API-KEY": "fa065cb4-7f83-4cb8-8bf5-230e1060e656",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data.data);
    setMovieInfo(res.data.data);
    setIsLoading(true);
  };

  useEffect(() => {
    getInfoMovie();
  }, []);
  return (
    <div className={styles.movie}>
      {IsLoading ? (
        <div className={styles.movieBlock}>
          <div className={styles.movieBlockContent}>
            <div>
              <img
                className={styles.moviePoster}
                src={movieInfo.posterUrl}
                alt="Постера нету :*("
              />
            </div>
            <div className={styles.movieAbout}>
              <span className={styles.movieTitle}>{movieInfo.nameRu}</span>
              <div className={styles.blockGenres}>
                {movieInfo.genres.map((el) => (
                  <span className={styles.genre}>{el.genre}</span>
                ))}
              </div>

              <span className={styles.movieDesc}>{movieInfo.description}</span>

              <div className={styles.blockAboutSpan}>
                <span className={styles.aboutSpan}>Страна:</span>
                <span className={styles.aboutSpanT}>
                  {movieInfo.countries.map((el) => (
                    <span className={styles.aboutSpanT}>{el.country}</span>
                  ))}
                </span>
              </div>
              <div className={styles.blockAboutSpan}>
                <span className={styles.aboutSpan}>Премьера в мире:</span>
                <span className={styles.aboutSpanT}>
                  {movieInfo.premiereWorld}
                </span>
              </div>
              <div className={styles.blockAboutSpan}>
                <span className={styles.aboutSpan}>Премьера в России:</span>
                <span className={styles.aboutSpanT}>
                  {movieInfo.premiereRu}
                </span>
              </div>
              <div className={styles.blockAboutSpan}>
                <span className={styles.aboutSpan}>Продолжительность:</span>
                <span className={styles.aboutSpanT}>
                  {movieInfo.filmLength}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.moviePlayerBlock}>
            <MoviePlayer idMovie={params.idMovie} styles={styles.moviePlayer} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Movie;

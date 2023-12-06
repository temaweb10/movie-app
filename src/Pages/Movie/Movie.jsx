import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviePlayer from "../../components/MoviePlayer/MoviePlayer";
import styles from "./Movie.module.css";

function Movie() {
  const [movieInfo, setMovieInfo] = useState();
  const [similarsMovies, setsimilarsMovies] = useState();
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
  };

  const getSimilarsMovies = async () => {
    const res = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.idMovie}/similars`,
      {
        headers: {
          "X-API-KEY": "fa065cb4-7f83-4cb8-8bf5-230e1060e656",
          "Content-Type": "application/json",
        },
      }
    );

    setsimilarsMovies(res.data.items);
    setIsLoading(true);
    /*  setMovieInfo(res.data.data);
    setIsLoading(true); */
  };

  useEffect(() => {
    getInfoMovie();
    getSimilarsMovies();
  }, [params.idMovie]);
  return (
    <div
      className={styles.movie}
      style={
        IsLoading
          ? { alignItems: "start", marginTop: "50px" }
          : {
              alignItems: "center",
            }
      }
    >
      {!IsLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.movieBlock}>
            <div className={styles.movieBlockContent}>
              <div>
                <img
                  className={styles.moviePoster}
                  src={movieInfo?.posterUrl}
                  alt="Постера нету :*("
                />
              </div>
              <div className={styles.movieAbout}>
                <span className={styles.movieTitle}>{movieInfo?.nameRu}</span>
                <div className={styles.blockGenres}>
                  {movieInfo.genres.map((el) => (
                    <span className={styles.genre}>{el?.genre}</span>
                  ))}
                </div>

                <span className={styles.movieDesc}>
                  {movieInfo.description}
                </span>

                <div className={styles.blockAboutSpan}>
                  <span className={styles.aboutSpan}>Страна:</span>
                  <span className={styles.aboutSpanT}>
                    {movieInfo.countries.map((el) => (
                      <span className={styles.aboutSpanT}>{el?.country}</span>
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
                    {movieInfo?.premiereRu}
                  </span>
                </div>
                <div className={styles.blockAboutSpan}>
                  <span className={styles.aboutSpan}>Продолжительность:</span>
                  <span className={styles.aboutSpanT}>
                    {movieInfo?.filmLength}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.movieBottomPart}>
              <MoviePlayer
                idMovie={params?.idMovie}
                styles={styles.moviePlayer}
              />

              <div className={styles.moviesBlock}>
                <span className={styles.moviesBlockTitle}>Похожие фильмы</span>

                <div className={styles.moviesBlockWrapperOnline}>
                  {similarsMovies.map((el) => (
                    <Link to={"/movie/" + el?.filmId}>
                      <MovieCard
                        haveRating={false}
                        movie={el}
                        key={Math.random() + Math.random()}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Movie;

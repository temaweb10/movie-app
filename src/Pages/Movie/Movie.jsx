import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HaveIs from "../../components/HaveIs/HaveIs";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviePlayer from "../../components/MoviePlayer/MoviePlayer";
import Rating from "../../components/Rating/Rating";
import styles from "./Movie.module.css";

function Movie() {
  const [movieInfo, setMovieInfo] = useState();
  const [movieImages, setMovieImages] = useState();
  const [similarsMovies, setsimilarsMovies] = useState();
  const [IsLoading, setIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const getInfoMovie = async () => {
    const res = await axios
      .get(`https://api.movielab.media/api/v1/movies/${params.idMovie}`, {
        headers: {
          "X-API-KEY": "fa065cb4-7f83-4cb8-8bf5-230e1060e656",
          "Content-Type": "application/json",
        },
      })
      .catch((err) => console.log(err));
    console.log(res.data.result);
    setMovieInfo(res.data.result);
    /*     const resMovieImages = await axios; */
    /*     .get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.idMovie}/images`,
        {
          headers: {
            "X-API-KEY": "fa065cb4-7f83-4cb8-8bf5-230e1060e656",
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => console.log(err));
    console.log(resMovieImages?.data?.items[0]?.imageUrl);
    setMovieImages(resMovieImages?.data?.items[0]?.imageUrl); */
  };

  /*  const getSimilarsMovies = async () => {
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
  }; */

  /*   const getMovieImages = async () => {}; */

  useEffect(() => {
    getInfoMovie();
    setIsLoading(true);
    /*     getSimilarsMovies(); */
  }, []);
  return (
    <div
      className={styles.movie}
      style={
        IsLoading
          ? { alignItems: "start" }
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
            <div
              className={styles.movieBlockContentParent}
              /* style={{
                background: ` linear-gradient(
                  rgba(0, 0, 0, 0.90), 
                  rgba(0, 0, 0, 0.90)
                ), url(${movieImages})`,
              }} */
            >
              <div className={styles.movieBlockContent}>
                <div style={{ position: "relative" }}>
                  <img
                    className={styles.moviePoster}
                    src={movieInfo?.poster}
                    alt="Постера нету :*("
                  />
                  <Rating
                    rating={movieInfo?.ratings.kinopoisk.rating}
                    fontSize="24px"
                  />
                </div>
                <div className={styles.movieAbout}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span className={styles.movieTitle}>
                      {movieInfo?.title_ru}
                    </span>
                    <span className={styles.movieAge}>{movieInfo?.age}+</span>
                  </div>

                  <div className={styles.blockGenres}>
                    {movieInfo?.genres.map((el) => (
                      <span key={Math.random()} className={styles.genre}>
                        {el?.name}
                      </span>
                    ))}
                  </div>

                  <span className={styles.movieDesc}>
                    {movieInfo?.description}
                  </span>

                  <div className={styles.blockAboutSpan}>
                    <span className={styles.aboutSpan}>Страна:</span>
                    <span className={styles.aboutSpanT}>
                      {movieInfo?.countries.map((el) => (
                        <span className={styles.aboutSpanT} key={Math.random()}>
                          {el?.name}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className={styles.blockAboutSpan}>
                    <span className={styles.aboutSpan}>Премьера в мире:</span>
                    <span className={styles.aboutSpanT}>{movieInfo?.year}</span>
                  </div>

                  <div className={styles.blockAboutSpan}>
                    <span className={styles.aboutSpan}>Продолжительность:</span>
                    <span className={styles.aboutSpanT}>
                      {movieInfo?.duration} минут
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.movieBottomPart}>
              <MoviePlayer idMovie={params?.idMovie} />

              {movieInfo?.similar_movies?.length !== 0 &&
              movieInfo?.similar_movies !== undefined ? (
                <div className={styles.moviesBlock}>
                  <span className={styles.moviesBlockTitle}>
                    Похожие фильмы
                  </span>

                  <div className={styles.moviesBlockWrapperOnline}>
                    {movieInfo?.similar_movies?.map((el) => (
                      <div
                        onClick={() => {
                          navigate("/movie/" + el?.kinopoisk_id);
                          window.location.reload();
                        }}
                        key={Math.random() + Math.random()}
                      >
                        <MovieCard haveRating={true} movie={el} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Movie;

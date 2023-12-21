import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./GalleryMovie.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function GalleryMovie({ movies, title }) {
  console.log(styles.galleryMovies);

  return (
    <>
      <span className={styles.galleryTitle}>{title}</span>
      <div className={styles.horizontalWrapper}>
        {movies?.map((el) => (
          <Link
            className={styles.horizontalWrapperMovies}
            to={`/movie/${el.kinopoisk_id}`}
            key={Math.random() + Math.random()}
          >
            <MovieCard haveRating={true} movie={el} />
          </Link>
        ))}
      </div>

      {/*     <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={6}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className={styles.swiper}
      >
        {movies?.map((el) => (
          <SwiperSlide
            key={Math.random() + Math.random()}
          >
            <Link
              to={`/movie/${el.kinopoisk_id}`}
              key={Math.random() + Math.random()}
            >
              <MovieCard haveRating={true} movie={el} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
 */}
      {/*     <Swiper
      spaceBetween={50}
      slidesPerView={20}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ maxWidth: "100%", minHeight: "400px" }}
    >
        <span className={styles.galleryTitle}>{title}</span> *
      {movies?.map((el) => (
        <SwiperSlide
          onClick={() => {
            navigate("/movie/" + el?.kinopoisk_id);
            window.location.reload();
          }}
          key={Math.random() + Math.random()}
          style={{ width: "300px!important" }}
        >
          <MovieCard haveRating={true} movie={el} />
        </SwiperSlide>
      ))}
      ...
    </Swiper> */}
    </>
  );
}

export default GalleryMovie;

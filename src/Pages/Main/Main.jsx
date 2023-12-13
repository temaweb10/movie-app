import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import GalleryMovie from "../../components/GalleryMovie/GalleryMovie";
import Loading from "../../components/Loading/Loading";
import MoviesList from "../../components/MoviesList/MoviesList";
import Test from "../../components/Test";
import Input from "../../components/UI/Input/Input";
import styles from "../Main/Main.module.css";

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);

  const [allCategories, setAllCategories] = useState([]);

  const getAllCategories = async () => {
    let res = await axios.get("https://api.movielab.media/api/v1/catalog");
    setAllCategories(res.data);
    setIsLoading(true);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div
      className={styles.Main}
      style={
        isLoading
          ? { alignItems: "start", marginTop: "35px" }
          : {
              alignItems: "center",
              marginTop: "0px",
            }
      }
    >
      <div className={styles.mainContent}>
        {console.log(allCategories)}
        {isLoading ? (
          allCategories.result.full.map((category) => (
            <GalleryMovie title={category.name} movies={category.movies} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

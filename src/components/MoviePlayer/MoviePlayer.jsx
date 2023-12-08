import React, { useEffect } from "react";
import "./MoviePlayer.css";
const MoviePlayer = ({ idMovie }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kinobox.tv/kinobox.min.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      const kinobox = new window.Kinobox(".kinobox-player", {
        search: { kinopoisk: idMovie },
      });
      kinobox.init();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  /* ".kinobox_player" */
  return <div className="kinobox-player"></div>;
};

export default MoviePlayer;

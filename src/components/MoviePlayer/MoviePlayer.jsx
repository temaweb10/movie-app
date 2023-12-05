import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MoviePlayer = () => {
  let params = useParams();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kinobox.tv/kinobox.min.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      const kinobox = new window.Kinobox(".kinobox_player", {
        search: { kinopoisk: params.idMovie },
      });
      kinobox.init();
    };

    return () => {
      // Очистка ресурсов
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="kinobox_player" style={{ width: "70%" }}></div>
    </div>
  );
};

export default MoviePlayer;

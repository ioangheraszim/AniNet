import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LatestAnime() {
  const [currentAnime, setCurrentAnime] = useState([]);

  const apiBaseUrl = "https://api.jikan.moe/v4/seasons/now";

  const fetchLatestAnime = () => {
    fetch(apiBaseUrl)
      .then((response) => response.json())
      .then((data) => {
        setCurrentAnime(data.data.slice(0, 9));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchLatestAnime();
  }, []);

  return (
    <section className="container mx-auto">

       <div className="container md:flex justify-between items-center pr-1 pl-1 m-3">
        <h1 className="border-l-4 border-cool pl-5 font-oswald uppercase tracking-widest font-bold text-xl">
          Latest Anime
        </h1>
        <button className="cursor-pointer tracking-wider my-5">
          View All <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 sm:gap-4 md:gap-5 p-4 lg:p-10 transition-all duration-300">
        {currentAnime.map((anime) => (
          <CardComponent
            key={anime.mal_id}
            {...anime}
            image={anime.images.jpg.large_image_url}
            year={anime.aired.prop.from.year}
            type={anime.type}
          />
        ))}
      </div>
    </section>
  );
}

export default LatestAnime;

import React, { useContext } from "react";
import CardComponent from "./CardComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AnimeContext } from "../Context/AnimeContext";
import { Link } from "react-router-dom";

function LatestAnime() {
  const { currentAnime } = useContext(AnimeContext)

  
  if (!currentAnime) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-b-4 h-12 w-12"></div>
      </div>
    );
  }

  const slicedCurrent = currentAnime.slice(0, 12);

  return (
    <section className="container mx-auto">
       <div className=" md:flex justify-between items-center px-2 m-3">
        <h1 className="border-l-4 border-cool pl-5 font-oswald uppercase tracking-widest font-bold text-xl">
          Latest Anime
        </h1>
        <Link to="/latestanime" className="cursor-pointer tracking-wider my-5">
          View All <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-5 p-4 lg:p-10 transition-all duration-300">
        {slicedCurrent.map((anime) => (
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

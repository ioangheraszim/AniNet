import React, { useContext } from "react";
import CardComponent from "./CardComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AnimeContext } from "../Context/AnimeContext";

function Popular() {
  const { topAnime } = useContext(AnimeContext);

  if (!topAnime) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-b-4 h-12 w-12"></div>
      </div>
    );
  }
  
  return (
    <section className="container mx-auto">
      <div className="container md:flex justify-between items-center pr-1 pl-1 m-3">
        <h1 className="border-l-4 border-cool pl-5 font-oswald uppercase tracking-widest font-bold text-xl">
          Popular
        </h1>
        <button className="cursor-pointer tracking-wider my-5">
          View All <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-5 p-4 lg:p-10 transition-all duration-300">
        {topAnime.map((anime) => (
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

export default Popular;

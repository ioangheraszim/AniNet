import React, { useContext, useState, useEffect } from "react";
import CardComponent from "../Sections/CardComponent";
import { AnimeContext } from "../Context/AnimeContext";

function Movies() {
  const {animes, fetchAnime} = useContext(AnimeContext);
  
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchAnime(currentPage);
  }, [currentPage]);

  const incrementPage = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  const decrementPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    }
  };

  const animeMovie = animes.filter((anime) => anime.type === "Movie");

  return (
    <section className="container mx-auto">
      <div>
        <h1 className="text-3xl mt-10 pl-10">Anime Movies</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-5 p-4 lg:p-10 transition-all duration-300">
        {animeMovie.map((anime) => (
          <CardComponent
            key={anime.mal_id}
            {...anime}
            image={anime.images.jpg.large_image_url}
            year={anime.aired.prop.from.year}
            type={anime.type}
          />
        ))}
      </div>
      <div className="container mx-auto mt-10 w-full flex items-center justify-between">
        <button onClick={decrementPage} className="p-3 bg-cool rounded">
          Previous Page
        </button>
        <span>{currentPage === 1 ? "" : currentPage - 1}</span>
        <p className="text-3xl">{currentPage}</p>
        <span>{currentPage === 8 ? "" : currentPage + 1}</span>
        <button onClick={incrementPage} className={currentPage === 1033 ? "text-background" : "p-3 bg-cool rounded"}>
            Next Page
        </button>
      </div>
    </section>
  );
}

export default Movies;

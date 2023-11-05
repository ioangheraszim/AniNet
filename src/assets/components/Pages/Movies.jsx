import React, { useContext, useState, useEffect } from "react";
import CardComponent from "../Sections/CardComponent";
import { AnimeContext } from "../Context/AnimeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function Movies() {
  const { animes, fetchAnime } = useContext(AnimeContext);

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

  const movieOva = ["Movie", "OVA"];

  const animeMovie = animes.filter((anime) =>
    movieOva.some((type) => anime.type.includes(type))
  );

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
      <div className="container mx-auto mt-10 w-full flex items-center justify-center border-2 border-accent rounded-lg">
        <button aria-label="previous page" onClick={decrementPage} className="p-3 px-5 bg-accent hover:bg-gen rounded mr-auto">
          <FontAwesomeIcon icon={faArrowLeftLong}/>
        </button>
        <button aria-label={`page number ${decrementPage}`} onClick={decrementPage} className={`${currentPage === 1 ? "hidden" : ""} mx-auto bg-accent hover:bg-gen py-3 px-5`}>{currentPage === 1 ? "" : currentPage - 1}</button>
        <p className="mx-auto bg-secondary px-5 py-2 text-2xl">{currentPage}</p>
        <button aria-label={`page number ${incrementPage}`} onClick={incrementPage} className={`${currentPage >= 1032 ? "hidden" : "mx-auto bg-accent hover:bg-gen py-3 px-5"}`}>{currentPage === 1032 ? "" : currentPage + 1}</button>
        <button
          aria-label="next page"
          onClick={incrementPage}
          className={
            currentPage === 1032
              ? "text-background"
              : "p-3 px-5 bg-accent hover:bg-gen rounded ml-auto"
          }
        >
          <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </section>
  );
}

export default Movies;

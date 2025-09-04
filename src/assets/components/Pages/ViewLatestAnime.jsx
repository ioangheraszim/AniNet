import { useContext, useState, useEffect } from "react";
import { AnimeContext } from "../Context/AnimeContext";
import CardComponent from "../Sections/CardComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

function ViewLatestAnime() {
  const { currentAnime, fetchLatestAnime } = useContext(AnimeContext);

  const currentData = currentAnime.data;
  const [currentPage, setCurrentPage] = useState(1);

  const incrementPage = () => {
    if (currentPage < currentAnime.pagination.last_visible_page) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    }
  };

  const decrementPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    }
  };

  useEffect(() => {
    fetchLatestAnime(currentPage);
  }, [currentPage]);

  if (!currentData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-b-4 h-12 w-12"></div>
      </div>
    );
  }

  return (
    <section className="container mx-auto">
      <div className="">
        <h1 className="text-3xl mt-10">Popular Anime</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-5 p-4 lg:p-10 transition-all duration-300">
        {currentData.map((anime) => (
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
        <button
          aria-label="previous page"
          onClick={decrementPage}
          className="p-3 px-5 bg-accent hover:bg-gen rounded mr-auto"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </button>
        <button
          aria-label={`page number ${decrementPage}`}
          onClick={decrementPage}
          className={`${
            currentPage === 1 ? "hidden" : ""
          } mx-auto bg-accent hover:bg-gen py-3 px-5`}
        >
          {currentPage === 1 ? "" : currentPage - 1}
        </button>
        <p className="mx-auto bg-secondary px-5 py-2 text-2xl">{currentPage}</p>
        <button
          aria-label={`page number ${incrementPage}`}
          onClick={incrementPage}
          className={`${
            currentPage >= currentAnime.pagination.last_visible_page
              ? "hidden"
              : "mx-auto bg-accent hover:bg-gen py-3 px-5"
          }`}
        >
          {currentPage === currentAnime.pagination.last_visible_page
            ? ""
            : currentPage + 1}
        </button>
        <button
          aria-label="next page"
          onClick={incrementPage}
          className={
            currentPage === currentAnime.pagination.last_visible_page
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

export default ViewLatestAnime;

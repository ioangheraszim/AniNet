import React, { useContext, useState, useEffect } from "react";
import { AnimeContext } from "../Context/AnimeContext";
import CardComponent from "../Sections/CardComponent";
function ViewLatestAnime() {
  const { currentAnime, fetchLatestAnime } = useContext(AnimeContext);

  const currentData = currentAnime.data;
  const [currentPage, setCurrentPage] = useState(1);
  
  const incrementPage = () => {
      if (currentPage < 6) {
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
      <div className="container mx-auto mt-10 w-full flex items-center justify-between">
        <button onClick={decrementPage} className="p-3 bg-cool rounded">
          Previous Page
        </button>
        <span>{currentPage === 1 ? "" : currentPage - 1}</span><p className="text-3xl">{currentPage}</p> <span>{currentPage === currentAnime.pagination.last_visible_page ? "" : currentPage + 1}</span>
        <button onClick={incrementPage} className={currentPage === currentAnime.pagination.last_visible_page ? "text-background" : "p-3 bg-cool rounded"}>
            Next Page
        </button>
      </div>
    </section>
  );
}

export default ViewLatestAnime;

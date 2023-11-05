import React, { useContext, useEffect } from "react";
import CardComponent from "../Sections/CardComponent";
import { AnimeContext } from "../Context/AnimeContext";

function SearchPage() {
  const {searchResults, fetchSearchAnime, searchInput} = useContext(AnimeContext);  

  useEffect(() => {
    if (searchInput.trim() !== "") {
      fetchSearchAnime();
    }
  }, [searchInput]);

  return (
    <section className="container mx-auto">
      <h1 className="text-3xl">Search Page:</h1>
      <div className="grid gap-4 grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 transition-all duration-300 my-5">
        {!searchInput
          ? <div>
              <h2>Type Something in the search bar</h2>
            </div>
          : searchResults.map((item) => (
              <CardComponent
                key={item.mal_id}
                {...item}
                image={item.images?.jpg?.large_image_url}
                year={item.aired?.prop?.from?.year}
                type={item.type}
              />
            ))}
      </div>
    </section>
  );
}

export default SearchPage;

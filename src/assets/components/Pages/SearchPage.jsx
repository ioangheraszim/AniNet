import React, { useEffect, useState } from "react";
import CardComponent from "../Sections/CardComponent";

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchSearchAnime = async () => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchInput}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch character info: ${response.statusText}`
        );
      }
      const data = await response.json();
      setSearchResults(data.data);
      console.log(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchSearchAnime();
  }, [searchInput]);

  const onSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    fetchSearchAnime();
  };

  return (
    <section className="container mx-auto">
      <form action="">
        <input
          onInput={onSearchInput}
          className="bg-gen text-cool border-none outline-none p-2 rounded-lg w-full transition-all duration-200 h-10 overflow-hidden"
          type="text"
          placeholder="Search..."
        />
        <button onClick={handleSearchClick} className="ml-5">
          Click here to search
        </button>
      </form>
      <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 transition-all duration-300 my-5">
        {!searchInput
          ? ""
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

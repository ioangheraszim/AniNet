import React, { useEffect, useState } from "react";

function Series() {
  const [allAnime, setAllAnime] = useState([]); // Initialize with an empty array

  const fetchAllData = async () => {
    try {
      let allAnimeData = [];
      let page = 1;
      const perPage = 8; // Number of anime per page

      while (allAnimeData.length < 20) {
        const response = await fetch(`https://api.jikan.moe/v4/seasons/now?page=${page}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch top anime info: ${response.statusText}`);
        }
        const data = await response.json();
        allAnimeData = allAnimeData.concat(data.data);
        page++;

        // Check if you have enough anime data or if there are no more pages to fetch
        if (data.data.length < perPage) {
          break;
        }
      }

      // Set the first 10 anime from the concatenated data
      setAllAnime(allAnimeData);
    } catch (error) {
      console.error("There is an error at", error);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, []); // The empty dependency array ensures it only runs once when the component mounts.

  // Define a filter criteria for movies
  const movieFilter = "Movie";

  // Use the filter function to keep movies
  const filteredMovies = allAnime.filter((anime) => {
    return anime.type === movieFilter;
  });

  return (
    <>
      <h1 className="container mx-auto mt-10 text-3xl">Series: For testing purposes only for now</h1>
      <section className="container md:flex mx-auto py-10">
        {allAnime.map((anime) => (
          <div key={anime.id}>{anime.title}</div>
        ))}
      </section>
    </>
  );
}

export default Series;

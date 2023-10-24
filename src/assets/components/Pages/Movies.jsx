import React, { useEffect, useState } from "react";

function Movies() {
  const [characters, setCharacters] = useState([]);
  const id = 31964;
  const animeURL = `https://api.jikan.moe/v4/characters/${id}`;

  async function fetchAnimeData() {
    try {
      const response = await fetch(animeURL);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setCharacters(data);
    } catch (error) {
      console.error("There was an error:", error);
    }
  }

  useEffect(() => {
    fetchAnimeData();
  }, []);

  return (
    <section className="container mx-auto">
      <h1 className="text-3xl">Movies</h1>
      {characters && characters.data ? (
        <div className="p-1" key={characters.data.mal_id}>
          <li className="flex justify-between mt-1 font-bold">Name: <span  className="ml-5 font-thin"> {characters.data.name} </span> </li>
          <p>{characters.data.about}</p>
          <li>{characters.data.name_kanji}</li>
          <img
            src={characters.data.images?.jpg?.image_url}
            alt={characters.data.name}
            />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 border-b-4 h-12 w-12"></div>
        </div>
      )}
    </section>
  );
}

export default Movies;

{/* <p>{characters.data.about}</p> */}
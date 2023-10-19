import React, { useEffect, useState } from "react";

function Movies() {
  const [currentAnime, setCurrentAnime] = useState([]);
  const animeID = 1;
  const apiBaseUrl = `https://api.jikan.moe/v4/characters/${animeID}/anime`;
  

  const fetchLatestAnime = () => {
    fetch(apiBaseUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchLatestAnime();
  }, []);
  console.log(currentAnime)

  return (
    <div className="container mx-auto">
      <h1>Latest anime out now!</h1>
      <div>
      </div>
    </div>
  );
}

export default Movies;

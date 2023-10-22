import React, { useEffect, useState } from "react";

function Movies() {
  const [currentAnime, setCurrentAnime] = useState([]);

  const animeID = 1;
  const apiBaseUrl = `https://api.jikan.moe/v4/characters/${animeID}`;
  
  const fetchLatestAnime = () => {
    fetch(apiBaseUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the currentAnime state with the fetched data
        setCurrentAnime(data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchLatestAnime();
  }, []); 
  
  return (
    <div className="container mx-auto">
      This is for testing now only
      <div>      

      </div>
    </div>
  );
}

export default Movies;

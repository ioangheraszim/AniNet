import React, { createContext, useState, useEffect } from "react";

export const AnimeContext = createContext("");

function AnimesContext({ children }) {
  const [currentAnime, setCurrentAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);


  const apiBaseUrlCurrent = "https://api.jikan.moe/v4/seasons/now";
  const apiBaseUrlTop = "https://api.jikan.moe/v4/top/anime";

  const fetchLatestAnime = () => {
    fetch(apiBaseUrlCurrent)
      .then((response) => response.json())
      .then((data) => {
        setCurrentAnime(data.data.slice(0, 9));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const fetchTopAnime = () => {
    fetch(apiBaseUrlTop)
      .then((res) => res.json())
      .then((data) => {
        setTopAnime(data.data.slice(0, 9));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    // Implement rate limiting here to respect the API rate limits
    const fetchWithRateLimit = (fetchFunction, delay) => {
      const fetchPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(fetchFunction());
        }, delay);
      });

      return fetchPromise;
    };

    // Fetch latest anime with a 1-second delay between requests
    fetchWithRateLimit(fetchLatestAnime, 1000);

    // Fetch top anime with a 1-second delay between requests
    fetchWithRateLimit(fetchTopAnime, 1000);

  }, []);

  const contextValue = {
    currentAnime,
    topAnime,
  };

  return (
    <AnimeContext.Provider value={contextValue}>
      {children}
    </AnimeContext.Provider>
  );
}


export default AnimesContext;

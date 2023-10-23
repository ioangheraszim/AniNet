import React, { createContext, useState, useEffect } from "react";

export const AnimeContext = createContext("");

function AnimesContext({ children }) {
  const [currentAnime, setCurrentAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [character, setCharacter] = useState([]);
  const [characterInfo, setCharacterInfo] = useState([]);
  const [fullAnime, setFullAnime] = useState(null);

  const apiBaseUrl = "https://api.jikan.moe/v4/";
  const apiBaseUrlCurrent = `${apiBaseUrl}seasons/now`;
  const apiBaseUrlTop =`${apiBaseUrl}top/anime"`

  const fetchCharacterInfo = async (id) => {
    try {
      const characterInfo = `${apiBaseUrl}characters/${id}/full`;
      const response = await fetch(characterInfo);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch character info: ${response.statusText}`);
      }
  
      const data = await response.json();
      setCharacterInfo(data.data);
    } catch (error) {
      console.error("Error fetching character info:", error);
    }
  };

  // Fetches anime character image, id, name of the selected anime id
  const fetchAnimeCharacter = (id) => {
    const characterUrl = `https://api.jikan.moe/v4/anime/${id}/characters`;
    fetch(characterUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.data);
      })
      .catch((error) => {
        console.error("Error fetching anime character details:", error);
      });
  };

  // Fetches full anime information except character information on the selected anime
  const fetchFullAnime = (id) => {
    const fullAnimeUrl = `https://api.jikan.moe/v4/anime/${id}/full`;
    fetch(fullAnimeUrl)
      .then((response) => response.json())
      .then((data) => {
        setFullAnime(data.data);
      })
      .catch((error) => {
        console.error("Error fetching full anime details:", error);
      });
  };

  // Fetches the latest anime out right now | selected only 9 with slice method |
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

  // Similar to above but with the top anime
  const fetchTopAnime = async () => {
    const response = await fetch(apiBaseUrlTop)
    if(!response.ok) {
      throw new Error (`Failed to fetch top anime info: ${response.statusText}`)
    }
    const data = await response.json()
    const slicedData = data.data.slice(0, 9)
        setTopAnime(slicedData);
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

    // Fetch latest anime with a 3-second delay between requests
    fetchWithRateLimit(fetchLatestAnime, 1000);

    // Fetch top anime with a 3-second delay between requests
    fetchWithRateLimit(fetchTopAnime, 1000);

    // Fetch full anime details with a 3-second delay between requests
    fetchWithRateLimit(fetchFullAnime, 1000);

    // Fetch full anime character details
    fetchWithRateLimit(fetchCharacterInfo, 1000);
    
  }, []);

  const contextValue = {
    currentAnime,
    topAnime,
    fullAnime,
    character,
    characterInfo,
    fetchFullAnime,
    fetchAnimeCharacter,
    fetchCharacterInfo,
  };

  return (
    <AnimeContext.Provider value={contextValue}>
      {children}
    </AnimeContext.Provider>
  );
}

export default AnimesContext;
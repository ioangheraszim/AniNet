import React, { createContext, useState, useEffect } from "react";

export const AnimeContext = createContext("");

function AnimesContext({ children }) {
  const [currentAnime, setCurrentAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [character, setCharacter] = useState([]);
  const [characterInfo, setCharacterInfo] = useState([]);
  const [fullAnime, setFullAnime] = useState(null);
  const [animes, setAnimes] = useState([]);

  

  const fetchAnime = async (page = 1) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?page=${page}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setAnimes(data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const apiBaseUrl = "https://api.jikan.moe/v4/";

  // Fetches full character info for selected characters
  const fetchCharacterInfo = async (id) => {
    try {
      const characterInfo = `${apiBaseUrl}characters/${id}/full`;
      const response = await fetch(characterInfo);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch character info: ${response.statusText}`
        );
      }

      const data = await response.json();
      setCharacterInfo(data.data);
    } catch (error) {
      console.error("Error fetching character info:", error);
    }
  };

  // Fetches anime character image, id, name of the selected anime id
  const fetchAnimeCharacter = async (id) => {
    try {
      const characterUrl = `${apiBaseUrl}anime/${id}/characters`;
      const response = await fetch(characterUrl);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch character info: ${response.statusText}`
        );
      }

      const data = await response.json();
      setCharacter(data.data);
    } catch (error) {
      console.error("Error fetching anime character details:", error);
    }
  };


  // Fetches full anime information except character information on the selected anime
  const fetchFullAnimeById = (id) => {
    const fullAnimeUrl = `${apiBaseUrl}anime/${id}/full`;
    fetch(fullAnimeUrl)
      .then((response) => response.json())
      .then((data) => {
        setFullAnime(data.data);
      })
      .catch((error) => {
        console.error("Error fetching full anime details:", error);
      });
  };

  // Fetches the latest anime out right now | selected only 24 with slice method |
  const fetchLatestAnime = async (page = 1) => {
    const apiBaseUrlCurrent = `${apiBaseUrl}seasons/now?page=${page}`;
    const response = await fetch(apiBaseUrlCurrent);
    if (!response.ok) {
      throw new Error(`Failed to fetch top anime info: ${response.statusText}`);
    }
    const data = await response.json();
    setCurrentAnime(data);
  };

  // Similar to above but with the top anime
  const fetchTopAnime = async (page = 1) => {
    const apiBaseUrlTop = `${apiBaseUrl}top/anime?page=${page}`;
    const response = await fetch(apiBaseUrlTop);
    if (!response.ok) {
      throw new Error(`Failed to fetch top anime info: ${response.statusText}`);
    }
    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    // Define a function to fetch data with rate limiting
    const fetchDataWithRateLimit = async (fetchFunction, maxRequestsPerMinute = 60, maxRequestsPerSecond = 3) => {
      const requests = { thisMinute: 0, thisSecond: 0 };
      const now = Date.now();
      const resetTime = now + 60000; // 60 seconds in milliseconds
  
      // Rate-limiting logic
      if (requests.thisMinute >= maxRequestsPerMinute) {
        console.warn("Rate limit exceeded for this minute. Waiting...");
        await new Promise((resolve) => setTimeout(resolve, resetTime - now));
      }
      if (requests.thisSecond >= maxRequestsPerSecond) {
        console.warn("Rate limit exceeded for this second. Waiting...");
        await new Promise((resolve) => setTimeout(resolve, 1000 - (now % 1000)))
      }
  
      try {
        // Fetch data and update request counts
        const data = await fetchFunction();
        console.log(`Request successful for ${fetchFunction.name}`);
        requests.thisMinute++;
        requests.thisSecond++;
        return data;
      } catch (error) {
        console.error(`Error for ${fetchFunction.name}:`, error);
        // Retry after 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return fetchDataWithRateLimit(fetchFunction);
      }
    };
  
    // Fetch data with rate limiting
    fetchDataWithRateLimit(fetchAnime);
    fetchDataWithRateLimit(fetchLatestAnime);
    fetchDataWithRateLimit(fetchTopAnime);
    fetchDataWithRateLimit((id) => fetchFullAnimeById(id));
    fetchDataWithRateLimit(() => fetchCharacterInfo(1));
  }, []);

  const contextValue = {
    animes,
    currentAnime,
    topAnime,
    fullAnime,
    character,
    characterInfo,
    fetchFullAnimeById,
    fetchAnimeCharacter,
    fetchCharacterInfo,
    fetchTopAnime,
    fetchLatestAnime,
    fetchAnime
  };

  return (
    <AnimeContext.Provider value={contextValue}>
      {children}
    </AnimeContext.Provider>
  );
}

export default AnimesContext;

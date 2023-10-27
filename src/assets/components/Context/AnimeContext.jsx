import React, { createContext, useState, useEffect } from "react";

export const AnimeContext = createContext("");

function AnimesContext({ children }) {
  const [currentAnime, setCurrentAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [character, setCharacter] = useState([]);
  const [characterInfo, setCharacterInfo] = useState([]);
  const [fullAnime, setFullAnime] = useState(null);

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
  const fetchFullAnime = (id) => {
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

  // Fetches the latest anime out right now | selected only 9 with slice method |
  const fetchLatestAnime = (page = 1) => {
    const apiBaseUrlCurrent = `${apiBaseUrl}seasons/now?page=${page}`;
    fetch(apiBaseUrlCurrent)
      .then((response) => response.json())
      .then((data) => {
        setCurrentAnime(data.data.slice(0, 20));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Similar to above but with the top anime
  const fetchTopAnime = async (page = 1) => {
    const apiBaseUrlTop = `${apiBaseUrl}top/anime?page=${page}`;
    const response = await fetch(apiBaseUrlTop);
    if (!response.ok) {
      throw new Error(`Failed to fetch top anime info: ${response.statusText}`);
    }
    const data = await response.json();
    const slicedData = data.data;
    setTopAnime(slicedData);
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
    fetchDataWithRateLimit(fetchLatestAnime);
    fetchDataWithRateLimit(fetchTopAnime);
    fetchDataWithRateLimit((id) => fetchFullAnime(id));
    fetchDataWithRateLimit(() => fetchCharacterInfo(1));
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
    fetchTopAnime,
    fetchLatestAnime,
  };

  return (
    <AnimeContext.Provider value={contextValue}>
      {children}
    </AnimeContext.Provider>
  );
}

export default AnimesContext;

import React, { createContext } from 'react'

export const AnimeContext = createContext("")

function AnimesContext( {children} ) {

  const [currentAnime, setCurrentAnime] = useState([]);

  const apiBaseUrl = "https://api.jikan.moe/v4/seasons/now";

  const fetchLatestAnime = () => {
    fetch(apiBaseUrl)
      .then((response) => response.json())
      .then((data) => {
        setCurrentAnime(data.data.slice(0, 3));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchLatestAnime();
  }, []);
  
  const contextValue = {
    currentAnime
  }

  return (
    <AnimeContext.Provider value={(contextValue)}>{children}</AnimeContext.Provider>
  )
}

export default AnimesContext
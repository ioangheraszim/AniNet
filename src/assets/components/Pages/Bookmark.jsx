import React, { useContext, useLayoutEffect, useState } from 'react';
import { AnimeContext } from '../Context/AnimeContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Bookmark() {
  const { bookmarkedAnimes, removeBookmarkAnime } = useContext(AnimeContext);
  
  // Create a state object to store the watched status for each anime
  const [watchedStatus, setWatchedStatus] = useState({});

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  // Function to toggle the watched status for a specific anime
  const toggleWatched = (mal_id) => {
    setWatchedStatus((prevState) => ({
      ...prevState,
      [mal_id]: !prevState[mal_id] || false,
    }));
  };

  return (
    <section className='container mx-auto'>
      <h2 className='text-3xl my-10'>Your Bookmarked Anime</h2>
      <div>
        
        { Object.keys(bookmarkedAnimes).length === 0 ? (
          <p className='text-lg'> No animes have been bookmarked</p>
        ) :        
        Object.values(bookmarkedAnimes).map((anime) => (
          <div className='sm:flex justify-between items-center p-5' key={anime.mal_id}>
            <div className='flex flex-col justify-center sm:justify-normal sm:flex-row items-center max-w-lg'>
              <Link to={`/details/${anime.mal_id}`} className='w-1/2 sm:w-[30%] md:w-[30%]'>
                <img className='rounded-lg' src={anime.images.webp.large_image_url} alt={anime.title} />                             
              </Link>
              <h3 className='my-2 text-center px-20'>{anime.title}</h3>
            </div>
            <div className='flex justify-evenly items-center'>
              <button aria-label="toggle watched" onClick={() => toggleWatched(anime.mal_id)} className={`${watchedStatus[anime.mal_id] ? "text-primary" : "text-gen"} hover:text-primary mr-5 text-2xl`}              >
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button aria-label="delete" onClick={() => removeBookmarkAnime(anime.mal_id)} className='text-gen hover:text-cool text-2xl'>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bookmark;

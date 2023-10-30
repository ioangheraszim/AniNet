import React, { useLayoutEffect, useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faPlay, faXmark,} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { AnimeContext } from "../Context/AnimeContext";
import CharacterCard from "../Sections/CharacterCard";

function Details() {
  const { fullAnime, fetchFullAnimeById, character, fetchAnimeCharacter } = useContext(AnimeContext);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openVideoPlayer = () => {
    setShowVideoPlayer(true);
  };

  const closeVideoPlayer = () => {
    setShowVideoPlayer(false);
  };

  const { mal_id } = useParams();

  useEffect(() => {
    fetchFullAnimeById(mal_id);
    fetchAnimeCharacter(mal_id);
  }, [mal_id, fetchFullAnimeById, character]);

  if (!fullAnime) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-b-4 h-12 w-12"></div>
      </div>
    );
  }

  const {
    title,
    title_japanese,
    rank,
    synopsis,
    genres,
    score,
    rating,
    duration,
    trailer,
    images,
    aired,
    source,
    demographics,
    studios,
  } = fullAnime;

  return (
    <>

      <section id="up" className="container md:flex mx-auto p-10 relative">
        <div className="w-full">
          <img
            className="rounded-3xl w-full"
            src={images.webp.large_image_url}
            alt={title}
          />
        </div>
        <div className="w-full md:ml-5 p-2 ">
          <div>
            <div className="md:flex items-center justify-between">
              <div>
                <h1 className="text-3xl">{title}</h1>
                <p>{title_japanese}</p>
              </div>
              <div className="">
                <p className="md:text-3xl">#{rank}</p>
              </div>
            </div>
            <p className="my-5">{synopsis}</p>
            <div className="flex sm:flex-row flex-col justify-start">
              <ul className="flex w-full mr-10 flex-col justify-between">
                <li className="flex justify-between font-bold ">
                  Type: <span className="ml-5 font-thin">{fullAnime.type}</span>
                </li>
                <li className="flex justify-between mt-1 font-bold">
                  Studios:
                  <span className="flex text-right ml-5 font-thin">
                    {studios.map((studio) => (
                      <p className="" key={studio.mal_id}>
                        {studio.name}
                      </p>
                    ))}
                  </span>
                </li>
                <li className="flex justify-between mt-1 font-bold">
                  Date aired:
                  <span className="ml-5 font-thin">
                    {aired.prop.from.year} - {aired.prop.to.year}
                  </span>
                </li>
                <li className="flex justify-between mt-1 font-bold">
                  Status:
                  <span className="ml-5 font-thin">{fullAnime.status}</span>
                </li>
                <li className="flex justify-between mt-1 font-bold">
                  Genre:
                  <span className="ml-5 font-thin">
                    {genres.map((genre) => (
                      <span className="flex p-1" key={genre.mal_id}>
                        {genre.name}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
              <ul className="flex w-full flex-col justify-between">
                <li className="flex justify-between font-bold">
                  Score: <span className="ml-5 font-thin">{score}</span>
                </li>
                <li className="flex justify-between font-bold">
                  Rating:
                  <span className="text-right ml-5 font-thin">{rating}</span>
                </li>
                <li className="flex justify-between font-bold">
                  Duration: <span className="ml-5 font-thin">{duration}</span>
                </li>
                <li className="flex justify-between font-bold">
                  Source: <span className="ml-5 font-thin">{source}</span>
                </li>
                <li className="flex justify-between font-bold">
                  Category:
                  <span className="ml-5 font-thin">
                    {demographics.map((demo) => (
                      <span key={demo.mal_id}>{demo.name}</span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <button className="bg-accent hover:bg-cool rounded-lg px-5 py-2">
                <FontAwesomeIcon icon={faBookmark} /> Bookmark
              </button>

              <a href="#up">
                <button
                  onClick={openVideoPlayer}
                  className="bg-accent hover:bg-cool rounded-lg px-5 py-2 ml-5"
                >
                  <FontAwesomeIcon icon={faPlay} /> Trailer
                </button>
              </a>
            </div>
          </div>
          {showVideoPlayer && (
            <div className="bg-opacity-10 backdrop-blur-lg bg-accent absolute top-1/4 left-2/4 sm:top-1/2 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition-all duration-300 xsm:w-full xsm:h-1/4 w-full h-1/6 sm:h-1/4 md:h-3/4 lg:h-5/6 ">
              <iframe
                className="w-full h-full p-7 "
                src={trailer.embed_url}
                showinfo="0"
              ></iframe>
              <button
                onClick={closeVideoPlayer}
                className="text-3xl absolute top-0 right-0"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="container mx-auto border-t border-cool rounded px-2">
        <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 transition-all duration-300 my-5">
          {character.map((char) => (
            <CharacterCard key={char.character.mal_id} {...char} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Details;

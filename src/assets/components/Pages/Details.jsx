import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

function Details() {
  const { mal_id } = useParams();
  const [fullAnime, setFullAnime] = useState(null);
  console.log(fullAnime);
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

  useEffect(() => {
    fetchFullAnime(mal_id);
  }, [mal_id]);

  if (!fullAnime) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container md:flex mx-auto p-10">
      <div className="">
        <img
          className="rounded-3xl"
          src={fullAnime.images.jpg.large_image_url}
          alt=""
        />
      </div>
      <div className="w-[100%] md:ml-5 p-2">
        <div className="md:flex items-center justify-between">
          <div>
            <h1 className="text-3xl">{fullAnime.title}</h1>
            <p>{fullAnime.title_japanese}</p>
          </div>
          <div className="">
            <p>{fullAnime.rank}</p>
          </div>
        </div>
        <p className="my-5">{fullAnime.synopsis}</p>
        <div className="flex flex-wrap justify-start">
          <ul className="flex flex-col justify-between mr-10">
            <li className="flex justify-between">
              Type: <span className="ml-5">{fullAnime.type}</span>
            </li>
            <li className="flex justify-between">
              Studios: <span className="ml-5">{fullAnime.studios.map((studio) => (
                <span key={studio.mal_id}>{studio.name}</span>
              ))}</span>
            </li>
            <li className="flex justify-between">
              Date aired: <span className="ml-5">{fullAnime.aired.prop.from.year} - {fullAnime.aired.prop.to.year}</span>
            </li>
            <li className="flex justify-between">
              Status: <span className="ml-5">{fullAnime.status}</span>
            </li>
            <li className="flex justify-between">
              Genre:{" "}
              <span className="ml-5">
                {fullAnime.genres.map((genre) => (
                  <span className="p-1" key={genre.mal_id}>{genre.name}</span>
                ))}
              </span>
            </li>
            <li className="flex justify-between">
              Scores: <span className="ml-5">{fullAnime.score}</span>
            </li>
            <li className="flex justify-between">
              Rating: <span className="ml-5">{fullAnime.rating}</span>
            </li>
            <li className="flex justify-between">
              Duration: <span className="ml-5">{fullAnime.duration}</span>
            </li>
            <li className="flex justify-between">
              Quality: <span className="ml-5">TV Series</span>
            </li>
          </ul>
          <ul className="mt-2 sm:mt-0">
            
          </ul>
        </div>
        <div className="mt-10">
          <button className="bg-accent hover:bg-cool rounded-lg px-5 py-2">
            <FontAwesomeIcon icon={faBookmark} /> Bookmark
          </button>
          <button className="bg-accent hover:bg-cool rounded-lg px-5 py-2 ml-5">
            <FontAwesomeIcon icon={faPlay} /> Trailer
          </button>
        </div>
      </div>
    </section>
  );
}

export default Details;

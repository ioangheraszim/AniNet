import React, { useContext, useEffect } from "react";
import { AnimeContext } from "../Context/AnimeContext";
import { useParams } from "react-router-dom";

function CharacterDetails() {

  const { characterInfo, fetchCharacterInfo } = useContext(AnimeContext);

  const { name, name_kanji, images, nicknames, about } = characterInfo;
  const { mal_id } = useParams();
  
  console.log(characterInfo);
  useEffect(() => {
    fetchCharacterInfo(mal_id);
  }, [mal_id]);

  return (
    <section className="container md:flex mx-auto py-10">
      <div className="w-full mr-5">
        <img className="w-full h-full rounded-lg" src={images?.webp.image_url} alt={name} />
      </div>
      <div className="w-full">
        <div>
          <h1 className="text-3xl xsm:mt-10 sm:mt-5 md:mt-0 p-1">Name: {name}</h1>
          <h2 className="text-xl p-1">{name_kanji}</h2>
          <h2 className="text-lg p-1">{nicknames}</h2>
        </div>
        <p className="text-justify">{about}</p>
      </div>
    </section>
  )
}

export default CharacterDetails
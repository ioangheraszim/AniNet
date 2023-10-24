import React, { useContext, useEffect } from "react";
import { AnimeContext } from "../Context/AnimeContext";
import { useParams } from "react-router-dom";

function Series() {
  const { characterInfo, fetchCharacterInfo } = useContext(AnimeContext);

  const { name, name_kanji, images, nicknames, about } = characterInfo;
  const { mal_id } = useParams();

  console.log(characterInfo);
  useEffect(() => {
    fetchCharacterInfo(112891);
  }, [112891]);
  return (
    <>
      <h1 className="container mx-auto mt-10 text-3xl">Series: For testing purposes only for now</h1>
    <section className="container md:flex mx-auto py-10">
      <div className="w-full mr-5">
        <img className="w-full h-full" src={images?.webp.image_url} alt={name} />
      </div>
      <div className="w-full">
        <div>
          <h1 className="text-3xl">{name}</h1>
          <h2 className="text-xl">{name_kanji}</h2>
          <h2 className="text-lg">{nicknames}</h2>
        </div>
        <p>{about}</p>
      <button className="bg-cool p-2 px-4 my-5 rounded-lg">  back </button>
      </div>
    </section>
    
    </>
  );
}

export default Series;

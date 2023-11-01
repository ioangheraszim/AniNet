import React, { useContext, useEffect } from "react";
import { AnimeContext } from "../Context/AnimeContext";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
function CharacterDetails() {

  const navigate = useNavigate()

  const navigateBackDetails = () => {
    navigate(-1)
  }
  const { characterInfo, fetchCharacterInfo } = useContext(AnimeContext);

  const { name, name_kanji, images, nicknames, about } = characterInfo;
  const { mal_id } = useParams();

  useEffect(() => {
    fetchCharacterInfo(mal_id);
  }, [mal_id]);

  return (

    <>
    <div className="mx-auto container flex justify-end mt-10">
        <button
          onClick={navigateBackDetails}
          className="bg-accent hover:bg-cool rounded-lg px-5 py-2"
        >
          <FontAwesomeIcon icon={faLeftLong} /> Back
        </button>
      </div>
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
    
    </>
  )
}

export default CharacterDetails
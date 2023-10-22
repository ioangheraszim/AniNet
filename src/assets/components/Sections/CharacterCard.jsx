import React, { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function CharacterCard(props) {
  const [showDetails, setShowDetails] = useState(false);

  const { role, mal_id } = props;
  const { name, images } = props.character;

  const toggleDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <div className="rounded-lg transition-all duration-200 mt-5 lg:mx-auto lg:w-[232px]">
      <div>
        <img
          className="w-full p-2 rounded-xl "
          src={images.webp.image_url}
          alt={name}
        />
      </div>
      <div className="">
        <div className="flex justify-between p-2">
          <h2 className="text-3xl text-cool px-2 ">Role: {role}</h2>
          <button
            className="animate-bounce transition-all duration-300 text-2xl "
            onClick={toggleDetails}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
        <div className="relative ">
          <div
            className={`absolute top-0 ${
              showDetails ? "h-40" : "h-0"
            } rounded-b-xl translate left-0 w-full z-10 overflow-hidden bg-opacity-80 backdrop-blur-lg bg-background transition-all duration-300`}
          >
            <ul className="p-1">
              <li className="flex justify-between mt-1 font-bold">
                Name:
                <span className="ml-5 font-thin">{name}</span>
              </li>
              <li className="flex justify-between mt-1 font-bold">
                Kanji:
                <span className="ml-5 font-thin"> ロイド・フォージャー </span>
              </li>
              <li className="flex justify-between mt-1 font-bold">
                NickName:
                <span className="ml-5 font-thin"> Twilight</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;

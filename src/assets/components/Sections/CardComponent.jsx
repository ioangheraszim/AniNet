import React, { useState } from "react";
import { Link } from "react-router-dom";

function CardComponent() {

  const [getAnime, setGetAnime] = useState([]);
  

  return (
    <Link
      to="/"
      className="rounded-lg hover:scale-110 hover:shadow-md hover:shadow-secondary transition-all duration-200"
    >
      <div className="relative">
        <img
          src="https://images6.alphacoders.com/785/thumb-1920-785425.png"
          alt="Card 1"
          className="w-full h-48 object-cover rounded-lg"
        />
        <div>
          <p className="border-2 border-secondary rounded p-1 absolute bottom-2 left-2">Rating: 7.3</p>
          <p className="border-2 border-secondary rounded p-1 absolute top-2 right-2">2023</p>
          <p className="border-2 border-cool rounded bg-cool p-1 absolute top-2 left-2">18/?</p>
        </div>
      </div>

      <div className="flex">
        <p className="px-4 my-4 text-sm bg-gen rounded-lg mx-2">Status</p>
        <p className="px-4 my-4 text-sm bg-gen rounded-lg mx-2">Movie</p>
      </div>
      <h2 className="p-2 font-bold ">Fate Stay Night Unlimited Blade Works</h2>
    </Link>
  );
}

export default CardComponent;

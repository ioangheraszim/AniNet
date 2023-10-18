import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faPlay } from "@fortawesome/free-solid-svg-icons";

function Series() {
  return (
    <section className="container md:flex mx-auto p-10">
      <div className="">
        <img
          className="rounded-3xl"
          src="https://cdn.myanimelist.net/images/anime/3/72078l.jpg"
          alt=""
        />
      </div>
      <div className="w-[100%] md:ml-5 p-2">
        <div className="md:flex items-center justify-between">
          <div>
            <h1 className="text-3xl"> Fate Stay Night: Unlimited Blade </h1>
            <p> フェイト／ステイナイト, Feito／sutei naito </p>
          </div>
          <div className="">
            <p>Ranking</p>
          </div>
        </div>
        <p className="my-5">
          Every human inhabiting the world of Alcia is branded by a “Count” or a
          number written on their body. For Hina’s mother, her total drops to 0
          and she’s pulled into the Abyss, never to be seen again. But her
          mother’s last words send Hina on a quest to find a legendary hero from
          the Waste War - the fabled Ace!
        </p>
        <div className="flex flex-wrap justify-start">
          <ul className="flex flex-col justify-between md:w-[50%] lg:w-[50%]">
            <li>
              Type: <span className="ml-5">TV Series</span>
            </li>
            <li>
              Studios: <span className="ml-5">TV Series</span>
            </li>
            <li>
              Date aired: <span className="ml-5">TV Series</span>
            </li>
            <li>
              Status: <span className="ml-5">TV Series</span>
            </li>
            <li>
              Genre: <span className="ml-5">TV Series</span>
            </li>
          </ul>
          <ul className="mt-5 md:mt-0">
            <li>
              Scores: <span className="ml-5">TV Series</span>
            </li>
            <li>
              Rating <span className="ml-5">TV Series</span>
            </li>
            <li>
              Duration <span className="ml-5">TV Series</span>
            </li>
            <li>
              Quality <span className="ml-5">TV Series</span>
            </li>
            <li>
              Views <span className="ml-5">TV Series</span>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <button className="bg-accent hover:bg-cool rounded-lg px-5 py-2"><FontAwesomeIcon icon={faBookmark} /> Bookmark</button>
          <button className="bg-accent hover:bg-cool rounded-lg px-5 py-2 ml-5"><FontAwesomeIcon icon={faPlay} /> Trailer</button>
        </div>
      </div>
    </section>
  );
}

export default Series;

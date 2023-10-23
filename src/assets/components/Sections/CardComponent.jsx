import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
function CardComponent({ mal_id, title, score, episodes, status, image, year, type }) {

  const navigate = useNavigate()

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigateToDetails = () => {
    navigate(`/details/${mal_id}`);
  }
  
  return (
    <Link
      to={`/details/${mal_id}`}
      onClick={navigateToDetails}
      className="rounded-lg hover:scale-90 hover:shadow-md hover:shadow-secondary transition-all duration-200 mt-5 lg:mx-auto lg:w-[232px]"
    >
      <div className="relative">
        <img
          src={image}
          alt="Card 1"
          className="object-fit rounded-lg"
        />
        <div>
          <p className=" bg-opacity-60 backdrop-blur-lg bg-accent rounded p-1 absolute bottom-2 left-2">
            Rating: {score}
          </p>
          <p className="bg-opacity-60 backdrop-blur-lg bg-accent  rounded p-1 absolute top-2 right-2 text-primary">
            {year}
          </p>
          <p className="bg-opacity-60 backdrop-blur-lg border-cool rounded bg-cool p-1 absolute top-2 left-2">
            {episodes}/{episodes}
          </p>
        </div>
      </div>

      <div className="flex">
        <p className="px-4 my-4 text-sm bg-gen rounded-lg mx-2">{status}</p>
        <p className="px-4 my-4 text-sm bg-gen rounded-lg mx-2">{type}</p>
      </div>
      <h2 className="p-2 font-bold ">{title}</h2>
    </Link>
  );
}

export default CardComponent;

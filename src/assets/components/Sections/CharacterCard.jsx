import { Link } from "react-router-dom";

function CharacterCard(props) {
  const { role } = props;
  const { name, images, mal_id } = props.character;

  return (
    <div className="rounded-lg transition-all duration-200 mt-5 lg:mx-auto lg:w-[232px]">
      <Link to={`/characterdetails/${mal_id}`}>
        <div className="w-full h-[300px] overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover"
            src={images.webp.image_url}
            alt={name}
          />
        </div>
      </Link>
      <div>
        <div className="flex flex-col justify-between p-2">
          <h2 className="text-xl text-cool px-2">
            <span className="text-primary">{name}</span>
          </h2>
          <h2 className="text-2xl text-cool px-2">
            Role: <span className="text-primary">{role}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;

import React from "react";

function CharacterCard(props) {

  const { role } = props;
  const { name, images} = props.character;

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
        <div className="flex flex-col justify-between p-2">
          <h2 className="text-xl text-cool px-2 "><span className="text-primary">{name}</span> </h2>
          <h2 className="text-2xl text-cool px-2 ">Role: <span className="text-primary">{role}</span> </h2>                 
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;

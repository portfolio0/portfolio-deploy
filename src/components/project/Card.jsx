import React from "react";

const Card = ({ image, title, description, technology, ProjectLink }) => {
  // const {img,} = props;
  return (
    <div className="card flex flex-col items-center ml-5 flex-wrap text-[#FFCC00]">
      <div className="img_sec">
        <img className="w-full h-40 object-cover" src={image} alt="" />
      </div>
      <div className="proj_content px-2">
        <h2 className="text-lg font-bold text-center">{title}</h2>
        <p>
          <span className="text-lg font-bold">Description:</span>
        </p>
        <p>
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, eius? */}
          {description}
        </p>
        <p className="text-lg font-bold">Technology Used:</p>
        <p>{technology}</p>
        <div className="buttons flex justify-center">
          <button
            onClick={() => window.open(`${ProjectLink}`)}
            className="cursor-pointer text-white mt-3 bg-[#B13BFF] px-3 py-1 rounded center border-green-700"
          >
            View On Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

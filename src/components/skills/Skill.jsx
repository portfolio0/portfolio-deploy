import React from "react";

import Skill_section from "./Skill_section";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import bootstrap from "../../assets/bootstrap.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import nodejs from "../../assets/node js.png";

const Skill = () => {
  const Skill_details = [
    {
      Skill_img: html,
      Skill_name: "Html",
      progress: "95",
    },
    {
      Skill_img: css,
      Skill_name: "Css",
      progress: "90",
    },
    {
      Skill_img: bootstrap,
      Skill_name: "BootStrap",
      progress: 80,
    },
    {
      Skill_img: js,
      Skill_name: "Javascript",
      progress: "85",
    },
    {
      Skill_img: react,
      Skill_name: "React Js",
      progress: "80",
    },
    {
      Skill_img: nodejs,
      Skill_name: "NodeJs",
      progress: "60",
    },
  ];

  return (
    <div className="mt-10 ">
      <div className="skill_summery text-white text-lg text-center mt-10 mb-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          deleniti perferendis, molestiae ab impedit esse vel quisquam
          necessitatibus ad minus temporibus fuga in sed quod mollitia facilis
          culpa porro a. Omnis quod placeat eius saepe voluptatum unde earum
          illo doloremque! Quo quisquam dolorum facilis omnis soluta saepe
          debitis vitae sunt?
        </p>
      </div>
      <div className="skill_boxes w-full items-center justify-center  gap-10 flex flex-wrap">
        {Skill_details.map((skills, index) => (
          <Skill_section key={index} {...skills} />
        ))}
      </div>
    </div>
  );
};

export default Skill;

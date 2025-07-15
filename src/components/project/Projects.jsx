import React from "react";
import "./project.css";
import img from "../../assets/Portfolio-Desk.jpg";
import dice_game from "../../assets/dice_game.png";
import dictionary from "../../assets/dictionary.jpeg";
import todo_app from "../../assets/todo_app.png";

import Card from "./Card";
const Projects = () => {
  const project_details = [
    {
      image: img,
      title: "Portfolio Website",
      description: "its is my personal portfolio website ",
      technology: "React,Javascript,Html,Css,TailwindCss",
      ProjectLink: "https://portfolio0.github.io/portfolio-deploy/",
    },
    {
      image: dice_game,
      title: "Dice  Game",
      description:
        " A fun dice game where players guess a number before rolling, gaining or losing points based on the result. ",
      technology: "React,Javascript,Html,Css",
      ProjectLink: "https://github.com/portfolio0/dice_game",
    },
    {
      image: dictionary,
      title: "Dictionary App",
      description: "simple dictonary website built by using help of API ",
      technology: "Javascript,Html,Css",
      ProjectLink: "https://portfolio0.github.io/dict-app/",
    },
    {
      image: todo_app,
      title: "To_Do App",
      description: "A simple ToDo app to add, delete, and manage daily tasks.",
      technology: "Reactjs,Javascript,Html,Css",
      ProjectLink:
        "https://todo-app-lrql-8i8fpb8nb-portfolio0s-projects.vercel.app/",
      //
    },
  ];
  return (
    <div className="proj_container  flex  flex-wrap items-center justify-center gap-20  w-full min-h-screen">
      {project_details.map((proj_info, index) => (
        <Card key={proj_info.title} {...proj_info} />
      ))}
    </div>
  );
};

export default Projects;

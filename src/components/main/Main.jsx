import React from "react";
import { Typewriter } from "react-simple-typewriter";
import main_logo from "../../assets/main_logo.png";
import { Button } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./main.css";
const Main = () => {
  const opengithub = () => {
    window.open("https://github.com/portfolio0", "_blank");
  };
  const openlinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/onkar-nanvare-895397286",
      "_blank"
    );
  };
  return (
    <div className="main h-screen">
      <div className="parts flex items-center justify-evenly">
        <div className="info mt-3 text-center">
          <div className="title_name">
            <span className="font-bold text-2xl text-yellow-400 ">I AM </span>
            <div className="text-white font-bold text-3xl inline">
              <Typewriter
                words={[
                  "React Developer",
                  "MERN Stack Developer",
                  "Web Designer",
                  "Front-End Developer",
                ]}
                cursor={true}
                loop={true}
              />
            </div>
          </div>
          <div className="p_info mt-3 flex flex-col">
            <p>
              <span className="font-bold"> Hi, I’m Onkar Nanvare</span>, a
              passionate and dedicated{" "}
              <span className="font-bold">
                Frontend Developer,Full Stack Developer,MERN Stack Developer.
              </span>{" "}
              <br />
              with a focus on creating clean, responsive, and user-friendly web
              applications.
            </p>
            <p>
              Feel free to explore my projects, check out my resume, or connect
              with me on <span className="font-bold">GitHub</span> and{" "}
              <span className="font-bold">LinkedIn.</span>
            </p>
            <p className="text-white font-bold">Thank You ❤️</p>
          </div>
          <div className="flex mt-5 items-center justify-center gap-5">
            <Button
              className=""
              variant="contained"
              color="success"
              onClick={opengithub}
            >
              GitHub <FaGithub />
            </Button>
            <Button variant="contained" color="error" onClick={openlinkedin}>
              LinkedIn
              <FaLinkedin />
            </Button>
          </div>
        </div>
        <div className="img-art">
          <div className="">
            <img src={main_logo} className="" alt="main_img_art" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

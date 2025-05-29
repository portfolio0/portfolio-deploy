import React from "react";
import { Typewriter } from "react-simple-typewriter";
import main_logo from "../../assets/main_logo.png";
const Main = () => {
  return (
    <div className="main h-screen">
      <div className="parts flex items-center justify-evenly">
        <div className="info">
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            modi?Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, incidunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            suscipit quo dolore aperiam exercitationem doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            modi?Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, incidunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            suscipit quo dolore aperiam exercitationem doloribus.
          </p>
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

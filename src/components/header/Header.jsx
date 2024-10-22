import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className=" w-full h-16 bg-slate-950">
        <nav className="">
          <ul className="flex justify-end mr-14 gap-10  text-lg text-white p-5">
            <li className="">
              <a href="">Home</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact-Me</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

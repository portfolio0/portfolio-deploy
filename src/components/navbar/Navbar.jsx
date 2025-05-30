import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-scroll";
import nav_logo from "../../assets/nav_logo.png";
import Hamburger from "../hamburger_button/Hamburger";
import { IoClose } from "react-icons/io5";
// import nav_logo_2 from "../../assets/nav_logo_2.png";

const Navbar = () => {
  const [isopen, setisopen] = useState(true);
  return (
    <>
      <div className="nav flex items-center justify-between gap-x-8 px-18 bg-white sticky p-3 top-0">
        <div className="logo">
          <img src={nav_logo} alt=" logo" className="h-12" />
        </div>
        <div className="hamburger">
          <Hamburger />
        </div>
        <div id="all_links" className={`links flex  gap-10 px-5 m-view-links`}>
          <Link
            className="nav-menu font-medium"
            to="about"
            smooth={true}
            duration={500}
          >
            About-Us
          </Link>
          <Link
            className="nav-menu font-medium"
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="nav-menu font-medium"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            className="nav-menu font-medium"
            to="resume"
            smooth={true}
            duration={500}
          >
            Resume
          </Link>
          <Link
            className="nav-menu font-medium"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
          <Link
            className="nav-menu font-medium"
            to="blog"
            smooth={true}
            duration={500}
          >
            Blog
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

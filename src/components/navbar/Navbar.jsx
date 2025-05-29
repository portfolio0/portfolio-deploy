import React from "react";
// import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-scroll";
import nav_logo from "../../assets/nav_logo.png";
// import nav_logo_2 from "../../assets/nav_logo_2.png";

const Navbar = () => {
  return (
    <>
      <div className="nav flex items-center justify-between gap-x-8 px-18 bg-white sticky p-3 top-0">
        <div className="logo">
          <img src={nav_logo} alt="nav logo" className="h-12" />
        </div>
        <div className="links flex gap-10 px-5">
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
            className="nav-menu font-bold"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            className="nav-menu font-bold"
            to="resume"
            smooth={true}
            duration={500}
          >
            Resume
          </Link>
          <Link
            className="nav-menu font-bold"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
          <Link
            className="nav-menu font-bold"
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

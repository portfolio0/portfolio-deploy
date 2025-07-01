import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import nav_logo from "../../assets/nav_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import "./navbar.css";

const Navbar = () => {
  const [isopen, setIsOpen] = useState(true);

  const [shownavbar, setshownavbar] = useState(true);

  const handlenavclick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    let previousscrolly = window.scrollY;

    const handlescroll = () => {
      const currentscrollyposition = window.scrollY;
      if (
        currentscrollyposition > previousscrolly &&
        currentscrollyposition > 50
      ) {
        setshownavbar(false);
      } else {
        setshownavbar(true);
      }
      previousscrolly = currentscrollyposition;
    };

    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    // <div
    //   className={`nav w-full flex items-center justify-between px-5 bg-white p-3 top-0 z-50 ${
    //     isopen ? "" : "fullscnav"
    //   }`}
    // >
    <div
      className={`nav w-full backdrop-blur-md bg-white/50 top-0 z-50 transition-all duration-300
        ${shownavbar ? "translate-y-0" : "-translate-y-full"} ${
        isopen
          ? "flex items-center justify-between px-5 p-3 sticky"
          : "fixed h-screen flex flex-col items-center justify-start pt-20 px-5"
      }`}
    >
      {/* Logo */}
      <div className="logo">
        <img src={nav_logo} alt="logo" className="h-12" />
      </div>

      {/* Hamburger / Close Button */}
      <div className="hamburger">
        {isopen ? (
          <GiHamburgerMenu size={30} onClick={() => setIsOpen(false)} />
        ) : (
          <IoCloseSharp size={30} onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Nav Links */}
      {/* <div
        id="all_links"
        className={`links ${isopen ? "hide-links" : "show-links"}`}
      > */}
      <div
        id="all_links"
        className={`transition-all duration-300 ${
          isopen ? "hidden" : "flex flex-col items-center gap-5 mt-5"
        }`}
      >
        <Link
          className="nav-menu font-medium"
          to="about"
          smooth
          duration={500}
          onClick={handlenavclick}
        >
          About-Us
        </Link>
        <Link
          className="nav-menu font-medium"
          to="projects"
          smooth
          duration={500}
          onClick={handlenavclick}
        >
          Projects
        </Link>
        <Link
          className="nav-menu font-medium"
          to="skills"
          smooth
          duration={500}
          onClick={handlenavclick}
        >
          Skills
        </Link>
        <Link
          className="nav-menu font-medium"
          to="resume"
          smooth
          duration={500}
          onClick={handlenavclick}
        >
          Resume
        </Link>
        <Link
          className="nav-menu font-medium"
          to="contact"
          smooth
          duration={500}
          onClick={handlenavclick}
        >
          Contact
        </Link>
        <Link
          className="nav-menu font-medium"
          to="blog"
          smooth
          duration={500}
          onClick={handlenavclick}
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

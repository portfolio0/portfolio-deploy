import React, { useEffect, useState } from "react";
import nav_logo from "../../assets/nav_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [shownavbar, setshownavbar] = useState(true);

  useEffect(() => {
    let previousscollyposition = window.scrollY;
    const handlescroll = () => {
      const currentscrollyposition = window.scrollY;
      if (
        currentscrollyposition > previousscollyposition &&
        currentscrollyposition > 50
      ) {
        setshownavbar(false);
      } else {
        setshownavbar(true);
      }
      previousscollyposition = currentscrollyposition;
    };
    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <>
      {/* Main Navbar Container */}
      <div
        className={`fixed top-0 w-full z-50 flex items-center justify-between px-6 py-2 
        backdrop-blur-3xl bg-pink-400/20 shadow-xl text-white transition-transform duration-300 ${
          shownavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="z-50">
          <img src={nav_logo} alt="logo" className="h-12" />
        </div>

        {/* Hamburger (Mobile only) */}
        <div
          className="md:hidden z-50 text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </div>

        {/* Desktop Menu (visible only on md+) */}
        <div className="hidden md:flex gap-8 font-medium pr-4 transition-transform duration-300 cursor-pointer">
          <Link to="about" smooth duration={500}>
            About-Me
          </Link>
          <Link to="projects" smooth duration={500}>
            Projects
          </Link>
          <Link to="skills" smooth duration={500}>
            Skills
          </Link>
          <Link to="resume" smooth duration={500}>
            Resume
          </Link>
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
          <Link to="blog" smooth duration={500}>
            Blog
          </Link>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen  backdrop-blur-3xl 
          flex flex-col items-center justify-center gap-10 text-white text-2xl font-semibold z-40"
        >
          <Link
            to="about"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            About-Us
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="resume"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="blog"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;

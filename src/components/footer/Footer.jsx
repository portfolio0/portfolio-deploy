import React from "react";
import { Link } from "react-scroll";
import footer_logo from "../../assets/for-footer/footer_logo.png";
import uparrow from "../../assets/for-footer/uparrow.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer w-full text-white">
      <div className="flex flex-col  items-center gap-6">
        <div className="pt-5">Where To?</div>
        <div className="footer-links flex flex-wrap  gap-x-20">
          <Link to="about" smooth duration={800} className="cursor-pointer">
            About-Me
          </Link>
          <Link to="projects" smooth duration={800} className="cursor-pointer">
            Project
          </Link>
          <Link to="skills" smooth duration={800} className="cursor-pointer">
            Skills
          </Link>
          <Link to="resume" smooth duration={800} className="cursor-pointer">
            Resume
          </Link>
          <Link to="contact" smooth duration={800} className="cursor-pointer">
            Contact
          </Link>
          <Link to="blog" smooth duration={800} className="cursor-pointer">
            Blog
          </Link>
        </div>
      </div>
      <div className="footer-end pt-52  pb-20 flex items-center justify-evenly">
        <div className="footer-logo">
          <img src={footer_logo} alt=" footer-logo" className="h-10" />
        </div>
        <div className="">
          <Link to="main" smooth duration={900}>
            <img src={uparrow} className="h-16 cursor-pointer" alt="" />
            go to top
          </Link>
        </div>
        <div className="pl-10 ">
          &copy; 2025 Onkar Nanavare | Frontend Developer 🚀
        </div>
      </div>
    </div>
  );
};

export default Footer;

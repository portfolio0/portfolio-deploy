import React from "react";
import "./resume.css";
import resume from "../../assets/resume/My_resume.pdf";
const Resume = () => {
  return (
    <div className="pt-10 mt-20 sm:mt-14 lg:mt-14 flex items-center flex-col gap-2 ">
      <h2 className="text-3xl text-white">Resume</h2>
      <p className="text-white text-lg">
        Click below to download my full resume
      </p>
      <a
        href={resume}
        download
        className="bg-[#B13BFF] hover:bg-[#FFCC00] hover:text-black text-white px-6 py-2 rounded-md border-2 border-green-500 cursor-pointer"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;

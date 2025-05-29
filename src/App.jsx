import "./App.css";
// import Header from "./components/header/Header";

// import Main from "./components/main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skill from "./components/skills/Skill";
import Projects from "./components/project/Projects";
import Contact from "./components/contact/Contact";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import About from "./components/aboutme/About";
import Resume from "./components/resume/Resume";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "portfolio-deploy",
  //     element: (
  //       <div>
  //         <Navbar />
  //         <Home />
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "skills",
  //     element: (
  //       <div>
  //         <Navbar />
  //         <Skill />
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "projects",
  //     element: (
  //       <div>
  //         <Navbar />
  //         <Projects />
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "contact",
  //     element: (
  //       <div>
  //         <Navbar />
  //         <Contact />
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "*",
  //     element: <PageNotFound />,
  //   },
  // ]);
  return (
    <>
      <div className="bg-purple-500 m-0 w-full ">
        {/* <RouterProvider router={router} /> */}
        <Navbar />
        <Main />
        <div className="h-[100vh]" id="about">
          <About />
        </div>
        <div className="h-[100vh]" id="projects">
          <Projects />
        </div>
        <div className="h-[100vh]" id="skills">
          <Skill />
        </div>
        <div className="h-[100vh]" id="resume">
          <Resume />
        </div>
        <div className="h-[100vh]" id="contact">
          <Contact />
        </div>
        <div className="h-[100vh]" id="blog">
          <Blog />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

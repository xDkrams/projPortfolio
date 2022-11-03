import React from "react";
import dp from "../images/dp.png";
import { Link } from "react-scroll";

const Home = () => {
  const handleDownload = () => {
    fetch("RESUME-M.S.TABORDA.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "RESUME-M.S.TABORDA.pdf";
        alink.click();
      });
    });
  };
  return (
    <div name="home" className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold ">
            Hi! I'm a Fullstack Developer
          </h2>
          <p className="py-4 text-justify max-w-md">
            Graduated from Uplift Codecamp, and currently working as Programmer
            at Civil Service Commission, love to work on web applications.
          </p>
          <div className="flex">
            <button
              onClick={handleDownload}
              className="w-fit px-6 py-3 m-4 rounded-md bg-gradient-to-r from-blue-200 to-cyan-300 cursor-pointer hover:scale-90"
            >
              Resume
            </button>
            <Link
              to="projects"
              smooth
              duration={500}
              className="w-fit px-6 py-3 m-4 flex items-center rounded-md bg-gradient-to-r from-blue-200 to-cyan-300 cursor-pointer hover:scale-90"
            >
              Projects
            </Link>
          </div>
        </div>
        <div>
          <img
            src={dp}
            alt="profile pic"
            className="rounded-3xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

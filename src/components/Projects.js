import React from "react";
import minigame from "../images/projects/minigame.png";
import docTracker from "../images/projects/docTracker.png";
import restoApp from "../images/projects/restoApp.jpg";
import todo from "../images/projects/todo.png";
import { AiFillGitlab } from "react-icons/ai";
const Projects = () => {
  const projectPics = [
    {
      id: 1,
      src: minigame,
      appName: "Perya Color Game",
      href: "https://minigameapp.herokuapp.com/",
      link: "https://github.com/xDkrams/MiniGame/tree/main/projects-002-mini-game",
    },
    {
      id: 2,
      src: todo,
      appName: "Todo App",
      href: "https://todoapp025.herokuapp.com/",
      link: "https://github.com/xDkrams/Todo",
    },
    {
      id: 3,
      src: restoApp,
      appName: "Resto App",
      href: "https://restoapplication.herokuapp.com/",
      link: "https://github.com/xDkrams/resto",
    },
    {
      id: 4,
      src: docTracker,
      appName: "Incoming-Outgoing Doc tracker",
      href: "https://p6mernapp.netlify.app/",
      link: "https://github.com/xDkrams/p6mern",
    },
  ];
  return (
    <div name="projects" className="w-full md:h-screen">
      <div className="max-w-screen-lg p4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            Projects{" "}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projectPics.map(({ id, src, appName, href, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                className="rounded-md duration-300 hover:scale-105 my-2 h-64 "
                src={src}
                alt="resto"
              />

              <div className="grid grid-cols-3 gap-2 ">
                <button className="text-justify"> {`${appName}`} </button>

                <a
                  href={href}
                  rel="noopener"
                  target="_blank"
                  className="my-3 p-4 text-xl font-bold text-blue-600 hover:underline underline-offset-8 hover:text-2xl"
                >
                  DEMO
                </a>
                <a
                  href={link}
                  rel="noopener"
                  target="_blank"
                  className="my-3 p-4 text-xl font-bold "
                >
                  <AiFillGitlab size={40} className="hover:scale-150	" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

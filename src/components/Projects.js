import React from "react";
import minigame from "../images/projects/minigame.png";
import docTracker from "../images/projects/docTracker.png";
import restoApp from "../images/projects/restoApp.jpg";
import todos from "../images/projects/todos.png";

const Projects = () => {
  const projectPics = [
    {
      id: 1,
      src: restoApp,
      appName: "Resto App",
      href: "https://restoapplication.herokuapp.com/",
      link: "https://github.com/xDkrams/resto",
    },
    {
      id: 2,
      src: docTracker,
      appName: "Incoming - Outgoing Doc tracker",
      href: "",
      link: "",
    },
    {
      id: 3,
      src: minigame,
      appName: "Perya Color Game",
      href: "https://minigameapp.herokuapp.com/",
      link: "https://github.com/xDkrams/MiniGame/tree/main/projects-002-mini-game",
    },
    {
      id: 4,
      src: todos,
      appName: "Todo App",
      href: "https://dashboard.heroku.com/apps/todoapp025/deploy/github",
      link: "https://todoapp025.herokuapp.com/",
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

        <div className="grid sm:grid-cols-2 md: grid-cols-3 gap-8 px-12 sm:px-0">
          {projectPics.map(({ id, src, appName, href, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-150 hover:scale-105"
                src={src}
                alt="resto"
              />

              <div>
                <a
                  href={href}
                  rel="noopener"
                  target="_blank"
                  className="my-2 px-2 text-lg"
                >
                  {appName}
                </a>
                <a
                  href={link}
                  rel="noopener"
                  target="_blank"
                  className="my-2 px-2 text-lg"
                >
                  Github
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

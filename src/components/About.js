import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-lg text-justify mt-20">
          A government employee, formerly working as a administrative staff in
          Executive Office, who is eager to learn more concerning Web Designing
          and Development. And with the continues breakthrough of technology,
          decided to step up and enrolled in a 6 month Bootcamp and eventually
          work as a programmer.
        </p>
      </div>
    </div>
  );
};

export default About;

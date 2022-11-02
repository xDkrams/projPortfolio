import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            About{" "}
          </p>
        </div>
        <p className="text-lg text-justify mt-20">
          A government employee, that was formerly working as an administrative
          staff in an Executive Office and who is eager to learn more about web
          designing and development. And took a brave step to enroll in a 6
          month Bootcamp and work as a programmer
        </p>
      </div>
    </div>
  );
};

export default About;

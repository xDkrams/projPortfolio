import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen p-4 ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Contact</p>
          <p className="py-6">Compose message</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 border-2 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 border-2 rounded-md focus:outline-none "
            />
            <button className="w-fit px-6 py-3 m-4 rounded-md bg-gradient-to-r from-blue-200 to-cyan-300 cursor-pointer hover:scale-90">
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

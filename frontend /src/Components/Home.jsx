import React from "react";
import Prem from "../assets/prem.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      {/* from top to bottom top-black to bottom gray-800 */}
      <div
        name="Home"
        className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-white text-4xl sm:text-7xl font-bold ">
              I'm a Full Stack Developer
            </h1>
            <p className="text-gray-500 py-4 max-w-md">
              I am a passionate and dedicated Full Stack Developer with a strong
              foundation in both front-end and back-end technologies. Recently
              graduated with a degree in Artificial Intelligence, I have a keen
              interest in building robust web applications that provide seamless
              user experiences using the MERN stack (MongoDB, Express.js, React,
              Node.js).
            </p>
            <div>
              <button
                className="text-white text-xl group w-fit px-6 py-3 my-2 flex 
             items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
             cursor-pointer"
              >
                Portfolio
                <span className="transform transition-transform group-hover:rotate-90 duration-300">
                  <RiArrowRightSLine size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>
          <div>
            <img
              src={Prem}
              alt="My profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
}

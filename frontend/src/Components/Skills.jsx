import React from "react";
import c from "../assets/c.png";
import css from "../assets/css.png";
import express from "../assets/express.png";
import js from "../assets/js.png";
import mgd from "../assets/mgd.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import tailwindcss from "../assets/tailwindcss.png";
import html from "../assets/html.png"
export default function Skills() {
  const elements = [
    {
      id: 1,
      scr: c,
      name: "C++",
      style:"shadow-blue-500"

    },
    {
      id: 2,
      scr: css,
      name: "CSS",
      style:"shadow-blue-300"

    },
    {
      id: 3,
      scr: express,
      name: "Express.Js",
      style:"shadow-green-500"
      

    },
    {
      id: 4,
      scr: mgd,
      name: "MongoDB",
      style:"shadow-green-900"
    },
    {
      id: 5,
      scr: js,
      name: "JavaScript",
      style:"shadow-yellow-400"
    },
    {
      id: 6,
      scr: react,
      name: "ReactJS",
      style:"shadow-sky-500"
    },
    {
      id: 7,
      scr: python,
      name: "Python",
      style:"shadow-blue-900"
    },
    {
      id: 8,
      scr: tailwindcss,
      name: "TailwindCSS",
      style:"shadow-sky-500"
    },
    {
        id: 9,
        scr: html,
        name: "HTML",
        style:"shadow-orange-500"
      }
  ];

  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-800  to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 m-2 text-xl" >These are the technolohies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {elements.map((element,index)=>(
                <div key={element.id} className={`shadow-md border-0 hover:scale-105 duration-500 py-2 rounded-lg ${element.style}`}>
                <img className=" w-40 h-20 mx-auto" src={element.scr} alt="" />
                <p className="mt-4 text-xl">{element.name}</p>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
}

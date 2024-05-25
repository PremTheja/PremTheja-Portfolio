import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"
export default function NavBar() {
  const [Nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
        <div className="text-5xl font-signature ml-2 ">Prem Theja</div>

        <ul className="hidden md:flex">
          {links.map(({link, id}) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-xl font-medium
        text-gray-500  hover:scale-105 duration-200"
            >
             <Link to= {link}  smooth duration={500}> {link}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!Nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {Nav && (
          <ul
            className="flex flex-col justify-center items-center absolute top-0 left-0
            w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
          >
            {links.map(({link, id}) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <link to={link} smooth duration={500}>{link}</link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

import React from "react";
import crud from "../assets/crud.png";
import wallet from "../assets/wallet.png";

export default function Portfolio() {
  const handleclick = (link) => {
    window.open(link, "_blank");
  };
  const portfolio = [
    {
      id: 1,
      src: crud,
      demolink: "https://github.com/PremTheja/CRUD-operations",
    },
    {
      id: 2,
      src: wallet,
      demolink: "https://github.com/PremTheja/OnlineWallet",
    },
    {
      id: 3,
      src: crud,
      demolink: "https://github.com/PremTheja/CRUD-operations",
    },
    {
      id: 4,
      src: wallet,
      demolink: "https://github.com/PremTheja/OnlineWallet",
    },
    {
      id: 5,
      src: crud,
      demolink: "https://github.com/PremTheja/CRUD-operations",
    },
    {
      id: 6,
      src: crud,
      demolink: "https://github.com/PremTheja/OnlineWallet",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className=" py-6 ">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map((ele, i) => (
            <div key={ele.id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="h-40 rounded-md overflow-hidden">
                <img
                  src={ele.src}
                  alt=""
                  className="w-full h-full object-cover rounded-md duration-200 hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-3 py-3 m-4 duration-200">
                  Demo
                </button>
                <button
                  className="w-1/2 px-3 py-3 m-4 duration-200"
                  onClick={() => handleclick(ele.demolink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

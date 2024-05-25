import React, { useState } from "react";
import axios from 'axios';

export default function Contact() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");

  const handleclick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/Createuser", {
        name,
        email,
        message,
      });
      console.log(response.data);
      alert("Form submitted successfully!");
      SetName(''); // Reset the form fields to an empty string
      SetEmail('');
      SetMessage('');
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div name="Contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-l-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-1/2 mx-auto">
            <input
              type="text"
              name="name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => SetName(e.target.value)}
              placeholder="Enter your name"
              value={name}
            />
            <input
              type="text"
              name="email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => SetEmail(e.target.value)}
              placeholder="enter your email"
              value={email}
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => SetMessage(e.target.value)}
              value={message}
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-100"
              onClick={handleclick}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
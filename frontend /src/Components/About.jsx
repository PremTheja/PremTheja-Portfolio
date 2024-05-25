import React from "react";

export default function About() {
  return (
    <>
      <div
        name="About"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
          <div>
            <p className="text-xl mt-5">
              I am a Bachelor of Technology graduate with a specialization in
              Artificial Intelligence from Anurag University, Hyderabad.
              Throughout my academic journey, I have honed my skills in
              programming languages such as C++, Python, and web technologies
              including HTML, CSS, and JavaScript. My passion for technology,
              particularly in the realm of Artificial Intelligence, drives my
              ambition to innovate and contribute meaningfully to the field.
            </p>
            <br />
            <p className="text-xl">
              With a solid foundation in data structures, algorithms, and
              machine learning concepts, I am eager to embark on a career path
              that allows me to apply my knowledge in real-world scenarios. I am
              particularly interested in roles that involve developing
              intelligent systems, leveraging machine learning algorithms, and
              contributing to projects that push the boundaries of AI
              technology.
            </p>
            <br />
            <p className="text-xl">
              In addition to my technical skills, I possess strong
              problem-solving abilities, excellent communication skills, and a
              collaborative mindset. I thrive in dynamic environments where
              creativity and innovation are valued, and I am eager to join a
              team of like-minded individuals dedicated to pushing the
              boundaries of technology.
            </p>
            <br />
            <p className="text-xl">
              I am seeking opportunities where I can continue to grow and learn,
              while making meaningful contributions to projects that have a
              positive impact on society. I am open to exploring various roles
              within the tech industry and am excited about the prospect of
              joining a forward-thinking organization where I can contribute my
              skills and passion for technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
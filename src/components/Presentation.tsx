import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";

export const Presetantion: React.FC = () => {
  const handleRedirectContactForm = () => {
    document
      .getElementById("ContactSection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full mih-h-[90vh] pt-[100px] grid grid-cols-1 lg:grid-cols-2 items-center gap-4 p-4   ">
      <div className="w-full min-h-[70%] flex flex-col items-center lg:items-start p-6 text-white ">
        <p className="text-center text-3xl  ">
          <b className="text-[40px] uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
            Software Engineer
          </b>
          <br />
          <br />
          Desenvolvo software há mais de 5 anos. Sou habilidoso em uma ampla
          variedade de linguagens de programação e frameworks, incluindo Java,
          TypeScript e JavaScript, todos os Ambientes React.
        </p>

        <button
          onClick={handleRedirectContactForm}
          className="w-[100%] lg:w-[280px] h-[45px] uppercase bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f] mt-[40px] lg:mt-[100px] text-black text-[18px] font-bold rounded-3xl hover:scale-105 ease-in-out duration-200 "
        >
          QUERO MEU SOTWARE
        </button>
      </div>
      <div className="w-full lg:h-[70%] flex justify-center items-center ">
        <Player
          loop
          autoplay
          src={require("../assets/lottie/76828-work.json")}
          className="w-[300px] lg:w-[500px]  "
        />
      </div>
    </div>
  );
};

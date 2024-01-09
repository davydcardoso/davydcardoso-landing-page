import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";

export const Presetantion: React.FC = () => {
  const handleRedirectContactForm = () => {
    document
      .getElementById("ContactSection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-[90vh] lg:h-[90vh] pt-[100px] grid grid-cols-1 lg:grid-cols-2 items-center gap-4 p-4   ">
      <div className="w-full min-h-[70%] flex flex-col items-center lg:items-start p-6 text-white ">
        <p className="text-xl text-center  ">
          <b className="text-[40px] uppercase font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
            FullStack Developer
          </b>
          <br />
          <br />
          Sou um desenvolvedor experiente em JavaScript e TypeScript, com mais de 4 anos de sólida experiência na área de programação.
          Durante minha carreira, adquiri experiência em diversas tecnologias, destacando-me em frameworks como ReactJS, React Native, Next.js, Nest.js.
          <br />
          <br />
          Minha paixão pela resolução de problemas e meu compromisso com a excelência técnica refletem-se no meu trabalho diário.
          Ao longo dos anos, participei ativamente no desenvolvimento de soluções inovadoras e eficientes, proporcionando experiências digitais de alta qualidade.
        </p>

        <button
          onClick={handleRedirectContactForm}
          className="w-[100%] lg:w-[280px] h-[45px] uppercase bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f] mt-[40px] lg:mt-[100px] text-black text-[18px] font-bold rounded-xl hover:scale-105 ease-in-out duration-200 "
        >
          AGENDAR CONSULTORIA
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

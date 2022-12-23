import React from "react";

import { SlGraph } from "react-icons/sl";
import { AiFillLike } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";

import { Player } from "@lottiefiles/react-lottie-player";

export const Benefits: React.FC = () => {
  const handleRedirectContactForm = () => {
    document
      .getElementById("ContactSection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="BenefitsSection"
      className="w-full min-h-screen bg-primary pt-[75px]  "
    >
      <div className="w-full border-b-[1px] border-secondary  " />
      <div className="w-full h-full">
        <div className="w-full h-[80px] p-4 flex flex-row items-center ">
          <div className="w-[1px] h-full bg-secondary mr-[10px] " />
          <h1 className="text-white text-[18px] font-bold ">
            Benefícios de um software personalizado!
          </h1>
        </div>

        <button
          onClick={handleRedirectContactForm}
          className="w-[100%] lg:w-[280px] h-[45px] hidden lg:block lg:absolute lg:right-10 mt-[20px] uppercase bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f] text-black text-[18px] font-bold rounded-3xl hover:scale-105 ease-in-out duration-200 "
        >
          QUERO MEU SOTWARE
        </button>
      </div>

      <div className="w-full lg:min-h-screen flex flex-col ">
        <div className="w-full p-6">
          <div className="lg:w-[30%] hover:scale-105 duration-200 ease-in-out  ">
            <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
              <SlGraph color="#0EE37D" size={45} />
              Crescimento da sua empresa
            </h3>
            <p className="text-[12px] font-bold text-white mt-[5px] ">
              O software personalizado permite que você obtenha exatamente o que
              deseja de seu software, o que significa que não será apenas mais
              fácil de usar, mas também mais eficaz para atender às suas
              necessidades de negócios.
            </p>
          </div>
        </div>

        <div className="w-full p-6 flex flex-row justify-center ">
          <div className="lg:w-[30%] hover:scale-105 duration-200 ease-in-out  ">
            <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
              <AiFillLike color="#0EE37D" size={45} />
              Agilidade
            </h3>
            <p className="text-[12px] font-bold text-white mt-[5px]">
              O
              <b className="text-[14px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
                {" "}
                software customizado{" "}
              </b>
              geralmente pode ser desenvolvido mais rapidamente do que as
              soluções de prateleira porque não há necessidade de pesquisa ou
              desenvolvimento extensivo, pois tudo sobre ele já foi decidido
              pelo cliente antes mesmo de qualquer coisa começar a ser
              construída!
              <br />
              <br />
            </p>
          </div>
        </div>

        <div className="w-full p-6 flex flex-row-reverse">
          <div className="lg:w-[30%] hover:scale-105 duration-200 ease-in-out ">
            <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
              <MdAttachMoney color="#0EE37D" size={45} />
              Economiza dinheiro a longo prazo
            </h3>
            <p className="text-[12px] font-bold text-white mt-[5px] ">
              Ao contrário das soluções prontas para uso, o software
              personalizado é criado pensando na longevidade — ele durará mais e
              custará menos com o tempo porque foi projetado especificamente
              para suas necessidades, em vez de tentar atender a uma ampla gama
              de possíveis casos de uso.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center lg:gap-40 mt-[40px] p-4 ">
        <div className="lg:w-[45%]  ">
          <h2 className="text-center text-3xl text-white font-bold ">
            Só existem dois movimentos possíveis para sua empresa: Ou ela está
            <b className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
              {" "}
              crescendo
            </b>
            , ou
            <b className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
              {" "}
              quebrando
            </b>
          </h2>

          <p className="text-white mt-[10px]  ">
            O mercado se atualiza em velocidades cada vez mais rápidas, e novos
            concorrentes podem surgir a todo instante.
            <br />
            Não perca tempo, modernize sua empresa, e tenha controle da
            tecnologia antes que ela controle você!
          </p>
        </div>
        <div>
          <Player
            loop
            autoplay
            src={require("../assets/lottie/8990-graficos-aleatorios.json")}
            className="w-[300px] lg:w-[450px]  "
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <button
          onClick={handleRedirectContactForm}
          className="w-[90%] h-[45px] lg:hidden lg:absolute lg:right-10 mt-[20px] uppercase bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f] text-black text-[18px] font-bold rounded-3xl hover:scale-105 ease-in-out duration-200 "
        >
          QUERO MEU SOTWARE
        </button>
      </div>
    </div>
  );
};

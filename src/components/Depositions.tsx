import React from "react";

export const Depositions: React.FC = () => {
  return (
    <div
      id="DepositionsSection"
      className="w-full min-h-screen bg-primary pt-[75px]  "
    >
      <div className="w-full border-b-[1px] border-secondary  " />

      <div className="w-full lg:h-[90vh] bg-primary grid grid-cols-1 items-center mt-[50px] ">
        <div className="w-full lg:h-[400px] lg:bg-[#262525] flex flex-col lg:flex-row items-center lg:items-start  ">
          <div className="w-[200px]  ">
            <div className="w-full lg:h-[200px] flex flex-col items-center justify-center">
              <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
                Feedbacks
              </h1>
            </div>
          </div>

          <div className="h-[50%] flex flex-row gap-2 items-center justify-center  ">
            <div className="w-[1px] h-[40%] bg-secondary " />

            <h1 className="text-white text-[35px] font-bold ">
              Depoimentos de Clientes
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-[400px] lg:h-[80%] fex flex-row items-center justify-center lg:overflow-y-auto lg:overflow-hidden lg:absolute lg:right-10 gap-4 ">
          <div className="w-[97%] lg:w-full h-[230px] bg-white rounded-xl mt-[10px] p-2 flex flex-row">
            <div className="w-full h-[100%] pt-[20px] ">
              <p className="text-[13px]  ">
                Incrivel trabalho, adquiri o <b>GoStudio</b> um aplicativo de
                agendamentos para minha barbearia e estudio de tatuagens e desde
                então não preciso abrir o whatsapp para ler mensagens, tudo
                agora e feito de forma rapida e automatica..
              </p>

              <h2 className="text-[18px] font-bold mt-[40px] ">
                Jefferson Sena
              </h2>
            </div>
            <div className="w-auto h-full flex flex-col items-center justify-center ">
              <img
                alt="Duguetto Studio"
                src={require("../assets/images/clients/jefferson.jpg")}
                className="w-[220px] rounded-xl  "
              />
            </div>
          </div>

          <div className="w-[97%] lg:w-full h-[230px] bg-white rounded-xl mt-[10px] p-2 flex flex-row">
            <div className="w-full h-[100%] pt-[20px] ">
              <p className="text-[13px]  ">
                Trabalho sensacional, após adquirir o Bot de atendimento passei
                a vender mais e me preocupar menos com o atendimento, tudo está
                sendo feito de forma automatica e poucas vezes preciso parar
                algo para solucionar problemas com clientes!
              </p>

              <h2 className="text-[18px] font-bold mt-[25px] ">
                Marcos Douglas
              </h2>
            </div>
            <div className="w-auto h-full flex flex-col items-center justify-center ">
              <img
                alt="Duguetto Studio"
                src={require("../assets/images/clients/MarcosDouglas.jpg")}
                className="w-[220px] rounded-xl  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

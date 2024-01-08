import React from "react";

import { MdSecurity } from "react-icons/md";
import { AiFillApple } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { AiFillChrome } from "react-icons/ai";
import { RiWifiOffLine } from "react-icons/ri";
import { BiMobileVibration } from "react-icons/bi";

export const Services: React.FC = () => {
  return (
    <div
      id="ServicesSection"
      className="w-full min-h-screen bg-primary pt-[75px]  "
    >
      <div className="w-full border-b-[1px] border-secondary  " />
      <div className="w-full h-full  ">
        <div className="w-full h-[80px] p-4 flex flex-row items-center ">
          <div className="w-[1px] h-full bg-secondary mr-[10px] " />
          <h1 className="text-white text-[18px] font-bold ">Serviços</h1>
        </div>

        <div className="w-full flex flex-col items-center mt-[10px]  ">
          <h1 className="text-white text-[30px] font-bold ">
            O que o Davyd fará pela
            <br className="lg:hidden" /> sua empresa?
          </h1>

          <div className="lg:w-[55%] mt-[10px] p-4  ">
            <p className="text-white text-center ">
              Um desenvolvedor de software sempre ajudará sua empresa a se
              tornar mais eficiente e lucrativa, criando aplicativos que tornam
              seus negócios mais eficientes, lucrativos e sustentáveis.
              <br />
              <br />
              Devido à maneira de como a mente de um desenvolvedor funcionam, os
              desenvolvedores de software têm uma capacidade única de ver o
              quadro geral quando se trata de tecnologia - eles sabem como as
              coisas funcionam juntas, o que os torna perfeitos para ajudar as
              empresas a simplificar suas operações.
            </p>
          </div>
        </div>

        <div className="w-full min-h-screen bg-primary grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-2 p-4  ">
          <div className="w-[90%] lg:w-full h-full flex flex-col items-center justify-center gap-4 ">
            <div className="w-full lg:w-[300px] h-[180px] items-center p-3 hover:cursor-pointer hover:scale-105 ease-in-out duration-200 rounded-xl bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f]   ">
              <div className="w-full h-[40px] gap-2 flex flex-row o">
                <FaMobileAlt color="#000" size={30} />
                <h1 className="text-black text-[18px] font-bold ">Mobile</h1>
              </div>

              <div className="w-full mt-[10px] ">
                <p>
                  Desenvolvimento de aplicativos moveis, totalmente customizados
                  para você e/ou empresa!
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[300px] h-[180px] p-3 hover:cursor-pointer hover:scale-105 ease-in-out duration-200 rounded-xl bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f] lg:mr-[120px]  ">
              <div className="w-full h-[40px] gap-2 flex flex-row items-center">
                <AiFillApple color="#000" size={30} />
                <h1 className="text-black text-[18px] font-bold ">
                  Android/iOS
                </h1>
              </div>

              <div className="w-full mt-[10px] ">
                <p>
                  Desenvolvimento de aplicativos nativos para IOS e Android,
                  WATCH IOS ou Apple TV programados em Swift
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[300px] h-[180px] p-3 hover:cursor-pointer hover:scale-105 ease-in-out duration-200 rounded-xl bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f]   ">
              <div className="w-full h-[40px] gap-2 flex flex-row items-center">
                <RiWifiOffLine color="#000" size={30} />
                <h1 className="text-black text-[18px] font-bold ">
                  Offline First
                </h1>
              </div>

              <div className="w-full mt-[10px] ">
                <p>
                  Desenvolvendo aplicativos para trabalharem de forma online e
                  offline, visando sempre a produtividade
                </p>
              </div>
            </div>
          </div>

          <div className="w-[90%] lg:w-full h-full flex flex-col items-center justify-center gap-4 ">
            <div className="w-full lg:w-[300px] h-[180px] p-3 hover:cursor-pointer hover:scale-105 ease-in-out duration-200 rounded-xl bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f]   ">
              <div className="w-full h-[40px] gap-2 flex flex-row items-center">
                <AiFillChrome color="#000" size={30} />
                <h1 className="text-black text-[18px] font-bold ">
                  Software Web
                </h1>
              </div>

              <div className="w-full mt-[10px] ">
                <p>
                  Precisa de um sistema web? Para acessa-lo independente do
                  local e dispositivo? Tenho toda habilidade necessária para
                  desenvolvê-lo
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[300px] h-[180px] p-3 hover:cursor-pointer hover:scale-105 ease-in-out duration-200 rounded-xl bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f] lg:ml-[120px]  ">
              <div className="w-full h-[40px] gap-2 flex flex-row items-center">
                <BiMobileVibration color="#000" size={30} />
                <h1 className="text-black text-[18px] font-bold ">
                  Responsivo
                </h1>
              </div>

              <div className="w-full mt-[10px] ">
                <p>
                  Softwares Web, responsivos com qualidade adaptativas incríveis
                  e designer inovadores.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[300px] h-[180px] p-3 hover:cursor-pointer hover:scale-105 ease-in-out duration-200 rounded-xl bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f]   ">
              <div className="w-full h-[40px] gap-2 flex flex-row items-center">
                <MdSecurity color="#000" size={30} />
                <h1 className="text-black text-[18px] font-bold ">Segurança</h1>
              </div>

              <div className="w-full mt-[10px] ">
                <p>
                  Trabalhando sempre para manter a credibilidade de seus dados e
                  de toda sua plataforma dentro da internet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

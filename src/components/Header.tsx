import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

export const Header: React.FC = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleScrollToTop = () => {
    setVisibleMenu(!visibleMenu);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToBenefitsSection = () => {
    setVisibleMenu(!visibleMenu);

    document
      .getElementById("BenefitsSection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToServicesSection = () => {
    setVisibleMenu(!visibleMenu);

    document
      .getElementById("ServicesSection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRedirectContactForm = () => {
    setVisibleMenu(!visibleMenu);

    document
      .getElementById("ContactSection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-[75px] bg-primary flex flex-row justify-between fixed top-0 p-2 z-50 ">
      <div className="">
        <img
          alt="Davyd Cardoso"
          src={require("../assets/images/logo.png")}
          className="w-[200px]  "
        />
      </div>

      <div className="w-[60%] h-full hidden lg:flex flex-row items-center justify-center ">
        <ul className="text-white  text-[20px] flex flex-row gap-3  ">
          <li
            onClick={handleScrollToTop}
            className="hover:cursor-pointer hover:text-secondary ease-in-out duration-200   "
          >
            Inicio
          </li>

          <li
            onClick={handleScrollToServicesSection}
            className="hover:cursor-pointer hover:text-secondary ease-in-out duration-200   "
          >
            Serviços
          </li>

          <li
            onClick={handleScrollToBenefitsSection}
            className="hover:cursor-pointer hover:text-secondary ease-in-out duration-200   "
          >
            Beneficios
          </li>

          <li
            onClick={handleRedirectContactForm}
            className="hover:cursor-pointer hover:text-secondary ease-in-out duration-200   "
          >
            Contato
          </li>
        </ul>
      </div>

      <div className="w-[200px] h-full flex flex-row items-center justify-end ">
        <button
          onClick={() => setVisibleMenu(!visibleMenu)}
          className="w-[30px] mr-[20px] lg:hidden "
        >
          <AiOutlineMenu color="white" size={30} />
        </button>
      </div>

      {visibleMenu ? (
        <div className="w-full h-screen bg-black absolute lg:hidden">
          <div className="w-full p-2">
            <button onClick={() => setVisibleMenu(!visibleMenu)}>
              <FaChevronRight color="white" size={35} />
            </button>
          </div>

          <div className="p-4">
            <div className="flex flex-row items-center gap-2 mb-[20px] ">
              <h1 className="text-[35px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
                Davyd Cardoso
              </h1>
              <img
                alt="Davyd Cardoso Marketing Digital"
                src={require("../assets/images/selo.png")}
                className="w-[20px] "
              />
            </div>

            <ul className="text-white text-[24px] font-bold flex flex-col gap-3  ">
              <li
                onClick={handleScrollToTop}
                className="hover:cursor-pointer hover:text-secondary ease-in-out duration-200   "
              >
                Inicio
              </li>
              <li
                onClick={handleScrollToBenefitsSection}
                className="hover:cursor-pointer hover:text-secondary ease-in-out duration-200   "
              >
                Beneficios
              </li>
              <li
                onClick={handleScrollToServicesSection}
                className="hover:cursor-pointer hover:text-secondary ease-in-out duration-200   "
              >
                Serviços
              </li>
            </ul>

            <div className="w-full mt-[200px]">
              <button
                onClick={handleRedirectContactForm}
                className="w-[95%] h-[45px] uppercase bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f] text-black text-[18px] font-bold rounded-3xl hover:scale-105 ease-in-out duration-200 "
              >
                Solicitar Consultoria
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

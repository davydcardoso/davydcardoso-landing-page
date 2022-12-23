import React from "react";

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToBenefitsSection = () => {
    document
      .getElementById("BenefitsSection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToServicesSection = () => {
    document
      .getElementById("ServicesSection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRedirectContactForm = () => {
    window.location.href = "https://d12n0nlo8jp.typeform.com/to/JP1l2egC";
  };
  return (
    <div id="ServicesSection" className="w-full h-auto  bg-primary pt-[75px]  ">
      <div className="w-full border-b-[1px] border-secondary  " />

      <div className="w-full h-[70vh] p-4 lg:p-20">
        <div className="flex flex-row items-center gap-2 ">
          <h1 className="text-[35px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
            Davyd Cardoso
          </h1>
          <img
            alt="Davyd Cardoso Marketing Digital"
            src={require("../assets/images/selo.png")}
            className="w-[20px] "
          />
        </div>

        <h3 className="text-[25px] font-extrabold text-white ">
          Software Engineer
        </h3>

        <div className="h-[50px]" />

        <div className="mt-[30px]">
          <p className="text-white mt-[22px] font-bold  ">
            contato@davydcardoso.com
          </p>
          <p className="text-white mt-[20px] font-bold  ">
            +55 (62) 9.8305-5581
          </p>
        </div>

        <h1 className="text-[25px] mt-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#48F1AC] to-[#53f79f]  ">
          Navege por aqui
        </h1>

        <div className="w-full mt-[10px] flex flex-row items-center -justify-center ">
          <ul className="text-white  flex flex-row gap-3  ">
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

            <li
              onClick={handleRedirectContactForm}
              className="hover:cursor-pointer hover:text-secondary ease-in-out duration-200   "
            >
              Contato
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[40px] bg-[#262525] flex flex-row items-center justify-center ">
        <p className="text-white">
          Davyd Cardoso &copy; 2022- Feito com <b className="text-red-500">❤</b>{" "}
          e muito ☕
        </p>
      </div>
    </div>
  );
};

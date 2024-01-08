import React, { useRef, FormEvent } from "react";
import { toast } from "react-toastify";

import emailjs from "@emailjs/browser";

import { Input } from "./Input";

export const Contact: React.FC = () => {
  const form = useRef();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yu1af5f",
        "template_7aar1lq",
        //@ts-ignore
        form.current,
        "S79gXDtO49Ph7gym2"
      )
      .then(
        () => {
          toast.success("Email enviado com sucesso!", {
            onClose: () => setTimeout(() => window.location.reload(), 2000),
          });
        },
        (error) => {
          toast.error(`Houve um erro ao enviar email | Detalhes: ${error}`);
        }
      );
  };
  return (
    <div
      id="ContactSection"
      className="w-full min-h-screen bg-primary pt-[75px]  "
    >
      <div className="w-full border-b-[1px] border-secondary  " />
      <div className="w-full h-full  ">
        <div className="w-full h-[80px] p-4 flex flex-row items-center ">
          <div className="w-[1px] h-full bg-secondary mr-[10px] " />
          <h1 className="text-white text-[18px] font-bold ">Contato</h1>
        </div>
      </div>

      <form
        //@ts-ignore
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="w-full h-auto flex flex-col p-4 lg:p-10 ">
          <div className="w-[100%] grid grid-cols-1 lg:grid-cols-2 justify-items-center ">
            <Input title="Informe seu Nome" name="contact_name" required />
            <Input
              title="Informe seu E-mail"
              name="contact_email"
              type="email"
              required
            />
          </div>

          <div className="w-[100%] grid grid-cols-1 lg:grid-cols-2 justify-items-center ">
            <Input title="Informe seu Telefone" name="contact_phone" required />
            <Input title="Assunto" name="subject" required />
          </div>

          <div className="w-[100%] grid grid-cols-1 justify-items-center p-8 ">
            <div className="w-[100%] mb-[10px] ">
              <label className="text-white font-bold text-[18px]  ">
                Mensagem
              </label>
            </div>
            <textarea
              rows={15}
              cols={30}
              required
              name="message"
              className="w-[100%] bg-[#262525] rounded-xl p-4 text-white "
            ></textarea>
          </div>

          <div className="w-full flex items-center justify-center  ">
            <button
              type="submit"
              className="w-[85%] lg:w-[280px] h-[45px] uppercase bg-gradient-to-r from-[#22DBB6] via-[#48F1AC] to-[#53f79f] text-black text-[18px] font-bold rounded-xl hover:scale-105 ease-in-out duration-200 "
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

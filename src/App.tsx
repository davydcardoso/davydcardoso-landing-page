import React from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Benefits } from "./components/Benefits";
import { Services } from "./components/Services";
import { Presetantion } from "./components/Presentation";
import { Contact } from "./components/Contact";

export const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black   ">
      <Header />

      <Presetantion />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
};

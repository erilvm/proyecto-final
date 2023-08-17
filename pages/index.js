import React from "react";
// Carga las variables de entorno desde el archivo .env
require('dotenv').config();
import Seo from "../components/Customs/Seo";
import { Inicio as InicioComponent } from "../components";
import Iniciopage from "./Homepage";
import About from "@/components/Home/About";
import Features from "@/components/Home/Features";

const Inicio = () => {
  return (
    <Seo title="Inicio" description="">
      <Iniciopage />
    </Seo>
  );
};

export default Inicio;


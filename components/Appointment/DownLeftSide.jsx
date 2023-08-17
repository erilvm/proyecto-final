
const mongoose = require('mongoose');
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineArrowLongRight, HiOutlineChevronDown } from "react-icons/hi2";
import { useUser } from "@auth0/nextjs-auth0/client";

const Citas = require('@/components/Models/Citas.jsx').default;
import dbConnect from '@/components/utils/mongoose.js';


const DownLeftSide = () => {

  const selectDropdownRef = useRef();
  const buttonRef = useRef();

  const { user, error, isLoading } = useUser();
  

  useEffect(() => {
    const handleClick = (event) => {
      if (
        selectDropdownRef.current &&
        !selectDropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        handleSelectClose();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [selectDropdownRef]);

  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { firstname, lastname, subject, email, phone, message, date } = userData;


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const [selectOpen, setSelectOpen] = useState(false);
  const handleSelectClose = (index) => {
    if (index !== undefined) {
      setUserData({ ...userData, subject: subjectOptions[index] });
    }
    setSelectOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Conectar a la base de datos de MongoDB Atlas
      await dbConnect();

      // Crear una nueva instancia del modelo Citas con los datos del formulario
      const newCitas = new Citas({
        firstname,
        lastname,
        email,
        phone,
        message,
        // ... otros campos ...
      });

      console.log("Es newCitas una instancia de Citas:", newCitas instanceof Citas);

      // Guardar la nueva cita en la base de datos
      const savedCitas = await newCitas.save();
      console.log('Cita guardada correctamente:', savedCitas);

      // ... otras operaciones que desees realizar con savedCitas
    } catch (error) {
      console.error('Error al guardar la cita:', error);
    } finally {
      console.log('Conexión a la base de datos cerrada (si es necesario).');
    }
  };
  return (
    <div className="lg:w-2/3">
      <div className="flex-[50%] p-2">
        <h3 className="text-xl md:text-2xl tracking-wider !leading-tight">
          Agenta tu{" "}
          <span className="uppercase text-main-main font-bold">
            cita
          </span>
        </h3>
        <div className="h-[6px] bg-primary-main w-[100px] mt-4 mb-8" />
        <form className="flex flex-wrap" noValidate onSubmit={handleSubmit}>
          <div className="md:w-1/2 w-full py-2 pr-4 mb-2">
            <label
              for="firstname"
              className="block mb-3 px-1 md:text-sm  text-base font-medium capitalize"
            >
              Nombre
            </label>
            <input
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={handleInputChange}
              required
              placeholder="Nombre *"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          <div className="md:w-1/2 w-full py-2 pr-4 mb-2">
            <label
              for="lastname"
              className="block mb-3 px-1 md:text-sm text-base font-medium capitalize"
            >
              Apellidos
            </label>
            <input
              id="lastname"
              name="lastname"
              required
              value={lastname}
              onChange={handleInputChange}
              placeholder="Apellidos *"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          <div className="w-full py-2 pr-4 mb-2">
            <label
              for="email"
              className="block mb-3 px-1 md:text-sm text-base font-medium capitalize"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              value={email}
              required
              onChange={handleInputChange}
              placeholder="Correo electronico *"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 py-2 pr-4 mb-2">
            <label
              for="phone"
              className="block mb-3 px-1 md:text-sm text-base font-medium capitalize"
            >
              Telefono
            </label>
            <input
              id="phone"
              name="phone"
              required
              value={phone}
              onChange={handleInputChange}
              placeholder="Telefono *"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>


          <div className="w-full py-2 pr-4 mb-2">
            <label
              htmlFor="message"
              className="block mb-4 px-1 md:text-sm  text-base font-medium capitalize"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              rows={7}
              required
              cols={20}
              onChange={handleInputChange}
              placeholder="Mensaje *"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 resize-none outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              style={{ opacity: 75 }}
              disabled={Boolean(
                !firstname ||
                  !email ||
                  !email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  ) ||
                  !phone ||
                  !phone.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) ||
                  !message
              )}
              className="inline-flex my-3 items-center cursor-pointer disabled:cursor-default group uppercase align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 md:text-sm  text-base leading-normal no-underline rounded-full bg-primary-main hover:bg-transparent disabled:bg-background-paper disabled:text-text-main/80 disabled:border-transparent border-2 border-primary-main hover:text-primary-main text-white outline-none font-bold"
            >
              Agendar
              <HiOutlineArrowLongRight className="w-[18px] h-[18px] ml-2 group-hover:ml-4 group-disabled:ml-2 transition-all duration-100" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DownLeftSide;

import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

const Banner = (props) => {

  const { user, error, isLoading } = useUser();
  const { theme } = props;
  return (
    <section
      id="banner"
      className="relative overflow-hidden py-8 md:py-28 max-h-[100vh] flex justify-center items-center mb-8 "
    >
      <div className="container text-center sm:text-start sm:py-4 mb-20 z-20">
        <div className="flex flex-wrap">
          <div className="px-4 sm:px-8 w-5/6 mx-auto lg:mx-0 lg:w-1/2 xl:w-4/5 ">
            <span className="uppercase text-sm font-semibold tracking-widest leading-snug text-text-secondary px-1">
              Expertos Médicos
            </span>
            <h1 className="text-4xl lg:text-5xl !leading-tight my-5 font-semibold capitalize tracking-wide">
              Tu <span className="text-primary-main uppercase font-bold">socio</span> de salud médica más confiable
            </h1>
            <div className="h-[8px] w-[120px] bg-primary-main mb-5 mx-auto sm:mx-0" />
            <p className="mb-7 pr-5 md:pr-0 opacity-90 text-sm sm:text-lg leading-relaxed">
              Ayudamos a las personas a aliviar los dolores de la vida diaria proporcionándoles tratamientos ancestrales (también llamados terapia) y hacemos nuestro mejor esfuerzo para hacer que vivan su vida agradecidos sin ningún problema médico.
            </p>
            <Link href="/Appointment">
              <div className="inline-flex items-center cursor-pointer group uppercase align-middle text-center transition-all select-none whitespace-nowrap py-2 px-4 md:py-2 md:px-6 text-xs md:text-base leading-normal no-underline rounded-full bg-primary-main hover:bg-transparent border-2 border-primary-main hover:text-primary-main text-white  outline-none font-bold">
                Hacer una cita
                <HiOutlineArrowLongRight className="w-[18px] h-[18px] ml-2 group-hover:ml-4 transition-all duration-100" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Image
        className="absolute w-full h-full object-center object-cover"
        src="/images/banner.jpg"
        width={1000}
        height={600}
        loading="lazy"
        alt="banner"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-background-default/95 via-background-default/70 to-background-default/0" />
    </section>
  );
};

export default Banner;

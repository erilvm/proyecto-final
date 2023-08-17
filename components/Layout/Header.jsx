import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenuAlt1, HiOutlineMoon, HiOutlineSun, HiX } from "react-icons/hi";
import Image from "next/image";

import { useUser } from "@auth0/nextjs-auth0/client";

const Header = (props) => {
  const { theme, themeToggle } = props;

  const { user, error, isLoading } = useUser();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const router = useRouter();

  // Estado para manejar la visibilidad del dropdown
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Función para alternar la visibilidad del dropdown
  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const navigations = [
    {
      name: "Inicio",
      url: "/",
    },
    {
      name: "Servicios",
      url: "/Services",
    },
    ...(user
      ? [
        {
          name: "Perfil",
          url: "/Profile",
        },
        {
          name: "Pacientes",
          url: "/Patients",
        },
      ]
      : []),
  ];
  const mobileMoreItems = [
    {
      name: "Privacy Policy",
      url: "/policy",
    },
    {
      name: "Terms And Conditions",
      url: "/terms",
    },
    {
      name: "404 Page",
      url: "/404",
    },
    {
      name: "500 Page",
      url: "/500",
    },
  ];

  return (
    <>
      <header className="sticky z-30 top-0 w-screen font-family">
        <nav className="border-b-2 border-text-main/5 h-[60px] lg:h-[70px] w-full flex flex-col justify-center items-center bg-background-paper">
          <div className="max-w-[1140px] flex w-full flex-grow items-center px-4">
            <div className="flex justify-between w-full md:w-auto flex-grow md:flex-grow-0 items-center transition-all">
              <div
                className="lg:hidden cursor-pointer mr-5"
                onClick={handleDrawerOpen}
              >
                <HiMenuAlt1 className="w-[24px] h-[24px] " />
              </div>
              <div
                onClick={() => {
                  try {
                    document
                      .getElementById("#banner")
                      .scrollIntoView({ block: "start", behavior: "smooth" });
                  } catch (error) {
                    router.push("/");
                  }
                }}
                className="text-main w-full justify-center md:justify-start md:w-auto font-bold text-xl uppercase cursor-pointer flex gap-2 items-center"
              >
                <Image
                  width={500}
                  height={500}
                  src="/logo.png"
                  className="rounded-[50%] w-[45px] h-[45px]"
                />
                Medicos
              </div>
            </div>

            <ul className="mx-auto hidden lg:flex lg:px-4">
              {navigations.map(({ name, url }, index) => (
                <li
                  key={index}
                  className="h-[60px] lg:h-[70px] flex px-2 justify-center items-center font-semibold"
                >
                  <Link href={url}>
                    <div
                      onClick={() => setDrawerOpen(false)}
                      className="flex relative cursor-pointer justify-start font-family lg:justify-center items-center hover:text-main-main before:content-center before:transition-all before:w-0 hover:before:w-[60%] before:absolute before:-bottom-1 before:left-0 before:h-[3px] before:bg-primary-main/80"
                    >
                      <span
                        className={
                          router.asPath == url ? "!text-main-main" : ""
                        }
                      >
                        {name}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={themeToggle}
              className={` outline-none font-medium rounded-lg text-sm p-1 px-1.5 m-1 md:px-4 md:py-2 flex `}
            >
              {theme == "light" ? (
                <HiOutlineMoon className="w-5 h-5 dark:text-white  dark:hover:bg-white/5" />
              ) : (
                <HiOutlineSun className="w-5 h-5 stroke-[2.25px]" />
              )}
            </button>


            


            {user ? (
              <Link href="/Appointment">
                <button
                  className={`hidden lg:inline-flex ml-auto capitalize items-center cursor-pointer group align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full bg-text-main dark:bg-text-main/5 dark:hover:bg-primary-main hover:bg-primary-main text-white border-2 border-text-main dark:border-text-main/10 outline-none font-bold ${router.pathname == "/appointment" ? "!bg-primary-main" : ""
                    }`}
                >
                  Nueva Cita
                </button>
              </Link>
            ) : null}

           

            <div className="relative ml-5">


              {user ? (<img
                id="avatarButton"
                type="button"
                onClick={toggleUserDropdown}
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user.picture}
                alt="User dropdown"
              />): (<img
                id = "avatarButton"
                type = "button"
                onClick = { toggleUserDropdown }
                className = "w-10 h-10 rounded-full cursor-pointer"
                src = "/images/usuario.png"
                alt = "User dropdown"
              />)}       
              
            
              {userDropdownOpen && (
                <div
                  id="userDropdown"
                  className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                {user ? (
                    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      <div>{user.name}</div>
                      <div class="font-medium truncate">{user.email}</div>
                    </div>
                ):(
                      null
                )}
                 
                  {user ? (<div class="py-1">
                    <a href="api/auth/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Cerrar sesión</a>
                  </div>) : (<div class="py-1">
                    <a href="api/auth/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Iniciar sesión</a>
                  </div>)}
                  
                </div>
              )}


            </div>
            
            
          </div>

          
        </nav>
      </header>

      <div
        className={`font-family flex lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-background-default w-screen z-50 transition-all duration-500 ${
          drawerOpen ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <ul className="flex flex-col w-full items-start h-full px-8 py-6 text-base ">
          <div className="flex-1 flex flex-col items-start">
            {[...navigations, ...mobileMoreItems].map(
              ({ name, url }, index) => (
                <li
                  key={index}
                  className="py-2 text-text-main font-semibold"
                  onClick={handleDrawerClose}
                >
                  <Link href={url}>
                    <div className="flex justify-center items-center hover:text-main-main transition-all">
                      <span
                        className={
                          router.asPath == url
                            ? "!text-main-main !font-extrabold"
                            : ""
                        }
                      >
                        {name}
                      </span>
                    </div>
                  </Link>
                </li>
              )
            )}
          </div>

          <Link href="/appointment">
            <button
              className={`inline-flex capitalize items-center cursor-pointer group align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-md bg-text-main hover:bg-primary-main text-white outline-none font-bold ${
                router.pathname == "/Appointment" ? "!bg-primary-main" : ""
              }`}
              onClick={handleDrawerClose}
            >
              New appoinment
            </button>
          </Link>
        </ul>
        <div
          className="absolute top-5 right-5 cursor-pointer block"
          onClick={handleDrawerClose}
        >
          <HiX className="w-[22px] h-[22px]" />
        </div>
      </div>
    </>
  );
};

export default Header;

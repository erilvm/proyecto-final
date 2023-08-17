import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaLinkedinIn,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  const socialLink = [
    {
      icon: <FaFacebookF className="w-[16px] h-[16px]" />,
      url: "https://google.com",
    },
    {
      icon: <FaTwitter className="w-[16px] h-[16px]" />,
      url: "https://google.com",
    },
    {
      icon: <FaLinkedinIn className="w-[16px] h-[16px]" />,
      url: "https://google.com",
    },
    {
      icon: <FaTwitch className="w-[16px] h-[16px]" />,
      url: "https://google.com",
    },
    {
      icon: <FaSkype className="w-[16px] h-[16px]" />,
      url: "https://google.com",
    },
  ];
  const data = {
    Support: [
      { text: "Call Us On +91 00000 00000" },
      { text: "Email Us On name@company.com" },
    ],
    "Useful Links": [
      { text: "Terms & Conditions", url: "/TermsAndConditions" },
      { text: "Privacy Policy", url: "/Policy" },
      { text: "FAQuestions", url: "/faq" },
      { text: "DMCA", url: "/" },
      { text: "License", url: "/" },
    ],
    Address: [{ text: "Your Address" }],
  };

  return (
    <footer className="body-font bg-text-main/5 mt-8 md:font-medium">
    
      <div className="border-t-2 border-text-main/5">
        <div className="max-w-[1140px] mx-auto py-4 px-10 flex flex-wrap flex-col sm:flex-row">
          <div className="py-3 uppercase text-sm md:text-base text-center font-semibold">
            copyright &copy; 2023
            <span className="mx-2">|</span>
            Todos los derechos son reservados
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center items-center space-x-3">
            {socialLink.map(({ icon, url }, index) => (
              <Link key={index} href={url}>
                <div className="hover:text-main-main opacity-70 hover:opacity-100 cursor-pointer">
                  {icon}
                </div>
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

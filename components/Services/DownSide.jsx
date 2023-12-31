import React from "react";
import Image from "next/image";

const DownSide = () => {
  const data = [
    {
      image: "/images/service/1.jpg",
      title: "Dolor Cervical y de Hombros",
    },
    {
      image: "/images/service/2.jpg",
      title: "Punción Seca",
    },
    {
      image: "/images/service/3.jpg",
      title: "Lesiones Deportivas",
    },
    {
      image: "/images/service/4.jpg",
      title: "Artritis",
    },
    {
      image: "/images/service/5.jpg",
      title: "Cupping (Ventosas)",
    },
    {
      image: "/images/service/6.jpg",
      title: "Dolor de Espalda",
    },
  ];
  return (
    <div className="flex flex-wrap">
      {data.map(({ image, title, description }, index) => (
        <div key={index} className="lg:w-1/3 p-4 md:w-1/2 sm:w-1/2">
          <div className="mb-4">
            <div className="overflow-hidden rounded-2xl">
              <Image
                width={400}
                height={400}
                src={image}
                alt="service"
                className="max-w-full h-auto object-cover object-center"
              />
            </div>
            <div>
              <h3 className="mt-6 mb-1.5 text-2xl">{title}</h3>
              <p className="mb-4 !leading-relaxed text-sm md:text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownSide;

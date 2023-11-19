"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  text-white">
              Hola, soy
            </span>
            <br></br>
          </h1>
          <span className="text-primary-900  text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <TypeAnimation
              sequence={[
                "Alejandro Morales",
                1000,
                "Desarrollador FullStack",
                1000,
                "Desarrollador Frontend",
                1000,
                "Desarrollador Backend",
                1000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
            />
          </span>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Capacidad para transformar ideas creativas en aplicaciones
            funcionales y eficientes
          </p>
          <div>
            <a
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-900 to-primary-500 hover:bg-slate-200 text-white"
            >
              Contactame
            </a>
            <a
              href="/cv/alejandro-morales-cv.pdf"
              download="Alejandro-Morales-cv.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-900 to-primary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Descargar CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile-image.jpg"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

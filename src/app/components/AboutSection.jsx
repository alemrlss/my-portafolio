"use client";
import React, { useTransition, useState } from "react";
import TailwindIcon from "../../../public/icons/tailwind-css.svg";
import NestIcon from "../../../public/icons/nestjs.svg";
import MySqlIcon from "../../../public/icons/mysql-icon.svg";
import MongoIcon from "../../../public/icons/mongodb-icon.svg";
import NextIcon from "../../../public/icons/nextjs.svg";
import ExpressIcon from "../../../public/icons/express-icon.svg";
import JavascriptIcon from "../../../public/icons/javascript-icon.svg";
import TypescriptIcon from "../../../public/icons/typescript-icon.svg";
import ReactIcon from "../../../public/icons/reactjs-icon.svg";
import NodeIcon from "../../../public/icons/nodejs-icon.svg";

import { motion } from "framer-motion";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.div
        className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-1">
              <Image
                src={JavascriptIcon}
                alt="Javascript Icon"
                className="h-6 w-6"
              />
              <span>JavaScript</span>
            </li>
            <li className="flex items-center space-x-1">
              <Image
                src={TypescriptIcon}
                alt="Typescript Icon"
                className="h-6 w-6"
              />
              <span>TypeScript</span>
            </li>
            <li className="flex items-center space-x-1">
              <Image src={NextIcon} alt="NextJS Icon" className="h-6 w-6" />
              <span>NextJS</span>
            </li>
            <li className="flex items-center space-x-1">
              <Image src={ReactIcon} alt="ReactJS Icon" className="h-6 w-6" />
              <span>ReactJS</span>
            </li>
            <li className="flex items-center space-x-1">
              <Image
                src={TailwindIcon}
                alt="TailwindCSS Icon"
                className="h-6 w-6"
              />
              <span>TailwindCSS</span>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-1">
              <Image src={NodeIcon} alt="NodeJS Icon" className="h-6 w-6" />
              <span>NodeJS</span>
            </li>
            <li className="flex items-center space-x-1">
              <Image src={NestIcon} alt="NestJS Icon" className="h-6 w-6" />
              <span>NestJS</span>
            </li>
            <li className="flex items-center space-x-1">
              <Image src={ExpressIcon} alt="NestJS Icon" className="h-6 w-6" />
              <span>Express</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Bases de Datos</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-1">
              <Image src={MySqlIcon} alt="MySql Icon" className="h-6 w-6" />
              <span>MySQL</span>
            </li>
            <li className="flex items-center space-x-1">
              <Image src={MongoIcon} alt="MongoDB Icon" className="h-6 w-6" />
              <span>MongoDB</span>
            </li>
          </ul>
        </div>
      </motion.div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2">
        <li>
          Universidad Privada Rafael Belloso Chacin - Ingenieria en Sistemas
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className=" pl-2">
        <li>Javascript Algorithms and Data Structures - FreeCodeCamp 2023</li>
        <li>Backend Profesional - CodigoFacilito 2023</li>
        <li>NoSql con MongoDB - CodigoFacilito 2023</li>
        <li>Curso Profesional de React - CodigoFacilito 2023</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={800} height={800} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mi</h2>
          <p className="text-base lg:text-lg">
            Desarrollador con experiencia en <strong>JavaScript</strong>,
            <strong>Typescript</strong>, <strong>HTML5</strong> y
            <strong> CSS</strong>. He trabajado con frameworks como{" "}
            <strong>NextJS</strong>, <strong>ReactJS</strong>,{" "}
            <strong>NestJS</strong> y <strong>NodeJS</strong>. Además, tengo
            conocimientos en el manejo de bases de datos relacionales y no
            relaciones como <strong>MySql</strong>, <strong>MongoDB</strong>.
            Considero que el aprendizaje constante es esencial en mi carrera y
            estoy siempre dispuesto a abordar nuevos temas. Mi objetivo personal
            es convertirme en un referente en el desarrollo de aplicaciones web
            sostenibles y de alto rendimiento, aportando soluciones innovadoras
            que impacten positivamente en la vida de las personas
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educacion{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificaciones{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

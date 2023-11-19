import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TailwindIcon from "../../../public/icons/tailwind-css.svg";
import NestIcon from "../../../public/icons/nestjs-icon.svg";
import MySqlIcon from "../../../public/icons/mysql-icon.svg";
import MongoIcon from "../../../public/icons/mongodb-icon.svg";
import NextIcon from "../../../public/icons/nextjs-icon.svg";
import ExpressIcon from "../../../public/icons/express-icon.svg";
import JavascriptIcon from "../../../public/icons/javascript-icon.svg";
import TypescriptIcon from "../../../public/icons/typescript-icon.svg";
import ReactIcon from "../../../public/icons/reactjs-icon.svg";
import NodeIcon from "../../../public/icons/nodejs-icon.svg";

function Skills() {
  return (
    <motion.div
      className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Frontend</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <Image
              src={JavascriptIcon}
              alt="Javascript Icon"
              className="h-6 w-6"
            />
            <span>JavaScript</span>
          </li>
          <li className="flex items-center space-x-2">
            <Image
              src={TypescriptIcon}
              alt="Typescript Icon"
              className="h-6 w-6"
            />
            <span>TypeScript</span>
          </li>
          <li className="flex items-center space-x-2">
            <Image src={NextIcon} alt="NextJS Icon" className="h-6 w-6" />
            <span>NextJS</span>
          </li>
          <li className="flex items-center space-x-2">
            <Image src={ReactIcon} alt="ReactJS Icon" className="h-6 w-6" />
            <span>ReactJS</span>
          </li>
          <li className="flex items-center space-x-2">
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
          <li className="flex items-center space-x-2">
            <Image src={NodeIcon} alt="NodeJS Icon" className="h-6 w-6" />
            <span>NodeJS</span>
          </li>
          <li className="flex items-center space-x-2">
            <Image src={NestIcon} alt="NestJS Icon" className="h-6 w-6" />
            <span>NestJS</span>
          </li>
          <li className="flex items-center space-x-2">
            <Image src={ExpressIcon} alt="NestJS Icon" className="h-6 w-6" />
            <span>Express</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Bases de Datos</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <Image src={MySqlIcon} alt="MySql Icon" className="h-6 w-6" />
            <span>MySQL</span>
          </li>
          <li className="flex items-center space-x-2">
            <Image src={MongoIcon} alt="MongoDB Icon" className="h-6 w-6" />
            <span>MongoDB</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Skills;

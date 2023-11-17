"use client";
import Image from "next/image";
import React from "react";
import { animate, motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center space-x-4 lg:space-x-0">
        <motion.div
          className="opacity-30 hover:opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          whileHover={{ opacity: 0.8 }}
        >
          <Image
            src="/images/logo-am-image.png"
            alt="logo image"
            width={100}
            height={100}
            draggable={false}
          />
        </motion.div>
        <p className="text-slate-600">
          {" "}
          2023 © - Todos los Derechos Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;

/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  add: {
    backgroundColor: "red",
    color: "#ccc",
  },
  even: {
    backgroundColor: "blue",
    color: "#fff",
  },
};

function page() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-white h-screen mx-20">
      <h2 className="text-center text-4xl">Framer Motion</h2>

      <div className="px-20">
        {" "}
        <motion.div
          className="w-20 h-20 bg-red-300"
          transition={{ duration: 2 }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "100%", "10%"],
          }}
        ></motion.div>
        <motion.div
          animate={counter % 2 === 0 ? "even" : "add"}
          variants={variants}
        >
          {counter}
        </motion.div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Click me
        </button>
      </div>

      <div>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          className="w-20 h-20 bg-blue-200"
        ></motion.div>
      </div>

      <div className="mt-29">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2>Hola aparezco</h2>
        </motion.div>
      </div>

      <button> change align text</button>
    </div>
  );
}

export default page;

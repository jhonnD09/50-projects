import React from "react";
import { motion } from "framer-motion";

function ScrollAnimation() {
  return (
    <div className="w-full h-full bg-sky-500 text-center flex items-center justify-center flex-col">
      <h1 className=" text-4xl font-bold m-5 ">Scroll to see the Animation </h1>
      <motion.div
        className=" bg-indigo-950 w-[26vw] h-[200px] m-2.5 rounded-[12px] flex items-center justify-center font-bold text-5xl text-white shadow-lg shadow-black transform: translateX(400%) ease-out duration-300"
        initial={{ x: 500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Content
      </motion.div>
      <motion.div
        className=" bg-indigo-950 w-[26vw] h-[200px] m-2.5 rounded-[12px] flex items-center justify-center font-bold text-5xl text-white shadow-lg shadow-black transform: translateX(400%) ease-out duration-300"
        initial={{ x: -500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Content
      </motion.div>
      <motion.div
        className=" bg-indigo-950 w-[26vw] h-[200px] m-2.5 rounded-[12px] flex items-center justify-center font-bold text-5xl text-white shadow-lg shadow-black transform: translateX(400%) ease-out duration-300"
        initial={{ x: 500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Content
      </motion.div>
      <motion.div
        className=" bg-indigo-950 w-[26vw] h-[200px] m-2.5 rounded-[12px] flex items-center justify-center font-bold text-5xl text-white shadow-lg shadow-black transform: translateX(400%) ease-out duration-300"
        initial={{ x: -500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Content
      </motion.div>
      <motion.div
        className=" bg-indigo-950 w-[26vw] h-[200px] m-2.5 rounded-[12px] flex items-center justify-center font-bold text-5xl text-white shadow-lg shadow-black transform: translateX(400%) ease-out duration-300"
        initial={{ x: 500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Content
      </motion.div>
      <motion.div
        className=" bg-indigo-950 w-[26vw] h-[200px] m-2.5 rounded-[12px] flex items-center justify-center font-bold text-5xl text-white shadow-lg shadow-black transform: translateX(400%) ease-out duration-300"
        initial={{ x: -500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Content
      </motion.div>
      <motion.div
        className=" bg-indigo-950 w-[26vw] h-[200px] m-2.5 rounded-[12px] flex items-center justify-center font-bold text-5xl text-white shadow-lg shadow-black transform: translateX(400%) ease-out duration-300"
        initial={{ x: 500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Content
      </motion.div>
    </div>
  );
}

export default ScrollAnimation;

import React from 'react';
import { motion } from "framer-motion";
import img from "../assets/pp.png";

const titleStyle = "text-7xl font-bold text-[#03045E] leading-none mb-1";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="flex flex-col-reverse md:flex-row justify-around items-center px-5 md:px-20 py-20 min-h-[60vh]"
    >

      {/* LEFT TEXT */}
      <div className="text-center md:text-left mt-10 md:mt-0">

        {/* INTRO TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg ml-2 text-[#03045E] mb-1"
        >
          Hello. I'm Fauzan Amali
        </motion.p>

        {/* TITLE 1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={titleStyle}
        >
          Product
        </motion.h1>

        {/* TITLE 2 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={titleStyle}
        >
          Designer
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl font-semibold text-[#03045E] mb-8"
        >
          based in Netherlands.
        </motion.p>

        
        <motion.a
          href="#about"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="btn bg-[#F5EE84] text-[#3f3f3f] px-7 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Know Me
        </motion.a>
      </div>


      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-64 h-64 flex justify-center items-center"
      >
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute w-full h-full rounded-full border-2 border-[#03045E]/30"
        ></motion.div>

        
        <img 
          src={img} 
          alt="Fauzan Amali" 
          className="w-full h-full object-cover rounded-full z-10"
        />

        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-10 left-[-2px] transform rotate-45 text-2xl text-[#03045E] z-0"
        >
          ////
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;

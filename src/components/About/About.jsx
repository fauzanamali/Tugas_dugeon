import React from 'react';
import { motion } from "framer-motion";

const titleStyle = "text-5xl md:text-[64px] font-extrabold text-[#e5cc40] tracking-wider mb-8 drop-shadow-lg";

const About = () => {
  return (
    <section id="about" className="py-30 px-5 md:px-20 text-center">

      {/* TITLE ANIMATION */}
      <motion.h2
        className={titleStyle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me.
      </motion.h2>

      {/* PARAGRAPH ANIMATION */}
      <motion.p
        className="max-w-3xl mx-auto text-[20px] mt-20 text-[#03045E] leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Halo! Saya Fauzan Amali, seorang Web Developer yang berminat dan memiliki fokus pada desain website yang responsif.
        Dengan keahlian desain dan logika, saya berusaha menciptakan website yang bukan hanya indah, tapi juga berfungsi dengan baik.
      </motion.p>

    </section>
  );
};

export default About;

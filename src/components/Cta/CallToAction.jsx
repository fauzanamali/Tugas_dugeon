import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-24 px-5 md:px-20 text-center mt-30">

      <motion.h2
        className="text-7xl font-bold text-[#03045E] mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get Started
      </motion.h2>

      <motion.p
        className="text-[20px] text-[#3f3f3f] mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Saya membangun pengalaman web yang cepat, mudah diakses, dan indah.
      </motion.p>

      <motion.div
        className="flex justify-center space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a 
          href="#" 
          className="px-8 py-3 bg-[#474306] text-[#F7F197] rounded-md font-semibold hover:bg-gray-600 transition"
        >
          Lihat Project
        </a>
        <a 
          href="#" 
          className="px-8 py-3 border-2 border-[#e5cc40] text-[#3f3f3f] rounded-md font-semibold hover:bg-[#e5cc40] transition"
        >
          Kontak Saya
        </a>
      </motion.div>

    </section>
  );
};

export default CallToAction;

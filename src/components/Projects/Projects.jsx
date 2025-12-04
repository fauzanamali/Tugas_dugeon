import React from 'react';
import { i } from 'framer-motion/client';
import gambar from "../../assets/Frame1.png";



const titleStyle = "text-5xl md:text-[64px] font-extrabold text-[#e5cc40] tracking-wider mb-8 drop-shadow-lg";

const Projects = ({ images }) => {
  return (
    <section className="py-20 px-5 md:px-20 text-center mt-30 ">
      <h2 className={titleStyle}>
        My Project
      </h2>
      <div className="flex justify-center space-x-10 mt-12">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#e5cc40] shadow-xl"
          >
            <img 
              src={gambar} 
              alt={`Project ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
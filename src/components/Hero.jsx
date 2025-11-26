import React from 'react';
import img from "../assets/pp.png";

const titleStyle = "text-5xl md:text-[64px] font-extrabold text-[#e5cc40] tracking-wider mb-8 drop-shadow-lg";

const Hero = ({ profileImage }) => {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row justify-around items-center px-5 md:px-20 py-20 min-h-[60vh]">
      <div className="text-center md:text-left mt-10 md:mt-0">
        <p className="text-lg ml-2 text-[#03045E] mb-1">Hello. I'm Fauzan Amali</p>
        <h1 className="text-7xl font-bold text-[#03045E] leading-none mb-1">
        Product 
        </h1>
         <h1 className="text-7xl font-bold text-[#03045E] leading-none mb-1">
           Designer
        </h1>
        <p className="text-xl font-semibold text-[#03045E] mb-8">
          based in Netherlands.
        </p>
        <a 
          href="#about" 
          className="btn bg-[#F5EE84] text-[#3f3f3f] px-7 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Know Me
        </a>
      </div>
      
     
      <div className="relative w-64 h-64 flex justify-center items-center">
        <div className="absolute w-full h-full rounded-full border-1 border-[#BLUE]"></div>
        <img 
          src={img} 
          alt="Fauzan Amali" 
          className="w-full h-full object-cover rounded-full z-10"
        />
    
        <div className="absolute top-10 left-[-2px] transform rotate-45 text-2xl text-[#03045E] opacity-50 z-0">////</div>
      </div>
    </section>
  );
};

export default Hero;
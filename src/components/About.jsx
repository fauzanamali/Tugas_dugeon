import React from 'react';

const titleStyle = "text-5xl md:text-[64px] font-extrabold text-[#e5cc40] tracking-wider mb-8 drop-shadow-lg";

const About = () => {
  return (
    <section id="about" className="py-30 px-5 md:px-20  text-center">
      <h2 className={titleStyle}>
        About Me.
      </h2>
      <p className="max-w-3xl mx-auto text-[20px] mt-20 text-[#03045E]  leading-relaxed">
        Halo! Saya Fauzan Amali, seorang Web Developer yang berminat dan memiliki fokus pada desain website yang responsif.
        Dengan keahlian desain dan logika, saya berusaha menciptakan website yang bukan hanya indah, tapi juga berfungsi dengan baik.
      </p>
    </section>
  );
};

export default About;
import React from "react";

const skillsData = [
  {
    title: "UI/UX",
    img: "https://cdn-icons-png.flaticon.com/128/13191/13191289.png", 
  },
  {
    title: "Coding",
    img: "https://cdn-icons-png.flaticon.com/128/1197/1197460.png", 
  },
  {
    title: "Disain",
    img: "https://cdn-icons-png.flaticon.com/128/2857/2857433.png", 
  },
];

const Skills = () => {
  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: "#" }}
      id="skills"
    >
      <h2 className="text-4xl md:text-[64px] font-extrabold text-center text-[#e5cc40] drop-shadow-lg drop-shadow-sm mb-30 mt-30">
        My Skill
      </h2>

      <div className="max-w-5xl mx-auto  mt- grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className=" p-6 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,0.3)] border border-gray-300 flex flex-col items-center hover:scale-105 transition"
          >
            <img src={skill.img} alt={skill.title} className="w-20 mb-4" />

            <p className="text-xl font-semibold text-blue-900">{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

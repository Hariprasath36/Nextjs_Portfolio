"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders"; // Assuming MovingBorders has the animation effect

const skillsData = [
  { id: 1, src: "/html.png", alt: "HTML5" },
  { id: 2, src: "/css.png", alt: "CSS3" },
  { id: 3, src: "/nodejs.png", alt: "JavaScript" },
  { id: 4, src: "/java.png", alt: "Java" },
  { id: 5, src: "/reactjs.png", alt: "React" },
  { id: 6, src: "/mySql.png", alt: "MySQL" },
  { id: 7, src: "/tailwind.png", alt: "Tailwind" },
  { id: 8, src: "/psql.png", alt: "PostgreSQL" },
  { id: 9, src: "/mongodb.png", alt: "MongoDB" },
  { id: 10, src: "/git.png", alt: "Git" },
  { id: 11, src: "/springboot.png", alt: "Spring" },
  { id: 12, src: "/docker.png", alt: "Docker" },
];

const Skills = () => {
  return (
    <div className="py-10 sm:py-20 w-full flex flex-col items-center">
      <h1 className="heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">
        My <span className="text-purple">skills</span>
      </h1>

      <div className="w-full mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-12 gap-y-10 gap-x-5 justify-items-center">
        {skillsData.map((skill) => (
          <Button
            key={skill.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            style={{
              background: "rgb(4,7,29)",
              backgroundImage: "linear-gradient(135deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
              width: "80px", // Responsive size for smaller screens
              height: "80px", // Responsive size for smaller screens
            }}
            className="flex justify-center items-center transition-all duration-300"
          >
            <motion.img
              src={skill.src}
              alt={skill.alt}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 hover:scale-125"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;

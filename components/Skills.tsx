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
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">skills</span>
      </h1>

      <div className="w-full mt-16 grid grid-cols-12 gap-y-20 gap-x-5 justify-items-center">
        {skillsData.map((skill) => (
          <Button
            key={skill.id}
            duration={Math.floor(Math.random() * 10000) + 10000} // Random duration for border animation
            style={{
              background: "rgb(4,7,29)",
              backgroundImage: "linear-gradient(135deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)", // Hexagon shape
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)", // Soft glow effect
              width: "100px", // Adjusted width
              height: "100px", // Adjusted height
            }}
            className="flex justify-center items-center transition-all duration-300"
          >
            <motion.img
              src={skill.src}
              alt={skill.alt}
              className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-125"
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

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders"; // Assuming MovingBorders has the animation effect

const skillsData = [
  { id: 1, src: "/html-logo.png", alt: "HTML5" },
  { id: 2, src: "/css-logo.png", alt: "CSS3" },
  { id: 3, src: "/js-logo.png", alt: "JavaScript" },
  { id: 4, src: "/java-logo.png", alt: "Java" },
  { id: 5, src: "/react-logo.png", alt: "React" },
  { id: 6, src: "/mysql-logo.png", alt: "MySQL" },
  { id: 7, src: "/tailwind-logo.png", alt: "Tailwind" },
  { id: 8, src: "/postgres-logo.png", alt: "PostgreSQL" },
  { id: 9, src: "/mongo-logo.png", alt: "MongoDB" },
  { id: 10, src: "/git-logo.png", alt: "Git" },
  { id: 11, src: "/spring-logo.png", alt: "Spring" },
  { id: 12, src: "/docker-logo.png", alt: "Docker" },
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
              width: "80px", // Adjusted width
              height: "90px", // Adjusted height
            }}
            className="flex justify-center items-center transition-all duration-300"
          >
            <motion.img
              src={skill.src}
              alt={skill.alt}
              className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-125"
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

"use client"; // If you are using hooks or client-side state

import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { id: 1, src: "/jsm-logo.png", alt: "HTML5" },
  { id: 2, src: "/path/to/your/css3.png", alt: "CSS3" },
  { id: 3, src: "/path/to/your/javascript.png", alt: "JavaScript" },
  { id: 4, src: "/path/to/your/java.png", alt: "Java" },
  { id: 5, src: "/path/to/your/react.png", alt: "React" },
  { id: 6, src: "/path/to/your/mysql.png", alt: "MySQL" },
  { id: 7, src: "/path/to/your/postgresql.png", alt: "PostgreSQL" },
  { id: 8, src: "/path/to/your/mongodb.png", alt: "MongoDB" },
  { id: 9, src: "/path/to/your/git.png", alt: "Git" },
  { id: 10, src: "/path/to/your/spring.png", alt: "Spring" },
  { id: 11, src: "/path/to/your/docker.png", alt: "Docker" },
  { id: 12, src: "/path/to/your/nodejs.png", alt: "Node.js" },
];

const Skills = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">skills</span>
      </h1>
      
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-2 gap-10">
        {skillsData.map((skill) => (
          <motion.div
            key={skill.id}
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="border-4 border-transparent transition-transform duration-300 hover:scale-105 hover:border-purple-400 rounded-full">
              <div
                className="flex justify-center items-center p-5"
                style={{
                  background: "rgb(4, 7, 29)",
                  backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-16 h-16 object-contain" // Adjust size as needed
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

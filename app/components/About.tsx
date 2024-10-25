import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

// Updated fadeIn function to include all required parameters
const fadeIn = (direction = "", easing = "", duration = 1, delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: easing,
    },
  },
});

// Define types for the ServiceCard props
interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

// ServiceCard component
const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// About component
const About: React.FC = () => {
  return (
    <>
      <motion.div variants={fadeIn()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)} // Providing delay
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate Java Developer with a deep love for crafting efficient, scalable, and robust software solutions. With a strong foundation in object-oriented programming and extensive experience in building applications using Java,
        I thrive on turning complex problems into simple, elegant code.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

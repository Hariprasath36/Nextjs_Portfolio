import { motion } from "framer-motion";
import { ReactNode, ComponentType } from "react";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Define a Higher-Order Component (HOC) type
const StarWrapper = (Component: ComponentType, idName: string) => {
  return function HOC(): JSX.Element {
    return (
      <motion.section
        variants={staggerContainer(0.2)} // Provide the required argument here
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };
};

export default StarWrapper;

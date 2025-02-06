import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import psyduck from "../assets/psyduck.png";
const ScrollAnimationLeft3 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({

    threshold: 0.1, 
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.img
      ref={ref}
      src={psyduck}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 750 },
        hidden: { opacity: 0, x: 1000 },
      }}
      transition={{ duration: 1 }}
      alt="Animated Image"
      style={{ width: "25%", height: "10em", position: "relative", marginTop: "-8.5em" }}
      className="hidden sm:block"
    />
  );
};

export default ScrollAnimationLeft3;

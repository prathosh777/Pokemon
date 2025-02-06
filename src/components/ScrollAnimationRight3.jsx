import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import teamRocket from "../assets/teamRocket.png";

const ScrollAnimationRight3 = () => {
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
      src={teamRocket}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: -400 },
        hidden: { opacity: 0, x: -550 },
      }}
      transition={{ duration: 1 }}
      alt="Animated Image"
      style={{ width: "50%", height: "auto", position: "relative", marginTop: "-10.5em" }}
      className="hidden sm:block"
    />
  );
};

export default ScrollAnimationRight3;


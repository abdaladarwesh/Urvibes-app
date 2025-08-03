import { motion, useReducedMotion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

type props = {
  children : ReactNode,
  y : number,
  duration : number,
  ClassName? : string
}

export default function Falldown({ children , y , duration, ClassName}:  props ) : ReactNode{

  const shouldReduce = useReducedMotion();

const transition: Transition = shouldReduce
  ? { duration: duration, ease: "easeOut" } // fallback
  : {
      type: "spring",
      stiffness: 100,    // stronger pull
      damping: 25,       // enough to prevent wild overshoot but still snappy
      mass: 0.5,         // lighter
      restDelta: 0.0001, // can be slightly larger if you want it to settle sooner
      velocity: 100,     // start with more initial push if relevant
      // omit duration so Framer Motion calculates a naturally faster one
    };
  return(
            <motion.div
                initial={{ y: y, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={transition}
                style={{ willChange: "transform, opacity" }}
                className={ClassName}
            >
              {children}
            </motion.div>
  );
}






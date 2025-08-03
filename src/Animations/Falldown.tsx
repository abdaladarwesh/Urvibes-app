import { motion } from "framer-motion";
import type { ReactNode } from "react";

type props = {
  children : ReactNode,
  y : number,
  duration : number,
  ClassName : string
}

export default function Falldown({ children , y , duration, ClassName}:  props ) : ReactNode{
  return(
            <motion.div
                initial={{ y: y, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, ease: "easeOut" }}
                className={ClassName}
            >
              {children}
            </motion.div>
  );
}



import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function InView({ children }: { children: React.ReactNode }) {
  const { inView, ref }: { inView: boolean; ref: any } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

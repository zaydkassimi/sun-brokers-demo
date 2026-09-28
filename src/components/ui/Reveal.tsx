"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
  as?: "div" | "li";
};

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "-72px" } as const;

export function Reveal({ children, delay = 0, distance = 26, className, as = "div" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (as === "li") {
    return shouldReduceMotion ? (
      <li className={className}>{children}</li>
    ) : (
      <motion.li
        className={className}
        initial={{ opacity: 0, y: distance }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.55, delay, ease }}
      >
        {children}
      </motion.li>
    );
  }

  return shouldReduceMotion ? (
    <div className={className}>{children}</div>
  ) : (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

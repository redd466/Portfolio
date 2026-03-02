"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-start pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-accent font-medium tracking-wide text-sm md:text-base mb-4">
          CS ENGINEERING UNDERGRADUATE | AI SPECIALIST
        </h2>
      </motion.div>
      <motion.h1
        className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Building digital <br /> experiences.
      </motion.h1>
      <motion.p
        className="text-neutral-400 text-lg md:text-xl max-w-2xl font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Specializing in Artificial Intelligence, Data Science, and Cloud infrastructure. Building intelligent systems and robust applications for the modern web.
      </motion.p>
    </section>
  );
}
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
          SOFTWARE ENGINEER
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
        className="text-neutral-400 text-lg md:text-xl max-w-2xl font-light mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Specializing in building exceptional, high-performance websites, applications, and everything in between with a focus on premium minimalist design.
      </motion.p>

      {/* New Buttons Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3 bg-accent text-black font-medium rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,255,157,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Download Resume
        </a>
        <a 
          href="mailto:vigneshreddy3011@gmail.com"
          className="px-8 py-3 bg-surface border border-white/10 text-white font-medium rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
        >
          Get In Touch
        </a>
      </motion.div>
    </section>
  );
}
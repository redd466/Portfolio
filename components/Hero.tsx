"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center pt-20 gap-12">
      {/* Left Column: Text & Buttons */}
      <div className="flex-1 flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-accent font-mono tracking-widest text-xs md:text-sm mb-4 uppercase">
            CS Engineering Undergrad | AI Specialist
          </h2>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Building <br /> intelligent <br /> systems.
        </motion.h1>

        <motion.p
          className="text-neutral-400 text-lg md:text-xl max-w-xl font-light mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Specializing in Deep Learning, Python, and data-driven architecture. I build high-performance applications and machine learning workflows that solve real problems.
        </motion.p>

        {/* Buttons */}
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
            className="px-8 py-3.5 bg-accent text-black font-semibold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,157,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1"
          >
            Download Resume
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Right Column: Premium Profile Photo */}
      <motion.div 
        className="flex-1 flex justify-center md:justify-end w-full max-w-md md:max-w-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Glowing ring effect behind the image */}
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl animate-pulse"></div>
          
          <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden shadow-2xl p-2 bg-surface">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image 
                src="/profile.jpg" 
                alt="Profile Photo" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
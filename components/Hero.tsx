"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  // Terminal Text State
  const [text, setText] = useState("");
  const fullText = "Building intelligent systems.";

  // 3D Magnetic Image State
  const imgRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Terminal Typing Logic
  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 85);
    return () => clearInterval(interval);
  }, []);

  // 3D Hover Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="min-h-[85vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center pt-20 gap-12 perspective-1000">
      {/* Left Column: Text & Buttons */}
      <div className="flex-1 flex flex-col justify-center items-start w-full z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h2 className="text-accent font-mono tracking-widest text-xs md:text-sm mb-6 uppercase">
            CS Engineering Undergrad | AI Specialist
          </h2>
        </motion.div>

        {/* Terminal Boot-Up Text */}
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 font-mono flex flex-wrap items-center">
          <span className="text-accent/50 mr-4 select-none">{">_"}</span>
          <span className="text-white">{text}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="inline-block w-[0.5em] h-[1em] bg-accent align-middle ml-2 shadow-[0_0_10px_rgba(0,255,157,0.5)]"
          />
        </div>

        <motion.p className="text-neutral-400 text-lg md:text-xl max-w-xl font-light mb-10 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.5 }}>
          Specializing in Deep Learning, Python, and data-driven architecture. I build high-performance applications and machine learning workflows that solve real problems.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.8 }} className="flex flex-wrap gap-4">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-accent text-black font-semibold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,157,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1">
            Download Resume
          </a>
          <a href="mailto:your.email@example.com" className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1">
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Right Column: 3D Magnetic Profile Photo */}
      <motion.div className="flex-1 flex justify-center md:justify-end w-full max-w-md md:max-w-none perspective-1000" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}>
        <motion.div 
          ref={imgRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 cursor-crosshair"
        >
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ transform: "translateZ(-50px)" }}></div>
          <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden shadow-2xl p-2 bg-surface" style={{ transform: "translateZ(20px)" }}>
            <div className="w-full h-full rounded-full overflow-hidden relative bg-neutral-900 pointer-events-none">
              <Image src="/profile.jpg" alt="Profile Photo" fill className="object-cover" sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px" priority />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
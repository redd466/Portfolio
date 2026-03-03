"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../../lib/data";
import { useState, useRef } from "react";

// The individual Spotlight Card Component
function SpotlightCard({ project, index }: { project: any, index: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex flex-col justify-between h-80 p-8 bg-surface rounded-3xl border border-white/5 overflow-hidden"
      >
        {/* The Magic Hover Spotlight */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,255,157,0.1), transparent 40%)`,
          }}
        />

        <div className="relative z-10 flex justify-between items-start">
          <h2 className="text-2xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h2>
          <span className="text-neutral-500 font-mono text-sm">{project.year}</span>
        </div>
        
        <div className="relative z-10">
          <p className="text-neutral-400 mb-6">{project.shortDescription}</p>
          <div className="flex gap-3 flex-wrap">
            {project.tech.slice(0, 3).map((t: string) => (
              <span key={t} className="text-xs px-3 py-1 bg-white/5 rounded-full text-neutral-300 backdrop-blur-sm border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// The Main Page Component
export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-12">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Selected Works
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <SpotlightCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
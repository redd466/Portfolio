"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../../lib/data";

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
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group relative flex flex-col justify-between h-80 p-8 bg-surface rounded-3xl border border-white/5 hover:border-accent/30 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex justify-between items-start">
                <h2 className="text-2xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h2>
                <span className="text-neutral-500 font-mono text-sm">{project.year}</span>
              </div>
              
              <div className="relative z-10">
                <p className="text-neutral-400 mb-6">{project.shortDescription}</p>
                <div className="flex gap-3 flex-wrap">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-3 py-1 bg-white/5 rounded-full text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
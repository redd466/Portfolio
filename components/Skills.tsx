"use client";

import { motion } from "framer-motion";
import { skills } from "../lib/data";

export default function Skills() {
  return (
    <section className="py-24 border-t border-white/5">
      <h3 className="text-2xl font-semibold mb-12 tracking-tight">Core Technologies</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="px-6 py-3 bg-surface border border-white/5 rounded-full text-sm font-medium text-neutral-300 hover:border-accent/50 hover:text-accent transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
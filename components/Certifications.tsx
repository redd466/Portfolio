"use client";

import { motion } from "framer-motion";
import { certifications } from "../lib/data";

export default function Certifications() {
  return (
    <section className="py-24 border-t border-white/5">
      <h3 className="text-2xl font-semibold mb-12 tracking-tight">Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 bg-surface rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-medium text-white group-hover:text-accent transition-colors">
                {cert.title}
              </h4>
              <span className="text-sm text-neutral-500">{cert.date}</span>
            </div>
            <p className="text-neutral-400">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
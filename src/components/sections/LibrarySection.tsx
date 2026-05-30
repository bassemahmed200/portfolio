"use client";

import { motion } from "framer-motion";
import { Folder, ArrowUpRight } from "lucide-react";
import { libraryItems } from "@/data/portfolio";

export function LibrarySection() {
  return (
    <section id="library" className="section-padding relative">
      <div className="liquid-blob liquid-blob--light w-[400px] h-[400px] top-1/4 -right-20" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label">Library</span>
          <h2 className="section-heading">Resource <span className="text-[#6366f1]">Library</span></h2>
          <p className="section-subheading mx-auto mt-4">
            Reusable components, utilities, and templates built from real-world projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {libraryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card p-8 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#6366f1]">
                  <Folder size={24} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[#64748b] group-hover:text-[#6366f1] transition-colors"
                />
              </div>

              <span className="inline-block rounded-full bg-[#6366f1]/10 px-3 py-1 text-xs font-medium text-[#a855f7] mb-3">
                {item.category}
              </span>

              <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-outfit)]">
                {item.title}
              </h3>
              <p className="text-sm text-[#94a3b8] mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.items.map((sub) => (
                  <span key={sub} className="rounded-lg bg-white/5 border border-white/[0.06] px-3 py-1.5 text-xs text-[#94a3b8]">
                    {sub}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

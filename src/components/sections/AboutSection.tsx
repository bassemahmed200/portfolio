"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#000000", backgroundImage: "linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px)", backgroundSize: "50px 50px" }}>
      <div className="liquid-blob liquid-blob--blue w-[500px] h-[500px] -top-20 -right-40" />
      <div className="liquid-blob liquid-blob--light w-[400px] h-[400px] bottom-0 -left-20" />

      <div className="container relative z-10 text-center" style={{ maxWidth: "800px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">{aboutContent.label}</span>
          <h2 className="section-heading" style={{ margin: "0.5rem 0 2rem" }}>
            Full Stack Developer<br />
            <span className="gradient-text">Passionate About Crafting</span><br />
            Digital Excellence
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#71717a", lineHeight: 1.8, marginBottom: "1rem" }}>
            {aboutContent.paragraph1}
          </p>
          <p style={{ fontSize: "0.95rem", color: "#52525b", lineHeight: 1.8, marginBottom: "3rem" }}>
            {aboutContent.paragraph2}
          </p>

          <div className="about-stats" style={{ display: "flex", justifyContent: "center", gap: "clamp(2rem, 6vw, 4rem)", flexWrap: "wrap" }}>
            {aboutContent.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="gradient-text about-stat-value" style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)", fontWeight: 900, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: "clamp(0.75rem, 2vw, 0.85rem)", color: "#52525b", marginTop: "8px" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .about-stats {
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 768px) {
          #about .container > div > p {
            font-size: 0.92rem !important;
            margin-bottom: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { services } from "@/data/portfolio";

const icons = [
  <svg key="code" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  <svg key="monitor" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  <svg key="paintbrush" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg>,
];

export function ServicesSection() {
  return (
    <section id="services" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="liquid-blob liquid-blob--blue w-[400px] h-[400px] top-1/4 -right-20" />
      <div className="liquid-blob liquid-blob--light w-[350px] h-[350px] bottom-1/4 -left-20" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}
        >
          <span className="section-label">What I Do</span>
          <h2 className="section-heading">Website & Web App Development Services</h2>
          <p className="section-subheading" style={{ margin: "1rem auto 0", maxWidth: "500px" }}>
            From idea to launch — I build fast, beautiful, and scalable digital products.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card"
              style={{ padding: "clamp(2rem, 3vw, 2.5rem)", textAlign: "center" }}
            >
              <div style={{ width: "70px", height: "70px", borderRadius: "16px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", color: "#818cf8" }}>
                {icons[i]}
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.8rem", fontFamily: "Outfit, sans-serif", color: "#f1f5f9" }}>{service.title}</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#94a3b8", margin: 0 }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

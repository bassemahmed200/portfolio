"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#000000", backgroundImage: "linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px)", backgroundSize: "50px 50px" }}>
      <div className="liquid-blob liquid-blob--blue w-[500px] h-[500px] -bottom-40 left-1/3" />

      <div className="container relative z-10 text-center" style={{ maxWidth: "700px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Contact</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.15, fontFamily: "Outfit, sans-serif", margin: "0.5rem 0 2rem" }}>
            Let&apos;s Build Something<br />
            <span className="gradient-text">Extraordinary Together</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: "3rem" }}>
            Need a website, web application, or SaaS platform built? I&apos;m available for freelance projects worldwide.
          </p>

          <div className="contact-cards" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {[
              { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="glass-card contact-card"
                style={{ padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", flex: "1 1 200px", justifyContent: "center" }}
              >
                <item.icon size={18} style={{ color: "#818cf8", flexShrink: 0 }} />
                <span style={{ fontSize: "clamp(0.78rem, 2.5vw, 0.9rem)", color: "#e2e8f0", wordBreak: "break-all" }}>{item.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary w-full sm:w-auto"
            style={{ fontSize: "1rem", padding: "14px 32px", justifyContent: "center" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

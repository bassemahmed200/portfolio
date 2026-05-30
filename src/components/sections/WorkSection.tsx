"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export function WorkSection() {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: "clamp(120px, 15vw, 200px)", paddingBottom: "clamp(120px, 15vw, 200px)" }}>
      <div className="liquid-blob liquid-blob--blue w-[500px] h-[500px] -top-40 left-1/4" />
      <div className="liquid-blob liquid-blob--light w-[350px] h-[350px] bottom-0 right-0" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading">Website & App Development Projects</h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 6vw, 80px)" }}>
          {projects.map((project, i) => {
            const isOdd = i % 2 !== 0;
            return (
              <motion.div
                key={project.num}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="work-grid-item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(1.5rem, 3vw, 3rem)",
                  alignItems: "center",
                  direction: isOdd ? "rtl" : "ltr",
                }}
              >
                <div style={{ direction: "ltr" }}>
                  <div
                    className="glass-card"
                    style={{
                      height: "320px",
                      borderRadius: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(99,102,241,0.12) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", width: "250px", height: "250px", background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
                    <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "1.75rem", width: "100%" }}>
                      <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", overflow: "hidden", width: "100%", maxWidth: "280px", margin: "0 auto", boxShadow: "0 16px 40px rgba(0,0,0,0.5)" }}>
                        <div style={{ background: "rgba(0,0,0,0.35)", padding: "8px 12px", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                          <div style={{ display: "flex", gap: "5px" }}>
                            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                              <div key={c} style={{ width: "9px", height: "9px", borderRadius: "50%", background: c }} />
                            ))}
                          </div>
                          <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: "4px", padding: "3px 8px", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: "left" }}>
                            {project.url.replace("https://", "").replace("www.", "")}
                          </div>
                        </div>
                        <div style={{ padding: "1.1rem 1rem", textAlign: "left" }}>
                          <div style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
                            <div style={{ height: "8px", width: "40%", background: "rgba(99,102,241,0.8)", borderRadius: "4px" }} />
                            <div style={{ height: "8px", width: "22%", background: "rgba(255,255,255,0.25)", borderRadius: "4px" }} />
                          </div>
                          <div style={{ height: "6px", width: "100%", background: "rgba(255,255,255,0.2)", borderRadius: "4px", marginBottom: "5px" }} />
                          <div style={{ height: "6px", width: "85%", background: "rgba(255,255,255,0.15)", borderRadius: "4px", marginBottom: "5px" }} />
                          <div style={{ height: "6px", width: "92%", background: "rgba(255,255,255,0.12)", borderRadius: "4px", marginBottom: "5px" }} />
                          <div style={{ height: "6px", width: "75%", background: "rgba(255,255,255,0.1)", borderRadius: "4px", marginBottom: "10px" }} />
                          <div style={{ padding: "5px 12px", background: "rgba(99,102,241,0.5)", borderRadius: "5px", fontSize: "0.62rem", color: "rgba(255,255,255,0.9)", fontWeight: 700, display: "inline-block", border: "1px solid rgba(99,102,241,0.6)" }}>View Live →</div>
                        </div>
                      </div>
                          <div style={{ display: "inline-block", marginTop: "0.85rem", padding: "4px 14px", background: "rgba(99,102,241,0.25)", border: "1px solid rgba(99,102,241,0.5)", borderRadius: "50px", fontSize: "0.68rem", color: "#c4b5fd", fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase" }}>{project.category}</div>
                    </div>
                  </div>
                </div>

                <div style={{ direction: "ltr" }}>
                  <span style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, fontFamily: "Outfit, sans-serif", lineHeight: 1, display: "block", marginBottom: "0.5rem" }}>{project.num}</span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem", display: "block" }}>{project.category}</span>
                  <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "1rem", fontWeight: 700 }}>{project.title}</h3>
                  <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem", color: "#e2e8f0" }}>{project.description}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.9rem", padding: "10px 24px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    View Project <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-grid-item {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            gap: 1.5rem !important;
          }
          .work-grid-item .glass-card {
            height: 260px !important;
          }
          .work-grid-item > div:last-child {
            text-align: center !important;
          }
        }
        @media (max-width: 480px) {
          .work-grid-item .glass-card {
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}

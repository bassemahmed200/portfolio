"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, faqTagColors } from "@/data/portfolio";

function FAQItem({ faq, index, isOpen, onToggle }: { faq: (typeof faqs)[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  const tagColor = faqTagColors[faq.tag] || faqTagColors.General;

  return (
    <div
      className="faq-item rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? "#f8faff" : "#ffffff",
        border: `1.5px solid ${isOpen ? "#bfdbfe" : "#f1f5f9"}`,
        boxShadow: isOpen ? "0 4px 24px rgba(99,102,241,0.1)" : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <span
          style={{
            flexShrink: 0,
            width: "34px",
            height: "34px",
            borderRadius: "10px",
            background: isOpen ? "#6366f1" : "#f1f5f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.68rem",
            fontWeight: 800,
            color: isOpen ? "#fff" : "#94a3b8",
            letterSpacing: "0.03em",
            transition: "all 0.25s",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          style={{
            flex: 1,
            fontSize: "clamp(0.93rem, 2vw, 1.02rem)",
            fontWeight: 600,
            color: isOpen ? "#0f172a" : "#334155",
            lineHeight: 1.45,
            transition: "color 0.2s",
          }}
        >
          {faq.q}
        </span>

        <span
          className="faq-tag-pill"
          style={{
            flexShrink: 0,
            background: tagColor.bg,
            border: `1px solid ${tagColor.border}`,
            color: tagColor.text,
            fontSize: "0.68rem",
            fontWeight: 700,
            padding: "4px 11px",
            borderRadius: "50px",
            letterSpacing: "0.05em",
          }}
        >
          {faq.tag}
        </span>

        <span
          style={{
            flexShrink: 0,
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: isOpen ? "#eff6ff" : "#f8fafc",
            border: `1px solid ${isOpen ? "#bfdbfe" : "#e2e8f0"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isOpen ? "#6366f1" : "#94a3b8",
            transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          style={{
            padding: `0 clamp(1rem,2.5vw,1.5rem) clamp(1rem,2.5vw,1.35rem)`,
            paddingLeft: `calc(clamp(1rem,2.5vw,1.5rem) + 34px + 1rem)`,
            display: "flex",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "3px",
              borderRadius: "4px",
              flexShrink: 0,
              minHeight: "32px",
              alignSelf: "stretch",
              background: "linear-gradient(180deg, #6366f1 0%, #6366f1 60%, transparent 100%)",
            }}
          />
          <p style={{ fontSize: "0.93rem", color: "#64748b", lineHeight: 1.8, margin: 0 }}>
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection({ onOpenWizard }: { onOpenWizard?: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative" style={{ background: "#ffffff", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, #eff6ff 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, #f5f3ff 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
            <div style={{ width: "36px", height: "4px", borderRadius: "4px", background: "linear-gradient(90deg, #6366f1, #6366f1)" }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6366f1" }}>FAQ</span>
          </div>

          <div style={{ display: "flex", gap: "clamp(2rem, 6vw, 5rem)", alignItems: "flex-end", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 260px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.15, fontFamily: "Outfit, sans-serif", margin: 0 }}>
                Common<br />
                <span style={{ color: "#6366f1" }}>Questions</span>
              </h2>
            </div>
            <div style={{ flex: "2 1 320px", paddingBottom: "6px" }}>
              <p style={{ fontSize: "1.05rem", color: "#64748b", lineHeight: 1.75, margin: "0 0 1rem" }}>
                Everything you need to know before we start working together.
              </p>
            </div>
          </div>
        </motion.div>

        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "8px" }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginTop: "clamp(48px, 7vw, 80px)",
            borderRadius: "24px",
            padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem)",
            background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "-40px", right: "60px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-30px", left: "30px", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.45rem)", fontWeight: 700, color: "#fff", marginBottom: "0.4rem", fontFamily: "Outfit, sans-serif" }}>
              Still have a question?
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", margin: 0 }}>
              I usually reply within a few hours on WhatsApp.
            </p>
          </div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
            <a
              href="https://wa.me/201112678333?text=Hi%20Bassem!%20I%20have%20a%20question%20before%20starting%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 22px",
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.35)",
                borderRadius: "50px",
                color: "#4ade80",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                transition: "all 0.25s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.523 5.845L.057 23.27a.75.75 0 00.92.92l5.425-1.466A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.704 9.704 0 01-4.964-1.363l-.356-.211-3.685.996.996-3.685-.211-.356A9.704 9.704 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Ask on WhatsApp
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                background: "linear-gradient(135deg, #6366f1, #6366f1)",
                border: "none",
                borderRadius: "50px",
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0 6px 24px rgba(99,102,241,0.4)",
                transition: "all 0.25s",
                textDecoration: "none",
              }}
            >
              Start My Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 580px) {
          .faq-tag-pill { display: none !important; }
        }
      `}</style>
    </section>
  );
}

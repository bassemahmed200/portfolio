"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export function Navbar({ onQuoteClick }: { onQuoteClick?: () => void }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: "20px",
          left: "0",
          right: "0",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          padding: "0 20px",
        }}
      >
        <nav style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          borderRadius: "50px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "#0a0a0f",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: "8px",
          boxShadow: isScrolled
            ? "0 0 30px rgba(99,102,241,0.15), 0 20px 60px rgba(0,0,0,0.5)"
            : "0 10px 40px rgba(0,0,0,0.4)",
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}>
          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }} className="hidden lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  style={{
                    position: "relative",
                    borderRadius: "50px",
                    padding: "12px 20px",
                    fontSize: "15px",
                    fontWeight: 600,
                    fontFamily: "Inter, sans-serif",
                    color: isActive ? "#fff" : "#8b8fa3",
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                    whiteSpace: "nowrap",
                    background: "transparent",
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.background = "rgba(59,130,246,0.2)";
                      e.currentTarget.style.boxShadow = "0 0 30px rgba(59,130,246,0.4), inset 0 0 15px rgba(59,130,246,0.1)";
                      e.currentTarget.style.border = "1px solid rgba(59,130,246,0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#8b8fa3";
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.border = "1px solid transparent";
                    }
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-pill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50px",
                        background: "#6366f1",
                        boxShadow: "0 0 30px rgba(99,102,241,0.4)",
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>{link.label}</span>
                </motion.a>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={onQuoteClick}
            className="hidden lg:inline-flex"
            style={{
              borderRadius: "50px",
              padding: "12px 24px",
              fontSize: "15px",
              fontWeight: 700,
              fontFamily: "Inter, sans-serif",
              color: "#fff",
              textDecoration: "none",
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              boxShadow: "0 0 24px rgba(99,102,241,0.4)",
              transition: "all 0.3s",
              whiteSpace: "nowrap",
              border: "none",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(99,102,241,0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Quote
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "none",
              background: "transparent",
              color: "#8b8fa3",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#8b8fa3"; }}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
            style={{
              position: "fixed",
              top: "90px",
              left: "20px",
              right: "20px",
              zIndex: 999,
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            <div style={{
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(9,9,11,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              padding: "12px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      style={{
                        borderRadius: "14px",
                        padding: "14px 18px",
                        fontSize: "15px",
                        fontWeight: 600,
                        fontFamily: "Inter, sans-serif",
                        color: isActive ? "#fff" : "#8b8fa3",
                        background: isActive ? "rgba(99,102,241,0.2)" : "transparent",
                        textDecoration: "none",
                        transition: "all 0.2s",
                        display: "block",
                      }}
                      onClick={() => setIsMobileOpen(false)}
                      onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#fff"; } }}
                      onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#8b8fa3"; } }}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
              <div style={{ marginTop: "8px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <motion.button
                  onClick={() => { onQuoteClick?.(); setIsMobileOpen(false); }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.04 }}
                  style={{
                    display: "block",
                    borderRadius: "14px",
                    padding: "14px 18px",
                    fontSize: "15px",
                    fontWeight: 700,
                    fontFamily: "Inter, sans-serif",
                    color: "#fff",
                    background: "linear-gradient(135deg, #6366f1, #a855f7)",
                    textAlign: "center",
                    textDecoration: "none",
                    boxShadow: "0 0 24px rgba(99,102,241,0.3)",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  Get a Quote
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

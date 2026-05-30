"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Layout, ShoppingCart, Cloud, HelpCircle, ArrowRight, ArrowLeft, Check } from "lucide-react";

interface QuoteWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const projectTypes = [
  { id: "website", label: "Website", desc: "Business, portfolio, or landing page", icon: Globe },
  { id: "webapp", label: "Web App", desc: "Dashboard, SaaS, or custom tool", icon: Layout },
  { id: "ecommerce", label: "E-commerce", desc: "Online store with products & payments", icon: ShoppingCart },
  { id: "saas", label: "SaaS Platform", desc: "Subscription-based software product", icon: Cloud },
  { id: "other", label: "Other", desc: "Not sure yet — let's discuss", icon: HelpCircle },
];

const features = [
  { id: "auth", label: "User Authentication", desc: "Login / signup system" },
  { id: "admin", label: "Admin Dashboard", desc: "Manage content or users" },
  { id: "payments", label: "Payment Integration", desc: "Stripe, PayPal, etc." },
  { id: "multilang", label: "Multi-language", desc: "Arabic + English support" },
  { id: "seo", label: "SEO Optimization", desc: "Rank higher on Google" },
  { id: "api", label: "API / Backend", desc: "Custom server & database" },
];

const timelines = [
  { id: "asap", label: "ASAP", desc: "Rushed delivery (+priority fee)" },
  { id: "month", label: "Within a Month", desc: "Standard timeline" },
  { id: "flexible", label: "Flexible", desc: "No hard deadline" },
];

export function QuoteWizard({ isOpen, onClose }: QuoteWizardProps) {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const getEstimate = () => {
    const base: Record<string, [number, number]> = {
      website: [999, 2500],
      webapp: [3000, 8000],
      ecommerce: [2000, 6000],
      saas: [5000, 15000],
      other: [1500, 5000],
    };
    const [low, high] = base[projectType] || [1500, 5000];
    const featureBoost = selectedFeatures.length * 300;
    return { low: low + featureBoost, high: high + featureBoost };
  };

  const sendToWhatsApp = () => {
    const estimate = getEstimate();
    const typeLabel = projectTypes.find((t) => t.id === projectType)?.label || projectType;
    const featureLabels = selectedFeatures.map((f) => features.find((ft) => ft.id === f)?.label).filter(Boolean).join(", ");
    const timelineLabel = timelines.find((t) => t.id === timeline)?.label || timeline;

    const msg = `Hello Bassem!

📋 Project Type: ${typeLabel}
⚡ Features: ${featureLabels || "None selected"}
🗓 Timeline: ${timelineLabel}
━━━━━━━━━━━━━━━━━━━━━━
💰 Budget Estimate: $${estimate.low.toLocaleString()} — $${estimate.high.toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━

Name: ${name}
WhatsApp: ${whatsapp}

Sent from the project quote wizard.`;

    window.open(`https://wa.me/201112678333?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const canNext = () => {
    if (step === 1) return !!projectType;
    if (step === 3) return !!timeline;
    if (step === 4) return !!name && !!whatsapp;
    return true;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            zIndex: 9000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
            style={{
              background: "#070d1a",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "600px",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 0 0 1px rgba(99,102,241,0.1), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(99,102,241,0.05)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "1.75rem 2rem 1.25rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6366f1", marginBottom: "0.4rem" }}>Get a Free Quote</div>
                <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", fontFamily: "Outfit, sans-serif", lineHeight: 1.2 }}>What are you looking to build?</div>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  color: "#94a3b8",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  flexShrink: 0,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#94a3b8"; }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Progress */}
            <div style={{ height: "3px", background: "rgba(255,255,255,0.06)", flexShrink: 0 }}>
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ height: "100%", background: "linear-gradient(90deg, #6366f1, #a855f7)", borderRadius: "0 3px 3px 0" }}
              />
            </div>

            {/* Body */}
            <div style={{ flex: 1, overflowY: "auto", padding: "1.75rem 2rem", scrollbarWidth: "thin", scrollbarColor: "rgba(99,102,241,0.3) transparent" }}>
              <AnimatePresence mode="wait">
                {/* Step 1: Project Type */}
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px", marginTop: "1rem" }}>
                      {projectTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = projectType === type.id;
                        return (
                          <button
                            key={type.id}
                            onClick={() => setProjectType(type.id)}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              gap: "8px",
                              padding: "1.1rem 1rem",
                              background: isSelected ? "rgba(99,102,241,0.12)" : "rgba(255,255,255,0.03)",
                              border: `1px solid ${isSelected ? "#6366f1" : "rgba(255,255,255,0.08)"}`,
                              borderRadius: "14px",
                              cursor: "pointer",
                              transition: "all 0.2s",
                              textAlign: "left",
                              boxShadow: isSelected ? "0 0 20px rgba(99,102,241,0.2)" : "none",
                            }}
                          >
                            <Icon size={20} style={{ color: isSelected ? "#93c5fd" : "#a855f7" }} />
                            <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#e2e8f0" }}>{type.label}</div>
                            <div style={{ fontSize: "0.75rem", color: "#64748b", lineHeight: 1.4 }}>{type.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Features */}
                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1rem" }}>Select all that apply — skip if unsure.</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      {features.map((feat) => {
                        const isSelected = selectedFeatures.includes(feat.id);
                        return (
                          <button
                            key={feat.id}
                            onClick={() => toggleFeature(feat.id)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              padding: "0.85rem 1rem",
                              background: isSelected ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.03)",
                              border: `1px solid ${isSelected ? "#6366f1" : "rgba(255,255,255,0.08)"}`,
                              borderRadius: "12px",
                              cursor: "pointer",
                              transition: "all 0.2s",
                              textAlign: "left",
                            }}
                          >
                            <div style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "6px",
                              border: `1.5px solid ${isSelected ? "#6366f1" : "rgba(255,255,255,0.2)"}`,
                              background: isSelected ? "#6366f1" : "rgba(255,255,255,0.04)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              transition: "all 0.2s",
                            }}>
                              {isSelected && <Check size={12} style={{ color: "#fff" }} />}
                            </div>
                            <div>
                              <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#e2e8f0" }}>{feat.label}</div>
                              <div style={{ fontSize: "0.72rem", color: "#64748b" }}>{feat.desc}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Timeline */}
                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginTop: "1rem" }}>
                      {timelines.map((tl) => {
                        const isSelected = timeline === tl.id;
                        return (
                          <button
                            key={tl.id}
                            onClick={() => setTimeline(tl.id)}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "6px",
                              padding: "1.25rem 0.75rem",
                              background: isSelected ? "rgba(99,102,241,0.12)" : "rgba(255,255,255,0.03)",
                              border: `1px solid ${isSelected ? "#6366f1" : "rgba(255,255,255,0.08)"}`,
                              borderRadius: "14px",
                              cursor: "pointer",
                              transition: "all 0.2s",
                              textAlign: "center",
                              boxShadow: isSelected ? "0 0 20px rgba(99,102,241,0.2)" : "none",
                            }}
                          >
                            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e2e8f0" }}>{tl.label}</div>
                            <div style={{ fontSize: "0.72rem", color: "#64748b" }}>{tl.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact */}
                {step === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8" }}>
                        Your Name
                        <input
                          type="text"
                          placeholder="Ahmed Mohamed"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          style={{
                            padding: "0.85rem 1rem",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "10px",
                            color: "#fff",
                            fontSize: "0.95rem",
                            fontFamily: "Inter, sans-serif",
                            outline: "none",
                            transition: "all 0.2s",
                          }}
                          onFocus={(e) => { e.target.style.borderColor = "#6366f1"; e.target.style.background = "rgba(99,102,241,0.06)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.04)"; e.target.style.boxShadow = "none"; }}
                        />
                      </label>
                      <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8" }}>
                        WhatsApp Number
                        <input
                          type="tel"
                          placeholder="+20 100 000 0000"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          style={{
                            padding: "0.85rem 1rem",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "10px",
                            color: "#fff",
                            fontSize: "0.95rem",
                            fontFamily: "Inter, sans-serif",
                            outline: "none",
                            transition: "all 0.2s",
                          }}
                          onFocus={(e) => { e.target.style.borderColor = "#6366f1"; e.target.style.background = "rgba(99,102,241,0.06)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.04)"; e.target.style.boxShadow = "none"; }}
                        />
                      </label>
                      <p style={{ fontSize: "0.78rem", color: "#475569", marginTop: "0.5rem" }}>Your info is only used to contact you. Never shared.</p>
                    </div>
                  </motion.div>
                )}

                {/* Result */}
                {step === 5 && (
                  <motion.div key="result" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                    {(() => {
                      const estimate = getEstimate();
                      const typeLabel = projectTypes.find((t) => t.id === projectType)?.label || projectType;
                      const timelineLabel = timelines.find((t) => t.id === timeline)?.label || timeline;
                      return (
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                          <div style={{ textAlign: "center", padding: "2rem", background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(99,102,241,0.06))", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "18px" }}>
                            <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a855f7", marginBottom: "0.75rem" }}>Estimated Budget Range</div>
                            <div style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 900, color: "#fff", fontFamily: "Outfit, sans-serif", lineHeight: 1, marginBottom: "0.5rem" }}>
                              ${estimate.low.toLocaleString()} — ${estimate.high.toLocaleString()}
                            </div>
                            <div style={{ fontSize: "0.82rem", color: "#64748b" }}>Based on your project requirements</div>
                          </div>

                          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", overflow: "hidden" }}>
                            {[
                              { label: "Type:", value: typeLabel },
                              { label: "Timeline:", value: timelineLabel },
                              { label: "Features:", value: `${selectedFeatures.length} selected` },
                            ].map((row, i) => (
                              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1.25rem", fontSize: "0.88rem", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                                <span style={{ color: "#64748b" }}>{row.label}</span>
                                <span style={{ color: "#e2e8f0", fontWeight: 600 }}>{row.value}</span>
                              </div>
                            ))}
                          </div>

                          <button
                            onClick={sendToWhatsApp}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "12px",
                              width: "100%",
                              padding: "1rem 1.5rem",
                              background: "linear-gradient(135deg, #10b981, #1da851)",
                              border: "none",
                              borderRadius: "14px",
                              color: "#fff",
                              fontSize: "1rem",
                              fontWeight: 700,
                              cursor: "pointer",
                              fontFamily: "Inter, sans-serif",
                              boxShadow: "0 8px 24px rgba(16,185,129,0.3)",
                              transition: "all 0.3s",
                            }}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.523 5.845L.057 23.27a.75.75 0 00.92.92l5.425-1.466A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                            </svg>
                            Send to WhatsApp & Get Started
                          </button>
                          <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#475569" }}>I&apos;ll reply within a few hours to discuss details.</p>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {step < 5 && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 2rem 1.75rem", borderTop: "1px solid rgba(255,255,255,0.05)", flexShrink: 0 }}>
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "0.7rem 1.4rem",
                      borderRadius: "50px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "Inter, sans-serif",
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#94a3b8",
                      transition: "all 0.2s",
                    }}
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                ) : <div />}

                <button
                  onClick={() => {
                    if (step < 4) setStep(step + 1);
                    else setStep(5);
                  }}
                  disabled={!canNext()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "0.7rem 1.4rem",
                    borderRadius: "50px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: canNext() ? "pointer" : "not-allowed",
                    fontFamily: "Inter, sans-serif",
                    background: "#6366f1",
                    border: "none",
                    color: "#fff",
                    boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
                    transition: "all 0.2s",
                    opacity: canNext() ? 1 : 0.4,
                  }}
                >
                  {step === 4 ? "Get My Estimate" : "Continue"} <ArrowRight size={14} />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

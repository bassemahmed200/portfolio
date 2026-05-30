"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { plans } from "@/data/portfolio";

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const paymentOptions = [
  { key: "cash" as const, label: "Pay Upfront" },
  { key: "s3" as const, label: "3 Months" },
  { key: "s6" as const, label: "6 Months" },
];

function PaymentSelector({ payment, selected, onChange }: { payment: (typeof plans.projects)[0]["payment"]; selected: string; onChange: (v: "cash" | "s3" | "s6") => void }) {
  if (!payment) return null;
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569" }}>Choose payment plan:</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
        {paymentOptions.map((opt) => (
          <button
            key={opt.key}
            onClick={() => onChange(opt.key)}
            style={{
              padding: "7px 6px",
              borderRadius: "9px",
              background: selected === opt.key ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${selected === opt.key ? "rgba(99,102,241,0.4)" : "rgba(255,255,255,0.07)"}`,
              color: selected === opt.key ? "#93c5fd" : "#64748b",
              fontSize: "0.78rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "Inter, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {selected === "cash" && (
        <div style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.07), rgba(99,102,241,0.04))", border: "1px solid rgba(99,102,241,0.15)", borderRadius: "10px", padding: "0.75rem 0.9rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
            <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", fontFamily: "Outfit, sans-serif", lineHeight: 1 }}>{payment.cash.total}</span>
            <span style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", color: "#34d399", fontSize: "0.72rem", fontWeight: 700, padding: "3px 10px", borderRadius: "50px", whiteSpace: "nowrap" }}>Save {payment.cash.save}</span>
          </div>
          <div style={{ fontSize: "0.72rem", color: "#475569", lineHeight: 1.4 }}>Full payment · 50% to start, 50% on delivery</div>
        </div>
      )}
      {selected === "s3" && (
        <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "0.75rem 0.9rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
            <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", fontFamily: "Outfit, sans-serif", lineHeight: 1 }}>{payment.s3.monthly}<span style={{ fontSize: "0.82rem", fontWeight: 500, color: "#64748b" }}>/mo</span></span>
            <span style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 500 }}>Total: {payment.s3.total}</span>
          </div>
          <div style={{ fontSize: "0.72rem", color: "#475569", lineHeight: 1.4 }}>3 equal monthly payments · fixed price, no changes</div>
        </div>
      )}
      {selected === "s6" && (
        <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "0.75rem 0.9rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
            <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", fontFamily: "Outfit, sans-serif", lineHeight: 1 }}>{payment.s6.monthly}<span style={{ fontSize: "0.82rem", fontWeight: 500, color: "#64748b" }}>/mo</span></span>
            <span style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 500 }}>Total: {payment.s6.total}</span>
          </div>
          <div style={{ fontSize: "0.72rem", color: "#475569", lineHeight: 1.4 }}>6 equal monthly payments · fixed price, no changes</div>
        </div>
      )}
    </div>
  );
}

function PlanCard({ plan, planType, paymentType }: { plan: (typeof plans.projects)[0] | (typeof plans.care)[0]; planType: "projects" | "care"; paymentType: "cash" | "s3" | "s6" }) {
  const isProject = planType === "projects";
  const p = plan as (typeof plans.projects)[0];
  const c = plan as (typeof plans.care)[0];
  const accentColor = planType === "care" ? "#10b981" : "#6366f1";

  let priceDisplay = "";
  if (isProject && p.payment) {
    const pay = p.payment[paymentType] as { total: string; save?: string; monthly?: string; label: string };
    priceDisplay = paymentType === "cash" ? pay.total : `${pay.monthly}/mo`;
  } else if (!isProject && c.price) {
    priceDisplay = c.price;
  }

  const handleWhatsApp = () => {
    let msg = "";
    if (isProject && p.payment) {
      const pay = p.payment[paymentType] as { total: string; save?: string; monthly?: string; label: string };
      msg = `${p.cta === "Start Landing Page" ? "Hi Bassem! I'm interested in the Landing Page package." : p.cta === "Start Business Site" ? "Hi Bassem! I'm interested in the Business Website package." : "Hi Bassem! I have a Web Application idea."} Payment plan: ${paymentType === "cash" ? `Upfront (${pay.total})` : paymentType === "s3" ? `3 months at ${pay.monthly}/mo (total ${pay.total})` : `6 months at ${pay.monthly}/mo (total ${pay.total})`}. Can we discuss?`;
    } else {
      msg = `Hi Bassem! I'm interested in the ${c.name} plan.`;
    }
    window.open(`https://api.whatsapp.com/send/?phone=201069789256?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div
      className={`plans-card glass-card ${plan.recommended ? "plans-card--recommended" : ""}`}
      style={{
        borderRadius: "20px",
        padding: "clamp(1.5rem, 3vw, 2rem)",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        position: "relative",
      }}
    >
      {"badge" in plan && plan.badge && (
        <div style={{
          position: "absolute",
          top: "-14px",
          left: "50%",
          transform: "translateX(-50%)",
          background: planType === "care" ? "linear-gradient(135deg,#10b981,#059669)" : "linear-gradient(135deg,#6366f1,#6366f1)",
          color: "#fff",
          fontSize: "0.68rem",
          fontWeight: 800,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "5px 16px",
          borderRadius: "50px",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
        }}>
          {plan.badge}
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", fontFamily: "Outfit, sans-serif" }}>{plan.name}</h3>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
          <span style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 900, color: "#fff", fontFamily: "Outfit, sans-serif", lineHeight: 1, transition: "all 0.25s" }}>{priceDisplay}</span>
        </div>
        <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.5 }}>{plan.desc}</p>
      </div>

      {isProject && p.payment && <PaymentSelector payment={p.payment} selected={paymentType} onChange={() => {}} />}

      {!isProject && c.billingNote && (
        <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "0.8rem", color: "#64748b", padding: "0.6rem 0" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
          {c.billingNote}
        </div>
      )}

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", flex: 1, padding: 0, margin: 0 }}>
        {plan.features.map((feature) => (
          <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.88rem", color: "#cbd5e1", lineHeight: 1.4 }}>
            <span style={{ flexShrink: 0, display: "flex", marginTop: "1px", color: accentColor }}><CheckIcon /></span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleWhatsApp}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
          padding: "0.85rem 1rem",
          background: plan.recommended ? (planType === "care" ? "linear-gradient(135deg,#10b981,#059669)" : "#6366f1") : "rgba(255,255,255,0.06)",
          border: `1px solid ${plan.recommended ? accentColor : "rgba(255,255,255,0.1)"}`,
          borderRadius: "12px",
          color: "#e2e8f0",
          fontSize: "0.9rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.25s",
          fontFamily: "Inter, sans-serif",
          ...(plan.recommended ? { color: "#fff", boxShadow: "0 6px 24px rgba(99,102,241,0.35)" } : {}),
        }}
      >
        {plan.cta}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

export function PlansSection({ onOpenWizard }: { onOpenWizard?: () => void }) {
  const [planType, setPlanType] = useState<"projects" | "care">("projects");
  const [paymentType, setPaymentType] = useState<"cash" | "s3" | "s6">("cash");
  const currentPlans = planType === "projects" ? plans.projects : plans.care;

  return (
    <section id="plans" className="section-dark" style={{ padding: "var(--section-padding) 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 56px)" }}
        >
          <span className="section-label">Pricing</span>
          <h2 className="section-heading">Simple, Transparent Pricing</h2>
          <p className="section-subheading" style={{ margin: "1rem auto 0", maxWidth: "540px" }}>
            Need something built? Or want to keep what you have running at its best? I have a plan for both.
          </p>

          <div className="plans-switcher" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "2.25rem", flexWrap: "wrap" }}>
            <button
              onClick={() => setPlanType("projects")}
              className={`plans-switch-btn ${planType === "projects" ? "plans-switch-btn--active" : ""}`}
              aria-pressed={planType === "projects"}
              onMouseEnter={(e) => {
                if (planType !== "projects") {
                  e.currentTarget.style.background = "#0f0f18";
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(59,130,246,0.3), inset 0 0 12px rgba(59,130,246,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (planType !== "projects") {
                  e.currentTarget.style.background = "#0a0a0f";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
                }
              }}
            >
              <div className="plans-switch-btn__icon" style={{ background: planType === "projects" ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.05)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <div style={{ textAlign: "left" }}>
                <div className="plans-switch-btn__title">Build a Project</div>
                <div className="plans-switch-btn__sub">One-time website or app</div>
              </div>
            </button>

            <div className="plans-switch-divider"><span>or</span></div>

            <button
              onClick={() => setPlanType("care")}
              className={`plans-switch-btn ${planType === "care" ? "plans-switch-btn--active plans-switch-btn--green" : ""}`}
              aria-pressed={planType === "care"}
              onMouseEnter={(e) => {
                if (planType !== "care") {
                  e.currentTarget.style.background = "#0f0f18";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(16,185,129,0.3), inset 0 0 12px rgba(16,185,129,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (planType !== "care") {
                  e.currentTarget.style.background = "#0a0a0f";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
                }
              }}
            >
              <div className="plans-switch-btn__icon" style={{ background: planType === "care" ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.05)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div style={{ textAlign: "left" }}>
                <div className="plans-switch-btn__title">Maintain My Site</div>
                <div className="plans-switch-btn__sub">Monthly care & hosting</div>
              </div>
            </button>
          </div>

          <p className="plans-context-label" style={{ marginTop: "1rem", fontSize: "0.82rem", color: "#475569", fontStyle: "italic" }}>
            {planType === "projects" ? "One-time investment. I build it, you own it." : "Hosting included. Cancel anytime. No lock-in."}
          </p>
        </motion.div>

        <div className="plans-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
          <AnimatePresence mode="wait">
            {currentPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              >
                <PlanCard plan={plan} planType={planType} paymentType={paymentType} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginTop: "clamp(40px, 6vw, 64px)" }}
        >
          <p style={{ color: "#64748b", marginBottom: "1.25rem", fontSize: "1rem" }}>
            Not sure what fits? Get an instant estimate tailored to your project in 2 minutes.
          </p>
          <button
            onClick={onOpenWizard}
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "14px 36px", display: "inline-flex", alignItems: "center", gap: "8px", border: "none", cursor: "pointer" }}
          >
            Get a Free Instant Estimate
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </motion.div>
      </div>

      <style>{`
        .plans-switcher { display: flex; align-items: center; justify-content: center; gap: 0; margin-top: 2.25rem; flex-wrap: wrap; gap: 0.5rem; }
        .plans-switch-btn {
          display: flex; align-items: center; gap: 0.85rem; padding: 1rem 1.5rem;
          background: #0a0a0f; border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 16px; cursor: pointer; transition: all 0.25s; font-family: 'Inter', sans-serif; min-width: 210px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .plans-switch-btn:hover { background: #0f0f18; border-color: rgba(255,255,255,0.2); box-shadow: 0 8px 30px rgba(0,0,0,0.4); }
        .plans-switch-btn--active { background: #0a0a0f !important; border-color: #6366f1 !important; box-shadow: 0 0 30px rgba(99,102,241,0.3), 0 8px 30px rgba(0,0,0,0.4) !important; }
        .plans-switch-btn--active.plans-switch-btn--green { background: #0a0a0f !important; border-color: #10b981 !important; box-shadow: 0 0 30px rgba(16,185,129,0.3), 0 8px 30px rgba(0,0,0,0.4) !important; }
        .plans-switch-btn__icon {
          width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center;
          justify-content: center; flex-shrink: 0; color: #94a3b8; transition: all 0.25s;
        }
        .plans-switch-btn--active .plans-switch-btn__icon { color: #c084fc; }
        .plans-switch-btn--active.plans-switch-btn--green .plans-switch-btn__icon { color: #34d399; }
        .plans-switch-btn__title { font-size: 0.95rem; font-weight: 700; color: #e2e8f0; font-family: 'Outfit', sans-serif; }
        .plans-switch-btn__sub { font-size: 0.75rem; color: #64748b; margin-top: 1px; }
        .plans-switch-divider { display: flex; align-items: center; padding: 0 0.75rem; color: #64748b; font-size: 0.8rem; font-weight: 500; }
        .plans-card { transition: all 0.3s; }
        .plans-card:hover { border-color: rgba(99,102,241,0.5); background: #0f0f18 !important; transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(99,102,241,0.15); }
        @media (max-width: 640px) {
          .plans-switcher { flex-direction: column; align-items: stretch; }
          .plans-switch-btn { min-width: unset; }
          .plans-switch-divider { justify-content: center; padding: 0; }
        }
      `}</style>
    </section>
  );
}

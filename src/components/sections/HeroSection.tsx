"use client";

import { Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(
  () =>
    import("@/components/three/ThreeScene").then((mod) => ({
      default: mod.ThreeScene,
    })),
  { ssr: false }
);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>

      <div className="liquid-blob liquid-blob--blue w-[600px] h-[600px] -top-40 -left-40" />
      <div className="liquid-blob liquid-blob--light w-[400px] h-[400px] top-1/2 -right-20" />

      <motion.div style={{ y, opacity }} className="relative z-10 container text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
          <motion.div variants={itemVariants} className="flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            <span className="text-sm font-medium text-green-400">{personalInfo.availability}</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            Hi, I&apos;m{" "}
            <span style={{ background: "linear-gradient(135deg, #818cf8, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 25px rgba(99,102,241,0.5))" }}>{personalInfo.name.split(" ")[0]}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-light text-[#b0b8c8]">
            {personalInfo.title}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <motion.a
              href="#projects"
              className="btn-glass"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.4), inset 0 0 15px rgba(59,130,246,0.1)", borderColor: "rgba(59,130,246,0.3)", background: "rgba(59,130,246,0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={18} />
              Get a Quote
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-12 pt-16">
            {[
              { value: "4+", label: "Years" },
              { value: "47+", label: "Projects" },
              { value: "27+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-sm text-[#64748b] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightedWord: string;
  description?: string;
}

export function SectionHeader({
  badge,
  title,
  highlightedWord,
  description,
}: SectionHeaderProps) {
  const words = title.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        {badge}
      </motion.div>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {words.map((word, i) => (
          <span key={i}>
            {word === highlightedWord ? (
              <span className="gradient-text">{word} </span>
            ) : (
              <span>{word} </span>
            )}
          </span>
        ))}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

const items = [
  "Nada novo pra aprender — funciona dentro do que você já usa",
  "Feito pro seu negócio, não um template genérico",
  "No ar em dias, não em meses",
  "Seus dados e ferramentas continuam seus, sempre",
  "A gente só te avisa quando realmente precisa de um humano",
  "Preço por entrega, nunca por hora",
];

export default function DiffSection() {
  return (
    <section className="bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-black text-[var(--navy)] mb-10"
          style={{
            fontFamily: "var(--font-bricolage)",
            fontSize: "clamp(1.75rem, 5vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: "24ch",
          }}
        >
          Por que isso não é só mais um app
        </motion.h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="relative pl-7 font-medium text-[var(--text-mid)] leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.1rem)" }}
            >
              <span className="absolute left-0 top-0 font-bold text-[var(--saffron)]">+</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

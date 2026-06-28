"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n/context";

const items = {
  pt: [
    "Nada novo pra aprender — funciona dentro do que você já usa",
    "Feito pro seu negócio, não um template genérico",
    "No ar em dias, não em meses",
    "Seus dados e ferramentas continuam seus, sempre",
    "A gente só te avisa quando realmente precisa de um humano",
    "Preço por entrega, nunca por hora",
  ],
  en: [
    "Nothing new to learn — it runs inside what you already use",
    "Built for your business, not a generic template",
    "Live in days, not months",
    "Your data and tools stay yours, always",
    "We only ping you when a human is actually needed",
    "Priced per delivery, never by the hour",
  ],
};

export default function DiffSection() {
  const { lang } = useLang();
  const _ = (en: string, pt: string) => lang === "en" ? en : pt;

  return (
    <section className="min-h-screen flex flex-col justify-center bg-[var(--bg)]">
      <div
        style={{
          maxWidth: "1280px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "clamp(1.5rem, 6vw, 6rem)",
          paddingRight: "clamp(1.5rem, 6vw, 6rem)",
          paddingTop: "7rem",
          paddingBottom: "7rem",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-black text-[var(--navy)]"
          style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", lineHeight: 1.03, letterSpacing: "-0.025em", maxWidth: "24ch", marginBottom: "3.5rem" }}
        >
          {_("Why this isn't just another app", "Por que isso não é só mais um app")}
        </motion.h2>

        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", columnGap: "5rem", rowGap: "1.75rem" }}>
          {items[lang].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="font-medium text-[var(--text-mid)] leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.1rem)", paddingLeft: "2rem", position: "relative" }}
            >
              <span style={{ position: "absolute", left: 0, top: 0, fontWeight: 700, color: "var(--saffron)" }}>+</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

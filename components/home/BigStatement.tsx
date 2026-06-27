"use client";

import { motion } from "framer-motion";

const proofCards = [
  { val: "90%", label: "de tarefas manuais\neliminadas", accent: "indigo", pos: "left-[4%] top-[20%]" },
  { val: "48h", label: "do briefing\nao ar", accent: "saffron", pos: "right-[4%] top-[18%]" },
  { val: "3×", label: "mais clientes\natendidos", accent: "saffron", pos: "left-[4%] bottom-[18%]" },
  { val: "0", label: "apps novos\npra aprender", accent: "indigo", pos: "right-[4%] bottom-[20%]" },
];

const lines = ["Negócio que roda", "sozinho não é", "mais sonho."];

export default function BigStatement() {
  return (
    <section className="relative bg-[var(--bg-card)] min-h-screen flex flex-col justify-center overflow-hidden">
      {proofCards.map((c, i) => (
        <motion.div
          key={c.val + i}
          className={`absolute hidden xl:flex xl:flex-col ${c.pos} rounded-2xl px-8 py-7`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: c.accent === "indigo" ? "rgba(67,97,238,0.05)" : "rgba(245,166,35,0.07)",
            border: `1px solid ${c.accent === "indigo" ? "rgba(67,97,238,0.18)" : "rgba(245,166,35,0.22)"}`,
          }}
        >
          <p
            className="font-black text-[2.8rem] leading-none tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-bricolage)", color: c.accent === "indigo" ? "var(--indigo)" : "var(--saffron)" }}
          >
            {c.val}
          </p>
          <p className="text-[0.72rem] text-[var(--text-mid)] mt-2 leading-snug whitespace-pre-line max-w-[12ch]">
            {c.label}
          </p>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto w-full px-6 sm:px-10 py-24 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[0.65rem] font-bold tracking-[0.16em] uppercase text-[var(--indigo)] opacity-60 mb-10 block"
        >
          Resultados que acontecem
        </motion.span>

        <h2
          className="font-black leading-[0.92] tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
        >
          {lines.map((line, i) => (
            <span key={line} style={{ display: "block", overflow: "hidden", paddingBottom: "0.04em" }}>
              <motion.span
                style={{ display: "block", color: i === 2 ? "var(--indigo)" : "var(--navy)" }}
                initial={{ y: "105%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.13, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 text-[1.05rem] leading-relaxed text-[var(--text-mid)] max-w-[38ch] mx-auto"
        >
          Nossos clientes param de ser o gargalo do próprio negócio — em menos de uma semana.
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const items = [
  "Você faz vendas, atendimento, financeiro e marketing — sozinha, ou com mais duas pessoas exaustas",
  "Seu negócio inteiro vive no WhatsApp e numa planilha muito importante",
  "Sem orçamento de agência, mas você paga por resultado que vê essa semana",
  "Você não quer aprender mais uma ferramenta — quer menos coisa pra fazer",
  "A IA cuida dos 90% repetitivos, desde que um humano entre nos outros 10%",
];

export default function WhoSection() {
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
          style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", lineHeight: 1.03, letterSpacing: "-0.025em", maxWidth: "22ch", marginBottom: "3.5rem" }}
        >
          Feito pra quem segura tudo sozinho
        </motion.h2>

        <ul style={{ display: "flex", flexDirection: "column", gap: "1.75rem", maxWidth: "52rem" }}>
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-[var(--text-mid)] leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)", paddingLeft: "2rem", position: "relative" }}
            >
              <span style={{ position: "absolute", left: 0, top: 0, fontWeight: 700, color: "var(--saffron)" }}>—</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

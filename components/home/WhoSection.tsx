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
            maxWidth: "22ch",
          }}
        >
          Feito pra quem segura tudo sozinho
        </motion.h2>

        <ul className="flex flex-col gap-5 max-w-[48rem]">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative pl-7 text-[var(--text-mid)] leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              <span className="absolute left-0 top-0 font-bold text-[var(--saffron)]">—</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

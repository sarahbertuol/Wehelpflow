"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n/context";

const items = {
  pt: [
    "Você faz vendas, atendimento, financeiro e marketing — sozinha, ou com mais duas pessoas exaustas",
    "Seu negócio inteiro vive no WhatsApp e numa planilha muito importante",
    "Sem orçamento de agência, mas você paga por resultado que vê essa semana",
    "Você não quer aprender mais uma ferramenta — quer menos coisa pra fazer",
    "A IA cuida dos 90% repetitivos, desde que um humano entre nos outros 10%",
  ],
  en: [
    "You do sales, support, finance, and marketing — solo, or with two other tired people",
    "Your whole business lives in WhatsApp and one very important spreadsheet",
    "No agency budget, but you'll pay for a result you can see this week",
    "You don't want to learn another tool — you want fewer things to do",
    "AI can handle the repetitive 90%, as long as a human steps in for the other 10%",
  ],
};

export default function WhoSection() {
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
          style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(2rem, 5vw, 3.4rem)", lineHeight: 0.97, letterSpacing: "-0.01em", textTransform: "uppercase", maxWidth: "22ch", marginBottom: "3.5rem" }}
        >
          {_("Built for the one-person army", "Feito pra quem segura tudo sozinho")}
        </motion.h2>

        <ul style={{ display: "flex", flexDirection: "column", gap: "1.75rem", maxWidth: "52rem" }}>
          {items[lang].map((item, i) => (
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

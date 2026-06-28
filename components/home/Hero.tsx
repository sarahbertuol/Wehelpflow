"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const containerStyle = {
  maxWidth: "1280px",
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "clamp(1.5rem, 6vw, 6rem)",
  paddingRight: "clamp(1.5rem, 6vw, 6rem)",
};

export default function Hero() {
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 700], [0, -120]);
  const blob2Y = useTransform(scrollY, [0, 700], [0, 160]);
  const blob3Y = useTransform(scrollY, [0, 700], [0, -60]);
  const blob4Y = useTransform(scrollY, [0, 700], [0, 80]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[var(--bg)]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div className="absolute" style={{ top: -220, left: -180, y: blob1Y }}>
          <div className="blob-1 rounded-full" style={{ width: 780, height: 700, background: "radial-gradient(ellipse at center, rgba(67,97,238,0.22) 0%, rgba(123,97,255,0.1) 45%, transparent 72%)", filter: "blur(60px)" }} />
        </motion.div>
        <motion.div className="absolute" style={{ bottom: -180, right: -140, y: blob2Y }}>
          <div className="blob-2 rounded-full" style={{ width: 700, height: 620, background: "radial-gradient(ellipse at center, rgba(245,166,35,0.25) 0%, rgba(255,209,102,0.12) 45%, transparent 72%)", filter: "blur(55px)" }} />
        </motion.div>
        <motion.div className="absolute" style={{ top: "35%", right: "8%", y: blob3Y }}>
          <div className="blob-3 rounded-full" style={{ width: 420, height: 380, background: "radial-gradient(ellipse at center, rgba(67,97,238,0.12) 0%, transparent 68%)", filter: "blur(70px)" }} />
        </motion.div>
        <motion.div className="absolute" style={{ top: -60, left: "52%", y: blob4Y }}>
          <div className="blob-4 rounded-full" style={{ width: 340, height: 300, background: "radial-gradient(ellipse at center, rgba(255,209,102,0.18) 0%, transparent 68%)", filter: "blur(65px)" }} />
        </motion.div>
      </div>

      <div
        className="relative z-10 flex-1 flex flex-col justify-center"
        style={{ ...containerStyle, paddingTop: "calc(5rem + 73px)", paddingBottom: "5rem" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-[var(--navy)]"
          style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(2.8rem, 9vw, 6rem)", lineHeight: 1.02, letterSpacing: "-0.025em", maxWidth: "20ch" }}
        >
          Pare de tocar seu negócio na mão.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-[var(--text-mid)] leading-relaxed"
          style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)", maxWidth: "42ch", marginTop: "2rem" }}
        >
          A wehelpflow encaixa automação com IA direto no negócio que você já tem — site, e-mail, cobrança, WhatsApp — pra que as partes que não precisam de você parem de precisar de você.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "3rem" }}
        >
          <Link
            href="/servicos"
            className="inline-flex items-center justify-center font-bold rounded-full text-white transition-all hover:opacity-90 active:scale-[0.97] whitespace-nowrap"
            style={{ fontSize: "1rem", padding: "1rem 2.5rem", background: "linear-gradient(135deg, var(--indigo), var(--indigo-2))", boxShadow: "0 6px 28px rgba(67,97,238,0.35)" }}
          >
            Veja o que automatizamos
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center font-bold rounded-full text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-all active:scale-[0.97] whitespace-nowrap"
            style={{ fontSize: "1rem", padding: "1rem 2.5rem", border: "2px solid var(--navy)" }}
          >
            Falar com um humano →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

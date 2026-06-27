"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { modules } from "@/lib/data/navigation";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const floatCards = [
  { id: "setup", label: "Tempo de setup", value: "48h", sub: "do briefing ao ar", accent: false, pos: "left-8 top-1/2 -translate-y-1/2" },
  { id: "apps", label: "Apps novos pra aprender", value: "0", sub: "funciona no que você já usa", accent: true, pos: "right-8 top-[38%] -translate-y-1/2" },
  { id: "clients", label: "Clientes ativos", value: "127", sub: "+14 este mês", accent: false, pos: "right-8 bottom-20" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[var(--bg)]">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.04] pointer-events-none"
        autoPlay muted loop playsInline aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="blob-1 absolute rounded-full" style={{ width: 780, height: 700, top: -220, left: -180, background: "radial-gradient(ellipse at center, rgba(67,97,238,0.28) 0%, rgba(123,97,255,0.12) 45%, transparent 72%)", filter: "blur(60px)" }} />
        <div className="blob-2 absolute rounded-full" style={{ width: 700, height: 620, bottom: -180, right: -140, background: "radial-gradient(ellipse at center, rgba(245,166,35,0.32) 0%, rgba(255,209,102,0.14) 45%, transparent 72%)", filter: "blur(55px)" }} />
        <div className="blob-3 absolute rounded-full" style={{ width: 420, height: 380, top: "35%", right: "8%", background: "radial-gradient(ellipse at center, rgba(67,97,238,0.16) 0%, transparent 68%)", filter: "blur(70px)" }} />
        <div className="blob-4 absolute rounded-full" style={{ width: 340, height: 300, top: -60, left: "52%", background: "radial-gradient(ellipse at center, rgba(255,209,102,0.2) 0%, transparent 68%)", filter: "blur(65px)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        {/* Eyebrow */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.14em] uppercase text-[var(--indigo)] mb-8"
        >
          <span className="w-5 h-0.5 bg-[var(--indigo)] rounded-full" />
          Automação com IA para pequenos negócios
        </motion.div>

        {/* Headline — mask reveal por linha */}
        <h1
          className="font-black leading-[0.9] tracking-[-0.04em] text-[var(--navy)]"
          style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(3.5rem, 9vw, 6.5rem)" }}
        >
          {["Chega.", "De fazer"].map((line, i) => (
            <span key={line} style={{ display: "block", overflow: "hidden", paddingBottom: "0.05em" }}>
              <motion.span
                style={{ display: "block" }}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.1 + i * 0.18, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.05em" }}>
            <motion.span
              style={{ display: "block" }}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 0.46, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={{ color: "var(--indigo)" }}>na</span>{" "}
              <span style={{ color: "var(--saffron)" }}>mão.</span>
            </motion.span>
          </span>
        </h1>

        {/* Sub */}
        <motion.p
          custom={0.7}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-9 text-[1.05rem] leading-relaxed text-[var(--text-mid)] max-w-[44ch]"
        >
          A wehelpflow encaixa automação com IA direto no negócio que você já
          tem — seu site, seu inbox, sua cobrança, seu WhatsApp — no ar em
          dias, sem apps novos.
        </motion.p>

        {/* Buttons */}
        <motion.div
          custom={0.95}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          <Link
            href="/servicos"
            className="text-sm font-semibold px-8 py-4 rounded-full text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, var(--indigo), var(--indigo-2))", boxShadow: "0 6px 28px rgba(67,97,238,0.35)" }}
          >
            Ver o que automatizamos →
          </Link>
          <Link
            href="/contato"
            className="text-sm font-semibold px-8 py-4 rounded-full text-[var(--navy)] transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-2))", boxShadow: "0 4px 20px rgba(245,166,35,0.3)" }}
          >
            Começar agora
          </Link>
          <Link
            href="/contato"
            className="text-sm font-semibold px-8 py-4 rounded-full border border-[var(--indigo)]/30 text-[var(--text-mid)] hover:border-[var(--indigo)]/60 transition-colors"
          >
            Falar com um humano
          </Link>
        </motion.div>

        {/* Module pills */}
        <motion.div
          custom={1.15}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-2 justify-center mt-8"
        >
          {modules.map((m, i) => (
            <Link
              key={m.href}
              href={m.href}
              className="text-[0.62rem] font-bold tracking-[0.08em] uppercase px-4 py-2 rounded-full border transition-colors hover:opacity-80"
              style={
                i < 3
                  ? { color: "var(--indigo)", borderColor: "rgba(67,97,238,0.3)", background: "rgba(67,97,238,0.06)" }
                  : { color: "#B87D12", borderColor: "rgba(245,166,35,0.35)", background: "rgba(245,166,35,0.08)" }
              }
            >
              {m.label}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Floating stat cards */}
      {floatCards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute hidden lg:block z-20 ${card.pos} rounded-2xl px-6 py-5 backdrop-blur-xl border`}
          style={{
            background: card.accent ? "rgba(67,97,238,0.08)" : "rgba(255,255,255,0.75)",
            borderColor: card.accent ? "rgba(67,97,238,0.2)" : "rgba(255,255,255,0.9)",
            boxShadow: "0 8px 32px rgba(67,97,238,0.1), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <p className="text-[0.58rem] font-bold tracking-[0.1em] uppercase text-[var(--text-mid)] opacity-60 mb-2">{card.label}</p>
          <p className="font-black text-[2rem] leading-none tracking-[-0.03em]" style={{ fontFamily: "var(--font-bricolage)", color: card.accent ? "var(--indigo)" : "var(--navy)" }}>{card.value}</p>
          <p className="text-[0.65rem] text-[var(--text-mid)] opacity-65 mt-1.5">{card.sub}</p>
        </motion.div>
      ))}

      {/* Live badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-8 z-20 hidden lg:flex items-center gap-2.5 rounded-xl px-4 py-3"
        style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-2))", boxShadow: "0 4px 18px rgba(245,166,35,0.35)" }}
      >
        <span className="animate-pulse-dot w-2 h-2 rounded-full bg-[var(--navy)]" aria-hidden="true" />
        <span className="text-[0.68rem] font-bold text-[var(--navy)] whitespace-nowrap">Ao vivo · 3 clientes em configuração</span>
      </motion.div>
    </section>
  );
}

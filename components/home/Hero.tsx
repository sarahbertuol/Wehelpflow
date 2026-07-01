"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/i18n/context";

const containerStyle = {
  maxWidth: "1280px",
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "clamp(1.5rem, 6vw, 6rem)",
  paddingRight: "clamp(1.5rem, 6vw, 6rem)",
};

export default function Hero() {
  const { lang } = useLang();
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 700], [0, -120]);
  const blob2Y = useTransform(scrollY, [0, 700], [0, 160]);
  const imgY  = useTransform(scrollY, [0, 600], [0, 50]);

  const _ = (en: string, pt: string) => lang === "en" ? en : pt;

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[var(--bg)]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div className="absolute" style={{ top: -220, left: -180, y: blob1Y }}>
          <div className="blob-1 rounded-full" style={{ width: 780, height: 700, background: "radial-gradient(ellipse at center, rgba(249,115,22,0.15) 0%, rgba(255,154,60,0.06) 45%, transparent 72%)", filter: "blur(60px)" }} />
        </motion.div>
        <motion.div className="absolute" style={{ bottom: -180, right: -140, y: blob2Y }}>
          <div className="blob-2 rounded-full" style={{ width: 700, height: 620, background: "radial-gradient(ellipse at center, rgba(249,115,22,0.18) 0%, rgba(255,179,71,0.08) 45%, transparent 72%)", filter: "blur(55px)" }} />
        </motion.div>
      </div>

      <div
        className="relative z-10 flex-1 flex items-center"
        style={{ ...containerStyle, paddingTop: "calc(5rem + 73px)", paddingBottom: "5rem", gap: "clamp(2rem, 5vw, 5rem)" }}
      >
        {/* ── Left: text ── */}
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="block font-bold uppercase"
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "var(--indigo)", marginBottom: "1.5rem" }}
          >
            {_("AI automation for your business", "Automação com IA para seu negócio")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-[var(--navy)]"
            style={{
              fontFamily: "var(--font-bricolage)",
              fontSize: "clamp(3rem, 9.5vw, 6.5rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            {lang === "en"
              ? <>Stop running your<br /><span style={{ color: "var(--indigo)" }}>business</span> by hand.</>
              : <>Pare de tocar seu<br /><span style={{ color: "var(--indigo)" }}>negócio</span> na mão.</>}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-[var(--text-mid)] leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", maxWidth: "42ch", marginTop: "2.25rem" }}
          >
            {_(
              "wehelpflow plugs straightforward AI automation into the business you already have — your site, your inbox, your billing, your WhatsApp — so the parts that don't need you finally stop needing you.",
              "A wehelpflow encaixa automação com IA direto no negócio que você já tem — site, e-mail, cobrança, WhatsApp — pra que as partes que não precisam de você parem de precisar de você."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "3rem" }}
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center font-bold rounded-full text-white transition-all hover:opacity-90 active:scale-[0.97] whitespace-nowrap uppercase"
              style={{ fontSize: "0.88rem", letterSpacing: "0.06em", padding: "1rem 2.5rem", background: "var(--indigo)", boxShadow: "0 6px 28px rgba(249,115,22,0.4)" }}
            >
              {_("See the 6 things we automate", "Veja o que automatizamos")}
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center font-bold rounded-full text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-all active:scale-[0.97] whitespace-nowrap uppercase"
              style={{ fontSize: "0.88rem", letterSpacing: "0.06em", padding: "1rem 2.5rem", border: "2px solid var(--navy)" }}
            >
              {_("Talk to a human →", "Falar com um humano →")}
            </Link>
          </motion.div>
        </div>

        {/* ── Right: image panel (desktop only) ── */}
        <motion.div
          className="hidden lg:block"
          style={{ width: "clamp(280px, 32vw, 440px)", flexShrink: 0 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ position: "relative", width: "100%", paddingBottom: "130%", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 32px 80px rgba(13,12,10,0.18)" }}>
            <motion.img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=80"
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", y: imgY }}
              loading="lazy"
            />
            {/* Orange accent strip */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "6px", background: "var(--indigo)" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

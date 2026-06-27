"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const lines = ["Pare de ser", "o gargalo", "do seu negócio."];

export default function FullWidthCTA() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 py-6">
      <section
        className="relative overflow-hidden rounded-3xl flex-1 flex flex-col justify-center"
        style={{ background: "linear-gradient(140deg, #09091A 0%, #0F1123 45%, #141830 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute -top-1/3 -left-1/4 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(67,97,238,0.22) 0%, transparent 65%)", filter: "blur(90px)" }}
          />
          <div
            className="absolute -bottom-1/3 -right-1/4 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(245,166,35,0.2) 0%, transparent 65%)", filter: "blur(90px)" }}
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto w-full px-8 sm:px-16 lg:px-24 py-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-10 block"
            style={{ color: "var(--saffron)", opacity: 0.75 }}
          >
            Automação com IA · Seu negócio
          </motion.p>

          <h2
            className="font-black leading-[0.88] tracking-[-0.04em] text-white"
            style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            {lines.map((line, i) => (
              <span key={line} style={{ display: "block", overflow: "hidden", paddingBottom: "0.05em" }}>
                <motion.span
                  style={{ display: "block", color: i === 2 ? "var(--saffron)" : "white" }}
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.14, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-semibold px-10 py-4 rounded-full text-[var(--navy)] hover:opacity-90 transition-all active:scale-[0.97] whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-2))", boxShadow: "0 6px 32px rgba(245,166,35,0.4)" }}
            >
              Começar agora →
            </Link>
            <Link
              href="/como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-semibold px-10 py-4 rounded-full text-white border border-white/25 hover:border-white/50 transition-all active:scale-[0.97] whitespace-nowrap"
            >
              Como funciona
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

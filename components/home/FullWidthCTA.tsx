"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const lines = ["Pare de ser", "o gargalo", "do seu negócio."];

export default function FullWidthCTA() {
  return (
    <div className="px-4 md:px-6 py-4">
      <section
        className="relative overflow-hidden rounded-3xl py-40 px-6"
        style={{ background: "linear-gradient(140deg, #09091A 0%, #0F1123 45%, #141830 100%)" }}
      >
        {/* Blobs */}
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

        <div className="relative z-10 text-center max-w-5xl mx-auto">
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
            className="mt-14 flex gap-4 justify-center flex-wrap"
          >
            <Link
              href="/contato"
              className="text-sm font-semibold px-8 py-4 rounded-full text-[var(--navy)] hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-2))", boxShadow: "0 6px 32px rgba(245,166,35,0.4)" }}
            >
              Começar agora →
            </Link>
            <Link
              href="/como-funciona"
              className="text-sm font-semibold px-8 py-4 rounded-full text-white border border-white/20 hover:border-white/50 transition-colors"
            >
              Como funciona
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

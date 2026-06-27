"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CareersCTA() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--indigo) 0%, var(--indigo-2) 100%)" }}
    >
      <span
        className="absolute right-[-0.04em] top-1/2 -translate-y-1/2 font-black text-[10rem] leading-none tracking-[-0.04em] text-white opacity-[0.06] pointer-events-none select-none"
        style={{ fontFamily: "var(--font-bricolage)" }}
        aria-hidden="true"
      >
        AGORA
      </span>
      <div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)", filter: "blur(50px)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[0.6rem] font-bold tracking-[0.14em] uppercase text-white/50 mb-4 block">Carreiras</span>
          <h2
            className="font-black text-[2.6rem] leading-[1.02] tracking-[-0.025em] text-white max-w-[22ch]"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Pronta pra parar<br />de ser o gargalo?
          </h2>
          <p className="mt-5 text-[0.95rem] text-white/55 max-w-[36ch] leading-relaxed">
            Se você acredita que automação deveria ser simples, acessível e
            entregue em dias — você pensa como a gente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
        >
          <Link
            href="/contato"
            className="text-sm font-semibold px-8 py-4 rounded-full text-[var(--navy)] hover:opacity-90 transition-opacity text-center"
            style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-2))", boxShadow: "0 4px 18px rgba(245,166,35,0.4)" }}
          >
            Começar a conversa →
          </Link>
          <Link
            href="/carreiras"
            className="text-sm font-semibold px-8 py-4 rounded-full text-white border border-white/25 hover:border-white/50 transition-colors text-center"
          >
            Ver vagas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

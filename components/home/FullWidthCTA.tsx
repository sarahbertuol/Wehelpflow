"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FullWidthCTA() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center"
      style={{ background: "linear-gradient(135deg, var(--indigo) 0%, var(--indigo-2) 100%)", padding: "7rem clamp(1.5rem, 6vw, 6rem)" }}
    >
      <div style={{ maxWidth: "800px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-black text-white"
          style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.03, letterSpacing: "-0.025em" }}
        >
          Pronta pra parar de ser o gargalo?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <Link
            href="/contato"
            className="inline-flex items-center justify-center font-bold rounded-full text-[var(--navy)] hover:opacity-90 transition-all active:scale-[0.97]"
            style={{ fontSize: "1.1rem", padding: "1.1rem 3rem", background: "linear-gradient(135deg, var(--saffron), var(--saffron-2))", boxShadow: "0 6px 32px rgba(245,166,35,0.5)" }}
          >
            Começar conversa
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

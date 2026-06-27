"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FullWidthCTA() {
  return (
    <section
      className="text-center py-24 px-6 flex flex-col items-center gap-8"
      style={{
        background: "linear-gradient(135deg, var(--indigo) 0%, var(--indigo-2) 100%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-black text-white"
        style={{
          fontFamily: "var(--font-bricolage)",
          fontSize: "clamp(2rem, 6vw, 4rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          maxWidth: "18ch",
        }}
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
          className="inline-flex items-center justify-center text-base font-semibold px-8 py-4 rounded-full text-[var(--navy)] hover:opacity-90 transition-all active:scale-[0.97]"
          style={{
            background: "linear-gradient(135deg, var(--saffron), var(--saffron-2))",
            boxShadow: "0 4px 20px rgba(245,166,35,0.4)",
          }}
        >
          Começar conversa
        </Link>
      </motion.div>
    </section>
  );
}

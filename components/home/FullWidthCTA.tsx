"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FullWidthCTA() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "linear-gradient(135deg, var(--indigo) 0%, var(--indigo-2) 100%)" }}
    >
      <div className="max-w-3xl mx-auto w-full py-28 flex flex-col items-center gap-10">
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
            className="inline-flex items-center justify-center font-semibold px-10 py-4 rounded-full text-[var(--navy)] hover:opacity-90 transition-all active:scale-[0.97]"
            style={{ fontSize: "1rem", background: "linear-gradient(135deg, var(--saffron), var(--saffron-2))", boxShadow: "0 4px 24px rgba(245,166,35,0.45)" }}
          >
            Começar conversa
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

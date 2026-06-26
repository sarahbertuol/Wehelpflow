"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data/services";

export default function ServicesGrid() {
  return (
    <section className="bg-[var(--bg)] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="block text-[0.6rem] font-bold tracking-[0.14em] uppercase text-[var(--indigo)] opacity-65 mb-3">Seis automações. Uma decisão.</span>
          <h2 className="font-black text-[2.2rem] leading-[1.05] tracking-[-0.025em] text-[var(--navy)]" style={{ fontFamily: "var(--font-bricolage)" }}>Seis coisas,<br />fora do seu prato.</h2>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
          {services.map((service, i) => {
            const isIndigo = service.accent === "indigo";
            return (
              <motion.article key={service.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.55 }}>
                <Link href={service.href} className="group relative flex flex-col bg-[var(--bg-card)] p-7 h-full overflow-hidden hover:bg-[var(--bg)] transition-colors">
                  <span className="absolute right-[-0.08em] top-[-0.15em] font-black text-[5.5rem] leading-none tracking-[-0.04em] text-[var(--navy)] opacity-[0.04] pointer-events-none select-none" style={{ fontFamily: "var(--font-bricolage)" }} aria-hidden="true">{service.num}</span>
                  <div className="w-6 h-[2.5px] rounded-full mb-3" style={{ background: isIndigo ? "linear-gradient(90deg, var(--indigo), var(--indigo-2))" : "linear-gradient(90deg, var(--saffron), var(--saffron-2))" }} />
                  <span className="text-[0.58rem] font-black tracking-[0.1em] mb-1.5" style={{ color: isIndigo ? "var(--indigo)" : "var(--saffron)" }}>{service.num}</span>
                  <h3 className="font-black text-[0.95rem] leading-[1.2] tracking-[-0.01em] text-[var(--navy)] mb-2" style={{ fontFamily: "var(--font-bricolage)" }}>{service.title}</h3>
                  <p className="text-[0.78rem] leading-relaxed text-[var(--text-mid)] opacity-80 relative z-10">{service.description}</p>
                  <span className="mt-4 text-[0.68rem] font-semibold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform" style={{ color: isIndigo ? "var(--indigo)" : "var(--saffron)" }}>Saiba mais →</span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

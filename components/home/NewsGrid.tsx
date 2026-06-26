"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { newsItems } from "@/lib/data/news";

export default function NewsGrid() {
  return (
    <section className="bg-[var(--bg)] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="block text-[0.6rem] font-bold tracking-[0.14em] uppercase text-[var(--indigo)] opacity-65 mb-3">Cases & Insights</span>
            <h2 className="font-black text-[2.2rem] leading-[1.05] tracking-[-0.025em] text-[var(--navy)]" style={{ fontFamily: "var(--font-bricolage)" }}>Negócios reais,<br />resultados reais.</h2>
          </motion.div>
          <Link href="/cases" className="text-sm font-semibold text-[var(--indigo)] hover:opacity-70 transition-opacity whitespace-nowrap">Ver todos →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsItems.map((item, i) => (
            <motion.article key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.55 }}>
              <Link href={item.href} className="group flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 h-full hover:border-[var(--indigo)]/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.58rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full" style={{ color: i % 2 === 0 ? "var(--indigo)" : "#B87D12", background: i % 2 === 0 ? "rgba(67,97,238,0.08)" : "rgba(245,166,35,0.1)" }}>{item.category}</span>
                  <span className="text-[0.62rem] text-[var(--text-mid)] opacity-50">{item.date}</span>
                </div>
                <h3 className="font-black text-[0.95rem] leading-[1.25] tracking-[-0.01em] text-[var(--navy)] mb-3 group-hover:text-[var(--indigo)] transition-colors" style={{ fontFamily: "var(--font-bricolage)" }}>{item.title}</h3>
                <p className="text-[0.78rem] leading-relaxed text-[var(--text-mid)] opacity-75 flex-1">{item.excerpt}</p>
                <span className="mt-4 text-[0.68rem] font-semibold text-[var(--indigo)] opacity-0 group-hover:opacity-100 transition-opacity">Ler mais →</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

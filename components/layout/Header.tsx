"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-baseline gap-0.5 group">
            <span className="font-display font-black text-[1.15rem] tracking-[-0.025em] text-[var(--navy)]" style={{ fontFamily: "var(--font-bricolage)" }}>wehelpflow</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--saffron)] mb-0.5 transition-transform group-hover:scale-125" />
          </Link>
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-semibold text-[var(--text-mid)] hover:text-[var(--navy)] transition-colors">{link.label}</Link>
            ))}
            <Link href="/contato" className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, var(--indigo), var(--indigo-2))" }}>Falar com a gente →</Link>
          </nav>
          <button className="md:hidden text-[var(--navy)] p-1" onClick={() => setMobileOpen((v) => !v)} aria-label="Abrir menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-center items-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-2xl font-black tracking-tight text-[var(--navy)]" style={{ fontFamily: "var(--font-bricolage)" }}>{link.label}</Link>
          ))}
          <Link href="/contato" onClick={() => setMobileOpen(false)} className="mt-4 text-base font-semibold px-8 py-3.5 rounded-full text-white" style={{ background: "linear-gradient(135deg, var(--indigo), var(--indigo-2))" }}>Falar com a gente →</Link>
        </div>
      )}
    </>
  );
}

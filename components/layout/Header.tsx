"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [lang, setLang] = useState<"en" | "pt">("pt");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 lg:px-16 py-5 bg-[var(--bg)] border-b border-[var(--border)]">
      <Link href="/" className="flex items-baseline gap-0.5 group">
        <span
          className="font-black text-[1.2rem] tracking-[-0.025em] text-[var(--navy)]"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          wehelpflow
        </span>
        <span className="w-[0.3rem] h-[0.3rem] rounded-full bg-[var(--saffron)] mb-0.5 transition-transform group-hover:scale-125" />
      </Link>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1.5 text-sm font-semibold">
          <button
            onClick={() => setLang("en")}
            className={`transition-colors ${lang === "en" ? "text-[var(--navy)]" : "text-[var(--border)]"}`}
          >
            EN
          </button>
          <span className="text-[var(--border)]">/</span>
          <button
            onClick={() => setLang("pt")}
            className={`transition-colors ${lang === "pt" ? "text-[var(--navy)]" : "text-[var(--border)]"}`}
          >
            PT
          </button>
        </div>
        <Link
          href="/contato"
          className="inline-flex items-center justify-center font-semibold rounded-full border border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-all active:scale-[0.97] whitespace-nowrap"
          style={{ fontSize: "0.9rem", padding: "0.65rem 1.5rem" }}
        >
          Vamos conversar
        </Link>
      </div>
    </header>
  );
}

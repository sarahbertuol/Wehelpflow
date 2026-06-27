import Link from "next/link";
import { navLinks, modules } from "@/lib/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 lg:gap-24">

          {/* Left: brand */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-baseline gap-1 mb-8 group">
              <span
                className="font-black text-[1.6rem] tracking-[-0.03em] leading-none"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                wehelpflow
              </span>
              <span className="w-2 h-2 rounded-full bg-[var(--saffron)] mb-0.5 transition-transform group-hover:scale-125" />
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-[26ch] mb-12">
              Automação com IA para quem toca tudo sozinho — ou quase.
            </p>
            <div className="flex flex-col gap-3 mt-auto">
              {[
                { label: "Instagram", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "X / Twitter", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs font-semibold tracking-widest uppercase text-white/25 hover:text-white/65 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: big nav links + modules */}
          <div>
            <nav className="mb-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between py-5 border-b border-white/10 hover:border-white/30 transition-colors"
                >
                  <span
                    className="font-black text-[1.75rem] leading-none tracking-[-0.025em] text-white/75 group-hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-bricolage)" }}
                  >
                    {link.label}
                  </span>
                  <span className="text-white/20 group-hover:text-white/60 transition-colors text-xl translate-x-0 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            {/* Services sub-nav */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 pt-2">
              {modules.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="text-xs font-semibold text-white/25 hover:text-white/60 transition-colors tracking-wide"
                >
                  {m.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © 2026 wehelpflow. Automação com um humano ainda no comando.
          </p>
          <div className="flex gap-6">
            {["Termos", "Privacidade", "Cookies"].map((item) => (
              <Link key={item} href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

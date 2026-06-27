import Link from "next/link";
import { navLinks, modules } from "@/lib/data/navigation";

export default function Footer() {
  return (
    <footer
      className="bg-[var(--navy)] text-white flex flex-col"
      style={{ minHeight: "70vh" }}
    >
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-20 lg:gap-28 items-start">

            {/* Brand column */}
            <div>
              <Link href="/" className="inline-flex items-baseline gap-0.5 group">
                <span
                  className="font-black text-[1.4rem] tracking-[-0.025em] text-white"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  wehelpflow
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--saffron)] mb-0.5 transition-transform group-hover:scale-125" />
              </Link>

              <p
                className="mt-10 font-black text-[2rem] leading-[1.05] tracking-[-0.03em] text-white max-w-[14ch]"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Automação que cabe no negócio que você já tem.
              </p>

              <Link
                href="/contato"
                className="mt-12 inline-flex items-center text-sm font-semibold px-8 py-4 rounded-full text-[var(--navy)] hover:opacity-90 transition-all active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, var(--saffron), var(--saffron-2))",
                  boxShadow: "0 4px 20px rgba(245,166,35,0.3)",
                }}
              >
                Começar conversa →
              </Link>

              <div className="mt-16 flex gap-7">
                {["Instagram", "LinkedIn", "X"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs font-bold tracking-[0.12em] uppercase text-white/25 hover:text-white/60 transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Editorial nav column */}
            <div>
              <nav className="border-t border-white/10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between border-b border-white/10 py-7 hover:pl-3 transition-all duration-200"
                  >
                    <span
                      className="font-black text-[1.65rem] leading-none tracking-[-0.025em] text-white/65 group-hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-bricolage)" }}
                    >
                      {link.label}
                    </span>
                    <span className="text-white/25 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200">
                      →
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-12 grid grid-cols-3 gap-x-6 gap-y-5">
                {modules.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    className="text-xs font-bold tracking-[0.1em] uppercase text-white/25 hover:text-white/55 transition-colors"
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © 2026 wehelpflow. Automação com um humano ainda no comando.
          </p>
          <div className="flex gap-8">
            {["Termos", "Privacidade", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-white/25 hover:text-white/50 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

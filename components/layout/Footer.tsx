import Link from "next/link";
import { navLinks, modules } from "@/lib/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-baseline gap-0.5 mb-4">
            <span className="font-black text-lg tracking-[-0.025em]" style={{ fontFamily: "var(--font-bricolage)" }}>wehelpflow</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--saffron)] mb-0.5" />
          </Link>
          <p className="text-sm text-white/45 leading-relaxed max-w-[22ch]">Automação com IA para quem toca tudo sozinho — ou quase.</p>
          <div className="flex gap-4 mt-6">
            {["Instagram", "LinkedIn", "X"].map((s) => (
              <a key={s} href="#" className="text-xs font-semibold tracking-widest uppercase text-white/30 hover:text-white/70 transition-colors">{s}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.14em] uppercase text-white/30 mb-5">Páginas</p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (<li key={link.href}><Link href={link.href} className="text-sm text-white/55 hover:text-white transition-colors">{link.label}</Link></li>))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.14em] uppercase text-white/30 mb-5">Serviços</p>
          <ul className="flex flex-col gap-3">
            {modules.map((m) => (<li key={m.href}><Link href={m.href} className="text-sm text-white/55 hover:text-white transition-colors">{m.label}</Link></li>))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.14em] uppercase text-white/30 mb-5">Contato</p>
          <a href="mailto:hello@wehelpflow.com" className="text-sm text-white/55 hover:text-white transition-colors block">hello@wehelpflow.com</a>
          <Link href="/contato" className="inline-block mt-5 text-sm font-semibold px-5 py-2.5 rounded-full text-[var(--navy)] transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-2))" }}>Começar conversa →</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">© 2026 wehelpflow. Automação com um humano ainda no comando.</p>
          <div className="flex gap-5">
            {["Termos", "Privacidade", "Cookies"].map((item) => (<Link key={item} href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">{item}</Link>))}
          </div>
        </div>
      </div>
    </footer>
  );
}

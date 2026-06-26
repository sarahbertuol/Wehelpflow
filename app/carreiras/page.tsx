import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carreiras — wehelpflow",
  description: "Junte-se à wehelpflow. Trabalhamos de forma remota e assíncrona.",
};

export default function CarreirasPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <span className="text-[0.6rem] font-bold tracking-[0.14em] uppercase text-[var(--indigo)] opacity-65 mb-4 block">Carreiras</span>
      <h1 className="font-black text-[3rem] leading-[1.0] tracking-[-0.035em] text-[var(--navy)] mb-6" style={{ fontFamily: "var(--font-bricolage)" }}>
        Você pensa em automação<br />
        <span style={{ color: "var(--saffron)" }}>igual a gente?</span>
      </h1>
      <p className="text-[1rem] leading-relaxed text-[var(--text-mid)] max-w-[44ch] mb-12">Somos um time pequeno, remoto e obcecado com simplicidade. Se você acha que automação deveria ser acessível, rápida e sem drama — vamos conversar.</p>
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-10 text-center">
        <p className="font-black text-[1.4rem] tracking-[-0.02em] text-[var(--navy)] mb-3" style={{ fontFamily: "var(--font-bricolage)" }}>Sem vagas abertas no momento.</p>
        <p className="text-sm text-[var(--text-mid)] mb-6 max-w-[32ch] mx-auto">Mas sempre conversamos com pessoas incríveis. Manda um email contando o que você faz.</p>
        <Link href="mailto:hello@wehelpflow.com" className="inline-block text-sm font-semibold px-6 py-3 rounded-full text-white hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg, var(--indigo), var(--indigo-2))" }}>Mandar email →</Link>
      </div>
    </div>
  );
}

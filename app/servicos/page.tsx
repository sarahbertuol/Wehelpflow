import type { Metadata } from "next";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Serviços — wehelpflow",
  description: "Seis módulos de automação com IA para o seu negócio.",
};

export default function ServicosPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <span className="text-[0.6rem] font-bold tracking-[0.14em] uppercase text-[var(--indigo)] opacity-65 mb-4 block">Serviços</span>
      <h1 className="font-black text-[3rem] leading-[1.0] tracking-[-0.035em] text-[var(--navy)] mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
        Seis coisas,<br />
        <span style={{ color: "var(--saffron)" }}>fora do seu prato.</span>
      </h1>
      <p className="text-[1rem] leading-relaxed text-[var(--text-mid)] max-w-[44ch] mb-14">Escolha um ou todos. Cada módulo funciona de forma independente e se encaixa no que você já usa hoje.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)]">
        {services.map((s) => {
          const isIndigo = s.accent === "indigo";
          return (
            <div key={s.id} id={s.id} className="bg-[var(--bg-card)] p-10 relative overflow-hidden">
              <span className="absolute right-[-0.08em] top-[-0.15em] font-black text-[7rem] leading-none tracking-[-0.04em] opacity-[0.04] pointer-events-none select-none" style={{ fontFamily: "var(--font-bricolage)", color: "var(--navy)" }} aria-hidden="true">{s.num}</span>
              <div className="w-7 h-[2.5px] rounded-full mb-4" style={{ background: isIndigo ? "linear-gradient(90deg, var(--indigo), var(--indigo-2))" : "linear-gradient(90deg, var(--saffron), var(--saffron-2))" }} />
              <span className="text-[0.58rem] font-black tracking-[0.1em] block mb-2" style={{ color: isIndigo ? "var(--indigo)" : "var(--saffron)" }}>{s.num}</span>
              <h2 className="font-black text-[1.4rem] leading-[1.15] tracking-[-0.02em] text-[var(--navy)] mb-3" style={{ fontFamily: "var(--font-bricolage)" }}>{s.title}</h2>
              <p className="text-sm leading-relaxed text-[var(--text-mid)]">{s.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

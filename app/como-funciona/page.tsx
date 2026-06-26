import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como funciona — wehelpflow",
  description: "Entenda como a wehelpflow entrega automação em dias, não meses.",
};

const steps = [
  { num: "01", title: "Uma conversa de 30 minutos", body: "Você conta o que faz, o que toma tempo, o que odeia repetir. A gente escuta sem tentar vender nada antes de entender." },
  { num: "02", title: "A gente projeta a automação certa", body: "Não inventamos wheel. Mapeamos o que você já usa e mostramos onde a automação se encaixa sem você precisar aprender nada novo." },
  { num: "03", title: "Você aprova. A gente constrói.", body: "Você vê o projeto antes de sair do papel. Aprova, pede ajuste, ou veta. Só construímos o que você assinou embaixo." },
  { num: "04", title: "No ar em 48h a 5 dias", body: "Sem meses de espera. Sem contrato de retainer. A automação sobe, você testa em ambiente real e a gente acompanha os primeiros dias." },
  { num: "05", title: "Ajustes e evolução", body: "Negócio muda. Automação também pode mudar. Você sempre tem como pedir ajuste, expandir para um novo módulo ou parar o que não funciona." },
];

export default function ComoFuncionaPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <span className="text-[0.6rem] font-bold tracking-[0.14em] uppercase text-[var(--indigo)] opacity-65 mb-4 block">Como funciona</span>
      <h1 className="font-black text-[3rem] leading-[1.0] tracking-[-0.035em] text-[var(--navy)] mb-14" style={{ fontFamily: "var(--font-bricolage)" }}>
        Do briefing ao ar<br />
        <span style={{ color: "var(--indigo)" }}>em dias.</span>
      </h1>
      <ol className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <li key={step.num} className="flex gap-8 pb-12 relative">
            {i < steps.length - 1 && <div className="absolute left-[1.6rem] top-10 bottom-0 w-px bg-[var(--border)]" />}
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm relative z-10" style={{ fontFamily: "var(--font-bricolage)", background: i % 2 === 0 ? "linear-gradient(135deg, var(--indigo), var(--indigo-2))" : "linear-gradient(135deg, var(--saffron), var(--saffron-2))", color: i % 2 === 0 ? "#fff" : "var(--navy)" }}>{step.num}</div>
            <div className="pt-2">
              <h2 className="font-black text-[1.2rem] tracking-[-0.02em] text-[var(--navy)] mb-2" style={{ fontFamily: "var(--font-bricolage)" }}>{step.title}</h2>
              <p className="text-sm leading-relaxed text-[var(--text-mid)]">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

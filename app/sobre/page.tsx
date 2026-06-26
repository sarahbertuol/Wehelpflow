import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre — wehelpflow",
  description: "Conheça a wehelpflow: automação com IA para quem toca tudo sozinho.",
};

export default function SobrePage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <span className="text-[0.6rem] font-bold tracking-[0.14em] uppercase text-[var(--indigo)] opacity-65 mb-4 block">Sobre nós</span>
      <h1 className="font-black text-[3rem] leading-[1.0] tracking-[-0.035em] text-[var(--navy)] mb-8" style={{ fontFamily: "var(--font-bricolage)" }}>
        Feitos por quem já<br />
        <span style={{ color: "var(--indigo)" }}>tocou tudo sozinho.</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        {[
          { title: "Nossa missão", body: "Fazer com que a automação com IA seja tão simples quanto mandar uma mensagem. Sem contratos longos, sem meses de implementação, sem você ter que virar especialista em software." },
          { title: "Como trabalhamos", body: "Entendemos o seu negócio em uma conversa. Projetamos a automação certa para o que você já usa. Entregamos em dias. Você aprova. Vai ao ar. Simples." },
          { title: "O que nos diferencia", body: "Não vendemos plataforma. Vendemos resultado. Você não precisa aprender novo sistema — a automação vive dentro das ferramentas que você já usa todos os dias." },
          { title: "Para quem fazemos", body: "Pequenos negócios com grandes ambições. Quem faz tudo sozinho ou com uma equipe pequena e quer parar de ser o gargalo de operações que poderiam rodar sozinhas." },
        ].map((item) => (
          <div key={item.title} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-7">
            <h2 className="font-black text-[1.1rem] tracking-[-0.01em] text-[var(--navy)] mb-3" style={{ fontFamily: "var(--font-bricolage)" }}>{item.title}</h2>
            <p className="text-sm leading-relaxed text-[var(--text-mid)]">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

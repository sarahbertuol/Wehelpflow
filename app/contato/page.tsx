import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato — wehelpflow",
  description: "Fale com a wehelpflow. Resposta em até 24h.",
};

export default function ContatoPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-2xl mx-auto">
      <span className="text-[0.6rem] font-bold tracking-[0.14em] uppercase text-[var(--indigo)] opacity-65 mb-4 block">Contato</span>
      <h1 className="font-black text-[3rem] leading-[1.0] tracking-[-0.035em] text-[var(--navy)] mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
        Vamos começar<br />
        <span style={{ color: "var(--indigo)" }}>uma conversa.</span>
      </h1>
      <p className="text-[1rem] leading-relaxed text-[var(--text-mid)] mb-10">Conte o que você faz e o que está te tomando mais tempo. A gente responde em até 24h com uma ideia do que podemos automatizar.</p>
      <form action="mailto:hello@wehelpflow.com" method="get" className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[var(--text-mid)] tracking-wide">Seu nome</label>
          <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-sm text-[var(--navy)] placeholder:text-[var(--text-mid)]/40 focus:outline-none focus:border-[var(--indigo)] transition-colors" placeholder="Maria Silva" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[var(--text-mid)] tracking-wide">Email</label>
          <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-sm text-[var(--navy)] placeholder:text-[var(--text-mid)]/40 focus:outline-none focus:border-[var(--indigo)] transition-colors" placeholder="maria@seusite.com" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[var(--text-mid)] tracking-wide">O que você faz e o que está te tomando tempo?</label>
          <textarea name="body" required rows={5} className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-sm text-[var(--navy)] placeholder:text-[var(--text-mid)]/40 focus:outline-none focus:border-[var(--indigo)] transition-colors resize-none" placeholder="Sou personal trainer, tenho 30 alunos, e passo 2h por dia respondendo mensagens sobre treino e cobrando mensalidade..." />
        </div>
        <button type="submit" className="self-start text-sm font-semibold px-7 py-3.5 rounded-full text-white hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg, var(--indigo), var(--indigo-2))", boxShadow: "0 4px 24px rgba(67,97,238,0.3)" }}>Enviar mensagem →</button>
      </form>
      <div className="mt-10 pt-8 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--text-mid)] opacity-60">Prefere email direto?{" "}<a href="mailto:hello@wehelpflow.com" className="text-[var(--indigo)] hover:underline">hello@wehelpflow.com</a></p>
      </div>
    </div>
  );
}

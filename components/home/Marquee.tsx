const items = ["Site em 48h", "Feed automatizado", "Inbox inteligente", "Cobranças em dia", "CRM automático", "WhatsApp 24h", "Nada novo pra aprender", "No ar em dias"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[var(--navy)] py-3 overflow-hidden group" aria-hidden="true">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 text-[0.62rem] font-bold tracking-[0.1em] uppercase text-white/35 flex-shrink-0">
            {item}
            <span className="w-1 h-1 rounded-full bg-[var(--saffron)] flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

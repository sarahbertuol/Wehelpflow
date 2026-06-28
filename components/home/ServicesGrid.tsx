"use client";

import { motion } from "framer-motion";

const services = [
  { num: "01", title: "Seu negócio online em 48hrs", desc: "Um site de verdade, não uma novela de três meses. A gente constrói, você aprova, e já está no ar." },
  { num: "02", title: "Feed atualizado em um clique", desc: "Conteúdo agendado, publicado e consistente — sem você abrir cinco apps pra isso." },
  { num: "03", title: "Caixa de email limpa e organizada", desc: "Spam fora, prioridades marcadas, respostas rascunhadas. Você só abre o que realmente precisa de você." },
  { num: "04", title: "Pagamentos e cobranças em dia", desc: "Boletos saem, lembretes cobram quem atrasou, e você para de ser quem precisa pedir dinheiro." },
  { num: "05", title: "Gestão de clientes automatizada", desc: "Cada cliente num lugar só, com alerta no instante em que alguém fica quieto demais." },
  { num: "06", title: "Atendimento 24hrs sem você", desc: "O WhatsApp responde perguntas, agenda horários, e só te chama quando realmente precisa de você." },
];

export default function ServicesGrid() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[var(--navy)]">
      <div
        style={{
          maxWidth: "1280px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "clamp(1.5rem, 6vw, 6rem)",
          paddingRight: "clamp(1.5rem, 6vw, 6rem)",
          paddingTop: "7rem",
          paddingBottom: "7rem",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-black text-white"
          style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", lineHeight: 1.03, letterSpacing: "-0.025em", marginBottom: "4rem" }}
        >
          Seis coisas, fora do seu prato
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
          {services.map((s, i) => (
            <motion.article
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "1.75rem" }}
            >
              <span className="block font-black" style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.1rem", color: "var(--saffron)", marginBottom: "1rem" }}>
                {s.num}
              </span>
              <h3 className="font-black text-white" style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

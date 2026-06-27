"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Seu negócio online em 48hrs",
    desc: "Um site de verdade, não uma novela de três meses. A gente constrói, você aprova, e já está no ar.",
  },
  {
    num: "02",
    title: "Feed atualizado em um clique",
    desc: "Conteúdo agendado, publicado e consistente — sem você abrir cinco apps pra isso.",
  },
  {
    num: "03",
    title: "Caixa de email limpa e organizada",
    desc: "Spam fora, prioridades marcadas, respostas rascunhadas. Você só abre o que realmente precisa de você.",
  },
  {
    num: "04",
    title: "Pagamentos e cobranças em dia",
    desc: "Boletos saem, lembretes cobram quem atrasou, e você para de ser quem precisa pedir dinheiro.",
  },
  {
    num: "05",
    title: "Gestão de clientes automatizada",
    desc: "Cada cliente num lugar só, com alerta no instante em que alguém fica quieto demais.",
  },
  {
    num: "06",
    title: "Atendimento 24hrs sem você",
    desc: "O WhatsApp responde perguntas, agenda horários, e só te chama quando realmente precisa de você.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[var(--navy)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-black text-white mb-14"
          style={{
            fontFamily: "var(--font-bricolage)",
            fontSize: "clamp(1.75rem, 5vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Seis coisas, fora do seu prato
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {services.map((s, i) => (
            <motion.article
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className="border-t border-white/20 pt-6"
            >
              <span
                className="block font-black text-[1.05rem] text-[var(--saffron)] mb-3"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                {s.num}
              </span>
              <h3
                className="font-black text-white mb-3"
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.title}
              </h3>
              <p className="text-[0.95rem] text-white/75 leading-relaxed">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

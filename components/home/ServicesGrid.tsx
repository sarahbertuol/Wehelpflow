"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n/context";

const services = {
  pt: [
    { num: "01", title: "Seu negócio online em 48hrs", desc: "Um site de verdade, não uma novela de três meses. A gente constrói, você aprova, e já está no ar." },
    { num: "02", title: "Feed atualizado em um clique", desc: "Conteúdo agendado, publicado e consistente — sem você abrir cinco apps pra isso." },
    { num: "03", title: "Caixa de email limpa e organizada", desc: "Spam fora, prioridades marcadas, respostas rascunhadas. Você só abre o que realmente precisa de você." },
    { num: "04", title: "Pagamentos e cobranças em dia", desc: "Boletos saem, lembretes cobram quem atrasou, e você para de ser quem precisa pedir dinheiro." },
    { num: "05", title: "Gestão de clientes automatizada", desc: "Cada cliente num lugar só, com alerta no instante em que alguém fica quieto demais." },
    { num: "06", title: "Atendimento 24hrs sem você", desc: "O WhatsApp responde perguntas, agenda horários, e só te chama quando realmente precisa de você." },
  ],
  en: [
    { num: "01", title: "Your business, online in 48 hours", desc: "A real website, not a three-month saga. We build it, you approve it, it's live." },
    { num: "02", title: "Your feed, updated in one click", desc: "Content scheduled, posted, and consistent — without you opening five apps to do it." },
    { num: "03", title: "An inbox that sorts itself", desc: "Spam gone, priorities flagged, replies drafted. You only open what actually needs you." },
    { num: "04", title: "Payments and invoices, on time", desc: "Invoices go out, reminders chase late payers, and you stop being the one who asks for money." },
    { num: "05", title: "Client management, automated", desc: "Every client tracked in one place, with an alert the moment someone's gone quiet too long." },
    { num: "06", title: "24-hour support, without you", desc: "WhatsApp answers questions, books appointments, and only wakes you up for the ones that truly need you." },
  ],
};

export default function ServicesGrid() {
  const { lang } = useLang();

  return (
    <section id="services" className="min-h-screen flex flex-col justify-center relative overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Background photo */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop&q=80"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }}
      />

      <div
        className="relative z-10"
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
          style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(2rem, 5vw, 3.4rem)", lineHeight: 0.97, letterSpacing: "-0.01em", textTransform: "uppercase", marginBottom: "4rem" }}
        >
          {lang === "en"
            ? <>Six things, <span style={{ color: "var(--indigo)" }}>off your plate</span></>
            : <>Seis coisas, <span style={{ color: "var(--indigo)" }}>fora do seu prato</span></>}
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
          {services[lang].map((s, i) => (
            <motion.article
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              style={{ borderTop: "1px solid rgba(255,255,255,0.18)", paddingTop: "1.75rem" }}
            >
              <span className="block font-black" style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.1rem", color: "var(--indigo)", marginBottom: "1rem" }}>
                {s.num}
              </span>
              <h3 className="font-black text-white" style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", lineHeight: 1.1, letterSpacing: "0", textTransform: "uppercase", marginBottom: "1rem" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

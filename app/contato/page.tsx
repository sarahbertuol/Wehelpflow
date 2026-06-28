import type { Metadata } from "next";
import ContatoHero from "@/components/contato/ContatoHero";
import QuizForm from "@/components/contato/QuizForm";

export const metadata: Metadata = {
  title: "Contato — wehelpflow",
  description: "Fale com a wehelpflow ou preencha nosso questionário rápido para receber uma estimativa personalizada de automação.",
};

export default function ContatoPage() {
  return (
    <>
      <ContatoHero />

      {/* Orçamento Rápido */}
      <section className="min-h-screen flex flex-col justify-center bg-[var(--bg)]">
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
          <div style={{ maxWidth: "760px" }}>
            <span
              className="block font-bold uppercase"
              style={{ fontSize: "0.65rem", letterSpacing: "0.14em", color: "var(--saffron)", marginBottom: "1rem" }}
            >
              Orçamento rápido
            </span>
            <h2
              className="font-black text-[var(--navy)]"
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(1.9rem, 5vw, 3rem)",
                lineHeight: 1.03,
                letterSpacing: "-0.025em",
                marginBottom: "0.75rem",
              }}
            >
              Quanto custa automatizar o seu negócio?
            </h2>
            <p
              className="text-[var(--text-mid)]"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", maxWidth: "52ch", marginBottom: "3.5rem", lineHeight: 1.65 }}
            >
              Responda 7 perguntas rápidas e receba uma estimativa personalizada baseada na sua rotina.
            </p>

            <QuizForm />
          </div>
        </div>
      </section>
    </>
  );
}

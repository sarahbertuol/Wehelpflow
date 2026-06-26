export type Service = {
  id: string;
  num: string;
  title: string;
  description: string;
  accent: "indigo" | "saffron";
  href: string;
};

export const services: Service[] = [
  { id: "site", num: "01", title: "Seu negócio online em 48h", description: "Um site de verdade, não uma novela de três meses. A gente constrói, você aprova, e já está no ar.", accent: "indigo", href: "/servicos#site" },
  { id: "social", num: "02", title: "Feed atualizado em um clique", description: "Conteúdo agendado, publicado e consistente — sem você abrir cinco apps pra isso.", accent: "saffron", href: "/servicos#social" },
  { id: "inbox", num: "03", title: "Caixa de entrada que se organiza", description: "Spam fora, prioridades marcadas, respostas rascunhadas. Você só abre o que precisa de você.", accent: "indigo", href: "/servicos#inbox" },
  { id: "pagamentos", num: "04", title: "Pagamentos e cobranças em dia", description: "Boletos saem, lembretes cobram quem atrasou, e você para de ser quem pede dinheiro.", accent: "saffron", href: "/servicos#pagamentos" },
  { id: "crm", num: "05", title: "Gestão de clientes automatizada", description: "Cada cliente num lugar só, com alerta no instante em que alguém fica quieto demais.", accent: "indigo", href: "/servicos#crm" },
  { id: "whatsapp", num: "06", title: "Atendimento 24h sem você", description: "WhatsApp responde perguntas, agenda horários, e só te chama quando realmente precisa de você.", accent: "saffron", href: "/servicos#whatsapp" },
];

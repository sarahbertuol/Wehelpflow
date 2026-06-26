export type NewsItem = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

export const newsItems: NewsItem[] = [
  { id: "1", category: "Case", title: "Como uma clínica odontológica eliminou 90% das tarefas manuais", excerpt: "Em 3 semanas, agendamentos, cobranças e follow-ups passaram a rodar sozinhos — sem novo sistema.", date: "Jun 2026", href: "#" },
  { id: "2", category: "Insight", title: "O mito do 'precisa de um sistema': automação no que você já usa", excerpt: "A maioria das ferramentas que o seu negócio precisa já existe no WhatsApp, Gmail e planilhas.", date: "Mai 2026", href: "#" },
  { id: "3", category: "Case", title: "Personal trainer vai de 12 para 40 alunos sem contratar ninguém", excerpt: "Cobrança automática, check-in via WhatsApp e feed de treinos funcionando enquanto ela dorme.", date: "Mai 2026", href: "#" },
  { id: "4", category: "Guia", title: "Os 6 processos que toda pequena empresa deveria automatizar primeiro", excerpt: "Não comece pela IA mais sofisticada. Comece pelo que você faz toda semana e odeia fazer.", date: "Abr 2026", href: "#" },
  { id: "5", category: "Case", title: "Loja de roupa no Instagram com inbox que responde em 30 segundos", excerpt: "Sem contratar atendente, sem ficar preso no celular. O bot fecha vendas; ela faz a curadoria.", date: "Abr 2026", href: "#" },
  { id: "6", category: "Insight", title: "Por que automação barata sai cara: o custo de escalar ferramenta errada", excerpt: "Tool tax real: quando você paga por 5 apps que se falam mal e ainda precisa de alguém pra colar tudo.", date: "Mar 2026", href: "#" },
];

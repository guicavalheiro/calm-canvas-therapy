import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona a primeira sessão?",
    a: "A primeira sessão é um momento de acolhimento e escuta. Conversamos sobre o que motivou a busca por terapia, sua história e seus objetivos. A partir disso, alinhamos juntos a melhor forma de seguir o processo.",
  },
  {
    q: "O atendimento é online?",
    a: "Sim. Atendo online via plataforma segura de videochamada, com a mesma qualidade e confidencialidade do atendimento presencial. Atendimentos presenciais também podem ser combinados.",
  },
  {
    q: "Quanto tempo dura uma sessão?",
    a: "Cada sessão tem duração de 50 minutos, em frequência geralmente semanal — o que pode variar conforme a demanda.",
  },
  {
    q: "A terapia TCC funciona para ansiedade?",
    a: "Sim. A Terapia Cognitivo-Comportamental é uma das abordagens com maior comprovação científica no tratamento de transtornos de ansiedade, depressão e TOC.",
  },
  {
    q: "Como agendar?",
    a: "Basta enviar uma mensagem pelo WhatsApp através dos botões deste site. Responderei pessoalmente para alinhar disponibilidade e tirar suas dúvidas.",
  },
];

export function Faq() {
  return (
    <section className="py-24 lg:py-32 bg-beige/40">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Perguntas frequentes</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Dúvidas comuns
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 reveal">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

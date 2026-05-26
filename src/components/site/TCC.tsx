import { Brain, RefreshCw, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Identificar pensamentos",
    text: "Compreender padrões automáticos e o impacto deles nas suas emoções.",
  },
  {
    icon: RefreshCw,
    title: "Modificar comportamentos",
    text: "Desenvolver respostas mais saudáveis diante das situações do dia a dia.",
  },
  {
    icon: Sparkles,
    title: "Melhorar qualidade de vida",
    text: "Construir equilíbrio emocional e uma rotina mais leve e funcional.",
  },
];

export function TCC() {
  return (
    <section id="tcc" className="py-24 lg:py-32 bg-sky/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Abordagem</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            O que é Terapia Cognitivo-Comportamental?
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A TCC parte de uma ideia simples e poderosa: nossos pensamentos influenciam nossas emoções,
            e nossas emoções influenciam nossos comportamentos. Quando identificamos esses padrões,
            conseguimos transformá-los — e, junto com eles, a forma como vivemos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="reveal rounded-3xl bg-background p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/40 text-primary">
                <c.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

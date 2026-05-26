import { Heart, ShieldCheck, Lightbulb, Compass, Leaf, Sun } from "lucide-react";

const benefits = [
  { icon: Heart, text: "Melhor manejo emocional" },
  { icon: ShieldCheck, text: "Redução da ansiedade" },
  { icon: Lightbulb, text: "Organização dos pensamentos" },
  { icon: Compass, text: "Estratégias práticas para o dia a dia" },
  { icon: Leaf, text: "Fortalecimento emocional" },
  { icon: Sun, text: "Melhora da qualidade de vida" },
];

export function Ajuda() {
  return (
    <section id="ajuda" className="py-24 lg:py-32 bg-beige/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Como posso ajudar</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            O que a terapia pode transformar
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.text}
              className="reveal flex items-center gap-4 rounded-2xl bg-background px-6 py-5 border border-border/50 hover:border-primary/30 transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/40 text-primary">
                <b.icon size={18} />
              </div>
              <p className="text-sm text-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

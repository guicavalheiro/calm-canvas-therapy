import { Quote } from "lucide-react";

export function Depoimentos() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Depoimentos</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Experiências de quem buscou ajuda
          </h2>
          <p className="mt-6 text-muted-foreground">
            Em breve compartilharemos relatos reais de pessoas que passaram pelo processo terapêutico.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="reveal rounded-3xl bg-beige/50 p-8 border border-border/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="text-sage" size={28} />
              <div className="mt-6 space-y-2">
                <div className="h-2 w-full rounded bg-foreground/5" />
                <div className="h-2 w-11/12 rounded bg-foreground/5" />
                <div className="h-2 w-9/12 rounded bg-foreground/5" />
              </div>
              <p className="mt-6 text-xs text-muted-foreground">Depoimento em breve</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

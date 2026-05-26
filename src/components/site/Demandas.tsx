import { Wind, CloudRain, Repeat } from "lucide-react";

const demandas = [
  {
    icon: Wind,
    title: "Ansiedade",
    items: [
      "Preocupação excessiva",
      "Sensação constante de alerta",
      "Dificuldade para relaxar",
      "Sintomas físicos (taquicardia, tensão)",
    ],
  },
  {
    icon: CloudRain,
    title: "Depressão",
    items: [
      "Desânimo persistente",
      "Falta de prazer nas atividades",
      "Cansaço emocional",
      "Isolamento social",
    ],
  },
  {
    icon: Repeat,
    title: "TOC",
    items: [
      "Pensamentos intrusivos",
      "Compulsões e rituais",
      "Necessidade de controle",
      "Comportamentos repetitivos",
    ],
  },
];

export function Demandas() {
  return (
    <section id="demandas" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Demandas atendidas</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Quando buscar ajuda psicológica
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Algumas vivências pedem cuidado especializado. Conheça as principais demandas que atendo
            em consultório.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {demandas.map((d, i) => (
            <article
              key={d.title}
              className="reveal flex flex-col rounded-3xl border border-border/60 bg-card p-8 hover:bg-beige/40 transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/60 text-primary">
                <d.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-2xl">{d.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {d.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t border-border/60 text-sm text-foreground/80 italic">
                Existe tratamento e apoio psicológico para lidar com isso.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

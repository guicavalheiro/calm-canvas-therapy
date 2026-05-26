import portrait from "@/assets/gabriel-portrait.jpg";

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2 reveal">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-beige" aria-hidden />
            <img
              src={portrait}
              alt="Gabriel Regufe, psicólogo clínico"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative rounded-3xl object-cover aspect-[4/5] w-full shadow-lg"
            />
          </div>
        </div>
        <div className="lg:col-span-3 reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Quem é</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Gabriel Regufe
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Sou psicólogo clínico com formação em Terapia Cognitivo-Comportamental (TCC), uma das
              abordagens mais validadas cientificamente para o tratamento de ansiedade, depressão,
              TOC e outras questões emocionais do cotidiano.
            </p>
            <p>
              Meu trabalho é baseado em escuta empática, vínculo terapêutico e estratégias práticas.
              Atendo adolescentes e adultos que buscam compreender melhor suas emoções, ressignificar
              pensamentos e construir uma vida com mais equilíbrio e propósito.
            </p>
            <p>
              Acredito que pedir ajuda é um ato de coragem e de cuidado. Por isso, cada sessão é um
              espaço seguro, sem julgamentos, onde o foco está em você e no que faz sentido para a
              sua história.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              ["Abordagem", "TCC"],
              ["Atendimento", "Online e presencial"],
              ["Público", "Adolescentes e adultos"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

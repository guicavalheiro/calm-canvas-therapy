import { Check, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-office.jpg";
import { WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-beige/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:items-center">
        <div className="fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky/60 px-4 py-1.5 text-xs font-medium text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Psicólogo Clínico · Terapia TCC
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Você não precisa enfrentar ansiedade, depressão ou pensamentos repetitivos sozinho.
          </h1>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg max-w-xl leading-relaxed">
            Atendimento psicológico com abordagem em Terapia Cognitivo-Comportamental (TCC) para ajudar você
            a compreender emoções, modificar padrões de pensamento e construir uma rotina mais saudável.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle size={18} />
              Agendar sessão pelo WhatsApp
            </a>
          </div>

          <ul className="mt-8 grid gap-2 text-sm text-muted-foreground sm:grid-cols-1">
            {[
              "Atendimento humanizado",
              "Abordagem baseada em evidências",
              "Terapia focada em resultados reais",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check size={16} className="text-primary" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-sage/30 blur-2xl" aria-hidden />
          <img
            src={heroImg}
            alt="Consultório de psicologia acolhedor com luz natural"
            width={1024}
            height={1024}
            className="relative rounded-3xl shadow-xl object-cover aspect-[4/5] w-full"
          />
        </div>
      </div>
    </section>
  );
}

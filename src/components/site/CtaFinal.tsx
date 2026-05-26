import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function CtaFinal() {
  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky/70 via-beige to-sage/50 p-10 sm:p-16 text-center reveal">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-background/40 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-background/40 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight">
              Dar o primeiro passo pode ser difícil, mas você não precisa fazer isso sozinho.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Buscar ajuda psicológica é um ato de cuidado consigo mesmo. Estou aqui para caminhar
              junto com você.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle size={18} />
              Vamos agendar uma sessão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

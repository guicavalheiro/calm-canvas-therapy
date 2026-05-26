import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import {
  WHATSAPP_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  EMAIL,
  CRP,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl">Gabriel Regufe</p>
          <p className="mt-1 text-sm text-muted-foreground">Psicólogo Clínico · CRP {CRP}</p>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Atendimento psicológico com abordagem em Terapia Cognitivo-Comportamental.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Contato</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Mail size={16} /> {EMAIL}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Redes</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Instagram size={16} /> Instagram
              </a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Linkedin size={16} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Gabriel Regufe · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { TCC } from "@/components/site/TCC";
import { Demandas } from "@/components/site/Demandas";
import { Ajuda } from "@/components/site/Ajuda";
import { Depoimentos } from "@/components/site/Depoimentos";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gabriel Regufe — Psicólogo Clínico · Terapia TCC" },
      {
        name: "description",
        content:
          "Atendimento psicológico humanizado com Terapia Cognitivo-Comportamental (TCC) para ansiedade, depressão e TOC. Agende uma sessão pelo WhatsApp.",
      },
      { property: "og:title", content: "Gabriel Regufe — Psicólogo Clínico" },
      {
        property: "og:description",
        content:
          "Terapia Cognitivo-Comportamental para ansiedade, depressão e TOC. Atendimento online e presencial.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Gabriel Regufe",
          medicalSpecialty: "Psychology",
          description:
            "Psicólogo clínico com abordagem em Terapia Cognitivo-Comportamental (TCC).",
        }),
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TCC />
        <Demandas />
        <Ajuda />
        <Depoimentos />
        <CtaFinal />
        <Faq />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}

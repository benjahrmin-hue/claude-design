import Link from "next/link"
import { Button } from "@/components/ui/button"
import { type Language } from "@/lib/translations"

const ctaContent = {
  de: {
    title: "Dein Apartment in Düsseldorf direkt bei BHH Living buchen.",
    subtitle: "Prüfe jetzt die Verfügbarkeit oder sende uns eine Anfrage. Wir helfen dir persönlich weiter und sorgen für eine unkomplizierte Anreise.",
    ctaPrimary: "Direkt buchen",
    ctaSecondary: "Kontakt aufnehmen",
    ctaSecondaryHref: "/kontakt",
  },
  en: {
    title: "Book your apartment in Dusseldorf directly with BHH Living.",
    subtitle: "Check availability now or send us an inquiry. We help you personally and ensure an uncomplicated arrival.",
    ctaPrimary: "Book directly",
    ctaSecondary: "Get in touch",
    ctaSecondaryHref: "/en/contact",
  },
}

interface CTAProps {
  lang?: Language
}

export function CTA({ lang = "de" }: CTAProps) {
  const content = ctaContent[lang]

  return (
    <section className="relative bg-gradient-to-b from-[#13C7E8] to-[#245DCE] py-20 sm:py-24 lg:py-28">
      {/* Sanfter Überblend von der FAQ-Cremefarbe ins Türkis, um die harte Kante aufzulösen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAF7F2] to-transparent sm:h-32"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
          {content.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-8 font-semibold text-[#245DCE] shadow-lg hover:bg-white/95 hover:shadow-xl transition-all"
          >
            <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer">{content.ctaPrimary}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-white/40 bg-transparent px-8 font-semibold text-white hover:bg-white/10 hover:border-white/60 transition-all"
          >
            <Link href={content.ctaSecondaryHref}>{content.ctaSecondary}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

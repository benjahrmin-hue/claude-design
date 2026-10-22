import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ExternalLink, Shield, MessageCircle, CreditCard, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Direkt buchen | BHH Living Apartments",
  description: "Prüfe die Verfügbarkeit der BHH Living Apartments in Düsseldorf und Ahaus. Sicher buchen mit Kreditkarte, Apple Pay, PayPal oder Stripe.",
  keywords: "BHH Living direkt buchen, Apartments direkt buchen, Düsseldorf, Ahaus, Apple Pay, PayPal, Stripe, Kreditkarte",
  alternates: {
    languages: {
      de: "/direkt-buchen",
      en: "/en/direct-booking",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "de_DE",
    url: "https://bhh-living.de/direkt-buchen",
    title: "Direkt buchen | BHH Living Apartments",
    description: "Prüfe die Verfügbarkeit der BHH Living Apartments in Düsseldorf und Ahaus. Sicher buchen mit Kreditkarte, Apple Pay, PayPal oder Stripe.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf und Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direkt buchen | BHH Living Apartments",
    description: "Prüfe die Verfügbarkeit der BHH Living Apartments in Düsseldorf und Ahaus. Sicher buchen mit Kreditkarte, Apple Pay, PayPal oder Stripe.",
    images: ["/images/og-image.jpg"],
  },
}

const benefits = [
  {
    icon: MessageCircle,
    title: "Direkter Kontakt",
    description: "Keine Plattform-Umwege: Bei Fragen erreichst du direkt unser BHH Living Team.",
  },
  {
    icon: Shield,
    title: "Sichere Buchung",
    description: "Deine Daten sind bei uns sicher. Die Zahlung erfolgt verschlüsselt über unseren Zahlungsanbieter.",
  },
  {
    icon: CreditCard,
    title: "Flexible Zahlung",
    description: "Sicher bezahlen mit Kreditkarte, Apple Pay oder PayPal.",
  },
  {
    icon: Calendar,
    title: "Aktuelle Verfügbarkeit",
    description: "Prüfe in Echtzeit, welche Apartments verfügbar sind und buche sofort.",
  },
]

const steps = [
  {
    step: "1",
    title: "Verfügbarkeit prüfen",
    description: "Wähle dein Reisedatum und prüfe, welche Apartments verfügbar sind.",
  },
  {
    step: "2",
    title: "Apartment auswählen",
    description: "Wähle das passende Apartment für deinen Aufenthalt in Düsseldorf oder Ahaus.",
  },
  {
    step: "3",
    title: "Direkt buchen & bezahlen",
    description: "Schließe die Buchung ab und erhalte sofort deine Bestätigung.",
  },
  {
    step: "4",
    title: "Check-in vorbereiten",
    description: "Erledige den Online-Check-in und erhalte alle Infos zur Anreise.",
  },
]

export default function DirektBuchenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#EEF7FF] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
              BHH Living Direktbuchung
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
              BHH Living Apartments direkt buchen
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555555]">
              Buche dein BHH Living Apartment in Düsseldorf oder Ahaus direkt bei uns – ohne Umwege, ohne Plattform-Gebühren. Du hast direkten Kontakt zu uns und erhältst persönlichen Support.
            </p>

            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-10 py-6 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:opacity-95 transition-all">
                <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  Jetzt Verfügbarkeit prüfen
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-[#555555]">
              Du wirst zu unserer sicheren Buchungsseite weitergeleitet. Bezahlung mit Kreditkarte, Apple Pay oder PayPal.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
              Vorteile der Direktbuchung
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#555555]">
              Wenn du direkt bei BHH Living buchst, profitierst du von persönlichem Service und direktem Kontakt.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[24px] bg-white p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.04)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div 
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(145deg, rgba(36,93,206,0.12), rgba(19,199,232,0.12))" }}
                >
                  <benefit.icon className="h-6 w-6 text-[#245DCE]" />
                </div>
                <h3 className="text-lg font-semibold text-[#171717]">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555555]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
              So funktioniert die Direktbuchung
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#555555]">
              In wenigen Schritten zu deinem Apartment bei BHH Living.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.step} className="relative text-center">
                <div 
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white"
                  style={{ background: "linear-gradient(145deg, #245DCE, #13C7E8)" }}
                >
                  {step.step}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#171717]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555555]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="bg-gradient-to-br from-[#245DCE] to-[#13C7E8] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bereit für deinen Aufenthalt bei BHH Living?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            Prüfe jetzt die Verfügbarkeit und buche dein BHH Living Apartment direkt.
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/90">
            {["Kreditkarte", "Apple Pay", "PayPal", "Direkter Kontakt"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-white" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full bg-white px-10 py-6 text-lg font-semibold text-[#245DCE] shadow-xl hover:bg-white/95 transition-all">
              <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                Zur Direktbuchung
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Sichere Zahlung mit Kreditkarte, Apple Pay oder PayPal
          </p>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#171717]">Noch Fragen zur Buchung?</h2>
          <p className="mt-4 text-[#555555]">
            In unseren FAQ findest du Antworten zu Check-in, Ausstattung, Bezahlung und mehr.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="rounded-full border-2 border-[#245DCE]/25 px-6 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 transition-all">
              <Link href="/faq">Zu den FAQ</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-2 border-[#245DCE]/25 px-6 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 transition-all">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

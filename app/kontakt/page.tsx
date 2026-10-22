import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Clock, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kontakt | BHH Living Apartments Düsseldorf & Ahaus",
  description: "Kontaktiere BHH Living für Apartments in Düsseldorf und Ahaus. Anfrage senden, Standort auswählen und persönlich beraten lassen.",
  keywords: "BHH Living Kontakt, Apartments Düsseldorf Kontakt, Apartments Ahaus Kontakt, info@bhh-living.de",
  alternates: {
    languages: {
      de: "/kontakt",
      en: "/en/contact",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "de_DE",
    url: "https://bhh-living.de/kontakt",
    title: "Kontakt | BHH Living Apartments Düsseldorf & Ahaus",
    description: "Kontaktiere BHH Living für Apartments in Düsseldorf und Ahaus. Anfrage senden, Standort auswählen und persönlich beraten lassen.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf und Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | BHH Living Apartments Düsseldorf & Ahaus",
    description: "Kontaktiere BHH Living für Apartments in Düsseldorf und Ahaus. Anfrage senden, Standort auswählen und persönlich beraten lassen.",
    images: ["/images/og-image.jpg"],
  },
}

export default function KontaktPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#EEF7FF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
              BHH Living Kontakt
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
              Kontakt zu BHH Living
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555555]">
              Hast du Fragen zu unseren Apartments in Düsseldorf oder Ahaus? Sende uns eine Anfrage – wir helfen dir persönlich weiter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#171717]">Kontaktinformationen</h2>
              <p className="mt-4 text-[#555555] leading-relaxed">
                Du erreichst uns per E-Mail für alle Fragen rund um deine Buchung oder deinen Aufenthalt. Für direkte Buchungen nutze bitte unsere Direktbuchung.
              </p>

              <div className="mt-8 space-y-5">
                <div 
                  className="flex items-start gap-4 rounded-2xl bg-white p-5"
                  style={{ boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)", border: "1px solid rgba(0,0,0,0.04)" }}
                >
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background: "linear-gradient(145deg, rgba(36,93,206,0.12), rgba(19,199,232,0.12))" }}
                  >
                    <Mail className="h-6 w-6 text-[#245DCE]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#171717]">E-Mail</h3>
                    <a href="mailto:info@bhh-living.de" className="mt-1 text-[#245DCE] hover:underline">
                      info@bhh-living.de
                    </a>
                  </div>
                </div>

                <div 
                  className="flex items-start gap-4 rounded-2xl bg-white p-5"
                  style={{ boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)", border: "1px solid rgba(0,0,0,0.04)" }}
                >
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background: "linear-gradient(145deg, rgba(36,93,206,0.12), rgba(19,199,232,0.12))" }}
                  >
                    <Clock className="h-6 w-6 text-[#245DCE]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#171717]">Check-in & Check-out</h3>
                    <p className="mt-1 text-[#555555]">Check-in: ab 15:00 Uhr</p>
                    <p className="text-[#555555]">Check-out: bis 10:00 Uhr</p>
                  </div>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div 
                className="mt-8 rounded-2xl bg-gradient-to-br from-[#245DCE] to-[#13C7E8] p-6"
              >
                <h3 className="font-semibold text-white">Direkt buchen?</h3>
                <p className="mt-2 text-white/85 text-sm leading-relaxed">
                  Prüfe die Verfügbarkeit und buche dein Apartment direkt über unsere Buchungsseite.
                </p>
                <Button asChild className="mt-4 w-full rounded-full bg-white font-semibold text-[#245DCE] hover:bg-white/95 transition-all">
                  <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Zur Direktbuchung
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#171717]">Anfrage senden</h2>
              <p className="mt-4 text-[#555555] leading-relaxed">
                Du hast Fragen oder möchtest eine individuelle Anfrage stellen? Wähle den passenden Standort aus und sende uns deine Nachricht.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standorte Section */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-2xl font-bold text-[#171717] sm:text-3xl">Unsere Standorte</h2>
            <p className="mt-4 text-[#555555]">
              BHH Living bietet moderne Apartments an zwei attraktiven Standorten in Nordrhein-Westfalen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Düsseldorf Card */}
            <div 
              className="group rounded-[28px] bg-white p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8"
              style={{ 
                boxShadow: "0 8px 30px rgba(36, 93, 206, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(36, 93, 206, 0.06)"
              }}
            >
              <div 
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(145deg, #245DCE, #13C7E8)" }}
              >
                <MapPin className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#171717]">BHH Living Apartments Düsseldorf</h3>
              
              <div className="mt-4 space-y-1">
                <p className="font-medium text-[#171717]">Corneliusstraße 110a–c</p>
                <p className="text-[#555555]">40215 Düsseldorf-Friedrichstadt</p>
              </div>
              
              <p className="mt-4 text-[#555555] leading-relaxed text-sm">
                Moderne Apartments und Serviced Apartments in Düsseldorf mit Küche, WLAN, digitalem Check-in und persönlichem Support.
              </p>
              
              <Button asChild className="mt-6 w-full rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] font-semibold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all">
                <Link href="/apartments-duesseldorf" className="flex items-center justify-center gap-2">
                  Apartments Düsseldorf ansehen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Ahaus Card */}
            <div 
              className="group rounded-[28px] bg-white p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8"
              style={{ 
                boxShadow: "0 8px 30px rgba(36, 93, 206, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(36, 93, 206, 0.06)"
              }}
            >
              <div 
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(145deg, #13C7E8, #245DCE)" }}
              >
                <MapPin className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#171717]">BHH Living Apartments Ahaus</h3>
              
              <div className="mt-4 space-y-1">
                <p className="font-medium text-[#171717]">Hessenweg 25</p>
                <p className="text-[#555555]">48683 Ahaus</p>
              </div>
              
              <p className="mt-4 text-[#555555] leading-relaxed text-sm">
                Drei moderne BHH Living Apartments in Ahaus – ideal für Familien, Gruppen, Geschäftsreisende, Kurztrips und längere Aufenthalte.
              </p>
              
              <Button asChild className="mt-6 w-full rounded-full bg-gradient-to-r from-[#13C7E8] to-[#245DCE] font-semibold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all">
                <Link href="/apartments-ahaus" className="flex items-center justify-center gap-2">
                  Apartments Ahaus ansehen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

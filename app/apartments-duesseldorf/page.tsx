import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Check, Wifi, ChefHat, Smartphone, HeadphonesIcon, MapPin, Building2, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "BHH Living Apartments Düsseldorf | Direkt buchen",
  description: "Moderne Apartments in Düsseldorf-Friedrichstadt mit Küche, WLAN, digitalem Check-in und persönlichem Support. Jetzt direkt bei BHH Living buchen.",
  keywords: "BHH Living Apartments Düsseldorf, Apartments Düsseldorf, Serviced Apartments Düsseldorf, Apartment Düsseldorf mit Küche, Düsseldorf-Friedrichstadt, Corneliusstraße 110, Direktbuchung Düsseldorf",
  alternates: {
    languages: {
      de: "/apartments-duesseldorf",
      en: "/en/dusseldorf-apartments",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "de_DE",
    url: "https://bhh-living.de/apartments-duesseldorf",
    title: "BHH Living Apartments Düsseldorf | Direkt buchen",
    description: "Moderne Apartments in Düsseldorf-Friedrichstadt mit Küche, WLAN, digitalem Check-in und persönlichem Support. Jetzt direkt bei BHH Living buchen.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BHH Living Apartments Düsseldorf | Direkt buchen",
    description: "Moderne Apartments in Düsseldorf-Friedrichstadt mit Küche, WLAN, digitalem Check-in und persönlichem Support. Jetzt direkt bei BHH Living buchen.",
    images: ["/images/og-image.jpg"],
  },
}

const features = [
  { icon: ChefHat, title: "Apartment mit Küche", description: "Jedes Apartment verfügt über eine voll ausgestattete Küche." },
  { icon: Smartphone, title: "Digitaler Self-Check-in", description: "Flexibel ankommen mit Zugangscode und Schlüsselbox." },
  { icon: Wifi, title: "Schnelles WLAN", description: "Kostenloses High-Speed Internet in allen Apartments." },
  { icon: HeadphonesIcon, title: "Persönlicher Support", description: "Unser Team ist vor, während und nach deinem Aufenthalt für dich da." },
  { icon: MapPin, title: "Zentrale Lage", description: "Düsseldorf-Friedrichstadt – perfekt angebunden an Innenstadt und Altstadt." },
  { icon: Clock, title: "Flexible Aufenthalte", description: "Kurze Trips, Business-Reisen oder längere Aufenthalte möglich." },
]

export default function ApartmentsDuesseldorfPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#EEF7FF] py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
                BHH Living Apartments
              </p>
              <h1 className="text-balance text-[1.75rem] leading-tight sm:text-4xl font-bold tracking-tight text-[#171717] md:text-5xl">
                BHH Living Apartments Düsseldorf
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-[#555555]">
                BHH Living bietet dir moderne Apartments in Düsseldorf-Friedrichstadt – zentral gelegen, mit Küche, digitalem Check-in, WLAN und persönlichem Support. Ideal für Businessgäste, Städtetrips und längere Aufenthalte.
              </p>
              
              <ul className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                {["Voll ausgestattete Küche in jedem Apartment", "Digitaler Self-Check-in rund um die Uhr", "Schnelles WLAN inklusive", "Zentrale Lage in Düsseldorf-Friedrichstadt"].map((item) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-[#333333]">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#245DCE]/15 to-[#13C7E8]/15">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#245DCE]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-6 sm:px-8 py-6 sm:py-4 font-semibold text-white shadow-lg active:shadow-md transition-all min-h-[52px]">
                  <a href="https://bhhliving.holidayfuture.com/search?city=D%C3%BCsseldorf" target="_blank" rel="noopener noreferrer">Jetzt direkt buchen</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-2 border-[#245DCE]/25 bg-white px-6 sm:px-8 py-6 sm:py-4 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 hover:text-[#245DCE] hover:border-[#245DCE]/40 active:bg-[#245DCE]/5 transition-all min-h-[52px]">
                  <Link href="/kontakt">Anfrage senden</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[20px] sm:rounded-3xl shadow-2xl">
                <Image
                  src="/images/bhh-hero.jpg"
                  alt="Helles BHH Living Apartment in Düsseldorf mit Doppelbett und moderner Einrichtung"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div 
                className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 rounded-xl sm:rounded-2xl bg-white p-3 sm:p-5 shadow-xl"
                style={{ boxShadow: "0 20px 50px rgba(15, 23, 42, 0.12)" }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#245DCE]/15 to-[#13C7E8]/15">
                    <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#245DCE]" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-[#171717]">8.4/10</p>
                    <p className="text-xs sm:text-sm text-[#555555]">Gästebewertung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />

      {/* Features Grid */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] md:text-4xl">
              Was dein Apartment in Düsseldorf bietet
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-[#555555]">
              Die BHH Living Apartments sind auf unkomplizierte Aufenthalte ausgelegt – mit allem, was du brauchst.
            </p>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-[20px] sm:rounded-[24px] bg-white p-5 sm:p-6 transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-1"
                style={{
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.04)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div 
                  className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(145deg, rgba(36,93,206,0.12), rgba(19,199,232,0.12))" }}
                >
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#245DCE]" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#171717]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555555]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-balance text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] md:text-4xl">
                Zentral in Düsseldorf-Friedrichstadt
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-[#555555]">
                Die BHH Living Apartments befinden sich in Düsseldorf-Friedrichstadt – einem lebendigen Viertel mit kurzen Wegen zur Innenstadt, Altstadt und zum Hauptbahnhof.
              </p>
              
              <div className="mt-6 sm:mt-8 space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="h-5 w-5 text-[#245DCE] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#171717]">Corneliusstraße 110a-c</p>
                    <p className="text-sm sm:text-base text-[#555555]">40215 Düsseldorf-Friedrichstadt</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-6 sm:px-8 py-6 sm:py-4 font-semibold text-white shadow-lg active:shadow-md transition-all min-h-[52px]">
                  <a href="https://bhhliving.holidayfuture.com/search?city=D%C3%BCsseldorf" target="_blank" rel="noopener noreferrer">Verfügbarkeit prüfen</a>
                </Button>
              </div>
            </div>

            <div 
              className="relative overflow-hidden rounded-[20px] sm:rounded-[28px]"
              style={{
                boxShadow: `
                  0 20px 50px -12px rgba(36, 93, 206, 0.12),
                  0 8px 20px -8px rgba(0, 0, 0, 0.06)
                `,
              }}
            >
              <Image
                src="/images/duesseldorf-location.png"
                alt="Sonniger Innenhof der BHH Living Apartments in Düsseldorf-Friedrichstadt"
                width={600}
                height={500}
                className="h-auto w-full object-cover object-center"
              />
              
              {/* Location Badge */}
              <div 
                className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm p-4 sm:bottom-5 sm:left-5 sm:right-auto sm:p-4"
                style={{
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div 
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(145deg, #245DCE, #13C7E8)",
                    boxShadow: "0 4px 12px rgba(36, 93, 206, 0.25)",
                  }}
                >
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#171717] text-sm">Düsseldorf-Friedrichstadt</p>
                  <p className="text-xs text-[#555555]">Corneliusstraße 110a–c</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 text-center">
            <Link href="/apartments-ahaus" className="text-[#245DCE] hover:underline font-medium py-2 min-h-[44px] flex items-center">
              Auch in Ahaus: BHH Living Apartments
            </Link>
            <span className="hidden sm:inline text-[#555555]">|</span>
            <Link href="/faq" className="text-[#245DCE] hover:underline font-medium py-2 min-h-[44px] flex items-center">
              Häufige Fragen
            </Link>
            <span className="hidden sm:inline text-[#555555]">|</span>
            <Link href="/direkt-buchen" className="text-[#245DCE] hover:underline font-medium py-2 min-h-[44px] flex items-center">
              Direkt buchen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#245DCE] to-[#13C7E8] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-4xl">
            Dein Apartment in Düsseldorf wartet
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/85">
            Prüfe jetzt die Verfügbarkeit und buche dein BHH Living Apartment direkt – ohne Umwege.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-white px-6 sm:px-8 py-6 sm:py-4 font-semibold text-[#245DCE] shadow-lg active:shadow-md transition-all min-h-[52px]">
              <a href="https://bhhliving.holidayfuture.com/search?city=D%C3%BCsseldorf" target="_blank" rel="noopener noreferrer">Jetzt direkt buchen</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-2 border-white/40 bg-transparent px-6 sm:px-8 py-6 sm:py-4 font-semibold text-white hover:bg-white/10 hover:text-white hover:border-white/60 active:bg-white/10 transition-all min-h-[52px]">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

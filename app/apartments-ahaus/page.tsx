import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  Users, 
  Bed, 
  Bath, 
  Utensils, 
  Wifi, 
  Car, 
  Smartphone, 
  Home,
  Briefcase,
  Heart,
  Calendar,
  Tv,
  Shirt,
  HeadphonesIcon,
  Sun,
  MapPin,
  Building2,
  Trees,
  Navigation,
  ExternalLink,
  Check
} from "lucide-react"

export const metadata: Metadata = {
  title: "BHH Living Apartments Ahaus | Ferienwohnungen direkt buchen",
  description: "Drei moderne Apartments in Ahaus mit Küche, WLAN, Self-Check-in und Parkmöglichkeiten. Ideal für Familien, Gruppen, Business und längere Aufenthalte.",
  keywords: "BHH Living Apartments Ahaus, Apartments Ahaus, Ferienwohnung Ahaus, Unterkunft Ahaus, Wohnung auf Zeit Ahaus, Apartment mit Küche Ahaus, Self-Check-in Ahaus",
  alternates: {
    languages: {
      de: "/apartments-ahaus",
      en: "/en/ahaus-apartments",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "de_DE",
    url: "https://bhh-living.de/apartments-ahaus",
    title: "BHH Living Apartments Ahaus | Ferienwohnungen direkt buchen",
    description: "Drei moderne Apartments in Ahaus mit Küche, WLAN, Self-Check-in und Parkmöglichkeiten. Ideal für Familien, Gruppen, Business und längere Aufenthalte.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BHH Living Apartments Ahaus | Ferienwohnungen direkt buchen",
    description: "Drei moderne Apartments in Ahaus mit Küche, WLAN, Self-Check-in und Parkmöglichkeiten. Ideal für Familien, Gruppen, Business und längere Aufenthalte.",
    images: ["/images/og-image.jpg"],
  },
}

const trustFeatures = [
  { icon: Home, label: "3 Apartments in Ahaus" },
  { icon: Users, label: "Bis zu 6 Gäste" },
  { icon: Utensils, label: "Küche" },
  { icon: Wifi, label: "WLAN inklusive" },
  { icon: Smartphone, label: "Self-Check-in" },
  { icon: Car, label: "Parkmöglichkeiten" },
]

const apartments = [
  {
    title: "Große Ferienwohnung Ahaus",
    badge: "Bis zu 6 Gäste",
    badgeColor: "from-[#245DCE] to-[#13C7E8]",
    image: "/images/ahaus-grosse-2.jpg",
    thumbnails: ["/images/ahaus-grosse-1.jpg", "/images/ahaus-grosse-3.jpg", "/images/ahaus-grosse-4.jpg"],
    features: [
      { icon: Home, label: "84 m²" },
      { icon: Bed, label: "2 Schlafzimmer" },
      { icon: Bath, label: "2 Badezimmer" },
      { icon: Users, label: "4 Betten" },
      { icon: Sun, label: "Loggia" },
      { icon: Utensils, label: "Küche" },
      { icon: Wifi, label: "WLAN" },
      { icon: Car, label: "Parkmöglichkeiten" },
      { icon: Smartphone, label: "Self-Check-in" },
    ],
    description: "Großzügige BHH Living Wohnung in Ahaus mit zwei Schlafzimmern, zwei Badezimmern, hellem Wohn-/Essbereich und sonniger Loggia – ideal für Familien, Freunde, Geschäftsreisen und längere Aufenthalte.",
    cta: "Große Wohnung ansehen",
  },
  {
    title: "Stadtoase Ahaus mit Terrasse",
    badge: "Private Garage",
    badgeColor: "from-[#13C7E8] to-[#245DCE]",
    image: "/images/ahaus-stadtoase-1.jpg",
    thumbnails: ["/images/ahaus-stadtoase-2.jpg", "/images/ahaus-stadtoase-3.jpg", "/images/ahaus-stadtoase-4.jpg"],
    features: [
      { icon: Users, label: "Bis zu 4 Gäste" },
      { icon: Bed, label: "1 Schlafzimmer" },
      { icon: Bath, label: "1 Badezimmer" },
      { icon: Home, label: "Schlafsofa" },
      { icon: Sun, label: "Private Terrasse" },
      { icon: Utensils, label: "Küche" },
      { icon: Wifi, label: "WLAN" },
      { icon: Briefcase, label: "Arbeitsplatz" },
      { icon: Car, label: "Garage" },
    ],
    description: "Stilvolle Wohnung in Ahaus mit privater Terrasse, Garage, gemütlichem Wohnbereich und voll ausgestatteter Küche – perfekt für Paare, Geschäftsreisende und entspannte Aufenthalte in der Stadt.",
    cta: "Stadtoase ansehen",
  },
  {
    title: "Balkon-Wohnung Ahaus",
    badge: "62 m² mit Balkon",
    badgeColor: "from-[#245DCE] to-[#13C7E8]",
    image: "/images/ahaus-balkon-1.jpg",
    thumbnails: ["/images/ahaus-balkon-2.jpg", "/images/ahaus-balkon-3.jpg", "/images/ahaus-balkon-4.jpg"],
    features: [
      { icon: Home, label: "62 m²" },
      { icon: Users, label: "Bis zu 4 Gäste" },
      { icon: Bed, label: "1 Schlafzimmer" },
      { icon: Bath, label: "1,5 Badezimmer" },
      { icon: Home, label: "Schlafsofa" },
      { icon: Sun, label: "Balkon" },
      { icon: Utensils, label: "Küche" },
      { icon: Wifi, label: "WLAN" },
      { icon: Smartphone, label: "Self-Check-in" },
    ],
    description: "Moderne Balkon-Wohnung von BHH Living in Ahaus mit separatem Schlafzimmer, hellem Wohnbereich, Küche, Bad und Gäste-WC – ideal für Paare, kleine Familien, Businessgäste und Wohnen auf Zeit.",
    cta: "Balkon-Wohnung ansehen",
  },
]

const targetAudience = [
  {
    icon: Users,
    title: "Familien & Gruppen",
    description: "Mehr Platz und Flexibilität als ein klassisches Hotelzimmer – je nach Wohnung für bis zu 6 Gäste.",
  },
  {
    icon: Briefcase,
    title: "Geschäftsreisende",
    description: "Praktisch für berufliche Aufenthalte, Projekte und Termine in Ahaus und Umgebung.",
  },
  {
    icon: Calendar,
    title: "Längere Aufenthalte",
    description: "Mit Küche, Wohnbereich, WLAN und Self-Check-in ideal für mehrere Nächte oder Wohnen auf Zeit.",
  },
  {
    icon: Heart,
    title: "Private Reisen",
    description: "Für Familienbesuche, Kurztrips und entspannte Aufenthalte im Münsterland.",
  },
]

const amenities = [
  { icon: Utensils, label: "Küche" },
  { icon: Wifi, label: "WLAN" },
  { icon: Tv, label: "TV" },
  { icon: Smartphone, label: "Self-Check-in" },
  { icon: Car, label: "Parkmöglichkeiten" },
  { icon: Car, label: "Garage je nach Wohnung" },
  { icon: Sun, label: "Balkon oder Terrasse" },
  { icon: Briefcase, label: "Arbeitsplatz" },
  { icon: Shirt, label: "Frische Wäsche" },
  { icon: HeadphonesIcon, label: "Persönlicher Support" },
]

const locationFeatures = [
  { icon: MapPin, title: "Innenstadt Ahaus" },
  { icon: Building2, title: "Einkaufen & Gastronomie" },
  { icon: Trees, title: "Münsterland" },
  { icon: Navigation, title: "Gute Anbindung" },
]

const faqs = [
  {
    question: "Wie viele BHH Living Apartments gibt es in Ahaus?",
    answer: "BHH Living bietet in Ahaus drei moderne Apartments bzw. Wohnungen für unterschiedliche Aufenthalte an.",
  },
  {
    question: "Für wie viele Gäste sind die Apartments geeignet?",
    answer: "Je nach Wohnung eignen sich die Apartments für bis zu 4 oder bis zu 6 Gäste.",
  },
  {
    question: "Haben die Apartments eine Küche?",
    answer: "Ja, alle BHH Living Apartments in Ahaus verfügen über eine Küche und sind für unabhängige Aufenthalte ausgelegt.",
  },
  {
    question: "Gibt es Parkmöglichkeiten?",
    answer: "Ja, je nach Wohnung stehen Parkmöglichkeiten zur Verf������gung. Eine Wohnung bietet zusätzlich eine private Garage.",
  },
  {
    question: "Wie funktioniert der Check-in?",
    answer: "Der Check-in erfolgt unkompliziert per Self-Check-in. Du erhältst alle Informationen vor deiner Anreise.",
  },
  {
    question: "Kann ich direkt buchen?",
    answer: "Ja, du kannst die BHH Living Apartments Ahaus direkt buchen oder eine Anfrage senden.",
  },
]

// AHAUS_BACKGROUND_IMAGE_URL - Replace with real Ahaus/Münsterland photo when available
const AHAUS_BACKGROUND_IMAGE_URL = "/images/ahaus-background.jpg"

export default function ApartmentsAhausPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen">
        {/* Background Layer - fixed position for parallax effect */}
        <div 
          className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${AHAUS_BACKGROUND_IMAGE_URL})`,
          }}
          aria-hidden="true"
        />
        
        {/* White/Off-White Overlay - 84% opacity */}
        <div 
          className="pointer-events-none fixed inset-0"
          style={{
            background: "rgba(248, 250, 252, 0.84)",
          }}
          aria-hidden="true"
        />
        
        {/* Subtle radial blue/turquoise glow - top right */}
        <div 
          className="pointer-events-none fixed inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 85% 10%, rgba(36, 93, 206, 0.06), transparent 60%), radial-gradient(ellipse 50% 35% at 90% 15%, rgba(19, 199, 232, 0.04), transparent 50%)",
          }}
          aria-hidden="true"
        />

        {/* Content Layer */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#245DCE]">
                BHH Living Apartments Ahaus
              </p>
              <h1 className="text-balance text-[1.75rem] leading-tight sm:text-4xl font-bold tracking-tight text-[#171717] md:text-5xl lg:text-6xl">
                BHH Living Apartments Ahaus
              </h1>
              <p className="mt-4 sm:mt-6 text-pretty text-base sm:text-lg leading-relaxed text-[#555555]">
                Drei moderne BHH Living Apartments in Ahaus – von der kompakten Balkon-Wohnung bis zur großzügigen Ferienwohnung für bis zu 6 Gäste. Mit Küche, WLAN, Self-Check-in, Parkmöglichkeiten und persönlichem Support.
              </p>
              
              {/* CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-6 sm:px-8 py-6 sm:py-4 font-semibold text-white shadow-lg active:shadow-md transition-all min-h-[52px]">
                  <a href="https://bhhliving.holidayfuture.com/search?city=Ahaus" target="_blank" rel="noopener noreferrer">
                    Apartments Ahaus buchen
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-2 border-[#245DCE]/25 bg-white px-6 sm:px-8 py-6 sm:py-4 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 hover:text-[#245DCE] hover:border-[#245DCE]/40 active:bg-[#245DCE]/5 transition-all min-h-[52px]">
                  <Link href="/kontakt">Anfrage senden</Link>
                </Button>
              </div>

              {/* Trust Pills */}
              <div className="mt-6 sm:mt-10 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3">
                {trustFeatures.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center justify-center sm:justify-start gap-2 rounded-full bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-[#555555] shadow-sm"
                    style={{ border: "1px solid rgba(36, 93, 206, 0.1)" }}
                  >
                    <feature.icon className="h-4 w-4 text-[#245DCE] shrink-0" />
                    <span className="truncate">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Apartments Section */}
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#245DCE]">
                Unsere Apartments in Ahaus
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                Wähle dein Apartment.
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3">
              {apartments.map((apartment, index) => (
                <div
                  key={apartment.title}
                  id={`apartment-ahaus-${index}`}
                  className="group flex scroll-mt-28 flex-col overflow-hidden rounded-[20px] sm:rounded-[28px] transition-all duration-300 active:scale-[0.99] sm:hover:-translate-y-2"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,252,0.95))",
                    border: "1px solid rgba(255,255,255,0.9)",
                    boxShadow: `
                      0 12px 30px -10px rgba(36, 93, 206, 0.1),
                      0 4px 12px -4px rgba(0, 0, 0, 0.05),
                      inset 0 1px 0 rgba(255,255,255,1)
                    `,
                  }}
                >
                  {/* Main Image */}
                  <div className="relative h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden">
                    <Image
                      src={apartment.image}
                      alt={`${apartment.title} - BHH Living Ferienwohnung in Ahaus`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Badge */}
                    <div 
                      className={`absolute left-4 top-4 rounded-full bg-gradient-to-r ${apartment.badgeColor} px-4 py-1.5 text-sm font-semibold text-white shadow-md`}
                    >
                      {apartment.badge}
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="flex gap-1 p-1 bg-[#F8FAFC]">
                    {apartment.thumbnails.map((thumb, idx) => (
                      <div key={idx} className="relative h-[72px] flex-1 overflow-hidden">
                        <Image
                          src={thumb}
                          alt={`${apartment.title} - Bild ${idx + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-[#171717]">{apartment.title}</h3>
                    
                    {/* Features Grid */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {apartment.features.slice(0, 6).map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-1.5 rounded-full bg-[#F8FAFC] px-3 py-1.5 text-xs font-medium text-[#555555]"
                          style={{ border: "1px solid rgba(36, 93, 206, 0.08)" }}
                        >
                          <feature.icon className="h-3.5 w-3.5 text-[#245DCE]" />
                          {feature.label}
                        </div>
                      ))}
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-[#555555]">
                      {apartment.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-5 sm:mt-6">
                      <Button 
                        asChild 
                        className="w-full rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] font-semibold text-white shadow-md active:shadow-sm transition-all min-h-[48px] py-3"
                      >
                        <a href="https://bhhliving.holidayfuture.com/search?city=Ahaus" target="_blank" rel="noopener noreferrer">
                          {apartment.cta}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                Für wen sind die BHH Living Apartments Ahaus geeignet?
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {targetAudience.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,252,0.92))",
                    border: "1px solid rgba(255,255,255,0.8)",
                    boxShadow: `
                      0 12px 32px -8px rgba(36, 93, 206, 0.08),
                      0 4px 12px rgba(0, 0, 0, 0.03),
                      inset 0 1px 0 rgba(255,255,255,1)
                    `,
                  }}
                >
                  <div 
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: "linear-gradient(145deg, rgba(36,93,206,0.1), rgba(19,199,232,0.1))",
                      boxShadow: "0 4px 12px rgba(36, 93, 206, 0.1)",
                    }}
                  >
                    <item.icon className="h-6 w-6 text-[#245DCE]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555555]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-transparent to-[#EEF7FF]/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#245DCE]">
                Ausstattung in Ahaus
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                Alles da für deinen Aufenthalt in Ahaus.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-[#555555]">
                Die BHH Living Apartments in Ahaus sind auf unkomplizierte Aufenthalte ausgelegt: Küche, WLAN, TV, Self-Check-in, Parkmöglichkeiten und persönliche Unterstützung, wenn du sie brauchst.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5">
              {amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-white p-3 sm:p-4"
                  style={{
                    boxShadow: "0 4px 12px rgba(36, 93, 206, 0.06)",
                    border: "1px solid rgba(36, 93, 206, 0.06)",
                  }}
                >
                  <div 
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "linear-gradient(145deg, rgba(36,93,206,0.08), rgba(19,199,232,0.08))",
                    }}
                  >
                    <amenity.icon className="h-5 w-5 text-[#245DCE]" />
                  </div>
                  <span className="text-sm font-medium text-[#555555]">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#245DCE]">
                Lage in Ahaus
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                BHH Living Apartments in Ahaus.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-[#555555]">
                Unsere Apartments in Ahaus sind ideal für Gäste, die eine moderne Unterkunft mit einfacher Anreise und flexibler Nutzung suchen. Ob privat oder beruflich – bei BHH Living wohnst du unabhängig und komfortabel.
              </p>
            </div>

            <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {locationFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4"
                  style={{
                    boxShadow: "0 4px 12px rgba(36, 93, 206, 0.06)",
                    border: "1px solid rgba(36, 93, 206, 0.06)",
                  }}
                >
                  <div 
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "linear-gradient(145deg, rgba(36,93,206,0.1), rgba(19,199,232,0.1))",
                    }}
                  >
                    <feature.icon className="h-5 w-5 text-[#245DCE]" />
                  </div>
                  <span className="text-sm font-medium text-[#555555]">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#EEF7FF]/30 to-transparent">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#245DCE]">
                Häufige Fragen
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                FAQ zu den BHH Living Apartments Ahaus
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="overflow-hidden rounded-2xl border-0 bg-white px-6"
                  style={{
                    boxShadow: "0 4px 12px rgba(36, 93, 206, 0.05)",
                    border: "1px solid rgba(36, 93, 206, 0.06)",
                  }}
                >
                  <AccordionTrigger className="py-5 text-left font-semibold text-[#171717] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[#555555] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#245DCE] to-[#13C7E8]">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Dein Apartment in Ahaus direkt bei BHH Living buchen.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
              Prüfe die Verfügbarkeit oder sende uns eine Anfrage. Wir helfen dir persönlich weiter und sorgen für eine unkomplizierte Anreise.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 font-semibold text-[#245DCE] shadow-lg hover:bg-white/95 hover:shadow-xl transition-all"
              >
                <a href="https://bhhliving.holidayfuture.com/search?city=Ahaus" target="_blank" rel="noopener noreferrer">
                  Direkt buchen
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-white/40 bg-transparent px-8 font-semibold text-white hover:bg-white/10 hover:border-white/60 transition-all"
              >
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
            
            {/* Internal Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/80">
              <Link href="/apartments-duesseldorf" className="hover:text-white hover:underline">
                Auch in Düsseldorf: BHH Living Apartments
              </Link>
              <span>|</span>
              <Link href="/faq" className="hover:text-white hover:underline">
                Häufige Fragen
              </Link>
            </div>
          </div>
        </section>
        </div>{/* End Content Layer */}
      </main>
      <Footer />
    </>
  )
}

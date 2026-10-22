import { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LocationSelect } from "@/components/location-select"
import { HostawaySearch } from "@/components/hostaway-search"
import { Benefits } from "@/components/benefits"
import { Apartments } from "@/components/apartments"
import { Process } from "@/components/process"
import { Location } from "@/components/location"
import { Reviews } from "@/components/reviews"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "BHH Living Apartments | Düsseldorf & Ahaus direkt buchen",
  description: "Moderne BHH Living Apartments in Düsseldorf und Ahaus mit Küche, WLAN, Self-Check-in und persönlichem Support. Jetzt direkt buchen oder Anfrage senden.",
  keywords: "BHH Living Apartments, Apartments Düsseldorf, Apartments Ahaus, direkt buchen, Self-Check-in, Serviced Apartments",
  alternates: {
    languages: {
      de: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "de_DE",
    url: "https://bhh-living.de/",
    title: "BHH Living Apartments | Düsseldorf & Ahaus direkt buchen",
    description: "Moderne BHH Living Apartments in Düsseldorf und Ahaus mit Küche, WLAN, Self-Check-in und persönlichem Support. Jetzt direkt buchen oder Anfrage senden.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf und Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BHH Living Apartments | Düsseldorf & Ahaus direkt buchen",
    description: "Moderne BHH Living Apartments in Düsseldorf und Ahaus mit Küche, WLAN, Self-Check-in und persönlichem Support. Jetzt direkt buchen oder Anfrage senden.",
    images: ["/images/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LocationSelect />
      <HostawaySearch />
      <Benefits />
      <Apartments />
      <Process />
      <Location />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

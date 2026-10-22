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
  title: "BHH Living Apartments | Book Direct in Dusseldorf & Ahaus",
  description: "Modern BHH Living apartments in Dusseldorf and Ahaus with kitchen, WiFi, self-check-in and personal support. Book direct or send an inquiry.",
  keywords: "BHH Living Apartments, Apartments Dusseldorf, Apartments Ahaus, book direct, self-check-in, serviced apartments Germany",
  alternates: {
    languages: {
      de: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "en_US",
    url: "https://bhh-living.de/en",
    title: "BHH Living Apartments | Book Direct in Dusseldorf & Ahaus",
    description: "Modern BHH Living apartments in Dusseldorf and Ahaus with kitchen, WiFi, self-check-in and personal support. Book direct or send an inquiry.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Dusseldorf and Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BHH Living Apartments | Book Direct in Dusseldorf & Ahaus",
    description: "Modern BHH Living apartments in Dusseldorf and Ahaus with kitchen, WiFi, self-check-in and personal support. Book direct or send an inquiry.",
    images: ["/images/og-image.jpg"],
  },
}

export default function HomePageEN() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero lang="en" />
      <LocationSelect lang="en" />
      <HostawaySearch lang="en" />
      <Benefits lang="en" />
      <Apartments lang="en" />
      <Process lang="en" />
      <Location lang="en" />
      <Reviews lang="en" />
      <FAQ lang="en" />
      <CTA lang="en" />
      <Footer lang="en" />
    </main>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Wifi, ChefHat, Smartphone, HeadphonesIcon } from "lucide-react"
import { type Language } from "@/lib/translations"

const trustFeaturesContent = {
  de: [
    { icon: Smartphone, label: "Self-Check-in" },
    { icon: ChefHat, label: "Apartment mit Küche" },
    { icon: Wifi, label: "WLAN inklusive" },
    { icon: HeadphonesIcon, label: "BHH Support" },
  ],
  en: [
    { icon: Smartphone, label: "Self check-in" },
    { icon: ChefHat, label: "Apartment with kitchen" },
    { icon: Wifi, label: "WiFi included" },
    { icon: HeadphonesIcon, label: "BHH Support" },
  ],
}

const heroContent = {
  de: {
    badge: "BHH Living Apartments",
    headline: "Apartments für deinen Aufenthalt.",
    claim: "Be different – Stay BHH Living.",
    claimMain: "Be different – Stay ",
    claimAccent: "BHH Living.",
    subline: "Stilvolle Apartments in Düsseldorf und Ahaus – flexibel, unkompliziert und direkt buchbar.",
    ctaPrimary: "Unterkünfte entdecken",
    ctaPrimaryHref: "#standorte",
    ctaSecondary: "Verfügbarkeit prüfen",
    imageAlt: "Helles BHH Living Apartment mit gemütlichem Wohnbereich und moderner Einrichtung",
    directBooking: "Direktbuchung möglich",
  },
  en: {
    badge: "BHH Living Apartments",
    headline: "Apartments for your stay.",
    claim: "Be different – Stay BHH Living.",
    claimMain: "Be different – Stay ",
    claimAccent: "BHH Living.",
    subline: "Stylish apartments in Düsseldorf and Ahaus – flexible, effortless and ready to book.",
    ctaPrimary: "Explore apartments",
    ctaPrimaryHref: "#standorte",
    ctaSecondary: "Check availability",
    imageAlt: "Bright BHH Living apartment with a cozy living area and modern furnishings",
    directBooking: "Direct booking available",
  },
}

interface HeroProps {
  lang?: Language
}

export function Hero({ lang = "de" }: HeroProps) {
  const content = heroContent[lang]
  const trustFeatures = trustFeaturesContent[lang]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#EEF7FF] py-8 sm:py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="max-w-xl">
            <h1 className="text-balance text-[1.75rem] leading-[1.15] font-bold tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              {content.claimMain}
              <span className="bg-gradient-to-r from-[#245DCE] to-[#13C7E8] bg-clip-text text-transparent">
                {content.claimAccent}
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-pretty text-base sm:text-lg leading-relaxed text-[#555555]">
              {content.subline}
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-6 sm:px-8 py-6 sm:py-4 font-semibold text-white shadow-lg active:shadow-md transition-all min-h-[52px]">
                <a href={content.ctaPrimaryHref}>{content.ctaPrimary}</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-2 border-[#245DCE]/25 bg-white px-6 sm:px-8 py-6 sm:py-4 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 hover:text-[#245DCE] hover:border-[#245DCE]/40 active:bg-[#245DCE]/5 transition-all min-h-[52px]">
                <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer">{content.ctaSecondary}</a>
              </Button>
            </div>

            {/* Trust Features */}
            <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
              {trustFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center justify-center sm:justify-start gap-2 rounded-full bg-white px-3 sm:px-4 py-2 sm:py-2.5 shadow-sm border border-[#171717]/5"
                >
                  <feature.icon className="h-4 w-4 text-[#245DCE] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#171717] truncate">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div 
              className="relative overflow-hidden rounded-[20px] sm:rounded-[32px]"
              style={{
                boxShadow: `
                  0 25px 50px -12px rgba(36, 93, 206, 0.15),
                  0 12px 24px -8px rgba(0, 0, 0, 0.1)
                `,
              }}
            >
              <Image
                src="/images/bhh-hero-2.png"
                alt={content.imageAlt}
                width={800}
                height={600}
                className="aspect-[4/3] h-auto w-full object-cover"
                priority
              />
              {/* Subtle "Direktbuchung möglich" - hidden on very small screens */}
              <p 
                className="hidden sm:block absolute bottom-4 left-4 text-xs sm:text-sm font-medium text-white/60 sm:bottom-6 sm:left-6"
                style={{
                  textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                }}
              >
                {content.directBooking}
              </p>
              
              {/* Payment Badges - smaller on mobile */}
              <div 
                className="absolute bottom-3 right-3 flex items-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl bg-white/90 px-2 py-1.5 sm:px-4 sm:py-2.5 backdrop-blur-sm sm:bottom-6 sm:right-6"
                style={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="flex h-5 sm:h-6 w-auto items-center justify-center rounded bg-[#003087]/10 px-1 sm:px-1.5">
                  <span className="text-[8px] sm:text-[10px] font-bold text-[#003087]">PayPal</span>
                </div>
                <div className="hidden xs:flex h-5 sm:h-6 w-auto items-center justify-center rounded bg-black/5 px-1 sm:px-1.5">
                  <span className="text-[8px] sm:text-[10px] font-semibold text-black">Apple Pay</span>
                </div>
                <div className="flex h-5 sm:h-6 w-auto items-center justify-center rounded bg-[#635BFF]/10 px-1 sm:px-1.5">
                  <span className="text-[8px] sm:text-[10px] font-bold text-[#635BFF]">Stripe</span>
                </div>
                <div className="flex h-5 sm:h-6 w-auto items-center justify-center rounded bg-[#1A1F71]/10 px-1 sm:px-1.5">
                  <span className="text-[8px] sm:text-[10px] font-bold text-[#1A1F71]">VISA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

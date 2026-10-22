import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { type Language } from "@/lib/translations"

const locationSelectContent = {
  de: {
    title: "Wo möchtest du wohnen?",
    subtitle: "Wähle deinen Standort und entdecke unsere Apartments.",
    locations: [
      {
        name: "Düsseldorf",
        description: "City, Business & Kurzaufenthalt",
        cta: "Apartments in Düsseldorf",
        href: "/apartments-duesseldorf",
        image: "/images/bhh-hero.jpg",
        alt: "Helles BHH Living Apartment in Düsseldorf mit moderner Einrichtung",
      },
      {
        name: "Ahaus",
        description: "Mehr Platz, Terrasse & entspannter Aufenthalt",
        cta: "Apartments in Ahaus",
        href: "/apartments-ahaus",
        image: "/images/ahaus-grosse-1.jpg",
        alt: "Helle BHH Living Ferienwohnung in Ahaus mit Wohn- und Essbereich",
      },
    ],
  },
  en: {
    title: "Where would you like to stay?",
    subtitle: "Choose your location and discover our apartments.",
    locations: [
      {
        name: "Düsseldorf",
        description: "City, Business & short stays",
        cta: "Apartments in Düsseldorf",
        href: "/en/dusseldorf-apartments",
        image: "/images/bhh-hero.jpg",
        alt: "Bright BHH Living apartment in Dusseldorf with modern furnishings",
      },
      {
        name: "Ahaus",
        description: "More space, terrace & a relaxed stay",
        cta: "Apartments in Ahaus",
        href: "/en/ahaus-apartments",
        image: "/images/ahaus-grosse-1.jpg",
        alt: "Bright BHH Living holiday apartment in Ahaus with living and dining area",
      },
    ],
  },
}

interface LocationSelectProps {
  lang?: Language
}

export function LocationSelect({ lang = "de" }: LocationSelectProps) {
  const content = locationSelectContent[lang]

  return (
    <section id="standorte" className="scroll-mt-20 bg-gradient-to-b from-[#EEF7FF] to-[#F8FAFC] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
            {content.title}
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-[#555555] sm:text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {content.locations.map((location) => (
            <Link
              key={location.name}
              href={location.href}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-[#245DCE]/12 bg-white shadow-[0_10px_30px_-12px_rgba(36,93,206,0.18)] transition-all duration-300 ease-out active:scale-[0.99] sm:hover:-translate-y-1.5 sm:hover:shadow-[0_20px_40px_-16px_rgba(36,93,206,0.28)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out sm:group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-[#245DCE]" />
                  <span className="text-sm font-semibold text-[#171717]">{location.name}</span>
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-6 py-3.5 font-semibold text-white shadow-lg transition-all group-active:shadow-md">
                  {location.cta}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Building2, ChefHat, Briefcase, Moon } from "lucide-react"
import { type Language } from "@/lib/translations"

const apartmentsContent = {
  de: {
    badge: "BHH Living Apartments Düsseldorf",
    title: "Serviced Apartments in Düsseldorf für kurze Trips und längere Aufenthalte.",
    subtitle: "Ob Businessreise, Citytrip oder längerer Aufenthalt: Die BHH Living Apartments in Düsseldorf verbinden die Freiheit einer eigenen Wohnung mit dem einfachen Ablauf eines modernen Hotelaufenthalts.",
    types: [
      { title: "Micro-Apartments Düsseldorf", description: "Kompakt, modern und clever eingerichtet – ideal für kurze Aufenthalte, Alleinreisende und Businessgäste.", alt: "Gemütlicher Schlafbereich eines BHH Living Apartments in Düsseldorf" },
      { title: "Apartments mit Küche", description: "Jedes BHH Living Apartment verfügt über eine Küche und bietet dir mehr Unabhängigkeit als ein klassisches Hotelzimmer.", alt: "Moderne Küche eines BHH Living Apartments in Düsseldorf" },
      { title: "Business & Longstay", description: "Für Projektaufenthalte, Geschäftsreisen und längere Aufenthalte in Düsseldorf – mit WLAN, Self-Check-in und persönlichem Support.", alt: "Arbeitsbereich eines BHH Living Apartments in Düsseldorf" },
      { title: "Ruhige Nächte", description: "Nach deinem Tag in Düsseldorf erwartet dich ein gemütliches Apartment mit klarer Ausstattung und entspannter Atmosphäre.", alt: "Heller Wohnbereich eines BHH Living Apartments in Düsseldorf" },
    ],
  },
  en: {
    badge: "BHH Living Apartments Dusseldorf",
    title: "Serviced apartments in Dusseldorf for short trips and longer stays.",
    subtitle: "Whether business trip, city trip or longer stay: The BHH Living apartments in Dusseldorf combine the freedom of your own apartment with the simple process of a modern hotel stay.",
    types: [
      { title: "Micro-Apartments Dusseldorf", description: "Compact, modern and cleverly furnished – ideal for short stays, solo travelers and business guests.", alt: "Cozy sleeping area of a BHH Living apartment in Dusseldorf" },
      { title: "Apartments with kitchen", description: "Every BHH Living apartment has a kitchen and offers you more independence than a classic hotel room.", alt: "Modern kitchen of a BHH Living apartment in Dusseldorf" },
      { title: "Business & Longstay", description: "For project stays, business trips and longer stays in Dusseldorf – with WiFi, self check-in and personal support.", alt: "Work area of a BHH Living apartment in Dusseldorf" },
      { title: "Peaceful nights", description: "After your day in Dusseldorf, a cozy apartment with clear furnishings and relaxed atmosphere awaits you.", alt: "Bright living area of a BHH Living apartment in Dusseldorf" },
    ],
  },
}

const apartmentImages = [
  { image: "/images/bhh-bedroom.jpg", imagePosition: "center 35%" },
  { image: "/images/bhh-kitchen.jpg", imagePosition: "center 55%" },
  { image: "/images/bhh-workspace.jpg", imagePosition: "center center" },
  { image: "/images/bhh-living.jpg", imagePosition: "center 40%" },
]

const icons = [Building2, ChefHat, Briefcase, Moon]

interface ApartmentsProps {
  lang?: Language
}

export function Apartments({ lang = "de" }: ApartmentsProps) {
  const content = apartmentsContent[lang]

  return (
    <section id="apartments" className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
            {content.badge}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-[#555555]">
            {content.subtitle}
          </p>
        </div>

        <div id="zimmer" className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {content.types.map((apartment, index) => {
            const Icon = icons[index]
            const imageData = apartmentImages[index]
            return (
              <div
                key={apartment.title}
                className="group cursor-pointer overflow-hidden rounded-[24px] sm:rounded-[32px] transition-all duration-300 ease-out active:scale-[0.98] sm:hover:-translate-y-2"
                style={{
                  background: "linear-gradient(165deg, #FFFFFF 0%, #F8FBFD 100%)",
                  border: "1px solid rgba(36, 93, 206, 0.08)",
                  boxShadow: `
                    0 12px 30px -10px rgba(36, 93, 206, 0.1),
                    0 4px 12px -4px rgba(0, 0, 0, 0.06),
                    inset 0 1px 0 rgba(255,255,255,1)
                  `,
                }}
              >
                <div 
                  className="relative h-[220px] sm:h-[260px] overflow-hidden"
                  style={{
                    boxShadow: "inset 0 -20px 40px -20px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Image
                    src={imageData.image}
                    alt={apartment.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: imageData.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                </div>
                <div className="p-6 pt-5">
                  <div 
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: "linear-gradient(145deg, rgba(36,93,206,0.1), rgba(19,199,232,0.1))",
                      boxShadow: `
                        0 6px 16px rgba(36, 93, 206, 0.12),
                        inset 0 1px 0 rgba(255,255,255,0.9)
                      `,
                    }}
                  >
                    <Icon className="h-5 w-5 text-[#245DCE]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#171717]">{apartment.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555555]">
                    {apartment.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

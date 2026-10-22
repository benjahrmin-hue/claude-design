import Image from "next/image"
import { MapPin, Train, Building2, Navigation } from "lucide-react"
import { type Language } from "@/lib/translations"

const locationContent = {
  de: {
    badge: "Standort",
    title: "BHH Living Apartments zentral in Düsseldorf-Friedrichstadt.",
    description: "Unsere Apartments in der Corneliusstraße 110a-c in Düsseldorf-Friedrichstadt sind ideal für Gäste, die kurze Wege, eine einfache Anreise und eine komfortable Rückzugsmöglichkeit suchen. Ob beruflich oder privat – bei BHH Living wohnst du flexibel und unabhängig.",
    badgeLocation: "Düsseldorf-Friedrichstadt",
    badgeAddress: "Corneliusstraße 110a-c",
    imageAlt: "Sonniger Innenhof der BHH Living Apartments in Düsseldorf-Friedrichstadt",
    features: [
      { distance: "ca. 1,7 km", title: "zur Königsallee" },
      { distance: "ca. 1,6 km", title: "zum Hauptbahnhof" },
      { distance: "ca. 550 m", title: "zur S-Bahn" },
      { distance: "Ideal", title: "für Business- und Städtetrips" },
    ],
  },
  en: {
    badge: "Location",
    title: "BHH Living apartments centrally in Dusseldorf-Friedrichstadt.",
    description: "Our apartments at Corneliusstraße 110a-c in Dusseldorf-Friedrichstadt are ideal for guests looking for short distances, easy arrival and a comfortable retreat. Whether for business or pleasure – at BHH Living you live flexibly and independently.",
    badgeLocation: "Dusseldorf-Friedrichstadt",
    badgeAddress: "Corneliusstraße 110a-c",
    imageAlt: "Sunny courtyard of BHH Living apartments in Dusseldorf-Friedrichstadt",
    features: [
      { distance: "approx. 1.7 km", title: "to Königsallee" },
      { distance: "approx. 1.6 km", title: "to main station" },
      { distance: "approx. 550 m", title: "to S-Bahn" },
      { distance: "Ideal", title: "for business and city trips" },
    ],
  },
}

const featureImages = [
  "/images/location-koe.jpg",
  "/images/location-hbf.jpg",
  "/images/location-sbahn.jpg",
  "/images/location-skyline.jpg",
]

const icons = [MapPin, Train, Navigation, Building2]

interface LocationProps {
  lang?: Language
}

export function Location({ lang = "de" }: LocationProps) {
  const content = locationContent[lang]

  return (
    <section id="lage" className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Location Image with Badge */}
          <div 
            className="relative overflow-hidden rounded-[28px]"
            style={{
              boxShadow: `
                0 20px 50px -12px rgba(36, 93, 206, 0.12),
                0 8px 20px -8px rgba(0, 0, 0, 0.06)
              `,
            }}
          >
            <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
              <Image
                src="/images/duesseldorf-location.png"
                alt={content.imageAlt}
                fill
                className="object-cover object-center"
              />
              
              {/* Location Badge */}
              <div 
                className="absolute bottom-4 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white/98 backdrop-blur-sm p-4 sm:bottom-5 sm:left-5 sm:right-auto sm:p-5"
                style={{
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div 
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(145deg, #245DCE, #13C7E8)",
                    boxShadow: "0 4px 12px rgba(36, 93, 206, 0.25)",
                  }}
                >
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#171717]">{content.badgeLocation}</p>
                  <p className="text-sm text-[#555555]">{content.badgeAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
              {content.badge}
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-[#555555]">
              {content.description}
            </p>

            <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              {content.features.map((feature, index) => {
                const Icon = icons[index]
                return (
                  <div 
                    key={feature.title} 
                    className="group relative overflow-hidden rounded-[20px] sm:rounded-[26px] transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-1"
                    style={{
                      boxShadow: `
                        0 8px 24px rgba(36, 93, 206, 0.08),
                        0 2px 8px rgba(0, 0, 0, 0.04)
                      `,
                      border: "1px solid rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {/* Background Image Layer */}
                    <div className="absolute inset-0">
                      <Image
                        src={featureImages[index]}
                        alt=""
                        fill
                        className="object-cover opacity-40"
                      />
                    </div>
                    
                    {/* White/Light Overlay */}
                    <div className="absolute inset-0 bg-white/60" />
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 backdrop-blur-[2px] min-h-[64px]">
                      <div 
                        className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-white/90"
                        style={{
                          boxShadow: "0 2px 8px rgba(36, 93, 206, 0.12)",
                        }}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#245DCE]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#245DCE]">{feature.distance}</p>
                        <p className="text-sm text-[#555555]">{feature.title}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

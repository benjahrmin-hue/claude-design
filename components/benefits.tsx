import { MessageCircle, Shield, Smartphone, HeadphonesIcon } from "lucide-react"
import { type Language } from "@/lib/translations"

const benefitsContent = {
  de: {
    title: "Warum direkt bei BHH Living buchen?",
    subtitle: "Wenn du dein Apartment in Düsseldorf direkt bei BHH Living buchst, hast du kurze Wege, klare Informationen und direkten Kontakt zu uns – vor, während und nach deinem Aufenthalt.",
    items: [
      { title: "Direkter Kontakt zu BHH Living", description: "Keine Plattform-Umwege: Bei Fragen erreichst du direkt unser BHH Living Team." },
      { title: "Sicher direkt buchen", description: "Prüfe Verfügbarkeiten und buche dein Apartment bequem über unsere Direktbuchung." },
      { title: "Digitaler Check-in", description: "Online einchecken, Zugangsdaten erhalten und flexibel in deinem Apartment ankommen." },
      { title: "Persönlicher Support", description: "Wir begleiten deinen Aufenthalt freundlich, schnell und unkompliziert." },
    ],
  },
  en: {
    title: "Why book directly with BHH Living?",
    subtitle: "When you book your apartment in Dusseldorf directly with BHH Living, you get short communication paths, clear information and direct contact with us – before, during and after your stay.",
    items: [
      { title: "Direct contact to BHH Living", description: "No platform detours: For questions you reach our BHH Living team directly." },
      { title: "Book securely and directly", description: "Check availability and book your apartment conveniently through our direct booking." },
      { title: "Digital check-in", description: "Check in online, receive access data and arrive flexibly at your apartment." },
      { title: "Personal support", description: "We accompany your stay friendly, fast and uncomplicated." },
    ],
  },
}

const icons = [MessageCircle, Shield, Smartphone, HeadphonesIcon]

interface BenefitsProps {
  lang?: Language
}

export function Benefits({ lang = "de" }: BenefitsProps) {
  const content = benefitsContent[lang]

  return (
    <section id="highlights" className="bg-[#F8FBFD] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-[#555555]">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {content.items.map((benefit, index) => {
            const Icon = icons[index]
            return (
              <div
                key={benefit.title}
                className="group cursor-pointer rounded-[30px] p-7 transition-all duration-300 ease-out hover:-translate-y-2"
                style={{
                  background: "linear-gradient(165deg, #FFFFFF 0%, #F8FBFD 100%)",
                  border: "1px solid rgba(36, 93, 206, 0.08)",
                  boxShadow: `
                    0 20px 50px -15px rgba(36, 93, 206, 0.1),
                    0 8px 20px -8px rgba(0, 0, 0, 0.06),
                    inset 0 1px 0 rgba(255,255,255,1)
                  `,
                }}
              >
                <div 
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(145deg, rgba(36,93,206,0.1), rgba(19,199,232,0.1))",
                    boxShadow: `
                      0 6px 16px rgba(36, 93, 206, 0.12),
                      inset 0 1px 0 rgba(255,255,255,0.9)
                    `,
                  }}
                >
                  <Icon className="h-6 w-6 text-[#245DCE]" />
                </div>
                <h3 className="text-lg font-bold text-[#171717]">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555555]">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

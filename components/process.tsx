import { CalendarCheck, ClipboardCheck, Key, Home } from "lucide-react"
import { type Language } from "@/lib/translations"

const processContent = {
  de: {
    badge: "So funktioniert es",
    title: "So einfach läuft dein Aufenthalt bei BHH Living ab.",
    steps: [
      { step: "01", title: "Direkt buchen oder anfragen", description: "Prüfe dein Apartment in Düsseldorf direkt online oder sende uns eine Anfrage." },
      { step: "02", title: "Online Check-in ausfüllen", description: "Nach der Buchung erledigst du den Check-in bequem digital." },
      { step: "03", title: "Zugangsdaten erhalten", description: "Alle Informationen zur Anreise und Schlüsselbox erhältst du automatisch vor deinem Aufenthalt." },
      { step: "04", title: "Ankommen & wohlfühlen", description: "Öffnen, eintreten, ankommen – dein BHH Living Apartment wartet auf dich." },
    ],
  },
  en: {
    badge: "How it works",
    title: "Your stay at BHH Living is this simple.",
    steps: [
      { step: "01", title: "Book or inquire directly", description: "Check your apartment in Dusseldorf directly online or send us an inquiry." },
      { step: "02", title: "Complete online check-in", description: "After booking, you complete the check-in conveniently digitally." },
      { step: "03", title: "Receive access data", description: "All information about arrival and key box you receive automatically before your stay." },
      { step: "04", title: "Arrive & feel at home", description: "Open, enter, arrive – your BHH Living apartment awaits you." },
    ],
  },
}

const icons = [CalendarCheck, ClipboardCheck, Key, Home]

interface ProcessProps {
  lang?: Language
}

export function Process({ lang = "de" }: ProcessProps) {
  const content = processContent[lang]

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
            {content.badge}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            {content.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {content.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <div 
                key={step.title} 
                className="group relative rounded-[28px] p-7 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(165deg, #FFFFFF 0%, #F8FBFD 100%)",
                  border: "1px solid rgba(36, 93, 206, 0.08)",
                  boxShadow: `
                    0 15px 40px -15px rgba(36, 93, 206, 0.1),
                    0 6px 16px -6px rgba(0, 0, 0, 0.05),
                    inset 0 1px 0 rgba(255,255,255,1)
                  `,
                }}
              >
                <div className="relative mx-auto mb-5">
                  <div 
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: "linear-gradient(145deg, #245DCE, #13C7E8)",
                      boxShadow: "0 8px 20px rgba(36, 93, 206, 0.25)",
                    }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <span 
                    className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{
                      background: "linear-gradient(145deg, #13C7E8, #0ea5c9)",
                      boxShadow: "0 4px 10px rgba(19, 199, 232, 0.3)",
                    }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold text-[#171717]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555555]">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

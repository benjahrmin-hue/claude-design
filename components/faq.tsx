"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { type Language } from "@/lib/translations"

const faqContent = {
  de: {
    badge: "FAQ",
    title: "Häufige Fragen",
    faqs: [
      { question: "Wie funktioniert der Check-in bei BHH Living?", answer: "Nach deiner Buchung erledigst du den Online-Check-in. Danach erhältst du alle Informationen zur Anreise und Schlüsselbox automatisch." },
      { question: "Haben die BHH Living Apartments eine Küche?", answer: "Ja, alle Apartments verfügen über eine Küche. Verbrauchsartikel wie Öl oder Gewürze stellen wir nicht dauerhaft bereit." },
      { question: "Wann ist Check-in und Check-out?", answer: "Check-in ist regulär ab 15:00 Uhr möglich, Check-out bis 10:00 Uhr." },
      { question: "Kann ich mein Apartment in Düsseldorf direkt buchen?", answer: "Ja, über die Direktbuchung von BHH Living kannst du Verfügbarkeiten prüfen und dein Apartment bequem buchen oder anfragen." },
    ],
  },
  en: {
    badge: "FAQ",
    title: "Frequently asked questions",
    faqs: [
      { question: "How does check-in work at BHH Living?", answer: "After your booking, you complete the online check-in. Then you receive all information about arrival and key box automatically." },
      { question: "Do BHH Living apartments have a kitchen?", answer: "Yes, all apartments have a kitchen. We do not permanently provide consumables such as oil or spices." },
      { question: "When is check-in and check-out?", answer: "Check-in is regularly possible from 3:00 PM, check-out until 10:00 AM." },
      { question: "Can I book my apartment in Dusseldorf directly?", answer: "Yes, through BHH Living's direct booking you can check availability and conveniently book or inquire about your apartment." },
    ],
  },
}

interface FAQProps {
  lang?: Language
}

export function FAQ({ lang = "de" }: FAQProps) {
  const content = faqContent[lang]

  return (
    <section id="faq" className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
            {content.badge}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            {content.title}
          </h2>
        </div>

        <div className="mt-8 sm:mt-12">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {content.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-[16px] sm:rounded-[20px] border-0 bg-white px-4 sm:px-6 overflow-hidden"
                style={{
                  boxShadow: `
                    0 10px 30px -10px rgba(36, 93, 206, 0.08),
                    0 4px 12px -4px rgba(0, 0, 0, 0.04),
                    inset 0 1px 0 rgba(255,255,255,1)
                  `,
                  border: "1px solid rgba(36, 93, 206, 0.06)",
                }}
              >
                <AccordionTrigger className="py-4 sm:py-5 text-left font-semibold text-[#171717] hover:no-underline hover:text-[#245DCE] transition-colors min-h-[48px] text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-5 text-[#555555] leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

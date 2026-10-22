import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ | BHH Living Apartments Düsseldorf & Ahaus",
  description: "Antworten zu Buchung, Online-Check-in, Schlüsselbox, Zahlung, Ausstattung und Aufenthalt bei BHH Living in Düsseldorf und Ahaus.",
  keywords: "BHH Living FAQ, Online Check-in, Schlüsselbox, BHH Living Düsseldorf, BHH Living Ahaus, Apartments FAQ",
  alternates: {
    languages: {
      de: "/faq",
      en: "/en/faq",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "de_DE",
    url: "https://bhh-living.de/faq",
    title: "FAQ | BHH Living Apartments Düsseldorf & Ahaus",
    description: "Antworten zu Buchung, Online-Check-in, Schlüsselbox, Zahlung, Ausstattung und Aufenthalt bei BHH Living in Düsseldorf und Ahaus.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf und Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | BHH Living Apartments Düsseldorf & Ahaus",
    description: "Antworten zu Buchung, Online-Check-in, Schlüsselbox, Zahlung, Ausstattung und Aufenthalt bei BHH Living in Düsseldorf und Ahaus.",
    images: ["/images/og-image.jpg"],
  },
}

const faqCategories = [
  {
    title: "Buchung & Direktbuchung",
    faqs: [
      {
        question: "Kann ich direkt bei BHH Living buchen?",
        answer: "Ja. Du kannst deinen Aufenthalt direkt über die BHH Living Website bzw. unsere Direktbuchung anfragen oder buchen. So hast du direkten Kontakt zu uns und erhältst alle wichtigen Informationen ohne Umwege.",
      },
      {
        question: "Für welche Standorte kann ich anfragen?",
        answer: "Du kannst für unsere BHH Living Apartments in Düsseldorf und für unsere drei Apartments in Ahaus anfragen. Wähle im Kontaktformular einfach den passenden Standort aus oder nutze die Direktbuchung.",
      },
      {
        question: "Wie läuft die Zahlung ab?",
        answer: "Die Zahlung erfolgt sicher über unsere Buchungsstrecke. Du kannst je nach Verfügbarkeit mit Kreditkarte, Apple Pay oder PayPal bezahlen. Alle Zahlungsinformationen erhältst du während der Buchung.",
      },
      {
        question: "Kann ich vor der Buchung Fragen stellen?",
        answer: "Ja. Nutze dafür einfach das Kontaktformular oder schreibe uns an info@bhh-living.de. Wir helfen dir persönlich weiter, wenn du vor der Buchung noch etwas klären möchtest.",
      },
    ],
  },
  {
    title: "Online-Check-in & Anreise",
    faqs: [
      {
        question: "Wie funktioniert der Online-Check-in bei BHH Living?",
        answer: "Nach deiner Buchung erhältst du von uns einen Link zum Online-Check-in. Dort gibst du die notwendigen Gästedaten ein und bestätigst deine Anreiseinformationen. Sobald der Online-Check-in vollständig abgeschlossen ist, erhältst du alle weiteren Informationen zur Anreise und zur Schlüsselbox automatisch.",
      },
      {
        question: "Warum muss ich den Online-Check-in ausfüllen?",
        answer: "Der Online-Check-in ist notwendig, damit wir deine Anreise vorbereiten und dir den Zugang zum Apartment sicher bereitstellen können. Erst nach abgeschlossenem Online-Check-in können die Informationen zur Schlüsselbox und zum Zugang vollständig übermittelt werden.",
      },
      {
        question: "Wann erhalte ich den Code für die Schlüsselbox?",
        answer: "Den Code und die genaue Anleitung zur Schlüsselbox erhältst du automatisch, sobald der Online-Check-in abgeschlossen ist und deine Anreise vorbereitet wurde. Die Informationen werden dir rechtzeitig vor deiner Ankunft zugesendet.",
      },
      {
        question: "Wie funktioniert die Schlüsselbox?",
        answer: "Du erhältst vor deiner Anreise eine genaue Anleitung mit Standort der Schlüsselbox und Zugangscode. Vor Ort öffnest du die Schlüsselbox mit dem Code, entnimmst den Schlüssel und kannst anschließend selbstständig einchecken.",
      },
      {
        question: "Kann ich flexibel anreisen?",
        answer: "Ja, durch Self-Check-in und Schlüsselbox kannst du nach Freigabe deiner Anreiseinformationen flexibel ankommen. Der reguläre Check-in ist ab 15:00 Uhr möglich.",
      },
      {
        question: "Was mache ich, wenn ich den Check-in-Link oder den Code nicht finde?",
        answer: "Prüfe zuerst deine E-Mails und gegebenenfalls den Spam-Ordner. Wenn du den Link oder die Zugangsdaten nicht findest, kontaktiere uns bitte rechtzeitig über info@bhh-living.de.",
      },
    ],
  },
  {
    title: "Check-in & Check-out",
    faqs: [
      {
        question: "Wann ist Check-in?",
        answer: "Der reguläre Check-in ist ab 15:00 Uhr möglich. Die genauen Informationen zur Anreise erhältst du nach abgeschlossenem Online-Check-in.",
      },
      {
        question: "Wann ist Check-out?",
        answer: "Der Check-out ist bis 10:00 Uhr. Bitte verlasse das Apartment pünktlich, damit unser Reinigungsteam ausreichend Zeit für die Vorbereitung der nächsten Gäste hat.",
      },
      {
        question: "Wie läuft der Check-out ab?",
        answer: "Bitte hinterlasse das Apartment ordentlich, nimm deine persönlichen Gegenstände mit und lege den Schlüssel wie in deiner Check-out-Anleitung beschrieben zurück. Die genauen Hinweise erhältst du mit deinen Aufenthaltsinformationen.",
      },
      {
        question: "Ist ein späterer Check-out möglich?",
        answer: "Ein späterer Check-out ist nur nach vorheriger Absprache möglich und hängt von der Belegung und Reinigung ab. Bitte frage uns frühzeitig an.",
      },
    ],
  },
  {
    title: "Apartments & Ausstattung",
    faqs: [
      {
        question: "Haben alle BHH Living Apartments eine Küche?",
        answer: "Ja, unsere Apartments verfügen über eine Küche oder Küchenzeile. So kannst du dich während deines Aufenthalts flexibel selbst versorgen.",
      },
      {
        question: "Sind Verbrauchsartikel wie Öl, Gewürze oder Kaffee vorhanden?",
        answer: "Grundausstattung kann je nach Apartment vorhanden sein, Verbrauchsartikel wie Öl, Gewürze oder Kaffee stellen wir jedoch nicht dauerhaft verbindlich bereit.",
      },
      {
        question: "Ist WLAN inklusive?",
        answer: "Ja, WLAN ist in den BHH Living Apartments inklusive.",
      },
      {
        question: "Gibt es einen Fernseher?",
        answer: "Ja, die Apartments verfügen über einen TV. Streamingdienste können je nach Gerät verfügbar sein; für Dienste wie Netflix benötigst du in der Regel dein eigenes Konto.",
      },
      {
        question: "Werden Bettwäsche und Handtücher gestellt?",
        answer: "Ja, frische Bettwäsche und Handtücher sind bei deiner Ankunft im Apartment vorhanden.",
      },
      {
        question: "Sind die Apartments für längere Aufenthalte geeignet?",
        answer: "Ja, die BHH Living Apartments eignen sich auch für längere Aufenthalte, Geschäftsreisen und Wohnen auf Zeit. Besonders praktisch sind Küche, WLAN, Self-Check-in und persönlicher Support.",
      },
    ],
  },
  {
    title: "Düsseldorf & Ahaus",
    faqs: [
      {
        question: "Welche Apartments bietet BHH Living in Düsseldorf an?",
        answer: "In Düsseldorf bietet BHH Living moderne Apartments und Serviced Apartments in Düsseldorf-Friedrichstadt. Sie eignen sich für Businessgäste, Städtetrips und längere Aufenthalte.",
      },
      {
        question: "Für wie viele Gäste sind die Düsseldorf Apartments geeignet?",
        answer: "Die BHH Living Apartments in Düsseldorf eignen sich je nach Zimmerkategorie für 1 bis maximal 3 Gäste.",
      },
      {
        question: "Welche Apartments bietet BHH Living in Ahaus an?",
        answer: "In Ahaus bietet BHH Living drei moderne Wohnungen bzw. Apartments für unterschiedliche Aufenthalte. Je nach Wohnung eignen sie sich für bis zu 4 oder bis zu 6 Gäste.",
      },
      {
        question: "Sind die Ahaus Apartments auch für Familien oder Gruppen geeignet?",
        answer: "Ja. Unsere Apartments in Ahaus eignen sich je nach Wohnung für Familien, Gruppen, Geschäftsreisende und längere Aufenthalte.",
      },
      {
        question: "Gibt es Parkmöglichkeiten?",
        answer: "Parkmöglichkeiten hängen vom jeweiligen Standort und Apartment ab. In Ahaus gibt es je nach Wohnung Parkmöglichkeiten, eine Wohnung verfügt über eine private Garage. Genauere Informationen findest du auf der jeweiligen Apartmentseite oder erhältst du mit deiner Buchung.",
      },
    ],
  },
  {
    title: "Kontakt & Hilfe",
    faqs: [
      {
        question: "Wie erreiche ich BHH Living?",
        answer: "Du erreichst uns per E-Mail unter info@bhh-living.de oder über das Kontaktformular auf der Website.",
      },
      {
        question: "Was mache ich, wenn vor Ort etwas fehlt oder nicht funktioniert?",
        answer: "Melde dich bitte direkt bei uns und beschreibe kurz, worum es geht. Wenn möglich, sende uns ein Foto dazu. Wir kümmern uns schnellstmöglich darum.",
      },
      {
        question: "Kann ich eine individuelle Anfrage stellen?",
        answer: "Ja. Nutze dafür das Kontaktformular und gib Standort, Reisedaten, Gästeanzahl und deine Nachricht an. Wir melden uns anschließend persönlich bei dir.",
      },
      {
        question: "Für wen sind die BHH Living Apartments geeignet?",
        answer: "Unsere Apartments eignen sich für Businessgäste, Städtetrips, Familien, Gruppen, Paare, private Besuche und längere Aufenthalte in Düsseldorf oder Ahaus.",
      },
    ],
  },
]

// Generate FAQ Schema JSON-LD for SEO
function generateFAQSchema() {
  const allFaqs = faqCategories.flatMap(category => category.faqs)
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export default function FAQPage() {
  const faqSchema = generateFAQSchema()
  
  return (
    <>
      {/* FAQ Schema JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen">
        <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#EEF7FF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
              BHH Living FAQ
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
              Häufige Fragen zu BHH Living
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555555]">
              Hier findest du die wichtigsten Antworten zu Buchung, Online-Check-in, Anreise, Ausstattung und unseren Apartments in Düsseldorf und Ahaus.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="mb-6 text-xl font-bold text-[#171717]">{category.title}</h2>
                <div 
                  className="rounded-[24px] bg-white"
                  style={{ 
                    boxShadow: "0 8px 30px rgba(15, 23, 42, 0.06), 0 2px 8px rgba(0,0,0,0.03)", 
                    border: "1px solid rgba(0,0,0,0.04)" 
                  }}
                >
                  <Accordion type="multiple" className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.title}-${index}`}
                        className="border-b border-[#171717]/5 last:border-0"
                      >
                        <AccordionTrigger className="px-6 py-5 text-left text-[15px] font-semibold text-[#171717] hover:text-[#245DCE] hover:no-underline min-h-[56px]">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5 text-[#555555] leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
            Noch Fragen? Wir helfen dir gerne.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#555555]">
            Kontaktiere uns direkt oder prüfe die Verfügbarkeit für dein Apartment in Düsseldorf oder Ahaus.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-8 font-semibold text-white shadow-lg hover:shadow-xl hover:opacity-95 transition-all">
              <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer">Direkt buchen</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-[#245DCE]/25 bg-white px-8 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 transition-all">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </>
  )
}

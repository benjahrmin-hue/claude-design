import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | BHH Living Apartments",
  description: "Datenschutzerklärung für BHH Living Apartments in Düsseldorf und Ahaus. Informationen zur Verarbeitung personenbezogener Daten.",
  robots: "noindex, follow",
  alternates: {
    languages: {
      de: "/datenschutzerklaerung",
      en: "/en/privacy-policy",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "de_DE",
    url: "https://bhh-living.de/datenschutzerklaerung",
    title: "Datenschutzerklärung | BHH Living Apartments",
    description: "Datenschutzerklärung für BHH Living Apartments in Düsseldorf und Ahaus. Informationen zur Verarbeitung personenbezogener Daten.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf und Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutzerklärung | BHH Living Apartments",
    description: "Datenschutzerklärung für BHH Living Apartments in Düsseldorf und Ahaus. Informationen zur Verarbeitung personenbezogener Daten.",
    images: ["/images/og-image.jpg"],
  },
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0F4FF] via-[#E8F4FC] to-[#F0FDFA] pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-lg text-[#555555]">
            Informationen zum Datenschutz bei BHH Living
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Verantwortlicher */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">1. Verantwortlicher</h2>
              <p className="text-[#555555] leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <strong>BHH-Living GmbH</strong><br />
                Hessenweg 25<br />
                48683 Ahaus<br />
                Deutschland<br /><br />
                Vertreten durch die Geschäftsführer Benjamin Jahr und Manuel Gewing<br /><br />
                E-Mail:{" "}
                <a href="mailto:info@bhh-living.de" className="text-[#245DCE] hover:underline">
                  info@bhh-living.de
                </a><br />
                Telefon:{" "}
                <a href="tel:+4915123407019" className="text-[#245DCE] hover:underline">
                  +49 151 234 070 19
                </a>
              </p>
            </div>

            {/* Datenerhebung */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p className="text-[#555555] leading-relaxed">
                Wir erheben personenbezogene Daten, wenn du uns diese freiwillig mitteilst, 
                beispielsweise über unser Kontaktformular oder bei einer Buchungsanfrage für 
                unsere Apartments in Düsseldorf oder Ahaus.
              </p>
            </div>

            {/* Kontaktformular */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">3. Kontaktformular</h2>
              <p className="text-[#555555] leading-relaxed">
                Wenn du unser Kontaktformular nutzt, werden die von dir eingegebenen Daten 
                (Name, E-Mail, Telefon, Nachricht, gewählter Standort, etc.) zum Zweck der 
                Bearbeitung deiner Anfrage verarbeitet und gespeichert. Die Rechtsgrundlage 
                hierfür ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 
                lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
              </p>
            </div>

            {/* Buchung */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">4. Buchung über externe Plattform</h2>
              <p className="text-[#555555] leading-relaxed">
                Die Buchung unserer Apartments erfolgt über unseren Buchungspartner (Hostaway). 
                Für die Datenverarbeitung bei der Buchung gelten die Datenschutzbestimmungen 
                des jeweiligen Anbieters. Bei Fragen zur Datenverarbeitung im Rahmen der 
                Buchung wende dich bitte direkt an uns.
              </p>
            </div>

            {/* Hosting */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">5. Hosting</h2>
              <p className="text-[#555555] leading-relaxed">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). 
                Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden 
                auf den Servern des Hosters gespeichert. Hierbei kann es sich um IP-Adressen, 
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, 
                Namen, Websitezugriffe und sonstige Daten handeln.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">6. Cookies</h2>
              <p className="text-[#555555] leading-relaxed">
                Diese Website verwendet Cookies. Einige dieser Cookies sind technisch notwendig, 
                während andere uns helfen, diese Website und deine Erfahrung zu verbessern. 
                Du kannst deine Cookie-Einstellungen jederzeit anpassen.
              </p>
            </div>

            {/* Deine Rechte */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">7. Deine Rechte</h2>
              <p className="text-[#555555] leading-relaxed">
                Du hast gemäß DSGVO folgende Rechte:
              </p>
              <ul className="list-disc list-inside mt-4 text-[#555555] space-y-2">
                <li>Recht auf Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung deiner Daten (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="text-[#555555] leading-relaxed mt-4">
                Bei Fragen wende dich an{" "}
                <a href="mailto:info@bhh-living.de" className="text-[#245DCE] hover:underline">
                  info@bhh-living.de
                </a>.
              </p>
            </div>

            {/* Beschwerderecht */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">8. Beschwerderecht</h2>
              <p className="text-[#555555] leading-relaxed">
                Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die 
                Verarbeitung deiner personenbezogenen Daten zu beschweren.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

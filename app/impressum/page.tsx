import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Impressum | BHH Living Apartments",
  description: "Impressum und Angaben gemäß § 5 DDG für BHH Living Apartments in Düsseldorf und Ahaus.",
  robots: "noindex, follow",
  alternates: {
    languages: {
      de: "/impressum",
      en: "/en/legal-notice",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "de_DE",
    url: "https://bhh-living.de/impressum",
    title: "Impressum | BHH Living Apartments",
    description: "Impressum und Angaben gemäß § 5 DDG für BHH Living Apartments in Düsseldorf und Ahaus.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf und Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impressum | BHH Living Apartments",
    description: "Impressum und Angaben gemäß § 5 DDG für BHH Living Apartments in Düsseldorf und Ahaus.",
    images: ["/images/og-image.jpg"],
  },
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#EEF7FF] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
            Impressum
          </h1>
          <p className="mt-4 text-lg text-[#555555]">
            Angaben gemäß § 5 DDG
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div 
            className="rounded-2xl bg-white p-8 sm:p-12"
            style={{ boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)", border: "1px solid rgba(0,0,0,0.04)" }}
          >
            <div className="prose prose-lg max-w-none text-[#555555]">

              <h2 className="text-xl font-bold text-[#171717]">Angaben gemäß § 5 DDG</h2>
              <p className="mt-4">
                <strong>BHH-Living GmbH</strong><br />
                Hessenweg 25<br />
                48683 Ahaus<br />
                Deutschland
              </p>

              <h2 className="mt-8 text-xl font-bold text-[#171717]">Vertreten durch</h2>
              <p className="mt-4">
                Geschäftsführer: Benjamin Jahr, Manuel Gewing
              </p>

              <h2 className="mt-8 text-xl font-bold text-[#171717]">Kontakt</h2>
              <p className="mt-4">
                Telefon:{" "}
                <a href="tel:+4915123407019" className="text-[#245DCE] hover:underline">
                  +49 151 234 070 19
                </a><br />
                E-Mail:{" "}
                <a href="mailto:info@bhh-living.de" className="text-[#245DCE] hover:underline">
                  info@bhh-living.de
                </a>
              </p>

              <h2 className="mt-8 text-xl font-bold text-[#171717]">Registereintrag</h2>
              <p className="mt-4">
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht Coesfeld<br />
                Registernummer: HRB 22130
              </p>

              <h2 className="mt-8 text-xl font-bold text-[#171717]">Umsatzsteuer-ID</h2>
              <p className="mt-4">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                DE368458788
              </p>

              <h2 className="mt-8 text-xl font-bold text-[#171717]">Verantwortlicher nach § 18 Abs. 2 MStV</h2>
              <p className="mt-4">
                Benjamin Jahr, Manuel Gewing, Hessenweg 25, 48683 Ahaus
              </p>

              <h2 className="mt-8 text-xl font-bold text-[#171717]">Hinweis zur Online-Streitbeilegung</h2>
              <p className="mt-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a 
                  href="https://ec.europa.eu/consumers/odr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#245DCE] hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2 className="mt-8 text-xl font-bold text-[#171717]">Haftungsausschluss</h2>
              
              <h3 className="mt-6 text-lg font-semibold text-[#171717]">Haftung für Inhalte</h3>
              <p className="mt-2">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-[#171717]">Haftung für Links</h3>
              <p className="mt-2">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-[#171717]">Urheberrecht</h3>
              <p className="mt-2">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

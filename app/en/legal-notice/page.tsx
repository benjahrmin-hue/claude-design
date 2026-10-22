import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Legal Notice | BHH Living Apartments",
  description: "Legal notice and information according to DDG for BHH Living Apartments in Düsseldorf and Ahaus.",
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
    locale: "en_US",
    url: "https://bhh-living.de/en/legal-notice",
    title: "Legal Notice | BHH Living Apartments",
    description: "Legal notice and information according to DDG for BHH Living Apartments in Düsseldorf and Ahaus.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf and Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice | BHH Living Apartments",
    description: "Legal notice and information according to DDG for BHH Living Apartments in Düsseldorf and Ahaus.",
    images: ["/images/og-image.jpg"],
  },
}

export default function LegalNoticePageEN() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0F4FF] via-[#E8F4FC] to-[#F0FDFA] pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
            Legal Notice
          </h1>
          <p className="mt-4 text-lg text-[#555555]">
            Information according to DDG (German Digital Services Act)
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Provider Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">Provider</h2>
              <p className="text-[#555555] leading-relaxed">
                <strong>BHH-Living GmbH</strong><br />
                Hessenweg 25<br />
                48683 Ahaus<br />
                Germany
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">Contact</h2>
              <p className="text-[#555555] leading-relaxed">
                Phone:{" "}
                <a href="tel:+4915123407019" className="text-[#245DCE] hover:underline">
                  +49 151 234 070 19
                </a><br />
                Email:{" "}
                <a href="mailto:info@bhh-living.de" className="text-[#245DCE] hover:underline">
                  info@bhh-living.de
                </a>
              </p>
            </div>

            {/* Represented by */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">Represented by</h2>
              <p className="text-[#555555] leading-relaxed">
                Managing Directors: Benjamin Jahr, Manuel Gewing
              </p>
            </div>

            {/* Commercial Register */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">Commercial Register</h2>
              <p className="text-[#555555] leading-relaxed">
                Entry in the commercial register<br />
                Registration court: Amtsgericht Coesfeld<br />
                Registration number: HRB 22130
              </p>
            </div>

            {/* VAT ID */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">VAT Identification Number</h2>
              <p className="text-[#555555] leading-relaxed">
                VAT ID according to § 27a German VAT Act:<br />
                DE368458788
              </p>
            </div>

            {/* Responsible for Content */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">Responsible for Content</h2>
              <p className="text-[#555555] leading-relaxed">
                Responsible according to § 18 para. 2 MStV:<br />
                Benjamin Jahr, Manuel Gewing, Hessenweg 25, 48683 Ahaus
              </p>
            </div>

            {/* EU Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">EU Dispute Resolution</h2>
              <p className="text-[#555555] leading-relaxed">
                The European Commission provides a platform for online dispute resolution (OS):{" "}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#245DCE] hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-[#555555] leading-relaxed mt-4">
                We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </div>

            {/* Liability for Content */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">Liability for Content</h2>
              <p className="text-[#555555] leading-relaxed">
                As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 para. 1 DDG. According to §§ 8 to 10 DDG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
              </p>
            </div>

            {/* Liability for Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">Liability for Links</h2>
              <p className="text-[#555555] leading-relaxed">
                Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  )
}

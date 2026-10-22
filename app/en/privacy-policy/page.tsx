import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | BHH Living Apartments",
  description: "Privacy policy for BHH Living Apartments in Düsseldorf and Ahaus. Information about the processing of personal data.",
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
    locale: "en_US",
    url: "https://bhh-living.de/en/privacy-policy",
    title: "Privacy Policy | BHH Living Apartments",
    description: "Privacy policy for BHH Living Apartments in Düsseldorf and Ahaus. Information about the processing of personal data.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf and Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | BHH Living Apartments",
    description: "Privacy policy for BHH Living Apartments in Düsseldorf and Ahaus. Information about the processing of personal data.",
    images: ["/images/og-image.jpg"],
  },
}

export default function PrivacyPolicyPageEN() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0F4FF] via-[#E8F4FC] to-[#F0FDFA] pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-[#555555]">
            Information about data protection at BHH Living
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Controller */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">1. Data Controller</h2>
              <p className="text-[#555555] leading-relaxed">
                The controller responsible for data processing on this website is:<br /><br />
                <strong>BHH-Living GmbH</strong><br />
                Hessenweg 25<br />
                48683 Ahaus<br />
                Germany<br /><br />
                Represented by the Managing Directors Benjamin Jahr and Manuel Gewing<br /><br />
                Email:{" "}
                <a href="mailto:info@bhh-living.de" className="text-[#245DCE] hover:underline">
                  info@bhh-living.de
                </a><br />
                Phone:{" "}
                <a href="tel:+4915123407019" className="text-[#245DCE] hover:underline">
                  +49 151 234 070 19
                </a>
              </p>
            </div>

            {/* Data Collection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">2. Collection and Storage of Personal Data</h2>
              <p className="text-[#555555] leading-relaxed">
                We collect personal data when you voluntarily provide it to us, 
                for example via our contact form or when making a booking inquiry for 
                our apartments in Düsseldorf or Ahaus.
              </p>
            </div>

            {/* Contact Form */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">3. Contact Form</h2>
              <p className="text-[#555555] leading-relaxed">
                When you use our contact form, the data you enter 
                (name, email, phone, message, selected location, etc.) will be processed 
                and stored for the purpose of handling your inquiry. The legal basis 
                for this is Art. 6(1)(b) GDPR (contract initiation) or Art. 6(1)(f) GDPR 
                (legitimate interest in responding to inquiries).
              </p>
            </div>

            {/* Booking */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">4. Booking via External Platform</h2>
              <p className="text-[#555555] leading-relaxed">
                Bookings for our apartments are processed through our booking partner (Hostaway). 
                The data protection provisions of the respective provider apply to data processing 
                during the booking process. If you have questions about data processing in 
                connection with your booking, please contact us directly.
              </p>
            </div>

            {/* Hosting */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">5. Hosting</h2>
              <p className="text-[#555555] leading-relaxed">
                This website is hosted by an external service provider (hoster). 
                Personal data collected on this website is stored on the hoster&apos;s servers. 
                This may include IP addresses, contact requests, meta and communication data, 
                contract data, contact details, names, website accesses and other data 
                generated via a website.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">6. Cookies</h2>
              <p className="text-[#555555] leading-relaxed">
                This website uses cookies. Some of these cookies are technically necessary, 
                while others help us improve this website and your experience. 
                You can adjust your cookie settings at any time.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">7. Your Rights</h2>
              <p className="text-[#555555] leading-relaxed">
                Under the GDPR, you have the following rights:
              </p>
              <ul className="list-disc list-inside mt-4 text-[#555555] space-y-2">
                <li>Right to access your stored data (Art. 15 GDPR)</li>
                <li>Right to rectification of inaccurate data (Art. 16 GDPR)</li>
                <li>Right to erasure of your data (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object to processing (Art. 21 GDPR)</li>
              </ul>
              <p className="text-[#555555] leading-relaxed mt-4">
                If you have any questions, please contact{" "}
                <a href="mailto:info@bhh-living.de" className="text-[#245DCE] hover:underline">
                  info@bhh-living.de
                </a>.
              </p>
            </div>

            {/* Right to Complain */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#171717] mb-4">8. Right to Lodge a Complaint</h2>
              <p className="text-[#555555] leading-relaxed">
                You have the right to lodge a complaint with a data protection supervisory 
                authority regarding the processing of your personal data.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  )
}

import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Clock, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact | BHH Living Apartments Düsseldorf & Ahaus",
  description: "Contact BHH Living for apartments in Düsseldorf and Ahaus. Send an enquiry, choose your location and receive personal support.",
  keywords: "BHH Living contact, Apartments Düsseldorf contact, Apartments Ahaus contact, info@bhh-living.de",
  alternates: {
    languages: {
      de: "/kontakt",
      en: "/en/contact",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "en_US",
    url: "https://bhh-living.de/en/contact",
    title: "Contact | BHH Living Apartments Düsseldorf & Ahaus",
    description: "Contact BHH Living for apartments in Düsseldorf and Ahaus. Send an enquiry, choose your location and receive personal support.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf and Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | BHH Living Apartments Düsseldorf & Ahaus",
    description: "Contact BHH Living for apartments in Düsseldorf and Ahaus. Send an enquiry, choose your location and receive personal support.",
    images: ["/images/og-image.jpg"],
  },
}

export default function ContactPageEN() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#EEF7FF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
              BHH Living Contact
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
              Contact BHH Living
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555555]">
              Do you have questions about our apartments in Düsseldorf or Ahaus? Send us an enquiry – we will help you personally.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#171717]">Contact Information</h2>
              <p className="mt-4 text-[#555555] leading-relaxed">
                You can reach us by email for all questions about your booking or stay. For direct bookings, please use our direct booking page.
              </p>

              <div className="mt-8 space-y-5">
                <div 
                  className="flex items-start gap-4 rounded-2xl bg-white p-5"
                  style={{ boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)", border: "1px solid rgba(0,0,0,0.04)" }}
                >
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background: "linear-gradient(145deg, rgba(36,93,206,0.12), rgba(19,199,232,0.12))" }}
                  >
                    <Mail className="h-6 w-6 text-[#245DCE]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#171717]">Email</h3>
                    <a href="mailto:info@bhh-living.de" className="mt-1 text-[#245DCE] hover:underline">
                      info@bhh-living.de
                    </a>
                  </div>
                </div>

                <div 
                  className="flex items-start gap-4 rounded-2xl bg-white p-5"
                  style={{ boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)", border: "1px solid rgba(0,0,0,0.04)" }}
                >
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background: "linear-gradient(145deg, rgba(36,93,206,0.12), rgba(19,199,232,0.12))" }}
                  >
                    <Clock className="h-6 w-6 text-[#245DCE]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#171717]">Check-in & Check-out</h3>
                    <p className="mt-1 text-[#555555]">Check-in: from 3:00 PM</p>
                    <p className="text-[#555555]">Check-out: by 10:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div 
                className="mt-8 rounded-2xl bg-gradient-to-br from-[#245DCE] to-[#13C7E8] p-6"
              >
                <h3 className="font-semibold text-white">Want to book directly?</h3>
                <p className="mt-2 text-white/85 text-sm leading-relaxed">
                  Check availability and book your apartment directly via our booking page.
                </p>
                <Button asChild className="mt-4 w-full rounded-full bg-white font-semibold text-[#245DCE] hover:bg-white/95 transition-all">
                  <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Go to direct booking
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#171717]">Send enquiry</h2>
              <p className="mt-4 text-[#555555] leading-relaxed">
                Do you have questions or want to send a personalised enquiry? Select the appropriate location and send us your message.
              </p>

              <div className="mt-8">
                <ContactForm lang="en" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standorte Section */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-2xl font-bold text-[#171717] sm:text-3xl">Our Locations</h2>
            <p className="mt-4 text-[#555555]">
              BHH Living offers modern apartments at two attractive locations in North Rhine-Westphalia.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Düsseldorf Card */}
            <div 
              className="group rounded-[28px] bg-white p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8"
              style={{ 
                boxShadow: "0 8px 30px rgba(36, 93, 206, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(36, 93, 206, 0.06)"
              }}
            >
              <div 
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(145deg, #245DCE, #13C7E8)" }}
              >
                <MapPin className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#171717]">BHH Living Apartments Düsseldorf</h3>
              
              <div className="mt-4 space-y-1">
                <p className="font-medium text-[#171717]">Corneliusstraße 110a–c</p>
                <p className="text-[#555555]">40215 Düsseldorf-Friedrichstadt</p>
              </div>
              
              <p className="mt-4 text-[#555555] leading-relaxed text-sm">
                Modern apartments and serviced apartments in Düsseldorf with kitchen, WiFi, digital check-in and personal support.
              </p>
              
              <Button asChild className="mt-6 w-full rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] font-semibold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all">
                <Link href="/en/dusseldorf-apartments" className="flex items-center justify-center gap-2">
                  View Düsseldorf Apartments
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Ahaus Card */}
            <div 
              className="group rounded-[28px] bg-white p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8"
              style={{ 
                boxShadow: "0 8px 30px rgba(36, 93, 206, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(36, 93, 206, 0.06)"
              }}
            >
              <div 
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(145deg, #13C7E8, #245DCE)" }}
              >
                <MapPin className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#171717]">BHH Living Apartments Ahaus</h3>
              
              <div className="mt-4 space-y-1">
                <p className="font-medium text-[#171717]">Hessenweg 25</p>
                <p className="text-[#555555]">48683 Ahaus</p>
              </div>
              
              <p className="mt-4 text-[#555555] leading-relaxed text-sm">
                Three modern BHH Living apartments in Ahaus – ideal for families, groups, business travellers, short trips and longer stays.
              </p>
              
              <Button asChild className="mt-6 w-full rounded-full bg-gradient-to-r from-[#13C7E8] to-[#245DCE] font-semibold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all">
                <Link href="/en/ahaus-apartments" className="flex items-center justify-center gap-2">
                  View Ahaus Apartments
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  )
}

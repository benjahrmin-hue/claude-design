import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Check, Wifi, ChefHat, Smartphone, HeadphonesIcon, MapPin, Building2, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "BHH Living Apartments Dusseldorf | Book Direct",
  description: "Modern apartments in Dusseldorf-Friedrichstadt with kitchen, WiFi, digital check-in and personal support. Book direct at BHH Living.",
  keywords: "BHH Living Apartments Dusseldorf, Apartments Dusseldorf, Serviced Apartments Dusseldorf, Apartment with kitchen Dusseldorf, Dusseldorf-Friedrichstadt, direct booking",
  alternates: {
    languages: {
      de: "/apartments-duesseldorf",
      en: "/en/dusseldorf-apartments",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "en_US",
    url: "https://bhh-living.de/en/dusseldorf-apartments",
    title: "BHH Living Apartments Dusseldorf | Book Direct",
    description: "Modern apartments in Dusseldorf-Friedrichstadt with kitchen, WiFi, digital check-in and personal support. Book direct at BHH Living.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Dusseldorf" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BHH Living Apartments Dusseldorf | Book Direct",
    description: "Modern apartments in Dusseldorf-Friedrichstadt with kitchen, WiFi, digital check-in and personal support. Book direct at BHH Living.",
    images: ["/images/og-image.jpg"],
  },
}

const features = [
  { icon: ChefHat, title: "Apartment with kitchen", description: "Every apartment has a fully equipped kitchen." },
  { icon: Smartphone, title: "Digital self check-in", description: "Arrive flexibly with access code and key box." },
  { icon: Wifi, title: "Fast WiFi", description: "Free high-speed internet in all apartments." },
  { icon: HeadphonesIcon, title: "Personal support", description: "Our team is there for you before, during and after your stay." },
  { icon: MapPin, title: "Central location", description: "Dusseldorf-Friedrichstadt – perfectly connected to city center and old town." },
  { icon: Clock, title: "Flexible stays", description: "Short trips, business travel or longer stays possible." },
]

const checklistItems = [
  "Fully equipped kitchen in every apartment",
  "Digital self check-in around the clock",
  "Fast WiFi included",
  "Central location in Dusseldorf-Friedrichstadt",
]

export default function DusseldorfApartmentsPageEN() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#EEF7FF] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
                BHH Living Apartments
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
                BHH Living Apartments Dusseldorf
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#555555]">
                BHH Living offers modern apartments in Dusseldorf-Friedrichstadt – centrally located, with kitchen, digital check-in, WiFi and personal support. Ideal for business guests, city trips and longer stays.
              </p>
              
              <ul className="mt-8 space-y-3">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#333333]">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#245DCE]/15 to-[#13C7E8]/15">
                      <Check className="h-4 w-4 text-[#245DCE]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-8 font-semibold text-white shadow-lg hover:shadow-xl hover:opacity-95 transition-all">
                  <a href="https://bhhliving.holidayfuture.com/search?city=D%C3%BCsseldorf" target="_blank" rel="noopener noreferrer">Book directly now</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-[#245DCE]/25 bg-white px-8 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 transition-all">
                  <Link href="/en/contact">Send inquiry</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/bhh-hero.jpg"
                  alt="Bright BHH Living apartment in Dusseldorf with double bed and modern furnishings"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div 
                className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl"
                style={{ boxShadow: "0 20px 50px rgba(15, 23, 42, 0.12)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#245DCE]/15 to-[#13C7E8]/15">
                    <Building2 className="h-6 w-6 text-[#245DCE]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#171717]">8.4/10</p>
                    <p className="text-sm text-[#555555]">Guest rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm lang="en" />

      {/* Features Grid */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
              What your apartment in Dusseldorf offers
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#555555]">
              BHH Living apartments are designed for uncomplicated stays – with everything you need.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-[24px] bg-white p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.04)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div 
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(145deg, rgba(36,93,206,0.12), rgba(19,199,232,0.12))" }}
                >
                  <feature.icon className="h-6 w-6 text-[#245DCE]" />
                </div>
                <h3 className="text-lg font-semibold text-[#171717]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555555]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                Centrally located in Dusseldorf-Friedrichstadt
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#555555]">
                BHH Living apartments are located in Dusseldorf-Friedrichstadt – a vibrant neighborhood with short distances to the city center, old town and main train station.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#245DCE] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#171717]">Corneliusstraße 110a-c</p>
                    <p className="text-[#555555]">40215 Dusseldorf-Friedrichstadt</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-8 font-semibold text-white shadow-lg hover:shadow-xl hover:opacity-95 transition-all">
                  <a href="https://bhhliving.holidayfuture.com/search?city=D%C3%BCsseldorf" target="_blank" rel="noopener noreferrer">Check availability</a>
                </Button>
              </div>
            </div>

            <div 
              className="relative overflow-hidden rounded-[28px]"
              style={{
                boxShadow: `
                  0 20px 50px -12px rgba(36, 93, 206, 0.12),
                  0 8px 20px -8px rgba(0, 0, 0, 0.06)
                `,
              }}
            >
              <Image
                src="/images/duesseldorf-location.png"
                alt="Sunny courtyard of BHH Living apartments in Dusseldorf-Friedrichstadt"
                width={600}
                height={500}
                className="h-auto w-full object-cover object-center"
              />
              
              {/* Location Badge */}
              <div 
                className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm p-4 sm:bottom-5 sm:left-5 sm:right-auto sm:p-4"
                style={{
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div 
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(145deg, #245DCE, #13C7E8)",
                    boxShadow: "0 4px 12px rgba(36, 93, 206, 0.25)",
                  }}
                >
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#171717] text-sm">Dusseldorf-Friedrichstadt</p>
                  <p className="text-xs text-[#555555]">Corneliusstraße 110a–c</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <Link href="/en/ahaus-apartments" className="text-[#245DCE] hover:underline font-medium">
              Also in Ahaus: BHH Living Apartments
            </Link>
            <span className="text-[#555555]">|</span>
            <Link href="/en/faq" className="text-[#245DCE] hover:underline font-medium">
              FAQ
            </Link>
            <span className="text-[#555555]">|</span>
            <Link href="/en/direct-booking" className="text-[#245DCE] hover:underline font-medium">
              Book directly
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#245DCE] to-[#13C7E8] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your apartment in Dusseldorf awaits
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            Check availability now and book your BHH Living apartment directly – without detours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-white px-8 font-semibold text-[#245DCE] shadow-lg hover:bg-white/95 transition-all">
              <a href="https://bhhliving.holidayfuture.com/search?city=D%C3%BCsseldorf" target="_blank" rel="noopener noreferrer">Book directly now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-white/40 bg-transparent px-8 font-semibold text-white hover:bg-white/10 transition-all">
              <Link href="/en/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  )
}

import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Building2, ChefHat, Briefcase, Moon, Bed, Bath, Wifi, Tv, Coffee } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Rooms & Apartments | BHH Living Düsseldorf & Ahaus",
  description: "Discover modern BHH Living apartments in Düsseldorf and Ahaus – with kitchen, WiFi, self-check-in and personal support.",
  keywords: "Rooms Apartments, BHH Living Apartments, Apartment with kitchen, Düsseldorf, Ahaus, Micro-Apartments, Business Apartment",
  alternates: {
    languages: {
      de: "/zimmer-apartments",
      en: "/en/rooms-apartments",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "en_US",
    url: "https://bhh-living.de/en/rooms-apartments",
    title: "Rooms & Apartments | BHH Living Düsseldorf & Ahaus",
    description: "Discover modern BHH Living apartments in Düsseldorf and Ahaus – with kitchen, WiFi, self-check-in and personal support.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living rooms & apartments in Düsseldorf and Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooms & Apartments | BHH Living Düsseldorf & Ahaus",
    description: "Discover modern BHH Living apartments in Düsseldorf and Ahaus – with kitchen, WiFi, self-check-in and personal support.",
    images: ["/images/og-image.jpg"],
  },
}

const apartmentTypes = [
  {
    icon: Building2,
    title: "Micro-Apartments Düsseldorf",
    description: "Compact, modern and cleverly designed – ideal for short stays, solo travellers and business guests. Everything you need in a small space.",
    image: "/images/bhh-bedroom.jpg",
    features: ["1-2 Guests", "Kitchen", "WiFi", "Smart TV"],
    highlight: "Ideal for solo travellers",
  },
  {
    icon: ChefHat,
    title: "Apartments with Kitchen",
    description: "Every BHH Living apartment features a fully equipped kitchen, giving you more independence than a classic hotel room.",
    image: "/images/bhh-kitchen.jpg",
    features: ["1-3 Guests", "Fully equipped kitchen", "WiFi", "Living area"],
    highlight: "Cook yourself & save",
  },
  {
    icon: Briefcase,
    title: "Business & Long Stay",
    description: "For project stays, business trips and longer stays in Düsseldorf – with fast WiFi, workspace and personal support.",
    image: "/images/bhh-workspace.jpg",
    features: ["Workspace", "Fast WiFi", "Quiet location", "Flexible booking"],
    highlight: "Perfect for business travel",
  },
  {
    icon: Moon,
    title: "Restful Nights",
    description: "After your day in Düsseldorf, a cosy apartment with clear amenities and a relaxed atmosphere awaits you to unwind.",
    image: "/images/bhh-living.jpg",
    features: ["Quiet location", "Comfortable bed", "Blackout blinds", "Air conditioning"],
    highlight: "Restful sleep guaranteed",
  },
]

const amenities = [
  { icon: Bed, label: "Comfortable Beds" },
  { icon: ChefHat, label: "Kitchen" },
  { icon: Wifi, label: "Fast WiFi" },
  { icon: Tv, label: "Smart TV" },
  { icon: Bath, label: "Modern Bathroom" },
  { icon: Coffee, label: "Coffee Machine" },
]

export default function RoomsApartmentsPageEN() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#EEF7FF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
              BHH Living Apartment Types
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
              Rooms & Apartments at BHH Living
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555555]">
              Whether a short trip, business travel or longer stay – at BHH Living you will find the perfect apartment for your needs in Düsseldorf.
            </p>
          </div>
        </div>
      </section>

      {/* Apartment Types */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {apartmentTypes.map((apartment, index) => (
              <div 
                key={apartment.title}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: "linear-gradient(145deg, rgba(36,93,206,0.12), rgba(19,199,232,0.12))" }}
                    >
                      <apartment.icon className="h-5 w-5 text-[#245DCE]" />
                    </div>
                    <span className="text-sm font-semibold text-[#13C7E8]">{apartment.highlight}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-[#171717] sm:text-3xl">{apartment.title}</h2>
                  <p className="mt-4 text-[#555555] leading-relaxed">{apartment.description}</p>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    {apartment.features.map((feature) => (
                      <span 
                        key={feature}
                        className="rounded-full bg-[#F8FAFC] px-4 py-2 text-sm font-medium text-[#333333]"
                        style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button asChild className="rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-6 font-semibold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all">
                      <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer">Check Availability</a>
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div 
                    className="overflow-hidden rounded-3xl"
                    style={{ boxShadow: "0 20px 50px rgba(15, 23, 42, 0.1)" }}
                  >
                    <Image
                      src={apartment.image}
                      alt={`${apartment.title} - BHH Living Apartment`}
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover aspect-[3/2]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
              Amenities in All Apartments
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#555555]">
              All BHH Living apartments are modernly furnished and offer everything for a pleasant stay.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {amenities.map((amenity) => (
              <div 
                key={amenity.label}
                className="flex flex-col items-center rounded-2xl bg-white p-5 text-center"
                style={{ boxShadow: "0 4px 15px rgba(15, 23, 42, 0.05)", border: "1px solid rgba(0,0,0,0.04)" }}
              >
                <div 
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(145deg, rgba(36,93,206,0.1), rgba(19,199,232,0.1))" }}
                >
                  <amenity.icon className="h-6 w-6 text-[#245DCE]" />
                </div>
                <p className="mt-3 text-sm font-medium text-[#333333]">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#245DCE] to-[#13C7E8] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find Your Apartment in Düsseldorf
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            Check availability and book directly with BHH Living – no detours, no platform fees.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-white px-8 font-semibold text-[#245DCE] shadow-lg hover:bg-white/95 transition-all">
              <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer">Book Direct Now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-white/40 bg-transparent px-8 font-semibold text-white hover:bg-white/10 transition-all">
              <Link href="/en/contact">Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  )
}

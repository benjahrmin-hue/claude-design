import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  Users, 
  Bed, 
  Bath, 
  Utensils, 
  Wifi, 
  Car, 
  Smartphone, 
  Home,
  Briefcase,
  Heart,
  Calendar,
  Tv,
  Shirt,
  HeadphonesIcon,
  Sun,
  MapPin,
  Building2,
  Trees,
  Navigation,
  ExternalLink
} from "lucide-react"

export const metadata: Metadata = {
  title: "BHH Living Apartments Ahaus | Direct booking",
  description: "Three modern apartments in Ahaus with kitchen, WiFi, self check-in and parking options. Ideal for families, groups, business trips and longer stays.",
  keywords: "BHH Living Apartments Ahaus, Apartments Ahaus, Holiday apartment Ahaus, Accommodation Ahaus, Self-check-in Ahaus",
  alternates: {
    languages: {
      de: "/apartments-ahaus",
      en: "/en/ahaus-apartments",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "en_US",
    url: "https://bhh-living.de/en/ahaus-apartments",
    title: "BHH Living Apartments Ahaus | Direct booking",
    description: "Three modern apartments in Ahaus with kitchen, WiFi, self check-in and parking options. Ideal for families, groups, business trips and longer stays.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BHH Living Apartments Ahaus | Direct booking",
    description: "Three modern apartments in Ahaus with kitchen, WiFi, self check-in and parking options. Ideal for families, groups, business trips and longer stays.",
    images: ["/images/og-image.jpg"],
  },
}

const trustFeatures = [
  { icon: Home, label: "3 Apartments in Ahaus" },
  { icon: Users, label: "Up to 6 guests" },
  { icon: Utensils, label: "Kitchen" },
  { icon: Wifi, label: "WiFi included" },
  { icon: Smartphone, label: "Self check-in" },
  { icon: Car, label: "Parking options" },
]

const apartments = [
  {
    title: "Large Holiday Apartment Ahaus",
    badge: "Up to 6 guests",
    badgeColor: "from-[#245DCE] to-[#13C7E8]",
    image: "/images/ahaus-grosse-2.jpg",
    thumbnails: ["/images/ahaus-grosse-1.jpg", "/images/ahaus-grosse-3.jpg", "/images/ahaus-grosse-4.jpg"],
    features: [
      { icon: Home, label: "84 sqm" },
      { icon: Bed, label: "2 bedrooms" },
      { icon: Bath, label: "2 bathrooms" },
      { icon: Users, label: "4 beds" },
      { icon: Sun, label: "Loggia" },
      { icon: Utensils, label: "Kitchen" },
      { icon: Wifi, label: "WiFi" },
      { icon: Car, label: "Parking" },
      { icon: Smartphone, label: "Self check-in" },
    ],
    description: "Spacious BHH Living apartment in Ahaus with two bedrooms, two bathrooms, bright living/dining area and sunny loggia – ideal for families, friends, business trips and longer stays.",
    cta: "View large apartment",
  },
  {
    title: "City Oasis Ahaus with Terrace",
    badge: "Private garage",
    badgeColor: "from-[#13C7E8] to-[#245DCE]",
    image: "/images/ahaus-stadtoase-1.jpg",
    thumbnails: ["/images/ahaus-stadtoase-2.jpg", "/images/ahaus-stadtoase-3.jpg", "/images/ahaus-stadtoase-4.jpg"],
    features: [
      { icon: Users, label: "Up to 4 guests" },
      { icon: Bed, label: "1 bedroom" },
      { icon: Bath, label: "1 bathroom" },
      { icon: Home, label: "Sofa bed" },
      { icon: Sun, label: "Private terrace" },
      { icon: Utensils, label: "Kitchen" },
      { icon: Wifi, label: "WiFi" },
      { icon: Briefcase, label: "Workspace" },
      { icon: Car, label: "Garage" },
    ],
    description: "Stylish apartment in Ahaus with private terrace, garage, cozy living area and fully equipped kitchen – perfect for couples, business travellers and relaxing city stays.",
    cta: "View City Oasis",
  },
  {
    title: "Balcony Apartment Ahaus",
    badge: "62 sqm with balcony",
    badgeColor: "from-[#245DCE] to-[#13C7E8]",
    image: "/images/ahaus-balkon-1.jpg",
    thumbnails: ["/images/ahaus-balkon-2.jpg", "/images/ahaus-balkon-3.jpg", "/images/ahaus-balkon-4.jpg"],
    features: [
      { icon: Home, label: "62 sqm" },
      { icon: Users, label: "Up to 4 guests" },
      { icon: Bed, label: "1 bedroom" },
      { icon: Bath, label: "1.5 bathrooms" },
      { icon: Home, label: "Sofa bed" },
      { icon: Sun, label: "Balcony" },
      { icon: Utensils, label: "Kitchen" },
      { icon: Wifi, label: "WiFi" },
      { icon: Smartphone, label: "Self check-in" },
    ],
    description: "Modern balcony apartment by BHH Living in Ahaus with separate bedroom, bright living area, kitchen, bathroom and guest toilet – ideal for couples, small families, business guests and extended stays.",
    cta: "View balcony apartment",
  },
]

const quickPicks = [
  {
    name: "Large Holiday Apartment",
    specs: "Up to 6 guests · 2 bedrooms · Loggia",
    image: "/images/ahaus-grosse-2.jpg",
    target: "apartment-ahaus-0",
  },
  {
    name: "City Oasis",
    specs: "Up to 4 guests · Terrace · Private garage",
    image: "/images/ahaus-stadtoase-1.jpg",
    target: "apartment-ahaus-1",
  },
  {
    name: "Balcony Apartment",
    specs: "Up to 4 guests · 62 sqm · Balcony",
    image: "/images/ahaus-balkon-1.jpg",
    target: "apartment-ahaus-2",
  },
]

const targetAudience = [
  {
    icon: Users,
    title: "Families & Groups",
    description: "More space and flexibility than a classic hotel room – up to 6 guests depending on the apartment.",
  },
  {
    icon: Briefcase,
    title: "Business travellers",
    description: "Practical for work stays, projects and appointments in Ahaus and the surrounding area.",
  },
  {
    icon: Calendar,
    title: "Extended stays",
    description: "With kitchen, living area, WiFi and self check-in, ideal for multiple nights or temporary living.",
  },
  {
    icon: Heart,
    title: "Private trips",
    description: "For family visits, short trips and relaxing stays in the Münsterland region.",
  },
]

const amenities = [
  { icon: Utensils, label: "Kitchen" },
  { icon: Wifi, label: "WiFi" },
  { icon: Tv, label: "TV" },
  { icon: Smartphone, label: "Self check-in" },
  { icon: Car, label: "Parking" },
  { icon: Car, label: "Garage (select apartments)" },
  { icon: Sun, label: "Balcony or terrace" },
  { icon: Briefcase, label: "Workspace" },
  { icon: Shirt, label: "Fresh linens" },
  { icon: HeadphonesIcon, label: "Personal support" },
]

const locationFeatures = [
  { icon: MapPin, title: "Ahaus city centre" },
  { icon: Building2, title: "Shopping & dining" },
  { icon: Trees, title: "Münsterland" },
  { icon: Navigation, title: "Good connections" },
]

const faqs = [
  {
    question: "How many BHH Living apartments are there in Ahaus?",
    answer: "BHH Living offers three modern apartments in Ahaus for different types of stays.",
  },
  {
    question: "How many guests can stay?",
    answer: "Depending on the apartment, they accommodate up to 4 or up to 6 guests.",
  },
  {
    question: "Do the apartments have a kitchen?",
    answer: "Yes, all BHH Living apartments in Ahaus have a kitchen and are designed for independent stays.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, parking is available depending on the apartment. One apartment also has a private garage.",
  },
  {
    question: "How does check-in work?",
    answer: "Check-in is easy with self check-in. You will receive all the information before your arrival.",
  },
  {
    question: "Can I book directly?",
    answer: "Yes, you can book the BHH Living Apartments Ahaus directly or send an enquiry.",
  },
]

const AHAUS_BACKGROUND_IMAGE_URL = "/images/ahaus-background.jpg"

export default function ApartmentsAhausPageEN() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen">
        {/* Background Layer - fixed position for parallax effect */}
        <div 
          className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${AHAUS_BACKGROUND_IMAGE_URL})`,
          }}
          aria-hidden="true"
        />
        
        {/* White/Off-White Overlay - 84% opacity */}
        <div 
          className="pointer-events-none fixed inset-0"
          style={{
            background: "rgba(248, 250, 252, 0.84)",
          }}
          aria-hidden="true"
        />
        
        {/* Subtle radial blue/turquoise glow - top right */}
        <div 
          className="pointer-events-none fixed inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 85% 10%, rgba(36, 93, 206, 0.06), transparent 60%), radial-gradient(ellipse 50% 35% at 90% 15%, rgba(19, 199, 232, 0.04), transparent 50%)",
          }}
          aria-hidden="true"
        />

        {/* Content Layer */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#245DCE]">
                BHH Living Apartments Ahaus
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
                BHH Living Apartments Ahaus
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#555555]">
                Three modern BHH Living apartments in Ahaus – from the compact balcony apartment to the spacious holiday apartment for up to 6 guests. With kitchen, WiFi, self check-in, parking and personal support.
              </p>
              
              {/* CTAs */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-8 font-semibold text-white shadow-lg hover:shadow-xl hover:opacity-95 transition-all">
                  <a href="https://bhhliving.holidayfuture.com/search?city=Ahaus" target="_blank" rel="noopener noreferrer">
                    Book Ahaus Apartments
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-[#245DCE]/25 bg-white px-8 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 hover:border-[#245DCE]/40 transition-all">
                  <Link href="/en/contact">Send enquiry</Link>
                </Button>
              </div>

              {/* Trust Pills */}
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {trustFeatures.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#555555] shadow-sm"
                    style={{ border: "1px solid rgba(36, 93, 206, 0.1)" }}
                  >
                    <feature.icon className="h-4 w-4 text-[#245DCE]" />
                    {feature.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Apartment Picker */}
        <section className="pt-6 pb-2 sm:pt-10 sm:pb-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-3">
              {quickPicks.map((pick) => (
                <a
                  key={pick.target}
                  href={`#${pick.target}`}
                  className="group flex items-center gap-4 overflow-hidden rounded-[18px] bg-white transition-all duration-300 active:scale-[0.99] sm:flex-col sm:items-stretch sm:gap-0 sm:rounded-[20px] sm:hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(36, 93, 206, 0.12)",
                    boxShadow: "0 8px 24px -14px rgba(36, 93, 206, 0.18)",
                  }}
                >
                  <div className="relative h-[88px] w-28 shrink-0 overflow-hidden sm:h-36 sm:w-full">
                    <Image
                      src={pick.image}
                      alt={`${pick.name} – BHH Living in Ahaus`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center py-3 pr-4 sm:p-4">
                    <h2 className="text-base font-semibold text-[#171717] sm:text-lg">{pick.name}</h2>
                    <p className="mt-1 text-xs leading-relaxed text-[#555555] sm:text-sm">{pick.specs}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Apartments Section */}
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#245DCE]">
                Our apartments in Ahaus
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                Choose your apartment.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {apartments.map((apartment, index) => (
                <div
                  key={apartment.title}
                  id={`apartment-ahaus-${index}`}
                  className="group flex scroll-mt-28 flex-col overflow-hidden rounded-[28px] transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,252,0.95))",
                    border: "1px solid rgba(255,255,255,0.9)",
                    boxShadow: `
                      0 20px 50px -12px rgba(36, 93, 206, 0.12),
                      0 8px 24px -8px rgba(0, 0, 0, 0.06),
                      inset 0 1px 0 rgba(255,255,255,1)
                    `,
                  }}
                >
                  {/* Main Image */}
                  <div className="relative h-[260px] overflow-hidden sm:h-[300px]">
                    <Image
                      src={apartment.image}
                      alt={`${apartment.title} - BHH Living holiday apartment in Ahaus`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Badge */}
                    <div 
                      className={`absolute left-4 top-4 rounded-full bg-gradient-to-r ${apartment.badgeColor} px-4 py-1.5 text-sm font-semibold text-white shadow-md`}
                    >
                      {apartment.badge}
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="flex gap-1 p-1 bg-[#F8FAFC]">
                    {apartment.thumbnails.map((thumb, idx) => (
                      <div key={idx} className="relative h-[72px] flex-1 overflow-hidden">
                        <Image
                          src={thumb}
                          alt={`${apartment.title} - Image ${idx + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-[#171717]">{apartment.title}</h3>
                    
                    {/* Features Grid */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {apartment.features.slice(0, 6).map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-1.5 rounded-full bg-[#F8FAFC] px-3 py-1.5 text-xs font-medium text-[#555555]"
                          style={{ border: "1px solid rgba(36, 93, 206, 0.08)" }}
                        >
                          <feature.icon className="h-3.5 w-3.5 text-[#245DCE]" />
                          {feature.label}
                        </div>
                      ))}
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-[#555555]">
                      {apartment.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-6">
                      <Button 
                        asChild 
                        className="w-full rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] font-semibold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all"
                      >
                        <a href="https://bhhliving.holidayfuture.com/search?city=Ahaus" target="_blank" rel="noopener noreferrer">
                          {apartment.cta}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                Who are the BHH Living Apartments Ahaus for?
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {targetAudience.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,252,0.92))",
                    border: "1px solid rgba(255,255,255,0.8)",
                    boxShadow: `
                      0 12px 32px -8px rgba(36, 93, 206, 0.08),
                      0 4px 12px rgba(0, 0, 0, 0.03),
                      inset 0 1px 0 rgba(255,255,255,1)
                    `,
                  }}
                >
                  <div 
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: "linear-gradient(145deg, rgba(36,93,206,0.1), rgba(19,199,232,0.1))",
                      boxShadow: "0 4px 12px rgba(36, 93, 206, 0.1)",
                    }}
                  >
                    <item.icon className="h-6 w-6 text-[#245DCE]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555555]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-transparent to-[#EEF7FF]/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#245DCE]">
                Amenities in Ahaus
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                Everything you need for your stay in Ahaus.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-[#555555]">
                The BHH Living apartments in Ahaus are designed for easy stays: kitchen, WiFi, TV, self check-in, parking and personal support when you need it.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4"
                  style={{
                    boxShadow: "0 4px 12px rgba(36, 93, 206, 0.06)",
                    border: "1px solid rgba(36, 93, 206, 0.06)",
                  }}
                >
                  <div 
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "linear-gradient(145deg, rgba(36,93,206,0.08), rgba(19,199,232,0.08))",
                    }}
                  >
                    <amenity.icon className="h-5 w-5 text-[#245DCE]" />
                  </div>
                  <span className="text-sm font-medium text-[#555555]">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#245DCE]">
                Location in Ahaus
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                BHH Living Apartments in Ahaus.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-[#555555]">
                Our apartments in Ahaus are ideal for guests seeking modern accommodation with easy arrival and flexible use. Whether private or business – at BHH Living you stay independently and comfortably.
              </p>
            </div>

            <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {locationFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4"
                  style={{
                    boxShadow: "0 4px 12px rgba(36, 93, 206, 0.06)",
                    border: "1px solid rgba(36, 93, 206, 0.06)",
                  }}
                >
                  <div 
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "linear-gradient(145deg, rgba(36,93,206,0.1), rgba(19,199,232,0.1))",
                    }}
                  >
                    <feature.icon className="h-5 w-5 text-[#245DCE]" />
                  </div>
                  <span className="text-sm font-medium text-[#555555]">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#EEF7FF]/30 to-transparent">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#245DCE]">
                Frequently Asked Questions
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                FAQ about BHH Living Apartments Ahaus
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="overflow-hidden rounded-2xl border-0 bg-white px-6"
                  style={{
                    boxShadow: "0 4px 12px rgba(36, 93, 206, 0.05)",
                    border: "1px solid rgba(36, 93, 206, 0.06)",
                  }}
                >
                  <AccordionTrigger className="py-5 text-left font-semibold text-[#171717] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[#555555] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#245DCE] to-[#13C7E8]">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Book your apartment in Ahaus directly with BHH Living.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
              Check availability or send us an enquiry. We will help you personally and ensure an easy arrival.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 font-semibold text-[#245DCE] shadow-lg hover:bg-white/95 hover:shadow-xl transition-all"
              >
                <a href="https://bhhliving.holidayfuture.com/search?city=Ahaus" target="_blank" rel="noopener noreferrer">
                  Book directly
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-white/40 bg-transparent px-8 font-semibold text-white hover:bg-white/10 hover:border-white/60 transition-all"
              >
                <Link href="/en/contact">Contact us</Link>
              </Button>
            </div>
            
            {/* Internal Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/80">
              <Link href="/en/dusseldorf-apartments" className="hover:text-white hover:underline">
                Also in Düsseldorf: BHH Living Apartments
              </Link>
              <span>|</span>
              <Link href="/en/faq" className="hover:text-white hover:underline">
                FAQ
              </Link>
            </div>
          </div>
        </section>
        </div>{/* End Content Layer */}
      </main>
      <Footer lang="en" />
    </>
  )
}

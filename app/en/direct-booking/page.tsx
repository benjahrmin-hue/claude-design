import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ExternalLink, Shield, MessageCircle, CreditCard, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Direct booking | BHH Living Apartments",
  description: "Check availability for BHH Living apartments in Düsseldorf and Ahaus. Secure booking with credit card, Apple Pay, PayPal or Stripe.",
  keywords: "BHH Living book direct, apartments direct booking, Düsseldorf, Ahaus, Apple Pay, PayPal, Stripe, credit card",
  alternates: {
    languages: {
      de: "/direkt-buchen",
      en: "/en/direct-booking",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "en_US",
    url: "https://bhh-living.de/en/direct-booking",
    title: "Direct booking | BHH Living Apartments",
    description: "Check availability for BHH Living apartments in Düsseldorf and Ahaus. Secure booking with credit card, Apple Pay, PayPal or Stripe.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf and Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct booking | BHH Living Apartments",
    description: "Check availability for BHH Living apartments in Düsseldorf and Ahaus. Secure booking with credit card, Apple Pay, PayPal or Stripe.",
    images: ["/images/og-image.jpg"],
  },
}

const benefits = [
  {
    icon: MessageCircle,
    title: "Direct Contact",
    description: "No platform detours: For questions, you reach our BHH Living team directly.",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Your data is safe with us. Payment is encrypted via our payment provider.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Pay securely with credit card, Apple Pay or PayPal.",
  },
  {
    icon: Calendar,
    title: "Real-time Availability",
    description: "Check in real-time which apartments are available and book immediately.",
  },
]

const steps = [
  {
    step: "1",
    title: "Check availability",
    description: "Select your travel date and check which apartments are available.",
  },
  {
    step: "2",
    title: "Select apartment",
    description: "Choose the right apartment for your stay in Düsseldorf or Ahaus.",
  },
  {
    step: "3",
    title: "Book & pay directly",
    description: "Complete your booking and receive instant confirmation.",
  },
  {
    step: "4",
    title: "Prepare check-in",
    description: "Complete the online check-in and receive all arrival information.",
  },
]

export default function DirectBookingPageEN() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#EEF7FF] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
              BHH Living Direct Booking
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
              Book BHH Living Apartments directly
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555555]">
              Book your BHH Living apartment in Düsseldorf or Ahaus directly with us – no detours, no platform fees. You have direct contact with us and receive personal support.
            </p>

            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-10 py-6 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:opacity-95 transition-all">
                <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  Check Availability Now
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-[#555555]">
              You will be redirected to the secure booking page. Payment with credit card, Apple Pay or PayPal.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
              Benefits of Direct Booking
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#555555]">
              When you book directly with BHH Living, you benefit from personal service and direct contact.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[24px] bg-white p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.04)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div 
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(145deg, rgba(36,93,206,0.12), rgba(19,199,232,0.12))" }}
                >
                  <benefit.icon className="h-6 w-6 text-[#245DCE]" />
                </div>
                <h3 className="text-lg font-semibold text-[#171717]">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555555]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
              How Direct Booking Works
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#555555]">
              In just a few steps to your apartment at BHH Living.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.step} className="relative text-center">
                <div 
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white"
                  style={{ background: "linear-gradient(145deg, #245DCE, #13C7E8)" }}
                >
                  {step.step}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#171717]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555555]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="bg-gradient-to-br from-[#245DCE] to-[#13C7E8] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for your stay at BHH Living?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            Check availability now and book your BHH Living apartment directly.
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/90">
            {["Credit Card", "Apple Pay", "PayPal", "Direct Contact"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-white" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full bg-white px-10 py-6 text-lg font-semibold text-[#245DCE] shadow-xl hover:bg-white/95 transition-all">
              <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                Go to Direct Booking
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Secure payment with credit card, Apple Pay or PayPal
          </p>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#171717]">Still have questions about booking?</h2>
          <p className="mt-4 text-[#555555]">
            In our FAQ you will find answers about check-in, amenities, payment and more.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="rounded-full border-2 border-[#245DCE]/25 px-6 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 transition-all">
              <Link href="/en/faq">Go to FAQ</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-2 border-[#245DCE]/25 px-6 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 transition-all">
              <Link href="/en/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  )
}

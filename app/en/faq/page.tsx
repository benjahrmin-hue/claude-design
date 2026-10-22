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
  description: "Answers about booking, online check-in, key box, payment, amenities and stays at BHH Living in Düsseldorf and Ahaus.",
  keywords: "BHH Living FAQ, Online Check-in, Key box, BHH Living Düsseldorf, BHH Living Ahaus, Apartments FAQ",
  alternates: {
    languages: {
      de: "/faq",
      en: "/en/faq",
    },
  },
  openGraph: {
    type: "website",
    siteName: "BHH Living",
    locale: "en_US",
    url: "https://bhh-living.de/en/faq",
    title: "FAQ | BHH Living Apartments Düsseldorf & Ahaus",
    description: "Answers about booking, online check-in, key box, payment, amenities and stays at BHH Living in Düsseldorf and Ahaus.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BHH Living Apartments in Düsseldorf and Ahaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | BHH Living Apartments Düsseldorf & Ahaus",
    description: "Answers about booking, online check-in, key box, payment, amenities and stays at BHH Living in Düsseldorf and Ahaus.",
    images: ["/images/og-image.jpg"],
  },
}

const faqCategories = [
  {
    title: "Booking & Direct Booking",
    faqs: [
      {
        question: "Can I book directly with BHH Living?",
        answer: "Yes. You can request or book your stay directly via the BHH Living website or our direct booking. This way you have direct contact with us and receive all important information without detours.",
      },
      {
        question: "Which locations can I enquire about?",
        answer: "You can enquire about our BHH Living Apartments in Düsseldorf and our three apartments in Ahaus. Simply select the appropriate location in the contact form or use the direct booking.",
      },
      {
        question: "How does payment work?",
        answer: "Payment is processed securely through our booking process. Depending on availability, you can pay by credit card, Apple Pay or PayPal. All payment information is provided during the booking.",
      },
      {
        question: "Can I ask questions before booking?",
        answer: "Yes. Simply use the contact form or write to us at info@bhh-living.de. We will help you personally if you want to clarify something before booking.",
      },
    ],
  },
  {
    title: "Online Check-in & Arrival",
    faqs: [
      {
        question: "How does online check-in work at BHH Living?",
        answer: "After your booking, you will receive a link to online check-in from us. There you enter the necessary guest details and confirm your arrival information. Once the online check-in is fully completed, you will automatically receive all further information about arrival and the key box.",
      },
      {
        question: "Why do I need to complete online check-in?",
        answer: "Online check-in is necessary so that we can prepare your arrival and securely provide you with access to the apartment. Only after completing online check-in can the key box and access information be fully transmitted.",
      },
      {
        question: "When do I receive the key box code?",
        answer: "You will automatically receive the code and detailed key box instructions once online check-in is completed and your arrival has been prepared. The information will be sent to you in good time before your arrival.",
      },
      {
        question: "How does the key box work?",
        answer: "Before your arrival, you will receive detailed instructions with the key box location and access code. On site, you open the key box with the code, take out the key and can then check in independently.",
      },
      {
        question: "Can I arrive flexibly?",
        answer: "Yes, thanks to self check-in and the key box, you can arrive flexibly once your arrival information has been released. Regular check-in is from 3:00 PM.",
      },
      {
        question: "What do I do if I cannot find the check-in link or code?",
        answer: "First check your emails and possibly your spam folder. If you cannot find the link or access details, please contact us in good time via info@bhh-living.de.",
      },
    ],
  },
  {
    title: "Check-in & Check-out",
    faqs: [
      {
        question: "When is check-in?",
        answer: "Regular check-in is from 3:00 PM. You will receive the exact arrival information after completing online check-in.",
      },
      {
        question: "When is check-out?",
        answer: "Check-out is by 10:00 AM. Please leave the apartment on time so our cleaning team has enough time to prepare for the next guests.",
      },
      {
        question: "How does check-out work?",
        answer: "Please leave the apartment tidy, take your personal belongings with you and return the key as described in your check-out instructions. You will receive the exact instructions with your stay information.",
      },
      {
        question: "Is late check-out possible?",
        answer: "Late check-out is only possible by prior arrangement and depends on occupancy and cleaning. Please enquire with us early.",
      },
    ],
  },
  {
    title: "Apartments & Amenities",
    faqs: [
      {
        question: "Do all BHH Living apartments have a kitchen?",
        answer: "Yes, our apartments have a kitchen or kitchenette. This allows you to cater for yourself flexibly during your stay.",
      },
      {
        question: "Are consumables like oil, spices or coffee provided?",
        answer: "Basic supplies may be available depending on the apartment, but we do not permanently provide consumables such as oil, spices or coffee.",
      },
      {
        question: "Is WiFi included?",
        answer: "Yes, WiFi is included in the BHH Living apartments.",
      },
      {
        question: "Is there a TV?",
        answer: "Yes, the apartments have a TV. Streaming services may be available depending on the device; for services like Netflix, you usually need your own account.",
      },
      {
        question: "Are bed linen and towels provided?",
        answer: "Yes, fresh bed linen and towels are provided in the apartment upon your arrival.",
      },
      {
        question: "Are the apartments suitable for longer stays?",
        answer: "Yes, the BHH Living apartments are also suitable for longer stays, business trips and temporary living. Particularly practical are the kitchen, WiFi, self check-in and personal support.",
      },
    ],
  },
  {
    title: "Düsseldorf & Ahaus",
    faqs: [
      {
        question: "What apartments does BHH Living offer in Düsseldorf?",
        answer: "In Düsseldorf, BHH Living offers modern apartments and serviced apartments in Düsseldorf-Friedrichstadt. They are suitable for business guests, city trips and longer stays. Depending on room category, they accommodate 1 to a maximum of 3 guests.",
      },
      {
        question: "What apartments does BHH Living offer in Ahaus?",
        answer: "In Ahaus, BHH Living offers three modern apartments for different types of stays. Depending on the apartment, they accommodate up to 4 or up to 6 guests.",
      },
      {
        question: "Are the Ahaus apartments also suitable for families or groups?",
        answer: "Yes. Our apartments in Ahaus are suitable for families, groups, business travellers and longer stays, depending on the apartment.",
      },
      {
        question: "Is parking available?",
        answer: "Parking options depend on the respective location and apartment. In Ahaus, parking is available depending on the apartment, and one apartment has a private garage. More detailed information can be found on the respective apartment page or with your booking.",
      },
    ],
  },
  {
    title: "Contact & Help",
    faqs: [
      {
        question: "How can I reach BHH Living?",
        answer: "You can reach us by email at info@bhh-living.de or via the contact form on the website.",
      },
      {
        question: "What do I do if something is missing or not working on site?",
        answer: "Please contact us directly and briefly describe what it is about. If possible, send us a photo. We will take care of it as quickly as possible.",
      },
      {
        question: "Can I make an individual enquiry?",
        answer: "Yes. Use the contact form and provide location, travel dates, number of guests and your message. We will then get back to you personally.",
      },
      {
        question: "Who are the BHH Living apartments suitable for?",
        answer: "Our apartments are suitable for business guests, city trips, families, groups, couples, private visits and longer stays in Düsseldorf or Ahaus.",
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

export default function FAQPageEN() {
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
              Frequently asked questions about BHH Living
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555555]">
              Here you will find the most important answers about booking, online check-in, arrival, amenities and our apartments in Düsseldorf and Ahaus.
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
            Still have questions? We are happy to help.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#555555]">
            Contact us directly or check availability for your apartment in Düsseldorf or Ahaus.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-8 font-semibold text-white shadow-lg hover:shadow-xl hover:opacity-95 transition-all">
              <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer">Book directly</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-[#245DCE]/25 bg-white px-8 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 transition-all">
              <Link href="/en/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

        <Footer lang="en" />
      </main>
    </>
  )
}

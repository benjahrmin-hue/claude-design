import { Star, Quote } from "lucide-react"
import { type Language } from "@/lib/translations"

const reviewsContent = {
  de: {
    badge: "Gästebewertungen",
    title: "Das sagen unsere Gäste",
    ratingLabel: "Sehr gut",
    reviewCount: "329 Bewertungen",
    trustNote: "Bewertungen basierend auf verifizierten Aufenthalten bei BHH Living",
    reviews: [
      { name: "Michael S.", location: "Deutschland", rating: 5, text: "Sehr saubere und moderne Apartments mit perfekter Lage. Der Self-Check-in funktionierte einwandfrei und das Team war bei Fragen sofort erreichbar.", initials: "MS" },
      { name: "Sarah K.", location: "Schweiz", rating: 5, text: "Tolles Apartment mit allem was man braucht. Die Küche war super ausgestattet und die Lage in Düsseldorf ideal für Business und Freizeit.", initials: "SK" },
      { name: "Thomas B.", location: "Österreich", rating: 4, text: "Unkomplizierte Buchung, schnelle Antworten vom BHH Living Team. Das Apartment war genau wie beschrieben. Gerne wieder!", initials: "TB" },
    ],
  },
  en: {
    badge: "Guest reviews",
    title: "What our guests say",
    ratingLabel: "Very good",
    reviewCount: "329 reviews",
    trustNote: "Reviews based on verified stays at BHH Living",
    reviews: [
      { name: "Michael S.", location: "Germany", rating: 5, text: "Very clean and modern apartments with perfect location. The self check-in worked flawlessly and the team was immediately reachable for questions.", initials: "MS" },
      { name: "Sarah K.", location: "Switzerland", rating: 5, text: "Great apartment with everything you need. The kitchen was super equipped and the location in Dusseldorf ideal for business and leisure.", initials: "SK" },
      { name: "Thomas B.", location: "Austria", rating: 4, text: "Uncomplicated booking, quick answers from the BHH Living team. The apartment was exactly as described. Happy to come back!", initials: "TB" },
    ],
  },
}

interface ReviewsProps {
  lang?: Language
}

export function Reviews({ lang = "de" }: ReviewsProps) {
  const content = reviewsContent[lang]

  return (
    <section id="bewertungen" className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
            {content.badge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            {content.title}
          </h2>
          
          {/* Rating Summary */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-white px-6 py-4"
            style={{
              boxShadow: `
                0 10px 30px -10px rgba(36, 93, 206, 0.12),
                0 4px 12px -4px rgba(0, 0, 0, 0.05)
              `,
            }}
          >
            <div 
              className="flex h-14 w-14 items-center justify-center rounded-xl"
              style={{
                background: "linear-gradient(145deg, rgba(36,93,206,0.12), rgba(19,199,232,0.12))",
              }}
            >
              <span className="text-2xl font-bold text-[#245DCE]">8,4</span>
            </div>
            <div className="text-left">
              <p className="text-lg font-bold text-[#171717]">{content.ratingLabel}</p>
              <p className="text-sm text-[#555555]">{content.reviewCount}</p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.reviews.map((review, index) => (
            <div
              key={index}
              className="group rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(165deg, #FFFFFF 0%, #FAFCFF 100%)",
                border: "1px solid rgba(36, 93, 206, 0.06)",
                boxShadow: `
                  0 12px 32px -12px rgba(36, 93, 206, 0.1),
                  0 4px 12px -4px rgba(0, 0, 0, 0.04),
                  inset 0 1px 0 rgba(255,255,255,1)
                `,
              }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-[#13C7E8]/40 mb-4" />
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "fill-[#13C7E8] text-[#13C7E8]" : "fill-[#E5E7EB] text-[#E5E7EB]"}`}
                  />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-[#333333] leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#171717]/5">
                <div 
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #245DCE 0%, #13C7E8 100%)",
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#171717]">{review.name}</p>
                  <p className="text-xs text-[#777777]">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Note */}
        <p className="mt-10 text-center text-sm text-[#555555]">
          {content.trustNote}
        </p>
      </div>
    </section>
  )
}

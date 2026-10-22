"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Users, Search, ExternalLink } from "lucide-react"
import { type Language } from "@/lib/translations"

const BOOKING_URL = "https://bhhliving.holidayfuture.com/all-listings"

const bookingContent = {
  de: {
    checkIn: "Anreise",
    checkOut: "Abreise",
    guests: "Gäste",
    checkInPlaceholder: "Anreise wählen",
    checkOutPlaceholder: "Abreise wählen",
    guestsPlaceholder: "Gäste auswählen",
    submit: "Verfügbarkeit prüfen",
    hint: "Du wirst zur sicheren Buchungsseite weitergeleitet.",
  },
  en: {
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    checkInPlaceholder: "Select check-in",
    checkOutPlaceholder: "Select check-out",
    guestsPlaceholder: "Select guests",
    submit: "Check availability",
    hint: "You will be redirected to our secure booking page.",
  },
}

interface BookingFormProps {
  lang?: Language
}

export function BookingForm({ lang = "de" }: BookingFormProps) {
  const content = bookingContent[lang]

  const handleFieldClick = () => {
    window.open(BOOKING_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="buchen" className="relative -mt-4 sm:-mt-8 z-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div 
          className="rounded-[20px] sm:rounded-[28px] bg-white p-5 sm:p-8"
          style={{
            boxShadow: `
              0 25px 60px -12px rgba(36, 93, 206, 0.12),
              0 12px 30px -8px rgba(0, 0, 0, 0.08),
              inset 0 1px 0 rgba(255,255,255,0.9)
            `,
            border: "1px solid rgba(255,255,255,0.8)",
          }}
        >
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {/* Check-in */}
            <button 
              type="button"
              onClick={handleFieldClick}
              className="space-y-2 text-left group"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-[#171717]">
                <Calendar className="h-4 w-4 text-[#245DCE]" />
                {content.checkIn}
              </span>
              <span className="flex w-full items-center rounded-xl border border-[#171717]/10 bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#555555] transition-all group-hover:border-[#245DCE]/40 group-hover:bg-[#245DCE]/5 cursor-pointer">
                {content.checkInPlaceholder}
              </span>
            </button>

            {/* Check-out */}
            <button 
              type="button"
              onClick={handleFieldClick}
              className="space-y-2 text-left group"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-[#171717]">
                <Calendar className="h-4 w-4 text-[#245DCE]" />
                {content.checkOut}
              </span>
              <span className="flex w-full items-center rounded-xl border border-[#171717]/10 bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#555555] transition-all group-hover:border-[#245DCE]/40 group-hover:bg-[#245DCE]/5 cursor-pointer">
                {content.checkOutPlaceholder}
              </span>
            </button>

            {/* Guests */}
            <button 
              type="button"
              onClick={handleFieldClick}
              className="space-y-2 text-left group"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-[#171717]">
                <Users className="h-4 w-4 text-[#245DCE]" />
                {content.guests}
              </span>
              <span className="flex w-full items-center rounded-xl border border-[#171717]/10 bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#555555] transition-all group-hover:border-[#245DCE]/40 group-hover:bg-[#245DCE]/5 cursor-pointer">
                {content.guestsPlaceholder}
              </span>
            </button>

            {/* Submit Button */}
            <div className="flex items-end sm:col-span-2 lg:col-span-1">
              <Button asChild className="w-full rounded-xl bg-gradient-to-r from-[#245DCE] to-[#13C7E8] py-6 sm:py-7 font-semibold text-white shadow-lg active:shadow-md transition-all min-h-[52px] sm:min-h-[56px]">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Search className="mr-2 h-4 w-4" />
                  {content.submit}
                  <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-70" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Hint Text */}
          <p className="mt-3 sm:mt-4 text-center text-xs text-[#555555]">
            {content.hint}
          </p>
        </div>
      </div>
    </section>
  )
}

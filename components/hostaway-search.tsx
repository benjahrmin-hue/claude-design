"use client"

import { useEffect, useRef } from "react"
import { type Language } from "@/lib/translations"

const WIDGET_SRC = "https://d2q3n06xhbi0am.cloudfront.net/widget.js?1640277196"

const content = {
  de: {
    heading: "Verfügbarkeit prüfen & direkt buchen",
    hint: "Du wirst zur sicheren Buchungsseite weitergeleitet.",
  },
  en: {
    heading: "Check availability & book directly",
    hint: "You will be redirected to our secure booking page.",
  },
}

declare global {
  interface Window {
    searchBar?: (config: Record<string, unknown>) => void
  }
}

interface HostawaySearchProps {
  lang?: Language
}

export function HostawaySearch({ lang = "de" }: HostawaySearchProps) {
  const t = content[lang]
  const initialized = useRef(false)

  useEffect(() => {
    // Guard against double-initialisation (e.g. React StrictMode / client navigation)
    if (initialized.current) return

    const initWidget = () => {
      if (typeof window.searchBar === "function" && !initialized.current) {
        window.searchBar({
          baseUrl: "https://bhhliving.holidayfuture.com/",
          showLocation: true,
          color: "#245DCE",
          rounded: true,
          openInNewTab: true,
          font: "Inter",
        })
        initialized.current = true
      }
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SRC}"]`)

    if (existing) {
      // Script already present – initialise immediately (or once it finishes loading)
      if (window.searchBar) {
        initWidget()
      } else {
        existing.addEventListener("load", initWidget)
      }
      return () => existing.removeEventListener("load", initWidget)
    }

    const script = document.createElement("script")
    script.src = WIDGET_SRC
    script.async = true
    script.addEventListener("load", initWidget)
    document.body.appendChild(script)

    return () => script.removeEventListener("load", initWidget)
  }, [])

  return (
    <section id="buchen" className="relative -mt-4 sm:-mt-8 z-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
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
          <h2 className="mb-4 sm:mb-5 text-center text-lg sm:text-xl font-bold text-[#171717]">
            {t.heading}
          </h2>

          {/* Hostaway Booking Search Widget – mounted client-side */}
          <div id="hostaway-booking-widget" className="w-full" />

          {/* Mobile-only styling for the injected Hostaway widget.
              Scoped to #hostaway-booking-widget so desktop stays untouched. */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @media (max-width: 640px) {
                #hostaway-booking-widget .hsbw-grid {
                  display: flex;
                  flex-direction: column;
                  gap: 12px;
                }
                /* Stack check-in / check-out vertically instead of cramped 2 columns */
                #hostaway-booking-widget .hsbw-dates {
                  display: flex !important;
                  flex-direction: column;
                  gap: 12px;
                  width: 100%;
                }
                #hostaway-booking-widget .hsbw-grid_checkin,
                #hostaway-booking-widget .hsbw-grid_checkout,
                #hostaway-booking-widget .hsbw-grid_locations,
                #hostaway-booking-widget .hsbw-grid_guests {
                  width: 100%;
                }
                /* Turn each field into a clean, bordered box with a proper touch target */
                #hostaway-booking-widget .hsbw-field {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  width: 100%;
                  min-height: 56px;
                  padding: 12px 14px;
                  border: 1px solid #e5e7eb;
                  border-radius: 12px;
                  background: #fff;
                  box-sizing: border-box;
                }
                #hostaway-booking-widget .hsbw-field-icon {
                  display: flex;
                  align-items: center;
                  flex-shrink: 0;
                }
                /* Full-width, touch-friendly search button */
                #hostaway-booking-widget .hsbw-grid_buttons {
                  padding: 0;
                  margin-top: 4px;
                  width: 100%;
                }
                #hostaway-booking-widget .hsbw-main-button {
                  display: flex;
                  width: 100%;
                  min-height: 52px;
                  align-items: center;
                  justify-content: center;
                  border-radius: 12px;
                  font-weight: 600;
                }
              }
            `,
            }}
          />
        </div>
      </div>
    </section>
  )
}

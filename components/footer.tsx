"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MapPin, Mail, ExternalLink } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getLocaleFromPath } from "@/lib/i18n"
import { type Language } from "@/lib/translations"

const BOOKING_URL = "https://bhhliving.holidayfuture.com/all-listings"

const footerContent = {
  de: {
    description: "BHH Living steht für moderne Apartments in Düsseldorf und Ahaus – mit Küche, Self-Check-in, WLAN und persönlichem Support.",
    contact: "Kontakt",
    address: "Hessenweg 25, 48683 Ahaus",
    email: "info@bhh-living.de",
    bookingTitle: "Direkt buchen",
    bookingDesc: "Prüfe die Verfügbarkeit direkt bei BHH Living oder sende uns eine Anfrage. So buchst du unkompliziert und mit direktem Kontakt.",
    bookingCta: "Direkt bei BHH Living buchen",
    locationsTitle: "Unsere Standorte & weitere Seiten",
    links: [
      { label: "Apartments Düsseldorf", href: "/apartments-duesseldorf" },
      { label: "Apartments Ahaus", href: "/apartments-ahaus" },
      { label: "Zimmer & Apartments", href: "/zimmer-apartments" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Direkt buchen", href: "/direkt-buchen" },
    ],
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutzerklaerung" },
      { label: "Cookie-Einstellungen", href: "#", isCookieSettings: true },
    ],
    copyright: "BHH Living Apartments. Alle Rechte vorbehalten.",
    logoAlt: "BHH Living - Apartments in Düsseldorf und Ahaus",
    homeHref: "/",
  },
  en: {
    description: "BHH Living stands for modern apartments in Dusseldorf and Ahaus – with kitchen, self check-in, WiFi and personal support.",
    contact: "Contact",
    address: "Hessenweg 25, 48683 Ahaus",
    email: "info@bhh-living.de",
    bookingTitle: "Book directly",
    bookingDesc: "Check availability directly with BHH Living or send us an inquiry. Book easily with direct contact.",
    bookingCta: "Book directly with BHH Living",
    locationsTitle: "Our locations & more pages",
    links: [
      { label: "Dusseldorf Apartments", href: "/en/dusseldorf-apartments" },
      { label: "Ahaus Apartments", href: "/en/ahaus-apartments" },
      { label: "Rooms & Apartments", href: "/en/rooms-apartments" },
      { label: "FAQ", href: "/en/faq" },
      { label: "Contact", href: "/en/contact" },
      { label: "Book directly", href: "/en/direct-booking" },
    ],
    legal: [
      { label: "Legal Notice", href: "/en/legal-notice" },
      { label: "Privacy Policy", href: "/en/privacy-policy" },
      { label: "Cookie Settings", href: "#", isCookieSettings: true },
    ],
    copyright: "BHH Living Apartments. All rights reserved.",
    logoAlt: "BHH Living - Apartments in Dusseldorf and Ahaus",
    homeHref: "/en",
  },
}

interface FooterProps {
  lang?: Language
}

export function Footer({ lang }: FooterProps) {
  const pathname = usePathname()
  const detectedLang = lang || getLocaleFromPath(pathname)
  const content = footerContent[detectedLang]

  return (
    <footer id="kontakt" className="relative bg-gradient-to-b from-[#245DCE] to-[#13C7E8] px-4 sm:px-6 py-12 sm:py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-3">
          {/* Logo and Description */}
          <div>
            <Link href={content.homeHref}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bhh-logo-white.svg"
                alt={content.logoAlt}
                className="mb-6 h-14 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/80">
              {content.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">{content.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <MapPin className="h-4 w-4 shrink-0 text-white" />
                <span>{content.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="h-4 w-4 shrink-0 text-white" />
                <span>{content.email}</span>
              </div>
            </div>
          </div>

          {/* Direct Booking */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">{content.bookingTitle}</h3>
            <p className="mb-6 text-sm text-white/80">
              {content.bookingDesc}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#245DCE] transition-all duration-300 hover:shadow-lg"
            >
              {content.bookingCta}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Standorte & Links */}
        <div className="mt-8 sm:mt-12 border-t border-white/20 pt-6 sm:pt-8">
          <h3 className="mb-3 text-sm font-semibold text-white/90">{content.locationsTitle}</h3>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {content.links.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm text-white/70 transition-colors hover:text-white py-1 min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 sm:pt-8 sm:flex-row">
          <p className="text-xs text-white/70 text-center sm:text-left">
            © {new Date().getFullYear()} {content.copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <LanguageSwitcher variant="footer" />
            {content.legal.map((link) =>
              "isCookieSettings" in link && link.isCookieSettings ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => window.dispatchEvent(new Event("bhh:open-cookie-settings"))}
                  className="text-xs text-white/70 transition-colors hover:text-white py-2 min-h-[44px] flex items-center"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/70 transition-colors hover:text-white py-2 min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

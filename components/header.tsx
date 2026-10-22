"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getLocaleFromPath, getRoute } from "@/lib/i18n"

// Navigation items for both languages
const navItemsConfig = {
  de: [
    { label: "Apartments Düsseldorf", routeKey: "apartments-duesseldorf" },
    { label: "Apartments Ahaus", routeKey: "apartments-ahaus" },
    { label: "Zimmer", routeKey: "zimmer-apartments" },
    { label: "FAQ", routeKey: "faq" },
    { label: "Kontakt", routeKey: "kontakt" },
    { label: "Direkt buchen", routeKey: "direkt-buchen" },
  ],
  en: [
    { label: "Düsseldorf Apartments", routeKey: "apartments-duesseldorf" },
    { label: "Ahaus Apartments", routeKey: "apartments-ahaus" },
    { label: "Rooms", routeKey: "zimmer-apartments" },
    { label: "FAQ", routeKey: "faq" },
    { label: "Contact", routeKey: "kontakt" },
    { label: "Book Direct", routeKey: "direkt-buchen" },
  ],
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  
  const navItems = navItemsConfig[locale].map(item => ({
    label: item.label,
    href: getRoute(item.routeKey, locale),
  }))

  const homeRoute = getRoute("home", locale)
  const bookingLabel = locale === "de" ? "Direkt buchen" : "Book Direct"
  const BOOKING_URL = "https://bhhliving.holidayfuture.com/all-listings"

  return (
    <header className="sticky top-0 z-50 w-full bg-white/98 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[84px] lg:px-8">
        {/* Logo - blaues SVG fuer weissen Header, ohne CSS-Filter */}
        <Link href={homeRoute} className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bhh-logo-blue.svg"
            alt={locale === "de" ? "BHH Living - Apartments in Düsseldorf und Ahaus" : "BHH Living - Apartments in Düsseldorf and Ahaus"}
            className="h-12 w-auto md:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-3 xl:gap-4 lg:flex">
          {navItems.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-medium text-[#171717]/75 transition-colors hover:text-[#245DCE] xl:text-[14px]"
            >
              {item.label}
            </Link>
          ))}
          
          <Button asChild className="rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] px-4 py-2 text-[12px] font-semibold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all xl:px-5 xl:text-[13px]">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{bookingLabel}</a>
          </Button>
          
          {/* Language Switcher - Desktop (ganz rechts) */}
          <LanguageSwitcher variant="header" />
        </nav>

        {/* Mobile Menu Button - Touch-optimiert */}
        <button
          type="button"
          className="lg:hidden relative z-50 flex h-12 w-12 items-center justify-center rounded-lg active:bg-gray-100 touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? (locale === "de" ? "Menü schließen" : "Close menu") : (locale === "de" ? "Menü öffnen" : "Open menu")}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-[#171717]" />
          ) : (
            <Menu className="h-6 w-6 text-[#171717]" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Dropdown unter Header */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop zum Schliessen bei Klick ausserhalb */}
          <div 
            className="fixed inset-0 top-[76px] bg-black/20 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div 
            className="absolute left-0 right-0 top-full z-50 bg-white shadow-xl rounded-b-2xl border-t border-gray-100 lg:hidden"
            style={{
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
            }}
          >
            <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              <div className="space-y-1">
                {navItems.slice(0, -1).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-[#171717] transition-colors active:bg-[#FAF7F2] hover:bg-[#FAF7F2] min-h-[48px]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              {/* Language Switcher - Mobile */}
              <div className="mt-3 pt-3 border-t border-[#171717]/10">
                <LanguageSwitcher variant="mobile" />
              </div>

              {/* Direkt buchen Button - prominent, direkt zur externen Buchung */}
              <div className="mt-3 pt-3 border-t border-[#171717]/10 pb-2">
                <Button asChild className="w-full rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] font-semibold text-white shadow-md py-5 text-base min-h-[52px]">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                    {bookingLabel}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getLocaleFromPath } from "@/lib/i18n"

const content = {
  de: {
    title: "Cookie-Einstellungen",
    description: "Wir verwenden Cookies, um dein Erlebnis auf unserer Website zu verbessern. Du kannst deine Einstellungen jederzeit ändern.",
    acceptAll: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige Cookies",
    settings: "Einstellungen",
  },
  en: {
    title: "Cookie Settings",
    description: "We use cookies to enhance your experience on our website. You can change your settings at any time.",
    acceptAll: "Accept all",
    necessaryOnly: "Necessary only",
    settings: "Settings",
  },
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const t = content[locale]

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("bhh-cookie-consent")
    if (!cookieConsent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    // Re-open the banner when triggered from elsewhere (e.g. footer "Cookie-Einstellungen")
    const handleOpen = () => setShowBanner(true)
    window.addEventListener("bhh:open-cookie-settings", handleOpen)
    return () => window.removeEventListener("bhh:open-cookie-settings", handleOpen)
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("bhh-cookie-consent", "all")
    setShowBanner(false)
    // Here you would enable all cookies/tracking
  }

  const handleNecessaryOnly = () => {
    localStorage.setItem("bhh-cookie-consent", "necessary")
    setShowBanner(false)
    // Here you would only enable necessary cookies
  }

  const handleSettings = () => {
    // This would open a detailed settings modal
    // For now, we just accept necessary cookies
    localStorage.setItem("bhh-cookie-consent", "necessary")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:bottom-4 z-[100]">
      <div 
        className="w-full sm:w-[380px] rounded-2xl bg-white p-4"
        style={{
          boxShadow: `
            0 10px 40px -10px rgba(0, 0, 0, 0.2),
            0 4px 20px rgba(0, 0, 0, 0.08)
          `,
          border: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <h3 className="text-sm font-semibold text-[#171717]">{t.title}</h3>
        <p className="mt-1.5 text-xs text-[#555555] leading-relaxed">
          {t.description}
        </p>
        
        {/* Buttons - compact layout */}
        <div className="mt-3 flex flex-wrap gap-2">
          <Button 
            onClick={handleAcceptAll}
            size="sm"
            className="flex-1 rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] font-medium text-white text-xs min-h-[36px]"
          >
            {t.acceptAll}
          </Button>
          <Button 
            onClick={handleNecessaryOnly}
            size="sm"
            variant="outline"
            className="flex-1 rounded-full border border-[#171717]/15 font-medium text-[#171717] hover:bg-[#171717]/5 hover:text-[#171717] text-xs min-h-[36px]"
          >
            {t.necessaryOnly}
          </Button>
        </div>
        <button 
          onClick={handleSettings}
          className="mt-2 text-xs text-[#555555] hover:text-[#245DCE] underline underline-offset-2"
        >
          {t.settings}
        </button>
      </div>
    </div>
  )
}

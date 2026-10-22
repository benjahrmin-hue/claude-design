"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getLocaleFromPath, getAlternateRoute, type Locale } from "@/lib/i18n"

interface LanguageSwitcherProps {
  variant?: "header" | "mobile" | "footer"
}

export function LanguageSwitcher({ variant = "header" }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const currentLocale = getLocaleFromPath(pathname)
  
  const deRoute = currentLocale === "de" ? pathname : getAlternateRoute(pathname, "de")
  const enRoute = currentLocale === "en" ? pathname : getAlternateRoute(pathname, "en")

  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-3 py-2">
        <span className="text-sm text-[#555555]">Sprache / Language:</span>
        <div className="flex items-center gap-2">
          <Link
            href={deRoute}
            className={`text-sm font-medium transition-colors ${
              currentLocale === "de"
                ? "text-[#245DCE]"
                : "text-[#555555] hover:text-[#245DCE]"
            }`}
          >
            DE
          </Link>
          <span className="text-[#555555]/40">|</span>
          <Link
            href={enRoute}
            className={`text-sm font-medium transition-colors ${
              currentLocale === "en"
                ? "text-[#245DCE]"
                : "text-[#555555] hover:text-[#245DCE]"
            }`}
          >
            EN
          </Link>
        </div>
      </div>
    )
  }

  if (variant === "footer") {
    return (
      <div className="flex items-center gap-2">
        <Link
          href={deRoute}
          className={`text-sm transition-colors ${
            currentLocale === "de"
              ? "text-white font-medium"
              : "text-white/60 hover:text-white"
          }`}
        >
          DE
        </Link>
        <span className="text-white/40">|</span>
        <Link
          href={enRoute}
          className={`text-sm transition-colors ${
            currentLocale === "en"
              ? "text-white font-medium"
              : "text-white/60 hover:text-white"
          }`}
        >
          EN
        </Link>
      </div>
    )
  }

  // Default: header variant
  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-[#171717]/10 bg-[#F8FAFC] px-2 py-1">
      <Link
        href={deRoute}
        className={`rounded px-1.5 py-0.5 text-xs font-medium transition-all ${
          currentLocale === "de"
            ? "bg-[#245DCE] text-white"
            : "text-[#555555] hover:text-[#245DCE]"
        }`}
      >
        DE
      </Link>
      <Link
        href={enRoute}
        className={`rounded px-1.5 py-0.5 text-xs font-medium transition-all ${
          currentLocale === "en"
            ? "bg-[#245DCE] text-white"
            : "text-[#555555] hover:text-[#245DCE]"
        }`}
      >
        EN
      </Link>
    </div>
  )
}

// i18n Configuration for BHH Living
// Designed for easy migration to WordPress with WPML/Polylang

export type Locale = "de" | "en"

export const defaultLocale: Locale = "de"

export const locales: Locale[] = ["de", "en"]

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
}

// Route mappings between languages
export const routeMap: Record<string, Record<Locale, string>> = {
  home: {
    de: "/",
    en: "/en",
  },
  "apartments-duesseldorf": {
    de: "/apartments-duesseldorf",
    en: "/en/dusseldorf-apartments",
  },
  "apartments-ahaus": {
    de: "/apartments-ahaus",
    en: "/en/ahaus-apartments",
  },
  "zimmer-apartments": {
    de: "/zimmer-apartments",
    en: "/en/rooms-apartments",
  },
  faq: {
    de: "/faq",
    en: "/en/faq",
  },
  kontakt: {
    de: "/kontakt",
    en: "/en/contact",
  },
  "direkt-buchen": {
    de: "/direkt-buchen",
    en: "/en/direct-booking",
  },
  impressum: {
    de: "/impressum",
    en: "/en/legal-notice",
  },
  datenschutz: {
    de: "/datenschutzerklaerung",
    en: "/en/privacy-policy",
  },
}

// Get the alternate language route for a given path
export function getAlternateRoute(currentPath: string, targetLocale: Locale): string {
  // Find the route key for the current path
  for (const [key, routes] of Object.entries(routeMap)) {
    if (routes.de === currentPath || routes.en === currentPath) {
      return routes[targetLocale]
    }
  }
  // Fallback: if path starts with /en, go to /, otherwise go to /en
  if (currentPath.startsWith("/en")) {
    return currentPath.replace("/en", "") || "/"
  }
  return `/en${currentPath}`
}

// Get route by key and locale
export function getRoute(key: string, locale: Locale): string {
  return routeMap[key]?.[locale] || (locale === "en" ? "/en" : "/")
}

// Detect locale from pathname
export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "de"
}

// External booking URL (same for both languages)
export const BOOKING_URL = "https://bhhliving.holidayfuture.com/all-listings"

// Contact email
export const CONTACT_EMAIL = "info@bhh-living.de"

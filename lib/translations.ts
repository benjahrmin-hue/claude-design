export type Language = "de" | "en"

export const translations = {
  // Header
  header: {
    de: {
      nav: [
        { label: "Apartments Düsseldorf", href: "/apartments-duesseldorf" },
        { label: "Apartments Ahaus", href: "/apartments-ahaus" },
        { label: "Zimmer", href: "/zimmer-apartments" },
        { label: "FAQ", href: "/faq" },
        { label: "Kontakt", href: "/kontakt" },
      ],
      cta: { label: "Direkt buchen", href: "/direkt-buchen" },
      logoAlt: "BHH Living - Apartments in Düsseldorf und Ahaus",
    },
    en: {
      nav: [
        { label: "Dusseldorf Apartments", href: "/en/dusseldorf-apartments" },
        { label: "Ahaus Apartments", href: "/en/ahaus-apartments" },
        { label: "Rooms", href: "/en/rooms-apartments" },
        { label: "FAQ", href: "/en/faq" },
        { label: "Contact", href: "/en/contact" },
      ],
      cta: { label: "Book directly", href: "/en/direct-booking" },
      logoAlt: "BHH Living - Apartments in Dusseldorf and Ahaus",
    },
  },

  // Hero
  hero: {
    de: {
      headline: "Be different – Stay BHH Living",
      subline: "Voll ausgestattete Apartments in Düsseldorf-Friedrichstadt – mit Küche, digitalem Check-in, WLAN und persönlichem Support. Ideal für Businessgäste, Städtetrips und längere Aufenthalte.",
      ctaPrimary: "Jetzt direkt buchen",
      ctaSecondary: "Anfrage senden",
      ctaSecondaryHref: "/kontakt",
      imageAlt: "Helles BHH Living Apartment in Düsseldorf mit Doppelbett und moderner Einrichtung",
      directBooking: "Direktbuchung möglich",
    },
    en: {
      headline: "Be different – Stay BHH Living",
      subline: "Fully equipped apartments in Dusseldorf-Friedrichstadt – with kitchen, digital check-in, WiFi and personal support. Ideal for business travelers, city trips and longer stays.",
      ctaPrimary: "Book directly now",
      ctaSecondary: "Send inquiry",
      ctaSecondaryHref: "/en/contact",
      imageAlt: "Bright BHH Living apartment in Dusseldorf with double bed and modern furnishings",
      directBooking: "Direct booking available",
    },
  },

  // Booking Form
  bookingForm: {
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
  },

  // Benefits
  benefits: {
    de: {
      items: [
        { title: "Voll ausgestattete Küche", description: "Koche selbst – spare Geld und bleib flexibel." },
        { title: "Digitaler Check-in", description: "Schlüsselbox-Code nach Online-Check-in – anreisen wann du willst." },
        { title: "Schnelles WLAN", description: "Arbeiten, streamen, surfen – überall im Apartment." },
        { title: "Persönlicher Support", description: "Direkter Kontakt zu BHH Living – schnell und unkompliziert." },
      ],
    },
    en: {
      items: [
        { title: "Fully equipped kitchen", description: "Cook yourself – save money and stay flexible." },
        { title: "Digital check-in", description: "Key box code after online check-in – arrive whenever you want." },
        { title: "Fast WiFi", description: "Work, stream, browse – everywhere in the apartment." },
        { title: "Personal support", description: "Direct contact to BHH Living – fast and uncomplicated." },
      ],
    },
  },

  // Apartments Section
  apartments: {
    de: {
      title: "Unsere Apartmenttypen",
      subtitle: "Ob für kurze Aufenthalte, Geschäftsreisen oder längere Projekte – bei BHH Living findest du das passende Apartment.",
      types: [
        {
          title: "Micro-Apartments Düsseldorf",
          description: "Kompakt, modern und clever eingerichtet – ideal für kurze Aufenthalte, Alleinreisende und Businessgäste.",
          alt: "Gemütlicher Schlafbereich eines BHH Living Apartments in Düsseldorf",
        },
        {
          title: "Apartments mit Küche",
          description: "Jedes BHH Living Apartment verfügt über eine Küche und bietet dir mehr Unabhängigkeit als ein klassisches Hotelzimmer.",
          alt: "Moderne Küche eines BHH Living Apartments in Düsseldorf",
        },
        {
          title: "Business & Longstay",
          description: "Für Projektaufenthalte, Geschäftsreisen und längere Aufenthalte in Düsseldorf – mit WLAN, Self-Check-in und persönlichem Support.",
          alt: "Arbeitsbereich eines BHH Living Apartments in Düsseldorf",
        },
        {
          title: "Ruhige Nächte",
          description: "Nach deinem Tag in Düsseldorf erwartet dich ein gemütliches Apartment mit klarer Ausstattung und entspannter Atmosphäre.",
          alt: "Heller Wohnbereich eines BHH Living Apartments in Düsseldorf",
        },
      ],
    },
    en: {
      title: "Our apartment types",
      subtitle: "Whether for short stays, business trips or longer projects – at BHH Living you will find the right apartment.",
      types: [
        {
          title: "Micro-Apartments Dusseldorf",
          description: "Compact, modern and cleverly furnished – ideal for short stays, solo travelers and business guests.",
          alt: "Cozy sleeping area of a BHH Living apartment in Dusseldorf",
        },
        {
          title: "Apartments with kitchen",
          description: "Every BHH Living apartment has a kitchen and offers you more independence than a classic hotel room.",
          alt: "Modern kitchen of a BHH Living apartment in Dusseldorf",
        },
        {
          title: "Business & Longstay",
          description: "For project stays, business trips and longer stays in Dusseldorf – with WiFi, self check-in and personal support.",
          alt: "Work area of a BHH Living apartment in Dusseldorf",
        },
        {
          title: "Peaceful nights",
          description: "After your day in Dusseldorf, a cozy apartment with clear furnishings and relaxed atmosphere awaits you.",
          alt: "Bright living area of a BHH Living apartment in Dusseldorf",
        },
      ],
    },
  },

  // Process
  process: {
    de: {
      title: "In 3 Schritten zu deinem Apartment",
      subtitle: "Einfacher geht's nicht: Buche direkt, checke online ein und starte deinen Aufenthalt.",
      steps: [
        { title: "Direkt buchen", description: "Wähle dein Apartment und buche direkt über unsere Buchungsstrecke – ohne Umwege." },
        { title: "Online einchecken", description: "Nach der Buchung erhältst du einen Link zum Online-Check-in. Gib deine Gästedaten ein und erhalte den Code für die Schlüsselbox." },
        { title: "Ankommen & wohlfühlen", description: "Öffne die Schlüsselbox, nimm deinen Schlüssel und genieße deinen Aufenthalt." },
      ],
    },
    en: {
      title: "3 steps to your apartment",
      subtitle: "It couldn't be easier: Book directly, check in online and start your stay.",
      steps: [
        { title: "Book directly", description: "Choose your apartment and book directly through our booking system – no detours." },
        { title: "Check in online", description: "After booking, you will receive a link for online check-in. Enter your guest details and receive the code for the key box." },
        { title: "Arrive & feel at home", description: "Open the key box, take your key and enjoy your stay." },
      ],
    },
  },

  // Location
  location: {
    de: {
      title: "Lage in Düsseldorf-Friedrichstadt",
      address: "Corneliusstraße 110a–c",
      city: "40215 Düsseldorf",
      description: "Die BHH Living Apartments liegen zentral in Düsseldorf-Friedrichstadt – nur wenige Gehminuten vom Hauptbahnhof, der Altstadt und dem Medienhafen entfernt.",
      features: ["5 Min. zum Hauptbahnhof", "10 Min. zur Altstadt", "Restaurants & Cafés in der Nähe", "Ruhige Innenhof-Lage"],
      imageAlt: "Sonniger Innenhof der BHH Living Apartments in Düsseldorf-Friedrichstadt",
      badge: "Düsseldorf-Friedrichstadt",
    },
    en: {
      title: "Location in Dusseldorf-Friedrichstadt",
      address: "Corneliusstraße 110a–c",
      city: "40215 Dusseldorf",
      description: "The BHH Living apartments are centrally located in Dusseldorf-Friedrichstadt – just a few minutes walk from the main train station, the old town and the media harbor.",
      features: ["5 min. to main station", "10 min. to old town", "Restaurants & cafés nearby", "Quiet courtyard location"],
      imageAlt: "Sunny courtyard of BHH Living apartments in Dusseldorf-Friedrichstadt",
      badge: "Dusseldorf-Friedrichstadt",
    },
  },

  // Reviews
  reviews: {
    de: {
      title: "Das sagen unsere Gäste",
      subtitle: "Echte Bewertungen von echten Gästen – überzeuge dich selbst.",
      items: [
        { name: "Thomas M.", text: "Super sauberes Apartment, tolle Lage und unkomplizierter Check-in. Gerne wieder!", rating: 5 },
        { name: "Sarah K.", text: "Perfekt für meinen Business-Aufenthalt. Die Küche hat mir viel Flexibilität gegeben.", rating: 5 },
        { name: "Michael R.", text: "Moderne Einrichtung und sehr freundlicher Support. Klare Empfehlung!", rating: 5 },
      ],
    },
    en: {
      title: "What our guests say",
      subtitle: "Real reviews from real guests – see for yourself.",
      items: [
        { name: "Thomas M.", text: "Super clean apartment, great location and uncomplicated check-in. Happy to come back!", rating: 5 },
        { name: "Sarah K.", text: "Perfect for my business stay. The kitchen gave me a lot of flexibility.", rating: 5 },
        { name: "Michael R.", text: "Modern furnishings and very friendly support. Clear recommendation!", rating: 5 },
      ],
    },
  },

  // CTA
  cta: {
    de: {
      title: "Bereit für deinen Aufenthalt?",
      subtitle: "Buche jetzt dein BHH Living Apartment in Düsseldorf oder Ahaus – direkt, ohne Umwege.",
      ctaPrimary: "Direkt buchen",
      ctaSecondary: "Kontakt aufnehmen",
      ctaSecondaryHref: "/kontakt",
    },
    en: {
      title: "Ready for your stay?",
      subtitle: "Book your BHH Living apartment in Dusseldorf or Ahaus now – directly, without detours.",
      ctaPrimary: "Book directly",
      ctaSecondary: "Get in touch",
      ctaSecondaryHref: "/en/contact",
    },
  },

  // Footer
  footer: {
    de: {
      description: "BHH Living steht für moderne Apartments in Düsseldorf und Ahaus – mit Küche, Self-Check-in, WLAN und persönlichem Support.",
      contact: "Kontakt",
      email: "info@bhh-living.de",
      ctaButton: "Direkt bei BHH Living buchen",
      locations: "Unsere Standorte & weitere Seiten",
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
      ],
      copyright: "BHH Living. Alle Rechte vorbehalten.",
      logoAlt: "BHH Living - Apartments in Düsseldorf und Ahaus",
    },
    en: {
      description: "BHH Living stands for modern apartments in Dusseldorf and Ahaus – with kitchen, self check-in, WiFi and personal support.",
      contact: "Contact",
      email: "info@bhh-living.de",
      ctaButton: "Book directly with BHH Living",
      locations: "Our locations & more pages",
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
      ],
      copyright: "BHH Living. All rights reserved.",
      logoAlt: "BHH Living - Apartments in Dusseldorf and Ahaus",
    },
  },

  // Common
  common: {
    de: {
      homeHref: "/",
      bookingUrl: "https://bhhliving.holidayfuture.com/all-listings",
    },
    en: {
      homeHref: "/en",
      bookingUrl: "https://bhhliving.holidayfuture.com/all-listings",
    },
  },
}

export function getTranslations(lang: Language) {
  return {
    header: translations.header[lang],
    hero: translations.hero[lang],
    bookingForm: translations.bookingForm[lang],
    benefits: translations.benefits[lang],
    apartments: translations.apartments[lang],
    process: translations.process[lang],
    location: translations.location[lang],
    reviews: translations.reviews[lang],
    cta: translations.cta[lang],
    footer: translations.footer[lang],
    common: translations.common[lang],
  }
}

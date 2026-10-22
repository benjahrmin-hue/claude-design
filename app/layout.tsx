import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bhh-living.de'),
  title: 'BHH Living Apartments | Düsseldorf & Ahaus direkt buchen',
  description: 'Moderne BHH Living Apartments in Düsseldorf und Ahaus mit Küche, WLAN, Self-Check-in und persönlichem Support. Jetzt direkt buchen oder Anfrage senden.',
  keywords: 'BHH Living Apartments, Apartments Düsseldorf, Apartments Ahaus, direkt buchen, Self-Check-in, Serviced Apartments',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    siteName: 'BHH Living',
    locale: 'de_DE',
    url: 'https://bhh-living.de',
    title: 'BHH Living Apartments | Düsseldorf & Ahaus direkt buchen',
    description: 'Moderne BHH Living Apartments in Düsseldorf und Ahaus mit Küche, WLAN, Self-Check-in und persönlichem Support. Jetzt direkt buchen oder Anfrage senden.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BHH Living Apartments in Düsseldorf und Ahaus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BHH Living Apartments | Düsseldorf & Ahaus direkt buchen',
    description: 'Moderne BHH Living Apartments in Düsseldorf und Ahaus mit Küche, WLAN, Self-Check-in und persönlichem Support. Jetzt direkt buchen oder Anfrage senden.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const lodgingBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "BHH Living",
  url: "https://bhh-living.de",
  image: "https://bhh-living.de/images/og-image.jpg",
  telephone: "+49 15123407019",
  email: "info@bhh-living.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hessenweg 25",
    postalCode: "48683",
    addressLocality: "Ahaus",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Düsseldorf" },
    { "@type": "City", name: "Ahaus" },
  ],
  sameAs: ["https://bhhliving.holidayfuture.com"],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://bhhliving.holidayfuture.com",
      inLanguage: ["de", "en"],
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "LodgingReservation",
      name: "BHH Living Apartment Buchung",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Global LodgingBusiness Schema JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessSchema) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}

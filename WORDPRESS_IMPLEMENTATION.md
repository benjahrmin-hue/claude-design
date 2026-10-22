# BHH Living - WordPress Implementation Guide

Diese Dokumentation dient als Grundlage für die Umsetzung der BHH Living Website in WordPress mit Elementor.

---

## A) Seitenstruktur Deutsch

| Seite | URL | Status |
|-------|-----|--------|
| Startseite | `/` | Fertig |
| Apartments Düsseldorf | `/apartments-duesseldorf` | Fertig |
| Apartments Ahaus | `/apartments-ahaus` | Fertig |
| Zimmer & Apartments | `/zimmer-apartments` | Fertig |
| FAQ | `/faq` | Fertig |
| Kontakt | `/kontakt` | Fertig |
| Direkt buchen | `/direkt-buchen` | Fertig |
| Impressum | `/impressum` | Fertig |
| Datenschutz | `/datenschutzerklaerung` | Fertig |

---

## B) Seitenstruktur Englisch

| Seite | URL | Status |
|-------|-----|--------|
| Home | `/en` | Fertig |
| Düsseldorf Apartments | `/en/dusseldorf-apartments` | Fertig |
| Ahaus Apartments | `/en/ahaus-apartments` | Fertig |
| Rooms & Apartments | `/en/rooms-apartments` | Fertig |
| FAQ | `/en/faq` | Fertig |
| Contact | `/en/contact` | Fertig |
| Direct Booking | `/en/direct-booking` | Fertig |
| Legal Notice | `/en/legal-notice` | Fertig |
| Privacy Policy | `/en/privacy-policy` | Fertig |

---

## C) WordPress Plugins (empfohlen)

| Plugin | Zweck |
|--------|-------|
| **Elementor Pro** | Page Builder für alle Seiten |
| **Elementor Header & Footer Builder** | Globaler Header/Footer |
| **WPForms** oder **Contact Form 7** | Kontaktformular |
| **CookieYes** | DSGVO-konformer Cookie-Consent |
| **Rank Math** oder **Yoast SEO** | SEO-Optimierung |
| **WPML** oder **Polylang** | Mehrsprachigkeit DE/EN |
| **WP Rocket** oder **LiteSpeed Cache** | Performance-Optimierung |

---

## D) Designsystem

### Farben

| Name | Hex-Code | Verwendung |
|------|----------|------------|
| BHH Blau (Primary) | `#245DCE` | Buttons, Links, Akzente |
| BHH Türkis (Secondary) | `#13C7E8` | Gradient-Ende, Akzente |
| Hintergrund Hell | `#F8FAFC` | Sektions-Hintergrund |
| Off-White | `#FAF7F2` | Hover-States, Karten |
| Text Dunkel | `#171717` | Überschriften, wichtiger Text |
| Text Grau | `#555555` | Fließtext, Beschreibungen |

### Gradient (Primary Button)

```css
background: linear-gradient(to right, #245DCE, #13C7E8);
```

### Stil-Merkmale

- Helle, moderne Website
- Weiße/glassy 3D-Karten mit weichen Schatten
- Runde Ecken: 20-32px für Karten, 9999px (full) für Buttons
- Weiche Box-Shadows
- Blau-Türkis-Gradient für Hauptbuttons
- Klare, moderne Typografie

---

## E) Typografie

### Schriftart

**Inter** (Google Font)

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Für WordPress lokal einbinden (DSGVO)

Download von: https://fonts.google.com/specimen/Inter

### Schriftgrößen

| Element | Desktop | Mobile |
|---------|---------|--------|
| H1 | 3.5rem (56px) | 1.75rem (28px) |
| H2 | 2.25rem (36px) | 1.5rem (24px) |
| H3 | 1.25rem (20px) | 1.125rem (18px) |
| Body | 1rem (16px) | 1rem (16px) |
| Small | 0.875rem (14px) | 0.75rem (12px) |

---

## F) Button-Stile

### Primary Button (Booking/CTA)

```css
background: linear-gradient(to right, #245DCE, #13C7E8);
color: white;
border-radius: 9999px;
padding: 16px 32px;
font-weight: 600;
box-shadow: 0 10px 25px -5px rgba(36, 93, 206, 0.3);
```

### Secondary Button (Outline)

```css
background: white;
color: #245DCE;
border: 2px solid rgba(36, 93, 206, 0.25);
border-radius: 9999px;
padding: 16px 32px;
font-weight: 600;
```

### Ghost Button

```css
background: transparent;
color: #555555;
border-radius: 9999px;
padding: 12px 24px;
font-weight: 500;
```

### Mobile Button

```css
width: 100%;
min-height: 52px;
padding: 16px 24px;
```

---

## G) Karten-Stile

### Standard Card (3D-Effekt)

```css
background: linear-gradient(165deg, #FFFFFF 0%, #F8FBFD 100%);
border: 1px solid rgba(36, 93, 206, 0.08);
border-radius: 24px;
box-shadow: 
  0 20px 50px -15px rgba(36, 93, 206, 0.1),
  0 8px 20px -8px rgba(0, 0, 0, 0.06),
  inset 0 1px 0 rgba(255, 255, 255, 1);
```

### Apartment Card

- Höhe Bild: 220px (mobile), 260px (desktop)
- Border-Radius: 24px (mobile), 32px (desktop)
- Hover: translateY(-8px)

### FAQ Card

```css
background: white;
border-radius: 20px;
border: 1px solid rgba(36, 93, 206, 0.06);
box-shadow: 
  0 10px 30px -10px rgba(36, 93, 206, 0.08),
  0 4px 12px -4px rgba(0, 0, 0, 0.04);
```

---

## H) Formulare

### Kontaktformular Felder

| Feld | DE Label | EN Label | Typ | Pflicht |
|------|----------|----------|-----|---------|
| vorname | Vorname | First name | text | Ja |
| nachname | Nachname | Last name | text | Ja |
| email | E-Mail | Email | email | Ja |
| telefon | Telefon | Phone | tel | Nein |
| standort | Bevorzugter Standort | Preferred location | select | Nein |
| apartment | Gewünschtes Apartment | Preferred apartment | text | Nein |
| anreise | Anreise | Check-in | date | Nein |
| abreise | Abreise | Check-out | date | Nein |
| gaeste | Anzahl Gäste | Number of guests | select | Nein |
| nachricht | Nachricht | Message | textarea | Ja |

### Standort-Optionen

- Düsseldorf
- Ahaus
- Allgemeine Anfrage / General inquiry

### Empfänger E-Mail

```
info@bhh-living.de
```

### WordPress-Umsetzung

Über WPForms oder Contact Form 7 mit entsprechender Styling-Anpassung.

---

## I) Buchungslink

**Alle Buchungsbuttons führen zu:**

```
https://bhhliving.holidayfuture.com/all-listings
```

**Technische Anforderungen:**
- `target="_blank"`
- `rel="noopener noreferrer"`

---

## J) Cookie-Consent

### WordPress-Umsetzung

Über **CookieYes** Plugin

### Banner-Stil

- Position: Unten, zentriert
- Stil: Kompakte Card, nicht modal
- Kein dunkles Overlay

### Buttons

| DE | EN |
|----|-----|
| Alle akzeptieren | Accept all |
| Nur notwendige | Necessary only |
| Einstellungen | Settings |

### Cookie-Kategorien

| Kategorie DE | Kategorie EN |
|--------------|--------------|
| Notwendig | Necessary |
| Funktional | Functional |
| Analyse | Analytics |
| Marketing | Marketing |

### Footer-Link

- DE: "Cookie-Einstellungen"
- EN: "Cookie Settings"

### TODO für WordPress

- [ ] Google Consent Mode v2 konfigurieren
- [ ] Tracking erst nach Consent laden
- [ ] CookieYes mit Branding anpassen

---

## K) Mehrsprachigkeit

### WordPress-Umsetzung

Über **WPML** oder **Polylang**

### Konfiguration

- **Hauptsprache:** Deutsch
- **Zweite Sprache:** Englisch
- **URL-Struktur:** `/en/` Prefix für Englisch

### Wichtig

- Layouts müssen identisch bleiben
- Nur Texte, Meta-Daten, Alt-Texte und Links unterscheiden sich
- Sprachumschalter im Header und Footer

### hreflang Tags

```html
<link rel="alternate" hreflang="de" href="https://bhh-living.de/" />
<link rel="alternate" hreflang="en" href="https://bhh-living.de/en/" />
<link rel="alternate" hreflang="x-default" href="https://bhh-living.de/" />
```

---

## L) Bildliste

### Hero/Header Bilder

| Datei | Sektion | Alt-Text DE | Alt-Text EN |
|-------|---------|-------------|-------------|
| bhh-hero.jpg | Hero Startseite | Helles BHH Living Apartment in Düsseldorf mit Doppelbett und moderner Einrichtung | Bright BHH Living apartment in Düsseldorf with double bed and modern interior |
| bhh-courtyard.jpg | Location | Sonniger Innenhof der BHH Living Apartments in Düsseldorf-Friedrichstadt | Sunny courtyard of the BHH Living Apartments in Düsseldorf-Friedrichstadt |

### Apartment Bilder Düsseldorf

| Datei | Alt-Text DE | Alt-Text EN |
|-------|-------------|-------------|
| duesseldorf-apartment-1.jpg | BHH Living Apartment in Düsseldorf-Friedrichstadt | BHH Living apartment in Düsseldorf-Friedrichstadt |

### Apartment Bilder Ahaus

| Datei | Alt-Text DE | Alt-Text EN |
|-------|-------------|-------------|
| ahaus-large.jpg | Große BHH Living Ferienwohnung in Ahaus für bis zu sechs Gäste | Large BHH Living holiday apartment in Ahaus for up to six guests |
| ahaus-city-oasis.jpg | BHH Living Stadtoase Ahaus mit Terrasse und moderner Einrichtung | BHH Living City Oasis Ahaus with terrace and modern interior |
| ahaus-balcony.jpg | BHH Living Balkon-Wohnung in Ahaus mit hellem Wohnbereich | BHH Living Balcony Apartment in Ahaus with bright living area |

### Bildoptimierung

- Format: WebP bevorzugt, JPEG als Fallback
- Komprimierung: 80% Qualität
- Responsive: srcset für verschiedene Größen
- Lazy Loading für Bilder unterhalb des Folds

---

## M) Elementor-Aufbau pro Seite

### Startseite `/`

| Sektion | Container | Desktop | Mobile |
|---------|-----------|---------|--------|
| Hero | 2 Spalten | 50/50 | Stack |
| BookingForm | 1 Container | 4 Spalten | Stack |
| Apartments | Grid | 4 Spalten | 1 Spalte |
| Location | 2 Spalten | 50/50 | Stack |
| FAQ | 1 Spalte | 100% | 100% |
| CTA | 1 Spalte, zentriert | 100% | 100% |

### Apartments Düsseldorf `/apartments-duesseldorf`

| Sektion | Container | Desktop | Mobile |
|---------|-----------|---------|--------|
| Hero | 2 Spalten | 50/50 | Stack |
| Features | Grid | 3 Spalten | 1 Spalte |
| Location | 2 Spalten | 50/50 | Stack |
| Internal Links | Flex | Horizontal | Stack |
| CTA | 1 Spalte, zentriert | 100% | 100% |

### Apartments Ahaus `/apartments-ahaus`

| Sektion | Container | Desktop | Mobile |
|---------|-----------|---------|--------|
| Hero | 1 Spalte, zentriert | 100% | 100% |
| Apartment Cards | Grid | 3 Spalten | 1 Spalte |
| Zielgruppe | Grid | 4 Spalten | 2 Spalten |
| Amenities | Grid | 5 Spalten | 2 Spalten |
| CTA | 1 Spalte, zentriert | 100% | 100% |

### FAQ `/faq`

| Sektion | Container | Desktop | Mobile |
|---------|-----------|---------|--------|
| Hero | 1 Spalte, zentriert | 100% | 100% |
| FAQ Categories | Grid | 2 Spalten | 1 Spalte |
| CTA | 1 Spalte, zentriert | 100% | 100% |

### Kontakt `/kontakt`

| Sektion | Container | Desktop | Mobile |
|---------|-----------|---------|--------|
| Hero | 2 Spalten | 50/50 | Stack |
| Formular | 1 Spalte | 2 Spalten intern | 1 Spalte |
| Standorte | Grid | 2 Spalten | 1 Spalte |

---

## N) Komponenten-Übersicht

### Globale Komponenten

| Komponente | Datei | Beschreibung |
|------------|-------|--------------|
| Header | `header.tsx` | Sticky Header mit Navigation und Sprachumschalter |
| Footer | `footer.tsx` | Footer mit Links, Kontakt und Legal |
| CookieBanner | `cookie-banner.tsx` | DSGVO-konformer Cookie-Consent |
| LanguageSwitcher | `language-switcher.tsx` | DE/EN Umschalter |

### Seiten-Komponenten

| Komponente | Datei | Beschreibung |
|------------|-------|--------------|
| Hero | `hero.tsx` | Hero-Bereich Startseite |
| BookingForm | `booking-form.tsx` | Buchungsformular mit externem Link |
| Apartments | `apartments.tsx` | Apartment-Karten Grid |
| Location | `location.tsx` | Standort-Sektion mit Karte |
| FAQ | `faq.tsx` | FAQ-Accordion |
| ContactForm | `contact-form.tsx` | Kontaktformular |
| Testimonials | `testimonials.tsx` | Bewertungen/Testimonials |

---

## O) SEO-Checkliste

### Pro Seite prüfen

- [ ] Genau eine H1
- [ ] Saubere H2/H3-Hierarchie
- [ ] Meta Title (max. 60 Zeichen)
- [ ] Meta Description (max. 155 Zeichen)
- [ ] Alt-Texte für alle Bilder
- [ ] Interne Verlinkung zu relevanten Seiten

### Strukturierte Daten

- [ ] FAQPage JSON-LD auf /faq und /en/faq
- [ ] LocalBusiness JSON-LD auf Startseite
- [ ] hreflang Tags für DE/EN

### Meta Titles (Beispiele)

| Seite | DE | EN |
|-------|-----|-----|
| Startseite | BHH Living - Apartments in Düsseldorf & Ahaus | BHH Living - Apartments in Dusseldorf & Ahaus |
| Düsseldorf | Apartments Düsseldorf-Friedrichstadt \| BHH Living | Apartments Dusseldorf-Friedrichstadt \| BHH Living |
| Ahaus | Ferienwohnungen Ahaus \| BHH Living | Holiday Apartments Ahaus \| BHH Living |
| FAQ | Häufige Fragen \| BHH Living | FAQ \| BHH Living |
| Kontakt | Kontakt \| BHH Living | Contact \| BHH Living |

---

## P) Rechtliche TODOs

### Impressum

- [ ] Vollständige Firmendaten eintragen
- [ ] Handelsregister-Nummer
- [ ] USt-IdNr.
- [ ] Verantwortlicher nach § 18 MStV

### Datenschutzerklärung

- [ ] Hosting-Anbieter eintragen
- [ ] Kontaktformular-Verarbeitung
- [ ] Hostaway/HolidayFuture als Auftragsverarbeiter
- [ ] Zahlungsanbieter (Stripe, PayPal)
- [ ] Cookie-Consent Details
- [ ] Google Consent Mode v2
- [ ] Tracking nur nach Consent
- [ ] Betroffenenrechte
- [ ] SSL/TLS Hinweis

---

## Q) Technische TODOs für WordPress

### Vor Go-Live

- [ ] SSL-Zertifikat einrichten
- [ ] Caching aktivieren
- [ ] Bilder komprimieren und WebP aktivieren
- [ ] Lazy Loading für Bilder
- [ ] CookieYes konfigurieren
- [ ] Google Consent Mode v2 implementieren
- [ ] Kontaktformular testen
- [ ] 301-Redirects von alten URLs (falls vorhanden)
- [ ] robots.txt prüfen
- [ ] XML-Sitemap generieren
- [ ] Google Search Console einrichten
- [ ] Analytics (nach Consent) einrichten

### Performance-Ziele

- Lighthouse Performance: > 90
- Lighthouse Accessibility: > 95
- Core Web Vitals: Alle grün

---

## R) Logo-Dateien

### Verwendete Logo-Varianten

| Datei | Verwendung | Farbe |
|-------|------------|-------|
| `bhh-logo-blue.svg` | Header (weißer Hintergrund) | #245DCE (Blau) |
| `bhh-logo-white.svg` | Footer (blauer Hintergrund) | #FFFFFF (Weiß) |

### Wichtig für WordPress

- Beide SVG-Dateien lokal hosten
- Kein CSS-Filter für Farbänderung verwenden
- Logo-Höhe: Header 48-56px, Footer 56px

---

## S) Abschlussbericht

### Geprüfte Links und Buttons

**Alle Buchungs-CTAs führen korrekt zu:**
`https://bhhliving.holidayfuture.com/all-listings`

- Header "Direkt buchen" / "Book Direct" - OK (extern mit target="_blank")
- Hero "Jetzt direkt buchen" / "Book directly now" - OK (extern mit target="_blank")
- BookingForm "Verfügbarkeit prüfen" / "Check availability" - OK (extern mit target="_blank")
- Apartment-Karten CTAs - OK (extern mit target="_blank")
- Direkt-buchen Seite CTAs - OK (extern mit target="_blank")
- Footer "Direkt bei BHH Living buchen" - OK (extern mit target="_blank")
- FAQ Buchungs-Link - OK
- Kontakt Buchungs-Link - OK

**Interne Links geprüft:**
- Alle Navigationslinks (DE + EN) - OK
- Footer-Links - OK
- Sprachumschalter - OK (führt zur entsprechenden Seite in anderer Sprache)
- Legal-Links - OK

### Logo-Status

- Header Logo: `/images/bhh-logo-blue.svg` (blaues Logo auf weißem Header)
- Footer Logo: `/images/bhh-logo-white.svg` (weißes Logo auf blauem Footer)
- Kein CSS-Filter mehr verwendet
- Desktop und Mobile identisch

### Behobene Fehler

1. Logo-Filter entfernt (war lila gefärbt durch CSS filter)
2. Korrektes BHH Living Logo mit Haus-Symbol implementiert
3. FAQ Accordion standardmäßig eingeklappt
4. Mobile-Optimierungen für Touch-Targets (min 48px)
5. Alle Buchungs-Buttons führen direkt zur externen Buchungsseite
6. Cookie-Banner kompakt unten rechts

### Offene TODOs für WordPress

1. Echte Firmendaten im Impressum eintragen
2. Datenschutzerklärung finalisieren
3. CookieYes konfigurieren
4. Google Consent Mode v2 implementieren
5. Kontaktformular mit WPForms nachbauen
6. Bilder lokal hosten und komprimieren
7. Schrift lokal einbinden (DSGVO)
8. hreflang Tags implementieren

---

*Erstellt: Mai 2026*
*Version: 1.0*

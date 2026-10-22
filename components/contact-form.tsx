"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

// Ziel-Endpoint fuer den E-Mail-Versand auf IONOS (PHP).
// Die Datei public/api/contact.php.example muss auf IONOS nach
// /api/contact.php kopiert und konfiguriert werden.
const CONTACT_ENDPOINT = "/api/contact.php"

interface ContactFormResult {
  success: boolean
  message: string
  errors?: Record<string, string>
}

interface ContactFormProps {
  lang?: "de" | "en"
}

const translations = {
  de: {
    firstName: "Vorname",
    lastName: "Nachname",
    email: "E-Mail-Adresse",
    phone: "Telefonnummer",
    location: "Gewünschter Standort",
    selectLocation: "Standort wählen",
    duesseldorf: "Düsseldorf",
    ahaus: "Ahaus",
    generalInquiry: "Allgemeine Anfrage",
    apartment: "Gewünschtes Apartment",
    apartmentPlaceholder: "z.B. Comfort Apartment",
    checkIn: "Anreise",
    checkOut: "Abreise",
    guests: "Anzahl Gäste",
    guestsPlaceholder: "Gäste",
    guest1: "1 Gast",
    guest2: "2 Gäste",
    guest3: "3 Gäste (max. Düsseldorf)",
    guest4: "4 Gäste (nur Ahaus)",
    guest5: "5 Gäste (nur Ahaus)",
    guest6: "6 Gäste (nur Ahaus große Wohnung)",
    message: "Nachricht",
    messagePlaceholder: "Deine Nachricht an uns...",
    submit: "Anfrage senden",
    submitting: "Wird gesendet...",
    required: "Pflichtfelder",
    directBooking: "Direktbuchung",
    directBookingNote: "Für direkte Buchungen nutze bitte unsere",
    orSendInquiry: "oder sende uns eine Anfrage.",
    successTitle: "Anfrage gesendet!",
    successMessage: "Vielen Dank für deine Anfrage! Wir melden uns in Kürze bei dir.",
    newInquiry: "Neue Anfrage senden",
    firstNamePlaceholder: "Max",
    lastNamePlaceholder: "Mustermann",
    emailPlaceholder: "max@beispiel.de",
    phonePlaceholder: "+49 123 456789",
    validationFailed: "Bitte überprüfe deine Eingaben",
    errFirstName: "Bitte gib deinen Vornamen ein",
    errLastName: "Bitte gib deinen Nachnamen ein",
    errEmail: "Bitte gib deine E-Mail-Adresse ein",
    errEmailInvalid: "Bitte gib eine gültige E-Mail-Adresse ein",
    errMessage: "Bitte gib eine Nachricht ein",
    errNetwork: "Deine Anfrage konnte nicht gesendet werden. Bitte versuche es später erneut oder schreibe uns direkt an info@bhh-living.de.",
  },
  en: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email address",
    phone: "Phone number",
    location: "Preferred location",
    selectLocation: "Select location",
    duesseldorf: "Düsseldorf",
    ahaus: "Ahaus",
    generalInquiry: "General enquiry",
    apartment: "Preferred apartment",
    apartmentPlaceholder: "e.g. Comfort Apartment",
    checkIn: "Check-in date",
    checkOut: "Check-out date",
    guests: "Number of guests",
    guestsPlaceholder: "Guests",
    guest1: "1 guest",
    guest2: "2 guests",
    guest3: "3 guests (max. Düsseldorf)",
    guest4: "4 guests (Ahaus only)",
    guest5: "5 guests (Ahaus only)",
    guest6: "6 guests (Ahaus large apartment only)",
    message: "Message",
    messagePlaceholder: "Your message to us...",
    submit: "Send enquiry",
    submitting: "Sending...",
    required: "Required fields",
    directBooking: "direct booking",
    directBookingNote: "For direct bookings, please use our",
    orSendInquiry: "or send us an enquiry.",
    successTitle: "Enquiry sent!",
    successMessage: "Thank you for your enquiry! We will get back to you shortly.",
    newInquiry: "Send new enquiry",
    firstNamePlaceholder: "John",
    lastNamePlaceholder: "Smith",
    emailPlaceholder: "john@example.com",
    phonePlaceholder: "+49 123 456789",
    validationFailed: "Please check your entries",
    errFirstName: "Please enter your first name",
    errLastName: "Please enter your last name",
    errEmail: "Please enter your email address",
    errEmailInvalid: "Please enter a valid email address",
    errMessage: "Please enter a message",
    errNetwork: "Your enquiry could not be sent. Please try again later or email us directly at info@bhh-living.de.",
  },
}

export function ContactForm({ lang = "de" }: ContactFormProps) {
  const [isPending, setIsPending] = useState(false)
  const [result, setResult] = useState<ContactFormResult | null>(null)
  const [standort, setStandort] = useState("")
  
  const t = translations[lang]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set("standort", standort)

    // Clientseitige Validierung
    const vorname = (formData.get("vorname") as string || "").trim()
    const nachname = (formData.get("nachname") as string || "").trim()
    const email = (formData.get("email") as string || "").trim()
    const nachricht = (formData.get("nachricht") as string || "").trim()

    const errors: Record<string, string> = {}
    if (!vorname) errors.vorname = t.errFirstName
    if (!nachname) errors.nachname = t.errLastName
    if (!email) errors.email = t.errEmail
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = t.errEmailInvalid
    if (!nachricht) errors.nachricht = t.errMessage

    if (Object.keys(errors).length > 0) {
      setResult({ success: false, message: t.validationFailed, errors })
      return
    }

    // Payload mit standardisierten Feldnamen fuer die PHP-Datei auf IONOS
    const payload = {
      firstName: vorname,
      lastName: nachname,
      email,
      phone: (formData.get("telefon") as string || "").trim(),
      location: standort,
      apartment: (formData.get("apartment") as string || "").trim(),
      checkIn: (formData.get("anreise") as string || "").trim(),
      checkOut: (formData.get("abreise") as string || "").trim(),
      guests: (formData.get("gaeste") as string || "").trim(),
      message: nachricht,
      language: lang,
    }

    setIsPending(true)
    setResult(null)

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      // Erfolgsmeldung nur nach echter, erfolgreicher Response
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      let data: { success?: boolean; message?: string } = {}
      try {
        data = await response.json()
      } catch {
        // Keine/ungueltige JSON-Antwort -> als Fehler behandeln
        throw new Error("Invalid response")
      }

      if (data.success) {
        setResult({ success: true, message: data.message || t.successMessage })
        form.reset()
        setStandort("")
      } else {
        setResult({ success: false, message: data.message || t.errNetwork })
      }
    } catch {
      setResult({ success: false, message: t.errNetwork })
    } finally {
      setIsPending(false)
    }
  }

  if (result?.success) {
    return (
      <div 
        className="rounded-2xl bg-white p-8 text-center"
        style={{ boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)", border: "1px solid rgba(0,0,0,0.04)" }}
      >
        <div 
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "linear-gradient(145deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.15))" }}
        >
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-[#171717]">{t.successTitle}</h3>
        <p className="mt-3 text-[#555555]">{result.message}</p>
        <Button 
          onClick={() => setResult(null)}
          variant="outline"
          className="mt-6 rounded-full border-2 border-[#245DCE]/25 px-6 font-semibold text-[#245DCE] hover:bg-[#245DCE]/5 transition-all"
        >
          {t.newInquiry}
        </Button>
      </div>
    )
  }

  return (
    <form 
      id="contact-form"
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6"
      style={{ boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)", border: "1px solid rgba(0,0,0,0.04)" }}
    >
      {result && !result.success && (
        <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">{result.message}</p>
            {result.errors && (
              <ul className="mt-1 text-sm">
                {Object.values(result.errors).map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Name fields - stacked on mobile */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vorname" className="text-[#171717]">{t.firstName} *</Label>
          <Input 
            id="vorname" 
            name="vorname"
            placeholder={t.firstNamePlaceholder}
            required
            className="rounded-xl border-[#171717]/10 bg-[#F8FAFC] focus:border-[#245DCE] focus:ring-[#245DCE] min-h-[48px]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nachname" className="text-[#171717]">{t.lastName} *</Label>
          <Input 
            id="nachname" 
            name="nachname"
            placeholder={t.lastNamePlaceholder}
            required
            className="rounded-xl border-[#171717]/10 bg-[#F8FAFC] focus:border-[#245DCE] focus:ring-[#245DCE] min-h-[48px]"
          />
        </div>
      </div>

      {/* Contact fields - stacked on mobile */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#171717]">{t.email} *</Label>
          <Input 
            id="email" 
            name="email"
            type="email" 
            placeholder={t.emailPlaceholder}
            required
            className="rounded-xl border-[#171717]/10 bg-[#F8FAFC] focus:border-[#245DCE] focus:ring-[#245DCE] min-h-[48px]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefon" className="text-[#171717]">{t.phone}</Label>
          <Input 
            id="telefon" 
            name="telefon"
            type="tel" 
            placeholder={t.phonePlaceholder}
            className="rounded-xl border-[#171717]/10 bg-[#F8FAFC] focus:border-[#245DCE] focus:ring-[#245DCE] min-h-[48px]"
          />
        </div>
      </div>

      {/* Location fields - stacked on mobile */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="standort" className="text-[#171717]">{t.location}</Label>
          <Select value={standort} onValueChange={setStandort}>
            <SelectTrigger className="rounded-xl border-[#171717]/10 bg-[#F8FAFC] focus:border-[#245DCE] focus:ring-[#245DCE] min-h-[48px]">
              <SelectValue placeholder={t.selectLocation} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="duesseldorf">{t.duesseldorf}</SelectItem>
              <SelectItem value="ahaus">{t.ahaus}</SelectItem>
              <SelectItem value="allgemein">{t.generalInquiry}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="apartment" className="text-[#171717]">{t.apartment}</Label>
          <Input 
            id="apartment" 
            name="apartment"
            placeholder={t.apartmentPlaceholder}
            className="rounded-xl border-[#171717]/10 bg-[#F8FAFC] focus:border-[#245DCE] focus:ring-[#245DCE] min-h-[48px]"
          />
        </div>
      </div>

      {/* Date and guest fields - stacked on mobile */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="anreise" className="text-[#171717]">{t.checkIn}</Label>
          <Input 
            id="anreise" 
            name="anreise"
            type="date" 
            className="rounded-xl border-[#171717]/10 bg-[#F8FAFC] focus:border-[#245DCE] focus:ring-[#245DCE] min-h-[48px]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="abreise" className="text-[#171717]">{t.checkOut}</Label>
          <Input 
            id="abreise" 
            name="abreise"
            type="date" 
            className="rounded-xl border-[#171717]/10 bg-[#F8FAFC] focus:border-[#245DCE] focus:ring-[#245DCE] min-h-[48px]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gaeste" className="text-[#171717]">{t.guests}</Label>
          <Select name="gaeste">
            <SelectTrigger className="rounded-xl border-[#171717]/10 bg-[#F8FAFC] focus:border-[#245DCE] focus:ring-[#245DCE] min-h-[48px]">
              <SelectValue placeholder={t.guestsPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">{t.guest1}</SelectItem>
              <SelectItem value="2">{t.guest2}</SelectItem>
              <SelectItem value="3">{t.guest3}</SelectItem>
              <SelectItem value="4">{t.guest4}</SelectItem>
              <SelectItem value="5">{t.guest5}</SelectItem>
              <SelectItem value="6">{t.guest6}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="nachricht" className="text-[#171717]">{t.message} *</Label>
        <Textarea 
          id="nachricht" 
          name="nachricht"
          placeholder={t.messagePlaceholder}
          rows={5}
          required
          className="rounded-xl border-[#171717]/10 bg-[#F8FAFC] focus:border-[#245DCE] focus:ring-[#245DCE]"
        />
      </div>

      <Button 
        type="submit" 
        disabled={isPending}
        className="w-full rounded-full bg-gradient-to-r from-[#245DCE] to-[#13C7E8] font-semibold text-white shadow-md active:shadow-sm transition-all disabled:opacity-70 min-h-[52px] py-4"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t.submitting}
          </>
        ) : (
          t.submit
        )}
      </Button>

      <p className="text-center text-xs text-[#555555]">
        * {t.required}. {t.directBookingNote}{" "}
        <a href="https://bhhliving.holidayfuture.com/all-listings" target="_blank" rel="noopener noreferrer" className="text-[#245DCE] hover:underline">
          {t.directBooking}
        </a>{" "}
        {t.orSendInquiry}
      </p>
    </form>
  )
}

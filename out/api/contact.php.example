<?php
/**
 * ============================================================
 * BHH Living - Kontaktformular Mailversand (IONOS / PHP)
 * ============================================================
 *
 * ANLEITUNG:
 * 1. Diese Datei auf IONOS umbenennen/kopieren nach:  /api/contact.php
 *    (also: public_html/api/contact.php)
 * 2. Den Empfaenger ($EMPFAENGER) pruefen.
 * 3. Bei Bedarf Absenderadresse ($FROM) an eine echte
 *    Postfach-Adresse deiner Domain anpassen (z.B. no-reply@bhh-living.de),
 *    damit die Mail nicht im Spam landet.
 * 4. Spam-Schutz aktivieren (siehe TODO weiter unten).
 *
 * Das Frontend sendet die Daten als JSON per POST an diese Datei.
 * Felder: firstName, lastName, email, phone, location, apartment,
 *         checkIn, checkOut, guests, message, language
 *
 * Antwort: JSON { "success": true|false, "message": "..." }
 * ============================================================
 */

// ----- Konfiguration -----
$EMPFAENGER = "info@bhh-living.de";
// TODO: Absenderadresse auf eine echte Postfachadresse der Domain setzen.
$FROM       = "no-reply@bhh-living.de";

// ----- CORS / Methode -----
header("Content-Type: application/json; charset=utf-8");

// Nur POST erlauben
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// ----- JSON-Body einlesen -----
$raw  = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Ungültige Anfrage / invalid request"]);
    exit;
}

// ----- Hilfsfunktion zum Bereinigen -----
function clean($value) {
    return trim(strip_tags((string) ($value ?? "")));
}

$firstName = clean($data["firstName"] ?? "");
$lastName  = clean($data["lastName"]  ?? "");
$email     = clean($data["email"]     ?? "");
$phone     = clean($data["phone"]     ?? "");
$location  = clean($data["location"]  ?? "");
$apartment = clean($data["apartment"] ?? "");
$checkIn   = clean($data["checkIn"]   ?? "");
$checkOut  = clean($data["checkOut"]  ?? "");
$guests    = clean($data["guests"]    ?? "");
$message   = clean($data["message"]   ?? "");
$language  = clean($data["language"]  ?? "de");

// ----- Serverseitige Validierung (Pflichtfelder) -----
$errors = [];
if ($firstName === "") $errors[] = "firstName";
if ($lastName  === "") $errors[] = "lastName";
if ($email === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "email";
if ($message === "") $errors[] = "message";

if (count($errors) > 0) {
    http_response_code(422);
    echo json_encode([
        "success" => false,
        "message" => "Bitte überprüfe deine Eingaben / Please check your entries",
        "errors"  => $errors,
    ]);
    exit;
}

/**
 * ============================================================
 * TODO: SPAM-SCHUTZ
 * ============================================================
 * Empfohlene Maßnahmen vor dem Echtbetrieb:
 *  - Honeypot-Feld im Formular (verstecktes Feld, das leer sein muss).
 *  - Zeitliche Begrenzung / Rate Limiting pro IP.
 *  - Optional: Google reCAPTCHA v3 oder hCaptcha Server-Validierung.
 *  - Einfacher Keyword-/Linkfilter gegen offensichtlichen Spam.
 *
 * Beispiel Honeypot (im Frontend ein leeres Feld "company" senden):
 *   if (!empty($data["company"])) { exit; } // Bot erkannt
 * ============================================================
 */

// ----- E-Mail zusammenbauen -----
$standortLabel = $location;
if ($location === "duesseldorf") $standortLabel = "Düsseldorf";
elseif ($location === "ahaus")    $standortLabel = "Ahaus";
elseif ($location === "allgemein") $standortLabel = "Allgemeine Anfrage";

$betreff = "Neue Anfrage über BHH Living Website";

$body  = "NEUE ANFRAGE ÜBER BHH LIVING WEBSITE\n";
$body .= "=====================================\n\n";
$body .= "KONTAKTDATEN:\n";
$body .= "- Vorname: "  . $firstName . "\n";
$body .= "- Nachname: " . $lastName  . "\n";
$body .= "- E-Mail: "   . $email     . "\n";
$body .= "- Telefon: "  . ($phone !== "" ? $phone : "Nicht angegeben") . "\n\n";
$body .= "AUFENTHALT:\n";
$body .= "- Standort: "  . ($standortLabel !== "" ? $standortLabel : "Nicht angegeben") . "\n";
$body .= "- Apartment: " . ($apartment !== "" ? $apartment : "Nicht angegeben") . "\n";
$body .= "- Anreise: "   . ($checkIn  !== "" ? $checkIn  : "Nicht angegeben") . "\n";
$body .= "- Abreise: "   . ($checkOut !== "" ? $checkOut : "Nicht angegeben") . "\n";
$body .= "- Anzahl Gäste: " . ($guests !== "" ? $guests : "Nicht angegeben") . "\n\n";
$body .= "NACHRICHT:\n" . $message . "\n\n";
$body .= "=====================================\n";
$body .= "Sprache der Anfrage: " . $language . "\n";
$body .= "Gesendet über: BHH Living Website\n";

// ----- Header -----
$headers  = "From: BHH Living Website <" . $FROM . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

// ----- Versand -----
// Hinweis: Für zuverlaessigeren Versand kann statt mail()
// auch PHPMailer mit SMTP des IONOS-Postfachs verwendet werden.
$sent = mail($EMPFAENGER, $betreff, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => ($language === "en")
            ? "Thank you for your enquiry! We will get back to you shortly."
            : "Vielen Dank für deine Anfrage! Wir melden uns in Kürze bei dir.",
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => ($language === "en")
            ? "Your enquiry could not be sent. Please try again later."
            : "Deine Anfrage konnte nicht gesendet werden. Bitte versuche es später erneut.",
    ]);
}

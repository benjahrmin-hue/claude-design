# IONOS Static Deployment – BHH Living

Diese Anleitung beschreibt, wie die Website als statische HTML/CSS/JS-Dateien
gebaut und auf einen normalen IONOS Linux-Webspace (ohne Node.js-Server,
ohne Vercel) hochgeladen wird.

---

## 1. Voraussetzungen (lokal)

- **Node.js** (Version 18 oder neuer) – https://nodejs.org
- **npm** (kommt mit Node.js) oder alternativ pnpm
- Ein FTP-/SFTP-Programm (z. B. FileZilla) oder der IONOS Datei-Manager

---

## 2. Build erstellen

Im Projektordner im Terminal ausführen:

```bash
npm install
npm run build
```

Nach erfolgreichem Build entsteht automatisch der Ordner:

```
out/
```

Dieser Ordner enthält die komplette fertige Website:

- `index.html` (Startseite)
- alle Unterseiten als eigene HTML-Dateien (jeweils als `seitenname/index.html`)
- der Ordner `_next/` mit CSS und JavaScript
- alle Bilder, Icons und öffentlichen Assets aus `public/`
- die Datei `api/contact.php.example` (muss umbenannt werden, siehe Punkt 5)

> Hinweis: Der Static Export ist über `output: "export"` in `next.config.mjs`
> aktiviert. `trailingSlash: true` sorgt dafür, dass Unterseiten als Ordner
> mit `index.html` erzeugt werden – ideal für klassisches Webhosting.

---

## 3. Upload auf IONOS

1. Mit FTP/SFTP oder dem IONOS Datei-Manager in das Webspace-Wurzelverzeichnis wechseln:
   meist `public_html/` (oder das Document-Root deiner Domain).
2. **Den gesamten INHALT des Ordners `out/` hochladen** – NICHT den Ordner `out` selbst.

   Richtig:
   ```
   public_html/index.html
   public_html/_next/...
   public_html/faq/index.html
   public_html/images/...
   ```

   Falsch:
   ```
   public_html/out/index.html   ❌
   ```

3. **Wichtig:** Der Ordner `_next/` MUSS mit hochgeladen werden. Ohne ihn fehlen
   sämtliche Styles und Skripte und die Seite wird unformatiert dargestellt.
   Asset-Pfade NICHT manuell umschreiben – sie sind vom Static Export korrekt erzeugt.

---

## 4. SSL / HTTPS

- In IONOS unter **SSL** ein kostenloses SSL-Zertifikat (Let's Encrypt) für die
  Domain aktivieren, falls noch nicht geschehen.
- Anschließend sicherstellen, dass die Domain automatisch von `http://` auf
  `https://` weiterleitet (in IONOS aktivierbar oder per `.htaccess`).

---

## 5. Kontaktformular einrichten (PHP)

Das Formular sendet die Daten per `POST` (JSON) an `/api/contact.php`.

1. Die Datei `api/contact.php.example` auf dem Webspace umbenennen/kopieren nach:
   ```
   public_html/api/contact.php
   ```
2. In `contact.php` oben die Konfiguration prüfen:
   - `$EMPFAENGER` = `info@bhh-living.de`
   - `$FROM` = eine echte Postfachadresse der Domain (z. B. `no-reply@bhh-living.de`),
     damit Mails nicht im Spam landen.
3. **Spam-Schutz aktivieren** (im Beispiel als TODO kommentiert): Honeypot-Feld,
   Rate Limiting und optional reCAPTCHA.

> Solange `contact.php` nicht existiert oder nicht konfiguriert ist, zeigt das
> Formular eine Fehlermeldung an – es gibt KEINE falsche Erfolgsmeldung ohne
> echten Versand.

---

## 6. Cache leeren bei IONOS

Falls nach dem Upload alte Inhalte angezeigt werden:

- Im IONOS-Kundenmenü ggf. den **Cache / die Performance-Optimierung leeren**.
- Im Browser einen Hard-Reload machen (Strg/Cmd + Shift + R).
- Bei aktivem CDN/Caching kann es einige Minuten dauern, bis Änderungen sichtbar sind.

---

## 7. Test-Checkliste nach dem Upload

- [ ] Startseite lädt mit korrektem Design (Styles aus `_next/` werden geladen)
- [ ] Logo wird im Header (blau) und Footer (weiß) angezeigt
- [ ] Navigation funktioniert auf Desktop und Mobile (Burger-Menü)
- [ ] Sprachumschalter DE/EN wechselt korrekt
- [ ] Alle Unterseiten erreichbar (FAQ, Kontakt, Apartments Düsseldorf/Ahaus, Impressum, Datenschutz)
- [ ] Buchungs-Buttons öffnen `https://bhhliving.holidayfuture.com/all-listings`
- [ ] Kontaktformular: Pflichtfeld-Validierung funktioniert
- [ ] Kontaktformular: nach `contact.php`-Einrichtung kommt eine echte E-Mail an `info@bhh-living.de` an
- [ ] HTTPS aktiv, keine Mixed-Content-Warnungen
- [ ] Bilder und Icons werden angezeigt

---

## 8. Erneutes Deployment (Updates)

Bei Änderungen am Projekt:

```bash
npm install   # nur nötig, wenn sich Abhängigkeiten geändert haben
npm run build
```

Danach erneut den **Inhalt von `out/`** nach `public_html/` hochladen
(vorhandene Dateien überschreiben). Die bereits eingerichtete `api/contact.php`
nicht überschreiben (die `.example`-Datei nicht erneut aktivieren, falls
`contact.php` schon konfiguriert ist).

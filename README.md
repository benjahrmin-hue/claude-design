# BHH Living

Website für BHH Living Apartments in Düsseldorf und Ahaus (DE/EN).

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Static IONOS build

Die Website wird als statische HTML/CSS/JS-Dateien gebaut und kann ohne
Node.js-Server auf normalem Webspace (z. B. IONOS) gehostet werden.

```bash
npm install
npm run build
```

Nach dem Build entsteht der Ordner `out/`.

**Danach:** Den kompletten **Inhalt** aus `out/` nach `public_html/` hochladen
(nicht den Ordner `out` selbst als Unterordner). Der Ordner `_next/` muss
unbedingt mit hochgeladen werden.

Detaillierte Schritt-für-Schritt-Anleitung inkl. Kontaktformular-Setup:
siehe [`IONOS_STATIC_DEPLOYMENT.md`](./IONOS_STATIC_DEPLOYMENT.md).

## Kontaktformular

Das Formular sendet per POST (JSON) an `/api/contact.php`.
Die Vorlage liegt unter `public/api/contact.php.example` und muss auf dem
Webspace nach `/api/contact.php` kopiert und konfiguriert werden
(Empfänger: `info@bhh-living.de`).

## WordPress-Variante

Eine Anleitung für den Nachbau in WordPress liegt unter
[`WORDPRESS_IMPLEMENTATION.md`](./WORDPRESS_IMPLEMENTATION.md).

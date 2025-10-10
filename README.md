# Kevin de Bruyne hyllningssida

## Projektbeskrivning

Denna webbplats är en hyllning till Kevin de Bruyne och hans 10 år som Manchester City-spelare (2015-2025). Webbplatsen presenterar hans karriär, prestationer och tillåter besökare att dela sina egna hyllningar. Det är en responsiv tribute-webbplats skriven på ett enkelt sätt med HTML, CSS och JavaScript

## Tekniker som använts

### HTML
- **Semantisk struktur**: Använder `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` för tydlig struktur
- **Korrekt rubrikstruktur**: H1-H3 hierarki följs konsekvent
- **Tillgänglighet**: Alla bilder har beskrivande alt-texter
- **Flera sidor**: Huvudsida plus fyra undersidor (Karriär, Prestationer, Galleri, Hyllning)

### CSS
- **Layout**: Använder CSS Grid och enkel Flexbox för layout
- **Responsiv design**: Media queries för mobil (480px), surfplatta (768px) och desktop
- **Enkel styling**: Solid colors, basic styling utan avancerade effekter
- **CSS Grid**: Används för statistik-kort (.stats-grid) och interaktiva kort (.interactive-grid)
- **Flexbox-liknande**: Navigation med inline-block för horisontell placering

### JavaScript
- **Enkel JavaScript**: Basic funktioner med `var`, `function` declarations
- **DOM-manipulation**: `getElementById`, `innerHTML` för enkel manipulation
- **Event handling**: `onclick` funktioner för interaktivitet
- **Basic validation**: Enkel if/else-logik för formulärvalidering

## Interaktiva funktioner

### 1. Statistik-sektion
- Visar Kevins totala matcher, mål, assister och titlar
- Använder CSS Grid för layout av statistik-kort
- Enkel presentation utan animationer

### 2. Interaktiva kort på huvudsidan
- **Favoritmål**: Visar lista över Kevins mest minnesvärda mål
- **Tröja-samling**: Presenterar hans tröjor genom åren
- **Hyllningsformulär**: Tillåter användare att skriva egna hyllningar
- Enkel toggle-funktionalitet med onclick-events

### 3. Galleri "Kevin under åren"
- Enkel bildvisning utan filtrering
- Basic lightbox-funktionalitet med navigering
- Klicka på bilder för att förstora dem

### 4. Tribute-system
- Formulär för att skriva hyllningar
- Enkel validering av inmatning
- Basic localStorage för att spara hyllningar
- Enkel sökfunktionalitet

### 5. Responsiv navigation med hamburger-meny
- Enkel navigation för alla enheter
- Hamburger-meny för mobila enheter
- Basic hover-effekter
- Aktiv länk-markering
- Automatisk stängning av mobilmeny vid navigation

## Utmaningar & lösningar

# 1. Responsiv design för olika skärmstorlekar
**Utmaning*: Att skapa en layout som fungerar bra på mobil, surfplatta och desktop.
**Lösning*: Använde CSS Grid med `repeat()` och `1fr` för flexibla layouts, kombinerat med media queries för specifika breakpoints.

# 2. Enkel JavaScript-organisation
**Utmaning**: Att organisera JavaScript-kod för olika funktioner på ett enkelt sätt.
**Lösning**: Skapade separata JavaScript-filer med enkla funktioner och onclick-events för tydlig struktur. Inkluderar mobilmeny-funktionalitet med addEventListener.

# 3. CSS Grid och Flexbox-användning
**Utmaning**: Att demonstrera både CSS Grid och Flexbox enligt uppgiftskrav.
**Lösning**: Använde CSS Grid för statistik-kort (.stats-grid) och interaktiva kort (.interactive-grid), samt Flexbox för navigation (.navbar) och hamburger-meny.

# 4. Formulärvalidering
**Utmaning**: Att validera formulärdata på ett enkelt sätt.
**Lösning**: Implementerade enkel if/else-validering med alert() för feedback.

# 5. Enkel styling
**Utmaning**: Att skapa en attraktiv webbplats med enkel kod.
**Lösning**: Använde solid colors, basic styling och enkla hover-effekter istället för avancerade CSS-effekter.

# Filstruktur:

/
├── index.html          (Huvudsida)
├── career.html         (Karriär-sida)
├── achievements.html   (Prestationer-sida)
├── gallery.html        (Galleri-sida "Kevin under åren")
├── tribute.html        (Hyllning-sida)
├── styles.css          (Huvudstilark)
├── script.js           (Huvud-JavaScript med mobilmeny)
├── gallery.js          (Lightbox-funktionalitet)
├── tribute.js          (Tribute-funktionalitet)
├── images/             (Bildmapp för lokala bilder)
└── PROJECT_README.md   (Denna fil)

# Tekniska höjdpunkter

- **Semantisk HTML5**: Korrekt användning av semantiska element
- **CSS Grid**: Används för statistik-kort (.stats-grid) och interaktiva kort (.interactive-grid)
- **Flexbox**: Används för navigation (.navbar) och hamburger-meny
- **Enkel JavaScript**: Basic funktioner med onclick-events och addEventListener
- **Responsiv design**: Mobile-first approach med hamburger-meny för mobila enheter
- **Tillgänglighet**: Alt-texter, semantisk struktur, keyboard navigation
- **Enkel styling**: Solid colors och basic CSS-effekter
- **Användarupplevelse**: Enkla hover-effekter, lightbox-funktionalitet och feedback

---

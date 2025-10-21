# Kevin de Bruyne hyllningssida

## Projektbeskrivning

Denna webbplats är en hyllning till Kevin de Bruyne och hans 10 år som Manchester City-spelare (2015-2025). Webbplatsen presenterar hans karriär, prestationer och tillåter besökare att dela sina egna hyllningar. Det är en responsiv tribute-webbplats skriven med moderna webstandarder och ES6 JavaScript.

## Senaste uppdateringar (Komplettering)

**Status:** Alla punkter från feedbacken har åtgärdats 

### Förbättringar som gjorts:
- **HTML semantik**: Alt-texter tillagda, rubriknivåer rättade, semantiska element implementerade
- **CSS responsivitet**: Hamburgarmeny fixad, tre brytpunkter implementerade, tribute-form width fixad
- **JavaScript ES6**: var ersatt med const/let, arrow functions tillagda, modern syntax
- **Tillgänglighet**: Förbättrad keyboard navigation, bättre semantik, korrekt hierarki
- **Lightbox**: Fullt fungerande galleri med navigation och caption-support

## Tekniker som använts

### HTML
- **Semantisk struktur**: Använder `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` för tydlig struktur
- **Korrekt rubrikstruktur**: H1-H3 hierarki följs konsekvent (inga h4 före h1)
- **Tillgänglighet**: Alla bilder har beskrivande alt-texter, semantiska element för bättre skärmläsarstöd
- **Semantiska element**: `<article>` för innehållsblock, korrekt användning av semantiska taggar
- **Flera sidor**: Huvudsida plus fyra undersidor (Karriär, Prestationer, Galleri, Hyllning)

### CSS
- **Layout**: Använder CSS Grid och Flexbox för layout
- **Responsiv design**: Tre brytpunkter - Desktop (1024px+), Tablet (768px-1024px), Mobile (480px-768px), Small Mobile (<480px)
- **Global box-sizing**: `box-sizing: border-box` för alla element för korrekt width-beräkning
- **Hamburgarmeny**: Animerad hamburger-till-X transformation med smooth transitions
- **Form styling**: Tribute-form med korrekt width-hantering och overflow-kontroll
- **CSS Grid**: Används för statistik-kort (.stats-grid) och interaktiva kort (.interactive-grid)
- **Flexbox**: Används för navigation (.navbar) och hamburger-meny

### JavaScript
- **Modern ES6**: Använder `const`/`let` istället av `var`, arrow functions (`=>`) för modern syntax
- **DOM-manipulation**: `querySelector`, `querySelectorAll`, `getElementById` för elementhantering
- **Event handling**: `addEventListener` med arrow functions för bättre prestanda
- **Lightbox-funktionalitet**: Fullt fungerande galleri med keyboard navigation (ESC, piltangenter)
- **Scroll-låsning**: Förhindrar bakgrundsscrollning när lightbox är öppen
- **Caption-support**: Dynamisk uppdatering av bildtexter i lightbox
- **Mobile menu**: Smooth animationer och korrekt z-index hantering

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
- Responsiv bildvisning med CSS Grid
- Fullt fungerande lightbox med navigation (föregående/nästa)
- Keyboard navigation (ESC för att stänga, piltangenter för navigation)
- Caption-support med dynamisk textuppdatering
- Scroll-låsning för bättre användarupplevelse
- Klicka på bilder för att förstora dem

### 4. Tribute-system
- Responsivt formulär för att skriva hyllningar
- Korrekt width-hantering med box-sizing: border-box
- Validering av inmatning med modern JavaScript
- LocalStorage för att spara hyllningar
- Sökfunktionalitet med ES6 syntax

### 5. Responsiv navigation med hamburger-meny
- Fullskärmsmeny för mobila enheter
- Animerad hamburger-till-X transformation
- Smooth transitions och hover-effekter
- Aktiv länk-markering
- Automatisk stängning av mobilmeny vid navigation
- Korrekt z-index hantering för lagerhantering

## Utmaningar & lösningar

### 1. Responsiv design för olika skärmstorlekar
**Utmaning**: Att skapa en layout som fungerar bra på mobil, surfplatta och desktop.
**Lösning**: Implementerade tre brytpunkter (1024px, 768px, 480px) med CSS Grid och Flexbox för flexibla layouts.

### 2. Modern JavaScript-organisation
**Utmaning**: Att organisera JavaScript-kod med moderna ES6-standarder.
**Lösning**: Ersatte `var` med `const`/`let`, implementerade arrow functions, och använde `addEventListener` för bättre prestanda.

### 3. CSS Grid och Flexbox-användning
**Utmaning**: Att demonstrera både CSS Grid och Flexbox enligt uppgiftskrav.
**Lösning**: Använde CSS Grid för statistik-kort (.stats-grid) och interaktiva kort (.interactive-grid), samt Flexbox för navigation (.navbar) och hamburger-meny.

### 4. Formulärvalidering och width-hantering
**Utmaning**: Att säkerställa att formulär håller sig inom sina containers.
**Lösning**: Implementerade global `box-sizing: border-box` och specifika media queries för korrekt width-hantering.

### 5. Tillgänglighet och semantik
**Utmaning**: Att skapa en tillgänglig webbplats med korrekt semantik.
**Lösning**: Lade till alt-texter på alla bilder, rättade rubrikhierarki, och implementerade semantiska element som `<article>`.

## Filstruktur

```
/
├── index.html              (Huvudsida)
├── career.html             (Karriär-sida)
├── achievements.html       (Prestationer-sida)
├── gallery.html            (Galleri-sida "Kevin under åren")
├── tribute.html            (Hyllning-sida)
├── styles.css              (Huvudstilark med responsiv design)
├── script.js               (Huvud-JavaScript med ES6 syntax)
├── gallery.js              (Lightbox-funktionalitet med navigation)
├── tribute.js              (Tribute-funktionalitet)
├── komplettering-rapport.html (Detaljerad rapport över alla ändringar)
├── Images/                 (Bildmapp för lokala bilder)
└── README.md               (Denna fil)
```

## Tekniska höjdpunkter

- **Semantisk HTML5**: Korrekt användning av semantiska element (`<article>`, `<section>`, `<header>`, `<nav>`, `<main>`, `<footer>`)
- **CSS Grid**: Används för statistik-kort (.stats-grid) och interaktiva kort (.interactive-grid)
- **Flexbox**: Används för navigation (.navbar) och hamburger-meny
- **Modern JavaScript ES6**: `const`/`let`, arrow functions, `addEventListener` för bättre prestanda
- **Responsiv design**: Mobile-first approach med tre brytpunkter och hamburger-meny
- **Tillgänglighet**: Alt-texter, semantisk struktur, keyboard navigation, korrekt rubrikhierarki
- **Lightbox-funktionalitet**: Fullt fungerande galleri med navigation och caption-support
- **Form-hantering**: Korrekt width-hantering med `box-sizing: border-box`
- **Animationer**: Smooth transitions för hamburgarmeny och hover-effekter
- **Scroll-kontroll**: Förhindrar bakgrundsscrollning när lightbox är öppen

## Komplettering och förbättringar

Alla punkter från feedbacken har åtgärdats:

**HTML (Semantik & Tillgänglighet)**
- Alt-texter tillagda på alla bilder
- Rubriknivåer rättade (h1 > h2 > h3 hierarki)
- Överflödiga div ersatta med semantiska element (`<article>`)
- Korrekt HTML-struktur på alla sidor

**CSS (Responsivitet)**
- Hamburgarmeny fixad med animationer
- Tre brytpunkter implementerade (1024px, 768px, 480px)
- Tribute-form width fixad med `box-sizing: border-box`
- Global box-sizing reset för korrekt width-beräkning

**JavaScript & ES6**
- `var` ersatt med `const`/`let`
- Arrow functions (`=>`) implementerade
- Modern event handling med `addEventListener`
- Förbättrad lightbox-funktionalitet med navigation

**Användarupplevelse**
- Lightbox med keyboard navigation (ESC, piltangenter)
- Scroll-låsning för bättre UX
- Caption-support i galleri
- Smooth animationer och transitions

---

**Status**: Komplettering klar - alla punkter från feedbacken har åtgärdats!

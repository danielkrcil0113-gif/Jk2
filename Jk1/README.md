# JK Terasy — Svelte 5 + kompletní SEO web

Hotový one-page web pro **JK Terasy** podle dodaného grafického návrhu. Projekt je připravený pro GitHub i Vercel.

## Co je hotové

- Svelte 5 / SvelteKit projekt
- Vercel adapter a `vercel.json`
- Responzivní homepage podle návrhu
- Komponentová struktura
- Lokální obrázky a SVG logo bez externích CDN
- SEO meta title, description, canonical, robots
- Open Graph a Twitter Card metadata
- JSON-LD schema: LocalBusiness, WebSite, Service list, FAQPage
- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`
- FAQ sekce, kontaktní formulář, reference, služby, proces spolupráce
- Připravené texty pro lokální a oborové SEO: terasy, WPC, dřevěné fasády, dřevo v exteriéru

## Úprava údajů klienta

Nejdůležitější údaje jsou v souboru:

```txt
src/lib/data/site.js
```

Tam změň hlavně:

- doménu `url`
- telefon
- e-mail
- oblast působení
- Instagram / Facebook / YouTube odkazy

Obsah webu je v:

```txt
src/lib/data/content.js
```

SEO data jsou v:

```txt
src/lib/data/seo.js
```

## Spuštění lokálně

```bash
npm install
npm run dev
```

Kontrola buildu:

```bash
npm run build
npm run preview
```

## Nahrání na GitHub z mobilu

### Varianta přes mobilní prohlížeč

1. Rozbal ZIP v telefonu.
2. Otevři GitHub v prohlížeči.
3. Vytvoř nový repository, například `jk-terasy`.
4. Dej **Add file → Upload files**.
5. Nahraj všechny soubory a složky z rozbaleného projektu.
6. Dej commit, například `Initial Svelte 5 website`.

Pozor: nahraj obsah složky projektu, ne samotný ZIP.

### Varianta přes aplikaci Working Copy na iPhone

1. Rozbal ZIP do Files.
2. V aplikaci Working Copy vytvoř nový repository.
3. Importuj složku projektu.
4. Dej commit a push na GitHub.

## Nasazení na Vercel z mobilu

1. Otevři Vercel v mobilním prohlížeči.
2. Přihlas se přes GitHub.
3. Dej **Add New → Project**.
4. Vyber GitHub repository s tímto projektem.
5. Framework by měl být automaticky **SvelteKit**.
6. Build command: `npm run build`
7. Install command: `npm install`
8. Deploy.

Po deployi nastav vlastní doménu v nastavení Vercelu.

## Co můžeš klientovi říct k SEO za 5 000 Kč

V projektu je udělaný kompletní SEO základ pro prezentační web:

- správné titulky a meta popisy
- struktura nadpisů H1/H2/H3
- indexace přes robots.txt
- sitemap.xml
- canonical URL
- Open Graph náhledy pro sdílení
- strukturovaná data LocalBusiness, WebSite, Services a FAQ
- SEO texty na služby: terasy, WPC, fasády, dřevo v exteriéru
- FAQ obsah pro long-tail vyhledávání
- alternativní texty u obrázků
- rychlé lokální SVG obrázky bez zatížení webu externími zdroji
- responzivní mobilní verze

Tohle je férový balík jako **SEO nastavení webu za 5 000 Kč jednorázově**. Dlouhodobá správa SEO, články a získávání odkazů v tom nejsou.

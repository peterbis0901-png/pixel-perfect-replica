# Northern Heritage Tour – Landing Page & Tour Portal

The project is currently a blank starter, so the bilingual toggle, map and itinerary will be built fresh as part of this page (not migrated).

## Tour
"Hành trình di sản: Hà Nội – Ninh Bình – Hạ Long" / "Heritage Journey: Hanoi – Ninh Binh – Ha Long", 4 days 3 nights, by private coach + cruise.

## Sections (single page at /, sticky nav with anchor links + EN/VI switch)
1. **Hero** – full-bleed generated photo of Ha Long Bay, tour name, slogan, badges (Duration, Route, Transport), CTAs "Book now" and "View itinerary".
2. **Overview & Highlights** – summary paragraph + 6 cards (Hoan Kiem & Old Quarter, Trang An boat ride, Bai Dinh pagoda, Ha Long overnight cruise, local cuisine, UNESCO heritage).
3. **Itinerary** – Day 1–4 filter pills; timeline with time blocks (e.g. 07:00–07:15), traffic buffer labels, plus a simple route map (stylised SVG of the 3 stops — no external map service).
4. **Pricing** – 3 packages (Standard / Superior / Premium) with price, included and excluded lists.
5. **Video trailer** – poster image with play button opening an embedded YouTube player (placeholder video you can replace).
6. **Policies & commitments** – accordion: participation conditions, cancellation rules, travel insurance, company commitments.
7. **FAQ** – accordion: baggage, weather, meals, accommodation.
8. **Contact & hotline** – banner with hotline numbers, email, address, and a booking inquiry form (shows a confirmation message; not sent anywhere yet).

## Design direction
Heritage luxury: deep jade green + lacquer red accent on warm rice-paper cream, serif display headings (Cormorant) with Karla body. Fully responsive, smooth scroll, subtle fade-in.

## Placeholder content
Prices, phone numbers (09XX format), address and video are invented placeholders — please send real ones later.

## Technical details
- Language via React context + `src/lib/i18n.ts` dictionary (en/vi), choice saved in localStorage (read after hydration).
- Section components in `src/components/tour/*`; shadcn Accordion; tokens in `src/styles.css`; fonts linked in `__root.tsx`.
- 3–4 generated images in `src/assets`; head() metadata on index route.
- No backend needed.

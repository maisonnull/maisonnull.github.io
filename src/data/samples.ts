// Design samples: the real screens, palettes and typefaces of each piece.
// All three are unsolicited redesign concepts, not client work.
// Images live in /public/samples as WebP. w/h are their pixel sizes.
export type Screen = { src: string; w: number; h: number; kind: 'browser' | 'phone'; caption: string };
export type Swatch = { name: string; hex: string; role: string; dark?: boolean };
export type Face = { name: string; role: string; css: string; sample: string; size?: string };

export const samples: Record<string, {
  tint: string;          // the stage colour, taken from the app itself
  top: string;           // colour behind a phone's status bar
  fonts: string;         // Google Fonts query for the type specimens
  hero: Screen;          // full page, scrolls on hover
  phone: Screen;
  screens: Screen[];
  palette: Swatch[];
  faces: Face[];
  build: string[];       // back of house: how it is made, kept short
}> = {
  'maison-francis-kurkdjian': {
    tint: '#EFE6DC',
    top: '#FAF8F5',
    fonts: 'family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;1,6..96,400&family=Jost:wght@400;500',
    hero: { src: 'mf-home', w: 2000, h: 10000, kind: 'browser', caption: "Home. The Extrait key visual, then the scent told as three auras." },
    phone: { src: 'mf-m-home', w: 780, h: 6000, kind: 'phone', caption: "The same story on a phone, one aura per screen." },
    screens: [
      { src: 'mf-collection', w: 2000, h: 8481, kind: 'browser', caption: "The collection, hung like portraits on tones from each fragrance family." },
      { src: 'mf-m-product', w: 780, h: 6000, kind: 'phone', caption: "The product page on a phone: notes, sizes and engraving." },
      { src: 'mf-m-finder', w: 780, h: 4876, kind: 'phone', caption: "A scent finder that asks how you want to feel, not what you know." },
    ],
    palette: [
      { name: "Porcelain", hex: '#FAF8F5', role: "Page background" },
      { name: "Porcelain deep", hex: '#F0ECE6', role: "Panels and the gallery wall" },
      { name: "Ink", hex: '#1A1414', role: "Text", dark: true },
      { name: "Crimson", hex: '#8E1B22', role: "The scent itself, and nothing else", dark: true },
      { name: "Amber", hex: '#C9894B', role: "Light and warmth in imagery" },
      { name: "Smoke", hex: '#6B645F', role: "Secondary text", dark: true },
    ],
    faces: [
      { name: "Bodoni Moda", role: "Names and headlines, cut like crystal", css: "'Bodoni Moda', Didot, Georgia, serif", sample: "Baccarat Rouge 540", size: '2.6rem' },
      { name: "Jost", role: "Notes, prices and navigation", css: "'Jost', 'Helvetica Neue', sans-serif", sample: "Saffron, Grandiflorum Jasmine, Ambroxan, Cashmeran. 70ml, S$635.", size: '1.2rem' },
    ],
    build: [
      "A React site built with Vite, deployed as a static site to Cloudflare Pages.",
      "Prices, notes and bottle images come from one data file collected from the house's own site, with the date it was checked.",
      "Every image is resized into WebP sizes under 350KB, and motion uses only transform and opacity, with a reduced-motion fallback.",
    ],
  },
  'supergreen': {
    tint: '#E3EDE2',
    top: '#F4F1E9',
    fonts: 'family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Inter+Tight:wght@400;600',
    hero: { src: 'sg-home', w: 2000, h: 8525, kind: 'browser', caption: "Home. Signature bowls with real prices, calories and protein." },
    phone: { src: 'sg-m-home', w: 780, h: 6000, kind: 'phone', caption: "Lunch ordering on a phone, with the nearest open outlet up top." },
    screens: [
      { src: 'sg-build', w: 2000, h: 5755, kind: 'browser', caption: "Build your own: the bowl fills as you pick, and the totals update live." },
      { src: 'sg-menu', w: 2000, h: 6441, kind: 'browser', caption: "The full menu, each bowl with its nutrition beside the price." },
      { src: 'sg-m-build', w: 780, h: 6000, kind: 'phone', caption: "The builder on a phone, five steps from base to dressing." },
      { src: 'sg-m-order', w: 780, h: 3192, kind: 'phone', caption: "Checkout: pickup outlet, time and a demo payment step." },
    ],
    palette: [
      { name: "Leaf", hex: '#1E5B3A', role: "Brand, headers and bands", dark: true },
      { name: "Leaf deep", hex: '#163F29', role: "Footer and dark sections", dark: true },
      { name: "Lime", hex: '#C8E46B', role: "The one action on each screen" },
      { name: "Oat", hex: '#F4F1E9', role: "Page background" },
      { name: "Tomato", hex: '#E2553B', role: "Alerts and closed outlets", dark: true },
      { name: "Charcoal", hex: '#1B1F1C', role: "Text", dark: true },
    ],
    faces: [
      { name: "Bricolage Grotesque", role: "Headlines, loud like a menu board", css: "'Bricolage Grotesque', system-ui, sans-serif", sample: "Good food, built your way.", size: '2.5rem' },
      { name: "Inter Tight", role: "Prices, nutrition and buttons", css: "'Inter Tight', system-ui, sans-serif", sample: "Teriyaki Chicken Bowl. $12.30, 482 kcal, 31g protein.", size: '1.2rem' },
    ],
    build: [
      "A React site built with Vite, deployed as a static site to Cloudflare Pages.",
      "Bowl prices and nutrition come from the chain's live menu; reward values are marked as samples.",
      "Scrolling was profiled on a throttled laptop, and anything that repainted on every frame was taken out.",
    ],
  },
  'song-lang-garden': {
    tint: '#E4E8DA',
    top: '#24452F',
    fonts: 'family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,400&family=Instrument+Sans:wght@400;600',
    hero: { src: 'sl-home', w: 2000, h: 10000, kind: 'browser', caption: "Home. The real frontage, then a guided walk through the nursery." },
    phone: { src: 'sl-m-home', w: 780, h: 6000, kind: 'phone', caption: "On a phone, with a live open-now status and one tap to WhatsApp." },
    screens: [
      { src: 'sl-plants', w: 2000, h: 7127, kind: 'browser', caption: "The catalogue, filtered by where a plant will live." },
      { src: 'sl-doctor', w: 2000, h: 3794, kind: 'browser', caption: "Plant doctor: send a photo of a plant that is struggling." },
      { src: 'sl-m-plants', w: 780, h: 6000, kind: 'phone', caption: "The catalogue on a phone, with care level and an indicative price band." },
      { src: 'sl-m-about', w: 780, h: 6000, kind: 'phone', caption: "The story of the nursery, told with its own photographs." },
    ],
    palette: [
      { name: "Fern", hex: '#24452F', role: "Brand and dark bands", dark: true },
      { name: "Moss", hex: '#6E8B4E', role: "Care indicators", dark: true },
      { name: "Clay", hex: '#B5643C', role: "Terracotta, for pots and labels", dark: true },
      { name: "Bloom", hex: '#E04A26', role: "The one bold accent", dark: true },
      { name: "Lime wash", hex: '#EEF0E6', role: "Page background" },
      { name: "Bark", hex: '#2B2520', role: "Text", dark: true },
    ],
    faces: [
      { name: "Fraunces", role: "Headlines, with one soft italic word", css: "'Fraunces', Georgia, serif", sample: "A Katong nursery for every kind of space.", size: '2.4rem' },
      { name: "Instrument Sans", role: "Care guides, hours and buttons", css: "'Instrument Sans', system-ui, sans-serif", sample: "Open now. 8.30am to 7pm daily, 378 Tanjong Katong Road.", size: '1.2rem' },
    ],
    build: [
      "A React site built with Vite, deployed as a static site to Cloudflare Pages.",
      "Every photograph is of the nursery itself, credited to its public page.",
      "Native scrolling only, an illustrated SVG map, and a care picker that runs entirely in the browser.",
    ],
  },
};

// Design samples: the real screens, palettes and typefaces of each piece.
// Born to Route is a planning tool built by the studio; the other two are unsolicited redesign concepts. None is client work.
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
  'born-to-route': {
    tint: '#DDE3E8',
    top: '#0B1422',
    fonts: 'family=Inter:wght@400;600;700',
    hero: { src: 'bt-home', w: 2000, h: 1759, kind: 'browser', caption: "The planner. The optimised plan's cost, facilities and trips, the network on a map, and where the money goes." },
    phone: { src: 'bt-m-landing', w: 780, h: 6464, kind: 'phone', caption: "The landing on a phone: the network over Kalimantan at night, then the plan told in plain numbers." },
    screens: [
      { src: 'bt-landing', w: 2000, h: 1250, kind: 'browser', caption: "The landing: the whole supply chain over a night map of Kalimantan, with every shipping route listed." },
      { src: 'bt-sandbox', w: 2000, h: 1482, kind: 'browser', caption: "Scenario sandbox: switch on a flood, a new airport or new transport rates, and re-optimise." },
      { src: 'bt-report', w: 2000, h: 1825, kind: 'browser', caption: "A one-page plan report, ready to print or save as PDF." },
    ],
    palette: [
      { name: "Night", hex: '#0B1422', role: "The landing map and its panels", dark: true },
      { name: "Page", hex: '#F3F3F1', role: "Planner background" },
      { name: "Ink", hex: '#111111', role: "Text and figures", dark: true },
      { name: "Signal", hex: '#EB6834', role: "The one action, and depot-to-refinery routes", dark: true },
      { name: "Farm leg", hex: '#2A78D6', role: "Farm-to-depot routes", dark: true },
      { name: "Airport leg", hex: '#1BAF7A', role: "Refinery-to-airport routes", dark: true },
    ],
    faces: [
      { name: "Inter", role: "Everything, with tabular figures for the numbers", css: "'Inter', system-ui, sans-serif", sample: "$742 per tonne of SAF delivered", size: '2.2rem' },
    ],
    build: [
      "A React app built with Vite, served from Google Cloud Run.",
      "The plan comes from a mixed-integer optimiser (PuLP with the HiGHS solver), so the cost shown is the proven lowest for the inputs, not an estimate.",
      "Maps are drawn with MapLibre and deck.gl on open map tiles, and every route, facility and number on screen comes from the same solved plan.",
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

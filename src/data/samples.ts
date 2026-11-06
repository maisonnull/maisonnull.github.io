// Design samples: the real screens, palettes and typefaces of each piece.
// Taste Suite, Glowline and Born to Route are built by the studio; Supergreen and Song Lang Garden are unsolicited redesign concepts. None is client work.
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
  'taste-suite': {
    tint: '#1C1C1C',
    top: '#0E0E0E',
    fonts: 'family=Archivo:wdth,wght@62..125,400..900&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;600',
    hero: { src: 'ts-home', w: 2000, h: 8460, kind: 'browser', caption: "The landing: your feed is your portfolio, two sample files read end to end, and a directory of designers." },
    phone: { src: 'ts-m-home', w: 780, h: 10000, kind: 'phone', caption: "The same landing on a phone, with the sample files stacked as cards." },
    screens: [
      { src: 'ts-profile', w: 2000, h: 4874, kind: 'browser', caption: "A designer's profile: who they are, how they design, their signature moves, and when their taste is wrong for you." },
      { src: 'ts-m-profile', w: 780, h: 10000, kind: 'phone', caption: "A second profile on a phone." },
    ],
    palette: [
      { name: "Black", hex: '#0E0E0E', role: "Page background", dark: true },
      { name: "Paper", hex: '#F3F0E7', role: "Text and hard edges" },
      { name: "Lime", hex: '#C8FF00', role: "The one action, and the big numbers" },
      { name: "Flare", hex: '#FF5B1F', role: "Calls to action and tags", dark: true },
      { name: "Pink", hex: '#FF3EA5', role: "Stripes and tags", dark: true },
      { name: "Violet", hex: '#8F7BFF', role: "A fourth tag colour", dark: true },
    ],
    faces: [
      { name: "Archivo", role: "Headlines, set wide and black", css: "'Archivo', 'Arial Black', sans-serif", sample: "YOUR FEED IS YOUR PORTFOLIO.", size: '2.2rem' },
      { name: "IBM Plex Mono", role: "Labels, handles and section numbers", css: "'IBM Plex Mono', ui-monospace, monospace", sample: "[ 01 · SAMPLES ]  @handle · 323 design posts", size: '1.05rem' },
      { name: "Inter", role: "Profiles and body text", css: "'Inter', system-ui, sans-serif", sample: "Every number in the file can be traced to a post.", size: '1.2rem' },
    ],
    build: [
      "Plain HTML, CSS and JavaScript with no build step, deployed as a static site to Cloudflare Pages.",
      "Every profile lives in one data file and is checked against a schema before it renders.",
      "A dark and a light theme share the same markup, switched by one control.",
    ],
  },
  'glowline': {
    tint: '#E7F2EC',
    top: '#FFFFFF',
    fonts: 'family=Plus+Jakarta+Sans:wght@400;600&family=IBM+Plex+Mono:wght@400;500',
    hero: { src: 'gl-home', w: 2000, h: 8061, kind: 'browser', caption: "The landing: is your skincare actually working? Then why one-day skin grades lie, and how a bottle is judged." },
    phone: { src: 'gl-m-home', w: 780, h: 10000, kind: 'phone', caption: "The landing on a phone, where most check-ins happen." },
    screens: [
      { src: 'gl-insights', w: 2000, h: 7775, kind: 'browser', caption: "The insights board after six weeks: a verdict, the trend against your own noise floor, adherence and cost per result." },
      { src: 'gl-m-insights', w: 780, h: 10000, kind: 'phone', caption: "The insights board on a phone." },
    ],
    palette: [
      { name: "White", hex: '#FFFFFF', role: "Page background" },
      { name: "Mist", hex: '#F3F4F6', role: "Panels and pills" },
      { name: "Ink", hex: '#141417', role: "Text and buttons", dark: true },
      { name: "Evergreen", hex: '#0D6847', role: "Keep going: real improvement", dark: true },
      { name: "Mint", hex: '#E7F7F0', role: "Behind good news" },
      { name: "Amber", hex: '#8F4F0E', role: "Plateaus and warnings", dark: true },
    ],
    faces: [
      { name: "Plus Jakarta Sans", role: "Headlines and everything a person reads", css: "'Plus Jakarta Sans', system-ui, sans-serif", sample: "Is your skincare actually working?", size: '2.3rem' },
      { name: "IBM Plex Mono", role: "Scores, dates and measurement labels", css: "'IBM Plex Mono', ui-monospace, monospace", sample: "SCAN 12 OF 12 · +10.4 pts vs Day 1", size: '1.05rem' },
    ],
    build: [
      "A Node and TypeScript server with a small web front end, built for the YouCam API Skin AI hackathon.",
      "Skin scores come from YouCam's AI Skin Analysis; the trend model, noise floor and adherence guard are Glowline's own.",
      "A fixture mode runs the whole product on local data, so it can be demonstrated without spending a single API unit.",
    ],
  },
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

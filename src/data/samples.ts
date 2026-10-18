// Design samples: the real screens, palettes and typefaces of each piece.
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
  'lead-time': {
    tint: '#E4EDE6',
    top: '#F7F8FA',
    fonts: 'family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Figtree:wght@400;600',
    hero: { src: 'lt-overview', w: 2000, h: 3209, kind: 'browser', caption: 'Overview. One verdict first, the evidence underneath.' },
    phone: { src: 'lt-m-overview', w: 780, h: 6000, kind: 'phone', caption: 'The same overview on a phone, read between orders.' },
    screens: [
      { src: 'lt-radar', w: 2000, h: 5831, kind: 'browser', caption: 'Trend radar. Every food gets an illustration, a status and two buttons.' },
      { src: 'lt-opportunity', w: 2000, h: 6991, kind: 'browser', caption: 'An opportunity, from verdict to launch plan, on one long page.' },
      { src: 'lt-board', w: 2000, h: 1333, kind: 'browser', caption: 'Launch board. Watching, planning, launched.' },
      { src: 'lt-dark', w: 2000, h: 1250, kind: 'browser', caption: 'Dark appearance, with every colour re-tuned rather than inverted.' },
      { src: 'lt-m-radar', w: 780, h: 6000, kind: 'phone', caption: 'The radar on a phone: one food per row, the verdict first.' },
      { src: 'lt-m-opportunity', w: 780, h: 6000, kind: 'phone', caption: 'An opportunity on a phone, from verdict to launch plan.' },
    ],
    palette: [
      { name: 'Pandan', hex: '#286C51', role: 'Actions and the overseas line', dark: true },
      { name: 'Pandan mist', hex: '#EAF3ED', role: 'Hero panels and selected states' },
      { name: 'Kopi-o', hex: '#212B2A', role: 'Text', dark: true },
      { name: 'Chilli', hex: '#A74B24', role: 'Arriving now', dark: true },
      { name: 'Gula melaka', hex: '#B08B38', role: 'Coming soon', dark: true },
      { name: 'Counter', hex: '#F7F8FA', role: 'Workspace background' },
    ],
    faces: [
      { name: 'Fraunces', role: 'Headlines, like a menu board', css: "'Fraunces', Georgia, serif", sample: 'Your next bestseller starts with a signal.', size: '2.4rem' },
      { name: 'Figtree', role: 'Interface and numbers', css: "'Figtree', system-ui, sans-serif", sample: 'Taking off in the US since March. Watch it rather than bet on a date.', size: '1.2rem' },
    ],
    build: [
      'Every forecast is plain, tested arithmetic. A language model only judges what a kitchen can make and drafts launch copy, and its answers are checked before they are shown.',
      'The app can be rewound to any past week, and a test makes sure no future data leaks in.',
      'If every AI provider is down, labelled offline rules take over and the screen still works.',
    ],
  },
  pinch: {
    tint: '#ECE7DA',
    top: '#FAF8F2',
    fonts: 'family=Lora:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;600&family=Caveat:wght@500',
    hero: { src: 'pi-home', w: 2000, h: 2276, kind: 'browser', caption: 'Home. A recipe card stack sets the tone before any button does.' },
    phone: { src: 'pi-m-home', w: 780, h: 4288, kind: 'phone', caption: 'Designed for a phone propped against the flour jar.' },
    screens: [
      { src: 'pi-m-ask', w: 750, h: 1624, kind: 'phone', caption: 'One question at a time, in type big enough to read from the stove.' },
      { src: 'pi-m-card', w: 780, h: 3470, kind: 'phone', caption: 'The finished card: her words in handwriting beside each step.' },
      { src: 'pi-m-book', w: 750, h: 1624, kind: 'phone', caption: 'The family recipe book.' },
      { src: 'pi-card', w: 2000, h: 2090, kind: 'browser', caption: 'The card on a desktop, ready to print or download.' },
    ],
    palette: [
      { name: 'Rosemary', hex: '#293C31', role: 'Text and the question panel', dark: true },
      { name: 'Paprika', hex: '#B94C2E', role: 'The one call to action', dark: true },
      { name: 'Sage', hex: '#526B43', role: 'Confirmed amounts', dark: true },
      { name: 'Recipe paper', hex: '#FAF8F2', role: 'Cards and pages' },
      { name: 'Table', hex: '#F3F0E7', role: 'Background' },
      { name: 'Margin', hex: '#D7BBA9', role: 'Notebook margin line' },
    ],
    faces: [
      { name: 'Lora', role: 'Recipes and headlines', css: "'Lora', Georgia, serif", sample: 'A pinch of this. A lifetime of that.', size: '2.3rem' },
      { name: 'Caveat', role: 'Her words, in her voice', css: "'Caveat', cursive", sample: '“About ¾ cup. Just enough so it runs off the spoon.”', size: '1.9rem' },
      { name: 'Inter', role: 'Buttons and small print', css: "'Inter', system-ui, sans-serif", sample: 'Capture a family recipe', size: '1.1rem' },
    ],
    build: [
      'A language model decides what to ask. Plain code checks every amount on the card against what the cook actually said.',
      'Anything it cannot trace back to her words is marked unknown instead of guessed.',
      'Questions are capped by the app, one per step and three per session, so cooking is never interrupted.',
    ],
  },
};

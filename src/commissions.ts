// Edit prices and wording here. The home page and the Commissions page both read from this file.
export const commissions = [
  {
    name: 'Landing page',
    price: 'from S$880',
    time: 'About a week',
    summary: 'One page for a launch, an event or a new idea.',
    includes: [
      'Designed for phones first, fast everywhere',
      'Contact or sign-up form',
      'Your own domain, set up and connected',
      'Search basics: titles, descriptions, link previews',
    ],
  },
  {
    name: 'Full site',
    price: 'from S$2,400',
    time: 'Two to three weeks',
    summary: 'Up to five pages for a business that needs room for its story, work and services.',
    includes: [
      'Home, about, services, work and contact',
      'Edit your own content in simple text files',
      'Privacy-friendly analytics',
      'Domain and hosting set up in your name',
    ],
  },
  {
    name: 'App launch',
    price: 'from S$4,800',
    time: 'Four weeks or more',
    summary: 'An interactive tool or web app with a database, sign-ins or payments.',
    includes: [
      'Scope agreed in writing before work starts',
      'Database and sign-ins',
      'Payments through a hosted checkout, so card details never touch your site',
      'Usage tracking and a launch checklist',
    ],
  },
  {
    name: 'Restaurant ordering',
    price: 'from S$3,800 + S$129 a month',
    time: 'Three to four weeks',
    summary: 'A landing page, online ordering and table QR ordering, with payments straight to your own account and no commission on orders.',
    includes: [
      'Pickup and delivery orders online, dine-in orders by table QR code',
      'PayNow and cards through your own HitPay or Stripe account',
      'A menu you edit yourself, with a kitchen screen for new orders',
      'An owner dashboard: sales by hour, item, channel and outlet, and repeat customers',
    ],
  },
  {
    name: 'Brand identity',
    price: 'from S$3,800',
    time: 'Three to four weeks',
    summary: 'A name in type, a mark, colour and a voice, set down so anyone can use them consistently.',
    includes: [
      'Logo and wordmark, with versions for small and large sizes',
      'Colour, typefaces and image direction',
      'A short brand guide your team can follow',
      'Starter templates: social posts, slides and a business card',
    ],
  },
  {
    name: 'Event design',
    price: 'from S$2,400',
    time: 'About two weeks',
    summary: 'One look for a launch, conference or dinner, carried from the invitation to the stage.',
    includes: [
      'A key visual and the system around it',
      'Invitations, email and a set of social posts',
      'Print-ready signage, backdrop, banners and name badges',
      'A slide template for speakers',
    ],
  },
];

export const addOns = [
  { name: 'Monthly care', price: 'S$150 a month', summary: 'Small edits, updates and uptime checks.' },
  { name: 'Copy edit', price: 'S$350', summary: 'Clearer, sharper words for your pages.' },
  { name: 'Contract design', price: 'from S$1,000 a day', summary: 'Brand, events or digital design alongside your in-house team, by the day or week.' },
  { name: 'Ordering, multiple outlets', price: 'S$199 a month per outlet', summary: 'Table QR ordering and the full dashboard for each extra outlet. Groups of three or more are quoted.' },
];

// Founding commissions: a launch offer for the first few clients, in exchange for
// permission to show the work. Set enabled to false to hide it everywhere.
export const founding = {
  enabled: true,
  discount: '30% off',
  slots: 3,
  terms: 'in exchange for permission to feature the finished work as a case study, and a short honest testimonial',
};

// What every commission comes with, whatever the size.
export const included = [
  { name: 'A fixed price, in writing', text: 'Scope, price and dates are agreed before work starts. No surprise invoices.' },
  { name: 'You own all of it', text: 'Domain, hosting account and code are set up in your name from day one.' },
  { name: 'A private preview link', text: 'Watch the piece take shape and comment as it goes, not just at the end.' },
  { name: 'Built for phones first', text: 'Most of your visitors are on a phone, so that is where it is designed first.' },
  { name: 'A handover guide', text: 'Plain instructions for the edits you will want to make yourself.' },
];

// Common questions. Edit freely; the Commissions page lists them in this order.
export const faq = [
  {
    q: 'How long does it take?',
    a: 'A landing page takes about a week, event design about two weeks, a full site two to three weeks, and an app, ordering system or brand identity four weeks or more. The exact dates go in the written scope before anything starts.',
  },
  {
    q: 'Do I own the site?',
    a: 'Yes. The domain, hosting and code are all in your name. If you ever want someone else to work on it, you hand them the keys.',
  },
  {
    q: 'What will hosting cost me?',
    a: 'Small sites can often be hosted free or for a few dollars a month, plus your domain, which is usually tens of dollars a year. I recommend a host that fits and set it up under your account.',
  },
  {
    q: 'Can I update it myself?',
    a: 'Yes. Text, prices and photos live in simple files, and the handover guide shows you how. For anything bigger, there is the Monthly care add-on.',
  },
  {
    q: 'What do you need from me?',
    a: 'Your words, your logo if you have one, any photos, and someone who can answer questions within a day or two. If the words are the hard part, the Copy edit add-on helps.',
  },
  {
    q: 'Do you take a cut of restaurant orders?',
    a: 'No. Payments go straight from your customers into your own HitPay or Stripe account, and you pay only their card and PayNow fees. The studio charges a fixed setup fee and a fixed monthly fee, never a commission.',
  },
  {
    q: 'Do you design for print and events, not just screens?',
    a: 'Yes. Brand identities and event designs come with print-ready files for signage, backdrops, banners and invitations, and the studio can work with your printer or venue.',
  },
  {
    q: 'Can you work inside our team on a contract?',
    a: 'Yes. Contract design is booked by the day or week for brand, event or digital work, alongside your own designers and marketers.',
  },
  {
    q: 'How does payment work?',
    a: 'Half when the scope is agreed, half at launch, by bank transfer or PayNow.',
  },
];

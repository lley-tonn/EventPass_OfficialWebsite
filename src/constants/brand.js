export const BRAND = {
  name: 'EventPass',
  tagline: 'The Operating System for Events',
  description:
    'Discover events, sell tickets, scan attendees, and grow your audience — all from one premium platform built for Uganda.',
  email: 'support@eventpass.ug',
  phone: '+256 123 456 789',
  url: 'https://eventpass.ug',
};

export const STATS = [
  { value: 100000, suffix: '+', label: 'Tickets Sold' },
  { value: 500, suffix: '+', label: 'Events Hosted' },
  { value: 50, suffix: '+', label: 'Cities Covered' },
  { value: 99.9, suffix: '%', label: 'Check-in Success', decimals: 1 },
  { value: 4.9, suffix: '★', label: 'App Rating', decimals: 1 },
];

export const PARTNERS = [
  'Makerere University',
  'Nile Breweries',
  'Blankets & Wine',
  'Roast & Rhyme',
  'Uganda Revenue Authority',
  'MTN Uganda',
  'Airtel Uganda',
  'Kampala City Festival',
];

export const FEATURES = [
  {
    icon: 'qr',
    title: 'QR Ticketing',
    description: 'Instant digital tickets with secure QR codes. No printing. No friction.',
    audience: 'both',
  },
  {
    icon: 'dashboard',
    title: 'Organizer Dashboard',
    description: 'Real-time sales, attendee lists, and event controls in one command center.',
    audience: 'organizer',
  },
  {
    icon: 'mobile',
    title: 'Mobile Money',
    description: 'MTN MoMo and Airtel Money built in. Pay the way Uganda pays.',
    audience: 'attendee',
  },
  {
    icon: 'analytics',
    title: 'Live Analytics',
    description: 'Revenue charts, conversion funnels, and audience insights as they happen.',
    audience: 'organizer',
  },
  {
    icon: 'scanner',
    title: 'Multi-Device Scanner',
    description: 'Verify entry from any phone. Offline validation when the crowd peaks.',
    audience: 'organizer',
  },
  {
    icon: 'bell',
    title: 'Smart Notifications',
    description: 'Event reminders, last-minute updates, and ticket confirmations instantly.',
    audience: 'attendee',
  },
  {
    icon: 'discover',
    title: 'Event Discovery',
    description: 'Personalized recommendations by location, taste, and who you follow.',
    audience: 'attendee',
  },
  {
    icon: 'shield',
    title: 'Bank-Grade Security',
    description: 'Encrypted payments, fraud protection, and verified ticket authenticity.',
    audience: 'both',
  },
  {
    icon: 'bolt',
    title: 'Lightning Check-in',
    description: 'Sub-second QR scans. Move thousands through the gate without bottlenecks.',
    audience: 'organizer',
  },
];

export const NAV_LINKS = [
  { to: '/#features', label: 'Features' },
  { to: '/#organizers', label: 'Organizers' },
  { to: '/#attendees', label: 'Attendees' },
  { to: '/#events', label: 'Events' },
  { to: '/faqs', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export const FOOTER_LINKS = {
  product: [
    { to: '/features', label: 'Features' },
    { to: '/#events', label: 'Events' },
    { to: '/faqs', label: 'FAQ' },
    { to: '/blog', label: 'Blog' },
  ],
  solutions: [
    { to: '/#organizers', label: 'For Organizers' },
    { to: '/#attendees', label: 'For Attendees' },
    { to: '/features', label: 'Platform Overview' },
  ],
  developers: [
    { to: '/help-center', label: 'Documentation' },
    { to: '/contact', label: 'API Access' },
  ],
  company: [
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/help-center', label: 'Help Center' },
  ],
  legal: [
    { to: '/terms-of-use', label: 'Terms of Use' },
    { to: '/privacy-policy', label: 'Privacy Policy' },
  ],
};

export const TESTIMONIALS = [
  {
    name: 'Sarah Nakato',
    role: 'Festival Organizer',
    type: 'organizer',
    content:
      'EventPass transformed how we manage 10,000+ attendee festivals. Real-time analytics and QR scanning cut our entry time by 70%.',
    initials: 'SN',
    rating: 5,
  },
  {
    name: 'Michael Okello',
    role: 'Music Enthusiast',
    type: 'attendee',
    content:
      'Discovering events in Kampala has never been easier. I buy tickets in seconds with MoMo and walk in with my QR code.',
    initials: 'MO',
    rating: 5,
  },
  {
    name: 'Grace Akello',
    role: 'Conference Host',
    type: 'organizer',
    content:
      'The dashboard gives me everything — ticket sales, attendee demographics, and payout tracking. Enterprise quality for Uganda.',
    initials: 'GA',
    rating: 5,
  },
  {
    name: 'David Mugisha',
    role: 'Sports Fan',
    type: 'attendee',
    content:
      'No more paper tickets or long queues. EventPass just works — every match, every concert, every time.',
    initials: 'DM',
    rating: 5,
  },
  {
    name: 'Patricia Namukasa',
    role: 'Comedy Night Producer',
    type: 'organizer',
    content:
      'Sold out three shows in a row. The marketing tools and audience insights helped us grow our following by 300%.',
    initials: 'PN',
    rating: 5,
  },
  {
    name: 'James Tumusiime',
    role: 'Nightlife Explorer',
    type: 'attendee',
    content:
      'Smart recommendations actually get my taste right. Push notifications mean I never miss a show I would love.',
    initials: 'JT',
    rating: 5,
  },
];

export const UPCOMING_EVENTS = [
  {
    id: 1,
    title: 'Blankets & Wine Kampala',
    date: 'Aug 15, 2026',
    location: 'Lugogo Cricket Oval',
    price: 'UGX 80,000',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf8532c0fd?w=600&q=80&auto=format&fit=crop',
    availability: 'Available',
  },
  {
    id: 2,
    title: 'Tech Innovation Summit',
    date: 'Aug 22, 2026',
    location: 'Sheraton Kampala',
    price: 'UGX 150,000',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&auto=format&fit=crop',
    availability: 'Available',
  },
  {
    id: 3,
    title: 'Roast & Rhyme',
    date: 'Sep 5, 2026',
    location: 'Uganda Museum Gardens',
    price: 'UGX 60,000',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80&auto=format&fit=crop',
    availability: 'Limited',
  },
  {
    id: 4,
    title: 'Kampala Comedy Festival',
    date: 'Sep 12, 2026',
    location: 'National Theatre',
    price: 'UGX 35,000',
    category: 'Comedy',
    image: 'https://images.unsplash.com/photo-1527224857830-43a7a7921476?w=600&q=80&auto=format&fit=crop',
    availability: 'Available',
  },
  {
    id: 5,
    title: 'Nyege Nyege Festival',
    date: 'Sep 18, 2026',
    location: 'Jinja, Source of the Nile',
    price: 'UGX 200,000',
    category: 'Festival',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80&auto=format&fit=crop',
    availability: 'Available',
  },
  {
    id: 6,
    title: 'Makerere Innovation Expo',
    date: 'Oct 3, 2026',
    location: 'Makerere University',
    price: 'Free',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f0024710?w=600&q=80&auto=format&fit=crop',
    availability: 'Available',
  },
];

export const HOME_FAQS = [
  {
    question: 'What is EventPass?',
    answer:
      'EventPass is the operating system for events in Uganda — a complete ecosystem for discovering events, buying tickets, and managing everything organizers need to sell out and check in.',
  },
  {
    question: 'Is EventPass free for attendees?',
    answer:
      'Yes. Downloading the app and discovering events is free. You only pay when you purchase tickets.',
  },
  {
    question: 'How do organizers get paid?',
    answer:
      'Organizers receive payouts directly to linked accounts within 24–48 hours after events, with transparent fee reporting in the dashboard.',
  },
  {
    question: 'Which payment methods are supported?',
    answer: 'MTN Mobile Money, Airtel Money, and card payments — all secured with industry-standard encryption.',
  },
];

export const ORGANIZER_HIGHLIGHTS = [
  { label: 'Real-time Revenue', value: 'Live' },
  { label: 'Avg. Check-in Speed', value: '<1s' },
  { label: 'Offline Scanning', value: 'Yes' },
  { label: 'Multi-event Support', value: 'Unlimited' },
];

export const ATTENDEE_HIGHLIGHTS = [
  { label: 'Events Discovered', value: '500+' },
  { label: 'Payment Options', value: '3+' },
  { label: 'Digital Wallet', value: 'Built-in' },
  { label: 'QR Entry', value: 'Instant' },
];

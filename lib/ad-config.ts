// Central place for AdSense unit IDs that aren't wired in yet.
// Fill these in as you create each ad unit in the AdSense dashboard —
// everything downstream reads from here, so setting a value is the
// only change needed to flip a placement from placeholder to a real ad.

export const ADSENSE_CLIENT = 'ca-pub-2083629374546177';

// Display ads → components/AdSlot.tsx (large: banner/leaderboard, small: rectangle)
export const DISPLAY_SLOTS: { large?: string; small?: string } = {
  small: '3347321825',
  large: '1678604247',
};

// In-article ad unit → Ads > By ad unit > In-article
export const IN_ARTICLE_SLOT: string | undefined = '1399402643';

// In-feed ad unit → Ads > By ad unit > In-feed
// Google generates a unique data-ad-layout-key per in-feed unit; grab both
// values from the snippet it gives you when you create the unit.
export const IN_FEED: { slot: string; layoutKey: string } | undefined = {
  slot: '1642945220',
  layoutKey: '-66+e1+2h-h7+8u',
};

// Multiplex ad unit → Ads > By ad unit > Multiplex
export const MULTIPLEX_SLOT: string | undefined = '4628613900';

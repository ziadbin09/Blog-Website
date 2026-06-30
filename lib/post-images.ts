// Picsum Photos – always loads, consistent per seed, free hotlinking
const P = (seed: string) => `https://picsum.photos/seed/${seed}/900/500`;

export const POST_IMAGES: Record<string, string> = {
  'android-16-features':     P('android16'),
  'galaxy-s25-ultra-review': P('galaxys25'),
  'iphone-17-vs-pixel-9':    P('iphone17pixel'),
  'best-budget-android-2026':P('budgetphone26'),
  'smartphone-battery-fix':  P('phonebattery'),
  'chatgpt-mobile-tips':     P('chatgptmobile'),
  'wearables-2026':          P('smartwatch26'),
  'android-malware-guide':   P('androidsecurity'),
  'oneplus-13-camera':       P('oneplus13cam'),
  '5g-explained':            P('5gnetwork'),
  'best-android-apps-2026':  P('androidapps26'),
  'speed-up-android':        P('androidspeed'),
  'foldables-worth-it':      P('foldable26'),
  'ios-19-hidden-features':  P('ios19hidden'),
};

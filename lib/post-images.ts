const U = (id: string) => `https://images.unsplash.com/${id}?w=900&q=80&auto=format&fit=crop`;

export const POST_IMAGES: Record<string, string> = {
  'android-16-features':     U('photo-1607252650355-f7fd0460ccdb'), // Android phone
  'galaxy-s25-ultra-review': U('photo-1707438095940-1eee18e85400'), // Samsung Galaxy
  'iphone-17-vs-pixel-9':    U('photo-1609692814858-f7cd2f0afa4f'), // iPhone
  'best-budget-android-2026':U('photo-1598965402089-897ce52e8355'), // Android smartphone
  'smartphone-battery-fix':  U('photo-1557767382-97b28f5488e7'), // phone charging/battery
  'chatgpt-mobile-tips':     U('photo-1737644467636-6b0053476bb2'), // AI concept
  'wearables-2026':          U('photo-1546868871-7041f2a55e12'), // smartwatch
  'android-malware-guide':   U('photo-1614064641938-3bbee52942c7'), // cybersecurity
  'oneplus-13-camera':       U('photo-1565849904461-04a58ad377e0'), // phone camera
  '5g-explained':            U('photo-1602823284936-463177448097'), // 5G network
  'best-android-apps-2026':  U('photo-1691256676376-357c3aa66c89'), // mobile apps
  'speed-up-android':        U('photo-1483478550801-ceba5fe50e8e'), // Android performance
  'foldables-worth-it':      U('photo-1721864428881-dbabb9ea0017'), // foldable phone
  'ios-19-hidden-features':  U('photo-1592750475338-74b7b21085ab'), // iPhone/iOS
};

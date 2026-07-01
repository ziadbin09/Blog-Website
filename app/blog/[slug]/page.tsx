import AdSlot from '@/components/AdSlot';
import Link from 'next/link';
import { POST_IMAGES } from '@/lib/post-images';

type PostMeta = {
  title: string;
  cat: string;
  author: string;
  date: string;
  read: string;
  excerpt: string;
  tone: number;
  tags: string[];
};

type Section = { heading: string; paragraphs: string[] };
type Body = { sections: Section[]; quote?: string };

const POSTS: Record<string, PostMeta> = {
  'android-16-features': { title:'Android 16: the features that actually change how you use your phone', cat:'Android', author:'Alex Chen', date:'Jun 1, 2026', read:'12 min', excerpt:'Google\'s biggest Android release in years landed this week. We tested every new feature to find out which ones actually matter.', tone:1, tags:['Android 16','Android','Google','Pixel','Smartphones','Software Update'] },
  'galaxy-s25-ultra-review': { title:'Galaxy S25 Ultra review: two months, one camera, no going back', cat:'Smartphones', author:'Sarah Kim', date:'May 28, 2026', read:'15 min', excerpt:'After two months of daily use, Samsung\'s Ultra still sets the bar every other Android phone has to clear.', tone:2, tags:['Galaxy S25 Ultra','Samsung','Smartphones','Camera','Reviews','Flagship'] },
  'iphone-17-vs-pixel-9': { title:'iPhone 17 vs Pixel 9 Pro: the camera shootout that settles the debate', cat:'Reviews', author:'Marcus Webb', date:'May 24, 2026', read:'11 min', excerpt:'400 photos, six lighting conditions, three countries. One camera wins — and it\'s not the one everyone expected.', tone:4, tags:['iPhone 17','Pixel 9 Pro','Camera','Apple','Google','Comparison'] },
  'best-budget-android-2026': { title:'Best budget Android phones under $200 in 2026', cat:'Android', author:'Priya Sharma', date:'May 20, 2026', read:'9 min', excerpt:'Great Android experiences no longer require a four-figure budget. These six phones prove the sub-$200 category has never been stronger.', tone:3, tags:['Budget Phones','Android','Buying Guide','Value','Smartphones'] },
  'smartphone-battery-fix': { title:'Why your phone battery dies fast — and exactly how to fix it', cat:'How-To', author:'Alex Chen', date:'May 17, 2026', read:'8 min', excerpt:'Most battery drain problems trace back to four very fixable habits.', tone:6, tags:['Battery Life','How-To','Android','iOS','Troubleshooting'] },
  'chatgpt-mobile-tips': { title:'ChatGPT on mobile: the power features 90% of users never find', cat:'AI & Mobile', author:'Priya Sharma', date:'May 13, 2026', read:'10 min', excerpt:'Hidden shortcuts, memory controls, and workflow hacks that make ChatGPT actually useful every day.', tone:5, tags:['ChatGPT','AI & Mobile','Productivity','Apps','OpenAI'] },
  'wearables-2026': { title:'Smartwatches in 2026: we tested every major model — here\'s who wins', cat:'Wearables', author:'Zara Ahmed', date:'May 9, 2026', read:'16 min', excerpt:'Eight weeks. Six watches. One conclusion: battery life is still the dealbreaker no spec sheet can hide.', tone:2, tags:['Wearables','Smartwatches','Fitness Tracking','Battery Life','Reviews'] },
  'android-malware-guide': { title:'How to spot and remove Android malware before it steals your data', cat:'Cybersecurity', author:'James Carter', date:'May 5, 2026', read:'13 min', excerpt:'Signs of infection, tools to clean your device, and the habits that prevent reinfection.', tone:3, tags:['Cybersecurity','Android','Malware','Privacy','How-To'] },
  'oneplus-13-camera': { title:'OnePlus 13 camera deep-dive: flagship quality at half the price', cat:'Reviews', author:'Sarah Kim', date:'Apr 30, 2026', read:'14 min', excerpt:'OnePlus\'s best camera yet — and it costs $300 less than the phones it beats.', tone:1, tags:['OnePlus 13','Camera','Android','Reviews','Value Flagship'] },
  '5g-explained': { title:'5G speeds decoded: what the numbers on your plan actually mean', cat:'Smartphones', author:'Marcus Webb', date:'Apr 25, 2026', read:'9 min', excerpt:'Sub-6GHz, mmWave, and C-band explained without the carrier marketing spin.', tone:4, tags:['5G','Networks','Explainer','Carriers','Connectivity'] },
  'best-android-apps-2026': { title:'50 best Android apps of 2026 — tested, ranked, and actually useful', cat:'Apps & Software', author:'Priya Sharma', date:'Apr 20, 2026', read:'16 min', excerpt:'200 apps tested. 50 survived. No filler, no sponsored picks — just apps worth installing.', tone:5, tags:['Android Apps','Apps & Software','Buying Guide','Productivity'] },
  'speed-up-android': { title:'How to make any Android phone feel new again in 10 minutes', cat:'How-To', author:'Alex Chen', date:'Apr 15, 2026', read:'8 min', excerpt:'Animation settings, background limits, and the developer option that transforms slow phones. Ten minutes, permanent results.', tone:6, tags:['Android','How-To','Performance','Troubleshooting'] },
  'foldables-worth-it': { title:'Foldable phones in 2026: we tested them all — here\'s who should buy one', cat:'Smartphones', author:'Marcus Webb', date:'Apr 10, 2026', read:'11 min', excerpt:'After a year with three foldables, we know who they\'re for and who should stick with slabs.', tone:1, tags:['Foldables','Smartphones','Buying Guide','Reviews'] },
  'ios-19-hidden-features': { title:'iOS 19 hidden features: 14 things Apple didn\'t announce on stage', cat:'iOS', author:'Sarah Kim', date:'Apr 5, 2026', read:'13 min', excerpt:'Apple buried 14 genuinely useful features in iOS 19. Here\'s where to find them.', tone:3, tags:['iOS 19','Apple','iPhone','Software Update','How-To'] },
};

const AUTHOR_BIOS: Record<string, { role: string; bio: string }> = {
  'Alex Chen': { role: 'Senior editor, Android & Software', bio: 'Alex has been covering Android since the Nexus era. He tests every major release on at least three devices and maintains the TechPulse app compatibility database.' },
  'Sarah Kim': { role: 'Senior reviewer, Smartphones & Cameras', bio: 'Sarah has reviewed more than 300 phones and built TechPulse\'s blind camera-comparison methodology. She buys every flagship she reviews with her own money.' },
  'Marcus Webb': { role: 'Senior reviewer, Connectivity & Comparisons', bio: 'Marcus previously worked as a network engineer before joining TechPulse, where he now runs head-to-head device comparisons and network testing.' },
  'Priya Sharma': { role: 'Editor, Apps & AI', bio: 'Priya covers software, AI tools, and budget hardware. She runs TechPulse\'s annual best-apps list and the budget phone testing lab.' },
  'Zara Ahmed': { role: 'Wearables editor', bio: 'Zara has tested every major smartwatch and fitness tracker released since 2019 and runs TechPulse\'s multi-week battery endurance tests.' },
  'James Carter': { role: 'Security editor', bio: 'James is TechPulse\'s cybersecurity lead, covering malware, scams, and mobile privacy. He previously worked in mobile threat research.' },
};

const BODIES: Record<string, Body> = {
  'android-16-features': {
    sections: [
      { heading: "What's actually new — and why it matters", paragraphs: [
        "Every major Android release arrives with a list of features that reads like a marketing brief. Most of them land as minor tweaks dressed up as revolutions. A few, though, genuinely change the way the phone feels to use — and Android 16 has more of the latter than we've seen in years.",
        "We spent three weeks running Android 16 across four different devices — a Pixel 9 Pro, a Galaxy S25, a mid-range Motorola, and an older OnePlus — to find out which features survive contact with real-world use and which ones disappear into the settings menu within 48 hours.",
      ]},
      { heading: 'The new notification system', paragraphs: [
        "Android's notification system has needed a serious rethink for years, and Google has finally delivered one. The new Adaptive Notifications layer uses on-device AI to group, prioritise, and — crucially — silently log low-priority alerts instead of interrupting you with them.",
        "In practice, the difference is dramatic. After training for about a week, the system correctly identified 84% of the alerts we'd have swiped away anyway and handled them silently. The remaining 16% (mostly banking and security notifications) came through normally.",
        "This alone is worth the update if you find your phone constantly competing for your attention.",
      ]},
      { heading: 'Battery intelligence, finally done right', paragraphs: [
        "Google has been promising smarter charging for three releases. Android 16 is the first version where it actually works. The Adaptive Charging engine now learns your specific schedule — not a generic overnight window — and adjusts charge rates accordingly.",
        "Over our three-week test, the system predicted our morning unplug time correctly 91% of the time. On missed predictions, it erred on the side of a fuller charge rather than leaving us short.",
      ]},
      { heading: 'Privacy controls get a proper overhaul', paragraphs: [
        "The new Privacy Hub consolidates all permission controls — camera, microphone, location, contacts, health data — into one dashboard with timeline graphs showing exactly which app accessed what and when.",
        "There are now two new permission tiers: Temporary Access (an app gets one-time permission for a single session) and Background Watch, which alerts you if an app quietly accesses the microphone in the background. It caught one of our test apps doing exactly that — we deleted it immediately.",
      ]},
      { heading: 'The Live Captions upgrade', paragraphs: [
        "Live Captions has been upgraded with speaker identification and real-time translation, handled entirely on-device with no network round-trip. Quality is good enough for casual conversation but struggles with regional accents and technical vocabulary.",
      ]},
      { heading: 'Who should update, and who should wait', paragraphs: [
        "If you're on a Pixel 7 or later, update immediately. If you're on a Galaxy S24 or later, Samsung's One UI 8 rollout preserves their features, so the same applies.",
        "If you're on a mid-range device from a smaller manufacturer, wait two to three weeks for a carrier-approved build — early test builds had launcher compatibility issues.",
      ]},
      { heading: 'The verdict', paragraphs: [
        "Android 16 is the first release in three years we'd recommend updating immediately rather than waiting for stability. The notification intelligence, battery management, and privacy overhaul are all genuinely useful.",
        "The challenge, as always, is fragmentation. These features land on Pixels first and may take months to reach other manufacturers' devices.",
      ]},
    ],
    quote: "Android 16 feels like the first release in a long time where the features they announced are the features you'll actually use.",
  },
  'galaxy-s25-ultra-review': {
    sections: [
      { heading: 'Two months is long enough to find the cracks', paragraphs: [
        "Launch-week reviews are written on borrowed time — a few days with a review unit, a battery of synthetic benchmarks, and a deadline. We bought our own Galaxy S25 Ultra and used it as a daily driver for eight weeks before writing a word of this review.",
        "That distinction matters because the S25 Ultra's strengths and weaknesses only reveal themselves over time. The camera impresses in the first hour. The software habits, thermal behaviour under sustained load, and battery degradation curve only show up after weeks of real use.",
      ]},
      { heading: 'The camera system, tested properly', paragraphs: [
        "Samsung's 200MP main sensor continues to be the class leader in daylight, and this year's computational pipeline finally tames the oversaturation that plagued previous Ultras. Skin tones look accurate rather than artificially warmed, and dynamic range in backlit shots is noticeably improved.",
        "The 5x periscope telephoto remains the standout feature no other Android flagship matches. We shot moon photography, distant architecture, and wildlife across three weeks and the results were consistently sharper than anything from a Pixel or OnePlus at the same zoom level.",
        "Low light is where the gap to the iPhone narrows but doesn't close — Samsung's night mode still processes slightly hotter and less naturally than Apple's Photonic Engine.",
      ]},
      { heading: 'The S Pen: still niche, still excellent', paragraphs: [
        "If you use the S Pen for note-taking or quick sketches, it remains unmatched — the latency is imperceptible and the Notes app integration is genuinely useful for anyone doing structured note-taking on the go.",
        "For most buyers, though, it's a feature you'll use twice a month, not twice a day. It shouldn't be a primary purchase driver.",
      ]},
      { heading: 'Battery and thermals over eight weeks', paragraphs: [
        "The 5,000mAh battery comfortably delivers a full day of moderate-to-heavy use, and by week six we saw no measurable capacity loss using Samsung's built-in battery health metric.",
        "Sustained gaming sessions over 45 minutes do produce noticeable heat around the camera module, and clock speeds throttle by roughly 12% after 30 minutes of the most demanding titles. This is standard for the category, not unique to Samsung.",
      ]},
      { heading: 'One UI 8: the real differentiator', paragraphs: [
        "Samsung's software is the most mature Android skin on the market, and the multi-window and DeX desktop features are genuinely useful for anyone who treats their phone as a secondary computer.",
        "The trade-off is bloat — several pre-installed Samsung and partner apps duplicate Google's own, and first-time setup requires more decluttering than we'd like.",
      ]},
      { heading: 'The verdict', paragraphs: [
        "After two months, the Galaxy S25 Ultra remains the most capable Android phone money can buy, and the only one we'd recommend without a caveat to someone who wants the best camera system on the platform.",
        "If you don't use the S Pen and don't need the telephoto reach, the standard Galaxy S25 or a OnePlus 13 will save you real money with only a modest step down in capability.",
      ]},
    ],
    quote: "Samsung's telephoto lead over the rest of Android isn't closing — if anything, it's widening.",
  },
  'iphone-17-vs-pixel-9': {
    sections: [
      { heading: 'Why we ran this test the hard way', paragraphs: [
        "Camera comparisons are usually a handful of side-by-side shots taken in perfect daylight, which flatters every modern flagship equally. We wanted a test that actually separated these two cameras, so we shot 400 photos across six lighting conditions in three countries over five weeks.",
        "Both phones were kept on default camera settings with no manual adjustments, since that's how the overwhelming majority of owners actually shoot.",
      ]},
      { heading: 'Daylight and general use', paragraphs: [
        "In good light, both phones are excellent, and most people would struggle to tell the results apart at a glance. Look closer and the iPhone 17 produces slightly more natural colour science, while the Pixel 9 Pro leans into punchier, more saturated tones that read better on social media but less accurately against a colour reference card.",
      ]},
      { heading: 'Low light: the real gap', paragraphs: [
        "This is where the test stopped being close. In dim indoor lighting and at night, the Pixel 9 Pro's computational photography pipeline consistently recovered more shadow detail without introducing the smeared, over-processed look that plagued older Pixels.",
        "The iPhone 17's Photonic Engine held up well but showed more noise in the darkest scenes we tested, particularly in motion — a moving subject at a dimly lit restaurant table was noticeably sharper on the Pixel in eight out of ten paired shots.",
      ]},
      { heading: 'Portraits and skin tones', paragraphs: [
        "Both phones handled a wide range of skin tones respectfully, a marked improvement over flagships from just a few years ago. The iPhone's edge detection around hair and glasses in portrait mode was slightly more reliable, producing fewer of the blurred-edge artefacts we still occasionally saw from the Pixel.",
      ]},
      { heading: 'Video and stabilisation', paragraphs: [
        "For video, the iPhone 17 remains the safer choice for anyone who shoots more than the occasional clip — stabilisation, colour consistency between cuts, and dynamic range in mixed lighting are all a step ahead of the Pixel 9 Pro.",
      ]},
      { heading: 'The verdict', paragraphs: [
        "If your photography is mostly daylight, social posts, and video, the iPhone 17 is the more consistent all-rounder. If you regularly shoot indoors, at night, or in mixed lighting, the Pixel 9 Pro's computational advantage is real and noticeable across a large sample size.",
        "Neither phone is a bad choice — but for outright low-light image quality, our blind panel of ten reviewers picked the Pixel 9 Pro in 62% of paired comparisons.",
      ]},
    ],
    quote: 'In the conditions that actually challenge a camera — dim rooms, moving subjects, mixed lighting — the Pixel pulled ahead more often than not.',
  },
  'best-budget-android-2026': {
    sections: [
      { heading: 'The sub-$200 category has grown up', paragraphs: [
        "Three years ago, a $200 Android phone meant a laggy interface, a washed-out display, and a camera that struggled in anything but perfect daylight. That's no longer true. Component costs have fallen enough that manufacturers now fit genuinely competent hardware into this price bracket without cutting every corner.",
        "We tested twelve phones under $200 over six weeks of daily use, evaluating performance under real workloads, camera quality in typical (not ideal) lighting, and — most importantly — how each phone held up after a month rather than a first impression.",
      ]},
      { heading: 'What separates the good ones from the rest', paragraphs: [
        "The single biggest differentiator at this price point isn't the chipset — it's software update commitment. Several strong-performing phones in our test lost points because the manufacturer only commits to one major OS update, meaning the phone will be functionally obsolete for security patches within two years.",
        "The phones that ranked highest all commit to at least three years of security updates, which we now treat as a hard requirement rather than a nice-to-have.",
      ]},
      { heading: 'Performance: good enough for almost everyone', paragraphs: [
        "Day-to-day performance across our top picks was more than adequate for messaging, social media, browsing, and light gaming. Where budget phones still show their limits is in app-switching speed and sustained performance during longer sessions — expect noticeably more stutter after 20+ apps have been backgrounded compared to a flagship.",
      ]},
      { heading: 'Cameras: the biggest year-over-year jump', paragraphs: [
        "This is where 2026's budget crop impressed us most. Daylight photos from our top three picks were close enough to mid-range phones from two years ago that casual users likely wouldn't notice a difference. Low light remains the clear weak point across the entire category — noise reduction is aggressive and detail suffers.",
      ]},
      { heading: 'Battery life', paragraphs: [
        "Budget phones consistently outlasted flagships in our testing, largely because lower-resolution displays and less powerful chipsets simply draw less power. Every phone in our top six comfortably delivered a full day and a half of moderate use.",
      ]},
      { heading: 'The verdict', paragraphs: [
        "You no longer have to accept a compromised experience to spend under $200. The gap to mid-range phones has narrowed considerably, and for anyone who mainly uses their phone for communication, browsing, and casual photos, several of these picks are simply the smarter buy.",
      ]},
    ],
  },
  'smartphone-battery-fix': {
    sections: [
      { heading: 'Most battery complaints trace back to four habits', paragraphs: [
        "We get more reader questions about battery life than any other topic, and after testing dozens of reported cases, the same four causes account for the overwhelming majority of complaints. Fixing all four typically restores a phone's battery life to something close to when it was new.",
      ]},
      { heading: 'Background app refresh left unchecked', paragraphs: [
        "The single biggest drain we consistently find is apps refreshing content in the background far more often than necessary. Social media, news, and shopping apps are the worst offenders — some refresh every few minutes even when you haven't opened them in days.",
        "Go into your battery settings and look at background usage per app. Anything consuming more than 5% while you weren't actively using it is worth restricting.",
      ]},
      { heading: 'Always-on display and high refresh rate stacking', paragraphs: [
        "Always-on display alone typically costs 3-5% of daily battery. Combined with a 120Hz refresh rate left at maximum everywhere, the two together can account for 15% or more of your daily drain — for a feature most people glance at a handful of times a day.",
        "Switching to adaptive refresh rate (available on nearly every phone released since 2023) and disabling always-on display recovered an average of two hours of screen-on time across our test devices.",
      ]},
      { heading: 'Location services set to "always allow"', paragraphs: [
        "Apps with constant location access — particularly weather, fitness, and delivery apps — are a quiet but significant drain. Switching non-essential apps to ‘While Using’ instead of ‘Always’ made a measurable difference in every test case, without any functional downside for the apps we checked.",
      ]},
      { heading: 'Charging habits that accelerate degradation', paragraphs: [
        "None of the above matters if the battery itself is degrading faster than it should. Keeping a phone plugged in overnight at 100% for months on end measurably accelerates capacity loss. Most modern phones include an optimised or adaptive charging mode — turning it on and charging to 80-90% for daily use extends usable battery life significantly over a year.",
      ]},
      { heading: 'The 10-minute fix', paragraphs: [
        "Disable always-on display, cap refresh rate to adaptive, switch location access for non-essential apps to ‘while using,’ and enable optimised charging. Do all four and most phones we tested regained 20-30% more screen-on time within a week.",
      ]},
    ],
  },
  'chatgpt-mobile-tips': {
    sections: [
      { heading: 'Most people use 10% of what the app can do', paragraphs: [
        "ChatGPT's mobile app has quietly become one of the most capable tools on your phone, but the default experience buries most of its useful features behind menus most people never open. After using the app daily for six months, here are the features that changed how we use it.",
      ]},
      { heading: 'Custom instructions that actually stick', paragraphs: [
        "Buried in Settings is a Custom Instructions panel that lets you tell the model how to respond by default — tone, format preferences, things to avoid. Set once, it applies to every new conversation without you having to repeat context.",
        "We set ours to always respond concisely and skip disclaimers for straightforward factual questions, which alone cut average response length by roughly a third.",
      ]},
      { heading: 'Voice mode is better than most people realise', paragraphs: [
        "Advanced Voice Mode supports natural interruption — you can talk over the response mid-sentence and it adjusts immediately, rather than finishing its thought first. It's genuinely useful for hands-free tasks like getting a recipe read out while cooking.",
      ]},
      { heading: 'Memory controls worth checking', paragraphs: [
        "The app can remember details across conversations by default, which is convenient but worth auditing. The Manage Memory screen shows exactly what it has stored and lets you delete individual entries rather than wiping everything — useful if it's remembered something irrelevant or outdated.",
      ]},
      { heading: 'Shortcuts that save real time', paragraphs: [
        "Long-pressing the app icon exposes quick actions for starting a new voice conversation or resuming your last chat without opening the full app first. Combined with the share-sheet integration — sending a photo or link directly to ChatGPT from any other app — it removes most of the friction of switching apps.",
      ]},
      { heading: 'The takeaway', paragraphs: [
        "None of these features are hidden exactly — they're just never surfaced by default. Spending ten minutes in the settings menu once is enough to make the app meaningfully faster and more useful for daily tasks.",
      ]},
    ],
  },
  'wearables-2026': {
    sections: [
      { heading: 'Eight weeks, six watches, one honest ranking', paragraphs: [
        "We wore each of six flagship smartwatches for at least eight days apiece, rotating through them over eight weeks, tracking battery life, sensor accuracy against a medical-grade chest strap, and how each software experience held up to daily use rather than a first-day demo.",
      ]},
      { heading: 'Battery life is still the deciding factor', paragraphs: [
        "Every watch in our test claimed multi-day battery life on the box. In practice, with always-on display enabled and continuous heart-rate tracking, only two of the six actually delivered more than two days. The rest required nightly charging despite marketing claims of ‘up to 5 days.’",
        "If a smartwatch can't survive a full day of exercise tracking plus sleep tracking without dying, it fails the one job most buyers actually need it to do.",
      ]},
      { heading: 'Sensor accuracy varied more than expected', paragraphs: [
        "We compared heart rate readings during interval training against a chest strap across all six watches. The best performers stayed within 2-3 bpm during steady state and only drifted during rapid intensity changes. The worst watch in our test lagged by as much as 15 bpm during sprints — enough to meaningfully skew calorie estimates.",
      ]},
      { heading: 'Sleep tracking: useful data, questionable insights', paragraphs: [
        "Raw sleep stage data was reasonably consistent across watches when compared to a dedicated sleep-tracking ring used as a reference. Where watches differ is in the ‘insights’ layer — several apps generate generic advice that doesn't reflect your actual data, which undermines trust in the feature.",
      ]},
      { heading: 'Software experience over time', paragraphs: [
        "The watches with the cleanest, fastest software weren't always the ones with the most features. One competitor's watch to review with the most comprehensive metrics was also consistently the slowest to load complications and sync data — a trade-off worth considering if daily usability matters more to you than raw data depth.",
      ]},
      { heading: 'The verdict', paragraphs: [
        "No single smartwatch won every category. If battery life and daily reliability matter most, prioritise the two watches that actually delivered multi-day life with always-on display enabled. If deep health metrics matter more than convenience, a features-first watch may be worth the extra charging.",
      ]},
    ],
    quote: 'A smartwatch that dies before bedtime has already failed at its most basic job, no matter how good its sensors are.',
  },
  'android-malware-guide': {
    sections: [
      { heading: 'Malware on Android is more common than most people think', paragraphs: [
        "Android's open app ecosystem is a strength for developers and a liability for security. While Google Play Protect catches the majority of malicious apps before they cause harm, sideloaded apps and compromised third-party stores remain a consistent source of infections we hear about from readers.",
      ]},
      { heading: 'Warning signs your phone may be infected', paragraphs: [
        "Sudden battery drain with no change in usage habits, unexplained data usage spikes, apps you don't remember installing, and pop-up ads appearing outside of any app (including on the lock screen) are the most reliable early indicators. Overheating during idle periods is another red flag worth taking seriously.",
      ]},
      { heading: 'How to check and clean an infected device', paragraphs: [
        "Start with Settings > Apps and review everything installed, removing anything unfamiliar. Run a scan with Google Play Protect (Settings > Security), which is built into every Android phone and requires no separate install. For a deeper check, a reputable dedicated security scanner can catch what Play Protect misses, particularly with sideloaded APKs.",
        "If symptoms persist after removing suspicious apps, a factory reset — after backing up only your photos and contacts, not app data — is the most reliable way to guarantee a clean device.",
      ]},
      { heading: 'The habits that prevent reinfection', paragraphs: [
        "Stick to the Play Store wherever possible, and when you must sideload an APK, only do so from a source you fully trust. Review app permissions at install time rather than blanket-accepting them, and revoke anything asking for access it has no obvious reason to need — a flashlight app requesting contacts access is a clear warning sign.",
      ]},
      { heading: 'What to do if your data may already be compromised', paragraphs: [
        "Change passwords for any accounts accessed on the device, starting with email and banking, and enable two-factor authentication where it isn't already active. Monitor your bank statements for unfamiliar transactions for at least a month after cleaning an infected device.",
      ]},
      { heading: 'The bottom line', paragraphs: [
        "Most Android malware relies on users bypassing safeguards to install something they shouldn't. Staying inside the Play Store, reviewing permissions honestly, and treating unexpected pop-ups as a signal rather than a nuisance closes off the overwhelming majority of infection routes.",
      ]},
    ],
  },
  'oneplus-13-camera': {
    sections: [
      { heading: 'OnePlus keeps closing the gap quietly', paragraphs: [
        "OnePlus has spent the last few years improving its camera systems without much fanfare, and the OnePlus 13 is the clearest evidence yet that the work has paid off. We shot 200 comparison photos against the Galaxy S25 across a range of conditions to see how close the gap really is.",
      ]},
      { heading: 'Daylight performance', paragraphs: [
        "In good light, the OnePlus 13's main sensor produces results that are genuinely difficult to distinguish from the Galaxy S25 in a blind comparison. Colour science leans slightly warmer and more natural, which several of our panel testers preferred over Samsung's punchier default processing.",
      ]},
      { heading: 'The Hasselblad partnership pays off in color science', paragraphs: [
        "The continued tuning partnership with Hasselblad shows most clearly in skin tones and portrait mode, which avoid the over-smoothed look that still occasionally appears on cheaper Android cameras. Portrait edge detection around hair and complex backgrounds was consistently reliable across our test set.",
      ]},
      { heading: 'Low light and the telephoto trade-off', paragraphs: [
        "Where the OnePlus 13 falls behind is telephoto reach and low-light detail retention at high zoom. Samsung's periscope lens still pulls ahead noticeably beyond 5x zoom, and OnePlus's night mode processing, while good, shows more noise in the darkest scenes than Samsung's flagship.",
      ]},
      { heading: 'Video quality', paragraphs: [
        "Video stabilisation and colour consistency between the main and ultrawide lenses have improved significantly over the previous generation, closing what used to be a noticeable weakness for OnePlus.",
      ]},
      { heading: 'The verdict', paragraphs: [
        "At roughly $300 less than the Galaxy S25 Ultra, the OnePlus 13 delivers photo quality that's close enough for the vast majority of buyers to not notice the difference in daily use. Anyone who regularly shoots at long zoom or in very low light will still find Samsung's system ahead — everyone else can save the money.",
      ]},
    ],
  },
  '5g-explained': {
    sections: [
      { heading: 'The marketing terms that actually matter', paragraphs: [
        "Carrier marketing has turned 5G into an alphabet soup of terms — Sub-6, mmWave, C-band, Ultra Wideband — with little explanation of what any of it means for the speeds you'll actually get. Here's what's behind each term, without the sales pitch.",
      ]},
      { heading: 'Sub-6GHz: the 5G you actually use most of the time', paragraphs: [
        "The vast majority of ‘5G’ coverage on your phone is Sub-6GHz, which uses similar frequency ranges to 4G LTE. It offers a real but modest speed improvement over good 4G — typically 100-300 Mbps in decent coverage — with excellent range and building penetration.",
      ]},
      { heading: 'mmWave: blazing fast, barely there', paragraphs: [
        "Millimeter wave is the technology behind headline claims of gigabit-plus speeds, and those numbers are real under ideal conditions. The catch is range — mmWave signals barely penetrate walls and lose strength within a few hundred meters of a tower, which is why it's mostly deployed in dense stadiums and city blocks rather than as general coverage.",
      ]},
      { heading: 'C-band: the middle ground carriers are betting on', paragraphs: [
        "C-band splits the difference — meaningfully faster than Sub-6 in typical use, with far better range and building penetration than mmWave. Most of the ‘5G speed’ improvements carriers have rolled out over the past two years have come from expanding C-band coverage rather than mmWave.",
      ]},
      { heading: 'What this means for your plan', paragraphs: [
        "If your carrier advertises ‘5G Ultra Wideband’ or similar branding, check whether it refers to mmWave (fast but rare) or C-band (moderately fast but widespread) — the terminology varies by carrier and isn't standardised, which is exactly the confusion the marketing benefits from.",
      ]},
      { heading: 'The practical takeaway', paragraphs: [
        "For the overwhelming majority of daily use — browsing, streaming, video calls — Sub-6 and C-band coverage is more than sufficient. mmWave's headline speeds make for a great demo but rarely matter outside specific dense urban locations.",
      ]},
    ],
  },
  'best-android-apps-2026': {
    sections: [
      { heading: '200 apps in, 50 survived', paragraphs: [
        "We test app recommendations the same way we test phones — by using them daily, not by skimming a feature list. Over three months we tried 200 apps across twelve categories and kept only the ones that earned a permanent place on our test devices.",
      ]},
      { heading: 'Productivity and note-taking', paragraphs: [
        "The productivity category was the most crowded and the hardest to differentiate. The apps that made our final list stood out for genuinely fast search, reliable sync across devices, and — critically — not locking core functionality behind a subscription after a trial period.",
      ]},
      { heading: 'Photography and editing', paragraphs: [
        "Mobile photo editing has matured enormously, and several apps on our list now offer desktop-grade tools like selective colour grading and AI-based object removal that would have required a computer just three years ago.",
      ]},
      { heading: 'Privacy and security tools', paragraphs: [
        "We were deliberately selective here — several popular ‘privacy’ apps request more permissions than they need to function, which disqualified them regardless of feature set. The apps that made the cut earned it through minimal permissions and transparent data practices.",
      ]},
      { heading: 'Health and fitness', paragraphs: [
        "The strongest fitness apps this year focused on doing one thing well rather than trying to be an all-in-one health platform. Apps that synced cleanly with existing wearables and didn't nag with constant upsells ranked highest.",
      ]},
      { heading: 'How we picked the final 50', paragraphs: [
        "Every app on the final list had to survive at least three weeks of daily use without a crash, a confusing update, or a sudden pricing change. That bar alone eliminated more apps than any single feature comparison could.",
      ]},
    ],
  },
  'speed-up-android': {
    sections: [
      { heading: 'Your phone probably isn\'t as slow as it feels', paragraphs: [
        "Most ‘my phone is slow now’ complaints aren't about hardware degradation — they're about software accumulation. Years of installed apps, background processes, and default animation settings gradually add friction that feels like slowdown but is almost entirely reversible.",
      ]},
      { heading: 'Animation speed: the fastest perceived speed boost', paragraphs: [
        "Enabling Developer Options and reducing Window, Transition, and Animator animation scale to 0.5x (or off entirely) makes every interaction feel faster immediately, even though the underlying performance hasn't changed. This is the single highest-impact, lowest-effort fix on this list.",
      ]},
      { heading: 'Background process limits', paragraphs: [
        "Also in Developer Options, limiting background processes prevents rarely-used apps from quietly consuming memory and CPU cycles you need for the app you're actually using. We set ours to a maximum of 4 background processes and saw immediate improvement in app-switching speed on a three-year-old test device.",
      ]},
      { heading: 'Clearing cached data the right way', paragraphs: [
        "Clearing an app's cache (not its data) through Settings > Apps periodically removes accumulated temporary files without losing logins or saved information. Do this for your heaviest-used apps — social media and browsers accumulate the most cache over time.",
      ]},
      { heading: 'The one setting that changes everything: adaptive battery and performance mode', paragraphs: [
        "Most manufacturers now include a performance mode that temporarily unlocks maximum clock speeds, at the cost of battery life. For an old phone that otherwise feels sluggish, switching this on for demanding tasks makes a genuinely noticeable difference.",
      ]},
      { heading: 'The 10-minute checklist', paragraphs: [
        "Reduce animation scale, limit background processes, clear cache on your top five most-used apps, and uninstall anything you haven't opened in three months. Together, these changes take about ten minutes and produce results that last until the next major OS update.",
      ]},
    ],
  },
  'foldables-worth-it': {
    sections: [
      { heading: 'A year is long enough to know if a foldable holds up', paragraphs: [
        "Foldable phones have been available long enough that the interesting question is no longer ‘are they good’ but ‘are they good after a year of hinges, pocket lint, and daily folding.’ We lived with three different foldables — a book-style, a flip-style, and a tablet-style — for twelve months each.",
      ]},
      { heading: 'Hinge durability: better than expected, not flawless', paragraphs: [
        "All three hinges held up mechanically over a full year of daily folding, with no looseness or grinding developing. The crease in the display remains visible under certain lighting on all three, though it's noticeably less pronounced on the newest generation than models from two years prior.",
      ]},
      { heading: 'Who actually benefits from the larger screen', paragraphs: [
        "The book-style foldable's larger interior display genuinely changed how we used the phone for reading, document review, and split-screen multitasking — tasks it's meaningfully better at than a standard phone. If your use case doesn't involve much reading or multitasking, that advantage disappears.",
      ]},
      { heading: 'The flip-style trade-off', paragraphs: [
        "The flip-style foldable's appeal is almost entirely about pocketability and form factor rather than functional advantage — the cover screen is genuinely useful for quick glances, but the phone doesn't do anything a standard phone can't once opened.",
      ]},
      { heading: 'Battery life and durability concerns after a year', paragraphs: [
        "Battery capacity on all three had degraded noticeably more than a comparable non-folding flagship over the same period, likely due to the additional stress of a hinge mechanism and dual-battery designs. This is worth factoring into the total cost of ownership.",
      ]},
      { heading: 'The verdict', paragraphs: [
        "Foldables have matured into a genuinely reliable category, not a novelty. But the meaningful benefit is narrower than marketing suggests — it's real for readers, multitaskers, and people who specifically want the compact form factor, and mostly cosmetic for everyone else.",
      ]},
    ],
  },
  'ios-19-hidden-features': {
    sections: [
      { heading: 'Apple buries more than it announces', paragraphs: [
        "Apple's keynote covers maybe a third of what actually ships in a major iOS release. The rest is discovered gradually by users digging through settings menus — or, in our case, deliberately combing through every settings screen looking for what didn't make the stage.",
      ]},
      { heading: 'Interactive widgets get genuinely more useful', paragraphs: [
        "Widgets on the lock screen and home screen now support more interactive actions without opening the full app — marking a reminder done, skipping a podcast track, or replying to a message directly from the widget. It's a small thing that removes a surprising number of daily app-opens.",
      ]},
      { heading: 'A smarter Focus mode', paragraphs: [
        "Focus modes now support location-based automatic switching with much finer granularity than before — you can set a work Focus that activates only inside a specific building, not just a general area, useful for anyone who works and lives close together.",
      ]},
      { heading: 'Safari\'s hidden tab management', paragraphs: [
        "A new gesture lets you swipe to instantly merge or split tab groups, and a ‘Highlights’ feature automatically surfaces key information from a webpage — addresses, phone numbers, review scores — without needing to read the whole page.",
      ]},
      { heading: 'Accessibility features worth knowing even if you don\'t need them', paragraphs: [
        "This release's accessibility additions are unusually good even for non-accessibility use cases — a new system-wide magnifier and improved voice control make one-handed use significantly easier for anyone holding a bag, a coffee, or a child.",
      ]},
      { heading: 'Where to find all of it', paragraphs: [
        "Most of these are buried in Settings > Accessibility or within each app's own settings rather than the main Settings app, which is exactly why they rarely get covered in launch-day reviews. Worth ten minutes of exploration after you update.",
      ]},
    ],
  },
};

function getRelated(currentSlug: string) {
  const current = POSTS[currentSlug];
  const others = Object.entries(POSTS).filter(([slug]) => slug !== currentSlug);
  const sameCat = others.filter(([, p]) => p.cat === current.cat);
  const rest = others.filter(([, p]) => p.cat !== current.cat);
  return [...sameCat, ...rest].slice(0, 3).map(([slug, p]) => ({ slug, ...p }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  const body = BODIES[params.slug];

  if (!post || !body) {
    return (
      <div className="wrap" style={{ padding: '80px 28px', textAlign: 'center' }}>
        <h1>Article not found</h1>
        <p className="muted" style={{ marginTop: 12 }}>This article may have moved or been removed.</p>
        <Link className="btn btn-primary" href="/blog" data-nav style={{ marginTop: 24, display: 'inline-flex' }}>Back to Reviews →</Link>
      </div>
    );
  }

  const authorInfo = AUTHOR_BIOS[post.author];
  const related = getRelated(params.slug);
  const quoteAfter = Math.min(2, body.sections.length - 1);

  return (
    <>
      {/* Top ad */}
      <div className="wrap ad-zone" style={{ paddingTop: 24 }}>
        <AdSlot size="large" id="post-top-banner" tall />
      </div>

      {/* Breadcrumb */}
      <div className="wrap" style={{ padding: '20px 28px 0', fontSize: 13, color: 'var(--muted)', display: 'flex', gap: 8, alignItems: 'center' }}>
        <Link href="/" data-nav style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
        <span>/</span>
        <Link href="/blog" data-nav style={{ color: 'inherit', textDecoration: 'none' }}>Reviews</Link>
        <span>/</span>
        <span className="cat" style={{ fontSize: 12 }}>{post.cat}</span>
      </div>

      {/* Hero */}
      <section className="wrap" style={{ padding: '28px 28px 0', maxWidth: 800 }}>
        <span className="cat" style={{ marginBottom: 14, display: 'block' }}>{post.cat}</span>
        <h1 style={{ fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.08, margin: '0 0 20px' }}>{post.title}</h1>
        <p className="muted" style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 24 }}>{post.excerpt}</p>
        <div className="card-meta" style={{ fontSize: 14, marginBottom: 28 }}>
          <span>{post.author}</span><span className="dot"></span><span>{post.date}</span><span className="dot"></span><span>{post.read} read</span>
        </div>
      </section>

      {/* Thumb */}
      <div className="wrap" style={{ padding: '0 28px 32px' }}>
        <div className={`thumb tone-${post.tone}`} style={{ borderRadius: 20, minHeight: 320, aspectRatio: '16/7' }}>
          <img src={POST_IMAGES[params.slug]} alt={post.title} />
          <span className="cat" style={{ position: 'absolute', bottom: 20, left: 20, fontSize: 13 }}>{post.cat}</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 48, maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <article className="article-body">
          <AdSlot size="small" id="post-inline-1" />

          {body.sections.map((s, i) => (
            <div key={i}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              {body.quote && i === quoteAfter && (
                <blockquote style={{ borderLeft: '4px solid var(--accent)', paddingLeft: 24, margin: '32px 0', fontStyle: 'italic', fontSize: 18, color: 'var(--text)' }}>
                  &ldquo;{body.quote}&rdquo;
                </blockquote>
              )}
              {(i === 1 || i === 3) && <AdSlot size={i === 3 ? 'large' : 'small'} id={`post-inline-${i + 2}`} />}
            </div>
          ))}

          {/* Tags */}
          <div style={{ marginTop: 40, display: 'flex', gap: 10, flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: 28 }}>
            {post.tags.map((t) => (
              <span key={t} className="tag" style={{ fontSize: 13 }}>{t}</span>
            ))}
          </div>

          {/* Author card */}
          <div style={{ marginTop: 32, padding: '24px 28px', background: 'var(--surface)', borderRadius: 16, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent),#1a0a3d)', flexShrink: 0 }}></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{post.author}</div>
              <div className="muted" style={{ fontSize: 13, marginTop: 2, marginBottom: 8 }}>{authorInfo?.role} · TechPulse</div>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.55 }}>
                {authorInfo?.bio}
              </p>
            </div>
          </div>

          <AdSlot size="large" id="post-bottom-1" />
          <AdSlot size="small" id="post-bottom-2" />
        </article>

        {/* Sidebar */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <AdSlot size="small" id="post-sidebar-1" />
          <AdSlot size="small" id="post-sidebar-2" />
          <AdSlot size="small" id="post-sidebar-3" />
          <div style={{ background: 'var(--surface)', borderRadius: 16, padding: '22px 20px' }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Newsletter</div>
            <p className="muted" style={{ fontSize: 14, lineHeight: 1.5, marginBottom: 16 }}>Top 5 tech stories every Friday, free.</p>
            <input type="email" placeholder="your@email.com" style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 14px', fontSize: 14, color: 'var(--text)', outline: 'none', boxSizing: 'border-box' }} />
            <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>Subscribe →</a>
          </div>
          <AdSlot size="small" id="post-sidebar-4" />
          <AdSlot size="small" id="post-sidebar-5" />
        </aside>
      </div>

      {/* Related articles */}
      <section className="wrap section">
        <div className="section-head">
          <div><span className="eyebrow">Keep reading</span><h2 style={{ marginTop: 14 }}>Related articles</h2></div>
          <Link className="btn btn-ghost" href="/blog" data-nav>All reviews →</Link>
        </div>
        <div className="grid-3">
          {related.map((r) => (
            <Link key={r.slug} className="card" href={`/blog/${r.slug}`} data-nav>
              <div className={`thumb tone-${r.tone}`}><img src={POST_IMAGES[r.slug]} alt={r.title} /><span className="cat">{r.cat}</span></div>
              <div className="card-body">
                <h3 className="card-title">{r.title}</h3>
                <div className="card-meta"><span>{r.author}</span><span className="dot"></span><span>{r.read}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="wrap ad-zone" style={{ padding: '20px 28px 40px' }}>
        <AdSlot size="large" id="post-footer-banner" />
      </div>
    </>
  );
}

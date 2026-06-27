// Content source for the SEO guide pages. Pure data — consumed by
// scripts/build-guides.mjs to emit static, crawlable HTML at build time.
// Keep keywords/titles aligned with keyword-research/MAP.md & CONTENT-PLAN.md.

export const site = {
  name: 'Global Nomad',
  tagline: 'Private guided tours across Central Asia',
  // Override at build time:  SITE_URL=https://yourdomain.com npm run build
  url: (process.env.SITE_URL || 'https://globalnomad.tours').replace(/\/$/, ''),
  // Where every CTA points (the lead form on the landing page):
  ctaPath: '/#contact',
  ctaLabel: 'Plan your private Central Asia trip',
};

// Helper so article bodies stay readable.
const p = (...html) => html.join('');

export const guides = [
  // ─────────────────────────── PILLAR ───────────────────────────
  {
    path: '/kazakhstan-tours/',
    pillar: true,
    category: 'Kazakhstan',
    title: 'Kazakhstan Tours & Travel — Private Trips Across Central Asia | Global Nomad',
    h1: 'Kazakhstan Tours & Travel',
    description:
      'Private, guided and tailor-made Kazakhstan tours across Central Asia — from Almaty and the Tien Shan to the Silk Road cities. Plan your trip with Global Nomad.',
    keywords: ['kazakhstan travel', 'kazakhstan tours', 'kazakhstan tourism', 'visit kazakhstan'],
    intro: p(
      '<p><strong>Kazakhstan tours</strong> open the door to the most rewarding ',
      'corner of Central Asia. Global Nomad runs private, guided and tailor-made ',
      '<strong>Kazakhstan travel</strong> across the whole region — from the ',
      'mountains above Almaty to the Silk Road cities of Uzbekistan and the ',
      'nomad valleys of Kyrgyzstan. Whether you want a culture-first bespoke ',
      'journey or a high-altitude trekking adventure, every trip is built around you.</p>'
    ),
    sections: [
      { h2: 'Why visit Kazakhstan and Central Asia now', html: p(
        '<p>Kazakhstan is the ninth-largest country on Earth, yet it still receives a fraction of the visitors that pour into Western Europe or Southeast Asia. That is precisely its appeal. You can stand alone at the rim of the Charyn Canyon, ride a chairlift over wildflower meadows above Almaty, or watch the sun set on a 600-year-old madrasa without fighting for space. For travellers who want the Silk Road and the high mountains before the crowds arrive, the window is open right now.</p>',
        '<p>The region is also far easier to reach than most people assume. Almaty and Astana are well connected by direct flights from Europe, the Gulf and Asia, most Western nationalities enter Kazakhstan visa-free, and the tourism infrastructure has improved dramatically in the last decade. What has not changed is the warmth of nomadic hospitality, the quality of the food, and the sheer scale of the landscapes. A single Kazakhstan trip can take you from a cosmopolitan café culture to a yurt camp beside an alpine lake in the same week.</p>',
        '<p>Central Asia rewards the curious. This is the crossroads where Persian, Turkic, Russian and Chinese worlds met and mixed for two millennia, and you feel that layering everywhere — in the architecture, the bazaars, the languages and the cuisine. A guided trip turns that complexity from intimidating into fascinating.</p>'
      ) },
      { h2: 'Regions and highlights we cover', html: p(
        '<p>Most journeys begin in <strong>Almaty</strong>, Kazakhstan’s green, mountain-framed cultural capital. It is the perfect base: cafés, museums and the Green Bazaar in the morning, and the peaks of the Tien Shan within an hour’s drive. From here you can reach <a href="/almaty/big-almaty-lake/">Big Almaty Lake</a>, the dramatic <a href="/almaty/day-trips/">Charyn Canyon and Kolsai lakes</a>, and the ski slopes of Shymbulak. See our full guide to <a href="/almaty/things-to-do/">things to do in Almaty</a> to start planning.</p>',
        '<p>To the north, <strong>Astana</strong> (Nur-Sultan) offers a startling contrast: a futuristic capital of glass and steel rising straight out of the steppe. Beyond the cities lie the canyons, the singing dunes of Altyn-Emel, and the endless grassland that defined the nomad way of life. And because borders here are friendly, a Kazakhstan trip pairs naturally with <a href="/kyrgyzstan/trekking/">trekking in Kyrgyzstan</a> and the <a href="/silk-road/guide/">Silk Road cities</a> of Uzbekistan — Samarkand, Bukhara and Khiva.</p>'
      ) },
      { h2: 'Two ways to travel: culture or adventure', html: p(
        '<p>Every Global Nomad trip leans toward one of two styles — or blends both. The <strong>cultural and bespoke Silk Road</strong> route is for travellers drawn to history, architecture and slow, comfortable days: the Registan at golden hour, a tea house in Bukhara, a private guide who brings the trade-route past to life. The <strong>adventure and trekking</strong> route is for those who would rather sleep in a yurt, ride a horse across a high pasture and walk to a turquoise lake at 3,000 metres.</p>',
        '<p>The beauty of a tailor-made trip is that you do not have to choose. A classic two-week itinerary might open with the mountains and lakes around Almaty, cross into Kyrgyzstan for a few days of <a href="/kyrgyzstan/horse-trekking/">horse trekking</a>, then finish among the Silk Road monuments of Uzbekistan. We build the balance around you.</p>'
      ) },
      { h2: 'Why travel with a private guide', html: p(
        '<p>Central Asia is rewarding but logistically complex. Distances are vast, public transport is limited, English is not widely spoken outside the cities, and many of the best sights — Big Almaty Lake, the Kolsai lakes, the high jailoo pastures — sit at the end of rough roads or inside permit zones. A private guide and driver removes that friction entirely. You travel on your own schedule, in comfort, with someone who knows which checkpoint needs which document and where to find the best plov in town.</p>',
        '<p>A private trip also means flexibility. Want an extra day in Samarkand, a sunrise start for the canyon, or a softer pace because you are travelling with family? It is your itinerary to shape. Every Global Nomad journey is fully guided, privately run, and designed for one group at a time — never a coach full of strangers.</p>'
      ) },
      { h2: 'What a private trip includes', html: p(
        '<p>A Global Nomad trip is fully hosted from arrival to departure. That typically means a private vehicle and experienced driver, an English-speaking guide, hand-picked accommodation — from boutique city hotels to authentic yurt camps — and the permits, entrance fees and border-zone formalities handled on your behalf. We can arrange domestic flights and train tickets, special-interest experiences such as eagle hunters or artisan workshops, and dietary or pace adjustments for families and older travellers.</p>',
        '<p>Because everything is private, nothing is fixed in stone. If you fall in love with a town and want an extra night, or the weather turns and we need to reshuffle the canyon for the lake, your guide simply adapts. You are never tied to a coach timetable or a fixed group — the itinerary belongs to you.</p>'
      ) },
      { h2: 'Food, culture and the nomad welcome', html: p(
        '<p>Central Asian food is one of the trip’s quiet highlights. Expect plov (the fragrant rice-and-meat dish that is practically a national symbol), hand-pulled laghman noodles, samsa baked in clay ovens, and endless pots of tea poured in welcome. Markets like Almaty’s Green Bazaar are a feast for the senses, and a shared meal is the surest way into local life.</p>',
        '<p>Underpinning it all is the nomadic tradition of hospitality. Guests are honoured here in a way that can genuinely move first-time visitors — a stranger’s yurt becomes a place of tea, bread and conversation. Travelling with a local guide opens those doors naturally, turning sightseeing into real human encounters. It is the difference between seeing Kazakhstan and understanding it.</p>'
      ) },
      { h2: 'How long do you need?', html: p(
        '<p>A focused Kazakhstan trip works well in 7 to 10 days — enough for Almaty, the mountains and lakes, and a canyon or desert excursion. Two weeks lets you add Astana or cross into Kyrgyzstan for trekking. For the full Silk Road sweep through Uzbekistan as well, plan on 2 to 3 weeks. Our <a href="/kazakhstan/itinerary/">Kazakhstan itinerary</a> and <a href="/central-asia/itinerary/">Central Asia itinerary</a> guides lay out realistic routes for each.</p>'
      ) },
      { h2: 'Getting there and getting around', html: p(
        '<p>Almaty and Astana are the main gateways, with direct flights from hubs including Istanbul, Dubai, Frankfurt, London and Seoul, plus regional links across Asia. For most Western, Gulf and many Asian nationalities, entry to Kazakhstan is visa-free for short stays — check the specifics in our <a href="/kazakhstan/visa-and-safety/">visa and safety</a> guide. The country is also unusually easy to combine with its neighbours: friendly land borders make a multi-country Silk Road and mountains route entirely practical.</p>',
        '<p>Once you arrive, distances are the main consideration. Kazakhstan is enormous, and while modern trains and domestic flights connect the big cities, the most memorable places — the lakes, canyons and high pastures — lie at the end of long mountain or steppe roads. This is exactly where a private vehicle and guide transform the trip, turning what could be tiring self-drive logistics into a relaxed, scenic journey where someone else watches the map and the checkpoints.</p>'
      ) },
      { h2: 'Plan your Kazakhstan trip', html: p(
        '<p>Ready to start? A few practical guides will help you frame the trip. Read up on the <a href="/kazakhstan/best-time-to-visit/">best time to visit Kazakhstan</a> to choose your season, check <a href="/kazakhstan/visa-and-safety/">visa and safety</a> essentials, and browse sample routes in our <a href="/kazakhstan/itinerary/">Kazakhstan itinerary</a> guide. If you want to see the whole region, the <a href="/central-asia/itinerary/">Central Asia itinerary</a> shows how Kazakhstan, Kyrgyzstan and Uzbekistan fit together in two to three weeks.</p>',
        '<p>When you have a rough idea of your dates and interests, tell us what you have in mind. We will turn it into a private, guided trip built entirely around you — and handle every detail from the airport to the final sunset.</p>'
      ) },
    ],
    related: ['/almaty/things-to-do/', '/kazakhstan/itinerary/', '/kazakhstan/best-time-to-visit/', '/kyrgyzstan/trekking/', '/silk-road/guide/', '/central-asia/itinerary/'],
  },

  // ───────────────────── Cluster A — Almaty ─────────────────────
  {
    path: '/almaty/things-to-do/',
    category: 'Almaty',
    title: '15 Best Things to Do in Almaty, Kazakhstan (2026 Guide)',
    h1: 'Things to Do in Almaty',
    description:
      'The best things to do in Almaty, Kazakhstan — Kok-Tobe, Medeu, Shymbulak, Big Almaty Lake, the Green Bazaar and easy day trips. A local guide for 2026.',
    keywords: ['things to do in almaty', 'almaty tourist attractions', 'things to see in almaty'],
    intro: p(
      '<p>Looking for the best <strong>things to do in Almaty</strong>? Kazakhstan’s ',
      'green, mountain-framed former capital mixes Soviet-era avenues, leafy parks ',
      'and Tien Shan peaks you can reach in under an hour. Here are the Almaty ',
      'attractions worth your time, plus how to combine them on a guided day.</p>'
    ),
    sections: [
      { h2: 'Why Almaty is worth your time', html: p(
        '<p>Almaty is the kind of city that surprises people. They come expecting a grey post-Soviet outpost and find a leafy, café-loving city of fountains and tree-lined avenues, backed by a wall of snow-capped peaks. It was Kazakhstan’s capital until 1997 and remains its cultural and culinary heart. Crucially for travellers, the mountains are not a distant backdrop — they begin at the southern edge of town, which is why you can spend the morning in a museum and the afternoon at an alpine lake. The list below mixes in-city sights with the easy escapes that make Almaty special.</p>',
        '<p>Two or three days is the sweet spot for the city itself: enough for the museums, parks and bazaar, a cable-car sunset, and at least one trip up into the Tien Shan. Add more if you want to fold in the canyon and lakes. Everything here is walkable or a short ride apart, and with a guide you can comfortably combine several of these sights into a single, well-paced day.</p>'
      ) },
      { h2: '1. Kok-Tobe Hill and the cable car', html: p(
        '<p>Ride the cable car up Kok-Tobe for the classic Almaty panorama: the grid of the city below and the Tien Shan rising behind it. At the top you will find the landmark TV tower, gardens, an oddly charming Beatles statue and plenty of spots for sunset. It is the easiest way to get your bearings on day one, and the ride up is half the fun.</p>'
      ) },
      { h2: '2. Medeu and Shymbulak', html: p(
        '<p>Just 15 kilometres from the centre, Medeu is the highest-altitude skating rink in the world, set in a steep mountain gorge. From there a gondola continues up to Shymbulak, Central Asia’s premier ski resort. In winter it is all snow and pistes; in summer the slopes turn green and the gondola becomes a scenic ride to high-altitude walking trails. Either season, it is one of the most rewarding half-days you can have near the city.</p>'
      ) },
      { h2: '3. Big Almaty Lake', html: p(
        '<p>If you do one mountain trip from Almaty, make it this. Big Almaty Lake is a vivid turquoise reservoir at 2,500 metres, ringed by peaks and reachable in about an hour. The colour shifts with the light and season, from milky blue to deep emerald. Note that it sits inside a border zone with a checkpoint, so a guide or driver who knows the formalities makes the day far smoother — read our full <a href="/almaty/big-almaty-lake/">Big Almaty Lake guide</a> before you go.</p>'
      ) },
      { h2: '4. Green Bazaar and Panfilov Park', html: p(
        '<p>For the pulse of the city, head to the Green Bazaar (Zelyony Bazar). It is a riot of dried fruit, horse meat, fermented mare’s milk, spices and vendors happy to offer a taste. A short walk away, Panfilov Park is home to the candy-coloured Zenkov Cathedral — one of the tallest wooden buildings in the world, built without a single nail — and a moving WWII memorial. Together they make a perfect slow morning on foot.</p>'
      ) },
      { h2: '5. Kok-Tobe to Arbat: the city on foot', html: p(
        '<p>Almaty rewards walkers. Stroll the pedestrian Arbat, browse the boutiques and bookshops of the centre, and stop in one of the city’s excellent specialty coffee houses — the café culture here genuinely rivals any European capital. The Central State Museum and the Kasteyev Art Museum are worth an hour each if you want context on Kazakh history and nomadic culture before heading into the landscapes that shaped it.</p>'
      ) },
      { h2: '6. Eat your way through Almaty', html: p(
        '<p>No visit is complete without eating well, and Almaty makes it easy. Try plov and lagman at a traditional canteen, sample horse-meat specialities like beshbarmak if you are feeling adventurous, and finish with baursak — puffy fried dough served with tea. The Green Bazaar is the place to graze on dried fruit, nuts and fresh honey, while the city’s modern restaurant scene ranges from Georgian feasts to third-wave coffee. Ask a local guide and you will eat far better than any guidebook map suggests.</p>'
      ) },
      { h2: 'Easy day trips from Almaty', html: p(
        '<p>Some of the best things to do near Almaty are actually day trips. The <strong>Charyn Canyon</strong> — often called Kazakhstan’s little Grand Canyon — and the alpine <strong>Kolsai and Kaindy lakes</strong> are all within a long day’s reach, as is the singing-dune desert of Altyn-Emel. They take planning and a vehicle, so see our dedicated guide to <a href="/almaty/day-trips/">day trips from Almaty</a> for distances, seasons and how to combine them.</p>'
      ) },
      { h2: 'When to visit and how to plan', html: p(
        '<p>Almaty is a year-round city, but the mountains change everything by season: summer for lakes and trekking, winter for skiing, and spring and autumn for mild, uncrowded sightseeing. Our guide to the <a href="/kazakhstan/best-time-to-visit/">best time to visit Kazakhstan</a> breaks it down month by month. When you are ready to turn this list into a real trip, we can build a private, guided <a href="/kazakhstan-tours/">Kazakhstan tour</a> around exactly the sights and pace you want.</p>'
      ) },
    ],
    related: ['/almaty/big-almaty-lake/', '/almaty/day-trips/', '/kazakhstan/best-time-to-visit/', '/kazakhstan-tours/'],
  },
  {
    path: '/almaty/big-almaty-lake/',
    category: 'Almaty',
    title: 'Big Almaty Lake: How to Visit + Day Tour Guide',
    h1: 'Big Almaty Lake',
    description:
      'How to visit Big Almaty Lake near Almaty, Kazakhstan — how to get there, the checkpoint, best season, altitude and photography tips, plus a guided day-tour option.',
    keywords: ['big almaty lake', 'big almaty lake tour', 'almaty lakes'],
    intro: p(
      '<p><strong>Big Almaty Lake</strong> is the postcard image of the Tien Shan: a ',
      'turquoise reservoir at 2,500 m, ringed by peaks, just an hour from Almaty. ',
      'This guide covers how to get there, the border-zone checkpoint, the best ',
      'season to visit and how a driver or guide makes the day effortless.</p>'
    ),
    sections: [
      { h2: 'What makes Big Almaty Lake special', html: p(
        '<p>Big Almaty Lake (BAO) is the most photographed natural sight near the city, and for good reason. It is a glacial-fed reservoir sitting at roughly 2,500 metres in the Zailiysky Alatau range, hemmed in by three peaks — Sovetov, Ozyorny and Tourist. The water is an extraordinary colour that shifts through the day and across the seasons: pale milky blue after the snowmelt, deep turquoise in high summer, and a frozen white shelf in winter. It is barely 28 kilometres from central Almaty, yet it feels like another world entirely.</p>',
        '<p>The lake also supplies drinking water to the city, which is why swimming and wading are not allowed. You come here to look, to walk the shoreline, and to photograph one of the great alpine views in Central Asia — not to take a dip.</p>'
      ) },
      { h2: 'How to get to Big Almaty Lake', html: p(
        '<p>From Almaty you head south toward the GES-2 hydroelectric station and follow the road up the gorge. It is a drive of about 40 minutes to an hour depending on conditions. The lower section is paved, but the upper road is rough, steep and unpaved in places — ordinary taxis often refuse it or stop short, leaving you with a long uphill walk.</p>',
        '<p>Your realistic options are: hire a driver or 4x4 for the day, join a guided tour, or hike up (a demanding 12 km or so each way, only sensible for fit walkers with time). Most visitors choose a driver or guide, simply because it turns a logistically awkward outing into an easy, comfortable half-day. There is no reliable public transport all the way to the lake.</p>'
      ) },
      { h2: 'The checkpoint and border zone', html: p(
        '<p>This is the detail that catches independent travellers out: the area immediately around and above the lake lies within a <strong>border zone</strong> (the mountains beyond lead toward Kyrgyzstan). There is a checkpoint, and to pass it you may need your passport and, in some cases, a permit arranged in advance. Rules change and are enforced unevenly, so carry your passport at all times.</p>',
        '<p>You can usually reach a viewpoint over the lake without a permit, but going higher — toward the observatory or the passes — is where documentation matters. A local guide handles all of this for you and knows the current requirements, which is the single biggest reason to go guided rather than improvise.</p>'
      ) },
      { h2: 'Best time to visit', html: p(
        '<p>Each season offers a completely different lake. <strong>Summer (June–August)</strong> brings the easiest access, the deepest turquoise water and wildflowers, but also the most visitors. <strong>Autumn (September–October)</strong> adds golden larch and crisp, clear air — many photographers’ favourite window. <strong>Winter</strong> freezes the lake into a dramatic white expanse, but the road can be snowbound and only reachable with the right vehicle. <strong>Spring</strong> is unpredictable, with lingering snow and a paler, milkier colour.</p>',
        '<p>Whenever you go, start early. Mountain weather closes in during the afternoon, light is best in the morning, and you will beat the day-trippers. For a fuller seasonal breakdown, see our guide to the <a href="/kazakhstan/best-time-to-visit/">best time to visit Kazakhstan</a>.</p>'
      ) },
      { h2: 'Altitude, what to bring and tips', html: p(
        '<p>At 2,500 metres the air is noticeably thinner and the temperature drops sharply, even in summer — bring a warm layer and a windproof jacket whatever the forecast in the city. Sun is intense at altitude, so pack sunscreen, sunglasses and water. Sturdy shoes help on the loose shoreline paths. There are no shops or cafés at the lake, so carry your own snacks and take all rubbish back down. And remember: no swimming, and drone use is restricted in the border zone.</p>'
      ) },
      { h2: 'What else to see nearby', html: p(
        '<p>The lake is the centrepiece, but the gorge around it holds more. Above BAO, the road climbs toward the Tien Shan Astronomical Observatory and the Big Almaty Peak trailheads, where the views back down over the water are even better — terrain that usually requires the right permits and a guide. Lower down, the cosmic-ray station and the green Prokhodnaya valley make natural stops. Because the highlights are strung along one rough mountain road, it makes sense to treat the whole gorge as a single outing rather than rushing straight to the shoreline and back.</p>'
      ) },
      { h2: 'Visiting on a guided day tour', html: p(
        '<p>Because of the road, the checkpoint and the lack of facilities, Big Almaty Lake is one of the sights where a guided day genuinely pays off. A typical outing pairs the lake with other highlights — the Tien Shan observatory, a mountain viewpoint, or a stop at the cultural sights back in town. See how it fits with other escapes in our <a href="/almaty/day-trips/">day trips from Almaty</a> guide, or browse the in-city sights in <a href="/almaty/things-to-do/">things to do in Almaty</a>.</p>',
        '<p>We can include Big Almaty Lake as part of a private, guided <a href="/kazakhstan-tours/">Kazakhstan tour</a>, handling the vehicle, the permits and the timing so all you have to do is enjoy the view. Tell us your dates and we will build the day around you.</p>'
      ) },
    ],
    related: ['/almaty/things-to-do/', '/almaty/day-trips/', '/kazakhstan-tours/'],
  },
  {
    path: '/almaty/day-trips/',
    category: 'Almaty',
    title: 'Best Day Trips from Almaty: Charyn Canyon, Kolsai & Kaindy Lakes',
    h1: 'Day Trips from Almaty',
    description:
      'The best day trips from Almaty, Kazakhstan — Charyn Canyon, Kolsai and Kaindy lakes, Big Almaty Lake and more, with distances, seasons and guided-tour tips.',
    keywords: ['charyn canyon tour', 'day trips from almaty', 'kolsai lakes'],
    intro: p(
      '<p>The best <strong>day trips from Almaty</strong> trade the city for canyon ',
      'walls, sunken forests and alpine lakes. A <strong>Charyn Canyon tour</strong> ',
      'is the headline, but Kolsai, Kaindy and Big Almaty Lake all sit within reach. ',
      'Here is what to pick, how far each is, and the best season to go.</p>'
    ),
    sections: [
      { h2: 'Charyn Canyon', html: '<p>The “Valley of Castles” — distance, walking time and when to visit.</p>' },
      { h2: 'Kolsai & Kaindy lakes', html: '<p>Two of Kazakhstan’s most photographed lakes, often combined in one long day.</p>' },
      { h2: 'Big Almaty Lake', html: '<p>The closest mountain escape — full details in the <a href="/almaty/big-almaty-lake/">Big Almaty Lake guide</a>.</p>' },
      { h2: 'Self-drive vs guided', html: '<p>Distances are long and signage thin — when a guided day is worth it.</p>' },
    ],
    related: ['/almaty/big-almaty-lake/', '/almaty/things-to-do/', '/kazakhstan/itinerary/', '/kazakhstan-tours/'],
  },

  // ─────────────── Cluster B — Kazakhstan planning ───────────────
  {
    path: '/kazakhstan/best-time-to-visit/',
    category: 'Kazakhstan',
    title: 'Best Time to Visit Kazakhstan: Month-by-Month Weather Guide',
    h1: 'Best Time to Visit Kazakhstan',
    description:
      'The best time to visit Kazakhstan, month by month — Almaty weather, trekking and lake season, crowds and costs, so you can plan the perfect trip.',
    keywords: ['best time to visit kazakhstan', 'kazakhstan weather by month', 'almaty weather by month'],
    intro: p(
      '<p>The <strong>best time to visit Kazakhstan</strong> depends on what you ',
      'want: alpine lakes and trekking peak in summer, while spring and autumn ',
      'bring mild cities and colour. This month-by-month guide to ',
      '<strong>Kazakhstan weather</strong> helps you choose the right window.</p>'
    ),
    sections: [
      { h2: 'Spring (April–May)', html: '<p>Green steppe, mild Almaty, fewer crowds — but high passes still closed.</p>' },
      { h2: 'Summer (June–August)', html: '<p>Peak season for the mountains, lakes and trekking. See <a href="/kyrgyzstan/trekking/">Kyrgyzstan trekking</a> for cross-border routes.</p>' },
      { h2: 'Autumn (September–October)', html: '<p>Arguably the best all-rounder: golden colour and stable weather.</p>' },
      { h2: 'Month-by-month at a glance', html: '<p>A quick table of temperature, crowds and what’s open across the year.</p>' },
    ],
    related: ['/kazakhstan/itinerary/', '/almaty/things-to-do/', '/kazakhstan/visa-and-safety/', '/kazakhstan-tours/'],
  },
  {
    path: '/kazakhstan/visa-and-safety/',
    category: 'Kazakhstan',
    title: 'Kazakhstan Visa & Safety for Tourists (2026)',
    h1: 'Kazakhstan Visa & Is It Safe?',
    description:
      'Kazakhstan visa and safety for tourists in 2026 — visa-free and e-visa rules, how to apply, and how safe Kazakhstan really is for solo and female travellers.',
    keywords: ['is kazakhstan safe for tourists', 'evisa kazakhstan', 'kazakhstan travel visa'],
    intro: p(
      '<p>Wondering <strong>is Kazakhstan safe for tourists</strong> and whether ',
      'you need a visa? For most nationalities Kazakhstan is visa-free or offers a ',
      'simple <strong>e-visa</strong>, and it’s one of the safer destinations in ',
      'Central Asia. Here’s what to know before you go.</p>'
    ),
    sections: [
      { h2: 'Visa-free & e-visa rules', html: '<p>Who enters visa-free, who needs an e-visa, and how long you can stay.</p>' },
      { h2: 'How to apply for the e-visa', html: '<p>The online process, documents and timing.</p>' },
      { h2: 'Is Kazakhstan safe?', html: '<p>Crime, scams, solo and female travel, and basic precautions.</p>' },
      { h2: 'Health & practicalities', html: '<p>Altitude, water, SIM cards and getting around.</p>' },
    ],
    related: ['/kazakhstan/best-time-to-visit/', '/kazakhstan/itinerary/', '/kazakhstan-tours/'],
  },
  {
    path: '/kazakhstan/itinerary/',
    category: 'Kazakhstan',
    title: 'Kazakhstan Itinerary: 5, 7 & 10-Day Routes',
    h1: 'Kazakhstan Itinerary',
    description:
      'Ready-made Kazakhstan itineraries for 5, 7 and 10 days — Almaty, the mountains and lakes, plus a Kazakhstan + Kyrgyzstan combo, with maps and costs.',
    keywords: ['kazakhstan itinerary', 'kazakhstan travel itinerary', 'how many days in kazakhstan'],
    intro: p(
      '<p>How many days in Kazakhstan, and where should they go? This ',
      '<strong>Kazakhstan itinerary</strong> lays out three proven routes — a short ',
      'Almaty break, a nature-packed week and a ten-day Kazakhstan + Kyrgyzstan ',
      'loop — so you can pick the trip that fits your time.</p>'
    ),
    sections: [
      { h2: '5 days: Almaty & the mountains', html: '<p>City highlights plus Big Almaty Lake and a canyon day trip.</p>' },
      { h2: '7 days: Almaty, lakes & canyons', html: '<p>Add Charyn, Kolsai and Kaindy — see <a href="/almaty/day-trips/">day trips from Almaty</a>.</p>' },
      { h2: '10 days: Kazakhstan + Kyrgyzstan', html: '<p>Cross the border for nomad valleys and <a href="/kyrgyzstan/trekking/">Kyrgyzstan trekking</a>.</p>' },
      { h2: 'Costs & how to customise', html: '<p>What a private trip includes and how we tailor it to you.</p>' },
    ],
    related: ['/almaty/day-trips/', '/kazakhstan/best-time-to-visit/', '/central-asia/itinerary/', '/kazakhstan-tours/'],
  },

  // ─────────────── Cluster C — Kyrgyzstan adventure ───────────────
  {
    path: '/kyrgyzstan/trekking/',
    category: 'Kyrgyzstan',
    title: 'Kyrgyzstan Trekking: Best Routes, Seasons & Guided Treks',
    h1: 'Kyrgyzstan Trekking',
    description:
      'Kyrgyzstan trekking guide — the best routes (Ala-Kul, Song-Kol, Jyrgalan), when to go, difficulty and what to pack, plus guided trek options across the Tien Shan.',
    keywords: ['kyrgyzstan trekking', 'hiking in kyrgyzstan', 'kyrgyzstan trek'],
    intro: p(
      '<p><strong>Kyrgyzstan trekking</strong> is the best high-mountain hiking in ',
      'Central Asia — turquoise lakes, jailoo pastures and Tien Shan passes, with ',
      'a living nomad culture along the trail. This guide covers the top routes, ',
      'seasons and difficulty for <strong>hiking in Kyrgyzstan</strong>.</p>'
    ),
    sections: [
      { h2: 'Best trekking routes', html: '<p>Ala-Kul, Song-Kol and Jyrgalan — what makes each special.</p>' },
      { h2: 'When to trek', html: '<p>The short alpine window and why timing matters — see <a href="/kazakhstan/best-time-to-visit/">regional seasons</a>.</p>' },
      { h2: 'Difficulty & altitude', html: '<p>Fitness, acclimatisation and which routes suit first-timers.</p>' },
      { h2: 'Guided vs independent', html: '<p>Horses, yurt stays and logistics — see <a href="/kyrgyzstan/horse-trekking/">horse trekking in Kyrgyzstan</a>.</p>' },
    ],
    related: ['/kyrgyzstan/horse-trekking/', '/central-asia/itinerary/', '/kazakhstan-tours/'],
  },
  {
    path: '/kyrgyzstan/horse-trekking/',
    category: 'Kyrgyzstan',
    title: 'Horse Trekking in Kyrgyzstan: Ride Like a Nomad',
    h1: 'Horse Trekking in Kyrgyzstan',
    description:
      'Horse trekking in Kyrgyzstan — ride the Song-Kol pastures like a nomad, sleep in yurts, and choose multi-day routes. What skill you need and when to go.',
    keywords: ['horse trekking kyrgyzstan', 'kyrgyzstan horse riding tour'],
    intro: p(
      '<p><strong>Horse trekking in Kyrgyzstan</strong> is the most authentic way to ',
      'cross the country’s high pastures — the same way nomads have for centuries. ',
      'Ride to alpine lakes, sleep in yurts, and share the trail with herders. ',
      'Here’s how a <strong>Kyrgyzstan horse riding tour</strong> works.</p>'
    ),
    sections: [
      { h2: 'Why ride in Kyrgyzstan', html: p(
        '<p>Few places on Earth are as made for the saddle as Kyrgyzstan. More than ninety per cent of the country is mountainous, the summer pastures stretch unfenced for miles, and the horse has been the centre of life here for thousands of years. To travel on horseback is not a tourist gimmick — it is simply how people still move between the high camps. That is what makes <strong>horse trekking in Kyrgyzstan</strong> so special: you are not performing nomadic life, you are briefly living it.</p>',
        '<p>A ride takes you places no vehicle can reach: hidden lakes, flower-filled jailoos (summer pastures), and passes where the only sounds are wind and hooves. You move at the pace of the land, share the trail with herders driving their flocks, and end the day at a felt yurt with a bowl of tea waiting. For many travellers it becomes the most memorable part of an entire Central Asia trip.</p>'
      ) },
      { h2: 'The nomad horse culture', html: p(
        '<p>To understand Kyrgyzstan is to understand its relationship with the horse. Children here often learn to ride before they can properly walk, and the animal runs through the country’s language, food and games. You will likely be offered <em>kymyz</em>, fermented mare’s milk — a slightly sour, fizzy drink that is a point of national pride and a staple of the summer pastures.</p>',
        '<p>You may also catch the traditional horseback games that turn riding into sport: <em>kok-boru</em>, a fierce contest played with a goat carcass, and <em>kyz kuumai</em>, the “chase the girl” race. Travelling on horseback, even gently, plugs you straight into this living culture rather than observing it from a bus window. Your guide and the herders you meet along the way are the real introduction.</p>'
      ) },
      { h2: 'Song-Köl and the best routes', html: p(
        '<p><strong>Song-Köl</strong> is the classic, and rightly so. This vast alpine lake sits at just over 3,000 metres on a high plateau ringed by pasture, and in summer it fills with yurt camps and grazing herds. The ride up — typically two to three days from the valleys below — climbs through gorges and over a pass before the lake opens out in front of you. Nights are spent in herders’ yurts on the shore, under some of the clearest skies you will ever see.</p>',
        '<p>Other rewarding rides include the pastures around <strong>Jyrgalan</strong> in the east, the valleys near <strong>Kochkor</strong> (the usual gateway to Song-Köl), and routes linking to the turquoise lakes of the Tian Shan. Trips range from a half-day taster to week-long expeditions that cross several passes. We match the route to your time, fitness and appetite for remoteness.</p>'
      ) },
      { h2: 'Do you need riding experience?', html: p(
        '<p>No — and this surprises people. The hardy local horses are sure-footed and used to the terrain, and trips are paced for the group. Complete beginners can manage a gentle multi-day ride, especially with a guide who keeps the pace calm and gives a proper briefing on the first morning. If you have ridden before, you will simply enjoy more freedom to trot and canter across the open pasture.</p>',
        '<p>That said, honesty about your level helps us plan well. Long days in the saddle are tiring on muscles you did not know you had, and high passes demand a little nerve. We will be straight with you about which routes suit first-timers and which reward confident riders, and we can always arrange a support vehicle or a shorter day where it makes sense.</p>'
      ) },
      { h2: 'Yurt stays and what to expect', html: p(
        '<p>The reward at the end of each riding day is the yurt. These felt-and-wood tents are warm, surprisingly comfortable, and steeped in tradition — sleeping in one beside Song-Köl, with horses grazing outside and the Milky Way overhead, is the trip’s signature memory. Expect simple, hearty food, shared meals with the herder families, and basic facilities: this is the high pasture, not a hotel, and that is exactly the point.</p>',
        '<p>Bring layers for sharp temperature swings, sun protection for the altitude, and a sense of adventure. Nights get cold even in July, and mountain weather changes fast. A good guide carries the gear and local knowledge that keep it all comfortable rather than rough.</p>'
      ) },
      { h2: 'When to go', html: p(
        '<p>The horse-trekking season is short and tied to the pastures. The yurt camps at Song-Köl and other high jailoos are generally up from <strong>mid-June to early September</strong>, with July and August the most reliable months for warm days and open passes. Outside that window the herders descend to the valleys, the camps pack away, and snow can close the high routes entirely. For the wider seasonal picture across the region, see our guide to the <a href="/kazakhstan/best-time-to-visit/">best time to visit</a>.</p>'
      ) },
      { h2: 'Combine riding with trekking and the Silk Road', html: p(
        '<p>Horse trekking pairs naturally with hiking — many travellers spend a few days in the saddle and a few on foot. If you would rather walk the high routes, see our guide to <a href="/kyrgyzstan/trekking/">Kyrgyzstan trekking</a>. And because Kyrgyzstan borders both Kazakhstan and the Silk Road cities of Uzbekistan, a ride slots beautifully into a longer journey: open with the mountains and lakes around Almaty, ride at Song-Köl, then finish among the monuments of Samarkand and Bukhara. The <a href="/central-asia/itinerary/">Central Asia itinerary</a> shows how it all fits together.</p>',
        '<p>We build every ride into a private, guided trip — handling the horses, the herder hosts, the permits and the logistics so you can simply enjoy the saddle. Tell us your dates and riding experience, and we will shape a <a href="/kazakhstan-tours/">Central Asia tour</a> with horse trekking at its heart.</p>'
      ) },
    ],
    related: ['/kyrgyzstan/trekking/', '/central-asia/itinerary/', '/kazakhstan-tours/'],
  },

  // ───────────── Cluster D — Silk Road & Uzbekistan ─────────────
  {
    path: '/silk-road/guide/',
    category: 'Silk Road',
    title: 'The Silk Road: History, Routes & How to Travel It Today',
    h1: 'The Silk Road, Explained',
    description:
      'The Silk Road explained — its history and routes, the cities that survive (Samarkand, Bukhara, Khiva, Almaty), and how to travel the Silk Road across Central Asia today.',
    keywords: ['silk road history', 'ancient silk roads', 'origin of silk road'],
    intro: p(
      '<p>The <strong>Silk Road history</strong> spans two thousand years of trade ',
      'between East and West — and much of it still stands. This guide traces the ',
      'origin of the <strong>ancient silk roads</strong>, maps the main routes, and ',
      'shows which cities you can still walk through on a trip today.</p>'
    ),
    sections: [
      { h2: 'Origins of the Silk Road', html: '<p>How the network began and what actually moved along it.</p>' },
      { h2: 'The main routes', html: '<p>Northern and southern branches across Central Asia.</p>' },
      { h2: 'Cities that survive', html: '<p>Samarkand, Bukhara, Khiva and Kazakhstan’s Otrar — see <a href="/uzbekistan/samarkand-registan/">the Registan, Samarkand</a>.</p>' },
      { h2: 'How to travel the Silk Road today', html: '<p>Routes, timing and seasons — see <a href="/central-asia/itinerary/">Central Asia itinerary</a>.</p>' },
    ],
    related: ['/uzbekistan/samarkand-registan/', '/uzbekistan/best-time-to-visit/', '/central-asia/itinerary/', '/kazakhstan-tours/'],
  },
  {
    path: '/uzbekistan/best-time-to-visit/',
    category: 'Uzbekistan',
    title: 'Best Time to Visit Uzbekistan: Month-by-Month',
    h1: 'Best Time to Visit Uzbekistan',
    description:
      'The best time to visit Uzbekistan, month by month — spring and autumn sweet spots, summer desert heat, festivals and crowds, so you can plan a Silk Road trip.',
    keywords: ['best time to visit uzbekistan', 'best season to visit uzbekistan', 'best month to visit uzbekistan'],
    intro: p(
      '<p>The <strong>best time to visit Uzbekistan</strong> is spring (April–May) ',
      'or autumn (September–October), when the Silk Road cities are warm but not ',
      'scorching. This month-by-month guide covers weather, festivals and crowds ',
      'so you can pick the ideal <strong>season to visit Uzbekistan</strong>.</p>'
    ),
    sections: [
      { h2: 'Spring (April–May)', html: '<p>Mild, green and ideal for Samarkand and Bukhara.</p>' },
      { h2: 'Summer (June–August)', html: '<p>Desert heat — how to travel comfortably if you go.</p>' },
      { h2: 'Autumn (September–October)', html: '<p>The other sweet spot, with harvest and clear skies.</p>' },
      { h2: 'Festivals & month-by-month', html: '<p>Key events and a quick reference table.</p>' },
    ],
    related: ['/uzbekistan/samarkand-registan/', '/silk-road/guide/', '/central-asia/itinerary/', '/kazakhstan-tours/'],
  },
  {
    path: '/uzbekistan/samarkand-registan/',
    category: 'Uzbekistan',
    title: 'The Registan, Samarkand: A Visitor’s Guide',
    h1: 'The Registan of Samarkand',
    description:
      'A visitor’s guide to the Registan in Samarkand, Uzbekistan — the three madrasas, tickets and hours, nearby Shah-i-Zinda and Bukhara, and how it fits a Silk Road trip.',
    keywords: ['registan samarkand', 'samarkand tour', 'things to do bukhara'],
    intro: p(
      '<p>The <strong>Registan in Samarkand</strong> is the single most spectacular ',
      'square on the Silk Road — three towering madrasas in tilework of impossible ',
      'blue. This guide covers what you’re looking at, tickets and hours, and how a ',
      '<strong>Samarkand tour</strong> links to Bukhara and beyond.</p>'
    ),
    sections: [
      { h2: 'What the Registan is', html: '<p>The three madrasas and the story behind them.</p>' },
      { h2: 'Tickets, hours & best light', html: '<p>When to arrive, and the evening view worth waiting for.</p>' },
      { h2: 'Nearby: Shah-i-Zinda & Bibi-Khanym', html: '<p>The other Samarkand sights within walking distance.</p>' },
      { h2: 'Adding Bukhara & Khiva', html: '<p>Where to go next — see <a href="/silk-road/guide/">the Silk Road guide</a>.</p>' },
    ],
    related: ['/silk-road/guide/', '/uzbekistan/best-time-to-visit/', '/central-asia/itinerary/', '/kazakhstan-tours/'],
  },

  // ───────────── Cluster E — Central Asia umbrella ─────────────
  {
    path: '/central-asia/itinerary/',
    category: 'Central Asia',
    title: 'Central Asia Itinerary: 2–3 Week Silk Road & Mountains Route',
    h1: 'Central Asia Itinerary',
    description:
      'A Central Asia itinerary for 2–3 weeks — combine Kazakhstan, Kyrgyzstan and Uzbekistan, blending Silk Road cities with mountain trekking, with borders and logistics.',
    keywords: ['central asia itinerary', 'central asia travel itinerary', 'central asia travel'],
    intro: p(
      '<p>This <strong>Central Asia itinerary</strong> stitches the region’s three ',
      'highlights — Kazakhstan, Kyrgyzstan and Uzbekistan — into one 2–3 week trip, ',
      'blending Silk Road cities with mountain trekking. Here’s a route that works, ',
      'with borders, transport and timing for smooth <strong>Central Asia travel</strong>.</p>'
    ),
    sections: [
      { h2: 'The route at a glance', html: '<p>Kazakhstan → Kyrgyzstan → Uzbekistan, and why this order flows best.</p>' },
      { h2: 'Culture + adventure, combined', html: '<p>Pair <a href="/silk-road/guide/">Silk Road cities</a> with <a href="/kyrgyzstan/trekking/">Kyrgyzstan trekking</a>.</p>' },
      { h2: 'Borders & logistics', html: '<p>Crossings, transport and how much to pre-book.</p>' },
      { h2: 'Build it as a private trip', html: '<p>How we tailor the route to your dates and pace.</p>' },
    ],
    related: ['/silk-road/guide/', '/kyrgyzstan/trekking/', '/kazakhstan/itinerary/', '/kazakhstan-tours/'],
  },
];

// Quick lookup for related-link labels.
export const byPath = Object.fromEntries(guides.map((g) => [g.path, g]));

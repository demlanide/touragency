import { useState } from 'react';

const photos = {
  // ── Real Central Asia photos (Wikimedia Commons) ──────────────
  zenkov:   "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Zenkov_Cathedral%2C_Almaty.jpg/960px-Zenkov_Cathedral%2C_Almaty.jpg",
  koktobe:  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Sunset_over_the_Almaty_seen_from_Kok_Tobe_mountain%2C_pic_2.jpg/960px-Sunset_over_the_Almaty_seen_from_Kok_Tobe_mountain%2C_pic_2.jpg",
  charyn:   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Charyn_Canyon%2C_Kazakhstan_01.jpg/960px-Charyn_Canyon%2C_Kazakhstan_01.jpg",
  kolsai:   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Kolsai_lake.jpg/960px-Kolsai_lake.jpg",
  dune:     "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/210723_Altyn_Emel_Singing_Dune_valley.jpg/960px-210723_Altyn_Emel_Singing_Dune_valley.jpg",
  astana:   "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Astana-2021-10_-_12.jpg/960px-Astana-2021-10_-_12.jpg",
  registan: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/RegistanSquare_Samarkand.jpg/960px-RegistanSquare_Samarkand.jpg",
  bukhara:  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Po-i-Kalyan_in_Bukhara.jpg/960px-Po-i-Kalyan_in_Bukhara.jpg",
  songkul:  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hills_around_Song_K%C3%B6l_lake%2C_Kyrgyzstan%3B_Thomas_Depenbusch%3B_June_2012.jpg/960px-Hills_around_Song_K%C3%B6l_lake%2C_Kyrgyzstan%3B_Thomas_Depenbusch%3B_June_2012.jpg",
  issyk:    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Issyk_kul_Lake_1.jpg/960px-Issyk_kul_Lake_1.jpg",
  // ── Supporting landscape photos (Unsplash) ────────────────────
  valley:      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=82",
  lake:        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=760&q=82",
  desert:      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=760&q=82",
  forest:      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=760&q=82",
  ridge:       "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=760&q=82",
  group:       "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1100&q=82",
  gear:        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=760&q=82",
};

// ── Per-tour colors ────────────────────────────────────────────

const TOUR_COLORS = {
  "Almaty highlights":                        { bg: "#a8c4d8", text: "#0c3454" },
  "Almaty & Altyn-Emel desert":               { bg: "#dfc898", text: "#503c10" },
  "Almaty & Astana grand tour":               { bg: "#b4ccb8", text: "#1a3d25" },
  "Kazakhstan in depth":                      { bg: "#e8bf9c", text: "#5c3418" },
  "Kazakhstan, Kyrgyzstan & Uzbekistan":      { bg: "#c4b4d4", text: "#381848" },
};

const TOUR_SHORT = {
  "Almaty highlights":                        "Almaty",
  "Almaty & Altyn-Emel desert":               "Altyn-Emel",
  "Almaty & Astana grand tour":               "Astana",
  "Kazakhstan in depth":                      "Kazakhstan",
  "Kazakhstan, Kyrgyzstan & Uzbekistan":      "3 Countries",
};

const TOUR_TITLES = Object.keys(TOUR_COLORS);

// ── Day-by-day itineraries ─────────────────────────────────────

const TOUR_ITINERARIES = {
  "Almaty highlights": {
    style: "City & nature",
    groupSize: "6–8",
    days: [
      { day: 1, title: "Almaty city tour",        text: "Transfer from the airport to your central hotel. City sightseeing including Zenkov Cathedral, the Medeu skating rink and Shymbulak resort, finishing with sunset at Kok-Tobe (weather permitting).", photo: photos.zenkov },
      { day: 2, title: "Kolsai, Black & Charyn",   text: "Full day to the national parks of the Almaty region (around 300 km one way): Kolsai lake, the Black canyon and Charyn canyon — the famous Valley of Castles.", photo: photos.charyn },
      { day: 3, title: "Issyk, Turgen & Golden Man", text: "Trip to Issyk town and the Turgen gorge in the Ile-Alatau national park. Issyk museum and the Golden Man history, a trout-farm lunch (optional) and Issyk lake.", photo: photos.kolsai },
      { day: 4, title: "Almarasan & departure",    text: "Almarasan gorge and the Ayusai visitor centre with a light hike to the Ayusai waterfall. Back to the city for Art Almaty and shopping at the Green Bazaar, then airport transfer.", photo: photos.valley },
    ],
  },

  "Almaty & Altyn-Emel desert": {
    style: "Nature & desert",
    groupSize: "6–8",
    days: [
      { day: 1, title: "Almaty city tour",        text: "Transfer from the airport to your central hotel. City sightseeing including Zenkov Cathedral, Medeu and Shymbulak, with sunset at Kok-Tobe (weather permitting).", photo: photos.zenkov },
      { day: 2, title: "Kolsai, Black & Charyn",   text: "Full day to the national parks of the Almaty region (around 350 km one way): Kolsai lake, the Black canyon and the Charyn Valley of Castles.", photo: photos.charyn },
      { day: 3, title: "Issyk, Turgen & Golden Man", text: "Issyk town and the Turgen gorge in the Ile-Alatau national park: Issyk museum and the Golden Man, an optional trout-farm lunch and Issyk lake.", photo: photos.kolsai },
      { day: 4, title: "Altyn-Emel Singing Dune",  text: "Drive to the Altyn-Emel national park (around 400 km one way). Visit of the famous Singing Dune and an overnight stay in Basshy village.", photo: photos.dune },
      { day: 5, title: "Aktau & Katytau mountains", text: "Trip to the coloured chalk mountains of Aktau and Katytau (another 200 km one way from Basshy), then the drive back towards the city.", photo: photos.desert },
      { day: 6, title: "Almarasan & departure",    text: "Almarasan gorge and the Ayusai centre with a light hike to the waterfall. Art Almaty and Green Bazaar shopping, then airport transfer.", photo: photos.valley },
    ],
  },

  "Almaty & Astana grand tour": {
    style: "City & culture",
    groupSize: "6–8",
    days: [
      { day: 1, title: "Almaty city tour",        text: "Transfer from the airport to your hotel in Almaty. City sightseeing including Zenkov Cathedral, Medeu and Shymbulak, with sunset at Kok-Tobe (weather permitting).", photo: photos.zenkov },
      { day: 2, title: "Kolsai, Black & Charyn",   text: "Full day to the national parks of the Almaty region (around 350 km one way): Kolsai lake, the Black canyon and the Charyn Valley of Castles.", photo: photos.charyn },
      { day: 3, title: "Issyk, Turgen & Golden Man", text: "Issyk town and the Turgen gorge: Issyk museum and the Golden Man history, an optional trout-farm lunch and Issyk lake.", photo: photos.kolsai },
      { day: 4, title: "Fly to Astana",            text: "Morning flight from Almaty to the capital Astana (around 2 hours), accompanied by a Global Nomad team member. Lunch, afternoon Astana sightseeing and dinner before the hotel.", photo: photos.astana },
      { day: 5, title: "Burabay resort",           text: "Transfer from Astana to the magnificent Burabay resort (257 km, about 3 hours), with its lakes and rock formations including Borovoe lake. Lunch and dinner at local cafés.", photo: photos.lake },
      { day: 6, title: "Burabay & flight back",    text: "Morning sightseeing and local museums at Burabay, then back through Shuchinsk to Astana airport for the evening flight to Almaty.", photo: photos.forest },
      { day: 7, title: "Almarasan & departure",    text: "Almarasan gorge and the Ayusai centre with a light hike to the waterfall. Art Almaty and Green Bazaar shopping, then airport transfer.", photo: photos.valley },
    ],
  },

  "Kazakhstan in depth": {
    style: "Grand tour",
    groupSize: "6–8",
    days: [
      { day: 1,  title: "Almaty arrival",          text: "Transfer to your central hotel and an introduction to Almaty: Zenkov Cathedral, Panfilov Park and the Green Bazaar.", photo: photos.zenkov },
      { day: 2,  title: "Kok-Tobe & the resorts",  text: "Cable cars and mountain resorts above the city — Medeu, Shymbulak and the panorama from Kok-Tobe.", photo: photos.koktobe },
      { day: 3,  title: "Big Almaty Lake",         text: "A day in the Ile-Alatau national park around the turquoise Big Almaty Lake beneath the peaks.", photo: photos.valley },
      { day: 4,  title: "Charyn canyon",           text: "The Valley of Castles and the Charyn river gorge — the most dramatic landscape near Almaty.", photo: photos.charyn },
      { day: 5,  title: "Kolsai & Kaindy lakes",   text: "The mountain lakes near the Kyrgyz border, including the sunken forest of Lake Kaindy.", photo: photos.kolsai },
      { day: 6,  title: "Issyk & Turgen",          text: "The Golden Man museum, the Turgen waterfalls and Issyk lake in the Ile-Alatau foothills.", photo: photos.lake },
      { day: 7,  title: "Altyn-Emel Singing Dune", text: "Drive into the Altyn-Emel national park; the Singing Dune and an overnight in Basshy village.", photo: photos.dune },
      { day: 8,  title: "Aktau & Katytau",         text: "The coloured chalk mountains of Aktau and Katytau, then back across the steppe.", photo: photos.desert },
      { day: 9,  title: "Tamgaly petroglyphs",     text: "Ancient rock carvings on the open steppe — a UNESCO site of Bronze-Age art.", photo: photos.ridge },
      { day: 10, title: "Turkestan",               text: "Travel to Turkestan and the mausoleum of Khoja Ahmed Yasawi, one of Central Asia's great Silk Road monuments." },
      { day: 11, title: "Fly to Astana",           text: "Flight to the capital and an afternoon of Astana sightseeing along the Esil river.", photo: photos.astana },
      { day: 12, title: "Burabay resort",          text: "Transfer to Burabay (Borovoe) for its lakes, pine forests and rock formations.", photo: photos.lake },
      { day: 13, title: "Burabay & back to Astana", text: "Local museums and Borovoe lake, then back through Shuchinsk towards Astana." , photo: photos.forest },
      { day: 14, title: "Departure",               text: "Morning transfer to the airport for your onward flight, or a connection back to Almaty." },
    ],
  },

  "Kazakhstan, Kyrgyzstan & Uzbekistan": {
    style: "Silk Road",
    groupSize: "6–8",
    days: [
      { day: 1,  title: "Almaty arrival & city",   text: "Transfer to your hotel and a city tour: Zenkov Cathedral, Medeu, Shymbulak and sunset at Kok-Tobe.", photo: photos.zenkov },
      { day: 2,  title: "Charyn & Kolsai",         text: "The Charyn Valley of Castles and the forested mountain lake of Kolsai near the Kyrgyz border.", photo: photos.charyn },
      { day: 3,  title: "Into Kyrgyzstan",         text: "Cross the border to Lake Issyk-Kul and the lakeside town of Karakol beneath the Tian Shan.", photo: photos.issyk },
      { day: 4,  title: "Song-Kol lake",           text: "Drive up to the high alpine lake of Song-Kol and an overnight yurt stay with herder families.", photo: photos.songkul },
      { day: 5,  title: "Bishkek",                 text: "The Ala-Archa gorge and the parks and bazaars of Bishkek, the Kyrgyz capital." },
      { day: 6,  title: "Fly to Uzbekistan",       text: "Flight to Tashkent — the old town, the Khast-Imam complex and the Chorsu bazaar." },
      { day: 7,  title: "Samarkand",               text: "Travel to Samarkand for the Registan square and the Gur-Emir mausoleum of Tamerlane.", photo: photos.registan },
      { day: 8,  title: "Samarkand to Bukhara",    text: "Shah-i-Zinda and Bibi-Khanym, then transfer across the steppe to ancient Bukhara." },
      { day: 9,  title: "Bukhara old town",        text: "The Po-i-Kalyan complex, the Lyabi-Hauz and the trading domes of the old city.", photo: photos.bukhara },
      { day: 10, title: "Departure",               text: "Free morning in Bukhara, then transfer to the airport for your onward flight." },
    ],
  },
};

// ── Landing page tour data ─────────────────────────────────────

const popularTours = [
  {
    country: "Kazakhstan", title: "Almaty highlights",
    days: 4, price: 2400,
    lead: "Almaty, the mountain resorts, Charyn canyon and the Golden Man over four easy days.",
    description: "A relaxed first taste of Kazakhstan: the city of Almaty, the Medeu and Shymbulak resorts, Charyn canyon and the lakes — with a comfortable central hotel and breakfast included.",
    image: photos.zenkov,  imageAlt: "The colourful domes of Zenkov Cathedral in Almaty",
    sideImage: photos.koktobe, sideImageAlt: "View over Almaty at sunset from Kok-Tobe",
  },
  {
    country: "Kazakhstan", title: "Almaty & Altyn-Emel desert",
    days: 6, price: 3000,
    lead: "Add the Singing Dune and the coloured Aktau mountains to the Almaty highlights.",
    description: "Six days that pair the city and canyons of the Almaty region with the desert of the Altyn-Emel national park — the Singing Dune, the chalk mountains and a night in Basshy village.",
    image: photos.dune, imageAlt: "The Singing Dune in the Altyn-Emel national park",
    sideImage: photos.charyn, sideImageAlt: "Red rock formations of Charyn canyon",
  },
  {
    country: "Kazakhstan", title: "Almaty & Astana grand tour",
    days: 7, price: 4000,
    lead: "Almaty, the canyons, then a flight to the capital Astana and the Burabay resort.",
    description: "The full Kazakhstan introduction: the Almaty region and its parks, then a flight north to modern Astana and the lakes and rocks of the Burabay resort, with flights and hotels arranged.",
    image: photos.astana, imageAlt: "The modern skyline of Astana, the capital of Kazakhstan",
    sideImage: photos.lake, sideImageAlt: "A clear mountain lake in the morning light",
  },
  {
    country: "Kazakhstan", title: "Kazakhstan in depth",
    days: 14, price: null,
    lead: "Two weeks across Kazakhstan — Almaty, the lakes, the desert, Turkestan and Astana.",
    description: "Our most complete Kazakhstan journey: the mountains and lakes around Almaty, Charyn canyon, the Altyn-Emel desert, the Silk Road city of Turkestan and the capital Astana with the Burabay resort.",
    image: photos.kolsai, imageAlt: "Kolsai mountain lake surrounded by forested slopes",
    sideImage: photos.dune, sideImageAlt: "Sand dunes in the Altyn-Emel desert",
  },
  {
    country: "Central Asia", title: "Kazakhstan, Kyrgyzstan & Uzbekistan",
    days: 10, price: null,
    lead: "Three countries in ten days — Almaty, Song-Kol, Samarkand and Bukhara.",
    description: "A Silk Road loop that links the canyons of Kazakhstan, the alpine lakes and yurts of Kyrgyzstan and the tiled cities of Uzbekistan — Samarkand and Bukhara — in a single comfortable trip.",
    image: photos.registan, imageAlt: "The Registan square in Samarkand, Uzbekistan",
    sideImage: photos.bukhara, sideImageAlt: "The Po-i-Kalyan complex in Bukhara",
  },
];

const keyFactors = [
  { title: "Everything handled",     text: "We arrange central hotels, a comfortable car with a driver, guides, park fees and museum and cable-car tickets — you simply travel." },
  { title: "Silk Road & wild nature", text: "Our routes move from Almaty and the Silk Road cities to Charyn canyon, mountain lakes, singing dunes and modern Astana." },
  { title: "Small private groups",   text: "Tours run as private trips for small groups of 6–8 travellers, so the pace stays comfortable and the days feel personal." },
  { title: "Local guides & comfort", text: "English-speaking local guides, 3-star central hotels, water and snacks in the car, and breakfast included every day." },
];

const tripStyles = [
  { title: "City & culture tours", image: photos.zenkov,   imageAlt: "Zenkov Cathedral in Almaty" },
  { title: "Nature & national parks", image: photos.charyn, imageAlt: "Charyn canyon in Kazakhstan" },
  { title: "Silk Road journeys",   image: photos.registan, imageAlt: "Registan square in Samarkand" },
];

// ── Tour schedule (April – September 2026) ─────────────────────
// Note: the booking calendar is hidden for now; this data is kept
// so the schedule can be switched back on later.

const tourSchedule = [
  { tourTitle: "Almaty highlights",                   country: "Kazakhstan",   price: 2400, start: "2026-05-09", end: "2026-05-12", days: 4,  spots: 8 },
  { tourTitle: "Almaty highlights",                   country: "Kazakhstan",   price: 2400, start: "2026-07-11", end: "2026-07-14", days: 4,  spots: 8 },
  { tourTitle: "Almaty highlights",                   country: "Kazakhstan",   price: 2400, start: "2026-09-12", end: "2026-09-15", days: 4,  spots: 8 },
  { tourTitle: "Almaty & Altyn-Emel desert",          country: "Kazakhstan",   price: 3000, start: "2026-05-16", end: "2026-05-21", days: 6,  spots: 8 },
  { tourTitle: "Almaty & Altyn-Emel desert",          country: "Kazakhstan",   price: 3000, start: "2026-08-15", end: "2026-08-20", days: 6,  spots: 8 },
  { tourTitle: "Almaty & Astana grand tour",          country: "Kazakhstan",   price: 4000, start: "2026-06-13", end: "2026-06-19", days: 7,  spots: 8 },
  { tourTitle: "Almaty & Astana grand tour",          country: "Kazakhstan",   price: 4000, start: "2026-08-22", end: "2026-08-28", days: 7,  spots: 8 },
  { tourTitle: "Kazakhstan in depth",                 country: "Kazakhstan",   price: null, start: "2026-06-06", end: "2026-06-19", days: 14, spots: 8 },
  { tourTitle: "Kazakhstan in depth",                 country: "Kazakhstan",   price: null, start: "2026-09-05", end: "2026-09-18", days: 14, spots: 8 },
  { tourTitle: "Kazakhstan, Kyrgyzstan & Uzbekistan", country: "Central Asia", price: null, start: "2026-07-04", end: "2026-07-13", days: 10, spots: 8 },
  { tourTitle: "Kazakhstan, Kyrgyzstan & Uzbekistan", country: "Central Asia", price: null, start: "2026-09-19", end: "2026-09-28", days: 10, spots: 8 },
];

// ── Calendar helpers ───────────────────────────────────────────

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_LABELS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

function parseDate(s) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function fmtDate(s) {
  const [, m, d] = s.split('-');
  const mo = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${parseInt(d)} ${mo[parseInt(m) - 1]}`;
}

function buildWeeks(year, mo) {
  const firstDow = (new Date(year, mo, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, mo + 1, 0).getDate();
  const days = [
    ...Array(firstDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, mo, i + 1)),
  ];
  while (days.length % 7) days.push(null);
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  return weeks;
}

function getWeekEvents(weekDays, activeTours) {
  const nonNull = weekDays.filter(Boolean);
  if (!nonNull.length) return [];
  const wStart = nonNull[0];
  const wEnd   = nonNull[nonNull.length - 1];

  const withCols = activeTours
    .filter(t => parseDate(t.start) <= wEnd && parseDate(t.end) >= wStart)
    .map(tour => {
      const tStart = parseDate(tour.start);
      const tEnd   = parseDate(tour.end);
      let colStart = -1, colEnd = -1;
      weekDays.forEach((d, i) => {
        if (d && d >= tStart && d <= tEnd) {
          if (colStart < 0) colStart = i;
          colEnd = i;
        }
      });
      return {
        tour, colStart, colEnd,
        colSpan:    colEnd - colStart + 1,
        roundLeft:  +tStart >= +wStart,
        roundRight: +tEnd   <= +wEnd,
      };
    })
    .filter(e => e.colStart >= 0)
    .sort((a, b) => a.colStart - b.colStart || b.colSpan - a.colSpan);

  const laneEnds = [];
  return withCols.map(ev => {
    let lane = laneEnds.findIndex(endCol => endCol < ev.colStart);
    if (lane < 0) lane = laneEnds.length;
    laneEnds[lane] = ev.colEnd;
    return { ...ev, lane };
  });
}

function nearestTourMonth(titleSet) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const starts = tourSchedule.filter(t => titleSet.has(t.tourTitle)).map(t => parseDate(t.start));
  const upcoming = starts.filter(d => d >= today).sort((a, b) => a - b);
  const target   = upcoming.length ? upcoming[0] : starts.sort((a, b) => b - a)[0];
  return target ? new Date(target.getFullYear(), target.getMonth(), 1) : new Date(2026, 4, 1);
}

// ── Week row ───────────────────────────────────────────────────

function WeekRow({ weekDays, weekEvents, selectedTour, onTourClick }) {
  return (
    <div className="cal-week-row">
      {weekDays.map((day, col) => (
        <div key={col} className={`cal-day-cell${!day ? ' is-filler' : ''}`}
          style={{ gridColumn: col + 1, gridRow: 1 }}>
          {day && <span className="cal-dn">{day.getDate()}</span>}
        </div>
      ))}
      {weekEvents.map(({ tour, lane, colStart, colSpan, roundLeft, roundRight }) => {
        const c = TOUR_COLORS[tour.tourTitle] ?? { bg: '#ccc', text: '#333' };
        const r = `${roundLeft ? 3 : 0}px ${roundRight ? 3 : 0}px ${roundRight ? 3 : 0}px ${roundLeft ? 3 : 0}px`;
        return (
          <button
            key={tour.start + tour.tourTitle}
            className={`cal-event-bar${selectedTour === tour ? ' is-sel' : ''}`}
            style={{ gridColumn: `${colStart + 1} / span ${colSpan}`, gridRow: lane + 2, background: c.bg, color: c.text, borderRadius: r }}
            onClick={() => onTourClick(tour)}
            title={`${tour.tourTitle} · ${fmtDate(tour.start)} – ${fmtDate(tour.end)}`}
          >
            {TOUR_SHORT[tour.tourTitle] ?? tour.tourTitle}
          </button>
        );
      })}
    </div>
  );
}

// ── Booking calendar modal (hidden for now) ────────────────────

function TourCalendarModal({ onClose, initialTour }) {
  const initFilters = initialTour ? new Set([initialTour]) : new Set(TOUR_TITLES);
  const [filters,   setFilters]  = useState(initFilters);
  const [month,     setMonth]    = useState(() => nearestTourMonth(initFilters));
  const [selected,  setSelected] = useState(null);
  const [submitted, setSubmitted]= useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', travelers: '1', notes: '' });

  const year = month.getFullYear();
  const mo   = month.getMonth();
  const isOffSeason   = year > 2026 || mo > 8;
  const weeks         = buildWeeks(year, mo);
  const filteredTours = tourSchedule.filter(t => filters.has(t.tourTitle));

  function toggleFilter(title) {
    const next = new Set(filters);
    if (next.has(title) && next.size > 1) next.delete(title);
    else next.add(title);
    setFilters(next);
    setMonth(nearestTourMonth(next));
    setSelected(null);
  }

  function shiftMonth(delta) { setMonth(new Date(year, mo + delta, 1)); setSelected(null); }

  function pickTour(t) {
    setSelected(t); setSubmitted(false);
    setForm({ name: '', email: '', phone: '', travelers: '1', notes: '' });
  }

  function handleBackdrop(e) { if (e.target === e.currentTarget) onClose(); }

  return (
    <div className="cal-overlay" onClick={handleBackdrop} role="dialog" aria-modal="true">
      <div className="cal-modal">
        <div className="cal-header">
          <span className="cal-title">Tour Schedule 2026</span>
          <div className="cal-chips">
            {TOUR_TITLES.map(title => {
              const c = TOUR_COLORS[title]; const on = filters.has(title);
              return (
                <button key={title} className={`cal-chip${on ? ' is-on' : ''}`}
                  style={on ? { background: c.bg, color: c.text } : {}}
                  onClick={() => toggleFilter(title)}>
                  {TOUR_SHORT[title]}
                </button>
              );
            })}
          </div>
          <button className="cal-close" onClick={onClose}>Close ×</button>
        </div>

        <div className="cal-body">
          <div className="cal-left">
            <div className="cal-nav">
              <button className="cal-nav-btn" onClick={() => shiftMonth(-1)}>← <span>prev</span></button>
              <span className="cal-month-name">{MONTH_NAMES[mo]} {year}</span>
              <button className="cal-nav-btn" onClick={() => shiftMonth(1)}><span>next</span> →</button>
            </div>

            {isOffSeason ? (
              <div className="cal-off-season">
                <p className="cal-os-eyebrow">2026 season</p>
                <h3 className="cal-os-heading">Schedule<br />Apr — Sep</h3>
                <div className="cal-os-rule" />
                <p className="cal-os-next">2027 departures<br />being planned</p>
                <button className="text-link" type="button" onClick={onClose}>
                  Get in touch <span aria-hidden="true">-&gt;</span>
                </button>
              </div>
            ) : (
              <>
                <div className="cal-dow-row">
                  {DAY_LABELS.map(d => <div key={d} className="cal-dow">{d}</div>)}
                </div>
                {weeks.map((weekDays, wi) => (
                  <WeekRow key={wi} weekDays={weekDays}
                    weekEvents={getWeekEvents(weekDays, filteredTours)}
                    selectedTour={selected} onTourClick={pickTour} />
                ))}
              </>
            )}
          </div>

          <div className="cal-right">
            {!selected && <p className="cal-hint">Select a departure<br />to request a spot</p>}

            {selected && !submitted && (
              <>
                <div className="cal-tour-info" style={{ borderLeftColor: TOUR_COLORS[selected.tourTitle]?.bg }}>
                  <span className="cal-tour-country">{selected.country}</span>
                  <h3 className="cal-tour-title">{selected.tourTitle}</h3>
                  <p className="cal-tour-dates">{fmtDate(selected.start)} — {fmtDate(selected.end)}</p>
                  <p className="cal-tour-meta">{selected.days} days · {selected.spots} spots left</p>
                  <p className="cal-tour-price">{selected.price ? `$${selected.price.toLocaleString('en-US')}` : 'On request'}<span>{selected.price ? ' / person' : ' / tailored'}</span></p>
                </div>
                <form className="cal-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <label><span>Your name</span><input required type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} /></label>
                  <label><span>Email</span><input required type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} /></label>
                  <label><span>Phone</span><input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} /></label>
                  <label><span>Travelers</span><input type="number" min="1" max={selected.spots} value={form.travelers} onChange={e => setForm(p => ({ ...p, travelers: e.target.value }))} /></label>
                  <label><span>Notes</span><textarea rows={2} value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} /></label>
                  <button className="text-link cal-submit" type="submit">Reserve a spot <span aria-hidden="true">-&gt;</span></button>
                </form>
              </>
            )}

            {selected && submitted && (
              <div className="cal-success">
                <span className="cal-success-tag">Sent</span>
                <h3>Request received</h3>
                <p>We'll reach out within 24 hours to confirm your place on the <strong>{fmtDate(selected.start)}</strong> {selected.tourTitle}.</p>
                <button className="text-link" onClick={() => { setSubmitted(false); setSelected(null); }}>
                  Browse more dates <span aria-hidden="true">-&gt;</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Tour detail modal ──────────────────────────────────────────

function TourDetailModal({ tour, onClose, onPlanTour }) {
  const itin  = TOUR_ITINERARIES[tour.title];
  const color = TOUR_COLORS[tour.title];

  function handleBackdrop(e) { if (e.target === e.currentTarget) onClose(); }

  return (
    <div className="tmodal-overlay" onClick={handleBackdrop} role="dialog" aria-modal="true" aria-label={tour.title}>
      <div className="tmodal">

        {/* Header */}
        <div className="tmodal-bar">
          <div className="tmodal-bar-left">
            <span className="tmodal-eyebrow">{tour.country}</span>
            <h2 className="tmodal-title">{tour.title}</h2>
          </div>
          <button className="tmodal-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {/* Hero */}
        <img className="tmodal-hero" src={tour.image} alt={tour.imageAlt} />

        {/* Stats */}
        <div className="tmodal-stats">
          <div className="tmodal-stat">
            <strong>{tour.days}</strong><span>Days</span>
          </div>
          <div className="tmodal-stat">
            <strong>{tour.price ? `$${tour.price.toLocaleString('en-US')}` : 'On request'}</strong><span>{tour.price ? 'Per person' : 'Pricing'}</span>
          </div>
          <div className="tmodal-stat">
            <strong>{itin?.groupSize ?? '6–8'}</strong><span>Group size</span>
          </div>
          <div className="tmodal-stat" style={{ borderLeftColor: color?.bg }}>
            <strong>{itin?.style ?? '—'}</strong><span>Style</span>
          </div>
        </div>

        {/* Body */}
        <div className="tmodal-body">

          {/* Left: overview + CTA */}
          <div className="tmodal-left">
            <p className="tmodal-lead">{tour.lead}</p>
            <p className="tmodal-desc">{tour.description}</p>
            <button
              className="text-link tmodal-plan-btn" type="button"
              onClick={() => { onClose(); onPlanTour(tour.title); }}
            >
              Plan this tour <span aria-hidden="true">-&gt;</span>
            </button>
          </div>

          {/* Right: itinerary */}
          <div className="tmodal-right">
            <p className="tmodal-section-label">Day by day</p>
            {(itin?.days ?? []).map(day => (
              <div key={day.day} className="tmodal-day">
                <span className="tmodal-day-num">Day {day.day}</span>
                <div className="tmodal-day-content">
                  <h4 className="tmodal-day-title">{day.title}</h4>
                  <p className="tmodal-day-text">{day.text}</p>
                  {day.photo && (
                    <img className="tmodal-day-photo" src={day.photo} alt={day.title} loading="lazy" />
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Site components ────────────────────────────────────────────

function Header({ onPlanTour }) {
  return (
    <header className="site-header" aria-label="Main navigation">
      <a className="brand" href="/">global nomad</a>
      <nav>
        <a href="#factors">Why us</a>
        <a href="#tours">Tours</a>
        <a href="#trip-styles">Tour styles</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="reserve-link" type="button" onClick={onPlanTour}>
        Plan a tour <span aria-hidden="true">-&gt;</span>
      </button>
      <button className="menu-button" type="button" aria-label="Open menu">
        <span /><span />
      </button>
    </header>
  );
}

function PopularTour({ tour, index, total, onPlanTour, onViewDetail }) {
  const tourNumber = index + 1;
  const titleId    = `popular-tour-${tourNumber}`;
  const isFirst    = index === 0;
  const color      = TOUR_COLORS[tour.title];

  return (
    <article className="tour-item" aria-labelledby={titleId}>
      <div className="tour-meta-row" aria-label="Tour meta">
        {isFirst ? (
          <><span>{tour.country}</span><span>[ {total} tours ]</span></>
        ) : (
          <><span aria-hidden="true" /><span aria-hidden="true" /></>
        )}
        <span>Tour {tourNumber}/{total}</span>
      </div>

      <div className="tour-showcase">
        <button className="tour-photo-btn" type="button" onClick={() => onViewDetail(tour)} aria-label={`View ${tour.title} itinerary`}>
          <img className="tour-main-photo" src={tour.image} alt={tour.imageAlt} />
          <span className="tour-photo-hover">View itinerary</span>
        </button>

        <div className="tour-copy">
          <h3 id={titleId}>{tour.title}</h3>
          <p className="tour-lead">{tour.lead}</p>
          <p>{tour.description}</p>

          <div className="tour-price">
            {color && <span className="tour-color-tag" style={{ background: color.bg }} aria-hidden="true" />}
            <strong>{tour.price ? `$${tour.price.toLocaleString('en-US')}` : 'On request'}</strong>
            <span>{tour.days} days · {tour.price ? 'per person' : 'tailored itinerary'}</span>
          </div>

          <div className="tour-actions">
            <button className="text-link" type="button" onClick={() => onViewDetail(tour)}>
              Full itinerary <span aria-hidden="true">-&gt;</span>
            </button>
            <button className="text-link" type="button" onClick={() => onPlanTour(tour.title)}>
              Plan this tour <span aria-hidden="true">-&gt;</span>
            </button>
          </div>
        </div>

        <img className="tour-side-photo" src={tour.sideImage} alt={tour.sideImageAlt} />
      </div>
    </article>
  );
}

function KeyFactors({ onPlanTour }) {
  return (
    <section className="screen factors-screen" aria-labelledby="factors-title" id="factors">
      <Header onPlanTour={onPlanTour} />
      <div className="factors-layout">
        <span className="page-index factors-index">[ 03 ]</span>
        <div className="factors-title-block">
          <h2 id="factors-title"><span>Four</span><span>Key factors</span></h2>
          <p>Built around comfort, culture, wild nature and small private groups</p>
        </div>
        <div className="factors-list">
          {keyFactors.map((factor, i) => (
            <article className="factor-item" key={factor.title}>
              <span>{i + 1}/</span><h3>{factor.title}</h3><p>{factor.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TripStyles() {
  return (
    <section className="screen trip-styles-screen" aria-labelledby="trip-styles-title" id="trip-styles">
      <div className="trip-styles-heading">
        <h2 id="trip-styles-title">Tour styles</h2>
        <span className="page-index">[ 04 ]</span>
      </div>
      <p className="trip-styles-copy">
        <span>For people</span><span>who want</span><span>cities,</span>
        <span>nature,</span><span>we have</span><span>a tour</span><span>that fits</span>
      </p>
      <div className="trip-style-cards">
        {tripStyles.map(style => (
          <article className="trip-style-card" key={style.title}>
            <h3>{style.title}</h3>
            <img src={style.image} alt={style.imageAlt} />
          </article>
        ))}
      </div>
      <a className="text-link trip-styles-link" href="#tours">
        Explore tour styles <span aria-hidden="true">-&gt;</span>
      </a>
    </section>
  );
}

function SafetyQuality() {
  return (
    <section className="screen safety-screen" aria-labelledby="safety-title" id="safety">
      <span className="page-index safety-index">[ 05 ]</span>
      <h2 id="safety-title">For us the comfort of the journey is only second to your safety.</h2>
      <a className="text-link safety-link" href="#contact">Talk to a planner <span aria-hidden="true">-&gt;</span></a>
      <p className="safety-copy">We plan Central Asia tours with careful pacing, trusted local guides and comfortable hotels — so the region opens up without the stress.</p>
      <img className="safety-photo" src={photos.group} alt="Travellers together on a Central Asia tour" />
    </section>
  );
}

function PlanningContact() {
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setError('');
    setSubmitting(true);

    const fd = new FormData(e.target);
    const payload = {
      name:   fd.get('name'),
      dates:  fd.get('date'),
      email:  fd.get('email'),
      phone:  fd.get('phone'),
      source: 'planning-form',
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setSent(true);
    } catch (err) {
      setError(err.message || 'Could not send your request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="screen planning-screen" aria-labelledby="planning-title" id="contact">
        <div className="planning-head">
          <h2 id="planning-title">Are you planning a Central Asia tour?</h2>
          <span className="page-index">[ 06 ]</span>
        </div>
        <div className="planning-intro">
          <img src={photos.kolsai} alt="A traveller beside a mountain lake in Kazakhstan" />
          <p>Share your dates and we'll plan a unique tour just for you — a private route through Almaty, the mountains, the desert parks and the Silk Road cities, built around what you want to see</p>
        </div>

        {sent ? (
          <div className="planning-success">
            <p className="planning-success-tag">Sent</p>
            <h3>Request received</h3>
            <p>We'll reach out within 24 hours with a route proposal tailored to your dates.</p>
          </div>
        ) : (
          <form className="planning-form" onSubmit={handleSubmit}>
            <label><span>Hello, my name is</span><input name="name" type="text" aria-label="Your name" /></label>
            <label><span>My travel dates are</span><input name="date" type="text" aria-label="Approximate date" /></label>
            <label><span>My email address is</span><input name="email" type="email" aria-label="Email address" /></label>
            <label><span>My contact number is</span><input name="phone" type="tel" aria-label="Contact number" /></label>
            <button className="text-link" type="submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send tour request'} <span aria-hidden="true">-&gt;</span>
            </button>
            {error && <p className="planning-error" role="alert">{error}</p>}
          </form>
        )}
      </section>

      <footer className="site-footer" aria-label="Footer">
        <div className="footer-top">
          <a className="brand" href="/">global nomad</a>
          <a href="#top">Menu</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Global Nomad. Private tours across Central Asia</span>
          <a href="#cookies">Cookies policy</a>
          <a href="#privacy">Privacy policy</a>
        </div>
      </footer>
    </>
  );
}

// ── App ────────────────────────────────────────────────────────

export default function App() {
  const [calOpen,    setCalOpen]    = useState(false);
  const [calTour,    setCalTour]    = useState(null);
  const [detailTour, setDetailTour] = useState(null);

  // The booking calendar is hidden for now — "Plan a tour" buttons
  // scroll to the contact form instead of opening the calendar modal.
  function openPlan(tourTitle) {
    setCalTour(typeof tourTitle === 'string' ? tourTitle : null);
    const el = typeof document !== 'undefined' && document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  function closeCal()       { setCalOpen(false); setCalTour(null); }
  function openDetail(tour) { setDetailTour(tour); }
  function closeDetail()    { setDetailTour(null); }

  return (
    <main className="stage">
      {/* Calendar kept but hidden (calOpen stays false). Re-enable by
          setting calOpen in openPlan to show TourCalendarModal again. */}
      {calOpen    && <TourCalendarModal onClose={closeCal} initialTour={calTour} />}
      {detailTour && <TourDetailModal tour={detailTour} onClose={closeDetail} onPlanTour={openPlan} />}

      <div className="site-canvas">
        <section className="screen hero-screen" aria-labelledby="hero-title">
          <Header onPlanTour={openPlan} />
          <div className="hero-composition">
            <img className="hero-photo hero-photo-hikers" src={photos.charyn} alt="Red rock formations of Charyn canyon in Kazakhstan" />
            <h1 id="hero-title" className="hero-title">
              <span>Central</span><span>Asia</span><span>Tours</span>
            </h1>
            <span className="page-index hero-index">[ 01 ]</span>
            <p className="challenge-copy">Discover Central Asia on a private guided tour</p>
            <img className="hero-photo hero-photo-trail" src={photos.kolsai} alt="Kolsai mountain lake surrounded by forest" />
            <img className="hero-photo hero-photo-tent"  src={photos.registan}  alt="Registan square in Samarkand, Uzbekistan" />
            <div className="hero-stat">
              <strong>50+</strong><span>Destinations across the region</span>
            </div>
            <button className="text-link hero-cta" type="button" onClick={openPlan}>
              Plan a tour <span aria-hidden="true">-&gt;</span>
            </button>
            <img className="hero-photo hero-photo-gear" src={photos.zenkov} alt="Zenkov Cathedral in Almaty" />
            <p className="intro-copy">
              Private guided tours across Kazakhstan, Kyrgyzstan and Uzbekistan:
              Almaty and Astana, Charyn canyon, mountain lakes, singing dunes and Silk Road cities.
            </p>
          </div>
        </section>

        <section className="screen tours-screen" id="tours" aria-labelledby="tours-title">
          <div className="section-title-row">
            <h2 id="tours-title">Popular Central Asia tours</h2>
            <span className="page-index">[ 02 ]</span>
          </div>
          <div className="tour-stack" aria-label="Popular tours list">
            {popularTours.map((tour, index) => (
              <PopularTour
                key={tour.title}
                tour={tour} index={index} total={popularTours.length}
                onPlanTour={openPlan}
                onViewDetail={openDetail}
              />
            ))}
          </div>
        </section>

        <KeyFactors onPlanTour={openPlan} />
        <TripStyles />
        <SafetyQuality />
        <PlanningContact />
      </div>
    </main>
  );
}

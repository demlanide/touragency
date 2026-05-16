import { useState } from 'react';

const photos = {
  hikers:      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=700&q=82",
  trail:       "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=900&q=82",
  tent:        "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=500&q=82",
  gear:        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=760&q=82",
  valley:      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=82",
  forest:      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=760&q=82",
  lake:        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=760&q=82",
  desert:      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=760&q=82",
  ridge:       "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=760&q=82",
  campLake:    "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?auto=format&fit=crop&w=760&q=82",
  backpacker:  "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=760&q=82",
  group:       "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1100&q=82",
  lakeTraveler:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=520&q=82",
  // Itinerary photos
  summit:      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=760&q=82",
  jailoo:      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=760&q=82",
  dunes:       "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=760&q=82",
  gorge:       "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=760&q=82",
  glacierLake: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=760&q=82",
  glacier:     "https://images.unsplash.com/photo-1472791108553-c9405341e398?auto=format&fit=crop&w=760&q=82",
};

// ── Per-tour colors ────────────────────────────────────────────

const TOUR_COLORS = {
  "Tien Shan high pass trek":    { bg: "#b4ccb8", text: "#1a3d25" },
  "Altyn-Emel desert trek":      { bg: "#dfc898", text: "#503c10" },
  "Song-Kul alpine lake route":  { bg: "#a8c4d8", text: "#0c3454" },
  "Charyn canyon walking tour":  { bg: "#e8bf9c", text: "#5c3418" },
  "Fann mountains glacier trek": { bg: "#c4b4d4", text: "#381848" },
};

const TOUR_SHORT = {
  "Tien Shan high pass trek":    "Tien Shan",
  "Altyn-Emel desert trek":      "Altyn-Emel",
  "Song-Kul alpine lake route":  "Song-Kul",
  "Charyn canyon walking tour":  "Charyn",
  "Fann mountains glacier trek": "Fann Mtns",
};

const TOUR_TITLES = Object.keys(TOUR_COLORS);

// ── Day-by-day itineraries ─────────────────────────────────────

const TOUR_ITINERARIES = {
  "Tien Shan high pass trek": {
    difficulty: "Challenging",
    groupSize: "4–10",
    days: [
      { day: 1,  title: "Bishkek arrival",          text: "Transfer from Manas airport to guesthouse. Evening route briefing and gear check with your guide." },
      { day: 2,  title: "Drive to Kochkor",          text: "Three-hour drive through the Boom Gorge to Kochkor, 2,200m. Short afternoon acclimatisation walk.", photo: photos.valley },
      { day: 3,  title: "First trail day",           text: "Climb to Kalmak-Ashu jailoo plateau. Open ridge walking at 3,000–3,200m with views across the Terskei range.", photo: photos.jailoo },
      { day: 4,  title: "High jailoo crossing",      text: "Full day traverse across the plateau at 3,200–3,400m. Camp below the first snowline." },
      { day: 5,  title: "Approach to first pass",    text: "Morning scramble to the pass crest (3,780m). Descent through moraine to glacier-view camp." },
      { day: 6,  title: "High camp (3,900m)",        text: "The route's highest overnight. Short ridge walk for panoramic views into three mountain valleys.", photo: photos.summit },
      { day: 7,  title: "Rest and acclimatisation",  text: "Optional glacier walk. Afternoon rest at camp, weather window check for the next section." },
      { day: 8,  title: "Descent to Song-Kul",       text: "Full descent to the high lake Song-Kul (3,016m). Arrive at the north shore by afternoon.", photo: photos.lake },
      { day: 9,  title: "Lake circuit, north shore", text: "Walking the lakeshore with nomad families. Yurt camp overnight. Horses graze on the plain around you." },
      { day: 10, title: "Western shore crossing",    text: "Long open walk along the western edge. Wide steppe, silence, wild horses in the distance." },
      { day: 11, title: "Moldo-Ashuu traverse",      text: "Climb to the second major pass (3,780m) and long descent through rolling jailoo into the valley." },
      { day: 12, title: "Naryn valley",              text: "Forest trail and natural warm springs. Last long walking day before the road.", photo: photos.forest },
      { day: 13, title: "Final ridge camp",          text: "Short ridge walk with views back to the range. Camp near the trail end." },
      { day: 14, title: "Return to Bishkek",         text: "Morning transfer via the Boom Gorge. Arrive Bishkek by midday." },
    ],
  },

  "Altyn-Emel desert trek": {
    difficulty: "Moderate",
    groupSize: "4–12",
    days: [
      { day: 1, title: "Almaty arrival",        text: "Transfer to guesthouse in the city. Evening briefing with equipment check." },
      { day: 2, title: "Drive to Altyn-Emel",   text: "Four-hour drive east from Almaty to the national park. First desert camp near the Singing Dune.", photo: photos.desert },
      { day: 3, title: "Singing Dune",          text: "150m ascent up the active sand dune. Wind resonance audible at the crest. Sunset over the open steppe.", photo: photos.dunes },
      { day: 4, title: "Aktau chalk mountains", text: "Walking through eroded coloured mineral formations — white, red and yellow layers exposed by centuries of wind." },
      { day: 5, title: "Steppe traverse",       text: "Open walking across the desert plain. Wide silence and long views. Camp beside a dry riverbed." },
      { day: 6, title: "Valley rest day",       text: "Light walk and birdwatching in the lower valley. Afternoon rest, camp meal under a clear sky.", photo: photos.gear },
      { day: 7, title: "Eastern canyon section",text: "Red-rock gorges and narrow sandstone passages. The most dramatic terrain on the route.", photo: photos.gorge },
      { day: 8, title: "Return traverse",       text: "Cross the steppe back to the park boundary. Long afternoon light, final desert camp." },
      { day: 9, title: "Almaty departure",      text: "Morning drive back to the city. Airport transfer for afternoon and evening flights." },
    ],
  },

  "Song-Kul alpine lake route": {
    difficulty: "Moderate",
    groupSize: "4–12",
    days: [
      { day: 1, title: "Bishkek and drive",     text: "Three-hour drive through the Chu valley to Kochkor. Overnight at a guesthouse, evening briefing." },
      { day: 2, title: "Ascent to Song-Kul",    text: "4WD to the trailhead at 2,600m. Three-hour walk up to the lake at 3,016m.", photo: photos.lake },
      { day: 3, title: "North shore, yurt stay",text: "Walking the north shore with nomad families. Traditional yurt overnight. Horse riding available.", photo: photos.tent },
      { day: 4, title: "Western shore",         text: "Long open walk along the western edge of the lake. Wide steppe, the Terskei range behind you." },
      { day: 5, title: "South ridge viewpoint", text: "Short climb to the best panorama point above the lake. Sunset light across the plateau.", photo: photos.jailoo },
      { day: 6, title: "Moldo-Ashuu descent",   text: "Cross the pass at 3,346m and descend to the valley floor camp by evening." },
      { day: 7, title: "Return to Bishkek",     text: "Three-hour drive through the Chu valley. Arrival in Bishkek by midday." },
    ],
  },

  "Charyn canyon walking tour": {
    difficulty: "Easy",
    groupSize: "4–14",
    days: [
      { day: 1, title: "Almaty arrival",      text: "Transfer to the canyon area (3h drive east). First camp on the steppe rim at sunset.", photo: photos.desert },
      { day: 2, title: "Valley of Castles",   text: "The main canyon section: 2km walk through sculpted red columns up to 30m high.", photo: photos.gorge },
      { day: 3, title: "Canyon of Witches",   text: "Narrow gully section through ash-grey formations carved by the Charyn River over thousands of years." },
      { day: 4, title: "Steppe rim trail",    text: "Walking the canyon edge with wide views into the gorge. Long afternoon light, final canyon camp.", photo: photos.ridge },
      { day: 5, title: "Return to Almaty",    text: "Morning walk on the lower trail, then transfer back to Almaty for afternoon departures." },
    ],
  },

  "Fann mountains glacier trek": {
    difficulty: "Challenging",
    groupSize: "4–10",
    days: [
      { day: 1,  title: "Dushanbe arrival",       text: "Transfer to guesthouse. Evening briefing with your guide, gear and permit check." },
      { day: 2,  title: "Drive to Artuch",         text: "Four-hour drive into the Fann mountains to base camp at 2,160m. Afternoon rest, camp setup." },
      { day: 3,  title: "Alaudin Lakes",           text: "Approach hike to the turquoise Alaudin lake at 2,753m. First glacier views from the far shore.", photo: photos.glacierLake },
      { day: 4,  title: "Mutnye Lakes circuit",    text: "Twin high-altitude lakes on a rocky plateau. Rock camping, clear cold nights above the treeline.", photo: photos.lake },
      { day: 5,  title: "Kulikalon basin",         text: "Entry into the glacier cirque basin. Moraine walking with views up to the Chimtarga massif.", photo: photos.glacier },
      { day: 6,  title: "High camp (3,800m)",      text: "Rest day before the pass. Acclimatisation walk above camp. Weather assessment for tomorrow." },
      { day: 7,  title: "Chimtarga Pass (4,743m)", text: "The highest point of the route. Wide panorama into three separate mountain systems.", photo: photos.summit },
      { day: 8,  title: "Dukdon descent",          text: "Steep scree and snowfield descent to a green meadow camp. Long but satisfying day." },
      { day: 9,  title: "Marguzor Lakes",          text: "The seven-lake chain — each a different colour from mineral sediment. The most photographed section.", photo: photos.glacierLake },
      { day: 10, title: "Padrud valley",           text: "Final walking day through stone villages and walnut orchards. Traditional lunch with a local family." },
      { day: 11, title: "Dushanbe departure",      text: "Morning transfer to Dushanbe airport for afternoon and evening international flights." },
    ],
  },
};

// ── Landing page tour data ─────────────────────────────────────

const popularTours = [
  {
    country: "Central Asia", title: "Tien Shan high pass trek",
    days: 14, price: 1890,
    lead: "Cross alpine passes, jailoo valleys, glacier viewpoints and nomad camps.",
    description: "Kyrgyzstan is made for active travelers who want open mountains, clean air and a route that moves from high lakes to quiet shepherd trails.",
    image: photos.valley,  imageAlt: "High mountain valley with a river and distant glaciers",
    sideImage: photos.tent, sideImageAlt: "Travelers resting inside a trekking tent",
  },
  {
    country: "Kazakhstan", title: "Altyn-Emel desert trek",
    days: 9, price: 1240,
    lead: "Walk through singing dunes, chalk ridges, wide steppe light and silent canyons.",
    description: "This route connects Kazakhstan's open desert landscapes with easy walking days, dramatic geology and nights under a clear steppe sky.",
    image: photos.forest, imageAlt: "Open steppe road beneath a dramatic sky",
    sideImage: photos.tent, sideImageAlt: "Travelers sitting inside a tent",
  },
  {
    country: "Kyrgyzstan", title: "Song-Kul alpine lake route",
    days: 7, price: 990,
    lead: "Cross open jailoo pastures, blue lakes and sharp snow peaks over seven days.",
    description: "A balanced route for travelers who want altitude, yurt stays and wide mountain views without rushing the pace.",
    image: photos.lake, imageAlt: "Mountain valley with a lake and peaks",
    sideImage: photos.gear, sideImageAlt: "Hiking gear resting on rocks near a stream",
  },
  {
    country: "Kazakhstan", title: "Charyn canyon walking tour",
    days: 5, price: 740,
    lead: "Move from red canyon walls to steppe horizons and quiet desert camps.",
    description: "This compact route connects dramatic rock corridors, warm evening light and easy walking days for a lighter Central Asia adventure.",
    image: photos.desert, imageAlt: "Wide desert landscape with hills",
    sideImage: photos.group, sideImageAlt: "Hikers walking through a mountain pass",
  },
  {
    country: "Tajikistan", title: "Fann mountains glacier trek",
    days: 11, price: 1590,
    lead: "Follow high passes, turquoise lakes and remote villages in the Pamirs.",
    description: "A more demanding mountain route for strong walkers who want crisp air, long climbs and quiet nights above the valley.",
    image: photos.ridge, imageAlt: "Snowy mountain ridge above a valley",
    sideImage: photos.trail, sideImageAlt: "A winding mountain trail through dry grass",
  },
];

const keyFactors = [
  { title: "Route logistics handled", text: "We coordinate permits, local transport, trail meals, camps and mountain support so travelers can focus on the route." },
  { title: "Silk Road landscapes",    text: "Our routes move from Silk Road cities to alpine lakes, desert canyons, glacier valleys and wide steppe horizons." },
  { title: "Small trail groups",      text: "Trips stay intentionally small, usually 4-12 travelers, so the route keeps its rhythm and the trail never feels crowded." },
  { title: "Local mountain guides",   text: "Our guides know the passes, weather, villages and quiet detours that turn a good route into a memorable journey." },
];

const tripStyles = [
  { title: "High pass trekking",   image: photos.backpacker, imageAlt: "A backpacker standing on a high mountain trail" },
  { title: "Yurt and camp routes", image: photos.campLake,   imageAlt: "A glowing tent beside an alpine lake at dusk" },
  { title: "Comfort lodge hikes",  image: photos.trail,      imageAlt: "A hiker walking along a ridge trail" },
];

const experienceStats = [
  { value: "200+",     label: "Trail days" },
  { value: "350+",     label: "Guided hikers" },
  { value: "17 years", label: "In the mountains" },
];

// ── Tour schedule (April – September 2026) ─────────────────────

const tourSchedule = [
  { tourTitle: "Tien Shan high pass trek",    country: "Central Asia", price: 1890, start: "2026-06-14", end: "2026-06-27", days: 14, spots: 8 },
  { tourTitle: "Tien Shan high pass trek",    country: "Central Asia", price: 1890, start: "2026-07-19", end: "2026-08-01", days: 14, spots: 6 },
  { tourTitle: "Tien Shan high pass trek",    country: "Central Asia", price: 1890, start: "2026-08-23", end: "2026-09-05", days: 14, spots: 8 },
  { tourTitle: "Altyn-Emel desert trek",      country: "Kazakhstan",   price: 1240, start: "2026-04-26", end: "2026-05-04", days: 9,  spots: 10 },
  { tourTitle: "Altyn-Emel desert trek",      country: "Kazakhstan",   price: 1240, start: "2026-09-13", end: "2026-09-21", days: 9,  spots: 10 },
  { tourTitle: "Song-Kul alpine lake route",  country: "Kyrgyzstan",   price: 990,  start: "2026-06-28", end: "2026-07-04", days: 7,  spots: 12 },
  { tourTitle: "Song-Kul alpine lake route",  country: "Kyrgyzstan",   price: 990,  start: "2026-07-26", end: "2026-08-01", days: 7,  spots: 10 },
  { tourTitle: "Song-Kul alpine lake route",  country: "Kyrgyzstan",   price: 990,  start: "2026-08-09", end: "2026-08-15", days: 7,  spots: 12 },
  { tourTitle: "Charyn canyon walking tour",  country: "Kazakhstan",   price: 740,  start: "2026-04-18", end: "2026-04-22", days: 5,  spots: 12 },
  { tourTitle: "Charyn canyon walking tour",  country: "Kazakhstan",   price: 740,  start: "2026-05-16", end: "2026-05-20", days: 5,  spots: 8 },
  { tourTitle: "Charyn canyon walking tour",  country: "Kazakhstan",   price: 740,  start: "2026-09-19", end: "2026-09-23", days: 5,  spots: 12 },
  { tourTitle: "Fann mountains glacier trek", country: "Tajikistan",   price: 1590, start: "2026-07-05", end: "2026-07-15", days: 11, spots: 8 },
  { tourTitle: "Fann mountains glacier trek", country: "Tajikistan",   price: 1590, start: "2026-08-02", end: "2026-08-12", days: 11, spots: 6 },
  { tourTitle: "Fann mountains glacier trek", country: "Tajikistan",   price: 1590, start: "2026-08-30", end: "2026-09-09", days: 11, spots: 8 },
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

// ── Calendar modal ─────────────────────────────────────────────

function TrekCalendarModal({ onClose, initialTour }) {
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
          <span className="cal-title">Trek Schedule 2026</span>
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
                  <p className="cal-tour-price">${selected.price.toLocaleString('en-US')}<span> / person</span></p>
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

function TourDetailModal({ tour, onClose, onPlanTrek }) {
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
            <strong>${tour.price.toLocaleString('en-US')}</strong><span>Per person</span>
          </div>
          <div className="tmodal-stat">
            <strong>{itin?.groupSize ?? '4–12'}</strong><span>Group size</span>
          </div>
          <div className="tmodal-stat" style={{ borderLeftColor: color?.bg }}>
            <strong>{itin?.difficulty ?? '—'}</strong><span>Difficulty</span>
          </div>
        </div>

        {/* Body */}
        <div className="tmodal-body">

          {/* Left: overview + CTA */}
          <div className="tmodal-left">
            <p className="tmodal-lead">{tour.lead}</p>
            <p className="tmodal-desc">{tour.description}</p>
            <img className="tmodal-side-img" src={tour.sideImage} alt={tour.sideImageAlt} />
            <button
              className="text-link tmodal-plan-btn" type="button"
              onClick={() => { onClose(); onPlanTrek(tour.title); }}
            >
              Plan this trek <span aria-hidden="true">-&gt;</span>
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

function Header({ onPlanTrek }) {
  return (
    <header className="site-header" aria-label="Main navigation">
      <a className="brand" href="/">tengri</a>
      <nav>
        <a href="#factors">Why us</a>
        <a href="#tours">Routes</a>
        <a href="#trip-styles">Trip styles</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="reserve-link" type="button" onClick={onPlanTrek}>
        Plan a trek <span aria-hidden="true">-&gt;</span>
      </button>
      <button className="menu-button" type="button" aria-label="Open menu">
        <span /><span />
      </button>
    </header>
  );
}

function PopularTour({ tour, index, total, onPlanTrek, onViewDetail }) {
  const tourNumber = index + 1;
  const titleId    = `popular-tour-${tourNumber}`;
  const isFirst    = index === 0;
  const color      = TOUR_COLORS[tour.title];

  return (
    <article className="tour-item" aria-labelledby={titleId}>
      <div className="tour-meta-row" aria-label="Tour meta">
        {isFirst ? (
          <><span>{tour.country}</span><span>[ {total} trips ]</span></>
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
            <strong>${tour.price.toLocaleString('en-US')}</strong>
            <span>{tour.days} days · per person</span>
          </div>

          <div className="tour-actions">
            <button className="text-link" type="button" onClick={() => onViewDetail(tour)}>
              Full itinerary <span aria-hidden="true">-&gt;</span>
            </button>
            <button className="text-link" type="button" onClick={() => onPlanTrek(tour.title)}>
              Plan this trek <span aria-hidden="true">-&gt;</span>
            </button>
          </div>
        </div>

        <img className="tour-side-photo" src={tour.sideImage} alt={tour.sideImageAlt} />
      </div>
    </article>
  );
}

function KeyFactors({ onPlanTrek }) {
  return (
    <section className="screen factors-screen" aria-labelledby="factors-title" id="factors">
      <Header onPlanTrek={onPlanTrek} />
      <div className="factors-layout">
        <span className="page-index factors-index">[ 03 ]</span>
        <div className="factors-title-block">
          <h2 id="factors-title"><span>Four</span><span>Key factors</span></h2>
          <p>Built around altitude, weather, local culture and small groups</p>
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
        <h2 id="trip-styles-title">Trip styles</h2>
        <span className="page-index">[ 04 ]</span>
      </div>
      <p className="trip-styles-copy">
        <span>For people</span><span>who want</span><span>mountains,</span>
        <span>silence,</span><span>we have</span><span>a route</span><span>that fits</span>
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
        Explore trip styles <span aria-hidden="true">-&gt;</span>
      </a>
    </section>
  );
}

function SafetyQuality() {
  return (
    <section className="screen safety-screen" aria-labelledby="safety-title" id="safety">
      <span className="page-index safety-index">[ 05 ]</span>
      <h2 id="safety-title">For us the quality of the route is only second to safety.</h2>
      <a className="text-link safety-link" href="#contact">Talk to a planner <span aria-hidden="true">-&gt;</span></a>
      <p className="safety-copy">We build Central Asia trekking routes with careful pacing, local guide knowledge and enough space for the mountains to feel real.</p>
      <div className="experience-stats">
        {experienceStats.map(stat => (
          <div className="experience-stat" key={stat.label}>
            <strong>{stat.value}</strong><span>{stat.label}</span>
          </div>
        ))}
      </div>
      <img className="safety-photo" src={photos.group} alt="A trekking group standing together in the mountains" />
    </section>
  );
}

function PlanningContact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="screen planning-screen" aria-labelledby="planning-title" id="contact">
        <div className="planning-head">
          <h2 id="planning-title">Are you planning a Central Asia trek?</h2>
          <span className="page-index">[ 06 ]</span>
        </div>
        <div className="planning-intro">
          <img src={photos.lakeTraveler} alt="A traveler sitting beside a mountain lake" />
          <p>Share your dates and we will prepare a route through mountains, canyons and Silk Road places</p>
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
            <button className="text-link" type="submit">Send route request <span aria-hidden="true">-&gt;</span></button>
          </form>
        )}
      </section>

      <footer className="site-footer" aria-label="Footer">
        <div className="footer-top">
          <a className="brand" href="/">tengri</a>
          <a href="#top">Menu</a>
        </div>
        <address>12 Chuy Avenue,<br />Bishkek 720000,<br />Kyrgyzstan</address>
        <div className="footer-contact">
          <h2>Get in touch</h2>
          <a href="mailto:hello@tengritreks.com">hello@tengritreks.com</a>
          <a href="tel:+996555240699">+996 555 240 699</a>
        </div>
        <div className="footer-social">
          <strong>Follow us<br />on social <span aria-hidden="true">-&gt;</span></strong>
          <a href="#email">Email</a><a href="#instagram">Instagram</a>
          <a href="#linkedin">LinkedIn</a><a href="#youtube">YouTube</a>
          <a href="#tripadvisor">Tripadvisor</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Tengri Treks. Central Asia routes and field notes</span>
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

  function openCal(tourTitle) {
    // guard: onClick passes a MouseEvent — treat anything non-string as "all tours"
    setCalTour(typeof tourTitle === 'string' ? tourTitle : null);
    setCalOpen(true);
  }
  function closeCal()          { setCalOpen(false); setCalTour(null); }
  function openDetail(tour)    { setDetailTour(tour); }
  function closeDetail()       { setDetailTour(null); }

  return (
    <main className="stage">
      {calOpen    && <TrekCalendarModal onClose={closeCal} initialTour={calTour} />}
      {detailTour && <TourDetailModal tour={detailTour} onClose={closeDetail} onPlanTrek={openCal} />}

      <div className="site-canvas">
        <section className="screen hero-screen" aria-labelledby="hero-title">
          <Header onPlanTrek={openCal} />
          <div className="hero-composition">
            <img className="hero-photo hero-photo-hikers" src={photos.hikers} alt="Hikers walking through a mountain pass" />
            <h1 id="hero-title" className="hero-title">
              <span>Hiking/</span><span>Trekking</span><span>Tours</span>
            </h1>
            <span className="page-index hero-index">[ 01 ]</span>
            <p className="challenge-copy">Cross Central Asia on your next mountain route</p>
            <img className="hero-photo hero-photo-trail" src={photos.trail} alt="A winding mountain trail through dry grass" />
            <img className="hero-photo hero-photo-tent"  src={photos.tent}  alt="Travelers sitting inside a tent" />
            <div className="hero-stat">
              <strong>316</strong><span>Route days across the region</span>
            </div>
            <button className="text-link hero-cta" type="button" onClick={openCal}>
              Plan a trek <span aria-hidden="true">-&gt;</span>
            </button>
            <img className="hero-photo hero-photo-gear" src={photos.gear} alt="Hiking gear resting on rocks near a stream" />
            <p className="intro-copy">
              Guided trekking across Kyrgyzstan, Kazakhstan and Tajikistan:
              high passes, canyons, alpine lakes and remote villages.
            </p>
          </div>
        </section>

        <section className="screen tours-screen" id="tours" aria-labelledby="tours-title">
          <div className="section-title-row">
            <h2 id="tours-title">Popular Central Asia routes</h2>
            <span className="page-index">[ 02 ]</span>
          </div>
          <div className="tour-stack" aria-label="Popular tours list">
            {popularTours.map((tour, index) => (
              <PopularTour
                key={tour.title}
                tour={tour} index={index} total={popularTours.length}
                onPlanTrek={openCal}
                onViewDetail={openDetail}
              />
            ))}
          </div>
        </section>

        <KeyFactors onPlanTrek={openCal} />
        <TripStyles />
        <SafetyQuality />
        <PlanningContact />
      </div>
    </main>
  );
}

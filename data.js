// Representative data for Paris -> Bordeaux. Always verify live times on SNCF Connect.
window.TRAINS = [
  // dep = Paris Montparnasse departure, dur = minutes to Bordeaux Saint-Jean
  { dep: "06:45", dur: 128, type: "TGV inOui", fare: "from ~€45" },
  { dep: "07:15", dur: 125, type: "TGV inOui", fare: "from ~€45" },
  { dep: "07:50", dur: 124, type: "OUIGO", fare: "from ~€15" },
  { dep: "08:30", dur: 126, type: "TGV inOui", fare: "from ~€55" },
  { dep: "09:10", dur: 125, type: "TGV inOui", fare: "from ~€45" },
  { dep: "10:10", dur: 127, type: "TGV inOui", fare: "from ~€40" },
  { dep: "11:10", dur: 126, type: "TGV inOui", fare: "from ~€40" },
  { dep: "12:05", dur: 124, type: "OUIGO", fare: "from ~€15" },
  { dep: "12:45", dur: 128, type: "TGV inOui", fare: "from ~€45" },
  { dep: "13:45", dur: 126, type: "TGV inOui", fare: "from ~€45" },
  { dep: "14:50", dur: 125, type: "TGV inOui", fare: "from ~€45" },
  { dep: "15:45", dur: 127, type: "TGV inOui", fare: "from ~€50" },
  { dep: "16:35", dur: 126, type: "TGV inOui", fare: "from ~€55" },
  { dep: "17:15", dur: 125, type: "TGV inOui", fare: "from ~€60" },
  { dep: "17:50", dur: 124, type: "OUIGO", fare: "from ~€20" },
  { dep: "18:35", dur: 128, type: "TGV inOui", fare: "from ~€55" },
  { dep: "19:15", dur: 126, type: "TGV inOui", fare: "from ~€45" },
  { dep: "20:25", dur: 129, type: "TGV inOui", fare: "from ~€40" }
];

// Ways to reach Paris Montparnasse. mins = door-to-platform estimate incl. waiting.
window.ORIGINS = [
  { id: "mont", name: "Gare Montparnasse (already there)", mins: 0, steps: [
    { mode: "walk", text: "Go to the Hall 1/2 departure boards. Platform is shown ~20 min before departure." } ] },
  { id: "eiffel", name: "Eiffel Tower / Trocadéro area", mins: 30, steps: [
    { mode: "metro", line: "6", text: "Metro 6 from Bir-Hakeim towards Nation → Montparnasse–Bienvenüe (6 stops, ~12 min)." },
    { mode: "walk", text: "Follow “Gare SNCF” signs, ~5 min walk to the TGV hall." } ] },
  { id: "chatelet", name: "Louvre / Châtelet–Les Halles / Notre-Dame", mins: 30, steps: [
    { mode: "metro", line: "4", text: "Metro 4 from Châtelet towards Bagneux–Lucie Aubrac → Montparnasse–Bienvenüe (~10 min, direct)." },
    { mode: "walk", text: "Follow “Gare SNCF” signs, ~5 min." } ] },
  { id: "nord", name: "Gare du Nord (Eurostar / airport train arrivals)", mins: 40, steps: [
    { mode: "metro", line: "4", text: "Metro 4 towards Bagneux–Lucie Aubrac → Montparnasse–Bienvenüe (direct, ~16 min)." },
    { mode: "walk", text: "Follow “Gare SNCF” signs, ~5 min." } ] },
  { id: "lyon", name: "Gare de Lyon", mins: 45, steps: [
    { mode: "metro", line: "14", text: "Metro 14 towards Saint-Denis Pleyel → Châtelet (~5 min)." },
    { mode: "metro", line: "4", text: "Change to Metro 4 towards Bagneux–Lucie Aubrac → Montparnasse–Bienvenüe (~10 min)." },
    { mode: "walk", text: "Follow “Gare SNCF” signs, ~5 min." } ] },
  { id: "montmartre", name: "Montmartre / Sacré-Cœur", mins: 45, steps: [
    { mode: "metro", line: "12", text: "Metro 12 from Abbesses towards Mairie d’Issy → Montparnasse–Bienvenüe (~20 min, direct)." },
    { mode: "walk", text: "Follow “Gare SNCF” signs, ~5 min." } ] },
  { id: "cdg", name: "Paris Charles de Gaulle Airport", mins: 85, steps: [
    { mode: "rer", line: "B", text: "RER B towards Saint-Rémy-lès-Chevreuse / Robinson → Denfert-Rochereau (~35–40 min)." },
    { mode: "metro", line: "6", text: "Change to Metro 6 towards Charles de Gaulle–Étoile → Montparnasse–Bienvenüe (3 stops, ~6 min)." },
    { mode: "walk", text: "Follow “Gare SNCF” signs, ~5 min. Note: the airport RER fare is higher than a standard metro ticket." } ] },
  { id: "orly", name: "Paris Orly Airport", mins: 75, steps: [
    { mode: "metro", line: "14", text: "Metro 14 from Aéroport d’Orly towards Saint-Denis Pleyel → Châtelet (~30 min)." },
    { mode: "metro", line: "4", text: "Change to Metro 4 towards Bagneux–Lucie Aubrac → Montparnasse–Bienvenüe (~10 min)." },
    { mode: "walk", text: "Follow “Gare SNCF” signs, ~5 min." } ] }
];

// Ways onward from Bordeaux Saint-Jean
window.DESTS = [
  { id: "stjean", name: "Gare Saint-Jean (stay at the station)", mins: 0, steps: [
    { mode: "walk", text: "You have arrived. Taxis and the tram are straight out of the main exit." } ] },
  { id: "centre", name: "Centre / Place des Quinconces / Grand Théâtre", mins: 25, steps: [
    { mode: "tram", line: "C", text: "Tram C towards Parc des Expositions from Gare Saint-Jean → Quinconces (~15 min)." },
    { mode: "walk", text: "Walk 5–10 min to the Grand Théâtre / Place de la Bourse. Check the TBM app for the exact stop." } ] },
  { id: "chartrons", name: "Chartrons / Cité du Vin", mins: 40, steps: [
    { mode: "tram", line: "C", text: "Tram C towards Parc des Expositions → Quinconces (~15 min)." },
    { mode: "tram", line: "B", text: "Change to Tram B (Quinconces) towards Claveau / Cité du Vin → Cité du Vin (~10 min)." } ] },
  { id: "airport", name: "Bordeaux–Mérignac Airport", mins: 55, steps: [
    { mode: "tram", line: "C", text: "Tram C towards Parc des Expositions → Quinconces (~15 min)." },
    { mode: "tram", line: "A", text: "Change to Tram A (Quinconces) towards Mérignac Aéroport → terminus (~25 min)." } ] },
  { id: "taxi", name: "Anywhere in Bordeaux — taxi / rideshare", mins: 20, steps: [
    { mode: "taxi", text: "Taxi rank outside the station (Rue Charles Domercq side). Most central addresses are 10–20 min away." } ] }
];

window.TIPS = [
  { t: "Which station?", b: "Trains to Bordeaux leave from Paris Montparnasse, not Gare du Nord, Gare de Lyon or Austerlitz. They arrive at Bordeaux Saint-Jean, the main station south of the centre." },
  { t: "Book ahead", b: "TGV inOui and OUIGO tickets open months ahead and prices rise close to departure. Book on SNCF Connect or the OUIGO site; e-tickets live in the app." },
  { t: "OUIGO rules", b: "OUIGO is the low-cost TGV. Hand luggage is limited and extra bags cost more; check in early because stations may enforce stricter boarding times." },
  { t: "Platform & timing", b: "Platforms are posted about 20 minutes before departure. Allow 30–40 min at Montparnasse. Airport arrivals should add a larger buffer." },
  { t: "Paris tickets", b: "A single Paris metro/RER ticket (Ticket t+) works for the metro; the CDG and Orly airport legs may need a higher fare. Navigo Easy or contactless bank card is an alternative where accepted." },
  { t: "Bordeaux tickets", b: "A single TBM ticket (~€1.90) is valid for one hour including transfers. Buy it at tram stops, in the TBM app or from a Relay shop; tickets are not sold on trams. Validate before boarding." },
  { t: "Check live", b: "Timetables, strikes and engineering works change schedules. Always confirm on SNCF Connect, and TBM’s planner for Bordeaux trams." }
];

const $ = s => document.querySelector(s);
const pad = n => String(n).padStart(2, "0");
const toMin = t => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
const fmt = m => { m = ((m % 1440) + 1440) % 1440; return pad(Math.floor(m / 60)) + ":" + pad(m % 60); };
const dur = m => `${Math.floor(m / 60)}h${pad(m % 60)}`;
const BUFFER = 20; // minutes to spare at the station
const ICON = { metro: "Metro", rer: "RER", tram: "Tram", walk: "Walk", taxi: "Taxi" };

function fill(sel, list) {
  sel.innerHTML = list.map(o => `<option value="${o.id}">${o.name}</option>`).join("");
}
fill($("#origin"), ORIGINS);
fill($("#dest"), DESTS);

function stepHTML(s) {
  const label = s.line ? `${ICON[s.mode]} ${s.line}` : ICON[s.mode];
  return `<li class="step"><span class="badge ${s.mode}">${label}</span><div>${s.text}</div></li>`;
}

function render() {
  const o = ORIGINS.find(x => x.id === $("#origin").value);
  const d = DESTS.find(x => x.id === $("#dest").value);
  const start = toMin($("#time").value || "08:00");
  const needBy = start + o.mins + BUFFER;
  let train = TRAINS.find(t => toMin(t.dep) >= needBy);
  const out = $("#result");
  if (!train) {
    out.innerHTML = `<div class="card">No more trains in the typical schedule after ${fmt(needBy)}. Check SNCF Connect for late services or travel tomorrow.</div>`;
    return;
  }
  const dep = toMin(train.dep), arr = dep + train.dur, home = arr + d.mins;
  const leave = dep - BUFFER - o.mins;
  out.innerHTML = `
    <div class="summary">Leave at <b>${fmt(leave)}</b> · Train <b>${train.dep}</b> → <b>${fmt(arr)}</b><br>
      Reach your Bordeaux destination around <b>${fmt(home)}</b> (${dur(home - leave)} door to door)</div>
    <ul class="timeline">
      <li class="step"><span class="badge">${fmt(leave)}</span><div><b>Start in Paris</b><div class="when">Allowing ${o.mins} min to Montparnasse + ${BUFFER} min buffer</div></div></li>
      ${o.steps.map(stepHTML).join("")}
      <li class="step"><span class="badge train">${train.dep}</span><div><b>${train.type} · Paris Montparnasse → Bordeaux Saint-Jean</b><div class="when">Direct, arrives ${fmt(arr)} (${dur(train.dur)}) · ${train.fare}</div></div></li>
      ${d.steps.map(stepHTML).join("")}
      <li class="step"><span class="badge">${fmt(home)}</span><div><b>Arrive: ${d.name}</b></div></li>
    </ul>`;
}

function board() {
  const now = new Date(), nowMin = now.getHours() * 60 + now.getMinutes();
  const next = TRAINS.find(t => toMin(t.dep) >= nowMin);
  $("#board").innerHTML = TRAINS.map(t => `
    <div class="trainrow ${t === next ? "next" : ""}">
      <div><div class="times">${t.dep} → ${fmt(toMin(t.dep) + t.dur)}</div>
      <div class="meta">${t.type} · ${dur(t.dur)} · direct${t === next ? " · next today" : ""}</div></div>
      <div class="meta">${t.fare}</div></div>`).join("");
}

$("#tipList").innerHTML = TIPS.map(t => `<div class="tip"><h3>${t.t}</h3><p>${t.b}</p></div>`).join("");
["#origin", "#dest", "#time"].forEach(s => $(s).addEventListener("input", render));
document.querySelectorAll("nav button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll("nav button").forEach(x => x.setAttribute("aria-selected", x === b));
  document.querySelectorAll(".panel").forEach(p => p.hidden = p.id !== b.dataset.tab);
}));
render(); board();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});

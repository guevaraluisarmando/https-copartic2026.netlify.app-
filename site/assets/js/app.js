/* ==========================================================
   APP.JS — construye el sitio a partir de MATCH_DATA.
   Edita assets/js/data.js para actualizar el contenido.
   ========================================================== */

(function () {
  const D = MATCH_DATA;
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };

  /* ---------------- HERO ---------------- */
  function renderHero() {
    $("#hero-badge-level").textContent = D.meta.levelTag;
    $("#hero-badge-discipline").textContent = D.meta.discipline;
    $("#hero-title").textContent = D.meta.eventName;
    $("#hero-place").textContent = D.meta.place;
    $("#hero-dates strong").textContent = D.meta.dateLine;
    $("#hero-organizers strong").textContent = D.meta.organizers;
    $("#hero-sanction").textContent = D.meta.sanction;
    $("#logo-main").src = D.meta.logos.main;
    $("#logo-secondary").src = D.meta.logos.secondary;
  }

  /* ---------------- SPONSORS ---------------- */
  function renderSponsors() {
    $("#sponsors-img").src = D.sponsors.image;
  }

  /* ---------------- LOCATION ---------------- */
  function renderLocation() {
    $("#location-map-img").src = D.location.mapImage;
    $("#location-qr-img").src = D.location.qrImage;
    $("#location-name").textContent = D.location.name;
    $("#location-phone").textContent = D.location.phone;
  }

  /* ---------------- BREAKDOWN ---------------- */
  function renderBreakdown() {
    $("#breakdown-img").src = D.breakdown.image;
    const total = D.breakdown.countries.reduce((s, c) => s + c.count, 0);
    $("#breakdown-total").textContent = total;
    const list = $("#breakdown-list");
    list.innerHTML = D.breakdown.countries
      .slice()
      .sort((a, b) => b.count - a.count)
      .map(c => `
        <div class="stat-card">
          <div class="num">${c.count}</div>
          <div class="label">${c.name}</div>
        </div>`).join("");
  }

  /* ---------------- STATISTICS ---------------- */
  function statTable(title, rows) {
    return `
      <div class="info-table">
        <h4>${title}</h4>
        <table>
          ${rows.map(r => `<tr><td>${r.name}</td><td>${r.count}</td></tr>`).join("")}
        </table>
      </div>`;
  }

  function renderStatistics() {
    const s = D.statistics;
    $("#stat-tables").innerHTML =
      statTable("Divisiones", s.divisions) +
      statTable("Categorías", s.categories) +
      statTable("Clasificaciones", s.classes);

    const totalRounds = D.stages.reduce((sum, st) => sum + st.minRounds, 0);
    $("#quick-stats").innerHTML = `
      <div class="stat-card"><div class="num">${D.stages.length}</div><div class="label">Escenarios</div></div>
      <div class="stat-card"><div class="num">${totalRounds}</div><div class="label">Disparos mín.</div></div>
      <div class="stat-card"><div class="num">${s.categories.find(c=>c.name==="Overall") ? s.categories.find(c=>c.name==="Overall").count : "—"}</div><div class="label">Competidores</div></div>
    `;
  }

  /* ---------------- SCHEDULE ---------------- */
  let activeDay = 0;

  function renderScheduleTabs() {
    const tabs = $("#day-tabs");
    tabs.innerHTML = D.schedule.map((d, i) =>
      `<button class="filter-btn ${i === activeDay ? "active" : ""}" data-day="${i}">${d.date}</button>`
    ).join("");
    $$(".filter-btn", tabs).forEach(b => b.addEventListener("click", () => {
      activeDay = Number(b.dataset.day);
      renderScheduleTabs();
      renderScheduleList();
    }));
  }

  function renderScheduleList() {
    const day = D.schedule[activeDay];
    const list = $("#activity-list");
    list.innerHTML = `<div class="section-intro" style="margin-bottom:14px;"><strong style="color:var(--paper);">${day.label}</strong></div>` +
      day.items.map(a => `
        <div class="activity">
          <div class="when">${a.time}</div>
          <div>
            <h4>${a.title}</h4>
            ${a.detail ? `<div class="where">${a.detail}</div>` : ""}
          </div>
        </div>`).join("");
  }

  /* ---------------- STAGES ---------------- */
  function stageCard(s) {
    const card = el("article", "stage-card");
    const pcc = s.pcc || D.pccStandard;
    card.innerHTML = `
      <div class="plate">
        <img src="${s.image}" alt="Diagrama Stage ${s.number}" loading="lazy">
        <div class="num">${s.number}</div>
        <div class="area-tag">${s.bay}</div>
      </div>
      <div class="body">
        <h3>Stage ${s.number} <span class="type">${s.bay}</span></h3>
        <div class="stat-row">
          <span><b>${s.minRounds}</b> disparos min.</span>
        </div>
        <p class="procedure"><b>Scoring:</b> ${s.scoringTargets}</p>
        <p class="procedure">${s.procedure}</p>
        <div class="fine">
          <div><b>Condición del arma:</b> ${s.firearmReady}</div>
          <div><b>Posición inicial:</b> ${s.startPosition}</div>
          ${s.note ? `<div><b>Nota:</b> ${s.note}</div>` : ""}
        </div>
        <div class="pcc-row">
          <div class="pcc-label">PCC Ready Condition</div>
          <ul>${pcc.map(p => `<li>${p}</li>`).join("")}</ul>
        </div>
      </div>`;
    return card;
  }

  function renderStages() {
    const grid = $("#stage-grid");
    grid.innerHTML = "";
    D.stages
      .slice()
      .sort((a, b) => a.number - b.number)
      .forEach(s => grid.appendChild(stageCard(s)));
  }

  /* ---------------- NAV scroll-spy ---------------- */
  function setupNavScrollSpy() {
    const links = $$(".topnav .links a");
    const sections = links.map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === id));
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(s => obs.observe(s));
  }

  /* ---------------- INIT ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderSponsors();
    renderLocation();
    renderBreakdown();
    renderStatistics();
    renderScheduleTabs();
    renderScheduleList();
    renderStages();
    setupNavScrollSpy();
    $("#year").textContent = new Date().getFullYear();
  });
})();

/* ==========================================================================
   STUDIO DENTISTICO COLOMBO — comportamenti del sito
   JavaScript puro, nessuna libreria, caricato con `defer`. Ogni funzione è
   isolata: se una fallisce, le altre continuano a funzionare.
   I dati modificabili (telefono, orari, ferie…) stanno in js/config.js.
   ========================================================================== */
(function () {
  "use strict";

  const S = window.STUDIO || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;
  const SCRIPT = document.currentScript && document.currentScript.src;
  const SITE_ROOT = SCRIPT ? new URL("../", SCRIPT).href : location.origin + "/";
  const run = (fn) => { try { fn(); } catch (e) { if (window.console) console.warn("[sito]", fn.name, e); } };
  const norm = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  const pad = (n) => String(n).padStart(2, "0");
  const fmtTime = (h, m) => pad(h) + ":" + pad(m);

  const ICON = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.3-4.3"/></svg>',
    tooth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.5 4.5c1.5 0 2.8.9 4.5.9s3-.9 4.5-.9c2.5 0 4 2 3.8 4.6-.2 2.2-1.2 3.2-1.6 5.6-.4 2.4-.6 5.3-2 5.3-1.5 0-1.5-4-2.7-4s-1.2 4-2.7 4c-1.4 0-1.6-2.9-2-5.3-.4-2.4-1.4-3.4-1.6-5.6C3.5 6.5 5 4.5 7.5 4.5Z"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3.5h7l4.5 4.5v11a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.500 19V5A1.500 1.500 0 0 1 7 3.500Z"/><path d="M14 3.500V8h4.500M8.500 13h7M8.500 16.500h5"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8v.01"/></svg>',
    page: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    arrowL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
    arrowR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5.500" r="2.500"/><circle cx="6" cy="12" r="2.500"/><circle cx="18" cy="18.500" r="2.500"/><path d="m8.200 10.800 7.600-4M8.200 13.200l7.600 4"/></svg>'
  };

  /* ------------------------------------------------------------------ *
   *  Orari, festività, stato "aperto ora" (sempre ora italiana)
   * ------------------------------------------------------------------ */
  const tzFmt = new Intl.DateTimeFormat("en-GB", { timeZone: S.fusoOrario || "Europe/Rome", hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", weekday: "short" });
  function romeNow(date) {
    const p = {};
    tzFmt.formatToParts(date || new Date()).forEach((x) => { p[x.type] = x.value; });
    const dow = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[p.weekday];
    return { y: +p.year, m: +p.month, d: +p.day, dow: dow, min: (+p.hour) * 60 + (+p.minute) };
  }
  function easter(y) {
    const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
    return { m: Math.floor((h + l - 7 * m + 114) / 31), d: ((h + l - 7 * m + 114) % 31) + 1 };
  }
  function holidayName(y, m, d) {
    const fixed = { "1-1": "Capodanno", "6-1": "Epifania", "25-4": "Festa della Liberazione", "1-5": "Festa del Lavoro", "2-6": "Festa della Repubblica", "15-8": "Ferragosto", "1-11": "Ognissanti", "8-12": "Immacolata", "25-12": "Natale", "26-12": "Santo Stefano" };
    if (fixed[d + "-" + m]) return fixed[d + "-" + m];
    const e = easter(y);
    const pasquetta = new Date(Date.UTC(y, e.m - 1, e.d + 1));
    if (pasquetta.getUTCMonth() + 1 === m && pasquetta.getUTCDate() === d) return "Lunedì dell'Angelo";
    if (e.m === m && e.d === d) return "Pasqua";
    return "";
  }
  const isoOf = (y, m, d) => y + "-" + pad(m) + "-" + pad(d);
  function ferieOn(y, m, d) {
    const iso = isoOf(y, m, d);
    return (S.ferie || []).find((f) => iso >= f.da && iso <= f.a) || null;
  }
  function addDays(y, m, d, n) {
    const t = new Date(Date.UTC(y, m - 1, d + n));
    return { y: t.getUTCFullYear(), m: t.getUTCMonth() + 1, d: t.getUTCDate(), dow: t.getUTCDay() };
  }
  const dayLabel = (n, dow) => (n === 0 ? "oggi" : n === 1 ? "domani" : (S.giorni[dow] || "").toLowerCase());
  let lastStatus = null;

  function computeStatus() {
    const now = romeNow();
    const today = S.orari[now.dow] || { fasce: [] };
    const hol = holidayName(now.y, now.m, now.d);
    const fer = ferieOn(now.y, now.m, now.d);
    // prossima apertura
    function nextOpening() {
      for (let n = 0; n < 21; n++) {
        const day = n === 0 ? { y: now.y, m: now.m, d: now.d, dow: now.dow } : addDays(now.y, now.m, now.d, n);
        if (ferieOn(day.y, day.m, day.d) || holidayName(day.y, day.m, day.d)) continue;
        const fasce = (S.orari[day.dow] || { fasce: [] }).fasce;
        const f = fasce.find((x) => n > 0 || x[0] * 60 + x[1] > now.min);
        if (f) return { n: n, dow: day.dow, f: f, date: day };
      }
      return null;
    }
    const nx = nextOpening();
    if (fer) {
      const back = nx ? " — riapriamo " + dayLabel(nx.n, nx.dow) + " alle " + fmtTime(nx.f[0], nx.f[1]) : "";
      return { state: "closed", html: '<span class="dot dot-closed"></span> ' + (fer.nota || "Chiusi per ferie") + back };
    }
    if (hol) {
      return { state: "warn", html: '<span class="dot dot-warn"></span> Oggi è festa (' + hol + '): lo studio potrebbe essere chiuso, chiamaci per conferma' };
    }
    const active = today.fasce.find((x) => now.min >= x[0] * 60 + x[1] && now.min < x[2] * 60 + x[3]);
    if (active) return { state: "open", html: '<span class="dot dot-open"></span> Aperti ora — chiudiamo alle ' + fmtTime(active[2], active[3]) };
    if (nx) return { state: "closed", html: '<span class="dot dot-closed"></span> Chiuso ora — apriamo ' + dayLabel(nx.n, nx.dow) + " alle " + fmtTime(nx.f[0], nx.f[1]) };
    return { state: "closed", html: '<span class="dot dot-closed"></span> Chiuso — contattaci per un appuntamento' };
  }
  function renderOpenStatus() {
    const st = computeStatus();
    lastStatus = st;
    $$("[data-open-status]").forEach((el) => { if (el.innerHTML !== st.html) el.innerHTML = st.html; });
    $$("[data-status-dot]").forEach((el) => { el.className = "dot dot-" + (st.state === "warn" ? "warn" : st.state === "open" ? "open" : "closed"); el.title = st.html.replace(/<[^>]+>/g, "").trim(); });
    root.dataset.studioState = st.state;
  }
  function renderHoursTable() {
    const body = $("[data-hours-body]");
    if (!body) return;
    const now = romeNow();
    const order = [1, 2, 3, 4, 5, 6, 0];
    body.innerHTML = order.map((idx) => {
      const g = S.orari[idx];
      const t = g.fasce.length ? g.fasce.map((x) => fmtTime(x[0], x[1]) + "–" + fmtTime(x[2], x[3])).join(" · ") : "Chiuso";
      return '<tr' + (idx === now.dow ? ' class="today"' : "") + "><td>" + S.giorni[idx] + "</td><td>" + t + "</td></tr>";
    }).join("");
  }

  /* ------------------------------------------------------------------ *
   *  Collegamenti dinamici (tel, WhatsApp, mail, mappe, social)
   * ------------------------------------------------------------------ */
  function fillDynamicLinks() {
    $$("[data-tel]").forEach((el) => { el.href = "tel:" + S.telefonoHref; });
    $$("[data-tel-text]").forEach((el) => { el.textContent = S.telefono; });
    $$("[data-email]").forEach((el) => { el.href = "mailto:" + S.email; });
    $$("[data-email-text]").forEach((el) => { el.textContent = S.email; });
    $$("[data-address-text]").forEach((el) => { el.textContent = S.indirizzo; });
    $$("[data-gmaps]").forEach((el) => { el.href = S.googleMapsUrl; });
    $$("[data-amaps]").forEach((el) => { el.href = S.appleMapsUrl; });
    $$("[data-reviews-url]").forEach((el) => { el.href = S.recensioniUrl; });
    $$("[data-facebook]").forEach((el) => { if (S.facebook) { el.href = S.facebook; el.hidden = false; } else el.hidden = true; });
    $$("[data-instagram]").forEach((el) => { if (S.instagram) { el.href = S.instagram; el.hidden = false; } else el.hidden = true; });
    $$(".social-row").forEach((r) => { if (!$$("a:not([hidden])", r).length) r.hidden = true; });
    $$("[data-whatsapp]").forEach((el) => {
      const msg = el.getAttribute("data-wa-msg") || "Buongiorno, vorrei avere informazioni sullo Studio Dentistico Colombo.";
      el.href = "https://wa.me/" + S.whatsappHref + "?text=" + encodeURIComponent(msg);
    });
    $$("[data-since]").forEach((el) => { el.dataset.countTo = String(romeNow().y - parseInt(el.dataset.since, 10)); });
  }

  /* ------------------------------------------------------------------ *
   *  Testata, indicatore di scorrimento, torna su, parallasse
   * ------------------------------------------------------------------ */
  let header, progress, toTop, heroVisual, pathEls, spinEls, parallaxEls;
  function initScrollUI() {
    header = $(".site-header");
    progress = $(".scroll-progress");
    toTop = $(".to-top");
    heroVisual = $(".hero-visual");
    pathEls = $$("[data-path]");
    spinEls = $$(".svc-visual");
    parallaxEls = $$("[data-parallax]");
    if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));
    let ticking = false;
    const onScroll = () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { ticking = false; updateScroll(); }); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateScroll();
  }
  function updateScroll() {
    checkReveals();
    const y = window.scrollY, vh = window.innerHeight;
    const max = Math.max(1, root.scrollHeight - vh);
    const p = clamp(y / max, 0, 1);
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (progress) {
      progress.style.setProperty("--p1", clamp(p * 3, 0, 1).toFixed(4));
      progress.style.setProperty("--p2", clamp(p * 3 - 1, 0, 1).toFixed(4));
      progress.style.setProperty("--p3", clamp(p * 3 - 2, 0, 1).toFixed(4));
    }
    if (toTop) { toTop.classList.toggle("is-visible", y > 700); toTop.style.setProperty("--sp-prog", p.toFixed(4)); }
    if (heroVisual && !reduce && y < 1400) heroVisual.style.setProperty("--sy", Math.min(y, 900));
    pathEls.forEach((el) => {
      const r = el.getBoundingClientRect();
      const prog = clamp((vh * 0.62 - r.top) / Math.max(1, r.height * 0.92), 0, 1);
      el.style.setProperty("--p", prog.toFixed(4));
      $$(".path-step,.tl-step", el).forEach((st) => { st.classList.toggle("is-on", st.getBoundingClientRect().top < vh * 0.64); });
    });
    if (!reduce) {
      spinEls.forEach((el) => { const r = el.getBoundingClientRect(); el.style.setProperty("--spin", (-((r.top + r.height / 2 - vh / 2) / vh)).toFixed(3)); });
      parallaxEls.forEach((el) => { const r = el.parentElement.getBoundingClientRect(); const k = parseFloat(el.dataset.parallax) || 0.12; el.style.setProperty("--py", ((r.top + r.height / 2 - vh / 2) * -k).toFixed(1)); });
    }
  }

  /* ------------------------------------------------------------------ *
   *  Menu: voci attive, mega menu desktop, menu mobile
   * ------------------------------------------------------------------ */
  function initNav() {
    const nav = $(".nav-main"), toggle = $(".menu-toggle");
    const cur = document.body.dataset.nav;
    if (cur) {
      const a = $('.nav-links > a[data-nav="' + cur + '"]');
      if (a) a.setAttribute("aria-current", "page");
      const it = $('.nav-item[data-nav="' + cur + '"]');
      if (it) it.classList.add("is-current");
    }
    const items = $$(".nav-item");
    const mq = window.matchMedia("(max-width: 1240px)");
    const closeAll = (except) => items.forEach((it) => { if (it !== except) setOpen(it, false); });
    function syncInert() {
      items.forEach((it) => {
        const mi = $(".mega-inner", it); if (!mi) return;
        if (mq.matches && !it.classList.contains("is-open")) mi.setAttribute("inert", ""); else mi.removeAttribute("inert");
      });
    }
    function setOpen(it, open) {
      it.classList.toggle("is-open", open);
      const t = $(".nav-trigger", it);
      if (t) t.setAttribute("aria-expanded", String(open));
      syncInert();
    }
    syncInert();
    items.forEach((it) => {
      const t = $(".nav-trigger", it);
      if (!t) return;
      let timer;
      t.addEventListener("click", () => { const o = !it.classList.contains("is-open"); closeAll(it); setOpen(it, o); });
      const canHover = window.matchMedia("(hover:hover) and (pointer:fine)");
      it.addEventListener("pointerenter", (e) => { if (mq.matches || !canHover.matches || e.pointerType === "touch") return; clearTimeout(timer); timer = setTimeout(() => { closeAll(it); setOpen(it, true); }, 90); });
      it.addEventListener("pointerleave", (e) => { if (mq.matches || e.pointerType === "touch") return; clearTimeout(timer); timer = setTimeout(() => setOpen(it, false), 220); });
      it.addEventListener("focusout", (e) => { if (!mq.matches && !it.contains(e.relatedTarget)) setOpen(it, false); });
      it.addEventListener("keydown", (e) => { if (e.key === "Escape" && it.classList.contains("is-open")) { setOpen(it, false); t.focus(); e.stopPropagation(); } });
    });
    document.addEventListener("click", (e) => { if (!mq.matches && !e.target.closest(".nav-item")) closeAll(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !mq.matches && !document.querySelector("dialog[open]")) closeAll(); });
    if (!toggle || !nav) return;
    const inertTargets = () => $$("main, .site-footer, .wa-float, .to-top");
    function setMenu(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
      document.body.style.overflow = open ? "hidden" : "";
      inertTargets().forEach((el) => { if (open) el.setAttribute("inert", ""); else el.removeAttribute("inert"); });
      if (open) { const f = $(".m-search", nav) || $("a", nav); if (f) setTimeout(() => f.focus({ preventScroll: true }), 60); }
    }
    toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
    $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); toggle.focus(); } });
    mq.addEventListener("change", () => { setMenu(false); closeAll(); syncInert(); });
    // focus trap leggero nel menu mobile
    nav.addEventListener("keydown", (e) => {
      if (e.key !== "Tab" || !nav.classList.contains("is-open")) return;
      const f = $$("a[href],button:not([disabled])", nav).filter((x) => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first)) { e.preventDefault(); toggle.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); toggle.focus(); }
    });
  }

  /* ------------------------------------------------------------------ *
   *  Animazioni allo scorrimento (tutte spente con "riduci movimento")
   * ------------------------------------------------------------------ */
  function splitWords(el) {
    let n = 0;
    const walk = (node) => {
      Array.from(node.childNodes).forEach((c) => {
        if (c.nodeType === 3) {
          const parts = c.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          parts.forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(" ")); return; }
            const w = document.createElement("span"); w.className = "w-mask";
            const i = document.createElement("span"); i.style.setProperty("--wi", n++); i.textContent = p;
            w.appendChild(i); frag.appendChild(w);
          });
          node.replaceChild(frag, c);
        } else if (c.nodeType === 1 && !c.matches("br,svg")) walk(c);
      });
    };
    walk(el);
  }
  function addSmile(h) {
    if (h.nextElementSibling && h.nextElementSibling.classList.contains("smile")) return;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "smile"); svg.setAttribute("viewBox", "0 0 120 20"); svg.setAttribute("aria-hidden", "true");
    [["s1", "M3 3 Q60 17 117 3"], ["s2", "M16 7 Q60 18.500 104 7"], ["s3", "M30 11 Q60 19 90 11"]].forEach((a) => {
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("class", a[0]); p.setAttribute("d", a[1]); p.setAttribute("pathLength", "1"); svg.appendChild(p);
    });
    h.insertAdjacentElement("afterend", svg);
  }
  function countUp(el) {
    const to = parseFloat(el.dataset.countTo || el.dataset.count || "0");
    if (reduce || !isFinite(to)) { el.textContent = String(to); return; }
    const dur = 1400, t0 = performance.now();
    const step = (t) => {
      const k = clamp((t - t0) / dur, 0, 1), e = 1 - Math.pow(1 - k, 4);
      el.textContent = String(Math.round(to * e));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function initAnimations() {
    $$(".stat .big[data-count], .stat .big[data-count-to]").forEach((el) => { if (!reduce && el.dataset.countTo) el.textContent = "0"; });
    if (reduce || !("IntersectionObserver" in window)) {
      $$(".stat .big").forEach((el) => { const to = el.dataset.countTo || el.dataset.count; if (to) el.textContent = to; });
      return;
    }
    $$("[data-split]").forEach(splitWords);
    $$("[data-smile]").forEach(addSmile);
    const groups = new Map();
    $$("[data-anim]").forEach((el) => {
      const p = el.parentElement, n = groups.get(p) || 0;
      groups.set(p, n + 1);
      el.style.setProperty("--i", Math.min(n, 7));
      if (el.dataset.anim === "iris") {
        const ic = el.querySelector(".icon, .fo-ico, .hc-ico") || (el.querySelector("img") ? null : el.querySelector("svg"));
        const r = el.getBoundingClientRect();
        if (ic && r.width) { const ir = ic.getBoundingClientRect(); el.style.setProperty("--ox", Math.round(ir.left - r.left + ir.width / 2) + "px"); el.style.setProperty("--oy", Math.round(ir.top - r.top + ir.height / 2) + "px"); }
        else if (el.querySelector("img")) { el.style.setProperty("--ox", "50%"); el.style.setProperty("--oy", "40%"); }
      }
    });
    // Rivelazione allo scorrimento: controllo la posizione degli elementi a ogni scroll.
    // (Non uso IntersectionObserver: gli elementi con clip-path a zero non risultano mai "visibili" per il browser.)
    pending = $$("[data-split],[data-anim],.smile,.portrait,.stat");
    checkReveals();
    window.addEventListener("load", checkReveals);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(checkReveals);
  }
  let pending = [];
  function revealEl(el) {
    el.classList.add("is-in");
    if (el.matches('[data-anim="iris"],[data-split],.portrait')) setTimeout(() => el.classList.add("is-done"), 2200);
    const c = el.matches(".big") ? el : el.querySelector(".big[data-count], .big[data-count-to]");
    if (c) countUp(c);
  }
  function checkReveals() {
    if (!pending.length) return;
    const vh = window.innerHeight, vw = window.innerWidth;
    pending = pending.filter((el) => {
      const r = el.getBoundingClientRect();
      if (!r.width && !r.height) return true;               // nascosto (display:none): riprovo più tardi
      if (r.top < vh * 0.93 && r.bottom > 0 && r.left < vw && r.right > 0) { revealEl(el); return false; }
      return true;
    });
  }
  function initHeroReveal() {
    const v = $(".hero-visual");
    if (!v) return;
    const go = () => v.classList.add("is-revealed");
    if (reduce) { go(); v.classList.add("is-settled"); return; }
    requestAnimationFrame(() => setTimeout(go, 60));
    setTimeout(() => v.classList.add("is-settled"), 2400);
  }

  /* ------------------------------------------------------------------ *
   *  "Cosa ti serve?"
   * ------------------------------------------------------------------ */
  function initFinder() {
    const f = $("[data-finder]");
    if (!f) return;
    const opts = $$("[data-fopt]", f), panels = $$(".finder-panel", f);
    const show = (id) => {
      opts.forEach((o) => o.setAttribute("aria-pressed", String(o.dataset.fopt === id)));
      panels.forEach((p) => p.classList.toggle("is-active", p.id === "fp-" + id));
      const p = $("#fp-" + id, f);
      if (p && window.matchMedia("(max-width:860px)").matches) { const r = p.getBoundingClientRect(); if (r.top > window.innerHeight * 0.55 || r.top < 60) p.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }); }
    };
    opts.forEach((o) => o.addEventListener("click", () => show(o.dataset.fopt)));
  }

  /* ------------------------------------------------------------------ *
   *  Carosello schede (home) con trascinamento del mouse
   * ------------------------------------------------------------------ */
  function initRail() {
    $$("[data-rail]").forEach((wrap) => {
      const scope = wrap.closest("section") || document;
      const rail = $(".schede-rail", wrap), prev = $("[data-rail-prev]", scope), next = $("[data-rail-next]", scope), bar = $(".rail-bar i", wrap);
      if (!rail) return;
      const upd = () => {
        const max = rail.scrollWidth - rail.clientWidth;
        if (prev) prev.disabled = rail.scrollLeft < 8;
        if (next) next.disabled = rail.scrollLeft > max - 8;
        if (bar && max > 0) bar.style.setProperty("--rail-x", ((rail.scrollLeft / max) * 233).toFixed(1) + "%");
      };
      const by = (dir) => { const c = $(".scheda-card", rail); const w = c ? c.getBoundingClientRect().width + 16 : 300; rail.scrollBy({ left: dir * w * (window.innerWidth > 900 ? 2 : 1), behavior: reduce ? "auto" : "smooth" }); };
      prev && prev.addEventListener("click", () => by(-1));
      next && next.addEventListener("click", () => by(1));
      rail.addEventListener("scroll", () => { upd(); checkReveals(); }, { passive: true });
      window.addEventListener("resize", upd);
      upd();
      let down = false, sx = 0, sl = 0, moved = false;
      rail.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse" || e.button !== 0 || e.target.closest("a,button")) return; down = true; moved = false; sx = e.clientX; sl = rail.scrollLeft; });
      window.addEventListener("pointermove", (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 4) { moved = true; rail.style.scrollSnapType = "none"; rail.style.cursor = "grabbing"; } if (moved) rail.scrollLeft = sl - dx; });
      window.addEventListener("pointerup", () => { if (!down) return; down = false; rail.style.scrollSnapType = ""; rail.style.cursor = ""; });
    });
  }

  /* ------------------------------------------------------------------ *
   *  Visualizzatore delle schede (finestra a tutto schermo, apertura immediata)
   * ------------------------------------------------------------------ */
  const viewer = { dlg: null, frame: null, load: null, title: null, list: [], idx: 0, last: null };
  function buildViewer() {
    if (viewer.dlg) return viewer.dlg;
    const d = document.createElement("dialog");
    d.className = "viewer"; d.setAttribute("aria-label", "Scheda informativa");
    d.innerHTML =
      '<div class="viewer-bar">' +
      '<button class="vbtn icon" type="button" data-v-prev aria-label="Scheda precedente">' + ICON.arrowL + "</button>" +
      '<button class="vbtn icon" type="button" data-v-next aria-label="Scheda successiva">' + ICON.arrowR + "</button>" +
      '<h2 class="viewer-title"></h2>' +
      '<button class="vbtn" type="button" data-v-share aria-label="Condividi la scheda">' + ICON.share + '<span class="lbl">Condividi</span></button>' +
      '<a class="vbtn" data-v-full target="_blank" rel="noopener" aria-label="Apri la scheda in una pagina intera">' + ICON.ext + '<span class="lbl">Pagina intera</span></a>' +
      '<button class="vbtn close" type="button" data-v-close aria-label="Chiudi">' + ICON.close + '<span class="lbl">Chiudi</span></button>' +
      "</div>" +
      '<div class="viewer-frame"><div class="vload"><i></i>Apro la scheda…</div><iframe title="Scheda informativa" loading="eager"></iframe></div>';
    document.body.appendChild(d);
    viewer.dlg = d; viewer.frame = $("iframe", d); viewer.load = $(".vload", d); viewer.title = $(".viewer-title", d);
    $("[data-v-close]", d).addEventListener("click", () => d.close());
    $("[data-v-prev]", d).addEventListener("click", () => step(-1));
    $("[data-v-next]", d).addEventListener("click", () => step(1));
    $("[data-v-share]", d).addEventListener("click", shareCurrent);
    d.addEventListener("click", (e) => { if (e.target === d) d.close(); });
    d.addEventListener("close", () => { document.body.classList.remove("modal-open"); viewer.frame.src = "about:blank"; if (viewer.last && viewer.last.focus) viewer.last.focus({ preventScroll: true }); });
    viewer.frame.addEventListener("load", () => { if (viewer.frame.src !== "about:blank") viewer.load.classList.add("done"); });
    return d;
  }
  function schedaUrl(slug, embed) { return new URL("schede/" + slug + ".html" + (embed ? "?embed=1" : ""), SITE_ROOT).href; }
  function showScheda(i) {
    const it = viewer.list[i]; if (!it) return;
    viewer.idx = i;
    viewer.load.classList.remove("done");
    viewer.frame.src = schedaUrl(it.slug, true);
    viewer.title.textContent = it.title;
    $("[data-v-full]", viewer.dlg).href = schedaUrl(it.slug, false);
    $("[data-v-prev]", viewer.dlg).hidden = viewer.list.length < 2;
    $("[data-v-next]", viewer.dlg).hidden = viewer.list.length < 2;
  }
  function step(dir) { const n = viewer.list.length; if (n < 2) return; showScheda((viewer.idx + dir + n) % n); }
  function openScheda(trigger) {
    if (typeof HTMLDialogElement === "undefined") return false;
    const d = buildViewer();
    const slug = trigger.dataset.schedaOpen;
    const scope = trigger.closest("[data-scheda-set]") || document;
    const cards = $$("[data-scheda-open]", scope);
    const seen = new Set();
    viewer.list = cards.map((c) => ({ slug: c.dataset.schedaOpen, title: c.dataset.schedaTitle || c.getAttribute("aria-label") || c.dataset.schedaOpen })).filter((x) => !seen.has(x.slug) && seen.add(x.slug));
    const i = Math.max(0, viewer.list.findIndex((x) => x.slug === slug));
    viewer.last = trigger;
    document.body.classList.add("modal-open");
    d.showModal();
    showScheda(i);
    return true;
  }
  function shareCurrent() {
    const it = viewer.list[viewer.idx]; if (!it) return;
    const url = schedaUrl(it.slug, false);
    if (navigator.share) { navigator.share({ title: it.title + " — Studio Dentistico Colombo", url: url }).catch(() => {}); return; }
    copyText(url, "Link della scheda copiato");
  }
  function initViewerTriggers() {
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-scheda-open]");
      if (!t || e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      if (openScheda(t)) e.preventDefault();
    });
  }

  /* ------------------------------------------------------------------ *
   *  Utilità: toast, copia, vCard
   * ------------------------------------------------------------------ */
  let toastEl, toastT;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "toast"; toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("show"), 2400);
  }
  function copyText(text, msg) {
    const ok = () => toast(msg || "Copiato");
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(text).then(ok, () => fallbackCopy(text, ok)); }
    else fallbackCopy(text, ok);
  }
  function fallbackCopy(text, cb) {
    const ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;opacity:0;top:0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); cb(); } catch (e) { toast("Copia non riuscita: seleziona e copia a mano"); }
    ta.remove();
  }
  function initCopyAndVcard() {
    $$("[data-copy]").forEach((b) => b.addEventListener("click", () => copyText(b.dataset.copy === "address" ? S.indirizzo : b.dataset.copy === "tel" ? S.telefono : b.dataset.copy, b.dataset.copyMsg || "Copiato")));
    $$("[data-vcard]").forEach((b) => b.addEventListener("click", () => {
      const v = ["BEGIN:VCARD", "VERSION:3.0", "FN:Studio Dentistico Colombo", "ORG:Studio Dentistico Colombo", "TITLE:Studio dentistico",
        "TEL;TYPE=WORK,VOICE:" + S.telefonoHref, "TEL;TYPE=CELL,MSG:+" + S.whatsappHref, "EMAIL;TYPE=WORK:" + S.email,
        "ADR;TYPE=WORK:;;Via Fontanella;Patti;ME;98066;Italia", "URL:" + SITE_ROOT, "END:VCARD"].join("\r\n");
      const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([v], { type: "text/vcard" })); a.download = "Studio-Dentistico-Colombo.vcf";
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      toast("Contatto scaricato");
    }));
  }

  /* ------------------------------------------------------------------ *
   *  Ricerca nel sito
   * ------------------------------------------------------------------ */
  const pal = { dlg: null, input: null, list: null, items: [], active: 0, loaded: false, loading: null, data: [] };
  function loadIndex() {
    if (window.SITE_INDEX) { pal.data = window.SITE_INDEX; return Promise.resolve(); }
    if (pal.loading) return pal.loading;
    pal.loading = new Promise((res) => {
      const s = document.createElement("script"); s.src = new URL("js/site-index.js", SITE_ROOT).href;
      s.onload = () => { pal.data = window.SITE_INDEX || []; res(); }; s.onerror = () => res();
      document.head.appendChild(s);
    });
    return pal.loading;
  }
  const KIND_ICON = { Trattamenti: ICON.tooth, Schede: ICON.file, Domande: ICON.info, Pagine: ICON.page };
  function buildPalette() {
    if (pal.dlg) return;
    const d = document.createElement("dialog");
    d.className = "palette"; d.setAttribute("aria-label", "Cerca nel sito");
    d.innerHTML = '<div class="pal-head">' + ICON.search +
      '<input type="search" role="combobox" aria-expanded="true" aria-controls="pal-list" aria-autocomplete="list" placeholder="Cerca un trattamento, una scheda, una domanda…" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" aria-label="Cerca nel sito">' +
      '<button class="pal-close" type="button" aria-label="Chiudi la ricerca">' + ICON.close + "</button></div>" +
      '<div class="pal-list" id="pal-list" role="listbox"></div>' +
      '<div class="pal-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> per spostarti</span><span><kbd>Invio</kbd> per aprire</span><span><kbd>Esc</kbd> per chiudere</span></div>';
    document.body.appendChild(d);
    pal.dlg = d; pal.input = $("input", d); pal.list = $(".pal-list", d);
    $(".pal-close", d).addEventListener("click", () => d.close());
    d.addEventListener("click", (e) => { if (e.target === d) d.close(); });
    d.addEventListener("close", () => document.body.classList.remove("modal-open"));
    pal.input.addEventListener("input", () => renderPalette(pal.input.value));
    pal.input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") { e.preventDefault(); movePal(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); movePal(-1); }
      else if (e.key === "Enter") { const it = pal.items[pal.active]; if (it) { e.preventDefault(); go(it); } }
      else if (e.key === "Escape") { e.preventDefault(); d.close(); }
    });
    pal.list.addEventListener("click", (e) => { const li = e.target.closest("[data-i]"); if (li) go(pal.items[+li.dataset.i]); });
    pal.list.addEventListener("pointermove", (e) => { const li = e.target.closest("[data-i]"); if (li && +li.dataset.i !== pal.active) { pal.active = +li.dataset.i; markPal(); } });
  }
  function go(it) { location.href = new URL(it.u, SITE_ROOT).href; }
  function movePal(d) { if (!pal.items.length) return; pal.active = (pal.active + d + pal.items.length) % pal.items.length; markPal(true); }
  function markPal(scroll) {
    $$("[data-i]", pal.list).forEach((li) => {
      const on = +li.dataset.i === pal.active;
      li.setAttribute("aria-selected", String(on));
      if (on) { pal.input.setAttribute("aria-activedescendant", li.id); if (scroll) li.scrollIntoView({ block: "nearest" }); }
    });
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function hi(text, toks) {
    let out = esc(text);
    toks.forEach((t) => { if (t.length < 2) return; const re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"); out = out.replace(re, "<mark>$1</mark>"); });
    return out;
  }
  function searchEntries(q) {
    const toks = norm(q).split(" ").filter(Boolean);
    if (!toks.length) return pal.data.filter((e) => e.p).slice(0, 8);
    const res = [];
    pal.data.forEach((e) => {
      const t = norm(e.t), k = norm(e.k || ""), s = norm(e.s || "");
      let score = 0, all = true;
      toks.forEach((tk) => {
        let sc = 0;
        if (t.startsWith(tk)) sc = 8; else if (t.split(" ").some((w) => w.startsWith(tk))) sc = 6; else if (t.includes(tk)) sc = 4;
        else if (k.split(" ").some((w) => w.startsWith(tk))) sc = 5; else if (k.includes(tk)) sc = 3; else if (s.includes(tk)) sc = 1;
        if (!sc) all = false; score += sc;
      });
      if (all) res.push({ e: e, score: score + (e.g === "Trattamenti" ? 1 : 0) });
    });
    const top = res.sort((a, b) => b.score - a.score).slice(0, 12).map((r) => r.e);
    const order = []; top.forEach((e) => { if (order.indexOf(e.g) < 0) order.push(e.g); });
    return order.reduce((acc, g) => acc.concat(top.filter((e) => e.g === g)), []);
  }
  function renderPalette(q) {
    const items = searchEntries(q);
    pal.items = items; pal.active = 0;
    const toks = norm(q).split(" ").filter(Boolean);
    if (!items.length) {
      pal.list.innerHTML = '<div class="pal-empty"><b>Nessun risultato</b>Prova con un\'altra parola, per esempio «impianto», «carie» o «bambini». Oppure <a class="link-underline" href="' + new URL("contatti.html", SITE_ROOT).href + '">scrivici</a>.</div>';
      return;
    }
    let html = "", last = "", i = 0;
    items.forEach((e) => {
      if (e.g !== last) { html += '<div class="pal-group" role="presentation">' + (q.trim() ? e.g : "Per iniziare") + "</div>"; last = e.g; }
      html += '<div class="pal-item" role="option" id="pal-o' + i + '" data-i="' + i + '" aria-selected="false"><span class="pi-ico">' + (KIND_ICON[e.g] || ICON.page) + '</span><span><span class="pi-t">' + hi(e.t, toks) + '</span><br><span class="pi-s">' + esc(e.s || "") + "</span></span></div>";
      i++;
    });
    pal.list.innerHTML = html; markPal();
  }
  function openPalette() {
    buildPalette();
    document.body.classList.add("modal-open");
    if (!pal.dlg.open) pal.dlg.showModal();
    pal.input.value = ""; pal.input.focus();
    pal.list.innerHTML = '<div class="pal-empty">Carico…</div>';
    loadIndex().then(() => renderPalette(pal.input.value));
  }
  function initSearch() {
    if (typeof HTMLDialogElement === "undefined") { $$("[data-open-search]").forEach((b) => { b.hidden = true; }); return; }
    $$("[data-open-search]").forEach((b) => b.addEventListener("click", (e) => { e.preventDefault(); const nav = $(".nav-main.is-open"); if (nav) { const t = $(".menu-toggle"); t && t.click(); } openPalette(); }));
    document.addEventListener("keydown", (e) => {
      const typing = /^(input|textarea|select)$/i.test((e.target.tagName || "")) || e.target.isContentEditable;
      if (((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") || (e.key === "/" && !typing)) { e.preventDefault(); openPalette(); }
    });
    // precarico l'indice quando il browser è a riposo
    const idle = window.requestIdleCallback || ((f) => setTimeout(f, 2500));
    idle(() => { if (!navigator.connection || !navigator.connection.saveData) loadIndex(); });
  }

  /* ------------------------------------------------------------------ *
   *  Filtri: schede e domande frequenti; indice dei paragrafi
   * ------------------------------------------------------------------ */
  function initFilters() {
    $$("[data-filter]").forEach((box) => {
      const items = $$("[data-f-item]", box), pills = $$("[data-f-cat]", box), input = $("[data-f-search]", box), count = $("[data-f-count]", box), empty = $("[data-f-empty]", box), groups = $$("[data-f-group]", box);
      let cat = "all";
      const apply = () => {
        const toks = norm(input ? input.value : "").split(" ").filter(Boolean);
        let n = 0;
        items.forEach((it) => {
          const okCat = cat === "all" || (it.dataset.fCat || "").split(" ").includes(cat);
          const hay = norm(it.dataset.fText || it.textContent);
          const okTxt = toks.every((t) => hay.includes(t));
          const show = okCat && okTxt; it.hidden = !show; if (show) n++;
          if (show && toks.length && it.tagName === "DETAILS") it.open = true;
        });
        groups.forEach((g) => { g.hidden = !$$("[data-f-item]:not([hidden])", g).length; });
        if (count) count.textContent = n === 1 ? "1 risultato" : n + " risultati";
        if (empty) empty.hidden = n > 0;
      };
      pills.forEach((p) => p.addEventListener("click", () => { cat = p.dataset.fCat; pills.forEach((x) => x.setAttribute("aria-pressed", String(x === p))); apply(); }));
      input && input.addEventListener("input", apply);
      const q = new URLSearchParams(location.search).get("q");
      if (q && input) input.value = q;
      apply();
    });
    // apertura diretta di una domanda via #ancora
    const openHash = () => { if (!location.hash) return; const t = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (t && t.tagName === "DETAILS") { t.open = true; setTimeout(() => t.scrollIntoView({ block: "center" }), 120); } };
    openHash(); window.addEventListener("hashchange", openHash);
  }
  function initToc() {
    const links = $$(".toc a, .toc-bar a");
    if (!links.length || !("IntersectionObserver" in window)) return;
    const secs = $$(".svc-sec[id]");
    const set = (id) => links.forEach((a) => { const on = a.getAttribute("href") === "#" + id; if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); if (on && a.closest(".toc-bar")) { const bar = a.closest(".toc-bar"); bar.scrollTo({ left: a.offsetLeft - 24, behavior: "smooth" }); } });
    const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) set(e.target.id); }); }, { rootMargin: "-25% 0px -65% 0px" });
    secs.forEach((s) => io.observe(s));
  }

  /* ------------------------------------------------------------------ *
   *  Mappa (si carica solo al tocco: nessun dato a Google prima)
   * ------------------------------------------------------------------ */
  function initMap() {
    $$("[data-map-load]").forEach((btn) => btn.addEventListener("click", () => {
      const card = btn.closest(".map-card"); if (!card) return;
      const f = document.createElement("iframe");
      f.src = S.mappaIncorporata; f.title = "Mappa: Studio Dentistico Colombo a Patti (ME)"; f.referrerPolicy = "no-referrer-when-downgrade"; f.allowFullscreen = true;
      card.appendChild(f);
      btn.textContent = "Mappa caricata";
    }));
  }

  /* ------------------------------------------------------------------ *
   *  Recensioni Google
   * ------------------------------------------------------------------ */
  function starsHtml(n) { return '<span class="stars" aria-label="' + n + ' stelle su 5">' + Array.from({ length: Math.round(n) }).map(() => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17l-5.9 3 1.2-6.5L2.5 8.9 9.100 8z"/></svg>').join("") + "</span>"; }
  function renderReviews(list, summary) {
    const box = $("[data-reviews]");
    if (!box || !list.length) return;
    const sum = summary && summary.rating ? '<div class="rev-sum"><b class="num">' + String(summary.rating).replace(".", ",") + "</b>" + starsHtml(summary.rating) + "<span>" + (summary.count ? summary.count + " recensioni su Google" : "su Google") + "</span></div>" : "";
    box.innerHTML = sum + '<div class="review-track">' + list.slice(0, 8).map((r) =>
      '<article class="review-card">' + starsHtml(r.stelle || 5) + "<p>" + esc(r.testo || "") + "</p><footer><strong>" + esc(r.nome || "Paziente") + "</strong>" + (r.quando ? " · " + esc(r.quando) : "") + "</footer></article>").join("") + "</div>";
    box.hidden = false;
    const fb = $("[data-reviews-fallback]"); if (fb) fb.hidden = true;
  }
  function initReviews() {
    if (!$("[data-reviews]")) return;
    if (S.recensioniApi) {
      fetch(new URL("api/recensioni.php", SITE_ROOT).href, { headers: { Accept: "application/json" } })
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((j) => { if (j && j.recensioni && j.recensioni.length) renderReviews(j.recensioni, j.riepilogo); else if ((S.recensioni || []).length) renderReviews(S.recensioni); })
        .catch(() => { if ((S.recensioni || []).length) renderReviews(S.recensioni); });
    } else if ((S.recensioni || []).length) renderReviews(S.recensioni);
  }

  /* ------------------------------------------------------------------ *
   *  Moduli
   * ------------------------------------------------------------------ */
  function validateField(field) {
    const input = $("input:not([type=radio]):not([type=checkbox]), select, textarea", field);
    if (!input) return true;
    let valid = input.checkValidity();
    if (input.type === "tel" && input.value.trim()) valid = /^[0-9+\s().-]{6,}$/.test(input.value.trim());
    if (input.dataset.closedDay === "1") valid = false;
    field.classList.toggle("invalid", !valid);
    return valid;
  }
  function initContactForm() {
    const form = $("#contact-form"); if (!form) return;
    const status = $(".form-status", form);
    $$(".field input,.field textarea", form).forEach((i) => i.addEventListener("blur", () => validateField(i.closest(".field"))));
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = $$(".field", form).map(validateField).every(Boolean);
      if (!ok) { status.textContent = "Controlla i campi evidenziati e riprova."; status.className = "form-status err"; const bad = $(".field.invalid input,.field.invalid textarea", form); bad && bad.focus(); return; }
      const d = Object.fromEntries(new FormData(form).entries());
      const subject = encodeURIComponent("Richiesta informazioni dal sito — " + d.nome);
      const body = encodeURIComponent("Nome: " + d.nome + "\nTelefono: " + (d.telefono || "-") + "\nEmail: " + d.email + "\n\nMessaggio:\n" + d.messaggio);
      window.location.href = "mailto:" + S.email + "?subject=" + subject + "&body=" + body;
      status.innerHTML = 'Si sta aprendo il tuo programma di posta con il messaggio pronto. Se non si apre, scrivici a <a class="link-underline" href="mailto:' + S.email + '">' + S.email + "</a>.";
      status.className = "form-status ok";
    });
  }
  function initBookingForm() {
    const form = $("#booking-form"); if (!form) return;
    const status = $(".form-status", form);
    const date = $("#p-data", form), urgent = $("#p-urgente", form), urgentBox = $(".urgent-box", form);
    const pm = $('input[name="fascia"][value="Pomeriggio"]', form), am = $('input[name="fascia"][value="Mattina"]', form), any = $('input[name="fascia"][value="Indifferente"]', form);
    const todayRome = romeNow(); const todayIso = isoOf(todayRome.y, todayRome.m, todayRome.d);
    if (date) date.min = todayIso;
    function checkDate() {
      if (!date) return;
      const f = date.closest(".field"), err = $(".error", f);
      date.dataset.closedDay = "0";
      if (pm) pm.disabled = false; if (am) am.disabled = false;
      if (!date.value) { f.classList.remove("invalid"); return; }
      const [y, m, d] = date.value.split("-").map(Number);
      const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
      const hol = holidayName(y, m, d), fer = ferieOn(y, m, d), fasce = (S.orari[dow] || { fasce: [] }).fasce;
      let msg = "";
      if (fer) msg = (fer.nota || "Lo studio è chiuso") + " in quella data: scegli un altro giorno.";
      else if (hol) msg = "Il " + d + "/" + m + " è festa (" + hol + "): lo studio potrebbe essere chiuso. Scegli un altro giorno o chiamaci.";
      else if (!fasce.length) msg = "Il " + S.giorni[dow].toLowerCase() + " lo studio è chiuso: scegli un altro giorno.";
      if (msg) { date.dataset.closedDay = "1"; f.classList.add("invalid"); if (err) err.textContent = msg; return; }
      f.classList.remove("invalid");
      const hasAm = fasce.some((x) => x[0] < 13), hasPm = fasce.some((x) => x[0] >= 13);
      if (pm) pm.disabled = !hasPm; if (am) am.disabled = !hasAm;
      if ((pm && pm.checked && !hasPm) || (am && am.checked && !hasAm)) { if (any) any.checked = true; }
    }
    date && date.addEventListener("change", checkDate);
    urgent && urgent.addEventListener("change", () => urgentBox && urgentBox.classList.toggle("on", urgent.checked));
    $$(".field input,.field select", form).forEach((i) => { if (i.type !== "radio" && i.type !== "date") i.addEventListener("blur", () => validateField(i.closest(".field"))); });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      checkDate();
      const ok = $$(".field", form).map(validateField).every(Boolean);
      if (!ok) { status.textContent = "Controlla i campi evidenziati e riprova."; status.className = "form-status err"; const bad = $(".field.invalid input,.field.invalid select", form); bad && bad.focus(); return; }
      const d = Object.fromEntries(new FormData(form).entries());
      const dateTxt = d.data ? new Date(d.data + "T12:00:00").toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) : "";
      const righe = [
        (urgent && urgent.checked ? "URGENTE — " : "") + "Buongiorno, vorrei prenotare una visita presso lo Studio Dentistico Colombo.",
        "Nome: " + d.nome, "Telefono: " + d.telefono,
        d.per ? "La visita è per: " + d.per : null,
        d.paziente ? "Sono: " + d.paziente : null,
        d.trattamento ? "Motivo / trattamento: " + d.trattamento : null,
        dateTxt ? "Giorno preferito: " + dateTxt : null,
        d.fascia && d.fascia !== "Indifferente" ? "Fascia oraria preferita: " + d.fascia : null,
        d.note ? "Note: " + d.note : null
      ].filter(Boolean).join("\n");
      const url = "https://wa.me/" + S.whatsappHref + "?text=" + encodeURIComponent(righe);
      const mail = "mailto:" + S.email + "?subject=" + encodeURIComponent("Richiesta di prenotazione dal sito — " + d.nome) + "&body=" + encodeURIComponent(righe);
      status.className = "form-status ok";
      status.innerHTML = 'Richiesta pronta. <a class="link-underline" href="' + url + '" target="_blank" rel="noopener">Apri WhatsApp per inviarla</a> · <button type="button" class="link-underline" data-again-copy>Copia il testo</button> · <a class="link-underline" href="' + mail + '">Invia per email</a>';
      const cb = $("[data-again-copy]", status); cb && cb.addEventListener("click", () => copyText(righe, "Testo copiato"));
      const w = window.open(url, "_blank", "noopener"); if (!w) toast("Tocca «Apri WhatsApp» per inviare la richiesta");
      status.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
    });
  }

  /* ------------------------------------------------------------------ *
   *  Varie: WhatsApp flottante, anteprima dei collegamenti, ritorno bfcache
   * ------------------------------------------------------------------ */
  function initWaFloat() {
    const waFloat = $(".wa-float"), waQuick = $(".qa-whatsapp");
    if (!waFloat || !waQuick || !window.matchMedia("(max-width: 640px)").matches) return;
    waFloat.classList.add("is-hidden");
    new IntersectionObserver((es) => es.forEach((en) => waFloat.classList.toggle("is-hidden", en.isIntersecting)), { threshold: 0 }).observe(waQuick);
  }
  function initPrefetch() {
    if (navigator.connection && (navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType || ""))) return;
    const done = new Set();
    const pre = (a) => {
      if (!a || !a.href || a.target === "_blank" || done.has(a.href)) return;
      const u = new URL(a.href, location.href);
      if (u.origin !== location.origin || u.pathname === location.pathname || !/\.html?$|\/$/.test(u.pathname)) return;
      done.add(a.href);
      const l = document.createElement("link"); l.rel = "prefetch"; l.href = u.href; document.head.appendChild(l);
    };
    document.addEventListener("pointerover", (e) => { if (e.pointerType === "mouse") pre(e.target.closest && e.target.closest("a")); }, { passive: true });
    document.addEventListener("touchstart", (e) => pre(e.target.closest && e.target.closest("a")), { passive: true });
  }

  /* ------------------------------------------------------------------ */
  function boot() {
    run(fillDynamicLinks);
    run(initNav);
    run(initScrollUI);
    run(initHeroReveal);
    run(initAnimations);
    run(renderOpenStatus);
    run(renderHoursTable);
    run(initFinder);
    run(initRail);
    run(initViewerTriggers);
    run(initSearch);
    run(initFilters);
    run(initToc);
    run(initMap);
    run(initReviews);
    run(initContactForm);
    run(initBookingForm);
    run(initCopyAndVcard);
    run(initWaFloat);
    run(initPrefetch);
    setInterval(renderOpenStatus, 60000);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) { renderOpenStatus(); renderHoursTable(); } });
    window.addEventListener("pageshow", (e) => { if (e.persisted) { renderOpenStatus(); updateScroll(); } });
    window.__studio = { openScheda: openScheda, toast: toast };
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();

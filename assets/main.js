/* ===================================================================
   Roaa Basil portfolio - behaviour
   Language switch, grid, lightbox, theme and scroll reveals.
   =================================================================== */
(function () {
  "use strict";

  var root  = document.documentElement;
  var total = WORKS.length;
  var lang  = root.lang === "ar" ? "ar" : "en";   /* English is the default */

  function pad(n) { return String(n).padStart(2, "0"); }

  /* Pick a language out of a { en, ar } field. Falls back to English
     so a half-finished translation never leaves a blank on the page. */
  function pick(field) {
    if (field === null || field === undefined) { return ""; }
    if (typeof field === "string") { return field; }
    return field[lang] || field.en || "";
  }

  function t(key) { return I18N[lang][key]; }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ================= the grid ================================== */
  var grid = document.getElementById("grid");

  function buildGrid() {
    grid.innerHTML = "";
    WORKS.forEach(function (w, i) {
      var title = pick(w.title);
      var btn = document.createElement("button");
      btn.className = "piece reveal";
      btn.type = "button";
      btn.setAttribute("aria-label", t("openAria")(title));
      btn.style.transitionDelay = (i % 3) * 70 + "ms";

      btn.innerHTML =
        '<div class="piece-img" data-view="' + esc(t("viewLabel")) + '">' +
          '<img src="assets/thumbs/' + w.file + '"' +
               ' alt="' + esc(pick(w.alt)) + '"' +
               ' loading="' + (i < 3 ? "eager" : "lazy") + '" decoding="async">' +
        "</div>" +
        '<p class="piece-cat">' + esc(pick(w.cat)) + "</p>" +
        '<h3 class="piece-title">' + esc(title) + "</h3>" +
        '<p class="piece-note">' + esc(pick(w.note)) + "</p>" +
        (w.tag ? '<span class="piece-tag">' + esc(pick(w.tag)) + "</span>" : "");

      btn.addEventListener("click", function () { open(i); });
      grid.appendChild(btn);
    });
    document.getElementById("workCount").textContent = t("workCount")(total);
    watchReveals();
  }

  /* ================= language ================================== */
  function applyLanguage() {
    var d = I18N[lang];
    root.lang = lang;
    root.dir  = d.dir;
    document.title = d.docTitle;

    document.querySelectorAll("[data-t]").forEach(function (el) {
      var v = d[el.dataset.t];
      if (typeof v === "string") { el.textContent = v; }
    });
    document.querySelectorAll("[data-t-html]").forEach(function (el) {
      var v = d[el.dataset.tHtml];
      if (typeof v === "string") { el.innerHTML = v; }
    });
    document.querySelectorAll("[data-t-aria]").forEach(function (el) {
      var v = d[el.dataset.tAria];
      if (typeof v === "string") { el.setAttribute("aria-label", v); }
    });

    buildGrid();
    if (!lb.hidden) { show(current); }
  }

  document.getElementById("langBtn").addEventListener("click", function () {
    lang = lang === "en" ? "ar" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
    applyLanguage();
  });

  /* ================= lightbox ================================== */
  var lb      = document.getElementById("lb");
  var lbImg   = document.getElementById("lbImg");
  var lbCat   = document.getElementById("lbCat");
  var lbTitle = document.getElementById("lbTitle");
  var lbNote  = document.getElementById("lbNote");
  var lbIdx   = document.getElementById("lbIdx");
  var current = 0;
  var lastFocus = null;

  function show(i) {
    current = (i + total) % total;
    var w = WORKS[current];
    lbImg.src = "assets/work/" + w.file;
    lbImg.alt = pick(w.alt);
    lbCat.textContent   = pick(w.cat);
    lbTitle.textContent = pick(w.title);
    lbNote.textContent  = pick(w.note);
    lbIdx.textContent   = pad(current + 1) + " / " + pad(total);
  }

  function open(i) {
    lastFocus = document.activeElement;
    lb.hidden = false;
    show(i);
    requestAnimationFrame(function () { lb.classList.add("open"); });
    document.body.classList.add("lb-open");
    document.getElementById("lbClose").focus();
  }

  function close() {
    lb.classList.remove("open");
    document.body.classList.remove("lb-open");
    window.setTimeout(function () { lb.hidden = true; }, 300);
    if (lastFocus) { lastFocus.focus(); }
  }

  document.getElementById("lbClose").addEventListener("click", close);
  document.getElementById("lbPrev").addEventListener("click", function () { show(current - 1); });
  document.getElementById("lbNext").addEventListener("click", function () { show(current + 1); });

  lb.addEventListener("click", function (e) {
    if (e.target === lb || e.target.classList.contains("lb-stage")) { close(); }
  });

  document.addEventListener("keydown", function (e) {
    if (lb.hidden) { return; }
    var back = root.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
    var fwd  = root.dir === "rtl" ? "ArrowLeft"  : "ArrowRight";
    if (e.key === "Escape") { close(); }
    if (e.key === back)     { show(current - 1); }
    if (e.key === fwd)      { show(current + 1); }
  });

  var x0 = null;
  lb.addEventListener("touchstart", function (e) { x0 = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (x0 === null) { return; }
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 55) {
      var fwd = root.dir === "rtl" ? dx > 0 : dx < 0;
      show(current + (fwd ? 1 : -1));
    }
    x0 = null;
  }, { passive: true });

  /* ================= theme ===================================== */
  document.getElementById("themeBtn").addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    var next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
  });

  /* ================= mobile menu =============================== */
  var navEl   = document.getElementById("nav");
  var menuBtn = document.getElementById("menuBtn");

  function setMenu(open) {
    navEl.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", I18N[lang][open ? "menuCloseAria" : "menuAria"]);
  }

  menuBtn.addEventListener("click", function () {
    setMenu(!navEl.classList.contains("open"));
  });

  /* Tapping a link should navigate and close, not leave the panel open. */
  document.querySelectorAll("#navLinks a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });

  document.addEventListener("click", function (e) {
    if (!navEl.classList.contains("open")) { return; }
    if (!navEl.contains(e.target)) { setMenu(false); }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navEl.classList.contains("open")) {
      setMenu(false);
      menuBtn.focus();
    }
  });

  /* Coming back to a wide viewport must not leave the panel stuck open. */
  window.matchMedia("(min-width: 721px)").addEventListener("change", function (e) {
    if (e.matches) { setMenu(false); }
  });

  /* ================= sticky nav hairline ======================= */
  var nav = document.getElementById("nav");
  var onScroll = function () { nav.classList.toggle("is-stuck", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ================= reveal on scroll ========================== */
  var io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.02 });
  }

  function watchReveals() {
    var items = document.querySelectorAll(".reveal:not(.in)");
    if (!io) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    items.forEach(function (el) { io.observe(el); });
  }

  /* ================= go ======================================== */
  document.getElementById("yr").textContent = new Date().getFullYear();
  applyLanguage();
})();

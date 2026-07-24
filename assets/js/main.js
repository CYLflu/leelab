// ---- Scroll reveal (reusable; also runs on dynamically added .reveal) ----
function observeReveal() {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { io.observe(el); });
}
window.observeReveal = observeReveal;

// ---- Pagination helpers (publications) ----
function currentPage() {
  var p = parseInt(new URLSearchParams(location.search).get('page'), 10);
  return (p && p > 0) ? p : 1;
}
function renderPager(elId, page, total) {
  var el = document.getElementById(elId);
  if (!el || total <= 1) { return; }
  var base = location.pathname.split('/').pop() || 'index.html';
  function cell(p, label, state) {
    if (state === 'disabled') return '<span class="disabled">' + label + '</span>';
    if (state === 'current') return '<span class="current">' + label + '</span>';
    return '<a href="' + base + '?page=' + p + '">' + label + '</a>';
  }
  var html = cell(page - 1, '‹ Prev', page <= 1 ? 'disabled' : '');
  for (var i = 1; i <= total; i++) { html += cell(i, i, i === page ? 'current' : ''); }
  html += cell(page + 1, 'Next ›', page >= total ? 'disabled' : '');
  el.innerHTML = html;
}
window.currentPage = currentPage;
window.renderPager = renderPager;

// ---- Mobile nav + year ----
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () { links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (a.classList.contains('dropdown-toggle')) return; // handled separately
        links.classList.remove('open');
      });
    });
  }

  // Dropdown menu (Teams): toggle on click for touch / mobile
  document.querySelectorAll('.dropdown-toggle').forEach(function (t) {
    t.addEventListener('click', function (e) {
      e.preventDefault();
      var li = t.closest('.has-dropdown');
      if (!li) return;
      var open = li.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  observeReveal();
});

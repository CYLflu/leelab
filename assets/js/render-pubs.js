(function () {
  var DATA = window.PUBLICATIONS || [];
  var list = document.getElementById('pub-list');
  if (!list) return;

  var perPage = 10;
  var n = DATA.length;
  var total = Math.max(1, Math.ceil(n / perPage));
  var page = Math.min(window.currentPage ? window.currentPage() : 1, total);
  var start = (page - 1) * perPage;
  var items = DATA.slice(start, start + perPage);

  var html = '';
  var lastYear = null;

  items.forEach(function (p, i) {
    if (p.year !== lastYear) {
      html += '<li class="pub-year reveal">' + p.year + '</li>';
      lastYear = p.year;
    }
    var idx = String(n - (start + i)).padStart(2, '0');
    var titleHtml = p.url
      ? '<a href="' + p.url + '" target="_blank" rel="noopener">' + p.title + '</a>'
      : p.title;
    var impact = '';
    if (p.impact) {
      var m = p.impact.match(/([0-9]+(?:\.[0-9]+)?)/);
      var cls = (m && parseFloat(m[1]) >= 5) ? ' impact-high' : ' impact-low';
      impact = '<span class="impact' + cls + '">' + p.impact + '</span>';
    }
    html += '<li class="pub reveal">' +
      '<div class="idx">' + idx + '</div>' +
      '<div>' +
        '<h3>' + titleHtml + '</h3>' +
        '<div class="authors">' + p.authors + '</div>' +
        '<div class="meta"><span class="venue">' + p.venue + '</span>' + impact + '</div>' +
      '</div></li>';
  });

  list.innerHTML = html;
  if (window.renderPager) window.renderPager('pub-pager', page, total);
  if (window.observeReveal) window.observeReveal();
})();

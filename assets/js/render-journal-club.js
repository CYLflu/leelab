(function () {
  var DATA = window.JOURNAL_CLUB || [];

  var list = document.getElementById('jc-list');
  if (!list) return;

  var perPage = 10;
  var total = Math.max(1, Math.ceil(DATA.length / perPage));
  var page = Math.min(window.currentPage(), total);
  var start = (page - 1) * perPage;
  var items = DATA.slice(start, start + perPage);

  list.innerHTML = items.map(function (jc) {
    var summary = (jc.summary || []).map(function (p) { return '<p>' + p + '</p>'; }).join('');
    var pdfLink = jc.pdf
      ? '<a class="jc-pdf" href="' + jc.pdf + '" target="_blank" rel="noopener">📄 원문 PDF 보기 &rarr;</a>'
      : '';

    return '<li class="jc-card reveal">' +
      '<div class="jc-date">' + jc.date + '</div>' +
      '<h3>' + jc.title + '</h3>' +
      '<div class="jc-citation">' + (jc.citation || '') + '</div>' +
      '<div class="jc-summary">' + summary + '</div>' +
      pdfLink +
      '</li>';
  }).join('');

  window.renderPager('jc-pager', page, total);
  if (window.observeReveal) window.observeReveal();
})();

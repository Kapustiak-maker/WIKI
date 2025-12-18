
let currentLang = 'ru';
let pageHistory = [];

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-ru]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-ru-title]').forEach(el => {
    const title = el.getAttribute('data-' + lang + '-title');
    if (title) el.textContent = title;
  });

  // Перезагрузить контент страницы с новым языком если она уже загружена
  if (pageHistory.length > 0) {
    const currentPage = pageHistory[pageHistory.length - 1];
    loadPage(currentPage);
  }
}

setLang('ru');

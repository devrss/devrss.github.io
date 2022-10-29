let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function () {
  page.classList.toggle('light-theme');
};

// cards change
let row = document.querySelector('.portfolio');
let cardsLook = document.querySelector('.btn-sm');

cardsLook.onclick = function () {
  row.classList.toggle('list-view');
}

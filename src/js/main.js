// Строка поиска
const btnSearch = document.querySelector(".btn-search");
const search = document.querySelector(".header__search");

btnSearch.addEventListener('click', function () {
  if (search.classList.contains('header__search--none')) {
    search.classList.remove('header__search--none');
  }
  else {
    search.classList.add('header__search--none');
  }
})
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    search.classList.add('header__search--none');
  }
});

// Основное меню
const btnMenu = document.querySelector(".btn-burger")
const menu = document.querySelector(".header__nav")

btnMenu.addEventListener('click', function () {
  if (menu.classList.contains("header__nav")) {
    menu.classList.remove("header__nav");
  }
  else {
    menu.classList.add("header__nav");
  }
})

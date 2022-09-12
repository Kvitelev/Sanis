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

// Popup
const btnPopup = document.querySelector(".contract__btn");
const btnClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

btnPopup.addEventListener('click', function () {
  popup.style.display = 'block';
})
btnClose.addEventListener('click', function () {
  popup.style.display = 'none';
})
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.style.display = 'none';
  }
});

// Воизпроведение видео
const video = document.querySelectorAll(".production__video");
const btnPlay = document.querySelector(".production__controls")

for (let i =0; i < video.length; i++) {
  btnPlay.addEventListener('click', function () {
    video[i].play();
    btnPlay.style.display = 'none';
  })
}

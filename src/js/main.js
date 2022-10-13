// Строка поиска
const btnSearch = document.querySelector(".btn-search");
const btnFormClose = document.querySelector(".header__form-close");
const headerForm = document.querySelector(".header__form");

btnSearch.addEventListener('click', () => {
  headerForm.style.display = 'block';
})

btnFormClose.addEventListener('click', () => {
  headerForm.style.display = 'none';
})

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    headerForm.style.display = 'none';
  }
});

// Основное меню
const btnMenu = document.querySelector(".btn-burger")
const menu = document.querySelector(".header__nav")

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('header__nav');
})

// Popup
const btnPopup = document.querySelector(".contract__btn");
const btnClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");


btnPopup.addEventListener('click', () => {
  popup.style.display = 'block';
})

btnClose.addEventListener('click', () => {
  popup.style.display = 'none';
})

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    popup.style.display = 'none';
  }
})

// Воизпроведение видео
const videos = document.querySelectorAll(".production__video");
const btnPlay = document.querySelector(".production__controls")
const btnPause = document.querySelector(".production__controls--pause")

for (let video of videos) {
  btnPlay.addEventListener('click', () => {
    video.play();
    btnPlay.style.display = 'none';
    btnPause.style.display = 'block';
  })

  btnPause.addEventListener('click', () => {
    video.pause();
    btnPlay.style.display = 'block';
    btnPause.style.display = 'none';
  })
}

// Адресса
const map = document.querySelector('.addresses__map');
const mapList = document.querySelector('.addresses__list');
const btnMap = document.querySelectorAll('.addresses__btn-toggle');
const toggle = document.querySelector('.addresses__toggle');

for (let i = 0; i < btnMap.length; i++) {
  btnMap[0].addEventListener('click', () => {
    mapList.style.display = 'none';
    map.style.display = 'block';
    btnMap[0].classList.add('addresses__btn-toggle--active');
    btnMap[1].classList.remove('addresses__btn-toggle--active');
    toggle.style.transform = 'translateX(0px)';
  })
  btnMap[1].addEventListener('click', () => {
    map.style.display = 'none';
    mapList.style.display = 'block';
    btnMap[1].classList.add('addresses__btn-toggle--active');
    btnMap[0].classList.remove('addresses__btn-toggle--active');
    toggle.style.transform = 'translateX(25px)';
  })
}

toggle.addEventListener('click', () => {
  if (btnMap[0].classList.contains('addresses__btn-toggle--active')) {
    map.style.display = 'none';
    mapList.style.display = 'block';
    btnMap[1].classList.add('addresses__btn-toggle--active');
    btnMap[0].classList.remove('addresses__btn-toggle--active');
    toggle.style.transform = 'translateX(25px)';
  }
  else {
    mapList.style.display = 'none';
    map.style.display = 'block';
    btnMap[0].classList.add('addresses__btn-toggle--active');
    btnMap[1].classList.remove('addresses__btn-toggle--active');
    toggle.style.transform = 'translateX(0px)';
  }
})


// filtersBtnType.onclick = function () {
//   console.log('click');
//   for (let filtersList of filtersLists) {
//     filtersList.style.display = 'none';
//   }
// };

// const filtersToggles = (btn, lists) => {

//   return;
// }
// filtersToggles(filtersBtnType, filtersList);
// Слайдер
let slideIndex = 1;

function plusSlides (n) {
  showSlides(slideIndex += n)
}

function currentSlide (n) {
  showSlides(slideIndex = n)
}

function showSlides (n) {
  let i;
  let slides = document.querySelectorAll(".header__slider");
  // let toggle =  document.getElementsByClassName('header__toggle');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // for (i = 0; i < toggle.length; i++) {
  //   slides[i].className = toggle[i].classList.add('header__toggle--active');
  // }

  slides[slideIndex - 1].style.display = "block";
  // toggle[slideIndex - 1].classList += 'header__toggle--active';
}
showSlides(slideIndex);

// function showSlides2(n) {
//   let i;
//   let contractItem = document.getElementsByClassName("contract__item");
//   let toggle =  document.getElementsByClassName('contract__toggle-btn');

//   if (n > contractItem.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = contractItem.length;
//   }

//   for (i = 0; i < contractItem.length; i++) {
//     contractItem[i].style.display = "none"
//   }

//   for (i = 0; i < toggle.length; i++) {
//     contractItem[i].className = toggle[i].className.replace("active", "")
//   }

//   contractItem[slideIndex - 1].style.display = "block";
//   toggle[slideIndex - 1].className += "active";
// }
// showSlides2(slideIndex);


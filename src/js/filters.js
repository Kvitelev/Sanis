const filtersBtn = document.querySelectorAll('.filters__list-btn');
const filtersBtnIcon = document.querySelectorAll('.filters__list-btn-icon');
const filtersList = document.querySelectorAll('.filters__list');
const filtersListPrise = document.querySelector('.filters__prise-box');

filtersBtn[0].addEventListener('click', () => {
  if (!filtersList[0].classList.contains('close')) {
    filtersList[0].style.display  = 'none';
    filtersBtnIcon[0].style.transform = 'rotate(0deg)';
    filtersList[0].classList.add('close');
  } else {
    filtersList[0].style.display  = 'block';
    filtersBtnIcon[0].style.transform = 'rotate(180deg)';
    filtersList[0].classList.remove('close');
  }
})

filtersBtn[1].addEventListener('click', () => {
  if (!filtersListPrise.classList.contains('close')) {
    filtersListPrise.style.display  = 'none';
    filtersBtnIcon[1].style.transform = 'rotate(0deg)';
    filtersListPrise.classList.add('close');
  } else {
    filtersListPrise.style.display  = 'block';
    filtersBtnIcon[1].style.transform = 'rotate(180deg)';
    filtersListPrise.classList.remove('close');
  }
})

filtersBtn[2].addEventListener('click', () => {
  if (!filtersList[1].classList.contains('close')) {
    filtersList[1].style.display  = 'none';
    filtersBtnIcon[2].style.transform = 'rotate(0deg)';
    filtersList[1].classList.add('close');
  } else {
    filtersList[1].style.display  = 'block';
    filtersBtnIcon[2].style.transform = 'rotate(180deg)';
    filtersList[1].classList.remove('close');
  }
})

filtersBtn[3].addEventListener('click', () => {
  if (!filtersList[2].classList.contains('close')) {
    filtersList[2].style.display  = 'none';
    filtersBtnIcon[3].style.transform = 'rotate(0deg)';
    filtersList[2].classList.add('close');
  } else {
    filtersList[2].style.display  = 'block';
    filtersBtnIcon[3].style.transform = 'rotate(180deg)';
    filtersList[2].classList.remove('close');
  }
})

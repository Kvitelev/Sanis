const btnInfo = document.querySelectorAll('.product-page__btn-info');
const info = document.querySelectorAll('.product-page__description--main');

btnInfo[0].addEventListener('click', () => {
  info[0].style.display = 'block';
  info[1].style.display = 'none';
  info[2].style.display = 'none';
  btnInfo[0].classList.add('product-page__btn-info--active');
  btnInfo[1].classList.remove('product-page__btn-info--active');
  btnInfo[2].classList.remove('product-page__btn-info--active');
})

btnInfo[1].addEventListener('click', () => {
  info[0].style.display = 'none';
  info[1].style.display = 'block';
  info[2].style.display = 'none';
  btnInfo[0].classList.remove('product-page__btn-info--active');
  btnInfo[1].classList.add('product-page__btn-info--active');
  btnInfo[2].classList.remove('product-page__btn-info--active');
})

btnInfo[2].addEventListener('click', () => {
  info[0].style.display = 'none';
  info[1].style.display = 'none';
  info[2].style.display = 'block';
  btnInfo[0].classList.remove('product-page__btn-info--active');
  btnInfo[1].classList.remove('product-page__btn-info--active');
  btnInfo[2].classList.add('product-page__btn-info--active');
})

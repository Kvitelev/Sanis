const basketBtn = document.querySelector('.basket__btn-item');
const basketList = document.querySelector('.basket__list');
const closeBtn = document.querySelectorAll('.basket__btn-close');
const basketItem = document.querySelectorAll('.basket__item');

basketBtn.addEventListener('click', () => {
  if (!basketList.classList.contains('close')) {
    basketList.style.display  = 'none';
    basketList.classList.add('close');
  }
  else {
    basketList.style.display  = 'block';
    basketList.classList.remove('close');
  }
})

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', () => {
    basketItem[i].style.display = 'none';
  })
}



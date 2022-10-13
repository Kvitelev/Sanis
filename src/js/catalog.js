//Каталог
const btnFilters = document.querySelectorAll('.products__btn-filters');
const category = document.querySelector('.category');
const closeCategory = document.querySelector('.close-category');
const filters = document.querySelector('.filters');
const closeFilters = document.querySelector('.close-filters');

for (let i = 0; i < btnFilters.length; i++) {
  btnFilters[0].addEventListener('click', () => {
    category.style.display = 'block';
    btnFilters[0].style.display = 'none';
    closeCategory.style.display = 'block';
  })

  btnFilters[1].addEventListener('click', () => {
    filters.style.display = 'block';
    btnFilters[1].style.display = 'none';
    closeFilters.style.display = 'block';
  })
}

closeCategory.addEventListener('click', () => {
  category.style.display = 'none';
  closeCategory.style.display = 'none';
  btnFilters[0].style.display = 'block';
})

closeFilters.addEventListener('click', () => {
  filters.style.display = 'none';
  closeFilters.style.display = 'none';
  btnFilters[1].style.display = 'block';
})

if (window.matchMedia('(max-width: 1100px)').matches) {
  category.style.display = 'none';
  filters.style.display = 'none';
} else {
  category.style.display = 'block';
  filters.style.display = 'block';
}

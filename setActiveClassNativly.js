const setActiveClass = () => {
  const navItem = document.querySelectorAll('.vv-side-nav__item');

  navItem.forEach(item => {
    item.addEventListener('click', () => {
      resetItem();
      item.classList.add('vv-side-nav__item--active');
    })
  })
};

const resetItem = () => {
  const navItem = document.querySelectorAll('.vv-side-nav__item');

  navItem.forEach(item => {
    item.classList.remove('vv-side-nav__item--active');
    item.removeEventListener('click', () => {});
  })
};
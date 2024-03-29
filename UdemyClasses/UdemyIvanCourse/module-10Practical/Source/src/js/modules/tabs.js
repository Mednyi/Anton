const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

  function hideContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });

    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showContent(index = 0) {
    content[index].style.display = display;

    tab[index].classList.add(activeClass);
  }

  hideContent();
  showContent();

  // We use a delegation event to parentNode of the tabs
  header.addEventListener('click', (event) => {
    const target = event.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
      tab.forEach((item, index) => {
        if (target == item || target.parentNode == item) {
          hideContent();
          showContent(index);
        }
      });
    }
  });
};

export default tabs;

const menuButtonOpen = document.querySelector('[data-set="btn-open"]');
const menuButtonClose = document.querySelector('[data-set="btn-close"]');
const nav = document.querySelector('[data-set="nav"]');
const menuList = document.querySelector('[data-set="menu"]');
const body = document.querySelector('body');

const menuToggle = () => {
  const onButtonClick = () => {
    nav.classList.toggle('is-open');
    menuButtonOpen.classList.toggle('is-open');
    menuButtonClose.classList.toggle('is-open');
    body.classList.toggle('is-open');
  };

  menuButtonOpen.addEventListener('click', onButtonClick);
  menuButtonClose.addEventListener('click', onButtonClick);

  menuList.addEventListener('click', onButtonClick);
};

export {menuToggle};

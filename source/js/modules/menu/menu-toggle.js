
const menuButtonOpen = document.querySelector('[data-set="btn-open"]');
const menuButtonClose = document.querySelector('[data-set="btn-close"]');
const nav = document.querySelector('[data-set="nav"]');
const menuList = document.querySelector('[data-set="menu"]');
const wrapper = document.querySelector('[data-set="wrapper"]');

const onMenuClick = () => {
  if (nav.classList.contains('is-open')) {
    nav.classList.toggle('is-open');
    menuButtonOpen.classList.toggle('is-open');
    menuButtonClose.classList.toggle('is-open');
    wrapper.classList.toggle('is-open');
    document.body.style.overflow = 'scroll';
    menuList.removeEventListener('click', onMenuClick);
  }
};

const onButtonClick = () => {
  nav.classList.toggle('is-open');
  menuButtonOpen.classList.toggle('is-open');
  menuButtonClose.classList.toggle('is-open');
  wrapper.classList.toggle('is-open');

  if (nav.classList.contains('is-open')) {
    document.body.style.overflow = 'hidden';
    menuList.addEventListener('click', onMenuClick);
  } else {
    document.body.style.overflow = 'scroll';
    menuList.removeEventListener('click', onMenuClick);
  }
};


const menuToggle = () => {
  menuButtonOpen.addEventListener('click', onButtonClick);
  menuButtonClose.addEventListener('click', onButtonClick);
};

export {menuToggle};

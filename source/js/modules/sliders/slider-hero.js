import Swiper from '../../vendor/swiper';
const sliderHero = document.querySelector('[data-set="hero-slider"]');
const paginationHero = document.querySelector('[data-set="hero-pagination"]');

const initSliderHero = () => {

  const newSliderHero = new Swiper(sliderHero, {

    pagination: {
      el: paginationHero,
      clickable: true,
    },

    keyboard: {
      enbled: true,
      onlyInViewport: true,
    },

    loop: true,
  });

  return newSliderHero;
};

const createSliderHero = () => {
  if (document.body.contains(sliderHero)) {
    initSliderHero();
  }
};

export {createSliderHero};

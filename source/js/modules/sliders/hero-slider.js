import Swiper from '../../vendor/swiper';
const sliderHero = document.querySelector('[data-set="hero-slider"]');
const paginationHero = document.querySelector('[data-set="hero-pagination"]');

const createSliderHero = () => {

  const swiperHero = new Swiper(sliderHero, {

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

  return swiperHero;
};

export {createSliderHero};

import Swiper from '../../vendor/swiper';

const sliderTours = document.querySelector('[data-set="tours-slider"]');
const buttonNext = document.querySelector('[data-set="tours-next"]');
const buttonPrev = document.querySelector('[data-set="tours-prev"]');

const initSliderTours = () => {

  const newSliderTours = new Swiper(sliderTours, {

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 1,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        initialSlide: 1,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 1,
      },
    },
  });
  return newSliderTours;
};

const createSliderTours = () => {
  if (document.body.contains(sliderTours)) {
    initSliderTours();
  }
};

export {createSliderTours};

import Swiper from '../../vendor/swiper';

const sliderTraining = document.querySelector('[data-set="training-slider"]');
const buttonNext = document.querySelector('[data-set="training-next"]');
const buttonPrev = document.querySelector('[data-set="training-prev"]');

const initSliderTraining = () => {

  const newSliderTraining = new Swiper(sliderTraining, {

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
        initialSlide: 4,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 1,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 3,
      },
    },
  });

  return newSliderTraining;
};

const createSliderTraining = () => {
  if (document.body.contains(sliderTraining)) {
    initSliderTraining();
  }
};

export {createSliderTraining};

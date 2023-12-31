import Swiper from '../../vendor/swiper';

const sliderReviews = document.querySelector('[data-set="reviews-slider"]');
const buttonNext = document.querySelector('[data-set="reviews-next"]');
const buttonPrev = document.querySelector('[data-set="reviews-prev"]');

const initSliderReviews = () => {

  const newSliderReviews = new Swiper(sliderReviews, {
    slidesPerView: 'auto',
    centeredSlides: false,

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1200: {
        initialSlide: 0,
        spaceBetween: 120,
      },

      768: {
        initialSlide: 0,
        spaceBetween: 30,
      },

      320: {
        initialSlide: 0,
        spaceBetween: 0,
      },
    },
    loop: true,
  });

  return newSliderReviews;
};

const createSliderReviews = () => {
  if (document.body.contains(sliderReviews)) {
    initSliderReviews();
  }
};

export {createSliderReviews};

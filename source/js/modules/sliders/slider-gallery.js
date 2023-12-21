import Swiper from '../../vendor/swiper';

const sliderGallery = document.querySelector('[data-set="gallery-slider"]');
const buttonNext = document.querySelector('[data-set="gallery-next"]');
const buttonPrev = document.querySelector('[data-set="gallery-prev"]');

const createSliderGallery = () => {

  const newSliderGallery = new Swiper(sliderGallery, {
    slidesPerView: 'auto',
    centeredSlides: false,
    loop: true,

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1200: {
        slidesPerGroup: 2,
        initialSlide: 5,
      },

      768: {
        slidesPerGroup: 2,
        initialSlide: 5,
      },

      320: {
        slidesPerGroup: 2,
        initialSlide: 5,
      },
    },
  });

  return newSliderGallery;
};

export {createSliderGallery};

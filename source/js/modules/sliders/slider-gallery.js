import Swiper from '../../vendor/swiper';

const sliderGallery = document.querySelector('[data-set="gallery-slider"]');
const buttonNext = document.querySelector('[data-set="gallery-next"]');
const buttonPrev = document.querySelector('[data-set="gallery-prev"]');

const initSliderGallery = () => {

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
        initialSlide: 0,
      },

      768: {
        slidesPerGroup: 2,
        initialSlide: 0,
      },

      320: {
        slidesPerGroup: 2,
        initialSlide: 0,
      },
    },
  });

  return newSliderGallery;
};


const createSliderGallery = () => {
  if (document.body.contains(sliderGallery)) {
    initSliderGallery();
  }
};

export {createSliderGallery};

import Swiper from '../../vendor/swiper';

const sliderAdvantages = document.querySelector('[data-set="advantages-slider"]');
const buttonNext = document.querySelector('[data-set="advantages-next"]');
const buttonPrev = document.querySelector('[data-set="advantages-prev"]');

let newSliderAdvantages = null;
const desktop = window.matchMedia('(min-width: 1200px)');

const initSliderAdvantages = () => {
  if (desktop.matches && sliderAdvantages) {

    newSliderAdvantages = new Swiper(sliderAdvantages, {
      loop: true,
      centeredSlides: true,
      slidesPerView: 3.585,
      spaceBetween: 30,
      initialSlide: 2,

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
    });
  }
};

const createSliderAdvantages = () => {
  if (!desktop.matches && newSliderAdvantages) {
    newSliderAdvantages.destroy();
  } else {
    initSliderAdvantages();
  }
};

export {createSliderAdvantages};

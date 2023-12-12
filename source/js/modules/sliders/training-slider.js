const sliderTraining = document.querySelector('[data-set="training-slider"]');
const buttonNext = document.querySelector('[data-set="training-next"]');
const buttonPrev = document.querySelector('[data-set="training-prev"]');

const createSliderTraining = () => {
  if (sliderTraining) {
    // eslint-disable-next-line
    new Swiper(sliderTraining, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 35,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }
};

export {createSliderTraining};

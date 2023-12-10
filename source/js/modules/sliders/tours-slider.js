const sliderTours = document.querySelector('[data-set="tours-slider"]');
const buttonNext = document.querySelector('[data-set="tours-next"]');
const buttonPrev = document.querySelector('[data-set="tours-prev"]');

const createSliderTours = () => {
  if (sliderTours) {
    // eslint-disable-next-line
    new Swiper(sliderTours, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }
};

export {createSliderTours};

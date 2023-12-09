const sliderHero = document.querySelector('[data-set="hero-slider"]');
const paginationHero = document.querySelector('[data-set="hero-pagination"]');

const createSliderHero = () => {
  if (sliderHero) {
    // eslint-disable-next-line
    new Swiper(sliderHero, {

      pagination: {
        el: paginationHero,
        clickable: true,
      },

      loop: true,
    });
  }
};

export {createSliderHero};

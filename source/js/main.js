import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {menuToggle} from './modules/menu/menu-toggle.js';
import {playVideo} from './modules/video/play-video.js';
import {createSliderHero} from './modules/sliders/slider-hero.js';
import {createSliderTours} from './modules/sliders/slider-tours.js';
import {createSliderTraining} from './modules/sliders/slider-training.js';
import {createSliderReviews} from './modules/sliders/slider-reviews.js';
import {createSliderAdvantages} from './modules/sliders/slider-advantages.js';
import {createSliderGallery} from './modules/sliders/slider-gallery.js';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  menuToggle();
  playVideo();
  createSliderHero();
  createSliderTours();
  createSliderTraining();
  createSliderReviews();
  createSliderAdvantages();
  createSliderGallery();
  // const form = new Form();
  // window.form = form;
  // form.init();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

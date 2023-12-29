import {iosVhFix} from './utils/ios-vh-fix';
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
  iosVhFix();
  menuToggle();
  playVideo();
  createSliderHero();
  createSliderTours();
  createSliderTraining();
  createSliderReviews();
  createSliderAdvantages();
  createSliderGallery();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});

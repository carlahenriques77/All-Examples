import SlideNav from './slidenav.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.methodInit();
slide.methodAddArrow('.prev', '.next');
slide.methodAddControl('.custom-controls');

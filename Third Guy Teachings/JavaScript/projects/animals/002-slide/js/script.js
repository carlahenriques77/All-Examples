import SlideNav from './slidenav.js';

const slide = new SlideNav('.slude', '.slide-lapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');

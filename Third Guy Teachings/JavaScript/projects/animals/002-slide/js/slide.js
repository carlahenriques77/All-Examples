import debounce from './debounce.js';

export default class classSlide {

  constructor(anySlide, anyWrapper) {

    this.anySlide = document.querySelector(anySlide);

    this.anyWrapper = document.querySelector(anyWrapper);

    this.dist = { 
      finalPosition: 0, startX: 0, movement: 0 
    }

    this.activeClass = 'active';

    this.changeEvent = new Event('changeEvent');

  }

  transition(active) {

    this.anySlide.style.transition = active ? 'transform .3s' : '';

  }

  moveSlide(distX) {

    this.dist.movePosition = distX;

    this.anySlide.style.transform = `translate3d(${distX}px, 0, 0)`;
    
  }

  updatePosition(clientX) {

    this.dist.movement = (this.dist.startX - clientX) * 1.6;

    return this.dist.finalPosition - this.dist.movement;

  }

  onStart(event) {

    let movetype;

    if (event.type === 'mousedown') {

      event.preventDefault();

      this.dist.startX = event.clientX;

      movetype = 'mousemove';

    } 
    
    else {

      this.dist.startX = event.changedTouches[0].clientX;

      movetype = 'touchmove';

    }

    this.anyWrapper.addEventListener(movetype, this.onMove);

    this.transition(false);

  }

  onMove(event) {

    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;

    const finalPosition = this.updatePosition(pointerPosition);

    this.moveSlide(finalPosition);

  }

  onEnd(event) {

    const movetype = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';

    this.anyWrapper.removeEventListener(movetype, this.onMove);

    this.dist.finalPosition = this.dist.movePosition;

    this.transition(true);

    this.changeSlideOnEnd();

  }

  changeSlideOnEnd() {

    if (this.dist.movement > 120 && this.index.next !== undefined) {

      this.activeNextSlide();

    } 
    
    else if (this.dist.movement < -120 && this.index.prev !== undefined) {

      this.activePrevSlide();

    } 
    
    else {

      this.changeSlide(this.index.active);

    }
    
  }

  addSlideEvents() {
    this.anyWrapper.addEventListener('mousedown', this.onStart);
    this.anyWrapper.addEventListener('touchstart', this.onStart);
    this.anyWrapper.addEventListener('mouseup', this.onEnd);
    this.anyWrapper.addEventListener('touchend', this.onEnd);
  }

  // Slides config

  slidePosition(anySlide) {
    const margin = (this.anyWrapper.offsetWidth - anySlide.offsetWidth) / 2;

    return -(anySlide.offsetLeft - margin);

  }

  slidesConfig() {

    this.slideArray = [...this.anySlide.children].map((element) => {

      const position = this.slidePosition(element);

      return { position, element };

    });

  }

  slidesIndexNav(index) {

    const last = this.slideArray.length - 1;

    this.index = {

      prev: index ? index - 1 : undefined,

      active: index,

      next: index === last ? undefined : index + 1,

    }

  }

  changeSlide(index) {

    const activeSlide = this.slideArray[index];

    this.moveSlide(activeSlide.position);

    this.slidesIndexNav(index);

    this.dist.finalPosition = activeSlide.position;

    this.changeActiveClass();

    this.anyWrapper.dispatchEvent(this.changeEvent);

  }

  changeActiveClass() {

    this.slideArray.forEach(item => item.element.classList.remove(this.activeClass));

    this.slideArray[this.index.active].element.classList.add(this.activeClass);
    
  }

  activePrevSlide() {

    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);

  }

  activeNextSlide() {

    if (this.index.next !== undefined) this.changeSlide(this.index.next);

  }

  onResize() {

    setTimeout(() => {

      this.slidesConfig();

      this.changeSlide(this.index.active);

    }, 1000);

  }

  addResizeEvent() {

    window.addEventListener('resize', this.onResize);

  }

  bindEvents() {

    this.onStart = this.onStart.bind(this);

    this.onMove = this.onMove.bind(this);

    this.onEnd = this.onEnd.bind(this);


    this.activePrevSlide = this.activePrevSlide.bind(this);

    this.activeNextSlide = this.activeNextSlide.bind(this);


    this.onResize = debounce(this.onResize.bind(this), 200);

  }

  init() {

    if (this.anySlide) {

      this.bindEvents();

      this.transition(true);

      this.addSlideEvents();

      this.slidesConfig();

      this.addResizeEvent();

      this.changeSlide(0);
    }

    return this;

  }
  
}
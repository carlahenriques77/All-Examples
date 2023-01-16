import debounce from './debounce.js';

export default class Slide {

  constructor(slide, wrapper) {

    this.slide = document.querySelector(slide);

    this.wrapper = document.querySelector(wrapper);

    this.dist = { 
      finalPosition: 0, startX: 0, movement: 0 
    }

    this.activeClass = 'active';

    this.changeEvent = new Event('changeEvent');

  }

  methodTransition(active) {

    this.slide.style.transition = active ? 'transform .3s' : '';

  }

  methodMoveSlide(distX) {

    this.dist.movePosition = distX;

    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
    
  }

  methodUpdatePosition(clientX) {

    this.dist.movement = (this.dist.startX - clientX) * 1.6;

    return this.dist.finalPosition - this.dist.movement;

  }

  methodOnStart(event) {

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

    this.wrapper.addEventListener(movetype, this.methodOnMove);

    this.methodtransition(false);

  }

  methodOnMove(event) {

    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;

    const finalPosition = this.methodUpdatePosition(pointerPosition);

    this.methodMoveSlide(finalPosition);

  }

  methodOnEnd(event) {

    const movetype = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';

    this.wrapper.removeEventListener(movetype, this.methodOnMove);

    this.dist.finalPosition = this.dist.movePosition;

    this.methodtransition(true);

    this.methodChangeSlideOnEnd();

  }

  methodChangeSlideOnEnd() {

    if (this.dist.movement > 120 && this.index.next !== undefined) {

      this.methodActiveNextSlide();

    } 
    
    else if (this.dist.movement < -120 && this.index.prev !== undefined) {

      this.methodActivePrevSlide();

    } 
    
    else {

      this.methodChangeSlide(this.index.active);

    }
    
  }

  methodAddSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.methodOnStart);
    this.wrapper.addEventListener('touchstart', this.methodOnStart);
    this.wrapper.addEventListener('mouseup', this.methodOnEnd);
    this.wrapper.addEventListener('touchend', this.methodOnEnd);
  }

  // Slides config

  methodSlidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;

    return -(slide.offsetLeft - margin);

  }

  methodSlidesConfig() {

    this.slideArray = [...this.slide.children].map((element) => {

      const position = this.methodSlidePosition(element);

      return { position, element };

    });

  }

  methodSlidesIndexNav(index) {

    const last = this.slideArray.length - 1;

    this.index = {

      prev: index ? index - 1 : undefined,

      active: index,

      next: index === last ? undefined : index + 1,

    }

  }

  methodChangeSlide(index) {

    const activeSlide = this.slideArray[index];

    this.methodMoveSlide(activeSlide.position);

    this.methodSlidesIndexNav(index);

    this.dist.finalPosition = activeSlide.position;

    this.methodChangeActiveClass();

    this.wrapper.dispatchEvent(this.changeEvent);

  }

  methodChangeActiveClass() {

    this.slideArray.forEach(item => item.element.classList.remove(this.activeClass));

    this.slideArray[this.index.active].element.classList.add(this.activeClass);
    
  }

  methodActivePrevSlide() {

    if (this.index.prev !== undefined) this.methodChangeSlide(this.index.prev);

  }

  methodActiveNextSlide() {

    if (this.index.next !== undefined) this.methodChangeSlide(this.index.next);

  }

  methodOnResize() {

    setTimeout(() => {

      this.methodSlidesConfig();

      this.methodChangeSlide(this.index.active);

    }, 1000);

  }

  methodAddResizeEvent() {

    window.addEventListener('resize', this.methodOnResize);

  }

  methodBindEvents() {

    this.methodOnStart = this.methodOnStart.bind(this);

    this.methodOnMove = this.methodOnMove.bind(this);

    this.methodOnEnd = this.methodOnEnd.bind(this);


    this.methodActivePrevSlide = this.methodActivePrevSlide.bind(this);

    this.methodActiveNextSlide = this.methodActiveNextSlide.bind(this);


    this.methodOnResize = debounce(this.methodOnResize.bind(this), 200);

  }

  methodInit() {

    if (this.slide) {

      this.methodBindEvents();

      this.methodtransition(true);

      this.methodAddSlideEvents();

      this.methodSlidesConfig();

      this.methodAddResizeEvent();

      this.methodChangeSlide(0);
    }

    return this;

  }
  
}
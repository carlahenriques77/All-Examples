import debounce from './debounce.js';

export default class Slide {

  constructor(constructorAnySlide, constructorAnyWrapper) {

    this.constructorAnySlide = document.querySelector(constructorAnySlide);

    this.constructorAnyWrapper = document.querySelector(constructorAnyWrapper);

    this.thisPropertyAnyDist = { 
      propertyNumberFinalPosition: 0, propertyNumberStartX: 0, propertyNumberMovement: 0 
    }

    this.thisPropertyAnyActiveClass = 'active';

    this.thisPropertyAnyChangeEvent = new Event('changeEvent');

  }

  methodTransition(parameterAnyTransitionActive) {

    this.constructorAnySlide.style.transition = parameterAnyTransitionActive ? 'transform .3s' : '';

  }

  methodMoveSlide(anyMoveSlideDistX) {

    this.thisPropertyAnyDist.anyMovePosition = anyMoveSlideDistX;

    this.constructorAnySlide.style.transform = `translate3d(${anyMoveSlideDistX}px, 0, 0)`;
    
  }

  methodUpdatePosition(anyUpdatePositionClientX) {

    this.thisPropertyAnyDist.propertyNumberMovement = (this.thisPropertyAnyDist.propertyNumberStartX - anyUpdatePositionClientX) * 1.6;

    return this.thisPropertyAnyDist.propertyNumberFinalPosition - this.thisPropertyAnyDist.propertyNumberMovement;

  }

  methodOnStart(anyOnStartEvent) {

    let letAnyMovetype;

    if (anyOnStartEvent.type === 'mousedown') {

      anyOnStartEvent.preventDefault();

      this.thisPropertyAnyDist.propertyNumberStartX = anyOnStartEvent.clientX;

      letAnyMovetype = 'mousemove';

    } 
    
    else {

      this.thisPropertyAnyDist.propertyNumberStartX = anyOnStartEvent.changedTouches[0].clientX;

      letAnyMovetype = 'touchmove';

    }

    this.constructorAnyWrapper.addEventListener(letAnyMovetype, this.methodOnMove);

    this.methodTransition(false);

  }

  methodOnMove(anyOnMoveEvent) {

    const constAnyPointerPosition = (anyOnMoveEvent.type === 'mousemove') ? anyOnMoveEvent.clientX : anyOnMoveEvent.changedTouches[0].clientX;

    const constNumberFinalPosition = this.methodUpdatePosition(constAnyPointerPosition);

    this.methodMoveSlide(constNumberFinalPosition);

  }

  methodOnEnd(anyOnEndEvent) {

    const constMovetype = (anyOnEndEvent.type === 'mouseup') ? 'mousemove' : 'touchmove';

    this.constructorAnyWrapper.removeEventListener(constMovetype, this.methodOnMove);

    this.thisPropertyAnyDist.propertyNumberFinalPosition = this.thisPropertyAnyDist.anyMovePosition;

    this.methodTransition(true);

    this.methodChangeSlideOnEnd();

  }

  methodChangeSlideOnEnd() {

    if (this.thisPropertyAnyDist.propertyNumberMovement > 120 && this.thisPropertyIndex.propertyAnyNext !== undefined) {

      this.methodActiveNextSlide();

    } 
    
    else if (this.thisPropertyAnyDist.propertyNumberMovement < -120 && this.thisPropertyIndex.propertyNumberPrev !== undefined) {

      this.methodActivePrevSlide();

    } 
    
    else {

      this.methodChangeSlide(this.thisPropertyIndex.propertyAnyTransitionActive);

    }
    
  }

  methodAddSlideEvents() {

    this.constructorAnyWrapper.addEventListener('mousedown', this.methodOnStart);

    this.constructorAnyWrapper.addEventListener('touchstart', this.methodOnStart);

    this.constructorAnyWrapper.addEventListener('mouseup', this.methodOnEnd);

    this.constructorAnyWrapper.addEventListener('touchend', this.methodOnEnd);

  }

  // Slides config

  methodSlidePosition(constructorAnySlide) {

    const constMargin = (this.constructorAnyWrapper.offsetWidth - constructorAnySlide.offsetWidth) / 2;

    return -(constructorAnySlide.offsetLeft - constMargin);

  }

  methodSlidesConfig() {

    this.thisPropertySlideArray = [...this.constructorAnySlide.children].map((configAndChangeSlideAnyElement) => {

      const constPosition = this.methodSlidePosition(configAndChangeSlideAnyElement);

      return { constPosition, configAndChangeSlideAnyElement };

    });

  }

  methodSlidesIndexNav(parameterAnyIndex) {

    const constLast = this.thisPropertySlideArray.length - 1;

    this.thisPropertyIndex = {

      propertyNumberPrev: parameterAnyIndex ? parameterAnyIndex - 1 : undefined,

      propertyAnyTransitionActive: parameterAnyIndex,

      propertyAnyNext: parameterAnyIndex === constLast ? undefined : parameterAnyIndex + 1,

    }

  }

  methodChangeSlide(parameterAnyIndex) {

    const constActiveSlide = this.thisPropertySlideArray[parameterAnyIndex];

    this.methodMoveSlide(constActiveSlide.constPosition);

    this.methodSlidesIndexNav(parameterAnyIndex);

    this.thisPropertyAnyDist.propertyNumberFinalPosition = constActiveSlide.constPosition;

    this.methodChangeActiveClass();

    this.constructorAnyWrapper.dispatchEvent(this.thisPropertyAnyChangeEvent);

  }

  methodChangeActiveClass() {

    this.thisPropertySlideArray.forEach(parameterItem => parameterItem.configAndChangeSlideAnyElement.classList.remove(this.thisPropertyAnyActiveClass));

    this.thisPropertySlideArray[this.thisPropertyIndex.propertyAnyTransitionActive].configAndChangeSlideAnyElement.classList.add(this.thisPropertyAnyActiveClass);
    
  }

  methodActivePrevSlide() {

    if (this.thisPropertyIndex.propertyNumberPrev !== undefined) this.methodChangeSlide(this.thisPropertyIndex.propertyNumberPrev);

  }

  methodActiveNextSlide() {

    if (this.thisPropertyIndex.propertyAnyNext !== undefined) this.methodChangeSlide(this.thisPropertyIndex.propertyAnyNext);

  }

  methodOnResize() {

    setTimeout(() => {

      this.methodSlidesConfig();

      this.methodChangeSlide(this.thisPropertyIndex.propertyAnyTransitionActive);

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

    if (this.constructorAnySlide) {

      this.methodBindEvents();

      this.methodTransition(true);

      this.methodAddSlideEvents();

      this.methodSlidesConfig();

      this.methodAddResizeEvent();

      this.methodChangeSlide(0);

    }

    return this;

  }
  
}
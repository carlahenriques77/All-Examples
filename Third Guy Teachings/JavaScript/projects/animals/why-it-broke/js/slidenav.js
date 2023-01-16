import Slide from './slide.js';

export default class SlideNav extends Slide {

  constructor(constructorAnySlide, constructorAnyWrapper) {

    super(constructorAnySlide, constructorAnyWrapper);

    this.methodBindControlEvents();

  }

  methodAddArrow(anyAddArrowPrev, propertyAnyNext) {

    this.propertyAnyPrevElement = document.querySelector(anyAddArrowPrev);

    this.propertyAnyNextElement = document.querySelector(propertyAnyNext);

    this.methodAddArrowEvent();

  }

  methodAddArrowEvent() {

    this.propertyAnyPrevElement.addEventListener('click', this.methodActivePrevSlide);

    this.propertyAnyNextElement.addEventListener('click', this.methodActiveNextSlide);
    
  }

  methodHtmlUlCreateControl() {

    const constHtmlControl = document.createElement('ul');

    constHtmlControl.dataset.indexStringControl = 'slide';

    this.thisPropertySlideArray.forEach((parameterNumberIndex) => {

      constHtmlControl.innerHTML += `<li><a href="#slide${parameterNumberIndex + 1}">${parameterNumberIndex + 1}</a></li>`;

    });

    this.constructorAnyWrapper.appendChild(constHtmlControl);

    return constHtmlControl;

  }

  methodEventControl(parameterAnyItem, parameterAnyIndex) {

    parameterAnyItem.addEventListener('click', (event) => {

      event.preventDefault();

      this.methodChangeSlide(parameterAnyIndex);

    });

    this.constructorAnyWrapper.addEventListener('changeEvent', this.methodActiveControlItem);

  }

  methodActiveControlItem() {

    this.propertyAnyControlArray.forEach(parameterAnyItem => parameterAnyItem.classList.remove(this.thisPropertyAnyActiveClass));

    this.propertyAnyControlArray[this.thisPropertyIndex.propertyAnyTransitionActive].classList.add(this.thisPropertyAnyActiveClass);

  }

  methodAddControl(parameterAnyCustomControl) {

    this.propertyAnyControl = document.querySelector(parameterAnyCustomControl) || this.methodHtmlUlCreateControl();

    this.propertyAnyControlArray = [...this.propertyAnyControl.children];

    this.methodActiveControlItem();

    this.propertyAnyControlArray.forEach(this.methodEventControl);

  }

  methodBindControlEvents() {

    this.methodEventControl = this.methodEventControl.bind(this);

    this.methodActiveControlItem = this.methodActiveControlItem.bind(this);

  }

}

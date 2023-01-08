

















function functionIntiateAnimalSlide() {

class Slide {

  constructor(slide, wrapper) {

    this.slide = document.querySelector(slide);

    this.wrapper = document.querySelector(wrapper);

    this.dist = { 
      finalPosition: 0, startX: 0, movement: 0 
    }

    this.activeClass = 'active';

    this.changeEvent = new Event('changeEvent');

  }

  transition(active) {

    this.slide.style.transition = active ? 'transform .3s' : '';

  }

  moveSlide(distX) {

    this.dist.movePosition = distX;

    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
    
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

    this.wrapper.addEventListener(movetype, this.onMove);

    this.transition(false);

  }

  onMove(event) {

    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;

    const finalPosition = this.updatePosition(pointerPosition);

    this.moveSlide(finalPosition);

  }

  onEnd(event) {

    const movetype = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';

    this.wrapper.removeEventListener(movetype, this.onMove);

    this.dist.finalPosition = this.dist.movePosition;

    this.transition(true);

    this.changeSlideOnEnd();

  }

  changeSlideOnEnd() {

    if (this.dist.movement > 120 && this.index.next !== undefined) {

      this.activeNextSlide();

    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {

      this.activePrevSlide();

    } else {

      this.changeSlide(this.index.active);

    }
    
  }
}

}
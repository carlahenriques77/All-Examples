function functionWholeIntialTabNav() {

  const constTabMenu = document.querySelectorAll(

    '[data-tab="animal-choices"] li'

  );

  const constTabDescription = document.querySelectorAll(

    '[data-tab="description"] section'

  );

  if (constTabMenu.length && constTabDescription.length) {

    constTabDescription[0].classList.add("active-description");

    function functionActiveTab(anyActiveTab) {

      constTabDescription.forEach((elementActiveTab) => {

        elementActiveTab.classList.remove("active-description");
        
      });

      constTabDescription[anyActiveTab].classList.add("active-description");

    }

    constTabMenu.forEach((elementTabMenu, numberTabMenu) => {

      elementTabMenu.addEventListener("click", () => {

        functionActiveTab(numberTabMenu);

      });

    });

  }

}

functionWholeIntialTabNav();

function functionWholeFaqQuestionToggle() {

  const constQuestions = document.querySelectorAll(

    '[data-faq="question-toggle"]'

  );

  constQuestions.forEach((elementQuestions) =>

    elementQuestions.addEventListener("click", () => {

      if (elementQuestions.classList.contains("active-question")) {

        elementQuestions.classList.toggle("active-question");

      } 
      
      else {

        constQuestions.forEach((elementQuestions) =>

          elementQuestions.classList.remove("active-question")

        );

        elementQuestions.classList.add("active-question");

      }

    })

  );

}

functionWholeFaqQuestionToggle();

function functionWholeImageToggle() {

  const constImages = document.querySelectorAll(

    '[data-choices="image-toggle"]'

  );

  constImages.forEach((elementImages) =>

    elementImages.addEventListener("click", () => {

      if (

        elementImages.classList.contains(

          "im-not-sure-on-how-to-remove-this-if-while-keeping-the-rest-of-the-code"

        )

      ) 
      
      {

        elementImages.classList.toggle("active-image");

      } 
      
      else {
        
        constImages.forEach((elementImages) =>

          elementImages.classList.remove("active-image")

        );

        elementImages.classList.add("active-image");

      }

    })

  );

}

functionWholeImageToggle();

function functionWholeScrollAnimation() {

  const constScrollAnimation = document.querySelectorAll(

    '[data-scroll="animation-scroll"]'

  );

  if (constScrollAnimation.length) {

    function functionAnimation() {

      constScrollAnimation.forEach((elementScrollAnimation) => {
        
        const constIsSectionVisible =
          elementScrollAnimation.getBoundingClientRect().top -
            window.innerHeight * 0.6 <
          0;

        if (constIsSectionVisible) {

          elementScrollAnimation.classList.add("scroll-active");

        }

      });

    }

    functionAnimation();

    window.addEventListener("scroll", functionAnimation);

  }

}

functionWholeScrollAnimation();

function functionLoginScreen() {

  const constLoginNavButton = document.querySelector('a[href="#login"]');

  const constLoginScreen = document.querySelector(".login-screen");

  constLoginNavButton.addEventListener("click", () => {

    constLoginScreen.classList.toggle("login-active");

  });

  constLoginScreen.addEventListener("click", (eventLoginScreen) => {
    if (

      eventLoginScreen.target.classList[0] === "login-close" ||
      eventLoginScreen.target.classList[0] === "login-screen"
    )
     
    {
      
      constLoginScreen.classList.toggle("login-active");

    }

  });

}

functionLoginScreen();

function functionMapAddress() {

  const constMapHover = document.querySelectorAll('[data-map="address"]');

  constMapHover.forEach((elementMapHover) => {

    elementMapHover.addEventListener("mouseover", functionOnMouseHover);

  });

  function functionMakeBox(elementMakeBox) {

    const constHoverBox = document.createElement("div");

    constHoverBox.classList.add("map-hover");

    constHoverBox.innerText = elementMakeBox.getAttribute("aria-label");

    document.body.appendChild(constHoverBox);

    return constHoverBox;

  }

  const constOnMouseMovement = {

    handleEvent(eventOnMouseMovement) {

      this.constHoverBox.style.top = eventOnMouseMovement.pageY + 20 + "px";

      this.constHoverBox.style.left = eventOnMouseMovement.pageX + 20 + "px";

    },

  };

  const constOnMouseLeave = {

    handleEvent() {

      this.constHoverBox.remove();

      this.elementMakeBox.removeEventListener("mouseleave", constOnMouseLeave);

      this.elementMakeBox.removeEventListener("mousemove", constOnMouseMovement);

    },

  };

  function functionOnMouseHover(eventOnMouseHover) {

    const constHoverBox = functionMakeBox(this);

    constOnMouseMovement.constHoverBox = constHoverBox;

    this.addEventListener("mousemove", constOnMouseMovement);

    constOnMouseLeave.constHoverBox = constHoverBox;

    constOnMouseLeave.elementMakeBox = this;

    this.addEventListener("mouseleave", constOnMouseLeave);

  }

}

functionMapAddress();

function functionOutsideCLick(

  anyElementOutsideClick,

  anyEventsOutsideClick,

  anyCallbackOutsideClick

) 

{
  const constHtml = document.documentElement;

  const constOutside = "outside";

  if (!anyElementOutsideClick.hasAttribute(constOutside)) {

    anyEventsOutsideClick.forEach((anyUserEvent) => {

      setTimeout(() =>

        constHtml.addEventListener(anyUserEvent, functionHandleOutsideClick)

      );

    });

    anyElementOutsideClick.setAttribute(constOutside, "");

  }

  function functionHandleOutsideClick(anyEventHandleOutsideClick) {

    if (!anyElementOutsideClick.contains(anyEventHandleOutsideClick.target)) {

      anyElementOutsideClick.removeAttribute(constOutside);

      anyEventsOutsideClick.forEach((anyUserEvent) => {

        constHtml.removeEventListener(anyUserEvent, functionHandleOutsideClick);

      });

      anyCallbackOutsideClick();

    }

  }

}

function functionIntiateMenuMobile() {

  const constMenuButton = document.querySelector('[data-menu="button"]');

  const constMenuUlList = document.querySelector('[data-menu="header-ul"]');

  const constClickEventArray = ["click", "touchstart"];

  if (constMenuButton) {

    function functionOpenMenu(anyEventOpenMenu) {

      anyEventOpenMenu.preventDefault()

      constMenuUlList.classList.add("dropdown-menu-active");

      constMenuButton.classList.add("dropdown-menu-active");

      functionOutsideCLick(constMenuUlList, constClickEventArray, () => {

        constMenuUlList.classList.remove("dropdown-menu-active");

        constMenuButton.classList.remove("dropdown-menu-active");

      });

    }

    constClickEventArray.forEach((stringEvent) =>

      constMenuButton.addEventListener(stringEvent, functionOpenMenu)

    );

  }

}

functionIntiateMenuMobile();

function functionIntiateNumberAnimation() {

  function functionNumberAnimation() {

    const constNumbers = document.querySelectorAll(

      '[data-number="animal-number-span"]'

    );

    constNumbers.forEach((elementNumber) => {

      const constTotal = +elementNumber.innerText;

      const constIncrease = Math.floor(constTotal / 100);

      let letStart = 0;

      const constTimer = setInterval(() => {

        letStart = letStart + constIncrease;

        elementNumber.innerText = letStart;

        if (letStart > constTotal) {

          elementNumber.innerText = constTotal;

          clearInterval(constTimer);

        }

      }, 25 * Math.random());

    });

  }

  const constObserverTarger = document.querySelector(

    '[data-numbers="section-numbers"]'

  );

  const constObserver = new MutationObserver(functionHandleMutation);

  constObserver.observe(constObserverTarger, { attributes: true });

  function functionHandleMutation(anyMutation) {

    if (anyMutation[0].target.classList.contains("scroll-active")) {

      constObserver.disconnect();

      functionNumberAnimation();

    }

  }

}

functionIntiateNumberAnimation();

function functionIntiateOpenHours() {

  const constOpenWorkingDays = document.querySelector(

    "[data-dataopenweekdays]"

  );

  const constWeekDays = constOpenWorkingDays.dataset.dataopenweekdays

    .split(",")
    .map(Number);

  const constHoursOfTheWeek = constOpenWorkingDays.dataset.dataopenhours

    .split(",")
    .map(Number);

  const constCurrentDate = new Date();

  const constCurrentDay = constCurrentDate.getDay();

  const constCurrentHours = constCurrentDate.getHours();

  const constOpenWeekDays = constWeekDays.indexOf(constCurrentDay) !== -1;

  const constOpenHours =

    constCurrentHours >= constWeekDays[0] &&
    constCurrentHours < constWeekDays[1];

  if (constOpenWeekDays && constOpenHours) {

    constOpenWorkingDays.classList.add("open-time");

  }

}

functionIntiateOpenHours();

function functionIntiateAboutDropdown() {

  const constDropDownAbout = document.querySelectorAll(

    '[data-menu="dropdown-about-li"]'

  );

  constDropDownAbout.forEach((elementAboutMenu) => {

    ["touchstart", "click"].forEach((stringUserEvent) => {

      elementAboutMenu.addEventListener(stringUserEvent, functionHandleClick);

    });

  });

  function functionHandleClick(anyEventHandleClick) {

    anyEventHandleClick.preventDefault();

    this.classList.add("about-dropdown-active");

    functionOutsideCLick(this, ["touchstart", "click"], () => {

      this.classList.remove("about-dropdown-active");

    });

  }

}

functionIntiateAboutDropdown();

function functionIntiateBitcoin() {

  fetch("https://blockchain.info/ticker")

    .then((responseBitcoin) => responseBitcoin.json())

    .then((anyBitcoin) => {

      const constBitcoinPrice = document.querySelector(

        '[data-bitcoin="bitcoin-price"]'

      );

      constBitcoinPrice.innerText = (20 / anyBitcoin.BRL.sell).toFixed(4);

    });

}

functionIntiateBitcoin();

function functionIntiateSmoothScroll() {

  const constInternalLinks = document.querySelectorAll(

    '[data-scroll="smooth"] a[href^="#"]'

  );

  function functionScrollToSection(anyEventScrollToSection) {

    anyEventScrollToSection.preventDefault();

    const constHref =

      anyEventScrollToSection.currentTarget.getAttribute("href");

    const constSectionHref = document.querySelector(constHref);

    constSectionHref.scrollIntoView({

      behavior: "smooth",

      block: "start",

    });

  }

  constInternalLinks.forEach((elementInternalLink) => {

    elementInternalLink.addEventListener("click", functionScrollToSection);

  });

}

functionIntiateSmoothScroll();

function functionIntiateAnimalSlide() {

  class classSlide {

    constructor(anySlide, anyWrapper) {

      this.anySlide = document.querySelector(anySlide);

      this.anyWrapper = document.querySelector(anyWrapper);

      this.anyDist = {

        constFinalPosition: 0,

        startX: 0,

        movement: 0,

      };

      this.anyActiveSlide = "active-slide";

      this.anyChangeEvent = new Event("changeEvent");

    }

    methodTransition(anyActive) {

      this.anySlide.style.transition = anyActive ? "transform .3s" : "";

    }

    methodMoveSlide(anyDistX) {

      this.anyDist.anyMovePosition = anyDistX;

      this.anySlide.style.transform = `translate3d(${anyDistX}px, 0, 0)`;

    }

    methodUpdatePosition(anyClientX) {

      this.anyDist.movement = (this.anyDist.startX - anyClientX) * 1.6;

      return this.anyDist.constFinalPosition - this.anyDist.movement;

    }

    methodOnStart(anyMethodStartEvent) {

      let letMoveType;

      if (anyMethodStartEvent.type === "mousedown") {

        anyMethodStartEvent.preventDefault();

        this.anyDist.startX = anyMethodStartEvent.anyClientX;

        letMoveType = "mousemove";
      } 
      
      else {

        this.anyDist.startX =

          anyMethodStartEvent.anyChangedTouches[0].anyClientX;

        letMoveType = "touchmove";

      }

      this.anyWrapper.addEventListener(letMoveType, this.methodOnMove);

    }

    methodOnMove(anyOnMoveEvent) {

      const constPointerPosition =

        anyOnMoveEvent.type === "mousemove"

          ? anyOnMoveEvent.anyClientX

          : anyOnMoveEvent.anyChangedTouches[0].anyClientX;

      const constFinalPosition =

        this.methodUpdatePosition(constPointerPosition);

      this.methodMoveSlide(constFinalPosition);

    }

    methodOnEnd(anyOnEndEvent) {

      const constMoveType =

        anyOnEndEvent.type === "mouseup" ? "mousemove" : "touchmove";

      this.anyWrapper.removeEventListener(constMoveType, this.methodOnMove);

      this.anyDist.constFinalPosition = this.anyDist.anyMovePosition;

      this.methodTransition(true);

      this.methodChangeSlideOnEnd();

    }

    methodChangeSlideOnEnd() {

      if (

        this.anyDist.movement > 120 &&
        this.propertySlideIndex.propertyNext !== undefined

      )
      
      {
        this.methodActiveNextSlide();

      } 
      
      else if (

        this.anyDist.movement < -120 &&

        this.propertySlideIndex.propertyPrev !== undefined

      ) 
      
      {
        this.methodActivePrevSlide();

      } 
      
      else {

        this.methodChangeSlide(this.propertySlideIndex.propertyActive);

      }

    }

    methodAddSlideEvents() {

      this.anyWrapper.addEventListener("mousedown", this.methodOnStart);

      this.anyWrapper.addEventListener("touchstart", this.methodOnStart);

      this.anyWrapper.addEventListener("mouseup", this.methodOnEnd);

      this.anyWrapper.addEventListener("touchend", this.methodOnEnd);

    }

    // Slides Config

    methodSlidePosition(anySlidePosition) {

      const constMargin =

        (this.anyWrapper.offsetWidth - anySlidePosition.offsetWidth) / 2;

      return -(anySlidePosition.offsetLeft - constMargin);

    }

    methodSlidesConfig() {

      this.propertySlideArray = [...this.anySlide.children].map(

        (anyConfigElement) => {

          const constPosition = this.methodSlidePosition(anyConfigElement);

          return { constPosition, anyConfigElement };

        }

      );

    }

    methodSlideIndexNav(propertySlideIndex) {

      const constLast = this.propertySlideArray.length - 1;

      this.propertySlideIndex = {

        propertyPrev: propertySlideIndex ? propertySlideIndex - 1 : undefined,

        propertyActive: propertySlideIndex,

        propertyNext:
          propertySlideIndex === constLast ? undefined : propertySlideIndex + 1,

      };

    }

    methodChangeSlide(anyChangeSlideIndex) {

      const constActiveSlide = this.propertySlideArray[anyChangeSlideIndex];

      this.methodMoveSlide(constActiveSlide.constPosition);

      this.methodSlideIndexNav(anyChangeSlideIndex);

      this.anyDist.constFinalPosition = constActiveSlide.constPosition;

      this.methodChangeActiveClass();

      this.anyWrapper.methodDispatchEvent(this.anyChangeEvent);

    }

    methodChangeActiveClass() {

      this.propertySlideArray.forEach((parameterSlideArray) =>

        parameterSlideArray.anyChangeActiveElement.classList.remove(

          this.anyChangeActiveElement

        )

      );

      this.propertySlideArray[

        this.propertySlideIndex.propertyActive

      ].anyChangeActiveElement.classList.add(this.anyActiveSlide);

    }

    methodActivePrevSlide() {

      if (this.propertySlideIndex.propertyPrev !== undefined)

        this.methodChangeSlide(this.propertySlideIndex.propertyPrev);

    }

    methodActiveNextSlide() {

      if (this.propertySlideIndex.propertyNext !== undefined)

        this.methodChangeSlide(this.propertySlideIndex.propertyNext);

    }

    methodOnResize() {

      setTimeout(() => {

        this.methodSlidesConfig();

        this.methodChangeSlide(this.propertySlideIndex.propertyActive);

      }, 1000);

    }

    methodAddResizeEvent() {

      window.addEventListener("resize", this.methodOnResize);

    }

    methodBindEvents() {

      this.methodOnStart = this.methodOnStart.bind(this);

      this.methodOnMove = this.methodOnMove.bind(this);

      this.methodOnEnd = this.methodOnEnd.bind(this);

      this.methodActivePrevSlide = this.methodActivePrevSlide.bind(this);

      this.methodActiveNextSlide = this.methodActiveNextSlide.bind(this);

      this.methodOnResize = functionDebounce (

        this.methodOnResize.bind(this),

        200
        
      );

    }

    methodIntiate() {

      if (this.anySlide) {

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

}

functionIntiateAnimalSlide();

function functionDebounce(anyDebounceCallback, anyDebounceDelay) {

  let letTimer;

  return (...args) => {

    if (letTimer) clearTimeout(letTimer);

    letTimer = setTimeout(() => {

      anyDebounceCallback(...args);

      letTimer = null;
    }, anyDebounceDelay);

  };

}

functionDebounce();

function functionStickyHeader() {

  function functionSticky() {

    if (window.pageYOffset > constSticky) {

      constHeader.classList.add("sticky-header");

    }
    
    else {

      constHeader.classList.remove("sticky-header");

    }

  }

  window.onscroll = function () {

    functionSticky();

  };

  const constHeader = document.getElementById("sticky-header-id");
  
  const constSticky = constHeader.offsetTop;

}

functionStickyHeader()

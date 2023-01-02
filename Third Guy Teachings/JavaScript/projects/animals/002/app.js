
function functionWholeIntialTabNav() {

const constTabMenu = document.querySelectorAll('[data-tab="animal-choices"] li')

const constTabDescription = document.querySelectorAll('[data-tab="description"] section')

if (constTabMenu.length && constTabDescription.length) {

  constTabDescription[0].classList.add('active')

  function functionActiveTab(anyActiveTab) {

    constTabDescription.forEach((elementActiveTab) => {

      elementActiveTab.classList.remove('active')

    })

    constTabDescription[anyActiveTab].classList.add('active')

  }
  
  constTabMenu.forEach((elementTabMenu, numberTabMenu) => {

    elementTabMenu.addEventListener('click', () => {

      functionActiveTab(numberTabMenu)

    })

  })

}

} 

functionWholeIntialTabNav() // How to close the thing, basically. That will allow us to write the same names with less problems happening because of already existing ones


function functionWholeFaqQuestionToggle() {

const constQuestions = document.querySelectorAll('[data-faq="question-toggle"]')

constQuestions.forEach((elementQuestions) => elementQuestions.addEventListener('click', () => {

  if (elementQuestions.classList.contains('active-question')) {

    elementQuestions.classList.toggle('active-question')
  } 
  
  else {

    constQuestions.forEach((elementQuestions) => elementQuestions.classList.remove('active-question'))
    
    elementQuestions.classList.add('active-question')

  }

}))

} 

functionWholeFaqQuestionToggle()


function functionWholeScrollAnimation() {

  const constScrollAnimation = document.querySelectorAll('[data-scroll="animation-scroll"]')

  if (constScrollAnimation.length) {

    function functionAnimation() {

      constScrollAnimation.forEach((elementScrollAnimation) => {

        const constIsSectionVisible = (elementScrollAnimation.getBoundingClientRect().top - window.innerHeight * 0.6) < 0
        
        if (constIsSectionVisible) {

          elementScrollAnimation.classList.add('scroll-active')

        }
        
      })

    }

    functionAnimation()

    window.addEventListener('scroll', functionAnimation)

  }
}

functionWholeScrollAnimation()


function functionLoginScreen() {

const constLoginNavButton = document.querySelector('a[href="#login"]') // How to do an Href

const constLoginScreen = document.querySelector('.login-screen')

constLoginNavButton.addEventListener('click', () => {

  constLoginScreen.classList.toggle('login-active')

})

constLoginScreen.addEventListener('click', (eventLoginScreen) => {

  if (eventLoginScreen.target.classList[0] === 'login-close' || eventLoginScreen.target.classList[0] === 'login-screen') {

    constLoginScreen.classList.toggle('login-active')

  }

})

}

functionLoginScreen()


function functionMapAddress() {

const constMapHover = document.querySelectorAll('[data-map="address"]')

constMapHover.forEach((elementMapHover) => {

  elementMapHover.addEventListener('mouseover', functionOnMouseHover)

})

function functionMakeBox(elementMakeBox) {

  const constHoverBox = document.createElement('div')

  constHoverBox.classList.add('map-hover')

  constHoverBox.innerText = elementMakeBox.getAttribute('aria-label')

  document.body.appendChild(constHoverBox)

  return constHoverBox

}

const constOnMouseMovement = {

  // Apparently, it HAS to be called Handle Event... Didn't knew that there were things like this on here
  handleEvent(eventOnMouseMovement) {

    this.constHoverBox.style.top = eventOnMouseMovement.pageY + 20 + 'px'

    this.constHoverBox.style.left = eventOnMouseMovement.pageX + 20 + 'px'
  }

}

const constOnMouseLeave = {

  handleEvent() {

    this.constHoverBox.remove()

    this.elementMakeBox.removeEventListener('mouseleave', constOnMouseLeave)

    this.elementMakeBox.removeEventListener('mousemove', constOnMouseMovement)

  }

}

function functionOnMouseHover(eventOnMouseHover) {

  const constHoverBox = functionMakeBox(this)

  constOnMouseMovement.constHoverBox = constHoverBox

  this.addEventListener('mousemove', constOnMouseMovement)

  constOnMouseLeave.constHoverBox = constHoverBox

  constOnMouseLeave.elementMakeBox = this

  this.addEventListener('mouseleave', constOnMouseLeave)

}

}

functionMapAddress()



// The Imported "Outside Click" part


function functionOutsideCLick(anyElementOutsideClick, anyEventsOutsideClick, anyCallbackOutsideClick) {

const constHtml = document.documentElement

const constOutside = 'outside' // The Tag that will somehow be given to it

if(!anyElementOutsideClick.hasAttribute(constOutside)) {

  anyEventsOutsideClick.forEach(anyUserEvent => {

    setTimeout(() => constHtml.addEventListener(anyUserEvent, functionHandleOutsideClick))

  })

  anyElementOutsideClick.setAttribute(constOutside, '')

}

  function functionHandleOutsideClick(anyEventHandleOutsideClick) {

    if (!anyElementOutsideClick.contains(anyEventHandleOutsideClick.target)) {

      anyElementOutsideClick.removeAttribute(constOutside)

      anyEventsOutsideClick.forEach(anyUserEvent => {

        constHtml.removeEventListener(anyUserEvent, functionHandleOutsideClick)

      })

      anyCallbackOutsideClick()

    }

  }
  
}

function functionIntiateMenuMobile() {


const constMenuButton = document.querySelector('[data-menu="button"]')

const constMenuUlList = document.querySelector('[data-menu="header-ul"]')

const constClickEventArray = ['click', 'touchstart']

if (constMenuButton) {

  function functionOpenMenu(anyEventOpenMenu) {
    
    constMenuUlList.classList.add('dropdown-menu-active')

    constMenuButton.classList.add('dropdown-menu-active')

    functionOutsideCLick(constMenuUlList, constClickEventArray, () => {

      constMenuUlList.classList.remove('dropdown-menu-active')

      constMenuButton.classList.remove('dropdown-menu-active')

    })

  }

  constClickEventArray.forEach(stringEvent => constMenuButton.addEventListener(stringEvent, functionOpenMenu))

  }

}

functionIntiateMenuMobile()


function functionIntiateNumberAnimation() {

  function functionNumberAnimation() {

    const constNumbers = document.querySelectorAll('[data-number="animal-number-span"]')

    constNumbers.forEach((elementNumber) => {

      const constTotal = +elementNumber.innerText

      const constIncrease = Math.floor(constTotal / 100)
      let letStart = 0

      const constTimer = setInterval(() => {

        letStart = letStart + constIncrease

        elementNumber.innerText = letStart

        if (letStart > constTotal) {

          elementNumber.innerText = constTotal
          clearInterval(constTimer)

        }

      }, 25 * Math.random())

    })

  }

  const constObserverTarger = document.querySelector('[data-numbers="section-numbers"]')

  const constObserver = new MutationObserver(functionHandleMutation)

  constObserver.observe(constObserverTarger, {attributes: true})

  function functionHandleMutation(anyMutation) {

    if (anyMutation[0].target.classList.contains('scroll-active')) {

      constObserver.disconnect()
      functionNumberAnimation()

    }

  }

}

functionIntiateNumberAnimation()


function functionIntiateOpenHours() {

  const constOpenWorkingDays = document.querySelector('[data-dataopenweekdays]')

  const constWeekDays = constOpenWorkingDays.dataset.dataopenweekdays.split(',').map(Number)

  const constHoursOfTheWeek = constOpenWorkingDays.dataset.dataopenhours.split(',').map(Number)

  const constCurrentDate = new Date()

  const constCurrentDay = constCurrentDate.getDay()

  const constCurrentHours = constCurrentDate.getHours()

  const constOpenWeekDays = constWeekDays.indexOf(constCurrentDay) !== -1

  const constOpenHours = (constCurrentHours >= constWeekDays[0] && constCurrentHours < constWeekDays[1])

  if (constOpenWeekDays && constOpenHours) {

    constOpenWorkingDays.classList.add('open-time')

  }

}

functionIntiateOpenHours() 


function functionIntiateAboutDropdown() {

  const constDropDownAbout = document.querySelectorAll('[data-menu="dropdown-about-li"]')

  constDropDownAbout.forEach(elementAboutMenu => {
    
    ['touchstart', 'click']. forEach(stringUserEvent => {

      elementAboutMenu.addEventListener(stringUserEvent, functionHandleClick)

    })

  })

  function functionHandleClick(anyEventHandleClick) {

    anyEventHandleClick.preventDefault()

    this.classList.add('about-dropdown-active')

    functionOutsideCLick(this, ['touchstart', 'click'], () => {

      this.classList.remove('about-dropdown-active')

    })

  }

}

functionIntiateAboutDropdown()




/*
  
*/
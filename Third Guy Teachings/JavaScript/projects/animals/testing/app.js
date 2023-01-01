
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
  } else {
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

/*

*/



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